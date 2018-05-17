# cfn-spec

This package provides [AWS CloudFormation Resource Specification](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/cfn-resource-specification.html).

## Installation

```
npm i cfn-spec -S
```

## Usage

``` javascript
const region = 'us-east-1';

const spec = require(`cfn-spec/${region}`;

// Or

const { getSpec } = require('cfn-spec');
const spec = getSpec(region);
```

## License

MIT
