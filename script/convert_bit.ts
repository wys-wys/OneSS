export default function ConvertB(B: number) {
    let size: string
    if (B < 1024) {
        size = B.toFixed(2) + "B";
    } else if (B < 1024 * 1024) {
        size = (B / 1024).toFixed(2) + "KB";
    } else if (B < 1024 * 1024 * 1024) {
        size = (B / (1024 * 1024)).toFixed(2) + "MB";
    } else {
        size = (B / (1024 * 1024 * 1024)).toFixed(2) + "GB";
    }
    return size.toString();
}