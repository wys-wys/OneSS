import requests
import json

from setting import OneSSApi

dict = {}


async def s_i(user, route):
    print(route)
    album = route.split('/')[-1]
    dict.update({album: {'coverImg': '', 'coverUrl': '', 'tracks': []}})

    url = '%s/children?user=%s&route=%s' % (OneSSApi.api, user, route)
    r = requests.get(url).json()
    for i in r:
        try:
            i['folder']
        except:
            try:
                i['image']
            except:
                await is_music(user, i, album)
            else:
                await is_img(user, i, album)
        else:
            await s_i(user, '%s/%s' % (route, i['name']))


async def is_img(user, i, album):
    content = '%s/item/content?user=%s&id=%s' % (OneSSApi.api, user, i['id'])
    dict[album]['coverImg'] = content


async def is_music(user, i, album):
    name = i['name']

    try:
        i['thumbnails']
    except:
        thumbnail = 'none'
    else:
        dict[album]['coverUrl'] = i['thumbnails'][0]['large']['url']

    content = '%s/item/content?user=%s&id=%s' % (OneSSApi.api, user, i['id'])

    d_music = {'name': name, "content": content}
    dict[album]['tracks'].append(d_music)


async def m_i(user_list):
    for user in user_list:
        await s_i(user, 'Music')

    with open('./public/exp/music.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(dict))
