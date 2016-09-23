console.log('orders controller');

var mongoose = require('mongoose');
// var Customer = mongoose.model('Customer'); // this is optional, you're not touching anything regarding this.
// var Product = mongoose.model('Product');
// var Order = mongoose.model('Order');

function OrdersController() {

	// this.index = function(req,res){
    
	//     Order.find({}).sort({createdAt: -1}).exec(function(err, orders){
	//       if (err) {
	//         console.log("something went wrong");
	//       } else {
	//         console.log("successful");
	//         res.json(orders);
	//       }
	//     })

 //  	};

 //  	this.placeOrder = function(req,res) {

 //  		// Plan of action: get the product name, set that to variable, decrease quantity. i.e. Product.findOne({})
 //  		// Then add the order params to the orders collection.

	// 	var OneOrder = new Order({cust_name: req.body.cust_name, prod_name: req.body.prod_name, prod_qty: req.body.prod_qty})

	// 	OneOrder.save(function(err){
	// 		if(err) {
	// 			console.log(err);
	// 			console.log("something went wrong with the saving of order");
	// 		} else {
	// 			console.log("successful");
	// 		}
	// 	});

	// 	Product.update({name: req.body.prod_name}, {$inc: {qty: -req.body.prod_qty}}, function(err){
 //  			if (err) {
 //  				console.log("something went wrong");
 //  			} else {
 //  				console.log("successful");
 //  			}
 //  		});
 //  	}

}

module.exports = new OrdersController();