import { Injectable } from '@angular/core';
import {Http, Response,RequestOptions,Request, RequestMethod,Headers,URLSearchParams} from '@angular/http';
import {Events,ToastController } from 'ionic-angular';
import { NativeStorage } from '@ionic-native/native-storage';
import { Toast } from '@ionic-native/toast';
import { Geolocation } from '@ionic-native/geolocation'; // Newly Added
declare var google:any;
declare var navigator: any;
@Injectable()

export class SessionService {
    preQuestions:any;
    selfQuestions:any;
    finalQuestions:any;
    latestJobs:any;
    jobDetail:any;
    trainingDetail:any;
    user:any;
    certifiedTrainer:any;
    token:any;
    userTypeData:any;
    userInfo:any;
    otherUserInfo:any;
    product:any;
    constructor(public http:Http,public events:Events,public toastCtrl:ToastController,public nativeStorage:NativeStorage,public toast:Toast,public geolocation:Geolocation){
    }

    setProduct(product)
    {
        this.product=product;
    }

    getProduct()
    {
        return this.product;
    }
    setToken(token)
    {
    this.token=token;
    }  

    getToken()
    {
        return this.token;
    }

     showToast2(message)
    {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 5000,
            position: 'center'
        });

        toast.onDidDismiss(() => {
            console.log('Dismissed toast');
        });
        toast.present();
    }


     showToast(message)
    {
       this.toast.show(message, '7000', 'center').subscribe(
        toast => {
            console.log(toast);
          }
        );
    }


   


    setUserLocation(userLocation)
    {
        this.nativeStorage.setItem('userLocation',userLocation)
        .then(
            () =>
                {
                 var message="stored";
                //  this.showToast("stored location")
                },
            error =>{
                var message="stored location error="+error;
                 this.showToast(message)
            } 
        );
        this.userInfo=userLocation;
    }

     getUserLocation()
    {
        // alert("getting location");
        var userLocation;
        this.nativeStorage.getItem('userLocation')
        .then(
            data =>
                {
                 var message="stored location"+JSON.stringify(data);
                //  this.showToast(message);
                 userLocation=data;   
                
                },
            error =>{
                var message="stored location error="+JSON.stringify(error);
                this.showToast(message)
            } 
        );
        setTimeout(()=>{
            return this.userInfo;
        },1000)
        
    }

    getCurrentLocation()
    {
        // alert("call108");

        // this.showToast("Callling");
          const subscription = this.geolocation.watchPosition()
          
          .subscribe(position => {
            console.log(position.coords.longitude + ' ' + position.coords.latitude);
            var location=position.coords;
            this.events.publish('fetch:location:success',location); 
           },
            (error)=>{
              console.log("error=="+error);  
            });
    }

    
    setUser(userInfo)
    {
      this.user=userInfo;
       this.nativeStorage.setItem('userInfo',userInfo)
        .then(
            () =>
                {
                 var message="stored";
                 alert("Stored===");
                //  this.showToast("stored user type")
                },
            error =>{
                alert("Failed to stored==="+error);
                var message="stored error user type="+error;
                //  this.showToast(message)
            } 
        );   
    }

    getUser()
    {
     return this.user;
    }

    setOtherUserInfo(info)
    {
      this.otherUserInfo=info;
    }

    getOtherUserInfo()
    {
        return this.otherUserInfo;
    }

    getStoredData()
    {
        this.nativeStorage.getItem('userInfo')
        .then
        (

            
            data =>
            {
                // this.userData=data;
                // alert("data 195==="+JSON.stringify(data));
                this.events.publish('fetch:localData',data); 
                this.setUser(data);
                return data;
               
            },
            error =>{
             
            }  
        );
    }
}

    