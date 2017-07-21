export class Alert {

    private _type: string;
    private _message: string;

    get type(): string {
        return this._type;
    }

    set type(value: string) {
        this._type = value;
    }

    get message(): string {
        return this._message;
    }

    set message(value: string) {
        this._message = value;
    }

    constructor(jsonObject: {type: string, message: string}){
        this.type = jsonObject.type;
        this.message = jsonObject.message;
    }    
} 