import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { UserDetailPage} from '../user-detail/user-detail';
import { SessionService } from '../../app/sessionservice';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { AngularFireAuthModule, AngularFireAuth } from 'angularfire2/auth';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: FirebaseListObservable<any[]>;
  userInfo:any;

  loader:boolean=true;
  constructor(public db:AngularFireDatabase,public navCtrl: NavController, public navParams: NavParams,public service:SessionService) {
   
  
  }

  getUsers(){
    return this.db.list('/user_detail');
  }  
  ionViewDidLoad() {
    var orderBy;
    this.users=this.getUsers();
    this.loader=false;

    this.userInfo=(this.service.getUser().email);
    var filter;


  //  this.getUsers().subscribe(users=>{
  //     filter=users;

  //     alert("fetsfsdfsdf");
  //  },error=>{
  //    alert("sdfsdfsdfsdf");
  //  }) 
    
    
} 

  userDetail(userInfo)
  {
    this.service.setOtherUserInfo(userInfo);
    this.navCtrl.push(UserDetailPage);
  }

}
