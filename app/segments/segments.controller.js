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

  // longtripGet(id) {
  //   this.longtripsSvc.longtripGet(id)
  // }

  segmentGet() {
    console.log(this.$state.params.id);
    const newId = this.$state.params.id;
    this.segmentsSvc.segmentGet(newId)
      .then((res) => {
          console.log(res);;
      });
  }

  deleteSegment(id){
    // console.log(id);
    // console.log(this.$state);
    // console.log(this.$state.params.id);
    this.segmentsSvc.deleteSegment(id)
  }

}



SegmentsCtrl.$inject = ['SegmentsService', 'AuthService', '$state'];

export default SegmentsCtrl;
