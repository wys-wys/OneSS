# Index

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

- name 专辑名
- thumbnail 封面
- content 流

示例:

```json
{
  "name": "try_sg.mp4",
  "thumbnail": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=mp4&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6ACIEHLLBDSTBBLBW7BKZKUG563%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY0NjA5MjgwMCIsImV4cCI6IjE2NDYxMTQ0MDAiLCJlbmRwb2ludHVybCI6IlQ0SXhTc1NRMmlvYWNOWVVQSU9uWWxPbE1DR1lsaHFrK0VFVStQRlJoYUE9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNTEuMTYxIn0%2EZi9DNWdnRng4TCtpQzk2VzJ5U0hNTHdUWlJGeVlkWXJlZWJEa2lJZmJ2Yz0%26version%3DPublished&width=800&height=800&cb=63780018453",
  "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6ACIEHLLBDSTBBLBW7BKZKUG563"
}
```

## Music Index

### Request:

    you.domain.com/api/exp/music

### Response:

以 json 格式，专辑为单位返回所有用户的 Music 文件夹里的音乐索引

- album 专辑名
- coverImg 文件夹内封面
- coverUrl 音乐自带封面，在文件夹内没有封面图片文件而音乐自带使用
- tracks 音乐列表
    - name 音乐名
    - content 流

示例:

```json
{
  "album": "\u300a\u683c\u91cc\u683c \u76ae\u5c14\u91d1\u5fb7\u300bGrieg Peer Gynt",
  "coverImg": "",
  "coverUrl": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=m4a&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6FXTPQVV2YYFFEY5OBEBNCKL3CT%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY0NTkyMDAwMCIsImV4cCI6IjE2NDU5NDE2MDAiLCJlbmRwb2ludHVybCI6IlFtMlhPZzFTeG15QmVsOHppd1AxVklCa2l1NU9DVDdGMUpkVHl6VFR0d1U9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xMzUuNDQifQ%2EZXgxWHhtR3E1TlBLam96ZkRRNW8wcDZsUXZsY2N6VjlpZEJJN05oTDIvdz0%26version%3DPublished&width=800&height=800&cb=63739041064",
  "tracks": [
    {
      "name": "Anitra's Dance, Op. 23, No. 16.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6GBUCQDN6JE3JDJRSH525HYLKSQ"
    },
    {
      "name": "Arab Dance, Op. 23, No. 15.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6DA3GL35FVB4JH3SVDVCN3RHO4C"
    },
    {
      "name": "Dance of the Mountain King's Daughter, Op. 23, No. 8.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6DLXMYL3FWIPNDLPSGGV5ELFV2Q"
    },
    {
      "name": "In the Hall of the Mountain King, Op. 23, No. 7.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6CRU5BO63I2FFG337XYLYYWPZ67"
    },
    {
      "name": "Ingrid's Abduction and Lament, Op. 23, No. 4.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6HP7W3AIPIRTFCZYG7ZJ6RICN66"
    },
    {
      "name": "Morning Mood, Op. 23, No. 13.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6G7R4IEPB4Q3FDLBRDK5QRFNGUS"
    },
    {
      "name": "Peer Gynt's Homecoming, Op. 23, No. 19.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6CTYY6PXVZXQJGLGXI6SXHT4PZN"
    },
    {
      "name": "Prelude, Op. 23, No. 1.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6FAKVCRSYI6WZDKSEG7IS47EEC2"
    },
    {
      "name": "Solvejg's Song, Op. 23, No. 11.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6FD76PXUE4GMNB2QHKIFDQZJZZS"
    },
    {
      "name": "The Death Of Ase, Op. 23, No. 12.m4a",
      "content": "https://oness.dzaaaaaa.com/api/item/content?user=share@dzaaaaaa.com&id=013EY5Y6FXTPQVV2YYFFEY5OBEBNCKL3CT"
    }
  ]
}
```
