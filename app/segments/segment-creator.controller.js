class SegmentsCreatorCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;

  }

  addSegment(tripName, origin, destination, year) {
    this.longtripsSvc.addLongtrip(tripName, origin, destination, year);
  }
}


SegmentsCreatorCtrl.$inject = ['LongtripsService'];

export default SegmentsCreatorCtrl;
