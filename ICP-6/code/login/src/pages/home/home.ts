import { Component } from '@angular/core';
import { IonicPage, NavController,ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  //Declaring the variables
  name:string;
  constructor(public navCtrl: NavController, public toastCtrl: ToastController) {
    //Set up the loggedIn user name.
    var loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
    this.name = loggedInUser.firstname +" "+loggedInUser.lastname; 
  }
  /*
    This method will call when the user clicks on logout button in home page. 
    This method will remove the loggedInUser from the localstorage and set rootpage to login.
  */
  logout(){
    localStorage.removeItem("loggedInUser");
    this.presentToast("Logout successfully.");
    this.navCtrl.setRoot(LoginPage);
  }

  /*
    This method will show the Toast messages.
  */
  presentToast(msg) {
    let toast = this.toastCtrl.create({
      message: msg,
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }
}
