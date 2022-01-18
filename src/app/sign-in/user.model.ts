export class UserData {
    constructor(
        public email: string,
        public id: string,
        public token: string,
        private tokenExpirationDate: Date
    ) {  }

    get tokenKey(){
        if(!this.tokenExpirationDate || new Date() > this.tokenExpirationDate){
            return null;
        }
        return this.token;
    }
}