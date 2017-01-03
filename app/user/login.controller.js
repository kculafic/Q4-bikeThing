class loginCtrl {
  constructor(authSvc) {
    this.authSvc = authSvc;
    this.email = '';
    this.password = '';
  }

  signIn(email, password) {
    this.email = email;
    this.authSvc.signIn(email, password);
  }

  isSignedIn() {
    this.email = this.authSvc.isSignedIn(this.email);
    return this.email;
  }


}



loginCtrl.$inject = ['AuthService'];

export default loginCtrl;
