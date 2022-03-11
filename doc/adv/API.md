# API

```ts
export type itemType = {
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

# GET: you.domain.com/api/

- children?user={user}&route={rout}

  `response: name,size,id,folder,file,image,video`

  example:

  ```json
  [
    {
    "@odata.etag": "\"{40F1ED91-2B1D-4384-BD2A-3A34B32619FD},16\"",
    "id": "013EY5Y6ER5XYUAHJLQRB32KR2GSZSMGP5",
    "name": "Music",
    "size": 5450389888,
    "createdBy": {
      "user": {
        "email": "share@dzaaaaaa.com",
        "id": "bed82a47-a9cc-4a2c-af1c-beb26e34f5e7",
        "displayName": "share"
      }
    },
    "folder": {
      "childCount": 5
    },
    "thumbnails@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('share%40dzaaaaaa.com')/drive/root/children('013EY5Y6ER5XYUAHJLQRB32KR2GSZSMGP5')/thumbnails",
    "thumbnails": []
  },
  {
    "@odata.etag": "\"{B7836415-CCC1-4BAE-B125-E849504ABE37},14\"",
    "id": "013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX",
    "name": "dzaaaaaa.png",
    "size": 57876,
    "createdBy": {
      "user": {
        "email": "share@dzaaaaaa.com",
        "id": "bed82a47-a9cc-4a2c-af1c-beb26e34f5e7",
        "displayName": "share"
      }
    },
    "file": {
      "mimeType": "image/png",
      "hashes": {
        "quickXorHash": "dfpV9hW93Bjg0dhq15SzXCTITYE="
      }
    },
    "image": {
      "height": 512,
      "width": 512
    },
    "thumbnails@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('share%40dzaaaaaa.com')/drive/root/children('013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX')/thumbnails",
    "thumbnails": [
      {
        "id": "0",
        "large": {
          "height": 512,
          "url": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY0Njk4OTIwMCIsImV4cCI6IjE2NDcwMTA4MDAiLCJlbmRwb2ludHVybCI6IjZPb3lBek9JTDV5cDV0Q2RYd1J2V1I0M1hnM3RMb0ZzNVJIRHdMbmUyQkk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNDQuMTcwIn0%2ENFhZUFlDMEVCTFhlN0lJTXlHV2x5Szk2Wm1kUi9Mdkh5bzdUdlRJdjVTdz0%26version%3DPublished&width=800&height=800&cb=63773276921",
          "width": 512
        },
        "medium": {
          "height": 176,
          "url": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY0Njk4OTIwMCIsImV4cCI6IjE2NDcwMTA4MDAiLCJlbmRwb2ludHVybCI6IjZPb3lBek9JTDV5cDV0Q2RYd1J2V1I0M1hnM3RMb0ZzNVJIRHdMbmUyQkk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNDQuMTcwIn0%2ENFhZUFlDMEVCTFhlN0lJTXlHV2x5Szk2Wm1kUi9Mdkh5bzdUdlRJdjVTdz0%26version%3DPublished&width=176&height=176&cb=63773276921",
          "width": 176
        },
        "small": {
          "height": 96,
          "url": "https://southeastasia1-mediap.svc.ms/transform/thumbnail?provider=spo&inputFormat=png&cs=ODYyNDEwYjYtNTZkOC00ODczLWE2ZjYtZWRiMmNmMGIwYWI5fFNQTw&docid=https%3A%2F%2Fdzaaaaaa%2Dmy%2Esharepoint%2Ecom%2F%5Fapi%2Fv2%2E0%2Fdrives%2Fb%21aVRWngNXLEy8Vgt3qSqsihbuGbzcdq9Fh2vBVEFXBv87lLEhJ3BEQok4Xm6nc9aa%2Fitems%2F013EY5Y6AVMSB3PQOMVZF3CJPIJFIEVPRX%3Ftempauth%3DeyJ0eXAiOiJKV1QiLCJhbGciOiJub25lIn0%2EeyJhdWQiOiIwMDAwMDAwMy0wMDAwLTBmZjEtY2UwMC0wMDAwMDAwMDAwMDAvZHphYWFhYWEtbXkuc2hhcmVwb2ludC5jb21AYmRiNzA1NDgtZmY0NC00MDM0LWE1OWQtYjQ4MGUyNzhhOThiIiwiaXNzIjoiMDAwMDAwMDMtMDAwMC0wZmYxLWNlMDAtMDAwMDAwMDAwMDAwIiwibmJmIjoiMTY0Njk4OTIwMCIsImV4cCI6IjE2NDcwMTA4MDAiLCJlbmRwb2ludHVybCI6IjZPb3lBek9JTDV5cDV0Q2RYd1J2V1I0M1hnM3RMb0ZzNVJIRHdMbmUyQkk9IiwiZW5kcG9pbnR1cmxMZW5ndGgiOiIxNTkiLCJpc2xvb3BiYWNrIjoiVHJ1ZSIsInZlciI6Imhhc2hlZHByb29mdG9rZW4iLCJzaXRlaWQiOiJPV1UxTmpVME5qa3ROVGN3TXkwMFl6SmpMV0pqTlRZdE1HSTNOMkU1TW1GaFl6aGgiLCJhcHBfZGlzcGxheW5hbWUiOiJPbmVTUyIsIm5hbWVpZCI6Ijg2MjQxMGI2LTU2ZDgtNDg3My1hNmY2LWVkYjJjZjBiMGFiOUBiZGI3MDU0OC1mZjQ0LTQwMzQtYTU5ZC1iNDgwZTI3OGE5OGIiLCJyb2xlcyI6ImFsbGZpbGVzLnJlYWQgYWxscHJvZmlsZXMucmVhZCIsInR0IjoiMSIsInVzZVBlcnNpc3RlbnRDb29raWUiOm51bGwsImlwYWRkciI6IjIwLjE5MC4xNDQuMTcwIn0%2ENFhZUFlDMEVCTFhlN0lJTXlHV2x5Szk2Wm1kUi9Mdkh5bzdUdlRJdjVTdz0%26version%3DPublished&width=96&height=96&cb=63773276921",
          "width": 96
        }
      }
    ]
  },
  {
    "@odata.etag": "\"{1FBB5839-85D3-4B01-A8C1-3EEC18B01C9F},2\"",
    "id": "013EY5Y6BZLC5R7U4FAFF2RQJ65QMLAHE7",
    "name": "Party Animals Demo.zip",
    "size": 1599206008,
    "createdBy": {
      "user": {
        "email": "share@dzaaaaaa.com",
        "id": "bed82a47-a9cc-4a2c-af1c-beb26e34f5e7",
        "displayName": "share"
      }
    },
    "file": {
      "mimeType": "application/zip",
      "hashes": {
        "quickXorHash": "O8UX5Z5YLN6upI72OBCfG55Xj+E="
      }
    },
    "thumbnails@odata.context": "https://graph.microsoft.com/v1.0/$metadata#users('share%40dzaaaaaa.com')/drive/root/children('013EY5Y6BZLC5R7U4FAFF2RQJ65QMLAHE7')/thumbnails",
    "thumbnails": []
  }
  ]
  ```

]

```

- item/content?user={user}&id={id}

`redirect: downloadUrl`

- item?user={user}&id={id}

`response: name,size,id,createdDateTime,lastModifiedDateTime`

- preview?user={user}&id={id}

`redirect: previewUrl`

- user

`response: userList`
```
