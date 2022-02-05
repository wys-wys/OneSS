# Deploy

本文以开发者账户演示，其他账户只要能在Azure创建应用就行

1. 应用注册部分
    1. 登录[Azure管理中心](http://aad.portal.azure.com)
    2. 点击Azure Active Directory>应用注册>新注册，名称随便填，受支持的帐户类型选 仅此组织目录中的帐户。注册
       ![1](/DeployPhoto/1.png)
    3. 记录 CLIENT_ID，TENANT_ID 值
       ![2](/DeployPhoto/2.png)
    4. 点击证书与密码>新客户端密码,记录值为 CLIENT_SECRET
       ![3](/DeployPhoto/3.png)
    5. 选择 API权限>添加权限>Microsoft Graph>应用程序权限，添加Files.Read.All,User.Read.All权限并代表管理员同意权限
       ![4](/DeployPhoto/4.png)
2. github部分
    1. fork [OneSS库](https://github.com/Tualin14/OneSS)
    2. 打开setting文件夹里的userList，输入要分享的账户，如图
       ![5](/DeployPhoto/5.png)
3. 评论区设置(若不需要，enabled 的 true 改 false 即可)
    1. 借助[giscus](https://giscus.app) 配置giscusSetting文件，那个网页很详细，记得 discussion映射关系选 Discussion的标题包含特定字符串
5. vercel部分
    1. 在[vercel](https://vercel.com/new) 注册登录选择新项目。导入自己的OneSS库。
    2. 在环境变量处填入之前获取的CLIENT_ID，TENANT_ID，CLIENT_SECRET
       ![6](/DeployPhoto/6.png)
    3. 部署
6. 成功后及可访问

[视频流程](https://www.bilibili.com/video/BV1SZ4y1d73v/)