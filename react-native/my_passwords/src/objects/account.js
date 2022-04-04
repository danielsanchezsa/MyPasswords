export default class Account{
    constructor({email, password, userName, site, phoneNumber,imgURL}){
        this.email = email;
        this.password = password;
        this.userName = userName;
        this.site = site;
        this.phoneNumber = phoneNumber;
        this.imgURL = imgURL;
        this.key = (Math.random() * Math.random()* 1000 / Math.random())
    }
}