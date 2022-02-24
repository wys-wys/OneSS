# api

```typescript
export type dataType = {
  id: string;
  name: string;
  size: number;
  folder: { childCount: number };
  file: { mimeType: string; hashes: object };
  image: { height: number; width: number };
  video: { bitrate: number; height: number; width: number };
  createdDateTime: string;
  lastModifiedDateTime: string;
  createdBy: { user: { email: string } };
  thumbnails: { 0: { large: { width: number; height: number; url: string } } };
};
```

# GET you.domain.com/api/

- children?user={user}&route={rout}

  `response: name,size,id,folder,file,image,video`

- item/content?user={user}&id={id}

  `redirect: downloadUrl`

- item?user={user}&id={id}

  `response: name,size,id,createdDateTime,lastModifiedDateTime`

- preview?user={user}&id={id}

  `redirect: previewUrl`

- user

  `response: userList`

- videos

  `All videos in the shared user's Video folder`

  `response: name,id,video,createdBy`
