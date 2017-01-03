class SegmentsCreatorCtrl {
  constructor(segmentsSvc) {
    this.segmentsSvc = segmentsSvc;

  }

  addSegment(date, origin, destination, totalDistance, totalElevation, waypoints) {
    this.segmentsSvc.addSegment(date, origin, destination, totalDistance, totalElevation, waypoints);
  }
}


SegmentsCreatorCtrl.$inject = ['SegmentsService'];

export default SegmentsCreatorCtrl;
