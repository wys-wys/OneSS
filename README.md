![OneSS_T](https://oness.dzaaaaaa.com/OneSS_T.svg)

# OneSS

让你的 Onedrive 能像 OSS 一样使用 | Make your Onedrive work like OSS(Object Storage Service)

# 特性 | Features

- 免费! | Free !
- 文件下载 | File Download
- 可以做图床，视频云 | Cloud Storage Services for Photos and Video[(demo)](https://www.dzaaaaaa.com/blog/LSW/OneSS)
- 多用户支持 | Multi-user Support
- 评论支持 | Comment Support
- 预览功能 | Preview Support
- 暗主题 | Dark Mode

# start

## [部署](/doc/deploy_zh.md) | Deploy

## 使用 | How to use

在自己 OneDrive 的根目录建立名为 OneSS 的文件夹 | Create a folder named OneSS in the root directory of your OneDrive

# 实验性功能 | Experimental feature

功能在不断测试，会有大改!!!

[demo](https://oness.dzaaaaaa.com/exp)

- [API](/doc/exp/API.md)
- 以 json 格式，返回所有用户的 Music/Video 文件夹里的 音乐/视频 索引
  [Index.md](/doc/exp/Index.md)
  - 延伸实现:
    - 音乐在线播放器 [demo](https://oness.dzaaaaaa.com/exp/demo/music)
    - 视频在线播放器 [demo](https://oness.dzaaaaaa.com/exp/demo/videos)

# To do

- 文件数在 200 以上的支持 (目前可以不在文件夹里放 200 及以上文件解决
- 批量下载

# Issues

优先关注 **错误 | bug** 等问题，请详细描述问题

欢迎提建议和意见

# Motivation

- 目标是让 OneSS 更像 OSS 一样的使用！

- 情景假设 | Scenario Analysis

  - 个人博客需要插入图片，音频或者视频，但是无法负担昂贵的存储费用，或者一些云存储服务并不理想。需要一个方便上传，调用的空间。

  - 存在一个字幕组或者汉化组，把完成的合法，合规作品传到适当网站，但因为莫须有的原因被审核删除，那么就需要一个更好地分享位置，最好是不会受到他人干涉的地方。

# [FAQ(随时补充)](/doc/FAQ.md)

# Credit

本项目使用 [Next.js](https://github.com/vercel/next.js) 框架所建

数据请求使用了 [swr](https://github.com/vercel/swr) 与 [axios](https://github.com/axios/axios)

样式借助了 [tailwindcss](https://github.com/tailwindlabs/tailwindcss)

主题借助 [next-themes](https://github.com/pacocoursey/next-themes) 实现

Icon 使用 [React Icons](https://github.com/react-icons/react-icons) 并借助
[vscode-icons-js](https://github.com/dderevjanik/vscode-icons-js) 实现 Icon 自动选择

评论区使用 [Giscus](https://github.com/giscus/giscus)

# Licence

[GPL-3.0](LICENSE) © [Tualin14](https://github.com/Tualin14)
