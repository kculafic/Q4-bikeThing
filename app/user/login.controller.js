class loginCtrl {
  constructor(authSvc, $state) {
    this.authSvc = authSvc;
    this.$state = $state;
    this.email = '';
    this.password = '';
    this.isSignedIn()
  }

  signIn(email, password) {
    this.email = email;
    this.authSvc.signIn(email, password);
  }

  isSignedIn() {
    // this.email = this.authSvc.isSignedIn(this.email);
    // return this.email;
    console.log(this.$state);

  }


}



loginCtrl.$inject = ['AuthService', '$state'];

export default loginCtrl;
