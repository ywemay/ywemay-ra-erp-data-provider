# YWEmay Data Provider

Data provider constructor

## Usage

```js
import getProvider from 'ywemay-ra-erp-data-provider'
import { withLifecycleCallbacks } from 'react-admin';
import { hooks } from '../my-hooks'

const dataProvider = withLifecycleCallbacks(getProvider({
  schema: 'api'
}), hooks);
```