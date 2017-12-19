import { Component,ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams,Content,TextInput } from 'ionic-angular';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';
import { SessionService } from '../../app/sessionservice';
import {Http, Response,RequestOptions,Headers} from '@angular/http';
import { Jsonp } from '@angular/http/src/http';
import {Events,ToastController } from 'ionic-angular';
/**
 * Generated class for the UserDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-user-detail',
  templateUrl: 'user-detail.html',
})






export class UserDetailPage {
  @ViewChild(Content) content: Content;
  @ViewChild('chat_input') messageInput: TextInput;
  messages: FirebaseListObservable<any[]>;
  messageInfo:any;
  loader:any;
  showEmojiPicker = false;
  user:any;

  messagesList=[];
  constructor(public events:Events,public http:Http,public navCtrl: NavController, public navParams: NavParams,public db:AngularFireDatabase,public service:SessionService) {
    this.messageInfo={};
    
  }


  ionViewWillEnter()
  {
    var user=this.service.getUser();
    if(!this.service.getUser())
    {
      var userInfo=
      {
        "address":"A-90 Harkesh Nagar",
        "deviceToken":"dpspB9vu7Po:APA91bF8eKYvKkeQ9b7yvuhIHLsZX_9iadStq79b82jPZm36S1cLIC_lQG2t_h-B1-0NOxhzULUqNkh7IZBHg9H_t4Syl6u1MLJtoAYZznqdIc-7zMuDOGR1bWl1dNPWq8i5LTBzbybj",
        "email":"hitesh@gmail.com","fileName":"Rahul.jpg","first_name":"Hitesh",
        "imageUrl":"https://firebasestorage.googleapis.com/v0/b/autorepair-1510293342488.appspot.com/o/images%2FRahul.jpg?alt=media&token=2a500652-188a-43dd-8abf-8175e6bcfa74",
        "key":"-L09Jwk1T5yYMQ-Zg2H4","login":true,"mobile":9971672881,"password":"123","token":"dcT5S39MeDY:APA91bG7Nb_tRk1H2H0e1Dia8Bzn8Lx5viBcxoPryyMeXrKXd31HEd6mh2pYpD-2VHyWyy3YLhGj-sL_blMlswjhA-VHHgwrepKLIauYiYIi17rFndZAXc-MRJEIWbUc3vi58JbirHZA"
      }
      this.service.setUser(userInfo);
      // this.service.getStoredData();
    }
  }  
  ionViewDidLoad() {
    setTimeout(()=>{
      var user=this.service.getUser();
      // alert("user info==="+JSON.stringify(user));
      this.messages=this.db.list('/messages');
      this.scrollToBottom();
      this.messageInfo.createTime=new Date();
      var senderEmail=this.service.getUser().email;
      var receiverEmail=this.service.getOtherUserInfo().email;
      this.messageInfo.senderEmail=senderEmail;
      this.messageInfo.receiverEmail=receiverEmail;
      this.messageInfo.email=senderEmail;
    },1000);
    
    
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
  }

  onFocus() {
    this.showEmojiPicker = false;
    this.content.resize();
    this.scrollToBottom();
  }


  isYou(message) {
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
    if(message.receiverId==this.service.getUser().key)
    {
      
      if(message.senderId==this.service.getOtherUserInfo().key)
      {
        return true;
      }
    }
  }
  isMe(message) {
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
    if(message.senderId==this.service.getUser().key)
    {
      if(this.service.getOtherUserInfo().key==message.receiverId)
      {
        return true;
      }
    }  
  }


  showMessage(message)
  {

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
    if(message.senderId==this.service.getUser().key)
    {
      if(this.service.getOtherUserInfo().key==message.receiverId)
      {
        return true;
      }
    }
    if(message.receiverId==this.service.getUser().key)
    {
      if(message.senderId==this.service.getOtherUserInfo().key)
      {
        return true;
      }  
    }
  }
  switchEmojiPicker() {
        this.showEmojiPicker = !this.showEmojiPicker;
        if (!this.showEmojiPicker) {
            this.messageInput.setFocus();
        }
        this.content.resize();
        this.scrollToBottom();
    }
  scrollToBottom() {
    setTimeout(() => {
        if (this.content.scrollToBottom) {
            this.content.scrollToBottom();
        }
    }, 400)
}

  sendMessage()
  {

    // alert(JSON.stringify(this.service.getOtherUserInfo()));
    this.loader=true;
    this.messageInfo.senderId=this.service.getUser().key;
    this.messageInfo.receiverId=this.service.getOtherUserInfo().key;
    this.db.list('/messages').push(this.messageInfo).then(resolve => {
        console.log('all good');
        // this.messages.remove(this.messageInfo);
        // this.loader=false;
        // this.messageInfo.pending=false;
        this.scrollToBottom();
        // this.sendNotification();
        // this.messageInfo.status="completed";
      }, reject => {
        console.log('error');
        this.loader=false;
        this.scrollToBottom();
        // this.messageInfo.status="failed";
      })
      this.messageInfo.editorMsg='';
  }

  sendNotification()
      {
        var notifyUrl="http://klaspring.staging.wpengine.com/push_api.php?token="+this.service.getToken()+"&senderEmail="+this.messageInfo.senderEmail+"&receiverEmail="+this.messageInfo.receiverEmail+"&message="+this.messageInfo.editorMsg;     
              this.http.get(notifyUrl)
              .subscribe(data => 
                {                  
                  console.log(JSON.stringify(data))
                })
                err =>
                {
                 this.service.showToast("Error while sending notification");
                }
      }
}
