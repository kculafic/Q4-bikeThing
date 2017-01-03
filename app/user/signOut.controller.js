class SignOutCtrl {
  constructor(authSvc) {
    this.authSvc = authSvc;
  }

  signOut() {
    this.authSvc.signOut();
  }
}

SignOutCtrl.$inject = ['AuthService'];

export default SignOutCtrl;
