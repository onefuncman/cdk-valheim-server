import { Match, Template } from 'aws-cdk-lib/assertions';
import { Stack } from 'aws-cdk-lib/core';

import { ValheimServer } from '../src/index';

const stack = new Stack();
new ValheimServer(stack, 'Test');
const template = Template.fromStack(stack);

test('default vpc is created', () => {
  template.hasResourceProperties('AWS::EC2::VPC', Match.anyValue());
});

test('ECS cluster is created', () => {
  template.hasResourceProperties('AWS::ECS::Cluster', Match.anyValue());
});

test('SecurityGroup allows UDP 2456-2457 from everywhere, and 80 from the VPC', () => {
  template.hasResourceProperties('AWS::EC2::SecurityGroup', {
    SecurityGroupIngress: [
      {
        CidrIp: '0.0.0.0/0',
        Description: 'from 0.0.0.0/0:UDP 2456',
        FromPort: 2456,
        IpProtocol: 'udp',
        ToPort: 2456,
      },
      {
        CidrIp: '0.0.0.0/0',
        Description: 'from 0.0.0.0/0:UDP 2457',
        FromPort: 2457,
        IpProtocol: 'udp',
        ToPort: 2457,
      },
      {
        CidrIp: {
          'Fn::GetAtt': [
            'TestVPCBD247556',
            'CidrBlock',
          ],
        },
        Description: {
          'Fn::Join': [
            '',
            [
              'from ',
              {
                'Fn::GetAtt': [
                  'TestVPCBD247556',
                  'CidrBlock',
                ],
              },
              ':80',
            ],
          ],
        },
        FromPort: 80,
        IpProtocol: 'tcp',
        ToPort: 80,
      },
    ],
  });
});