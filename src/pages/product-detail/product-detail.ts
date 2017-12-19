import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { SessionService } from '../../app/sessionservice';
import { AngularFireDatabase, FirebaseListObservable} from 'angularfire2/database-deprecated';

/**
 * Generated class for the ProductDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-product-detail',
  templateUrl: 'product-detail.html',
})
export class ProductDetailPage {
  productInfo:any;
  order:any={};
  loader:boolean=false;
  constructor(public db:AngularFireDatabase,public service:SessionService, public navCtrl: NavController, public navParams: NavParams) {
    this.productInfo=this.service.getProduct();
  }

  ionViewDidLoad() {

    var user=this.service.getUser();
    console.log('ionViewDidLoad ProductDetailPage');
    
  }



  orderProduct()
  {
    this.loader=true;
    this.order.orderDate=new Date();
    this.order.productId=this.productInfo.key;
    this.order.productName=this.productInfo.name;


    this.order.userName=this.service.getUser().first_name;
    this.order.userId="-L09Jwk1T5yYMQ-Zg2H4";
    this.order.status="P";
    this.db.list('/orders').push(this.order).then(({key}) =>{
      this.order.id=key;
      this.updateOrderInfo()
    },
    reject => {
        this.loader=false;  
        alert("Sorry failed to order product now please try again");

    })
  }
  updateOrderInfo()
  {
    this.db.object('/orders/'+this.order.id).update(this.order).then((profile: any) => {
      // return new Response('Profile has been saved successfully');
        console.log("Successfully updated location====");
        this.loader=false;

        this.navCtrl.pop();
      //  this.showToast("Successfully updated location====");
    })
    .catch((err: any) => {
        alert("Sorry failed to update order now !!!");
        // return new Response('Unable to save profile at this time, please try again later.');
        var error="error=="+err;
        this.loader=false;
        // this.showToast(error);
    });
  }

}
