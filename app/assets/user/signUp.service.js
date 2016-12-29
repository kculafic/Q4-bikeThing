class SignUpService {
  constructor($http) {
    this.$http = $http;
  }

  addUser(firstName, lastName, email, username, password) {
    this.$http.post('/users', { firstName, lastName, email, username, password })
    .then((res) => {
      console.log(res);
    })
    .catch((err) => {
      console.error(err);
    })
  }
}

SignUpService.$inject = ['$http'];

export default SignUpService;
