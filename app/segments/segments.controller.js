class SegmentsCtrl {
  constructor(segmentsSvc, auth, $state) {
    this.segmentsSvc = segmentsSvc;
    this.$state = $state;
    this.segments = {

    };
    this.waypoints = [];

    if (!auth.signedIn) {
      $state.go('login');
    }
  }

  segmentsList() {
    return this.segmentsSvc.segmentsList();
  }


  segmentGet() {
    const newId = this.$state.params.id;
    this.segmentsSvc.segmentGet(newId)
    .then((res) => {
      // console.log(res);
      this.segments = res;
      // console.log(this.segments);
      // console.log(newId);
      // console.log(this.segments);
      // this.segments.reverse();
      const latLongList = this.segments.map(segment => JSON.parse(segment.waypoints));
      this.waypoints = latLongList;
    })
    .catch((err) => {
      console.error(err);
    })
  }

  getWaypoints() {
    // this.segments.reverse();
    console.log(this.segments);
    console.log(this.waypoints);
    return this.waypoints;
  }



  deleteSegment(id){
    // console.log(id);
    this.segmentsSvc.deleteSegment(id)
  }

}



SegmentsCtrl.$inject = ['SegmentsService', 'AuthService', '$state'];

export default SegmentsCtrl;
