class TourCtrl {
  constructor(longtripsSvc) {
    this.longtripsSvc = longtripsSvc;

  }

  tour() {
    return this.longtripsSvc.tour; 
  }
}


TourCtrl.$inject = ['LongtripsService'];

export default TourCtrl;
