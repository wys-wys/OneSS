import requests
import datetime
import json

ONESS_API = 'https://oness.dzaaaaaa.com/api'

now = datetime.datetime.now()

dict = {}


def s(user, route):
    print(route)
    album = route.split('/')[-1]
    dict.update({album: {'coverImg': '', 'coverUrl': '', 'tracks': []}})

    url = '%s/children?user=%s&route=%s' % (ONESS_API, user, route)
    r = requests.get(url).json()
    for i in r:
        try:
            i['folder']
        except:
            try:
                i['image']
            except:
                is_music(user, i, album)
            else:
                is_img(user, i, album)
        else:
            s(user, '%s/%s' % (route, i['name']))


def is_img(user, i, album):
    content = '%s/item/content?user=%s&id=%s' % (ONESS_API, user, i['id'])
    dict[album]['coverImg'] = content


def is_music(user, i, album):
    name = i['name']

    try:
        i['thumbnails']
    except:
        thumbnail = 'none'
    else:
        dict[album]['coverUrl'] = i['thumbnails'][0]['large']['url']

    content = '%s/item/content?user=%s&id=%s' % (ONESS_API, user, i['id'])

    d_music = {'name': name, "content": content}
    dict[album]['tracks'].append(d_music)


if __name__ == '__main__':
    userList = requests.get('%s/users' % ONESS_API).json()
    for user in userList:
        s(user, 'Music')

    with open('./public/exp/music.json', 'w', encoding='utf-8') as f:
        f.write(json.dumps(dict))
