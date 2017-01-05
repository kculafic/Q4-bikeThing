class SegmentsCtrl {
  constructor(segmentsSvc, auth, $state) {
    this.segmentsSvc = segmentsSvc;
    this.$state = $state;
    this.segments = {

    };

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
          this.segments = res;
          console.log(newId);
          console.log(this.segments.destination);
      })
  }



  deleteSegment(id){
    console.log(id);
    this.segmentsSvc.deleteSegment(id)
  }

}



SegmentsCtrl.$inject = ['SegmentsService', 'AuthService', '$state'];

export default SegmentsCtrl;
