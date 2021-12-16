import { IUser } from "./interfaces/IUser";

export default class User implements IUser {
    uid: string;
    name: string;
    email: string;
    public constructor(_name : string, _uid : string, _email : string)
    {
        this.uid   = _uid
        this.name  = _name
        this.email = _email
    }
}