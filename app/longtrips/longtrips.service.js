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

  // longtripGet() {
  //   this.$http.get('/longtrips/:id')
  //     .then((res) => {
  //       this.longtrip = res.data;
  //     })
  //     .catch((err) => {
  //       console.error(err);
  //     });
  // }

  // addLongtrip(tripName, origin, destination, year) {
  //   this.$http.post('/longtrips', { tripName, origin, destination, year })
  //   .then((res) => {
  //     console.log(res);
  //     Materialize.toast('New longtrip added!', 4000);
  //   })
  //   .catch((err) => {
  //     console.error(err);
  //   })
  // }
}

LongtripsService.$inject = ['$http'];

export default LongtripsService;
