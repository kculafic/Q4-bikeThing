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
      // console.log(newId);
      // console.log(this.segments);
      let revSeg = this.segments.reverse();
      console.log(revSeg);
      for (let i = 0; i < revSeg.length - 1; i++) {

        // let parsedSeg = JSON.parse(revSeg[i]);
        //console.log(parsedSeg);
        let newObj = {
          location: {
            lat: revSeg[i].waypoints.lat,
            lng: revSeg[i].waypoints.lng
          } ,
          stopover: true
        };
        console.log(newObj);
        this.waypoints.push(newObj);
      }

    })
  }



  deleteSegment(id){
    console.log(id);
    this.segmentsSvc.deleteSegment(id)
  }

}



SegmentsCtrl.$inject = ['SegmentsService', 'AuthService', '$state'];

export default SegmentsCtrl;
