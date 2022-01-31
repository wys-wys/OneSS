# OneSS - Onedrive Sharing System

为了更好的分享! | For better sharing !

# Features | English

* 免费! | Free !
* 文件分享与下载 | Share and Download
* 多用户支持 | Multi-user Support
* 评论支持 | Comment Support
* 暗主题 | Dark Mode

# Deploy | English(wait)

video

本文以开发者账户演示，其他账户只要能在Azure创建应用就行

1. 应用注册部分
    1. 登录[Azure管理中心](aad.portal.azure.com)
    2. 点击Azure Active Directory>应用注册>新注册，名称随便填，受支持的帐户类型选 仅此组织目录中的帐户。注册
       ![1](/doc/DeployPhoto/1.png)
    3. 记录 CLIENT_ID，TENANT_ID 值
       ![2](/doc/DeployPhoto/2.png)
    4. 点击证书与密码>新客户端密码,记录值为 CLIENT_SECRET
       ![3](/doc/DeployPhoto/3.png)
    5. 选择 API权限>添加权限>Microsoft Graph>应用程序权限，添加Files.Read.All,User.Read.All权限并代表管理员同意权限
       ![4](/doc/DeployPhoto/4.png)
2. github部分
    1. fork [OneSS库](https://github.com/Tualin14/OneSS)
    2. 打开setting文件夹里的userList，输入要分享的账户，如图
       ![5](/doc/DeployPhoto/5.png)
3. 评论区设置
    1. 借助[giscus](https://giscus.app) 配置giscusSetting文件，那个网页很详细，记得 discussion映射关系选 Discussion的标题包含特定字符串
5. vercel部分
    1. 在[vercel](https://vercel.com/new) 注册登录选择新项目。导入自己的OneSS库。
    2. 在环境变量处填入之前获取的CLIENT_ID，TENANT_ID，CLIENT_SECRET
       ![6](/doc/DeployPhoto/6.png)
    3. 部署
6. 成功后及可访问

# Need ? to do : not to do

## 优先考虑接口，安全等方向

* Share按钮! (目前是个摆设,目前建议复直接制链接分享
* api-music api-video 及相应页面!
* 批量下载!
* 更好item页面 (目前能显示就行
* 文件数在200以上的支持 (目前可以不在文件夹里放200及以上文件解决
* 评论区在切换主题后不能一块切换问题 (不好解决，目前建议刷新页面
* 所有文件都可以的简单预览功能?
* ~~评论按位置分区~~

# Issues

优先关注 **错误 | bug** 等问题，请详细描述问题。

欢迎提建议，如添加什么功能。

不理睬迷惑问题，如E5如何注册。如有提出，请自重。

# Motivation

假设存在一个字幕组或者汉化组，把完成的合法，合规作品传到适当网站，但因为莫须有的原因被审核删除，那么就需要一个更好的分享位置，最好是权力掌握在自己手里的地方。OneSS便出现了。

这是LSW计划的一部分，让OneSS更像OSS一样的使用。

# FAQ(随时补充)

问题可以在issues提出，会补充在这里。

## 功能相关

* 头像不显示?

  检查此用户是否拥有头像，或用户名错误，此时 Vercel 部署页面会输出No user:xxx字样。
* 为什么存在 OneSS 文件夹?

  避免鼠标右键时不小心点到 OneDrive 把重要文件共享出去。
* 评论区不考虑以item为单位吗?

  目前考虑到的是以文件为核心的讨论应该集中起来管理，但如果有人能够提供一个合理的情景也会考虑。
* 为什么不做搜索功能?

  提供搜索功能会面临泄权。并且身为分享者，不希望伸手党的出现，分享应该是分享者的主动分享 - 我愿意分享我的藏书，但我不希望有人翻我的书阁。
* ~~为什么要在音乐/视频文件夹建相同的xxx/xxx?~~

  ~~Graph的搜索功能并不准确，这是为了更好的识别音乐/视频文件夹。~~

## 程序相关

* 为什么api都以user为单位?直接root也可以获取到想要的data。

  泄权问题，并不会出现把所有盘全分享的情况。

# Credit

[Next.js(MIT)](https://github.com/vercel/next.js)

[tailwindcss(MIT)](https://github.com/tailwindlabs/tailwindcss)

[fluentui-system-icons(MIT)](https://github.com/microsoft/fluentui-system-icons)

[Giscus(MIT)](https://github.com/giscus/giscus)

[next-themes](https://github.com/pacocoursey/next-themes)

# Licence

[GPL-3.0](LICENSE) © [Tualin14](https://github.com/Tualin14)

# Other

## 个人用快捷链接

* [快捷在线编辑](https://github.dev/Tualin14/OneSS)
* [Next.js](https://nextjs.org/docs/getting-started)
* [Tailwind CSS](https://tailwindcss.com/docs/installation)
* [在 Microsoft Graph 中使用文件](https://docs.microsoft.com/zh-cn/graph/api/resources/onedrive?view=graph-rest-1.0)
* [OneSS-Layout-Reference](https://www.figma.com/file/HDZZCJay6QIIZq8MTEL8Ab/OneSS-Layout-Reference)

## 推荐一个很好的相似项目

* [onedrive-vercel-index](https://github.com/spencerwooo/onedrive-vercel-index)