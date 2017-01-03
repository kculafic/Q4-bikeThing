class SegmentsCtrl {
  constructor(segmentsSvc) {
    this.segmentsSvc = segmentsSvc;

  }

  segmentList() {
    return this.segmentsSvc.segmentList();
  }

  deleteSegment(){
    this.segmentsSvc.deleteSegment()
  }

}



SegmentsCtrl.$inject = ['SegmentsService'];

export default SegmentsCtrl;
