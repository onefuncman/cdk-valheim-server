import * as path from 'path';
import * as ecs from 'aws-cdk-lib/aws-ecs';
import * as events from 'aws-cdk-lib/aws-events';
import * as targets from 'aws-cdk-lib/aws-events-targets';
import * as lambda from 'aws-cdk-lib/aws-lambda';
import { Construct } from 'constructs';
import { PolicyStatement } from 'aws-cdk-lib/aws-iam';
import { RetentionDays } from 'aws-cdk-lib/aws-logs';
import { Duration } from 'aws-cdk-lib';

export interface Route53DomainProps {
  assumedRole?: string;
  hostzedZone: string;
  domainName: string;
}

export interface PublicIPSupportProps {
  cluster: ecs.ICluster;
  dnsConfig?: Route53DomainProps;
}

export class PublicIPSupport extends Construct {

  constructor(scope: Construct, id: string, props: PublicIPSupportProps) {
    super(scope, id);

    const cluster = props.cluster;

    const func = new lambda.Function(this, 'PublicIPManager', {
      runtime: lambda.Runtime.PYTHON_3_9,
      handler: 'index.handler',
      code: lambda.Code.fromAsset(path.join(__dirname, 'functions/public_ip_manager')),
      timeout: Duration.seconds(10),
      logRetention: RetentionDays.TWO_WEEKS,
      initialPolicy: [
        new PolicyStatement({
          actions: ['ec2:DescribeNetworkInterfaces'],
          resources: ['*']
        }),
      ]
    });

    if (props.dnsConfig) {
      func.addEnvironment("DNS_HOSTED_ZONE", props.dnsConfig.hostzedZone)
      func.addEnvironment("DNS_DOMAIN", props.dnsConfig.domainName)

      /**
       * If we are assume a role, we just need those permissions.
       * If we are not assuming a role, we need permissions for route53
       */
      if (props.dnsConfig.assumedRole) {
        func.addEnvironment("DNS_ASSUMED_ROLE", props.dnsConfig.assumedRole)
        func.addToRolePolicy(
          new PolicyStatement({
            actions: ['sts:AssumeRole'],
            resources: [props.dnsConfig.assumedRole]
          }),
        );
      } else {
        func.addToRolePolicy(
          new PolicyStatement({
            actions: ['route53:ChangeResourceRecordSets', 'route53:ListResourceRecordSets'],
            resources: [props.dnsConfig?.hostzedZone]
          })
        )
      }
    }

    new events.Rule(this, 'ServiceRule', {
      eventPattern: {
        source: ['aws.ecs'],
        detailType: ['ECS Task State Change'],
        detail: {
          clusterArn: [cluster.clusterArn],
          lastStatus: ['RUNNING'],
        }
      },
      targets: [new targets.LambdaFunction(func)]
    });

  }
}