import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { Places } from '../pages/home/home';

import { ListPage } from '../pages/list/list';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {Http, Response} from '@angular/http';
import { HttpModule }    from '@angular/http';
import { Facebook, FacebookLoginResponse } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { CallNumber } from '@ionic-native/call-number';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FCM } from '@ionic-native/fcm';
import { SessionService } from './sessionservice';
import { SocialSharing } from '@ionic-native/social-sharing';
import { LoginPage } from '../pages/Login/Login';
import { RegisterUser } from '../pages/Login/Login';



import { NativeStorage } from '@ionic-native/native-storage';
import { profile } from '../pages/profile/profile';
import { Diagnostic } from '@ionic-native/diagnostic';
import { Geolocation } from '@ionic-native/geolocation';
import { LocationAccuracy } from '@ionic-native/location-accuracy';
import { Network } from '@ionic-native/network';
import { Flashlight } from '@ionic-native/flashlight';
import { LocalNotifications } from '@ionic-native/local-notifications';
import { Toast } from '@ionic-native/toast';
import { AngularFireDatabase, FirebaseListObservable,AngularFireDatabaseModule} from 'angularfire2/database-deprecated';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../environments/environment';
import { LocationTrackerProvider } from '../providers/location-tracker';
import { BackgroundGeolocation } from '@ionic-native/background-geolocation';
import { UserDetailPage} from '../pages/user-detail/user-detail';
import { UsersPage} from '../pages/users/users';
import { EmojiProvider} from '../providers/emoji';
import {EmojiPickerComponentModule} from "../components/emoji-picker/emoji-picker.module";
import { ProductsPage} from '../pages/products/products';
import { ProductDetailPage} from '../pages/product-detail/product-detail';

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
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    profile,
    Places,
    RegisterUser,
    UserDetailPage,
    UsersPage,
    ProductsPage,
    ProductDetailPage
  ],
  imports: [
    EmojiPickerComponentModule,
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    LoginPage,
    profile,
    Places,
    RegisterUser,
    UserDetailPage,
    UsersPage,
    ProductsPage,
    ProductDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Facebook,
    GooglePlus,
    CallNumber,
    Camera,
    FCM,
    SessionService,
    SocialSharing,
    NativeStorage,
    Diagnostic,
    Geolocation,
    LocationAccuracy,
    Network,
    Flashlight,
    LocalNotifications,
    Toast,
    AngularFireDatabase,
    LocationTrackerProvider,
    BackgroundGeolocation,
    EmojiProvider,
    // GoogleMap,
    // GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
