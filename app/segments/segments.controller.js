class SegmentsCtrl {
  constructor(segmentsSvc, auth, $state) {
    this.segmentsSvc = segmentsSvc;
    this.$state = $state;

    if (!auth.signedIn) {
      $state.go('login');
    }
  }

  segmentList() {
    return this.segmentsSvc.segmentList();
  }

  deleteSegment(id){
    console.log(id);
    console.log(this.$state);
    console.log(this.$state.params.id);
    this.segmentsSvc.deleteSegment(id)
  }

}



SegmentsCtrl.$inject = ['SegmentsService', 'AuthService', '$state'];

export default SegmentsCtrl;
