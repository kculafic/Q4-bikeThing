class LongtripCreatorCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;

  }

  addLongtrip(tripName, origin, destination, year) {
    this.longtripsSvc.addLongtrip(tripName, origin, destination, year);
  }
}


LongtripCreatorCtrl.$inject = ['LongtripsService'];

export default LongtripCreatorCtrl;
