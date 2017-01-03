class SegmentsService {

  constructor($http) {
    this.$http = $http;
    this.segments = this.$http.get('/segments')
      .then((response) => {
      this.segments = response.data;
    })
    this.tour = {

    };
  }

  segmentList() {
    return this.segments;
  }

  segmentGet(id) {
    return this.$http.get(`/segments/${id}`)
      .then((res) => {
        this.tour = res.data;
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addSegment(date, origin, destination, totalDistance, totalElevation, waypoints) {
    this.$http.post('/segments', { date, origin, destination, totalDistance, totalElevation, waypoints  })
    .then((res) => {
      this.segments.push(res.data)
    })
    .catch((err) => {
      console.error(err);
    })
  }

  deleteSegment(){
    let localId = this.tour.id;
    this.$http.delete(`/segments/${localId}`)
    .then((res) => {
      delete res.id;

    })
    .catch((err) => {
      console.error(err);
    })
  }

}

SegmentsService.$inject = ['$http'];

export default SegmentsService;