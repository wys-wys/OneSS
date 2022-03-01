import requests
import json

from setting import OneSSApi

list = []


async def s_i(user, route):
    print(route)

    url = '%s/children?user=%s&route=%s' % (OneSSApi.api, user, route)

    r = requests.get(url).json()
    for i in r:
        try:
            i['video']
        except:
            try:
                i['folder']
            except:
                continue
            else:
                await s_i(user, '%s/%s' % (route, i['name']))
        else:
            await is_video(user, i)


async def is_video(user, i):
    name = i['name']

    thumbnail = i['thumbnails'][0]['large']['url']

    content = '%s/item/content?user=%s&id=%s' % (OneSSApi.api, user, i['id'])

    d_video = {'name': name, 'thumbnail': thumbnail, "content": content}
    list.append(d_video)


async def v_i(user_list):
    for user in user_list:
        await s_i(user, 'Video')

    with open('./public/exp/video.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(list))
