class LongtripsService {

  constructor($http) {
    this.$http = $http;
    this.longtrips = this.$http.get('/longtrips')
      .then((response) => {
      this.longtrips = response.data;
    })
    this.tour = {
      tripName: 'Thing',
      origin: 'Seattle',
      destination: 'Test',
      year: '2013'
    };
  }

  longtripsList() {
    return this.longtrips;
  }

  longtripGet(id) {
    return this.$http.get(`/longtrips/${id}`)
      .then((res) => {
        this.tour = res.data;
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
}

LongtripsService.$inject = ['$http'];

export default LongtripsService;
