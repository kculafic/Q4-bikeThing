class SegmentsCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;

  }

  segmentList() {
    return this.longtripsSvc.segmentList();
  }

  deleteSegment(){
    this.longtripsSvc.deleteSegment()
  }

}



SegmentsCtrl.$inject = ['SegmentsService'];

export default SegmentsCtrl;
