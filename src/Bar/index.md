---
nav:
  title: Components
  path: /components
group: 
  path: /components
  title: 组件
---

## Bar

Demo:

```tsx
import React from 'react';
import { Bar } from 'jing-ui';
import { Space, ConfigProvider } from 'antd'; 
export default () => {
  return <>
    <ConfigProvider prefixCls="jing-ui">
      <Space>
        <Bar type="primary"/>
        <Bar type="dashed"/>
        <Bar/>
      </Space>
    </ConfigProvider>
  </>
};
```

More skills for writing demo: <https://d.umijs.org/guide/basic#write-component-demo>
