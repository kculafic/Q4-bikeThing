class SegmentsService {

  constructor($http) {
    this.$http = $http;


    // this.segments = this.$http.get('/segments')
    //   .then((response) => {
    //   this.segments = response.data;
    // })
    this.segments = {

    };
  }

  segmentsList() {
    return this.segments;
  }

  segmentGet(id) {
    return this.$http.get(`/longtrips/segments/${id}`)
      .then((res) => {
        this.segments = res.data;
        return res.data;
      })
      .catch((err) => {
        console.error(err);
      });
  }

  addSegment(longtripsId, date, origin, destination, totalDistance, totalElevation, waypoints) {
    this.$http.post('/segments/', { longtripsId, date, origin, destination, totalDistance, totalElevation, waypoints  })
    .then((res) => {
      this.segments.push(res.data)
    })
    .catch((err) => {
      console.error(err);
    })
  }

// broken //
  deleteSegment(id){
    // let localId = this.params;
    // console.log(localId);
    this.$http.delete(`/segments/${id}`)
    .then((res) => {
      console.log(res.data);
      delete res.id;

    })
    .catch((err) => {
      console.error(err);
    })
  }

}

SegmentsService.$inject = ['$http'];

export default SegmentsService;
