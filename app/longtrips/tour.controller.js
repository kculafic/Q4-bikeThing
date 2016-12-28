class TourCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;

  }

  tour() {
    return this.longtripsSvc.tour;
  }

  deleteLongtrip(){
    this.longtripsSvc.deleteLongtrip()
  }

}



TourCtrl.$inject = ['LongtripsService'];

export default TourCtrl;
