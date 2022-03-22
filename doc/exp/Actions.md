# Actions

- 此功能使用 Github Actions 定时构建索引

- 每日更新一次,修改频率请自行修改 .github/workflows/auto.yml 文件的 schedule 部分

- 其实以这思路可以做其他东西，并且还能增加活跃度

- 以此为基础的延伸实现:
    - 音乐在线播放器 [demo](https://oness.dzaaaaaa.com/exp/demo/music)
    - 视频在线播放器 [demo](https://oness.dzaaaaaa.com/exp/demo/video)

## 部署

1. 修改 .github/workflows/auto.yml 文件以下部分
   [示例](https://github.com/Tualin14/OneSS/blob/main/.github/workflows/auto.yml)

   ```shell
   git config --global user.email 你的Github邮件
   git config --global user.name 你的Github用户名
   ```

2. 修改 exp/setting.py 文件以下部分
   [示例](https://github.com/Tualin14/OneSS/blob/main/exp/setting.py)
   ```python
   ONESS_DOMAIN = '你的OneSS域名'
   ```
3. 在自己的 Github 账户生成 GITHUB_SERCET 并以 OneSS 命名填入自己 OneSS 库的 settings>secrets>actions>New repository secret
4. Actions>All workflows>Auto>Run workflow 启用 Action 服务

## Video Index

### Request:

    you.domain.com/api/exp/video

### Response:

以 json 格式，返回所有用户的 Video 文件夹里的视频索引

```ts
export type videoType = {
    name: string,
    thumbnail: {
        large: { url: string },
        medium: { url: string },
        small: { url: string }
    },
    content: string
}
```

## Music Index

### Request:

    you.domain.com/api/exp/music

### Response:

以 json 格式，专辑为单位返回所有用户的 Music 文件夹里的音乐索引

```ts
export type musicType = {
    album: string
    coverImg: string
    coverUrl: {
        large: { url: string },
        medium: { url: string },
        small: { url: string }
    }
    tracks: tracksType[]
}
```