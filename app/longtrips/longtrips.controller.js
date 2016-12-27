class LongtripsCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;
    // this.cartSvc = cartSvc;
    // this.longtrips = [];
  }

  longtripsList() {
    return this.longtripsSvc.longtripsList();
  }

  // longtripGet(){
  //   return this.longtripsSvc.longtripGet();
  // }
  //
  //
  // addLongtrip(tripName, origin, destination, year) {
  //   this.longtripsSvc.addLongtrip(tripName, origin, destination, year);
  // }

}


LongtripsCtrl.$inject = ['LongtripsService'];

export default LongtripsCtrl;
