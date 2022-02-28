import asyncio

import requests

from music_index import m_i
from setting import OneSSApi
from video_index import v_i

if __name__ == '__main__':
    userList = requests.get('%s/users' % OneSSApi.api).json()
    loop = asyncio.get_event_loop()
    loop.run_until_complete(m_i(userList))
    loop.run_until_complete(v_i(userList))
    loop.close()
