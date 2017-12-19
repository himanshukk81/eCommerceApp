import { Component } from '@angular/core';
import { NavController,ActionSheetController } from 'ionic-angular';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SessionService } from '../../app/sessionservice';
import { LoginPage } from '../Login/Login';


@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html'
})
export class profile {
  // mobileNo:any;
  // otp:any;
  // headers:any;
  // capturedImage:any;
  // base64Image:any;
  user:any;

  constructor(public navCtrl: NavController,public http:Http,public fb: Facebook,public googlePlus: GooglePlus,public callNumber: CallNumber,public camera: Camera,public actionCtrl:ActionSheetController,public socialSharing: SocialSharing,public service:SessionService) {
   
       this.user=this.service.getUser();



    }

    ionViewDidLoad()
    {

      // alert("user info=="+this.service.getUser());

      var user=this.service.getUser();
      this.user=user[0];
      // alert("user=="+JSON.stringify(this.user));
    }

}
