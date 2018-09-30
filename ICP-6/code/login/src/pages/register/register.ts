import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  user = {
    "username":"",
    "firstname":"",
    "lastname":"",
    "password":""
  };
  cnfpassword:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  /*
    This method will call when the user clicks on Submit button. 
    In this method we are validating the user entered details and then store them in localstorage.
  */
  register() {
    var users = JSON.parse(localStorage.getItem("users"));
    if (this.user.username !== "" && this.user.firstname !== "" && this.user.lastname !== "" && this.user.password !== "" && this.cnfpassword !== "") {
      if(this.user.password === this.cnfpassword){
      users.push(this.user);
      localStorage.setItem("users", JSON.stringify(users));
      this.presentToast("Successfully registered.");
      this.navCtrl.setRoot(LoginPage);
      }else{
        this.presentToast("Password missmatch.");
      }
    }else{
      this.presentToast("Please fill all the details.");
    }
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
