class LongtripsCtrl {
  constructor(longtripsSvc, auth, $state) {
    this.longtripsSvc = longtripsSvc;
    // this.cartSvc = cartSvc;
    // this.longtrips = [];
    if (!auth.signedIn) {
      $state.go('login');
    }
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


LongtripsCtrl.$inject = ['LongtripsService', 'AuthService', '$state'];

export default LongtripsCtrl;
