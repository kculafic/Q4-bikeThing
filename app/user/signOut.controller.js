class SignOutCtrl {
  constructor(authSvc, cartSVC) {
    this.authSvc = authSvc;
    this.cartSVC = cartSVC;
  }

  signOut() {
    this.authSvc.signOut();
    this.cartSVC.cart = [];
    this.cartSVC.subtotal = 0;
  }
}

SignOutCtrl.$inject = ['AuthService'];

export default SignOutCtrl;
