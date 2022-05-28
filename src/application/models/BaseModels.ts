export interface BaseDbModel {
    _id: string;
    createdAt: Date;
    updatedAt: Date;
}

export interface FileResponse {
    fieledname:string;
    originalname:string;
    encoding:string;
    mimetype:string;
    description:string;
    filename:string;
    path:string;
    size:number;
}