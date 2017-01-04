class SignOutCtrl {
  constructor(authSvc, auth, $state) {
    this.authSvc = authSvc;

    // if (!auth.signedIn) {
    //   $state.go('login');
    // }
  }

  signOut() {
    this.authSvc.signOut();
  }
}

SignOutCtrl.$inject = ['AuthService', '$state'];

export default SignOutCtrl;
