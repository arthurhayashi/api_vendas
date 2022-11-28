export default class AppError{

    public readonly meassage: string;
    public readonly statusCode: number;

    constructor(message : string, statusCode=400){
        this.meassage = message;
        this.statusCode = statusCode;
    }
}

