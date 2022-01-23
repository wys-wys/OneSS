export type dataType = {
    id: string
    name: string
    size: number
    folder: { childCount: number }
    file: { mimeType: string, hashes: object }
    image: { height: number, width: number }
    video: { bitrate: number, height: number, width: number }
}