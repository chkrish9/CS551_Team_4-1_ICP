import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  //Declaring the variables.
  firstname: string = "";
  lastname: string = "";
  username: string = "";
  isupdate: boolean = false;
  authId: string = "";

  /*
    This is constructor of About page. In this method we are getting the user data passing user uid.
  */
  constructor(public navCtrl: NavController,
    public fireDb: AngularFireDatabase,
    private toastCtrl: ToastController,
    public fire: AngularFireAuth) {
    this.authId = localStorage.getItem("uid");
    this.fireDb.list(`profile/${this.authId}`).valueChanges().subscribe(data => {
      console.log(JSON.stringify(this.authId));
      if (data.length > 0) {
        this.isupdate = true;
        this.firstname = data[0]['firstname'];
        this.lastname = data[0]['lastname'];
        this.username = data[0]['username'];
      }
    });

  }

  /*
    In this method is used to update or save user data. 
    If the user is new then we are saving the user details else we are updating the user.
  */
  save() {
    let user = {
      "username": this.username,
      "firstname": this.firstname,
      "lastname": this.lastname
    }
    if (this.authId !== null) {
      if (!this.isupdate) {
        this.fireDb.list(`profile/${this.authId}`).push(user)
          .then(() => {
            this.presentToast("User Saved.");
          });
      } else {
        this.fireDb.list(`profile/${this.authId}`).update('0', user)
          .then(() => {
            this.presentToast("User updated.");
          });
      }
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
