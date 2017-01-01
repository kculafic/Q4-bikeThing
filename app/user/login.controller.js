class loginCtrl {
  constructor(authSvc) {
    this.authSvc = authSvc;
  }

  signIn(email, password) {
    console.log('controller sign in' + this.email);
    this.authSvc.signIn(email, password);
  }

  isSignedIn(email) {
    this.authSvc.isSignedIn(email);
  }
}

loginCtrl.$inject = ['AuthService'];

export default loginCtrl;
