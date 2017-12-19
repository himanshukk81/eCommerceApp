var express = require('express');
var app = express();
var http=require('http');
var cors = require('cors');
var vhost=require('vhost');
var bodyParser = require('body-parser');
var utility = require('./utility');
var WooCommerceAPI = require('woocommerce-api');
app.set('view engine', 'ejs');

var admin = express();
admin.use(express.static(__dirname + '/public/admin'));
app.use(vhost('admin.hidigify.com', admin));
app.use(vhost('www.admin.hidigify.com', admin));

var myApp = express();
myApp.use(express.static(__dirname + '/public/app'));
// app.use(vhost('app.hashtagit.in', myApp));
// app.use(vhost('www.app.hashtagit.in', myApp));

app.use(vhost('app.hidigify.com', myApp));
app.use(vhost('www.app.hidigify.com', myApp));


// var api = express();
// api.use('/',require('./controllers'));
// app.use(vhost('api.hidigify.com', api));
// app.use(vhost('www.api.hidigify.com', api));
//Hello 


app.use(express.static(__dirname + '/public'));
app.get('/', function(req, res) {
    res.render('pages/index');
});
// app.get('/hashadmin', function(req, res) {
//     res.render('/admin/index');
// });
// app.get('/hashapp', function(req, res) {
//     res.render('/app/index');
// });
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({
 extended: true
}));
app.use(cors());
app.use('/api',require('./controllers'))

var admin = require("firebase-admin");
var serviceAccount = require("./service.json"); //this is the service account details generated from server
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});


app.post('/sendNotification',function(req,res)
{

	var message=req.body.message;
	var deviceToken=req.body.deviceToken;
	var senderEmail=req.body.senderEmail;

	// var registrationToken = "e-NTNyrpFFE:APA91bEsfqk1BZBD-CLynlouAvybU9Jnli8tRyoNdDvxTTq1EYeXzwm8b8U7WPmgu87_ptTmaC4kG0KrVTzNKKO9rEhDTgm2fSVB1GUAq_czGzDOXISkW0YMyRKaKVX9OMW1Z94THhfj"; //registration token of the device
	var payload ={
		"notification":{
		    "title":"title",
		    "body":"message",
		    "sound":"default",
		    "click_action":"FCM_PLUGIN_ACTIVITY"
		  },
	    "data": {
	        "title": 'New Message',
	        "message":message,
	        "senderEmail":senderEmail,
	        "content-available": '1' //FOR CALLING ON NOTIFACATION FUNCTION EVEN IF THE APP IS IN BACKGROUND
	    }
	};

	//send the notification or message
	admin.messaging().sendToDevice(deviceToken, payload)
	.then(function(response) {
	    console.log("Successfully sent message:", response);

	    // client.end();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify("Success"));
        res.end();
	})
	.catch(function(error) {
	    console.log("Error sending message:", error);
	    // client.end();
        res.writeHead(200, {'Content-Type': 'application/json'});
        res.write(JSON.stringify("Failed"));
        res.end();
	});
})

app.get('/hidigify',function(req,res)
{

	var object={};
	var deviceToken="dgt0EaBRHrY:APA91bGyF-lzEA9VZ1WEeZ-0NMVimndVGjDj73BRNHbjplK3ilyINS6F8vBEFN4GvP8GcVJSTg8Ry2zKuNy3oTf_bJ3X73wupHWyG61nwBCKHcSofi1wo54nuk2NYN3sxPgWze3Tf-TZ"
	object.deviceData=[];
	object.deviceData.push({"deviceToken":deviceToken,"notificationType":"gcm"});
	object.title="SM Creative added";
	object.message="New SM Post creative (hello)  added for your approval";
	utility.sendNotification(object);
	res.end();
})

app.get('/coupons',function(req,res)

{
	var WooCommerce = new WooCommerceAPI({
	  url: 'http://ecommerceapp.onlinewebshop.net', // Your store URL
	  consumerKey: 'ck_7525687356c29e539b2b44f0f774ea00bd62d1cc', // Your consumer key
	  consumerSecret:'cs_738d3244eaa72c90d6381fb8082baa90149247e1', // Your consumer secret
	  wpAPI: true, // Enable the WP REST API integration
	  version: 'wc/v2' // WooCommerce WP REST API version
	});

	var data = {
	  code: '10off',
	  discount_type: 'percent',
	  amount: '10',
	  individual_use: true,
	  exclude_sale_items: true,
	  minimum_amount: '100.00'
	};

	WooCommerce.post('coupons', data, function(err, data, res) {
	  console.log(res);
	});
});

app.set('port', 3000);
http.createServer(app).listen(app.get('port'), function(){
console.log('Express server listening on port ' + app.get('port')+'dasda');
});