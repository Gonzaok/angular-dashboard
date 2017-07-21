
import { Status } from "app/models/status.enum";

export class Task {

    static idCount = 0;
    
    private _id: string;
    private _title: string;
    private _description: string;
    private _status: Status;

    get id(): string {
        return this._id;
    }

    set id(value: string) {
        this._id = value;
    }

    get title(): string {
        return this._title;
    }

    set title(value: string) {
        this._title = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get status(): Status {
        return this._status;
    }

    set status(value: Status) {
        this._status = value;
    }

    toJSON(): any {
        return {
            id: this.id,
            title: this.title,
            description: this.description,
            status: Status[this.status],
        };
    }

    constructor(jsonObject: {title: string, description: string, status: Status}) {
        this.id = Task.idCount + "";
        this.title = jsonObject.title;
        this.description = jsonObject.description;
        this.status = jsonObject.status;
        Task.idCount++;
    }

}
