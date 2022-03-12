# 个性化设置

## 目前在逐步添加可自定义的部分

1. 颜色主题部分

   本项目主题借助 daisyUI 实现，所以可根据 [daisyUI 主题部分文档](https://daisyui.com/docs/themes/) 自定义

2. 主页部分

   修改 setting 文件夹内 personalisedDefinition.ts 文件的 index 部分

- backgroundImage 背景图片

  - 默认为 Bing 每日一图

  ```ts
  backgroundImage: "/api/bingPic";
  ```

  - 若要自定义图片背景，请将图片放入 Public 文件夹并修改路径，如

  ```ts
  backgroundImage: "/bg.jpg";
  ```

  - title 标题
  - introduction 介绍
  - 完整示例:

  ```ts
  const personalisedDefinition = {
    index: {
      backgroundImage: "/api/bingPic",
      title: "OneSS",
      introduction: "Make your Onedrive work like OSS",
    },
  };
  ```
