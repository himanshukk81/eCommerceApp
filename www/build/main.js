webpackJsonp([0],{

/***/ 150:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return RegisterUser; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_sessionservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_angularfire2_database_deprecated__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__providers_location_tracker__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_products_products__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};














var LoginPage = /** @class */ (function () {
    function LoginPage(menu, navCtrl, http, fb, googlePlus, callNumber, camera, actionCtrl, socialSharing, service, db, modalCtrl, locationTracker) {
        this.menu = menu;
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.callNumber = callNumber;
        this.camera = camera;
        this.actionCtrl = actionCtrl;
        this.socialSharing = socialSharing;
        this.service = service;
        this.db = db;
        this.modalCtrl = modalCtrl;
        this.locationTracker = locationTracker;
        this.notifyData = {};
        this.user = {};
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
    LoginPage.prototype.start = function () {
        this.locationTracker.startTracking();
    };
    LoginPage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    LoginPage.prototype.signUp = function () {
        var profileModal = this.modalCtrl.create(RegisterUser);
        profileModal.present();
    };
    LoginPage.prototype.login2 = function () {
        var _this = this;
        // var notifyUrl="http://klaspring.staging.wpengine.com/push_api.php?token="+this.service.getToken();     
        var notifyUrl = "http://localhost:3000/sendNotification";
        //alert(notifyUrl);
        var timer = setTimeout(function () {
            _this.notifyData.senderEmail = "himanshu.kumar@proapptive.in";
            _this.notifyData.message = "Hello this is test";
            _this.notifyData.deviceToken = "e-NTNyrpFFE:APA91bEsfqk1BZBD-CLynlouAvybU9Jnli8tRyoNdDvxTTq1EYeXzwm8b8U7WPmgu87_ptTmaC4kG0KrVTzNKKO9rEhDTgm2fSVB1GUAq_czGzDOXISkW0YMyRKaKVX9OMW1Z94THhfj";
            _this.http.post(notifyUrl, _this.notifyData)
                .subscribe(function (data) {
                //alert("Success::"+JSON.stringify(data));
                console.log(JSON.stringify(data));
            });
            (function (err) {
                console.log("failed");
                //alert("Error"+err);
            });
        }, 1000);
    };
    LoginPage.prototype.login = function () {
        var _this = this;
        if (!this.user.email) {
            this.service.showToast2("Please Enter Valid email");
            return;
        }
        if (!this.user.password) {
            this.service.showToast2("Please Enter Password");
            return;
        }
        this.loader = true;
        var email = this.user.email.toLowerCase();
        email = email.replace(/\s/g, "");
        var item = this.db.list('/user_detail', {
            query: {
                orderByChild: 'email',
                equalTo: email,
            },
        }).subscribe(function (snapshot) {
            var value = snapshot;
            if (value.length > 0) {
                var password = false;
                for (var i = 0; i < value.length; i++) {
                    if (value[i].password == _this.user.password) {
                        password = true;
                        if (_this.service.getToken()) {
                            value[i].deviceToken = _this.service.getToken();
                        }
                        _this.service.setUser(value[i]);
                        console.log("user----" + JSON.stringify(_this.service.getUser()));
                    }
                }
                if (!password) {
                    console.log("Password not exist");
                    _this.service.showToast2("Your Password is incorrect");
                }
                else {
                    // alert("updating user device token==="+this.service.getUser().deviceToken);
                    if (_this.service.getUser().deviceToken) {
                        _this.updateDeviceToken();
                    }
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_13__pages_products_products__["a" /* ProductsPage */]);
                    _this.navCtrl.popToRoot();
                }
            }
            else {
                _this.service.showToast2("Email Not Exist");
                console.log("Email exist");
            }
            _this.loader = false;
        }, function (error) {
            var err1 = "Error==" + error;
            _this.service.showToast2(err1);
        });
    };
    LoginPage.prototype.fbLogin = function () {
        var _this = this;
        this.fb.login(['email', 'public_profile'])
            .then(function (res) {
            _this.fb.api('me?fields=id,name,email,first_name,picture.width(720).height(720).as(picture_large)', []).then(function (profile) {
                var data = { email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name'] };
                if (!data.email) {
                    _this.service.showToast2("Please update your email id in your facebook account");
                }
                else {
                    _this.verifyUser(data);
                }
            });
        })
            .catch(function (e) {
            _this.loader = false;
            alert("Error Logged in" + e);
        });
    };
    LoginPage.prototype.googleLogin = function () {
        var _this = this;
        this.googlePlus.login({})
            .then(function (res) {
            // alert("Success::--"+JSON.stringify(res));
            // alert("google data::"+JSON.stringify(res));
            // this.service.setUser(res);
            // this.navCtrl.setRoot(HomePage);
            // this.navCtrl.popToRoot();
            if (!res.email) {
                _this.service.showToast("Please update your email id in your gmail account");
            }
            else {
                _this.verifyUser(res);
            }
        })
            .catch(function (err) {
            _this.loader = false;
            alert("Error::--" + err);
            // alert("google data errr::"+JSON.stringify(err));
        });
    };
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
    LoginPage.prototype.verifyUser = function (data) {
        var _this = this;
        // this.service.showToast(data.email);
        var email = data.email.toLowerCase();
        email = email.replace(/\s/g, "");
        var first = true;
        // alert("email==="+email);
        var item = this.db.list('/user_detail', {
            query: {
                orderByChild: 'email',
                equalTo: email,
            },
        }).subscribe(function (snapshot) {
            if (first) {
                // alert("snapshot=="+JSON.stringify(snapshot));
                if (snapshot.length > 0) {
                    if (snapshot[0].userType == "M") {
                        _this.service.showToast("Email Id Already Exist for this account");
                    }
                    else {
                        _this.service.setUser(data);
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
                        _this.navCtrl.popToRoot();
                    }
                }
                else {
                    _this.registerUser(data);
                }
                first = false;
            }
        }, function (error) {
            // this.service.showToast2("Something went wrong please try again");
            return;
        });
    };
    LoginPage.prototype.updateDeviceToken = function () {
        var userInfo = this.service.getUser();
        userInfo.login = true;
        this.db.object('/user_detail/' + userInfo.key).update(userInfo).then(function (profile) {
            console.log("Successfully updated location====");
            //  this.showToast("Successfully updated location====");
        })
            .catch(function (err) {
            // return new Response('Unable to save profile at this time, please try again later.');
            var error = "error==" + err;
        });
    };
    LoginPage.prototype.registerUser = function (userInfo) {
        var _this = this;
        // alert("User info==="+JSON.stringify(userInfo));
        // userInfo={};
        userInfo.userType = "D";
        userInfo.latitude = 28.4489669;
        userInfo.longitude = 77.068052;
        if (this.service.getToken()) {
            userInfo.deviceToken = this.service.getToken();
        }
        this.db.list('/user_detail').push(userInfo).then(function (key) {
            console.log('all good');
            // alert("All good=="+resolve);
            // this.service.showToast2("Successfully Logged in");
            userInfo.key = key;
            _this.service.setUser(userInfo);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
            _this.navCtrl.popToRoot();
        }, function (reject) {
            console.log('error');
        });
    };
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Login',template:/*ion-inline-start:"D:\Ecommerce\src\pages\Login\Login.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>Login</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n\n\n  <ion-list>\n\n    <ion-item>\n\n      <ion-label floating>Email</ion-label>\n\n      <ion-input type="email" [(ngModel)]="user.email"></ion-input>\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n      <ion-label floating>Password</ion-label>\n\n      <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n\n    </ion-item>\n\n\n\n\n\n\n\n\n\n    <!-- <button ion-button full primary (click)="start()">Start Tracking</button>\n\n    <button ion-button full primary (click)="stop()">Stop Tracking</button> -->\n\n  </ion-list>\n\n\n\n<div padding>\n\n  <button ion-button block (click)="login()">Sign In</button>\n\n</div>\n\n\n\n\n\n<div text-center>\n\n  <button ion-button round outline (click)="signUp()">New User?</button>\n\n</div>\n\n\n\n\n\n<img src="../../assets/imgs/user.png" style="width:80px;height:80px">\n\n<br/><br/><br/><br/>\n\n<!-- <div>\n\n  <button ion-button round outline (click)="updateUser()">update user</button>\n\n</div> -->\n\n\n\n  <!-- <ion-list text-center>\n\n     <ion-item >\n\n      <ion-label color="primary" stacked>Mobile No.</ion-label>\n\n      <ion-input clearInput [(ngModel)]="user.mobileNo"></ion-input>\n\n     </ion-item> \n\n\n\n     <ion-item>\n\n      <ion-label color="primary" stacked>Password</ion-label>\n\n      <ion-input clearInput [(ngModel)]="user.password"></ion-input>\n\n     </ion-item> \n\n\n\n     <ion-item>\n\n      <button ion-button outline (click)="login()">Login</button> \n\n     </ion-item>\n\n     <br/><br/><br/>\n\n\n\n\n\n    <ion-grid>\n\n      <ion-row>\n\n        <ion-col>\n\n            <button ion-button  (click)="fbLogin()"><ion-icon name="logo-facebook"></ion-icon> <span style="color:white"> Facebook</span></button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button color="danger" (click)="googleLogin()"><ion-icon name="logo-googleplus"></ion-icon> <span style="color:white">   Google</span></button> \n\n        </ion-col>\n\n      </ion-row>\n\n    </ion-grid>\n\n  </ion-list>  -->\n\n\n\n\n\n  <ion-grid>\n\n      <ion-row>\n\n        <ion-col col-1>\n\n\n\n        </ion-col>\n\n        <ion-col>\n\n            <button ion-button  (click)="fbLogin()"><ion-icon name="logo-facebook"></ion-icon> <span style="color:white"> Facebook</span></button>\n\n        </ion-col>\n\n        <ion-col>\n\n          <button ion-button color="danger" (click)="googleLogin()"><ion-icon name="logo-googleplus"></ion-icon> <span style="color:white">   Google</span></button> \n\n        </ion-col>\n\n        <ion-col col-1>\n\n\n\n        </ion-col>\n\n      </ion-row>\n\n  </ion-grid> \n\n  <div text-center *ngIf="loader">\n\n          <ion-spinner name="circles" ></ion-spinner>\n\n  </div>  \n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ecommerce\src\pages\Login\Login.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* MenuController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_9__app_sessionservice__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_11_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_12__providers_location_tracker__["a" /* LocationTrackerProvider */]])
    ], LoginPage);
    return LoginPage;
}());

var RegisterUser = /** @class */ (function () {
    function RegisterUser(navCtrl, db, viewCtrl, modalCtrl, service) {
        this.navCtrl = navCtrl;
        this.db = db;
        this.viewCtrl = viewCtrl;
        this.modalCtrl = modalCtrl;
        this.service = service;
        this.firstTime = true;
        this.first = true;
        // this.tasks = db.list('/user_detail');
        // console.log("Data="+this.tasks);
        // this.ref=db.list('/user_detail');
        this.user = {};
    }
    RegisterUser.prototype.saveUser = function () {
        console.log(this.user);
        if (this.firstTime) {
            if (!this.user.first_name) {
                this.service.showToast("Please Enter Your Name");
                return;
            }
            if (!this.user.mobile) {
                this.service.showToast("Please Enter Your Mobile Number");
                return;
            }
            if (!this.user.password) {
                this.service.showToast("Please Enter Your Password");
                return;
            }
            if (!this.user.confirmPassword) {
                this.service.showToast("Please Enter Your Confirm Password");
                return;
            }
            if (this.user.password != this.user.confirmPassword) {
                this.service.showToast("Password  not matching");
                return;
            }
            this.user.email = this.user.email.toLowerCase();
            // var email=data.email.toLowerCase();
            this.user.email = this.user.email.replace(/\s/g, "");
            this.user.userType = "M";
            // var first=true;
            // alert("597");  
            this.firstTime = false;
            this.getUserList();
        }
        // this.db.list('/user_detail').push(this.user);
        // this.closeModal();   
        // this.ref.set(this.user);
        // console.log(this.ref.key);
    };
    RegisterUser.prototype.saveUserInfo = function (data) {
        var _this = this;
        if (data.length > 0) {
            // alert("Email Already Exist");
            this.firstTime = true;
            this.service.showToast2("Email id already exist");
        }
        else if (data.length == 0) {
            try {
                this.user.latitude = 0;
                this.user.longitude = 0;
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
                if (this.service.getToken()) {
                    this.user.deviceToken = this.service.getToken();
                }
                this.db.list('/user_detail').push(this.user).then(function (_a) {
                    // this.user.latitude="12233";
                    // this.user.longitude="12";  
                    var key = _a.key;
                    _this.user.key = key;
                    _this.service.setUser(_this.user);
                    _this.closeModal();
                    _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_10__home_home__["a" /* HomePage */]);
                    _this.navCtrl.popToRoot();
                    _this.firstTime = false;
                    _this.updateKey(_this.user);
                }, function (error) {
                    _this.firstTime = true;
                    // alert("Error while saving please try again");
                    _this.service.showToast2("Something went wrong please try again");
                });
                // this.user=this.service.getUser();    
            }
            catch (error) {
                var errorMessage = "dssdfsd===" + error;
                alert(errorMessage);
                this.service.showToast2(errorMessage);
                this.firstTime = true;
                // this.service.showToast("Something Went Wrong Please Try again");
            }
            // return;
        }
    };
    RegisterUser.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    RegisterUser.prototype.updateKey = function (user) {
        this.db.object('/user_detail/' + user.key).update(user).then(function (profile) {
            // return new Response('Profile has been saved successfully');
            console.log("Successfully updated location====");
            //  this.showToast("Successfully updated location====");
        })
            .catch(function (err) {
            // return new Response('Unable to save profile at this time, please try again later.');
            var error = "error==" + err;
            // this.showToast(error);
        });
    };
    RegisterUser.prototype.getUserList = function () {
        var _this = this;
        // alert("Getting user list");
        var item = this.db.list('/user_detail', {
            query: {
                orderByChild: 'email',
                equalTo: this.user.email.toLowerCase(),
            },
        }).subscribe(function (snapshot) {
            _this.saveUserInfo(snapshot);
            _this.firstTime = true;
        }, function (error) {
            // alert("Helllloo");
            _this.firstTime = true;
            _this.service.showToast2("Something went wrong please try again");
            return;
        });
        // return item;
    };
    RegisterUser = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-Login',template:/*ion-inline-start:"D:\Ecommerce\src\pages\Login\register.html"*/'\n\n\n\n<ion-header>\n\n    <ion-navbar>\n\n        <ion-title>User</ion-title>\n\n        <ion-buttons end>\n\n        <button ion-button (click)="closeModal()">Close</button>\n\n        </ion-buttons>\n\n    </ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n    \n\n      <ion-item>\n\n        <ion-label>Name</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.first_name"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Email</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n\n      </ion-item>\n\n      <ion-item>\n\n        <ion-label>Address</ion-label>\n\n        <ion-textarea [(ngModel)]="user.address" ></ion-textarea>\n\n      </ion-item>\n\n    \n\n      <ion-item>\n\n        <ion-label>Mobile</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.mobile" ></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Password</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.password"></ion-input>\n\n      </ion-item>\n\n\n\n      <ion-item>\n\n        <ion-label>Confirm Password</ion-label>\n\n        <ion-input type="text" [(ngModel)]="user.confirmPassword" ></ion-input>\n\n      </ion-item>\n\n      <button ion-button type="submit" block (click)="saveUser()">Add User</button>\n\n    \n\n</ion-content>'/*ion-inline-end:"D:\Ecommerce\src\pages\Login\register.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_11_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_9__app_sessionservice__["a" /* SessionService */]])
    ], RegisterUser);
    return RegisterUser;
}());

//# sourceMappingURL=Login.js.map

/***/ }),

/***/ 151:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__pages_product_detail_product_detail__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_sessionservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the ProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductsPage = /** @class */ (function () {
    function ProductsPage(service, db, navCtrl, navParams) {
        this.service = service;
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ProductsPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProductsPage');
        // this.products = this.db.list('/products');
        this.categories = this.db.list('/categories');
    };
    ProductsPage.prototype.getProduts = function (category) {
        var _this = this;
        this.db.list('/products', {
            query: {
                orderByChild: 'categoryId',
                equalTo: category.key,
            },
        }).subscribe(function (snapshot) {
            _this.products = snapshot;
        }, function (error) {
            // this.service.showToast2("Something went wrong please try again");
            return;
        });
    };
    ProductsPage.prototype.viewProduct = function (product) {
        this.service.setProduct(product);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__pages_product_detail_product_detail__["a" /* ProductDetailPage */]);
    };
    ProductsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-products',template:/*ion-inline-start:"D:\Ecommerce\src\pages\products\products.html"*/'<!--\n  Generated template for the ProductsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar  hideBackButton="true">\n    <button ion-button menuToggle>\n        <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Products</ion-title>\n    <ion-buttons end>\n        <button  (click)="openSearch()"><ion-icon name="search"></ion-icon>\n        </button>\n        <button (click)="cart()">\n            <ion-icon name="cart"></ion-icon>\n        </button>\n    </ion-buttons>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n    <ion-scroll scrollX style="height: 88px;margin-top: 2px">\n      <div style="width:100px">\n        <div class="scroll-item" *ngFor="let category of categories | async" (click)="getProduts(item)" \n          [ngClass]="{\'active\':category.active}">\n          <span class="caption">{{category.name}}</span>\n        </div>               \n      </div>\n    </ion-scroll>\n\n\n    <div class="card" style="border-style: none;box-shadow: none;margin-top: 20%;">\n        <div class="item text-center item-text-wrap"> \n          <p style="color:grey">No products found,</p>\n          <p style="color:grey">Try to change your preferences..</p>\n          <span class="icon ion-sad-outline" style="font-size: 160px;color:grey;"></span>\n        </div>\n    </div> \n\n\n    <ion-scroll style="padding-bottom: 8px;height:100vh" direction="y">\n        <div style="height:20*170px" >\n          <div class="nopadding noborder" *ngFor="let product of products" style="margin:0" >\n            <div class="row">\n              <div class="col col-50 nopadding">\n                <div class="card rel" style="margin-bottom: 0;">\n                  <img src= "{{products[$index].imageUrl}}" class="img">                \n                  <div class="text bottom-info">\n                    <p class="bold text-center">{{product.name}}</p>\n                    <p class="bold text-center energized" style="font-size: 18px;">\n                        <img src="img/rupee.png" style="height:13px;width:13px">\n                        <span>                        \n                          {{product.price}}/-<span style="font-size: small;">{{product.quantity}}</span>\n                        </span>\n                    </p>                    \n                  </div>\n                </div>\n              </div>\n              \n              <div class="col col-50 nopadding" *ngIf="products[$index+1].name">\n                <div class="card rel" style="margin-bottom: 0;">\n                  <img src="{{products[$index+1].imageUrl}}" class="img">\n                  <div class="text bottom-info">\n                    <p class="bold text-center">{{products[$index+1].name}}</p>\n                    <p class="bold text-center energized" style="font-size: 18px;">\n                      <img src="img/rupee.png" style="height:13px;width:13px">\n                      <span>                        \n                        {{products[$index+1].sp}}/-<span style="font-size: small;">{{products[$index+1].unit}}</span>\n                      </span>\n                    </p>\n                  </div>\n                </div>          \n              </div>\n\n            </div>\n          </div>\n        </div>\n    </ion-scroll>\n\n\n    <div *ngFor="let product of products | async">\n\n      {{product.name}}\n\n    </div> \n</ion-content>\n'/*ion-inline-end:"D:\Ecommerce\src\pages\products\products.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4__app_sessionservice__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProductsPage);
    return ProductsPage;
}());

//# sourceMappingURL=products.js.map

/***/ }),

/***/ 152:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_sessionservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserDetailPage = /** @class */ (function () {
    function UserDetailPage(events, http, navCtrl, navParams, db, service) {
        this.events = events;
        this.http = http;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.db = db;
        this.service = service;
        this.showEmojiPicker = false;
        this.messagesList = [];
        this.messageInfo = {};
    }
    UserDetailPage.prototype.ionViewWillEnter = function () {
        var user = this.service.getUser();
        if (!this.service.getUser()) {
            var userInfo = {
                "address": "A-90 Harkesh Nagar",
                "deviceToken": "dpspB9vu7Po:APA91bF8eKYvKkeQ9b7yvuhIHLsZX_9iadStq79b82jPZm36S1cLIC_lQG2t_h-B1-0NOxhzULUqNkh7IZBHg9H_t4Syl6u1MLJtoAYZznqdIc-7zMuDOGR1bWl1dNPWq8i5LTBzbybj",
                "email": "hitesh@gmail.com", "fileName": "Rahul.jpg", "first_name": "Hitesh",
                "imageUrl": "https://firebasestorage.googleapis.com/v0/b/autorepair-1510293342488.appspot.com/o/images%2FRahul.jpg?alt=media&token=2a500652-188a-43dd-8abf-8175e6bcfa74",
                "key": "-L09Jwk1T5yYMQ-Zg2H4", "login": true, "mobile": 9971672881, "password": "123", "token": "dcT5S39MeDY:APA91bG7Nb_tRk1H2H0e1Dia8Bzn8Lx5viBcxoPryyMeXrKXd31HEd6mh2pYpD-2VHyWyy3YLhGj-sL_blMlswjhA-VHHgwrepKLIauYiYIi17rFndZAXc-MRJEIWbUc3vi58JbirHZA"
            };
            this.service.setUser(userInfo);
            // this.service.getStoredData();
        }
    };
    UserDetailPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        setTimeout(function () {
            var user = _this.service.getUser();
            // alert("user info==="+JSON.stringify(user));
            _this.messages = _this.db.list('/messages');
            _this.scrollToBottom();
            _this.messageInfo.createTime = new Date();
            var senderEmail = _this.service.getUser().email;
            var receiverEmail = _this.service.getOtherUserInfo().email;
            _this.messageInfo.senderEmail = senderEmail;
            _this.messageInfo.receiverEmail = receiverEmail;
            _this.messageInfo.email = senderEmail;
        }, 1000);
        //  alert("Come in detail page");
        //  new Promise(function (resolve, reject) {
        //   this.db.list('/messages')
        //       .subscribe(snapshots => {
        //           snapshots.forEach(snapshot => {
        //               //console.log(snapshot.label);
        //               this.messagesList.push(snapshot.label);
        //               //this.prefList.push(snapshot.label);
        //           });
        //           resolve(this.messagesList);
        //       });
        // });
        // setTimeout(()=>{
        //   // alert("Messages==="+JSON.stringify(this.messages));
        // },4000)
        //  var user=this.service.getUser();
        //  if(!this.service.getUser())
        //  {
        //     var data=this.service.getStoredData();
        //     alert("data==="+JSON.stringify(data));
        //     this.service.setUser(data);
        //  }
        //  alert("User=="+JSON.stringify(user));
        // this.messages=this.db.list('/messages',{
        //   query:{
        //     orderByChild:'receiverEmail',
        //     equalTo:this.service.getOtherUserInfo().email,
        //   },
        // })
        // this.messages=this.db.list('/messages');
        // console.log('ionViewDidLoad UserDetailPage');
    };
    UserDetailPage.prototype.onFocus = function () {
        this.showEmojiPicker = false;
        this.content.resize();
        this.scrollToBottom();
    };
    UserDetailPage.prototype.isYou = function (message) {
        // if(email == this.service.getUser().email)
        //   return false;
        // else
        //   return true;
        // if(message.receiverEmail==this.service.getUser().email)
        // {
        //   if(message.senderEmail==this.service.getOtherUserInfo().email)
        //   {
        //     return true;
        //   }
        // }
        if (message.receiverId == this.service.getUser().key) {
            if (message.senderId == this.service.getOtherUserInfo().key) {
                return true;
            }
        }
    };
    UserDetailPage.prototype.isMe = function (message) {
        // if(email == this.service.getUser().email)
        // return true
        // else
        //  return false;
        // if(message.senderEmail==this.service.getUser().email)
        // {
        //   if(this.service.getOtherUserInfo().email==message.receiverEmail)
        //   {
        //     return true;
        //   }
        // }  
        if (message.senderId == this.service.getUser().key) {
            if (this.service.getOtherUserInfo().key == message.receiverId) {
                return true;
            }
        }
    };
    UserDetailPage.prototype.showMessage = function (message) {
        // if(message.senderEmail==this.service.getUser().email)
        // {
        //   if(this.service.getOtherUserInfo().email==message.receiverEmail)
        //   {
        //     return true;
        //   }
        // }
        // if(message.receiverEmail==this.service.getUser().email)
        // {
        //   if(message.senderEmail==this.service.getOtherUserInfo().email)
        //   {
        //     return true;
        //   }
        // }
        if (message.senderId == this.service.getUser().key) {
            if (this.service.getOtherUserInfo().key == message.receiverId) {
                return true;
            }
        }
        if (message.receiverId == this.service.getUser().key) {
            if (message.senderId == this.service.getOtherUserInfo().key) {
                return true;
            }
        }
    };
    UserDetailPage.prototype.switchEmojiPicker = function () {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    };
    UserDetailPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    UserDetailPage.prototype.sendMessage = function () {
        var _this = this;
        // alert(JSON.stringify(this.service.getOtherUserInfo()));
        this.loader = true;
        this.messageInfo.senderId = this.service.getUser().key;
        this.messageInfo.receiverId = this.service.getOtherUserInfo().key;
        this.db.list('/messages').push(this.messageInfo).then(function (resolve) {
            console.log('all good');
            // this.messages.remove(this.messageInfo);
            // this.loader=false;
            // this.messageInfo.pending=false;
            _this.scrollToBottom();
            // this.sendNotification();
            // this.messageInfo.status="completed";
        }, function (reject) {
            console.log('error');
            _this.loader = false;
            _this.scrollToBottom();
            // this.messageInfo.status="failed";
        });
        this.messageInfo.editorMsg = '';
    };
    UserDetailPage.prototype.sendNotification = function () {
        var _this = this;
        var notifyUrl = "http://klaspring.staging.wpengine.com/push_api.php?token=" + this.service.getToken() + "&senderEmail=" + this.messageInfo.senderEmail + "&receiverEmail=" + this.messageInfo.receiverEmail + "&message=" + this.messageInfo.editorMsg;
        this.http.get(notifyUrl)
            .subscribe(function (data) {
            console.log(JSON.stringify(data));
        });
        (function (err) {
            _this.service.showToast("Error while sending notification");
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
    ], UserDetailPage.prototype, "content", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('chat_input'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* TextInput */])
    ], UserDetailPage.prototype, "messageInput", void 0);
    UserDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-user-detail',template:/*ion-inline-start:"D:\Ecommerce\src\pages\user-detail\user-detail.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <ion-title>\n\n      Chat\n\n    </ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n\n    \n\n    <!-- <div class="message-wrap">\n\n            <div *ngFor="let message of messages | async" \n\n               >\n\n    \n\n                    {{message.editorMsg}}\n\n    \n\n            </div>\n\n    </div> -->\n\n    <div class="message-wrap">\n\n            <div *ngFor="let message of messages | async" \n\n                 >\n\n                <div *ngIf="showMessage(message)" >\n\n                    <div class="message" [class.left]="isYou(message)"\n\n                    [class.right]="isMe(message)" >\n\n                        <div class="msg-detail" > \n\n                            <div class="msg-content" >\n\n                                <span class="triangle"></span>\n\n                                <p class="line-breaker">{{message.editorMsg}}</p>\n\n                            </div>\n\n                        </div>\n\n                    </div>    \n\n                </div>\n\n            </div>\n\n    </div>\n\n  </ion-content>\n\n<ion-footer no-border [style.height]="showEmojiPicker ? \'255px\' : \'55px\'">\n\n  <ion-grid class="input-wrap">\n\n      <ion-row>\n\n          <ion-col col-2>\n\n              <!-- <button ion-button clear icon-only item-right (click)="switchEmojiPicker()">\n\n                  <ion-icon name="md-happy"></ion-icon>\n\n              </button> -->\n\n          </ion-col>\n\n          <ion-col col-8>\n\n              <ion-textarea #chat_input\n\n                            placeholder="Text Input"\n\n                            [(ngModel)]="messageInfo.editorMsg"\n\n                            (keyup.enter)="sendMessage()"\n\n                            (focus)="onFocus()">\n\n              </ion-textarea>\n\n          </ion-col>\n\n          <!-- {{messageInfo.editorMsg}} -->\n\n          <ion-col col-2 >\n\n              <button ion-button clear icon-only item-right (click)="sendMessage()"  [disabled]="!messageInfo.editorMsg">\n\n                  <ion-icon name="ios-send" ios="ios-send" md="md-send"></ion-icon>\n\n              </button>\n\n          </ion-col>\n\n      </ion-row>\n\n  </ion-grid>\n\n  <!-- <emoji-picker *ngIf="showEmojiPicker" [(ngModel)]="messageInfo.editorMsg"></emoji-picker> -->\n\n</ion-footer>'/*ion-inline-end:"D:\Ecommerce\src\pages\user-detail\user-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_2_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_3__app_sessionservice__["a" /* SessionService */]])
    ], UserDetailPage);
    return UserDetailPage;
}());

//# sourceMappingURL=user-detail.js.map

/***/ }),

/***/ 161:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 161;

/***/ }),

/***/ 202:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 202;

/***/ }),

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SessionService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





 // Newly Added
var SessionService = /** @class */ (function () {
    function SessionService(http, events, toastCtrl, nativeStorage, toast, geolocation) {
        this.http = http;
        this.events = events;
        this.toastCtrl = toastCtrl;
        this.nativeStorage = nativeStorage;
        this.toast = toast;
        this.geolocation = geolocation;
    }
    SessionService.prototype.setProduct = function (product) {
        this.product = product;
    };
    SessionService.prototype.getProduct = function () {
        return this.product;
    };
    SessionService.prototype.setToken = function (token) {
        this.token = token;
    };
    SessionService.prototype.getToken = function () {
        return this.token;
    };
    SessionService.prototype.showToast2 = function (message) {
        var toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'center'
        });
        toast.onDidDismiss(function () {
            console.log('Dismissed toast');
        });
        toast.present();
    };
    SessionService.prototype.showToast = function (message) {
        this.toast.show(message, '7000', 'center').subscribe(function (toast) {
            console.log(toast);
        });
    };
    SessionService.prototype.setUserLocation = function (userLocation) {
        var _this = this;
        this.nativeStorage.setItem('userLocation', userLocation)
            .then(function () {
            var message = "stored";
            //  this.showToast("stored location")
        }, function (error) {
            var message = "stored location error=" + error;
            _this.showToast(message);
        });
        this.userInfo = userLocation;
    };
    SessionService.prototype.getUserLocation = function () {
        var _this = this;
        // alert("getting location");
        var userLocation;
        this.nativeStorage.getItem('userLocation')
            .then(function (data) {
            var message = "stored location" + JSON.stringify(data);
            //  this.showToast(message);
            userLocation = data;
        }, function (error) {
            var message = "stored location error=" + JSON.stringify(error);
            _this.showToast(message);
        });
        setTimeout(function () {
            return _this.userInfo;
        }, 1000);
    };
    SessionService.prototype.getCurrentLocation = function () {
        // alert("call108");
        var _this = this;
        // this.showToast("Callling");
        var subscription = this.geolocation.watchPosition()
            .subscribe(function (position) {
            console.log(position.coords.longitude + ' ' + position.coords.latitude);
            var location = position.coords;
            _this.events.publish('fetch:location:success', location);
        }, function (error) {
            console.log("error==" + error);
        });
    };
    SessionService.prototype.setUser = function (userInfo) {
        this.user = userInfo;
        this.nativeStorage.setItem('userInfo', userInfo)
            .then(function () {
            var message = "stored";
            alert("Stored===");
            //  this.showToast("stored user type")
        }, function (error) {
            alert("Failed to stored===" + error);
            var message = "stored error user type=" + error;
            //  this.showToast(message)
        });
    };
    SessionService.prototype.getUser = function () {
        return this.user;
    };
    SessionService.prototype.setOtherUserInfo = function (info) {
        this.otherUserInfo = info;
    };
    SessionService.prototype.getOtherUserInfo = function () {
        return this.otherUserInfo;
    };
    SessionService.prototype.getStoredData = function () {
        var _this = this;
        this.nativeStorage.getItem('userInfo')
            .then(function (data) {
            // this.userData=data;
            // alert("data 195==="+JSON.stringify(data));
            _this.events.publish('fetch:localData', data);
            _this.setUser(data);
            return data;
        }, function (error) {
        });
    };
    SessionService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["p" /* ToastController */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_geolocation__["a" /* Geolocation */]])
    ], SessionService);
    return SessionService;
}());

//# sourceMappingURL=sessionservice.js.map

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProductDetailPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_sessionservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProductDetailPage = /** @class */ (function () {
    function ProductDetailPage(db, service, navCtrl, navParams) {
        this.db = db;
        this.service = service;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = {};
        this.loader = false;
        this.productInfo = this.service.getProduct();
    }
    ProductDetailPage.prototype.ionViewDidLoad = function () {
        var user = this.service.getUser();
        console.log('ionViewDidLoad ProductDetailPage');
    };
    ProductDetailPage.prototype.orderProduct = function () {
        var _this = this;
        this.loader = true;
        this.order.orderDate = new Date();
        this.order.productId = this.productInfo.key;
        this.order.productName = this.productInfo.name;
        this.order.userName = this.service.getUser().first_name;
        this.order.userId = "-L09Jwk1T5yYMQ-Zg2H4";
        this.order.status = "P";
        this.db.list('/orders').push(this.order).then(function (_a) {
            var key = _a.key;
            _this.order.id = key;
            _this.updateOrderInfo();
        }, function (reject) {
            _this.loader = false;
            alert("Sorry failed to order product now please try again");
        });
    };
    ProductDetailPage.prototype.updateOrderInfo = function () {
        var _this = this;
        this.db.object('/orders/' + this.order.id).update(this.order).then(function (profile) {
            // return new Response('Profile has been saved successfully');
            console.log("Successfully updated location====");
            _this.loader = false;
            _this.navCtrl.pop();
            //  this.showToast("Successfully updated location====");
        })
            .catch(function (err) {
            alert("Sorry failed to update order now !!!");
            // return new Response('Unable to save profile at this time, please try again later.');
            var error = "error==" + err;
            _this.loader = false;
            // this.showToast(error);
        });
    };
    ProductDetailPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-product-detail',template:/*ion-inline-start:"D:\Ecommerce\src\pages\product-detail\product-detail.html"*/'<!--\n  Generated template for the productInfoDetailPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n  <ion-navbar>\n    <button menuToggle>\n      <ion-icon name="menu"></ion-icon>\n    </button>\n    <ion-title>Product Detail</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content>\n  <h3 text-center>\n    <b>Name</b> {{productInfo.name}}\n  </h3>\n  <h4 text-center>\n    <b>Price</b> {{productInfo.price}}\n  </h4>\n  <h5 text-center>\n   <b>Quantity</b>  {{productInfo.quantity}}\n  </h5>\n  <p>\n    <b>Descriptions</b> {{productInfo.descriptions}}\n  </p>\n  <ion-item>\n    <ion-input type="text" [(ngModel)]="order.descriptions"></ion-input>\n  </ion-item>\n  \n\n  <div *ngIf="loader">\n    <ion-spinner name="bubbles"></ion-spinner>\n  </div>  \n  <button ion-button block (click)="orderProduct()" [disabled]="loader">Order</button>\n</ion-content>\n'/*ion-inline-end:"D:\Ecommerce\src\pages\product-detail\product-detail.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_2__app_sessionservice__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ProductDetailPage);
    return ProductDetailPage;
}());

//# sourceMappingURL=product-detail.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return profile; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_sessionservice__ = __webpack_require__(26);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};










var profile = /** @class */ (function () {
    function profile(navCtrl, http, fb, googlePlus, callNumber, camera, actionCtrl, socialSharing, service) {
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.callNumber = callNumber;
        this.camera = camera;
        this.actionCtrl = actionCtrl;
        this.socialSharing = socialSharing;
        this.service = service;
        this.user = this.service.getUser();
    }
    profile.prototype.ionViewDidLoad = function () {
        // alert("user info=="+this.service.getUser());
        var user = this.service.getUser();
        this.user = user[0];
        // alert("user=="+JSON.stringify(this.user));
    };
    profile = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"D:\Ecommerce\src\pages\profile\profile.html"*/'<style media="screen">\n\n    .plainText {\n\n        text-decoration: none;\n\n    }\n\n</style>\n\n\n\n\n\n<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>Profile</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n\n\n<ion-content class="home">\n\n    <ion-card>\n\n        <img src="../../assets/imgs/user.png" *ngIf="user && (!user[\'picture\'] && !user[\'imageUrl\'])" style="width:80px;height:80px">\n\n          \n\n         <!-- <img src="{{user.imageUrl}}" *ngIf="user && user.imageUrl">  -->\n\n\n\n         <!-- <img [src]="user.picture" *ngIf="user &&  user.picture" style="width:50px;height:50px"> \n\n         <img [src]="user.imageUrl" *ngIf="user && user.imageUrl" style="width:50px;height:50px">  -->\n\n\n\n         <img src="{{user.imageUrl}}" *ngIf="user.imageUrl" style="width:50px;height:50px">\n\n         <img src="{{user.picture}}" *ngIf="user.picture" style="width:50px;height:50px">\n\n        <ion-card-content>\n\n            <ion-card-title>\n\n\n\n                <p *ngIf="user[\'first_name\']">{{user.first_name}}</p>\n\n                <p *ngIf="user[\'displayName\']">{{user.displayName}}</p>\n\n\n\n                \n\n            </ion-card-title>\n\n            \n\n        </ion-card-content>\n\n    </ion-card>\n\n\n\n    <ion-card>\n\n        <ion-card-header>\n\n            Detail\n\n        </ion-card-header>\n\n        <ion-card-content>\n\n            <!-- Hello World -->\n\n        </ion-card-content>\n\n        <ion-list>\n\n            <button ion-item *ngIf="user[\'email\']">\n\n                <ion-icon name="mail" item-left></ion-icon>\n\n                <a class="plainText" href="{{user.email}}">{{user.email}}</a>\n\n            </button>\n\n\n\n            <!-- <button ion-item>\n\n                <ion-icon name="skype" ios="logo-skype" md="logo-skype" item-left></ion-icon>\n\n                <a class="plainText" href="skype:smkamranqadri">smkamranqadri</a>\n\n            </button> -->\n\n\n\n            <button ion-item *ngIf="user[\'mobile\']">\n\n                <ion-icon name="call" item-left></ion-icon>\n\n                <a class="plainText" href="tel:+"+{{user.mobile}}>{{user.mobile}}</a>\n\n            </button>\n\n\n\n\n\n        </ion-list>\n\n    </ion-card>\n\n</ion-content>'/*ion-inline-end:"D:\Ecommerce\src\pages\profile\profile.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_facebook__["a" /* Facebook */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_camera__["a" /* Camera */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_9__app_sessionservice__["a" /* SessionService */]])
    ], profile);
    return profile;
}());

//# sourceMappingURL=profile.js.map

/***/ }),

/***/ 294:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UsersPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__user_detail_user_detail__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_sessionservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__ = __webpack_require__(30);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UsersPage = /** @class */ (function () {
    function UsersPage(db, navCtrl, navParams, service) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.service = service;
        this.loader = true;
    }
    UsersPage.prototype.getUsers = function () {
        return this.db.list('/user_detail');
    };
    UsersPage.prototype.ionViewDidLoad = function () {
        var orderBy;
        this.users = this.getUsers();
        this.loader = false;
        this.userInfo = (this.service.getUser().email);
        var filter;
        //  this.getUsers().subscribe(users=>{
        //     filter=users;
        //     alert("fetsfsdfsdf");
        //  },error=>{
        //    alert("sdfsdfsdfsdf");
        //  }) 
    };
    UsersPage.prototype.userDetail = function (userInfo) {
        this.service.setOtherUserInfo(userInfo);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__user_detail_user_detail__["a" /* UserDetailPage */]);
    };
    UsersPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-users',template:/*ion-inline-start:"D:\Ecommerce\src\pages\users\users.html"*/'<ion-header>\n\n   <ion-navbar hideBackButton="true">\n\n      <button ion-button menuToggle>\n\n        <ion-icon name="menu"></ion-icon>\n\n      </button>\n\n     <ion-title>Users</ion-title>\n\n   </ion-navbar>\n\n</ion-header>\n\n \n\n <ion-content>\n\n\n\n    <ion-spinner name="dots" *ngIf="loader"></ion-spinner>\n\n    \n\n      <ion-list>\n\n        <ion-item *ngFor="let user of users | async" (click)="userDetail(user)">\n\n\n\n          <div *ngIf="user.email!=userInfo">\n\n              <ion-avatar item-start>\n\n                <img src="../../assets/imgs/user.png" *ngIf="!user.imageUrl && !user.picture">\n\n                <img src="{{user.imageUrl}}" *ngIf="user.imageUrl">\n\n                <img src="{{user.picture}}" *ngIf="user.picture">\n\n              </ion-avatar>\n\n              <h2 *ngIf="user.first_name">{{user.first_name}}</h2>\n\n              <h3>{{user.email}}</h3>\n\n              <h4 >{{user.mobile}}</h4>\n\n              <p> {{user.address}}</p> \n\n          </div>    \n\n        </ion-item>\n\n      </ion-list>\n\n  \n\n </ion-content>'/*ion-inline-end:"D:\Ecommerce\src\pages\users\users.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_4_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_3__app_sessionservice__["a" /* SessionService */]])
    ], UsersPage);
    return UsersPage;
}());

//# sourceMappingURL=users.js.map

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

/*
  Generated class for the EmojiProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
var EmojiProvider = /** @class */ (function () {
    function EmojiProvider() {
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😀 😃 😄 😁 😆 😅 😂 🤣 ☺️ 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        var EmojiArr = EMOJIS.split(' ');
        var groupNum = Math.ceil(EmojiArr.length / (24));
        var items = [];
        for (var i = 0; i < groupNum; i++) {
            items.push(EmojiArr.slice(i * 24, (i + 1) * 24));
        }
        return items;
    };
    EmojiProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], EmojiProvider);
    return EmojiProvider;
}());

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 296:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(297);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(317);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 317:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(359);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_list_list__ = __webpack_require__(450);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__sessionservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_Login_Login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__ionic_native_diagnostic__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_location_accuracy__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_native_flashlight__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_local_notifications__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26_angularfire2_database_deprecated__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27_angularfire2__ = __webpack_require__(59);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__environments_environment__ = __webpack_require__(451);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__providers_location_tracker__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__ionic_native_background_geolocation__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__pages_user_detail_user_detail__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_users_users__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__providers_emoji__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__components_emoji_picker_emoji_picker_module__ = __webpack_require__(452);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pages_products_products__ = __webpack_require__(151);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__pages_product_detail_product_detail__ = __webpack_require__(289);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







































// import {EmojiProvider} from "../../providers/emoji";
// import {
//   GoogleMaps,
//   GoogleMap,
//   GoogleMapsEvent,
//   GoogleMapOptions,
//   CameraPosition,
//   MarkerOptions,
//   Marker
//  } from '@ionic-native/google-maps';
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Login_Login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* profile */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* Places */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Login_Login__["b" /* RegisterUser */],
                __WEBPACK_IMPORTED_MODULE_31__pages_user_detail_user_detail__["a" /* UserDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_product_detail_product_detail__["a" /* ProductDetailPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_34__components_emoji_picker_emoji_picker_module__["a" /* EmojiPickerComponentModule */],
                __WEBPACK_IMPORTED_MODULE_8__angular_http__["c" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {}, {
                    links: []
                }),
                __WEBPACK_IMPORTED_MODULE_27_angularfire2__["a" /* AngularFireModule */].initializeApp(__WEBPACK_IMPORTED_MODULE_28__environments_environment__["a" /* environment */].firebase),
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_database_deprecated__["b" /* AngularFireDatabaseModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_5__pages_list_list__["a" /* ListPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Login_Login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_18__pages_profile_profile__["a" /* profile */],
                __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["b" /* Places */],
                __WEBPACK_IMPORTED_MODULE_16__pages_Login_Login__["b" /* RegisterUser */],
                __WEBPACK_IMPORTED_MODULE_31__pages_user_detail_user_detail__["a" /* UserDetailPage */],
                __WEBPACK_IMPORTED_MODULE_32__pages_users_users__["a" /* UsersPage */],
                __WEBPACK_IMPORTED_MODULE_35__pages_products_products__["a" /* ProductsPage */],
                __WEBPACK_IMPORTED_MODULE_36__pages_product_detail_product_detail__["a" /* ProductDetailPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_7__ionic_native_splash_screen__["a" /* SplashScreen */],
                __WEBPACK_IMPORTED_MODULE_9__ionic_native_facebook__["a" /* Facebook */],
                __WEBPACK_IMPORTED_MODULE_10__ionic_native_google_plus__["a" /* GooglePlus */],
                __WEBPACK_IMPORTED_MODULE_11__ionic_native_call_number__["a" /* CallNumber */],
                __WEBPACK_IMPORTED_MODULE_12__ionic_native_camera__["a" /* Camera */],
                __WEBPACK_IMPORTED_MODULE_13__ionic_native_fcm__["a" /* FCM */],
                __WEBPACK_IMPORTED_MODULE_14__sessionservice__["a" /* SessionService */],
                __WEBPACK_IMPORTED_MODULE_15__ionic_native_social_sharing__["a" /* SocialSharing */],
                __WEBPACK_IMPORTED_MODULE_17__ionic_native_native_storage__["a" /* NativeStorage */],
                __WEBPACK_IMPORTED_MODULE_19__ionic_native_diagnostic__["a" /* Diagnostic */],
                __WEBPACK_IMPORTED_MODULE_20__ionic_native_geolocation__["a" /* Geolocation */],
                __WEBPACK_IMPORTED_MODULE_21__ionic_native_location_accuracy__["a" /* LocationAccuracy */],
                __WEBPACK_IMPORTED_MODULE_22__ionic_native_network__["a" /* Network */],
                __WEBPACK_IMPORTED_MODULE_23__ionic_native_flashlight__["a" /* Flashlight */],
                __WEBPACK_IMPORTED_MODULE_24__ionic_native_local_notifications__["a" /* LocalNotifications */],
                __WEBPACK_IMPORTED_MODULE_25__ionic_native_toast__["a" /* Toast */],
                __WEBPACK_IMPORTED_MODULE_26_angularfire2_database_deprecated__["a" /* AngularFireDatabase */],
                __WEBPACK_IMPORTED_MODULE_29__providers_location_tracker__["a" /* LocationTrackerProvider */],
                __WEBPACK_IMPORTED_MODULE_30__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */],
                __WEBPACK_IMPORTED_MODULE_33__providers_emoji__["a" /* EmojiProvider */],
                // GoogleMap,
                // GoogleMaps,
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 359:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(242);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(244);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__sessionservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_Login_Login__ = __webpack_require__(150);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__ = __webpack_require__(290);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__ = __webpack_require__(292);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_flashlight__ = __webpack_require__(293);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__ionic_native_local_notifications__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__providers_location_tracker__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_users_users__ = __webpack_require__(294);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_user_detail_user_detail__ = __webpack_require__(152);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19_angularfire2_database_deprecated__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__pages_products_products__ = __webpack_require__(151);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





















var MyApp = /** @class */ (function () {
    // ngOnInit() {
    //   // Let's navigate from TabsPage to Page1
    //   this.nav.push(HomePage);
    // }
    function MyApp(db, platform, statusBar, splashScreen, fcm, service, native, sharing, alertCtrl, nativeStorage, locationAccuracy, network, flashlight, localNotifications, http, locationTracker) {
        this.db = db;
        this.platform = platform;
        this.statusBar = statusBar;
        this.splashScreen = splashScreen;
        this.fcm = fcm;
        this.service = service;
        this.native = native;
        this.sharing = sharing;
        this.alertCtrl = alertCtrl;
        this.nativeStorage = nativeStorage;
        this.locationAccuracy = locationAccuracy;
        this.network = network;
        this.flashlight = flashlight;
        this.localNotifications = localNotifications;
        this.http = http;
        this.locationTracker = locationTracker;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_20__pages_products_products__["a" /* ProductsPage */];
        this.notifyData = {};
        // alert("Call constructor");  
        this.headers = new __WEBPACK_IMPORTED_MODULE_15__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        // this.initializeApp();
        // this.enableLocation();  
        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'Home', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Share App', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Profile', component: __WEBPACK_IMPORTED_MODULE_10__pages_profile_profile__["a" /* profile */] },
            { title: 'Notification', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
            { title: 'Users', component: __WEBPACK_IMPORTED_MODULE_17__pages_users_users__["a" /* UsersPage */] },
            { title: 'Logout', component: __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */] },
        ];
    }
    MyApp.prototype.initializeApp = function () {
        var _this = this;
        this.platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            // alert("Platform is ready");
            // alert("Initiasling app");
            _this.statusBar.styleDefault();
            _this.splashScreen.hide();
            _this.checkUserStatus();
            _this.initPushNotification();
            _this.checkNetwork();
            _this.enableLocation();
        });
    };
    MyApp.prototype.enableLocation = function () {
        var _this = this;
        // alert("Calling location");
        this.locationAccuracy.canRequest().then(function (canRequest) {
            if (canRequest) {
                // the accuracy option will be ignored by iOS
                _this.locationAccuracy.request(_this.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function (data) {
                    setTimeout(function () {
                        _this.locationTracker.startTracking();
                    }, 100);
                }, function (error) {
                    _this.service.showToast("Failed to get location");
                });
            }
        });
    };
    MyApp.prototype.checkNetwork = function () {
        var _this = this;
        // alert("checking Network");
        // watch network for a disconnect
        var disconnectSubscription = this.network.onDisconnect().subscribe(function () {
            // console.log('network was disconnected :-(');
            // alert("you are disconnect");
            // this.modal = this.modalCtrl.create(MyModalPage);
            // this.modal.present();
            var message = "Your Are Offline";
            // this.service.showToast(message);
        });
        // stop disconnect watch
        // disconnectSubscription.unsubscribe();
        // watch network for a connection
        var connectSubscription = this.network.onConnect().subscribe(function () {
            // console.log('network connected!');
            // alert("you are connected");
            var message = "Your Are Online";
            // this.service.showToast(message);
            // this.modalProperty.modalhide();
            // this.modal.dismiss();
            // this.enableLocation();
            // We just got a connection but we need to wait briefly
            // before we determine the connection type. Might need to wait.
            // prior to doing any api requests as well.
            setTimeout(function () {
                if (_this.network.type === 'wifi') {
                    var message = "You Got Wifi Connection";
                    // this.service.showToast(message);
                }
            }, 3000);
        });
        // stop connect watch
        // connectSubscription.unsubscribe();   
    };
    MyApp.prototype.checkUserStatus = function () {
        var _this = this;
        this.native.getItem('userInfo')
            .then(function (data) {
            // this.userData=data;
            // alert("data 195==="+JSON.stringify(data));
            if (data) {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
                _this.service.setUser(data);
            }
            else {
                _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_Login_Login__["a" /* LoginPage */];
            }
            _this.enableLocation();
            _this.checkNetwork();
        }, function (error) {
            alert("Errror=" + error);
            var error2 = "Error=" + error;
            // this.service.showToast("Error="+error2);
            _this.rootPage = __WEBPACK_IMPORTED_MODULE_7__pages_Login_Login__["a" /* LoginPage */];
        });
    };
    MyApp.prototype.initPushNotification = function () {
        var _this = this;
        this.fcm.getToken().then(function (token) {
            // alert("token=="+token);  
            console.log("token==" + JSON.stringify(token));
            _this.service.setToken(token);
        }).catch(function (e) {
        });
        var firstTime = true;
        this.fcm.onNotification().subscribe(function (data) {
            _this.notifyData = data;
            if (data.wasTapped) {
                // alert("background===="+JSON.stringify(this.notifyData));
                _this.fetchOtherUserInfo();
            }
            else {
                // alert("foreground===="+JSON.stringify(this.notifyData));
                if (firstTime) {
                    _this.presentConfirm("Notification", "Do you want to see notification?");
                    firstTime = false;
                }
                //  this.navCtrl.push(UserDetailPage);
                //  alert("received notification without tap=="+JSON.stringify(data))
            }
            ;
        });
        // this.fcm.onTokenRefresh().subscribe(token=>{
        //    console.log("refresh token==="+JSON.stringify(token));
        //    this.service.setToken(token);
        // })
        // this.fcm.unsubscribeFromTopic('Notification');
    };
    MyApp.prototype.openPage = function (page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        // alert("pages::"+JSON.stringify(this.pages[1]));
        // alert("page::"+JSON.stringify(page));
        var _this = this;
        if (this.pages[1].title == page.title) {
            // alert("if::"+JSON.stringify(this.pages[1]));
            this.sharing.share().then(function () {
                // Sharing via email is possible
                // alert("Success");
            }).catch(function () {
                // alert("Eror");
                // Sharing via email is not possible
            });
        }
        else if (this.pages[5].title == page.title) {
            // this.nativeStorage.clear()
            this.presentConfirm("Logout", "Are You sure you want to logout");
            // this.service.setUser(null);
            // this.nativeStorage.clear();
            // this.nav.setRoot(LoginPage);
            // this.nav.popToRoot();
        }
        else if (this.pages[3].title == page.title) {
            this.flashlight.switchOn();
            this.sendNotification();
            setTimeout(function () {
                //  alert("Calling in time out");
                // directionsDisplay = new google.maps.DirectionsRenderer();
                _this.flashlight.switchOff();
            }, 3000);
        }
        else {
            // alert("else::"+JSON.stringify(this.pages[1]));
            this.nav.setRoot(page.component);
            this.nav.popToRoot();
        }
    };
    MyApp.prototype.sendNotification = function () {
        var _this = this;
        var notifyUrl = "http://klaspring.staging.wpengine.com/push_api.php?token=" + this.service.getToken();
        // var timer = setTimeout(() => {
        setTimeout(function () {
            _this.http.get(notifyUrl, { headers: _this.headers })
                .subscribe(function (data) {
                // alert("Success::"+JSON.stringify(data));
                _this.flashlight.switchOn();
                setTimeout(function () {
                    //  alert("Calling in time out");
                    // directionsDisplay = new google.maps.DirectionsRenderer();
                    _this.flashlight.switchOff();
                }, 3000);
                console.log(JSON.stringify(data));
            });
            (function (err) {
                // alert("Error"+err);
            });
        }, 5000);
        // }, 2000);
    };
    MyApp.prototype.presentConfirm = function (titleName, messageInfo) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: titleName,
            message: messageInfo,
            buttons: [
                {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        // console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Confirm',
                    handler: function () {
                        if (titleName = "Logout") {
                            _this.clearDeviceToken();
                            _this.nativeStorage.clear();
                            _this.nav.setRoot(__WEBPACK_IMPORTED_MODULE_7__pages_Login_Login__["a" /* LoginPage */]);
                            _this.nav.popToRoot();
                            _this.updateUserInfo();
                        }
                        else {
                            _this.fetchOtherUserInfo();
                        }
                    },
                }
            ]
        });
        alert.present();
    };
    MyApp.prototype.updateUserInfo = function () {
        var _this = this;
        var userInfo = this.service.getUser();
        userInfo.login = false;
        this.db.object('/user_detail/' + userInfo.key).update(userInfo).then(function (profile) {
            _this.service.setUser(null);
            console.log("Successfully updated location====");
            //  this.showToast("Successfully updated location====");
        })
            .catch(function (err) {
            // return new Response('Unable to save profile at this time, please try again later.');
            var error = "error==" + err;
        });
    };
    MyApp.prototype.fetchOtherUserInfo = function () {
        var _this = this;
        this.notifyData.receiverId = "-L0DF9Ef0a8192NgIrtH";
        // alert("key==="+this.notifyData.receiverId);
        var item = this.db.list('/user_detail', {
            query: {
                orderByChild: 'key',
                equalTo: this.notifyData.receiverId,
            },
        }).subscribe(function (snapshot) {
            // this.service.setUser(snapshot[0]);
            // alert("other user info====="+JSON.stringify(snapshot));
            _this.service.setOtherUserInfo(snapshot[0]);
            // this.navCtrl.push(UserDetailPage);
            _this.nav.push(__WEBPACK_IMPORTED_MODULE_18__pages_user_detail_user_detail__["a" /* UserDetailPage */]);
        }, function (error) {
            var err1 = "Error==" + error;
            _this.service.showToast2(err1);
        });
    };
    MyApp.prototype.clearDeviceToken = function () {
        var user = this.service.getUser();
        user.deviceToken = "";
        this.db.object('/user_detail/' + user.key).update(user).then(function (profile) {
            // return new Response('Profile has been saved successfully');
            console.log("Successfully updated location====");
            //  this.showToast("Successfully updated location====");
        })
            .catch(function (err) {
            // return new Response('Unable to save profile at this time, please try again later.');
            var error = "error==" + err;
            // this.showToast(error);
        });
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('myNav'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* Nav */])
    ], MyApp.prototype, "nav", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('NavController'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */])
    ], MyApp.prototype, "navCtrl", void 0);
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"D:\Ecommerce\src\app\app.html"*/'<ion-menu  [content]="content">\n\n  <ion-header>\n\n    <ion-toolbar>\n\n      <ion-title>Menu</ion-title>\n\n    </ion-toolbar>\n\n  </ion-header>\n\n\n\n  <ion-content>\n\n    <ion-list>\n\n      <button menuClose ion-item *ngFor="let p of pages" (click)="openPage(p)">\n\n        {{p.title}}\n\n      </button>\n\n    </ion-list>\n\n  </ion-content>\n\n\n\n</ion-menu>\n\n\n\n<!-- Disable swipe-to-go-back because it\'s poor UX to combine STGB with side menus -->\n\n<ion-nav [root]="rootPage" #content swipeBackEnabled="false" #myNav></ion-nav>'/*ion-inline-end:"D:\Ecommerce\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_19_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_fcm__["a" /* FCM */], __WEBPACK_IMPORTED_MODULE_6__sessionservice__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_social_sharing__["a" /* SocialSharing */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_8__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_location_accuracy__["a" /* LocationAccuracy */], __WEBPACK_IMPORTED_MODULE_12__ionic_native_network__["a" /* Network */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_flashlight__["a" /* Flashlight */], __WEBPACK_IMPORTED_MODULE_14__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_15__angular_http__["b" /* Http */],
            __WEBPACK_IMPORTED_MODULE_16__providers_location_tracker__["a" /* LocationTrackerProvider */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ListPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ListPage = /** @class */ (function () {
    function ListPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        // If we navigated to this page, we will have an item available as a nav param
        this.selectedItem = navParams.get('item');
        // Let's populate this page with some filler content for funzies
        this.icons = ['flask', 'wifi', 'beer', 'football', 'basketball', 'paper-plane',
            'american-football', 'boat', 'bluetooth', 'build'];
        this.items = [];
        for (var i = 1; i < 11; i++) {
            this.items.push({
                title: 'Item ' + i,
                note: 'This is item #' + i,
                icon: this.icons[Math.floor(Math.random() * this.icons.length)]
            });
        }
    }
    ListPage_1 = ListPage;
    ListPage.prototype.itemTapped = function (event, item) {
        // That's right, we're pushing to ourselves!
        this.navCtrl.push(ListPage_1, {
            item: item
        });
    };
    ListPage = ListPage_1 = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-list',template:/*ion-inline-start:"D:\Ecommerce\src\pages\list\list.html"*/'<ion-header>\n\n  <ion-navbar>\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n    <ion-title>List</ion-title>\n\n  </ion-navbar>\n\n</ion-header>\n\n\n\n<ion-content>\n\n  <ion-list>\n\n    <button ion-item *ngFor="let item of items" (click)="itemTapped($event, item)">\n\n      <ion-icon [name]="item.icon" item-start></ion-icon>\n\n      {{item.title}}\n\n      <div class="item-note" item-end>\n\n        {{item.note}}\n\n      </div>\n\n    </button>\n\n  </ion-list>\n\n  <div *ngIf="selectedItem" padding>\n\n    You navigated here from <b>{{selectedItem.title}}</b>\n\n  </div>\n\n</ion-content>\n\n'/*ion-inline-end:"D:\Ecommerce\src\pages\list\list.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */]])
    ], ListPage);
    return ListPage;
    var ListPage_1;
}());

//# sourceMappingURL=list.js.map

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
var environment = {
    production: false,
    firebase: {
        apiKey: 'AIzaSyB2jRIzVBXTmIgs5YPsW9krh-_qdqPdxyw',
        databaseURL: 'https://autorepair-1510293342488.firebaseio.com',
        projectId: 'autorepair-1510293342488',
        authDomain: "autorepair-1510293342488.firebaseapp.com",
    }
};
//# sourceMappingURL=environment.js.map

/***/ }),

/***/ 452:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponentModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emoji_picker__ = __webpack_require__(453);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EmojiPickerComponentModule = /** @class */ (function () {
    function EmojiPickerComponentModule() {
    }
    EmojiPickerComponentModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]),
            ],
            exports: [
                __WEBPACK_IMPORTED_MODULE_2__emoji_picker__["a" /* EmojiPickerComponent */]
            ]
        })
    ], EmojiPickerComponentModule);
    return EmojiPickerComponentModule;
}());

//# sourceMappingURL=emoji-picker.module.js.map

/***/ }),

/***/ 453:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_PICKER_VALUE_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiPickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__providers_emoji__ = __webpack_require__(295);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(19);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmojiPickerComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
var EMOJI_PICKER_VALUE_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_2__angular_forms__["d" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* forwardRef */])(function () { return EmojiPickerComponent; }),
    multi: true
};
var EmojiPickerComponent = /** @class */ (function () {
    function EmojiPickerComponent(emojiProvider) {
        this.emojiArr = [];
        this.emojiArr = emojiProvider.getEmojis();
    }
    EmojiPickerComponent.prototype.writeValue = function (obj) {
        this._content = obj;
    };
    EmojiPickerComponent.prototype.registerOnChange = function (fn) {
        this._onChanged = fn;
        this.setValue(this._content);
    };
    EmojiPickerComponent.prototype.registerOnTouched = function (fn) {
        this._onTouched = fn;
    };
    EmojiPickerComponent.prototype.setValue = function (val) {
        this._content += val;
        if (this._content) {
            this._onChanged(this._content);
        }
    };
    EmojiPickerComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'emoji-picker',
            providers: [EMOJI_PICKER_VALUE_ACCESSOR],template:/*ion-inline-start:"D:\Ecommerce\src\components\emoji-picker\emoji-picker.html"*/'<!-- Generated template for the EmojiPickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n\n      <ion-slide *ngFor="let items of emojiArr">\n        <span class="emoji-item"\n              (click)="setValue(item)"\n              *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"D:\Ecommerce\src\components\emoji-picker\emoji-picker.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__providers_emoji__["a" /* EmojiProvider */]])
    ], EmojiPickerComponent);
    return EmojiPickerComponent;
}());

// export class EmojiPickerComponentModule{}
//# sourceMappingURL=emoji-picker.js.map

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Places; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__ = __webpack_require__(78);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__ = __webpack_require__(56);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_sessionservice__ = __webpack_require__(26);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__ = __webpack_require__(245);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__angular_forms__ = __webpack_require__(19);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications__ = __webpack_require__(141);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__providers_location_tracker__ = __webpack_require__(90);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



// import 'rxjs/add/operator/map';








 // Newly Added




var HomePage = /** @class */ (function () {
    function HomePage(db, navCtrl, http, fb, googlePlus, callNumber, camera, actionCtrl, socialSharing, service, platform, diagnostic, native, geolocation, ngZone, modalCtrl, events, localNotification, locationTracker) {
        this.db = db;
        this.navCtrl = navCtrl;
        this.http = http;
        this.fb = fb;
        this.googlePlus = googlePlus;
        this.callNumber = callNumber;
        this.camera = camera;
        this.actionCtrl = actionCtrl;
        this.socialSharing = socialSharing;
        this.service = service;
        this.platform = platform;
        this.diagnostic = diagnostic;
        this.native = native;
        this.geolocation = geolocation;
        this.ngZone = ngZone;
        this.modalCtrl = modalCtrl;
        this.events = events;
        this.localNotification = localNotification;
        this.locationTracker = locationTracker;
        this.localStorageInfoFirst = true;
        this.first = true;
        this.loadMapFirst = true;
        this.firstTimeLoad = true;
        this.firstTimeDestinationMarker = true;
        this.firstNotify = true;
        this.mobileNo = "997167288122";
        this.headers = new __WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Headers */]({ 'Content-Type': 'application/json' });
        this.currentLatLng = {};
        this.user = {};
        this.markers = [];
        this.destination = {};
        this.destination.lat = 28.4592693;
        this.destination.lng = 77.0702305;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        // var user=this.service.getUser();
        // user.latitude=9874561;
        // user.longitude=456789;
        var _this = this;
        // var id="-L09Jwk1T5yYMQ-Zg2H4";
        // // alert("key==="+this.notifyData.receiverId);
        // var item=this.db.list('/user_detail',{
        //   query:{
        //     orderByChild:'key',
        //     equalTo:id,
        //   },
        // }).subscribe(snapshot =>{
        //   this.service.setOtherUserInfo(snapshot[0]);
        //   this.navCtrl.push(UserDetailPage);
        //   },error=>{
        //     var err1="Error=="+error;
        //     this.service.showToast2(err1);
        //   });
        this.platform.ready().then(function (readySource) {
            // this.service.showToast("Enable Location====");
            _this.diagnostic.isLocationEnabled().then(function (isAvailable) {
                console.log('Is available? ' + isAvailable);
                var mssg = 'Is available? ' + isAvailable;
                if (isAvailable) {
                    _this.locationTracker.startTracking();
                }
                else {
                    _this.service.showToast("Please Enable Your location!!!!");
                }
            }).catch(function (e) {
                console.log(e);
            });
        });
        this.events.subscribe('fetch:location:success', function (location) {
            // this.service.showToast("location146=="+JSON.stringify(location));
            if (_this.firstTimeLoad) {
                // this.service.showToast2("First time load==");
                _this.loadMap(location.latitude, location.longitude);
                _this.firstTimeLoad = false;
            }
            else {
                // this.service.showToast2("repeat load==");
                var latLng = new google.maps.LatLng(location.latitude, location.longitude);
                if (_this.directionsDisplay && _this.directionsService && _this.destinationLatLng) {
                    _this.userMarker.setPosition(latLng);
                    _this.latLng = latLng;
                    _this.displayRoute(_this.directionsDisplay, _this.directionsService, latLng, _this.destinationLatLng);
                }
            }
        });
        this.events.subscribe('destination:changed', function (destination) {
            _this.destination.lat = destination.lat;
            _this.destination.lng = destination.lng;
            if (_this.destinationLatLng) {
                _this.destinationLatLng = new google.maps.LatLng(_this.destination.lat, _this.destination.lng);
                _this.marker2.setPosition(_this.destinationLatLng);
                _this.displayRoute(_this.directionsDisplay, _this.directionsService, _this.latLng, _this.destinationLatLng);
            }
        });
    };
    HomePage.prototype.start = function () {
        this.locationTracker.startTracking();
    };
    HomePage.prototype.stop = function () {
        this.locationTracker.stopTracking();
    };
    HomePage.prototype.call = function () {
        this.callNumber.callNumber("9971672881", true)
            .then(function () { return console.log('Launched dialer!'); })
            .catch(function () { return console.log('Error launching dialer'); });
    };
    HomePage.prototype.searchLocation = function () {
        var profileModal = this.modalCtrl.create(Places);
        profileModal.present();
    };
    HomePage.prototype.loadMap = function (lat, lng) {
        var _this = this;
        this.user.lat = lat;
        this.user.lng = lng;
        this.latLng = new google.maps.LatLng(lat, lng);
        this.service.setUserLocation(this.user);
        var mapOptions = {
            center: this.latLng,
            zoom: 10,
            mapTypeId: google.maps.MapTypeId.ROADMAP,
            mapTypeControl: true,
            mapTypeControlOptions: {
                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                position: google.maps.ControlPosition.TOP_CENTER
            },
            zoomControl: true,
            zoomControlOptions: {
                position: google.maps.ControlPosition.LEFT_CENTER
            },
            scaleControl: true,
            streetViewControl: true,
            streetViewControlOptions: {
                position: google.maps.ControlPosition.LEFT_TOP
            },
            fullscreenControl: true
        };
        this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
        var marker = new google.maps.Marker({
            map: this.map,
            position: this.latLng,
            icon: "assets/icon/user5.png"
        });
        google.maps.event.addListener(marker, 'click', function () {
            _this.showAddress(marker, _this.latLng, 2);
        });
        this.userMarker = marker;
        this.markers.push(marker);
        this.directionsDisplay = new google.maps.DirectionsRenderer({ preserveViewport: true });
        this.directionsService = new google.maps.DirectionsService();
        this.directionsDisplay.setMap(this.map);
        this.directionsDisplay.setOptions({ suppressMarkers: true });
        this.infoWindow = new google.maps.InfoWindow();
        if (this.firstTimeDestinationMarker) {
            setTimeout(function () {
                _this.createMarker(_this.directionsDisplay, _this.directionsService);
            }, 500);
            this.firstTimeDestinationMarker = false;
        }
    };
    HomePage.prototype.createMarker = function (display, service) {
        var _this = this;
        this.destinationLatLng = new google.maps.LatLng(this.destination.lat, this.destination.lng);
        this.marker2 = new google.maps.Marker({
            map: this.map,
            position: {
                lat: this.destination.lat,
                lng: this.destination.lng
            },
        });
        google.maps.event.addListener(this.marker2, 'click', function () {
            _this.showAddress(_this.marker2, _this.destinationLatLng, 2);
        });
        this.markers.push(this.marker2);
        this.showAddress(this.marker2, this.destinationLatLng, null);
        this.bounds = new google.maps.LatLngBounds();
        for (var i = 0; i < this.markers.length; i++) {
            this.bounds.extend(this.markers[i].getPosition());
        }
        this.map.fitBounds(this.bounds);
        display.setMap(this.map);
        this.displayRoute(display, service, this.latLng, this.destinationLatLng);
    };
    HomePage.prototype.showAddress = function (marker, latlng, markerType) {
        //  //alert('x');
        var _this = this;
        this.ngZone.run(function () {
            var geocoder = new google.maps.Geocoder();
            //  var latLng=this.marker2;
            // var latLng=this.latLng;
            geocoder.geocode({ 'latLng': latlng }, function (results, status) {
                if (status == google.maps.GeocoderStatus.OK) {
                    if (results[0]) {
                        var address = results[0].formatted_address;
                        // var infowindow = new google.maps.InfoWindow();
                        _this.user.destination = address;
                        if (markerType == "user") {
                            _this.notify(address);
                        }
                        if (markerType == 1 || markerType == 2) {
                            _this.infoWindow.setContent('<div><strong>' + address + '</strong><br>');
                            _this.infoWindow.open(_this.map, marker);
                        }
                    }
                }
                else {
                    // this.service.showToast("Failed to fetch address");
                }
            });
        });
    };
    HomePage.prototype.displayRoute = function (directionDisplay, directionService, origin, destination) {
        var _this = this;
        var request = {
            origin: origin,
            destination: destination,
            travelMode: google.maps.TravelMode.DRIVING
        };
        directionService.route(request, function (response, status) {
            if (status == google.maps.DirectionsStatus.OK) {
                _this.user.distance = response.routes[0].legs[0].distance.text;
                _this.user.duration = response.routes[0].legs[0].duration.text;
                directionDisplay.setDirections({ routes: [] });
                directionDisplay.setDirections(response);
            }
        });
    };
    HomePage.prototype.takePictureWithType = function (type) {
        var _this = this;
        var options = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: type,
        };
        this.camera.getPicture(options).then(function (imageData) {
            _this.capturedImage = imageData;
            _this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, function (err) {
        });
    };
    HomePage.prototype.shareApp = function () {
        this.socialSharing.share().then(function () {
            // Sharing via email is possible
        }).catch(function () {
            // Sharing via email is not possible
        });
    };
    HomePage.prototype.takePicture = function () {
        // //alert("Calling");
        var _this = this;
        var actionSheet = this.actionCtrl.create({
            title: 'Select Image Source',
            buttons: [
                {
                    text: 'Load from Library',
                    handler: function () {
                        _this.takePictureWithType(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                },
                {
                    text: 'Use Camera',
                    handler: function () {
                        _this.takePictureWithType(_this.camera.PictureSourceType.CAMERA);
                    }
                },
                {
                    text: 'Cancel',
                    role: 'cancel'
                }
            ]
        });
        actionSheet.present();
    };
    HomePage.prototype.notify = function (Address) {
        if (this.firstNotify) {
            this.localNotification.schedule({
                title: "Current Location",
                text: Address,
                // every:'minute',
                sound: 'file://assets/sounds/bell.mp3'
            });
            this.firstNotify = false;
        }
    };
    HomePage.prototype.sendNotification = function () {
        var _this = this;
        var notifyUrl = "http://klaspring.staging.wpengine.com/push_api.php?token=" + this.service.getToken();
        //alert(notifyUrl);
        var timer = setTimeout(function () {
            _this.http.get(notifyUrl, { headers: _this.headers })
                .subscribe(function (data) {
                //alert("Success::"+JSON.stringify(data));
                console.log(JSON.stringify(data));
            });
            (function (err) {
                //alert("Error"+err);
            });
        }, 2000);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('map'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "mapElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Ecommerce\src\pages\home\home.html"*/'<ion-header>\n\n  <ion-navbar hideBackButton="true">\n\n    <button ion-button menuToggle>\n\n      <ion-icon name="menu"></ion-icon>\n\n    </button>\n\n     \n\n    <ion-title>Home</ion-title>\n\n      <ion-buttons end>\n\n        <button (click)="call()">\n\n        <ion-icon name="call" ></ion-icon>\n\n        </button>\n\n      </ion-buttons>\n\n  </ion-navbar>\n\n  \n\n</ion-header>\n\n\n\n<ion-content padding>\n\n\n\n   <ion-item>\n\n    <ion-input placeholder="Search Destination" [(ngModel)]="user.destination" (tap)="searchLocation()"></ion-input>\n\n   </ion-item>\n\n\n\n  <div #map id="map"></div>\n\n  \n\n  <ion-list *ngIf="user.distance && user.duration">\n\n      <ion-item text-center>\n\n          <b>Travel Mode:-Driving</b>\n\n      </ion-item> \n\n      <ion-item>\n\n        <b>Distance</b> {{user.distance}}\n\n      </ion-item>\n\n      \n\n      <ion-item>\n\n        <b>Duration</b> {{user.duration}}\n\n      </ion-item>\n\n  </ion-list>\n\n  <br/>\n\n  <!-- <ion-list>\n\n    <ion-item>\n\n      <input type="text" [(ngModel)]="zoomLevel">\n\n    </ion-item>\n\n\n\n    <ion-item>\n\n       <button (click)="increaseZoomSize()">Increase</button><br/><br/><br/>\n\n       <button (click)="decreaseZoomSize()">Decrease</button>\n\n    </ion-item>\n\n  </ion-list> -->\n\n</ion-content>\n\n<ion-footer>\n\n  <ion-toolbar>\n\n    <ion-item>\n\n       <ion-icon name="camera" (click)="takePicture()"> Select Image</ion-icon> \n\n        \n\n    </ion-item>\n\n  </ion-toolbar>\n\n</ion-footer>\n\n'/*ion-inline-end:"D:\Ecommerce\src\pages\home\home.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_14_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavController */], __WEBPACK_IMPORTED_MODULE_2__angular_http__["b" /* Http */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_facebook__["a" /* Facebook */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_native_google_plus__["a" /* GooglePlus */], __WEBPACK_IMPORTED_MODULE_5__ionic_native_call_number__["a" /* CallNumber */], __WEBPACK_IMPORTED_MODULE_6__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */], __WEBPACK_IMPORTED_MODULE_7__ionic_native_social_sharing__["a" /* SocialSharing */],
            __WEBPACK_IMPORTED_MODULE_8__app_sessionservice__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* Platform */], __WEBPACK_IMPORTED_MODULE_9__ionic_native_diagnostic__["a" /* Diagnostic */],
            __WEBPACK_IMPORTED_MODULE_10__ionic_native_native_storage__["a" /* NativeStorage */], __WEBPACK_IMPORTED_MODULE_11__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */], __WEBPACK_IMPORTED_MODULE_13__ionic_native_local_notifications__["a" /* LocalNotifications */], __WEBPACK_IMPORTED_MODULE_15__providers_location_tracker__["a" /* LocationTrackerProvider */]])
    ], HomePage);
    return HomePage;
}());

var Places = /** @class */ (function () {
    function Places(params, viewCtrl, events) {
        this.viewCtrl = viewCtrl;
        this.events = events;
        this.user = {};
        this.destination = {};
        this.myGroup = new __WEBPACK_IMPORTED_MODULE_12__angular_forms__["b" /* FormGroup */]({
            placeAutofill: new __WEBPACK_IMPORTED_MODULE_12__angular_forms__["a" /* FormControl */]()
        });
        //  console.log('UserId', params.get('userId'));
    }
    Places.prototype.ionViewDidLoad = function () {
        this.loadAutoComplete();
    };
    Places.prototype.loadAutoComplete = function () {
        var _this = this;
        var places = document.getElementById('googlePlaces').getElementsByTagName('input')[0];
        var autocomplete = new google.maps.places.Autocomplete(places, { types: ['geocode'] });
        google.maps.event.addListener(autocomplete, 'place_changed', function () {
            // retrieve the place object for your use
            var place = autocomplete.getPlace();
            var location = place.geometry.location;
            console.log(location.lat());
            // //alert(JSON.stringify(place.geometry.location));
            _this.destination = {};
            _this.destination.lat = location.lat();
            _this.destination.lng = location.lng();
            _this.events.publish('destination:changed', _this.destination);
            _this.closeModal();
            // //alert("mssg==="+mssg);
            // //this.service.showToast(mssg);
            // ////alert("place changed=="+JSON.stringify(place));
            // console.log("selected Places =>>>>>>>>>>>>>>>>>>"+JSON.stringify(place));
            // var destinyLatLng=new google.maps.LatLng(place.geometry.location.lat,place.geometry.location.lng);
            // this.marker2.setPosition(destinyLatLng);
            // this.user={"lat":place.geometry.location.lat(),"lng":place.geometry.location.lng(),"address":place.address_components[0].long_name}; 
            ////alert("user Address===>"+JSON.stringify(this.user)); 
            // this.loadMap(place.geometry.location.lat(),place.geometry.location.lng());
        });
    };
    Places.prototype.closeModal = function () {
        this.viewCtrl.dismiss();
    };
    Places = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"D:\Ecommerce\src\pages\home\places.html"*/'<ion-header>\n\n<ion-navbar>\n\n    <ion-title>Places</ion-title>\n\n    <ion-buttons end>\n\n    <button ion-button (click)="closeModal()">Close</button>\n\n    </ion-buttons>\n\n</ion-navbar>\n\n\n\n</ion-header>\n\n\n\n\n\n<ion-content padding>\n\n   <!-- <ion-list> -->\n\n    \n\n        <div [formGroup]="myGroup"> \n\n            <ion-input formControlName="placeAutofill"  [(ngModel)]="user.destiny" id="googlePlaces" placeholder="Search Box" required></ion-input>\n\n        </div> \n\n         \n\n    \n\n   <!-- </ion-list> -->\n\n</ion-content>'/*ion-inline-end:"D:\Ecommerce\src\pages\home\places.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* NavParams */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* ViewController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
    ], Places);
    return Places;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 90:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LocationTrackerProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__ = __webpack_require__(286);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__ = __webpack_require__(446);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_filter__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_ionic_angular__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2_database_deprecated__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_sessionservice__ = __webpack_require__(26);
// // import { HttpClient,HttpHandler } from '@angular/common/http';
// import { Injectable,NgZone } from '@angular/core';
// import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
// import { Geolocation, Geoposition } from '@ionic-native/geolocation';
// import 'rxjs/add/operator/filter';
// import { Toast } from '@ionic-native/toast';
// import {Events,ToastController } from 'ionic-angular';
// import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
// import { SessionService } from '../app/sessionservice';
// import { Jsonp } from '@angular/http/src/http';
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
// /*
//   Generated class for the LocationTrackerProvider provider.
//   See https://angular.io/guide/dependency-injection for more info on providers
//   and Angular DI.
// */
// @Injectable()
// export class LocationTrackerProvider {
//   user:any;  
//   public watch: any;   
//   public lat: number = 0;
//   public lng: number = 0;
//   constructor(public service:SessionService,public db: AngularFireDatabase,public backgroundGeolocation:BackgroundGeolocation,public geolocation:Geolocation,public zone:NgZone,public toast:Toast,public events:Events) {
//     console.log('Hello LocationTrackerProvider Provider');
//     this.user=this.service.getUser();
//   }
// showToast(message)
// {
//   this.toast.show(message, '5000', 'bottom').subscribe(
//     toast => {
//       console.log(toast);
//     }
//   );
// }
//   startTracking() {
//         let config = {
//           desiredAccuracy: 0,
//           stationaryRadius: 20,
//           distanceFilter: 10,
//           debug: true,
//           interval: 2000
//         };
//         this.service.showToast("tracking location");
//         this.backgroundGeolocation.configure(config).subscribe((location) => {
//           this.service.showToast("55 line hello");
//           // this.service.showToast(location);
//           // this.showToast(JSON.stringify(location));
//           this.lat = location.latitude;
//           this.lng = location.longitude;
//           var message="lat=="+this.lat+"lng=="+this.lng;
//           this.showToast(message);
//           console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
//           // Run update inside of Angular's zone
//           this.zone.run(() => {
//             // this.lat = location.latitude;
//             // this.lng = location.longitude;
//             // var message="lat=="+this.lat+"lng=="+this.lng;
//             // this.showToast(message);
//             // this.user=this.service.getUser();
//             this.user.latitude=this.lat;
//             this.user.longitude=this.lng;
//             // this.db.object('/user_detail/'+this.user.$key).update(this.user);
//             // this.events.publish('fetch:location:success',location); 
//           });
//         }, (err) => {
//           var error="Error80=="+err;
//           this.service.showToast(error);
//           console.log(err);
//         });
//         // Turn ON the background-geolocation system.
//         this.backgroundGeolocation.start();
//         // Foreground Tracking
//       let options = {
//         frequency: 3000,
//         enableHighAccuracy: true
//       };
//       this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
//         console.log(position);
//         this.showToast(JSON.stringify(position));
//         // this.lat = position.coords.latitude;
//         // this.lng = position.coords.longitude;
//         // var message="lat=="+this.lat+"lng=="+this.lng;
//         // this.showToast(message);
//         // Run update inside of Angular's zone
//         this.zone.run(() => {
//           this.lat = position.coords.latitude;
//           this.lng = position.coords.longitude;
//           this.user.latitude=this.lat;
//           this.user.longitude=this.lng;
//           var message="lat=="+this.lat+"lng=="+this.lng;
//           this.showToast(message);
//           this.db.object('/user_detail/'+this.user.$key).update(this.user);
//           this.events.publish('fetch:location:success',position.coords);
//           // var message="lat=="+this.lat+"lng=="+this.lng;
//         });
//       },(err)=>{
//         var error="Error120=="+err;
//         this.service.showToast(error);
//       });
//   }
//   stopTracking() {
//     console.log('stopTracking');
//      this.backgroundGeolocation.finish();
//      this.watch.unsubscribe();
//   }
// }
// import { HttpClient,HttpHandler } from '@angular/common/http';








/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var LocationTrackerProvider = /** @class */ (function () {
    function LocationTrackerProvider(service, db, backgroundGeolocation, geolocation, zone, toast, events) {
        this.service = service;
        this.db = db;
        this.backgroundGeolocation = backgroundGeolocation;
        this.geolocation = geolocation;
        this.zone = zone;
        this.toast = toast;
        this.events = events;
        this.lat = 0;
        this.lng = 0;
        this.firstTime = true;
        console.log('Hello LocationTrackerProvider Provider');
    }
    LocationTrackerProvider.prototype.showToast = function (message) {
        this.toast.show(message, '5000', 'bottom').subscribe(function (toast) {
            console.log(toast);
        });
    };
    LocationTrackerProvider.prototype.startTracking = function () {
        var _this = this;
        // this.showToast("Tracking==");
        var config = {
            desiredAccuracy: 0,
            stationaryRadius: 20,
            distanceFilter: 10,
            debug: true,
            interval: 2000
        };
        var users = this.service.getUser();
        // alert("users=="+JSON.stringify(users));
        this.user = users;
        this.backgroundGeolocation.configure(config).subscribe(function (location) {
            console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
            // this.showToast("background==");
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = location.latitude;
                _this.lng = location.longitude;
                var message = "lat==" + _this.lat + "lng==" + _this.lng;
                // this.showToast(message);
                // this.user.latitude=this.lat;
                // this.user.longitude=this.lng;
                // // var message="lat=="+this.lat+"lng=="+this.lng;
                // var message="user=="+JSON.stringify(this.user);
                // // this.showToast(message);
                // this.db.object('/user_detail/'+this.user.$key).update(this.user).then((profile: any) => {
                //     // return new Response('Profile has been saved successfully');
                //      this.showToast("Successfully updated location====");
                //  })
                // .catch((err: any) => {
                //     // return new Response('Unable to save profile at this time, please try again later.');
                //     var error="error=="+err;
                //     this.showToast(error);
                // }) 
                // // );
                // this.events.publish('fetch:location:success',location); 
                var userInfo = "info===" + JSON.stringify(_this.user);
                // alert(userInfo);
                _this.service.showToast(userInfo);
                _this.user.latitude = _this.lat;
                _this.user.longitude = _this.lng;
                var message = "lat==" + _this.lat + "lng==" + _this.lng;
                // var message="user=="+JSON.stringify(this.user);
                // this.showToast(message);
                // this.showToast("update");
                // this.db.object('/user_detail/'+this.user.$key).update(this.user);
                // this.events.publish('fetch:location:success',location);
            });
        }, function (err) {
            var error;
            error = "Error199==" + err;
            console.log(error);
            // this.showToast(error);
        });
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
        // Foreground Tracking
        var options = {
            frequency: 3000,
            enableHighAccuracy: true
        };
        this.watch = this.geolocation.watchPosition(options).filter(function (p) { return p.code === undefined; }).subscribe(function (position) {
            console.log(position);
            var message = "lat222==" + _this.lat + "lng222==" + _this.lng;
            // this.showToast(message);
            // Run update inside of Angular's zone
            _this.zone.run(function () {
                _this.lat = position.coords.latitude;
                _this.lng = position.coords.longitude;
                var message = "lat==" + _this.lat + "lng==" + _this.lng;
                _this.user.latitude = _this.lat;
                _this.user.longitude = _this.lng;
                var message = "user==" + JSON.stringify(_this.user);
                // this.showToast(message);
                // this.db.object('/user_detail/'+this.user.key).update(this.user).then((profile: any) => {
                //     // return new Response('Profile has been saved successfully');
                //       console.log("Successfully updated location====")
                //     //  this.showToast("Successfully updated location====");
                //   })
                // .catch((err: any) => {
                //     // return new Response('Unable to save profile at this time, please try again later.');
                //     var error="error=="+err;
                //     this.showToast(error);
                // });
                // if(this.firstTime)
                //   {
                //     this.firstTime=false;
                //     this.events.publish('fetch:location:success',position.coords); 
                //   }
                _this.events.publish('fetch:location:success', position.coords);
            });
        }, function (err) {
            var error;
            error = "Error231==" + err;
            _this.showToast(error);
            console.log(error);
        });
    };
    LocationTrackerProvider.prototype.stopTracking = function () {
        console.log('stopTracking');
        this.backgroundGeolocation.finish();
        this.watch.unsubscribe();
    };
    LocationTrackerProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_7__app_sessionservice__["a" /* SessionService */], __WEBPACK_IMPORTED_MODULE_6_angularfire2_database_deprecated__["a" /* AngularFireDatabase */], __WEBPACK_IMPORTED_MODULE_1__ionic_native_background_geolocation__["a" /* BackgroundGeolocation */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_geolocation__["a" /* Geolocation */], __WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* NgZone */], __WEBPACK_IMPORTED_MODULE_4__ionic_native_toast__["a" /* Toast */], __WEBPACK_IMPORTED_MODULE_5_ionic_angular__["d" /* Events */]])
    ], LocationTrackerProvider);
    return LocationTrackerProvider;
}());

//# sourceMappingURL=location-tracker.js.map

/***/ })

},[296]);
//# sourceMappingURL=main.js.map