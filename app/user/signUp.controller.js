class SignUpCtrl {
  constructor(signUpSrc) {
    this.signUpSrc = signUpSrc;
  }

  addUser(firstName, lastName, email, username, password) {
    this.signUpSrc.addUser(firstName, lastName, email, username, password);
  }
}

SignUpCtrl.$inject = ['SignUpService'];

export default SignUpCtrl;
