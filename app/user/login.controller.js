class loginCtrl {
  constructor(authSvc, $state) {
    this.authSvc = authSvc;
    this.$state = $state;
    this.password = '';
    this.isSignedIn()
  }

  signIn(email, password) {
    this.email = email;
    this.authSvc.signIn(email, password)
      .then(() => {
        this.$state.go('ltindex')
      });
  }

  isSignedIn() {
    return localStorage.getItem('email')
  }
}

loginCtrl.$inject = ['AuthService', '$state'];

export default loginCtrl;
