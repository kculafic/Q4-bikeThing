class AuthService {
  constructor($http) {
    this.$http = $http;
    this.signedIn = false;
    this.email = '';

    this.$http.get('/api/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch(() => {
        // There was some error
      });
  }

  isSignedIn(email) {
    console.log(this.email);
    this.email;
  }

  signIn(email, password) {
    return this.$http.post('/api/token', { email, password })
      .then((res) => {
        console.log('signed in as someone');
        this.signedIn = true;
        this.email = this.email;
      })
      .catch((err) => {
      });
  }

  signOut() {
    return this.$http.delete('/api/token')
      .then(() => {
        this.signedIn = false;
        this.email = '';
      })
      .catch((err) => {
      });
  }
}

AuthService.$inject = ['$http'];

export default AuthService;
