class LongtripsService {

  constructor($http) {
    this.$http = $http;
    this.longtrips = this.$http.get('/longtrips')
      .then((response) => {
      this.longtrips = response.data;
    })
  }

  longtripsList() {
    return this.longtrips;
  }
}

LongtripsService.$inject = ['$http'];

export default LongtripsService;
