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
import { Injectable,NgZone } from '@angular/core';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { Geolocation, Geoposition } from '@ionic-native/geolocation';
import 'rxjs/add/operator/filter';
import { Toast } from '@ionic-native/toast';
import {Events,ToastController } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { SessionService } from '../app/sessionservice';
/*
  Generated class for the LocationTrackerProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class LocationTrackerProvider {
  public watch: any;   
  public lat: number = 0;
  public lng: number = 0;
  user:any;
  firstTime:boolean=true;
  constructor(public service:SessionService,public db:AngularFireDatabase,public backgroundGeolocation:BackgroundGeolocation,public geolocation:Geolocation,public zone:NgZone,public toast:Toast,public events:Events) {
    console.log('Hello LocationTrackerProvider Provider');
  }




showToast(message)
{
  this.toast.show(message, '5000', 'bottom').subscribe(
    toast => {
      console.log(toast);
    }
  );
}
  

  startTracking() {



        // this.showToast("Tracking==");
        let config = {
          desiredAccuracy: 0,
          stationaryRadius: 20,
          distanceFilter: 10,
          debug: true,
          interval: 2000
        };
        var users=this.service.getUser();


        // alert("users=="+JSON.stringify(users));
        this.user=users;
        this.backgroundGeolocation.configure(config).subscribe((location) => {
      
          console.log('BackgroundGeolocation:  ' + location.latitude + ',' + location.longitude);
          // this.showToast("background==");
          // Run update inside of Angular's zone
          this.zone.run(() => {
            
            
            this.lat = location.latitude;
            this.lng = location.longitude;
            var message="lat=="+this.lat+"lng=="+this.lng;
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


            var userInfo="info==="+JSON.stringify(this.user);

            // alert(userInfo);
            this.service.showToast(userInfo);
            this.user.latitude=this.lat;
            this.user.longitude=this.lng;
            var message="lat=="+this.lat+"lng=="+this.lng;
            // var message="user=="+JSON.stringify(this.user);
            // this.showToast(message);

            // this.showToast("update");
            // this.db.object('/user_detail/'+this.user.$key).update(this.user);
            // this.events.publish('fetch:location:success',location);
          });
      
        }, (err) => {
           var error;
           error="Error199=="+err;
          console.log(error);
          // this.showToast(error);
      
        });
      
        // Turn ON the background-geolocation system.
        this.backgroundGeolocation.start();
      
      
        // Foreground Tracking
      
      let options = {
        frequency: 3000,
        enableHighAccuracy: true
      };
      
      this.watch = this.geolocation.watchPosition(options).filter((p: any) => p.code === undefined).subscribe((position: Geoposition) => {
      
        console.log(position);

  
        var message="lat222=="+this.lat+"lng222=="+this.lng;
        // this.showToast(message);

        // Run update inside of Angular's zone
        this.zone.run(() => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;

          var message="lat=="+this.lat+"lng=="+this.lng;
          this.user.latitude=this.lat;
          this.user.longitude=this.lng;
          var message="user=="+JSON.stringify(this.user);

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

            this.events.publish('fetch:location:success',position.coords); 
            
        });
      },(err)=>
        {
          var error;
          error="Error231=="+err;
          this.showToast(error);
         console.log(error);
        });
  }
    
  stopTracking() {

    console.log('stopTracking');
    
     this.backgroundGeolocation.finish();
     this.watch.unsubscribe();
  }

}
