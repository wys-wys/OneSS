import asyncio

import requests

from music_index import m_i
from setting import OneSSApi
from video_index import v_i

if __name__ == '__main__':
    userList = requests.get('%s/users' % OneSSApi.api).json()
    asyncio.run(v_i(userList))
