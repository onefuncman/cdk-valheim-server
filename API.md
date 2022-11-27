# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="constructs"></a>

### ValheimServer <a name="@raykrueger/cdk-valheim-server.ValheimServer" id="raykruegercdkvalheimservervalheimserver"></a>

Builds a ValheimServer, running on ECS Fargate.

This is designed to run as cheaply as possible, which means some availability and reliability has been sacrificed.  Default configuration:     Single AZ with a Single Public Subnet     Fargate Spot capacity provider     EFS General performance file system for storage     NLB for static IP and DNS

#### Initializers <a name="@raykrueger/cdk-valheim-server.ValheimServer.Initializer" id="raykruegercdkvalheimservervalheimserverinitializer"></a>

```typescript
import { ValheimServer } from '@raykrueger/cdk-valheim-server'

new ValheimServer(scope: Construct, id: string, props?: ValheimServerProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`scope`](#raykruegercdkvalheimservervalheimserverparameterscope)<span title="Required">*</span> | [`constructs.Construct`](#constructs.Construct) | *No description.* |
| [`id`](#raykruegercdkvalheimservervalheimserverparameterid)<span title="Required">*</span> | `string` | *No description.* |
| [`props`](#raykruegercdkvalheimservervalheimserverparameterprops) | [`@raykrueger/cdk-valheim-server.ValheimServerProps`](#@raykrueger/cdk-valheim-server.ValheimServerProps) | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.parameter.scope" id="raykruegercdkvalheimservervalheimserverparameterscope"></a>

- *Type:* [`constructs.Construct`](#constructs.Construct)

---

##### `id`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.parameter.id" id="raykruegercdkvalheimservervalheimserverparameterid"></a>

- *Type:* `string`

---

##### `props`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.parameter.props" id="raykruegercdkvalheimservervalheimserverparameterprops"></a>

- *Type:* [`@raykrueger/cdk-valheim-server.ValheimServerProps`](#@raykrueger/cdk-valheim-server.ValheimServerProps)

---



#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`containerInsights`](#raykruegercdkvalheimservervalheimserverpropertycontainerinsights)<span title="Required">*</span> | `boolean` | *No description.* |
| [`cpu`](#raykruegercdkvalheimservervalheimserverpropertycpu)<span title="Required">*</span> | `number` | *No description.* |
| [`generatedServerPasswordSecretName`](#raykruegercdkvalheimservervalheimserverpropertygeneratedserverpasswordsecretname)<span title="Required">*</span> | `string` | *No description.* |
| [`image`](#raykruegercdkvalheimservervalheimserverpropertyimage)<span title="Required">*</span> | `string` | *No description.* |
| [`memoryLimitMiB`](#raykruegercdkvalheimservervalheimserverpropertymemorylimitmib)<span title="Required">*</span> | `number` | *No description.* |
| [`serverPasswordSecret`](#raykruegercdkvalheimservervalheimserverpropertyserverpasswordsecret)<span title="Required">*</span> | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | *No description.* |
| [`vpc`](#raykruegercdkvalheimservervalheimserverpropertyvpc)<span title="Required">*</span> | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | *No description.* |
| [`logging`](#raykruegercdkvalheimservervalheimserverpropertylogging) | [`aws-cdk-lib.aws_ecs.LogDriver`](#aws-cdk-lib.aws_ecs.LogDriver) | *No description.* |

---

##### `containerInsights`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.containerInsights" id="raykruegercdkvalheimservervalheimserverpropertycontainerinsights"></a>

```typescript
public readonly containerInsights: boolean;
```

- *Type:* `boolean`

---

##### `cpu`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.cpu" id="raykruegercdkvalheimservervalheimserverpropertycpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* `number`

---

##### `generatedServerPasswordSecretName`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.generatedServerPasswordSecretName" id="raykruegercdkvalheimservervalheimserverpropertygeneratedserverpasswordsecretname"></a>

```typescript
public readonly generatedServerPasswordSecretName: string;
```

- *Type:* `string`

---

##### `image`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.image" id="raykruegercdkvalheimservervalheimserverpropertyimage"></a>

```typescript
public readonly image: string;
```

- *Type:* `string`

---

##### `memoryLimitMiB`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.memoryLimitMiB" id="raykruegercdkvalheimservervalheimserverpropertymemorylimitmib"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* `number`

---

##### `serverPasswordSecret`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.serverPasswordSecret" id="raykruegercdkvalheimservervalheimserverpropertyserverpasswordsecret"></a>

```typescript
public readonly serverPasswordSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

---

##### `vpc`<sup>Required</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.vpc" id="raykruegercdkvalheimservervalheimserverpropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

---

##### `logging`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServer.property.logging" id="raykruegercdkvalheimservervalheimserverpropertylogging"></a>

```typescript
public readonly logging: LogDriver;
```

- *Type:* [`aws-cdk-lib.aws_ecs.LogDriver`](#aws-cdk-lib.aws_ecs.LogDriver)

---


## Structs <a name="Structs" id="structs"></a>

### ValheimServerProps <a name="@raykrueger/cdk-valheim-server.ValheimServerProps" id="raykruegercdkvalheimservervalheimserverprops"></a>

#### Initializer <a name="[object Object].Initializer" id="object-objectinitializer"></a>

```typescript
import { ValheimServerProps } from '@raykrueger/cdk-valheim-server'

const valheimServerProps: ValheimServerProps = { ... }
```

#### Properties <a name="Properties" id="properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| [`containerInsights`](#raykruegercdkvalheimservervalheimserverpropspropertycontainerinsights) | `boolean` | Do we want to enable Cloudwatch Container Insights, and incur additional cost? |
| [`cpu`](#raykruegercdkvalheimservervalheimserverpropspropertycpu) | `number` | vCpu amout to be granted to ECS Fargate task. |
| [`generatedServerPasswordSecretName`](#raykruegercdkvalheimservervalheimserverpropspropertygeneratedserverpasswordsecretname) | `string` | If we are generating a random password, what name will it be stored under in Secrets Manager? |
| [`image`](#raykruegercdkvalheimservervalheimserverpropspropertyimage) | `string` | The container image to run. |
| [`logging`](#raykruegercdkvalheimservervalheimserverpropspropertylogging) | [`aws-cdk-lib.aws_ecs.LogDriver`](#aws-cdk-lib.aws_ecs.LogDriver) | Logging driver to use. |
| [`memoryLimitMiB`](#raykruegercdkvalheimservervalheimserverpropspropertymemorylimitmib) | `number` | Memory limit in 1024 incrmements. |
| [`serverPasswordSecret`](#raykruegercdkvalheimservervalheimserverpropspropertyserverpasswordsecret) | [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret) | Where is the server password secret stored? |
| [`vpc`](#raykruegercdkvalheimservervalheimserverpropspropertyvpc) | [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc) | Provide an existing VPC to deploy into. |

---

##### `containerInsights`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.containerInsights" id="raykruegercdkvalheimservervalheimserverpropspropertycontainerinsights"></a>

```typescript
public readonly containerInsights: boolean;
```

- *Type:* `boolean`
- *Default:* false

Do we want to enable Cloudwatch Container Insights, and incur additional cost?

---

##### `cpu`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.cpu" id="raykruegercdkvalheimservervalheimserverpropspropertycpu"></a>

```typescript
public readonly cpu: number;
```

- *Type:* `number`
- *Default:* DEFAULT_VCPU

vCpu amout to be granted to ECS Fargate task.

> https://aws.amazon.com/fargate/pricing/

---

##### `generatedServerPasswordSecretName`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.generatedServerPasswordSecretName" id="raykruegercdkvalheimservervalheimserverpropspropertygeneratedserverpasswordsecretname"></a>

```typescript
public readonly generatedServerPasswordSecretName: string;
```

- *Type:* `string`
- *Default:* DEFAULT_SERVER_PASSWORD_SECRET_NAME

If we are generating a random password, what name will it be stored under in Secrets Manager?

Note that this value is not used if `serverPasswordSecret` is given.

---

##### `image`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.image" id="raykruegercdkvalheimservervalheimserverpropspropertyimage"></a>

```typescript
public readonly image: string;
```

- *Type:* `string`
- *Default:* DEFAULT_IMAGE

The container image to run.

> https://hub.docker.com/r/raykrueger/valheim

---

##### `logging`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.logging" id="raykruegercdkvalheimservervalheimserverpropspropertylogging"></a>

```typescript
public readonly logging: LogDriver;
```

- *Type:* [`aws-cdk-lib.aws_ecs.LogDriver`](#aws-cdk-lib.aws_ecs.LogDriver)
- *Default:* undefined

Logging driver to use.

The Cloudwatch logging driver will incur addtional costs.

---

##### `memoryLimitMiB`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.memoryLimitMiB" id="raykruegercdkvalheimservervalheimserverpropspropertymemorylimitmib"></a>

```typescript
public readonly memoryLimitMiB: number;
```

- *Type:* `number`
- *Default:* DEFAULT_VCPU

Memory limit in 1024 incrmements.

> https://aws.amazon.com/fargate/prici/

---

##### `serverPasswordSecret`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.serverPasswordSecret" id="raykruegercdkvalheimservervalheimserverpropspropertyserverpasswordsecret"></a>

```typescript
public readonly serverPasswordSecret: ISecret;
```

- *Type:* [`aws-cdk-lib.aws_secretsmanager.ISecret`](#aws-cdk-lib.aws_secretsmanager.ISecret)

Where is the server password secret stored?

Optional. If not defined a random password will be generated in SecretsManager at `generatedServerPasswordSecretName`.

---

##### `vpc`<sup>Optional</sup> <a name="@raykrueger/cdk-valheim-server.ValheimServerProps.property.vpc" id="raykruegercdkvalheimservervalheimserverpropspropertyvpc"></a>

```typescript
public readonly vpc: IVpc;
```

- *Type:* [`aws-cdk-lib.aws_ec2.IVpc`](#aws-cdk-lib.aws_ec2.IVpc)

Provide an existing VPC to deploy into.

If none is given a default `ec2.VPC` will be created.

---



