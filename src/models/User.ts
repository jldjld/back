export class User{

    id : number = null
    name : string = null
    email : string = null

    constructor(data? : any){
        this.id = data['id']
        this.name = data ['name']
        this.email = data['email']
    }

}