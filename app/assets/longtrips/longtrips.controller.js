class LongtripsCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;
    // this.cartSvc = cartSvc;
    // this.longtrips = [];
  }

  longtripsList() {
    return this.longtripsSvc.longtripsList();
  }

  // addLongtrip(tripName, origin, destination, year) {
  //   this.cartSvc.addLongtrip(tripName, origin, destination, year);
  // }
}


LongtripsCtrl.$inject = ['LongtripsService'];

export default LongtripsCtrl;
