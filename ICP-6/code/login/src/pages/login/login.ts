import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RegisterPage } from '../register/register';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  username: string = "";
  password: string = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  /*
    This method will call when the user clicks on Login button. 
    In this method we are validating the user exists in localstorage or not then if exists setup the rootpage to home. else show toaster message.
  */
  login() {
    var users = JSON.parse(localStorage.getItem("users"));
    var username = this.username;
    var password = this.password;
    if (this.username !== "" && this.password !== "") {
      var user = users.filter(function (el) {
        return (el.username === username && el.password === password)
      });
      if (user.length > 0) {
        localStorage.setItem("loggedInUser", JSON.stringify(user[0]));
        this.navCtrl.setRoot(HomePage);
      } else {
        this.presentToast("Invalid Username/Password.");
      }
    }else{
      this.presentToast("Please fill all the details and login.");
    }

  }

  /*
    This method will call when the user clicks in new user button.
    In this method we are navigating the user to register page by setup the rootpage to RegisterPage.
  */
  register() {
    this.navCtrl.setRoot(RegisterPage);
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
