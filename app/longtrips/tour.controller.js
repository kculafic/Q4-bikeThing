class TourCtrl {
  constructor(longtripsSvc, auth, $state) {
    this.longtripsSvc = longtripsSvc;
    this.$state = $state;
    this.tour();

    if (!auth.signedIn) {
      $state.go('login');
    }
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



TourCtrl.$inject = ['LongtripsService', 'AuthService', '$state'];

export default TourCtrl;
