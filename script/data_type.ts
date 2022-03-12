export type itemType = {
    id: string
    name: string
    size: number
    folder: { childCount: number }
    file: { mimeType: string, hashes: object }
    image: { height: number, width: number }
    video: { bitrate: number, height: number, width: number }
    createdDateTime: string
    lastModifiedDateTime: string
    thumbnails: { 0: { large: { width: number, height: number, url: string } } }
    content: string
}


export type videoType = {
    name: string,
    thumbnail: string,
    content: string
}


export type musicType = {
    album: string
    coverImg: string
    coverUrl: string
    tracks: tracksType[]
}

export type tracksType = {
    name: string
    content: string
}