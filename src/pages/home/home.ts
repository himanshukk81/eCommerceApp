import { Component,ViewChild,ElementRef,NgZone } from '@angular/core';
import { NavController,ActionSheetController,Platform,ModalController, NavParams,ViewController,Events } from 'ionic-angular';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { SocialSharing } from '@ionic-native/social-sharing';
import { SessionService } from '../../app/sessionservice';
import { LoginPage } from '../Login/Login';
import { Diagnostic } from '@ionic-native/diagnostic';
import { NativeStorage } from '@ionic-native/native-storage';
import { Geolocation } from '@ionic-native/geolocation'; // Newly Added
import { map, filter, tap } from 'rxjs/operators';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { LocationTrackerProvider } from '../../providers/location-tracker';
import { UserDetailPage} from '../user-detail/user-detail';

declare var google:any;
declare var navigator: any;


declare var directionsService:any;
declare var directionsDisplay: any;
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  @ViewChild('map') mapElement: ElementRef; // Added
  mobileNo:any;
  otp:any;
  headers:any;
  capturedImage:any;
  base64Image:any;
  intervalId1:any;
  intervalId2:any;
  localStorageInfoFirst:boolean=true;
  currentLatLng:any;
  user:any;
  first:boolean=true;
  loadMapFirst:boolean=true;
  latLng:any;
  map:any;
  bounds:any;
  markers:any;
  zoomLevel:any;
  destination:any;
  userMarker:any;
  firstTimeLoad:any=true;
  firstTimeDestinationMarker:any=true;
  directionsService:any;
  directionsDisplay:any;
  destinationLatLng:any;
  marker2:any;
  myGroup:any;
  markerAny:any;
  infoWindow:any;
  routes:any;
  firstNotify:boolean=true;
  constructor(public db: AngularFireDatabase,public navCtrl: NavController,public http:Http,public fb: Facebook,
    public googlePlus: GooglePlus,public callNumber: CallNumber,public camera: Camera,
    public actionCtrl:ActionSheetController,public socialSharing: SocialSharing,
    public service:SessionService,public platform:Platform,public diagnostic:Diagnostic,
    public native:NativeStorage,public geolocation:Geolocation,public ngZone:NgZone,public modalCtrl: ModalController,public events:Events,public localNotification:LocalNotifications,public locationTracker:LocationTrackerProvider) {
    this.mobileNo="997167288122";
    this.headers = new Headers({'Content-Type':'application/json'});
    this.currentLatLng={};
    this.user={};
    this.markers=[];
    this.destination={};        
    this.destination.lat=28.4592693;
    this.destination.lng=77.0702305;
  }

        ionViewDidLoad()
      { 

        // var user=this.service.getUser();
        // user.latitude=9874561;
        // user.longitude=456789;



        
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
        
        this.platform.ready().then((readySource) => {
              // this.service.showToast("Enable Location====");
              this.diagnostic.isLocationEnabled().then(
              (isAvailable) => {
              console.log('Is available? ' + isAvailable);
              var mssg='Is available? ' + isAvailable;
              if(isAvailable)
                {
                  this.locationTracker.startTracking();
                }
                else
                {
                  this.service.showToast("Please Enable Your location!!!!"); 
                }
              }).catch( (e) => {
                  console.log(e);
              });
            })
          this.events.subscribe('fetch:location:success', location => {
                      // this.service.showToast("location146=="+JSON.stringify(location));
                      if(this.firstTimeLoad)
                        {

                          // this.service.showToast2("First time load==");
                          this.loadMap(location.latitude,location.longitude);
                          this.firstTimeLoad=false;
                        }
                        else
                        {
                          // this.service.showToast2("repeat load==");
                          var latLng = new google.maps.LatLng(location.latitude,location.longitude);
                          if(this.directionsDisplay && this.directionsService && this.destinationLatLng)
                          {
                          
                            this.userMarker.setPosition(latLng);
                            this.latLng=latLng;
                            this.displayRoute(this.directionsDisplay,this.directionsService,latLng,this.destinationLatLng);
                          } 
                        } 
        })
          
        this.events.subscribe('destination:changed', destination => {
          this.destination.lat=destination.lat;
          this.destination.lng=destination.lng;

          if(this.destinationLatLng)
            {
              this.destinationLatLng=new google.maps.LatLng(this.destination.lat,this.destination.lng);
              this.marker2.setPosition(this.destinationLatLng);
              this.displayRoute(this.directionsDisplay,this.directionsService,this.latLng,this.destinationLatLng);
            }
          
        })
     
      }


      start()
      {
        this.locationTracker.startTracking();
      }

      stop()
      {
        this.locationTracker.stopTracking();
      }
      call()
      {
        this.callNumber.callNumber("9971672881", true)
        .then(() => console.log('Launched dialer!'))
        .catch(() => console.log('Error launching dialer'));
      }
      searchLocation()
      {
        let profileModal = this.modalCtrl.create(Places);
        profileModal.present();
      }


      loadMap(lat,lng)
      {

        this.user.lat=lat;
        this.user.lng=lng;
        this.latLng = new google.maps.LatLng(lat,lng);
        this.service.setUserLocation(this.user);
        let mapOptions = 
                {
                    center:this.latLng,
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
                }
                this.map = new google.maps.Map(this.mapElement.nativeElement, mapOptions);
                var marker = new google.maps.Marker({
                  map: this.map,
                  position:this.latLng,
                  icon:"assets/icon/user5.png"
                });
                  google.maps.event.addListener(marker, 'click', ()=> {
                    this.showAddress(marker,this.latLng,2);
                  });                  
                this.userMarker=marker;
                this.markers.push(marker);
                this.directionsDisplay = new google.maps.DirectionsRenderer({preserveViewport:true});
                this.directionsService = new google.maps.DirectionsService(); 
                this.directionsDisplay.setMap(this.map);
                this.directionsDisplay.setOptions( { suppressMarkers: true } );

                this.infoWindow=new google.maps.InfoWindow();
                if(this.firstTimeDestinationMarker)
                  {
                   setTimeout(() => {  
                     this.createMarker(this.directionsDisplay,this.directionsService);                
                    },500);
                    this.firstTimeDestinationMarker=false;
                  } 
      }

     
      createMarker(display,service) {
        this.destinationLatLng=new google.maps.LatLng(this.destination.lat,this.destination.lng);
        this.marker2 = new google.maps.Marker({
          map: this.map,
          position: {
            lat:this.destination.lat,
            lng:this.destination.lng
          },
        });
        google.maps.event.addListener(this.marker2, 'click', ()=> {
          this.showAddress(this.marker2,this.destinationLatLng,2);
        });


        
        this.markers.push(this.marker2);
        this.showAddress(this.marker2,this.destinationLatLng,null)
        this.bounds = new google.maps.LatLngBounds();  
        for(var i=0;i<this.markers.length;i++)
          {
            this.bounds.extend(this.markers[i].getPosition());
          }
        this.map.fitBounds(this.bounds); 
        display.setMap(this.map);
        this.displayRoute(display,service,this.latLng,this.destinationLatLng);
      }
      showAddress(marker,latlng,markerType)
      {
           
            //  //alert('x');


            this.ngZone.run(() => {
                var geocoder = new google.maps.Geocoder();
                //  var latLng=this.marker2;
                // var latLng=this.latLng;
                geocoder.geocode({'latLng':latlng},(results, status) => {
                    if (status == google.maps.GeocoderStatus.OK) {
                      if(results[0])
                        {
                          var address=results[0].formatted_address;
                          // var infowindow = new google.maps.InfoWindow();
                          this.user.destination=address;
                          
                          if(markerType=="user")
                          {
                            this.notify(address);
                          }
                          
                          if(markerType==1 || markerType==2)
                            {
                              this.infoWindow.setContent('<div><strong>'+address+'</strong><br>');
                              this.infoWindow.open(this.map,marker);
                            }

                            
                        }
                    }
                    else
                      {
                        // this.service.showToast("Failed to fetch address");
                      }
                }); 
        });
      }        
      displayRoute(directionDisplay,directionService,origin,destination) {
            var request = {
                origin : origin,
                destination : destination,
                travelMode : google.maps.TravelMode.DRIVING
            };
              directionService.route(request, (response,status) => {  
                      if (status == google.maps.DirectionsStatus.OK) 
                    {
                      this.user.distance=response.routes[0].legs[0].distance.text;
                      this.user.duration=response.routes[0].legs[0].duration.text;
                      directionDisplay.setDirections({routes: []});
                      directionDisplay.setDirections(response);
                    }   
              });
        }

        takePictureWithType(type)
      {
        const options: CameraOptions = {
            quality: 100,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            sourceType: type,
        }

        this.camera.getPicture(options).then((imageData) => {
        this.capturedImage=imageData;
        this.base64Image = 'data:image/jpeg;base64,' + imageData;
        }, (err) => {
        });
      }
      shareApp()
      {
        this.socialSharing.share().then(() => {
          // Sharing via email is possible
        }).catch(() => {
          // Sharing via email is not possible
        });

      }
      takePicture()
      { 
        // //alert("Calling");

        let actionSheet = this.actionCtrl.create({
          title: 'Select Image Source',
          buttons: [
            {
              text: 'Load from Library',
              handler: () => {
                this.takePictureWithType(this.camera.PictureSourceType.PHOTOLIBRARY);
              }
            },
            {
              text: 'Use Camera',
              handler: () => {
                this.takePictureWithType(this.camera.PictureSourceType.CAMERA);
              }
            },
            {
              text: 'Cancel',
              role: 'cancel'
            }
          ]
        });
        actionSheet.present();
      }

      notify(Address)
      {
        if(this.firstNotify)
          {
              this.localNotification.schedule({
              title: "Current Location",
              text: Address,
              // every:'minute',
              sound:'file://assets/sounds/bell.mp3'
            });
            this.firstNotify=false;
          }
        
      }
      sendNotification()
      {
        var notifyUrl="http://klaspring.staging.wpengine.com/push_api.php?token="+this.service.getToken();     


        //alert(notifyUrl);

          var timer = setTimeout(() => {
            this.http.get(notifyUrl,{headers: this.headers})
            // .map(val => val.json())
            .subscribe(data => 
              {
                //alert("Success::"+JSON.stringify(data));
                console.log(JSON.stringify(data))
              })
              err =>
              {
              //alert("Error"+err);
              }     
          }, 2000);
      }
}

@Component({
  selector: 'page-home',
  templateUrl: 'places.html'
})
export class Places {
 user:any={};
 myGroup:any; 
 destination:any={};
 constructor(params: NavParams,public viewCtrl:ViewController,public events:Events) {

  this.myGroup = new FormGroup({
                placeAutofill: new FormControl()
               });
  
    
  //  console.log('UserId', params.get('userId'));
 }
ionViewDidLoad()
{
 this.loadAutoComplete();
}

 loadAutoComplete()
 {
  
    var places= document.getElementById('googlePlaces').getElementsByTagName('input')[0];
    let autocomplete = new google.maps.places.Autocomplete(places, {types: ['geocode']});
    google.maps.event.addListener(autocomplete, 'place_changed', () => {
      // retrieve the place object for your use
      let place = autocomplete.getPlace();

      
      var location=place.geometry.location;


      console.log(location.lat());
      // //alert(JSON.stringify(place.geometry.location));
       this.destination={}; 
       this.destination.lat=location.lat();
       this.destination.lng=location.lng();
       this.events.publish('destination:changed',this.destination);
       this.closeModal();
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

 }
  closeModal()
 {
  this.viewCtrl.dismiss();
 }

}
