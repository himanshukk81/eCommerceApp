import { Component } from '@angular/core';
import { NavController,ActionSheetController,MenuController ,ModalController,ViewController} from 'ionic-angular';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SessionService } from '../../app/sessionservice';
import { HomePage } from '../home/home';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';
// import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { Jsonp } from '@angular/http/src/http';
import { LocationTrackerProvider } from '../../providers/location-tracker';
import { profile } from '../profile/profile';
import { UsersPage } from '../users/users';
import { ProductsPage} from '../../pages/products/products';


@Component({
  selector: 'page-Login',
  templateUrl: 'Login.html'
})
export class LoginPage {
  // mobileNo:any;
  // otp:any;
  // headers:any;
  // capturedImage:any;
  // base64Image:any;

  users: FirebaseListObservable<any[]>;
  // user2: Observable<firebase.User>;
  user:any;
  loader:any;
  notifyData:any={};
  viewStatus:boolean;
  
  constructor( public menu: MenuController,public navCtrl: NavController,public http:Http,public fb: Facebook,public googlePlus: GooglePlus,public callNumber: CallNumber,public camera: Camera,public actionCtrl:ActionSheetController,public socialSharing: SocialSharing,public service:SessionService,public db: AngularFireDatabase,public modalCtrl: ModalController,public locationTracker:LocationTrackerProvider) {
    this.user={};
    this.menu.swipeEnable(false);
    
    // this.service.setUserLat();
    // this.viewStatus=false;
  }


  // sendOtp()
  // {
  //   // alert("clicked");

    
  //   // headers1.append('Accept', 'application/json');
  //   // headers.append('Content-Type', 'application/json');
  //   // headers.append('Access-Control-Allow-Origin', '*');
  //   // headers.append('Access-Control-Allow-Credentials', 'true');
  //   // headers.append("Access-Control-Allow-Methods", "POST, GET, OPTIONS, PUT, DELETE");
  //   // headers.append("Access-Control-Allow-Headers", "Content-Type, Content-Length, Accept-Encoding, X-CSRF-Token");

  //   var mobile="91"+this.mobileNo;
  //   // let options = new RequestOptions({ headers: headers });
  //       // let options = new RequestOptions({url:'GET',headers:headers1});
  //   // let options = new RequestOptions({ headers: headers });
      
  //   var smsUrl="https://control.msg91.com/api/sendotp.php?authkey=169096A9g9vil6eKqv598ab8f0&mobile="+mobile+"&otp_expiry=2"; 
    
  //    this.http.get(smsUrl,{headers: this.headers})
  //     .map(val => val.json())
  //     .subscribe(data => 
  //       {
  //         alert("Success::"+JSON.stringify(data));
  //         console.log(JSON.stringify(data))
  //       })

  //     err =>
	// 			{
	// 			 alert("Error"+err);
  //       }     
  // }


  // verify()
  // {
  //   // alert("caled");
  //   if(this.otp.length==4)
  //     {
  //     // alert("Otp length match");  
  //     var mobile="91"+this.mobileNo;  
  //     var verifyUrl="https://control.msg91.com/api/verifyRequestOTP.php?authkey=169096A9g9vil6eKqv598ab8f0&mobile="+mobile+"&otp="+this.otp;  
  //     this.http.get(verifyUrl,{headers: this.headers})
  //     .map(val => val.json())
  //     .subscribe(data => 
  //       {
  //         alert("Success::"+JSON.stringify(data));
  //         console.log(JSON.stringify(data))
  //       })

  //     err =>
	// 			{
	// 			 alert("Error"+err);
  //       }     
  //     }
  // }
  
  // resend()
  // {
  //     alert("send");
  //     var mobile="91"+this.mobileNo;       
  //     var verifyUrl="https://control.msg91.com/api/retryotp.php?authkey=169096A9g9vil6eKqv598ab8f0&mobile="+mobile;
  //     this.http.get(verifyUrl,{headers: this.headers})
  //     .map(val => val.json())
  //     .subscribe(data => 
  //       {
  //         alert("Success::"+JSON.stringify(data));
  //         console.log(JSON.stringify(data))
  //       })

  //     err =>
	// 			{
	// 			 alert("Error"+err);
  //       }     
      

  // } 

  // fbLogin()
  // {
  //   this.fb.login(['email', 'public_profile'])
  //   .then((res: FacebookLoginResponse) =>{
  //     this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile =>{
  //       var data= {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
  //       alert('Logged into Facebook!'+JSON.stringify(data));
  //     })
  //   })  
  //   .catch(e =>{
  //     alert("Error Logged in"+e);
  //   }) 
  // }

  // googleLogin()
  // {
  //   this.googlePlus.login({})
  //   .then(res =>{
  //     alert("Success::--"+res);
  //     alert("google data::"+JSON.stringify(res));
  //   }) 
  //   .catch(err =>{
  //     alert("Error::--"+err);
  //     alert("google data errr::"+JSON.stringify(err));
  //     }) 
  // }

  // call()
  // {
  //   //  alert("Calling");
  //   this.callNumber.callNumber("8510070977", true)
  //   .then(() =>{
  //     // alert("Launching dialer");
  //   }) 
  //   .catch(() =>{
  //     alert("Error While Launching Dialer");
  //   }) 
  // }
  // takePictureWithType(type)
  // {
  //   const options: CameraOptions = {
  //       quality: 100,
  //       destinationType: this.camera.DestinationType.DATA_URL,
  //       encodingType: this.camera.EncodingType.JPEG,
  //       sourceType: type,
  //   }

  //   this.camera.getPicture(options).then((imageData) => {
  //   // imageData is either a base64 encoded string or a file URI
  //   // If it's base64:

  //   this.capturedImage=imageData;
  //   this.base64Image = 'data:image/jpeg;base64,' + imageData;

  //   // alert("image::-"+base64Image);
  //   }, (err) => {
  //   // Handle error
  //   });
  // }

  // shareApp()
  // {
  //   this.socialSharing.share().then(() => {
  //     // Sharing via email is possible
  //   }).catch(() => {
  //     // Sharing via email is not possible
  //   });

  // }
  // takePicture()
  // { 
  //   // alert("Calling");

  //   let actionSheet = this.actionCtrl.create({
  //     title: 'Select Image Source',
  //     buttons: [
  //       {
  //         text: 'Load from Library',
  //         handler: () => {
  //           this.takePictureWithType(this.camera.PictureSourceType.PHOTOLIBRARY);
  //         }
  //       },
  //       {
  //         text: 'Use Camera',
  //         handler: () => {
  //           this.takePictureWithType(this.camera.PictureSourceType.CAMERA);
  //         }
  //       },
  //       {
  //         text: 'Cancel',
  //         role: 'cancel'
  //       }
  //     ]
  //   });
  //   actionSheet.present();
  // }


  // sendPostData()
  // {
  //   alert("New Post-------------");
  //     var body={
  //       "title":"Hello Post api"
  //     };
  //     let options = new RequestOptions
  //     ({
     
  //       headers:this.headers,
  //       body:body
  //       });
      
  //    var postUrl="http://autorepair-testapi.onlinewebshop.net/wp-json/wp/v2/posts";     
  //    this.http.post(postUrl,options)
  //     .map(val => val.json())
  //     .subscribe(data => 
  //       {
  //         alert("Success::"+JSON.stringify(data));
  //         console.log(JSON.stringify(data))
  //       })

  //     err =>
	// 			{
	// 			 alert("Error"+err);
  //       }     
    

  // } 



  // sendNotification()
  // {
  //    var notifyUrl="http://klaspring.staging.wpengine.com/push_api.php?token="+this.service.getToken();     
  //    this.http.get(notifyUrl,{headers: this.headers})
  //     // .map(val => val.json())
  //     .subscribe(data => 
  //       {
  //         alert("Success::"+JSON.stringify(data));
  //         console.log(JSON.stringify(data))
  //       })
  //       err =>
	// 			{
	// 			 alert("Error"+err);
  //       }     
  // }


  start()
  {
    this.locationTracker.startTracking();
  }

  stop()
  {
    this.locationTracker.stopTracking();
  }
  signUp()
  {
    let profileModal = this.modalCtrl.create(RegisterUser);
    profileModal.present();
  }

  login2()
  {
     
        // var notifyUrl="http://klaspring.staging.wpengine.com/push_api.php?token="+this.service.getToken();     
          var notifyUrl="http://localhost:3000/sendNotification";
        //alert(notifyUrl);
      
          var timer = setTimeout(() => {

            this.notifyData.senderEmail="himanshu.kumar@proapptive.in";
            this.notifyData.message="Hello this is test";
            this.notifyData.deviceToken="e-NTNyrpFFE:APA91bEsfqk1BZBD-CLynlouAvybU9Jnli8tRyoNdDvxTTq1EYeXzwm8b8U7WPmgu87_ptTmaC4kG0KrVTzNKKO9rEhDTgm2fSVB1GUAq_czGzDOXISkW0YMyRKaKVX9OMW1Z94THhfj";
            this.http.post(notifyUrl,this.notifyData)
            // .map(val => val.json())
            .subscribe(data => 
              {
                //alert("Success::"+JSON.stringify(data));
                console.log(JSON.stringify(data))
              })
              err =>
              {
               console.log("failed") 
              //alert("Error"+err);
              }     
          }, 1000);
     
  }
  login()
  {    
      if(!this.user.email)
      {
        this.service.showToast2("Please Enter Valid email");
        return;
      }
      if(!this.user.password)
      {
        this.service.showToast2("Please Enter Password");
        return;
      }
      this.loader=true;
      var email=this.user.email.toLowerCase();

      email=email.replace(/\s/g, ""); 
      
      var item=this.db.list('/user_detail',{
        query:{
          orderByChild:'email',
          equalTo:email,
        },
      }).subscribe(snapshot =>{
              var value=snapshot;
              if(value.length>0)
              {
                var password=false;
                for(var i=0;i<value.length;i++)
                {
                  if(value[i].password==this.user.password)
                  {
                    password=true;
                    if(this.service.getToken())
                    {
                      value[i].deviceToken=this.service.getToken();
                    }
                    this.service.setUser(value[i]);

                    console.log("user----"+JSON.stringify(this.service.getUser()));

                    
                  }
                }
                if(!password)
                {
                  console.log("Password not exist");
                  this.service.showToast2("Your Password is incorrect");
                }
                else
                {
                  // alert("updating user device token==="+this.service.getUser().deviceToken);
                  if(this.service.getUser().deviceToken)
                  {
                    this.updateDeviceToken();
                  }
                  this.navCtrl.setRoot(ProductsPage);
                  this.navCtrl.popToRoot();
                }
              } 
              else
              {
                this.service.showToast2("Email Not Exist");
                console.log("Email exist");
              }
              this.loader=false;
        },error=>{
          var err1="Error=="+error;
          this.service.showToast2(err1);
        });
  }
  
  fbLogin()
  {
    this.fb.login(['email', 'public_profile'])
    .then((res: FacebookLoginResponse) =>{
      this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(profile =>{
      var data= {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
        if(!data.email)
        {
          this.service.showToast2("Please update your email id in your facebook account");
        }
        else
        {
          this.verifyUser(data);
        }
      })
    })  
    .catch(e =>{
       this.loader=false; 
      alert("Error Logged in"+e);
    }) 
  }

  googleLogin()
  {
    this.googlePlus.login({})
    .then(res =>{
      // alert("Success::--"+JSON.stringify(res));
      // alert("google data::"+JSON.stringify(res));
      // this.service.setUser(res);
      // this.navCtrl.setRoot(HomePage);
      // this.navCtrl.popToRoot();
      if(!res.email)
      {
        this.service.showToast("Please update your email id in your gmail account");
      }
      else
      {
        this.verifyUser(res);
      }
    }) 
    .catch(err =>{
       this.loader=false; 
      alert("Error::--"+err);
      // alert("google data errr::"+JSON.stringify(err));
      }) 
  }

  // ionViewDidLoad()
  // {
  //   alert("ionViewDidLoad");
  // }

  // ionViewWillEnter()
  // {
  //   alert("ionViewWillEnter");
  // }


  // ionViewDidEnter()
  // {
  //   alert("ionViewDidEnter");
  // }

  // ionViewWillLeave()
  // {
  //   alert("ionViewWillLeave");
  // }


  // ionViewDidLeave()
  // {
  //   alert("ionViewDidLeave");
  // }

  // ionViewWillUnload()
  // {
  //   alert("ionViewWillUnload");
  // }


  // ionViewCanEnter()
  // {
  //   alert("ionViewCanEnter");
  // }


  // ionViewCanLeave()
  // {
  //   alert("ionViewCanLeave")
  // }

  verifyUser(data)
  {

    // this.service.showToast(data.email);
    var email=data.email.toLowerCase();

    email=email.replace(/\s/g, ""); 
    var first=true;
    // alert("email==="+email);
    var item=this.db.list('/user_detail',{
      query:{
        orderByChild:'email',
        equalTo:email,
        
      },
    }).subscribe(snapshot => {


      if(first)
      {

        // alert("snapshot=="+JSON.stringify(snapshot));


        
        if(snapshot.length>0)
        {

          if(snapshot[0].userType=="M")
          {
            this.service.showToast("Email Id Already Exist for this account");
          }
          else
          {
          
            this.service.setUser(data);
            this.navCtrl.setRoot(HomePage);
            this.navCtrl.popToRoot();
          } 
        }
        else
        {
          this.registerUser(data)
        }
        first=false;
      }
      
    },error=>{
      // this.service.showToast2("Something went wrong please try again");
      return;
    })     
  }
  updateDeviceToken()
  {
    var userInfo=this.service.getUser();
    userInfo.login=true;
    this.db.object('/user_detail/'+userInfo.key).update(userInfo).then((profile: any) => {
               console.log("Successfully updated location====")
              //  this.showToast("Successfully updated location====");
            })
          .catch((err: any) => {
              // return new Response('Unable to save profile at this time, please try again later.');
              var error="error=="+err;
             
          });
  }
  registerUser(userInfo)
  {
    
    // alert("User info==="+JSON.stringify(userInfo));
    // userInfo={};
    userInfo.userType="D";
    userInfo.latitude=28.4489669;
    userInfo.longitude=77.068052;

    if(this.service.getToken())
    {
      userInfo.deviceToken=this.service.getToken();
    }
    this.db.list('/user_detail').push(userInfo).then((key) => {
        console.log('all good');

        // alert("All good=="+resolve);
        // this.service.showToast2("Successfully Logged in");
        userInfo.key=key;
        this.service.setUser(userInfo);
        this.navCtrl.setRoot(HomePage);
        this.navCtrl.popToRoot();
      }, reject => {
        console.log('error');
      })
  }

}
@Component({
  selector: 'page-Login',
  templateUrl: 'register.html'
})

export class RegisterUser{
  user:any;
  firstTime:boolean=true;

  first:boolean=true;
  // ref:any;
  ref: FirebaseListObservable<any[]>;
  constructor(public navCtrl:NavController, public db: AngularFireDatabase,public viewCtrl:ViewController,public modalCtrl:ModalController,public service:SessionService) {
      // this.tasks = db.list('/user_detail');
      // console.log("Data="+this.tasks);
      // this.ref=db.list('/user_detail');
      this.user={};
    }


    saveUser()
    {
      console.log(this.user);

      if(this.firstTime)
      {
          
          if(!this.user.first_name)
          {
            this.service.showToast("Please Enter Your Name");
            return;
          }

          if(!this.user.mobile)
          {
            this.service.showToast("Please Enter Your Mobile Number");
            return;
          }

          if(!this.user.password)
          {
            this.service.showToast("Please Enter Your Password");
            return;
          }

          if(!this.user.confirmPassword)
          {
            this.service.showToast("Please Enter Your Confirm Password");
            return;
          }

          if(this.user.password!=this.user.confirmPassword)
          {
            this.service.showToast("Password  not matching");
            return;
          }
          this.user.email=this.user.email.toLowerCase();
          // var email=data.email.toLowerCase();
          this.user.email=this.user.email.replace(/\s/g, "");
          this.user.userType="M";
          // var first=true;
          // alert("597");  
          this.firstTime=false;
          this.getUserList();
          
          
      }
      
      
     
      // this.db.list('/user_detail').push(this.user);
      // this.closeModal();   
      // this.ref.set(this.user);
      // console.log(this.ref.key);
    }


    saveUserInfo(data)
    {
      if(data.length>0)
      {
          // alert("Email Already Exist");
          this.firstTime=true;
          this.service.showToast2("Email id already exist");

      }
      else if(data.length==0)
      {
        try{
          this.user.latitude=0;
          this.user.longitude=0;
          // this.db.list('/user_detail').push(this.user).then(resolve => {
          //   console.log('all good');
          //   // this.service.setUser(data); 
          //   // alert("All good==");
          //   // this.service.showToast2("Successfully Logged in");
            
          //   // this.service.setUser(this.user);
          //   // this.db.object('/user_detail/'+this.user.$key).remove();
          //   // setInterval(() => {
          //   //   this.user.latitude+=1;
          //   //   this.user.longitude+=1;   
          //   //   this.db.object('/user_detail/'+this.user.$key).update(this.user).then((profile: any) => {
          //   //         console.log("Successfully updated location====")
                  
          //   //     })
          //   //     .catch((err: any) => {
          //   //         var error="error=="+err;
          //   //     });
          //   // },100);

          //   this.getUserList();
          // }, reject => {
          //   console.log('error');
          // })

                    if(this.service.getToken())
                    {
                      this.user.deviceToken=this.service.getToken();  
                    }
                    
                    this.db.list('/user_detail').push(this.user).then(({key}) => 
                    {

                      // this.user.latitude="12233";
                      // this.user.longitude="12";  


                      
                      this.user.key=key;
                      this.service.setUser(this.user);
                      this.closeModal();
                      this.navCtrl.setRoot(HomePage);
                      this.navCtrl.popToRoot();
                      this.firstTime=false;
                      this.updateKey(this.user)
                    },error=>{

                      this.firstTime=true;
                      // alert("Error while saving please try again");
                      this.service.showToast2("Something went wrong please try again");
                    }) 

                    
            // this.user=this.service.getUser();    
        }
        catch(error)
        {
          var errorMessage="dssdfsd==="+error;

          alert(errorMessage);
          this.service.showToast2(errorMessage);
          this.firstTime=true;
          // this.service.showToast("Something Went Wrong Please Try again");
        }
    
        
        // return;
      }
    }
    
    closeModal()
    {
      this.viewCtrl.dismiss();
    }


    updateKey(user)
    {
        this.db.object('/user_detail/'+user.key).update(user).then((profile: any) => {
            // return new Response('Profile has been saved successfully');
              console.log("Successfully updated location====")
            //  this.showToast("Successfully updated location====");
          })
        .catch((err: any) => {
            // return new Response('Unable to save profile at this time, please try again later.');
            var error="error=="+err;
            // this.showToast(error);
        });
    }


    getUserList()
    {


      // alert("Getting user list");
       var item=this.db.list('/user_detail',{
            query:{
              orderByChild:'email',
              equalTo:this.user.email.toLowerCase(),
              
            },
            
          }).subscribe(snapshot => {
                  this.saveUserInfo(snapshot); 
                  this.firstTime=true;
          },error=>{
            // alert("Helllloo");
            this.firstTime=true;
            this.service.showToast2("Something went wrong please try again");
            return;
          })

          // return item;
    }

     


         
}


