class SegmentsCreatorCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;

  }

  addSegment(date, origin, destination, totalDistance, totalElevation, waypoints) {
    this.longtripsSvc.addLongtrip(date, origin, destination, totalDistance, totalElevation, waypoints);
  }
}


SegmentsCreatorCtrl.$inject = ['SegmentsService'];

export default SegmentsCreatorCtrl;
