interface iUser {
    id: number;
    password: string;
    email: string;
    completeName: string;
    createAt: Date;
}

export class CUser implements iUser{
    id: number;
    password: string;
    email: string;
    completeName: string;
    createAt: Date; 

    constructor() {
        this.id = 0
        this.password = "";
        this.email = "";
        this.completeName = "";
        this.createAt = new Date();
    }

}
