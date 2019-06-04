export class listItem {
    public fileName: string;
    public filePath: string;
    public fileSize: number;
    public fileExt: string;

    constructor(fileName: string, filePath: string, fileSize: number, fileExt: string) {
        this.fileName = fileName;
        this.filePath = filePath;
        this.fileSize = fileSize;
        this.fileExt = fileExt;
    }
}