class SegmentsCreatorCtrl {
  constructor(segmentsSvc, $state) {
    this.segmentsSvc = segmentsSvc;
    this.$state = $state;
  }

  addSegment(longtripsId, date, origin, destination, totalDistance, totalElevation, waypoints) {
    // console.log(this.$state.params.id);
    longtripsId = this.$state.params.id;
    
    this.segmentsSvc.addSegment(longtripsId, date, origin, destination, totalDistance, totalElevation, waypoints);
  }

  // addSegment(date, origin, destination, totalDistance, totalElevation, waypoints) {
  //   this.segmentsSvc.addSegment(date, origin, destination, totalDistance, totalElevation, waypoints);
  // }

}


SegmentsCreatorCtrl.$inject = ['SegmentsService', '$state'];

export default SegmentsCreatorCtrl;
