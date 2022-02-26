import requests
import datetime
from urllib.parse import quote

from xml.dom.minidom import Document

doc = Document()

now = datetime.datetime.now().timestamp()

music_root = doc.createElement("MusicRoot")
music_root.setAttribute('Timestamp', str(now))
doc.appendChild(music_root)

ONESS_API = 'https://oness.dzaaaaaa.com/api'


def s(user, route):
    print(route)
    url = '%s/children?user=%s&route=%s' % (ONESS_API, user, quote(route))
    r = requests.get(url).json()
    for i in r:
        try:
            i['folder']
        except:
            c_i(user, i)
        else:
            s(user, '%s/%s' % (route, i['name']))


def c_i(user, i):
    name = quote(i['name'])

    try:
        i['thumbnails']
    except:
        thumbnail_url = 'none'
    else:
        thumbnail_url = quote(i['thumbnails'][0]['large']['url'])

    content = quote('%s/item/content?user=%s&id=%s' % (ONESS_API, user, i['id']))

    music = doc.createElement("Music")
    # Name
    name_music = doc.createElement('Name')
    name_music_text = doc.createTextNode(name)
    name_music.appendChild(name_music_text)
    music.appendChild(name_music)
    # Thumbnail
    thumbnail_music = doc.createElement('Thumbnail')
    thumbnail_music_text = doc.createTextNode(thumbnail_url)
    thumbnail_music.appendChild(thumbnail_music_text)
    music.appendChild(thumbnail_music)
    # Content
    content_music = doc.createElement('Content')
    content_music_text = doc.createTextNode(content)
    content_music.appendChild(content_music_text)
    music.appendChild(content_music)

    music_root.appendChild(music)


if __name__ == '__main__':
    userList = requests.get('%s/users' % ONESS_API).json()
    for user in userList:
        s(user, 'Music')

    with open('./public/exp/music.xml', 'w', encoding='utf-8') as f:
        doc.writexml(f, addindent='\t', newl='\n', encoding='utf-8')
