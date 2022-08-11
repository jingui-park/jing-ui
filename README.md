# jing-ui

## 初始化项目

1. 使用 `pnpm create @umijs/dumi-lib --site` 命令初始化 dumi site 项目
2. 使用 group 将组件分为一组

## 使用 antd

1. 安装 `pnpm add antd`
2. 添加样式
    1. 在 index.md 的 tsx 中直接引入 css 文件(`import 'antd/dist/antd.css';`)
    2. 在 index.ts 中引入 css 文件。(`import 'antd/dist/antd.css';`)
    前两种方式都相同，都是直接引入 css 文件。下面我们展示如何引入 less
    3. less 方式 `@import '~antd/dist/antd.less'`;

直接在组件中使用即可；

## 按需加载

1. 安装 `babel-plugin-import`
2. 在 .umirc.ts 中添加配置项

    ```ts
      extraBabelPlugins: [
        [
          'import',
          {
            libraryName: 'antd',
            libraryDirectory: 'es',
            style: 'css',
          },
        ],
      ],
    ```

## 自定义样式

[参考链接](https://ant-design.gitee.io/docs/react/customize-theme-cn)

主要修改一些主题色什么的。参考 jing-ui.simple.less
