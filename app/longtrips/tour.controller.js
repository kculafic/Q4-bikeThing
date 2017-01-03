class TourCtrl {
  constructor(longtripsSvc, $state) {
    this.longtripsSvc = longtripsSvc;
    this.$state = $state;
    this.tour();
  }

  tour() {
    const id = this.$state.params.id;
    this.longtripsSvc.longtripGet(id)
      .then((res) => {
          this.tour = res;
      });
  }

  deleteLongtrip(){
    const newId = this.$state.params.id;
    this.longtripsSvc.deleteLongtrip(newId);
  }

}



TourCtrl.$inject = ['LongtripsService', '$state'];

export default TourCtrl;
