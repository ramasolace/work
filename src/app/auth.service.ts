export class AuthService {
    loggedIn = true;

    isAuthinticate(){
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=>{
                resolve(this.loggedIn);
            }, 1000)
        })
        return promise;
    }
    login(){
        this.loggedIn = !this.loggedIn
    }

    logOut(){
        this.loggedIn = this.loggedIn;
    }
}