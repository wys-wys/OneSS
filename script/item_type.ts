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
    createdBy: { user: { email: string } }
    thumbnails: { 0: { large: { width: number, height: number, url: string } } }
    content:string
}