export class User {

    private _name: string;
    private _password: string;

    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get password(): string {
        return this._password;
    }

    set password(value: string) {
        this._password= value;
    }

    constructor(jsonObject: {name: string, password: string}) {
        this.name = jsonObject.name;
        this.password = jsonObject.password;
    }
}
