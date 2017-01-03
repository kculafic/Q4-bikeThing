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


  signIn(email, password) {
    return this.$http.post('/api/token', { email, password })
      .then((res) => {
        this.signedIn = true;
        this.email = res.data.email;
      })
      .catch((err) => {
      });
  }

  isSignedIn() {
    return this.email;
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
