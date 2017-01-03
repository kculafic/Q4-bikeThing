class TourCtrl {
  constructor(longtripsSvc, $state) {
    this.longtripsSvc = longtripsSvc;
    this.$state = $state;
    this.tour();
  }

  tour() {
    const id = this.$state.params.id;
    this.longtripsSvc.longtripGet(id).then(
      (res) => {
        this.tour = res;
      }
    );
  }

  deleteLongtrip(){
    this.longtripsSvc.deleteLongtrip()
  }

}



TourCtrl.$inject = ['LongtripsService', '$state'];

export default TourCtrl;
