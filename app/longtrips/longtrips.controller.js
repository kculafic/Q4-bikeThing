class LongtripsCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;
    // this.cartSvc = cartSvc;
    // this.longtrips = [];
  }

  longtripsList() {
    return this.longtripsSvc.longtripsList();
  }

  longtripGet(id) {
    this.longtripsSvc.longtripGet(id)
  }


  //
  //
  // addLongtrip(tripName, origin, destination, year) {
  //   this.longtripsSvc.addLongtrip(tripName, origin, destination, year);
  // }

}


LongtripsCtrl.$inject = ['LongtripsService'];

export default LongtripsCtrl;
