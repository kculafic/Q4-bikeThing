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

  longtripGet(id) {
    return this.$http.get(`/longtrips/${id}`)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addLongtrip(tripName, origin, destination, year) {
    this.$http.post('/longtrips', { tripName, origin, destination, year })
    .then((res) => {
      this.longtrips.push(res.data)
    })
    .catch((err) => {
      console.error(err);
    })
  }

  deleteLongtrip(newId){
    this.$http.delete(`/longtrips/${newId}`)
    .then((res) => {
      delete res.id;

    })
    .catch((err) => {
      console.error(err);
    })
  }

}

LongtripsService.$inject = ['$http'];

export default LongtripsService;
