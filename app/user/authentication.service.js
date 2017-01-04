class AuthService {
  constructor($http) {
    this.$http = $http;
    this.signedIn = JSON.parse(localStorage.getItem('signedIn') || 'false');
    this.email = '';
    this.$http.get('/api/token')
      .then((res) => {
        this.signedIn = res.data;
      })
      .catch((err) => {
      });
  }


  signIn(email, password) {
    return this.$http.post('/api/token', { email, password })
      .then((res) => {
        localStorage.setItem('email', res.data.email)
        this.signedIn = true;
        localStorage.setItem('signedIn', true);
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
        localStorage.setItem('email', '')
        localStorage.setItem('signedIn', false);
        this.signedIn = false;
        this.email = '';
      })
      .catch((err) => {
      });
  }
}

AuthService.$inject = ['$http'];

export default AuthService;
