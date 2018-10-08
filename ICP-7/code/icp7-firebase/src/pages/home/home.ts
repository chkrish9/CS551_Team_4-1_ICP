import { Component } from '@angular/core';
import { NavController, App, ToastController } from 'ionic-angular';
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  //Declaring the variables.
  public base64Image: string = "";
  public pics: any[] = [];
  authId: string = "";

  /*
    This is constructor of home page. In this method we are getting the all pics of that particular user by passing user uid.
  */
  constructor(public navCtrl: NavController,
    private fire: AngularFireAuth,
    public fireDb: AngularFireDatabase,
    private toastCtrl: ToastController,
    private camera: Camera,
    private app: App) {
    this.authId = localStorage.getItem("uid");
    if (this.authId !== "") {
      this.fireDb.list(`images/${this.authId}`).valueChanges().subscribe(data => {
        let keys = Object.keys(data);
        this.pics = [];
        for (let i = 0; i < keys.length; i++) {
          this.pics.push(data[keys[i]]);
        }
      });
    }
  }

  /*
    This logout method this will call when user cliks on logout button. In this method we are navigating the user to login page.
  */
  logout() {
    this.app.getRootNav().setRoot(LoginPage);
  }

  /*
    This method will call when the user clicks on take photo button. 
    In this we are opening the camera and once user clicks the pic then we are saving the picture in firebase.
  */
  takePhoto() {
    const options: CameraOptions = {
      quality: 50,
      destinationType: this.camera.DestinationType.DATA_URL,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE,
      targetWidth: 1000,
      targetHeight: 1000
    }

    this.camera.getPicture(options).then((imageData) => {
      this.base64Image = 'data:image/jpeg;base64,' + imageData;
      let push = true;
      if (this.authId !== null && push === true) {
        this.fireDb.list(`images/${this.authId}`).push(this.base64Image)
          .then(() => {
            this.presentToast("Image Saved.");
            push = false;
          });
      }

    }, (err) => {
      console.log(err);
    });

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
