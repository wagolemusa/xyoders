var express = require('express');
const Stripe = require('stripe')('sk_test_Mz7w7BhOTNmZ7945CA9LOihf');
// const stripe = Stripe('sk_test_Mz7w7BhOTNmZ7945CA9LOihf');
var app = express();

var createCustomer = function (){
    var param = {};
    param.email = "mike@gmail.com";
    param.name = "mike";
    param.description = "form node"

    Stripe.customers.create(param, function (err, customer){
        if(err){
            console.log("err: "+err);
        }if(customer){
            console.log("success: "+customer)
        }else{
            console.log("Samething wrong")
        }
    })
}
// createCustomer();

// Query customer
var retrieveCustomer = function(){
    Stripe.customers.retrieve(id="cus_JFkZC66yp5UU5y", function (err, customer){
        if(err){
            console.log("err: "+err);
        }if(customer){
            console.log("success: "+JSON.stringify(customer, null, 2 ))
        }else{
            console.log("Samething wrong")
        }
    })

}
// retrieveCustomer()

// Create customer token
var createToken = function(){
    var param = {};
    param.card = {
        number: '4242424242424242',
        exp_month: 4,
        exp_year: 2022,
        cvc: '314',
    }
    Stripe.tokens.create(param, function (err, token){
        if(err){
            console.log("err: "+err);
        }if(token){
            console.log("success: "+JSON.stringify(token, null, 2 ))
        }else{
            console.log("Samething wrong")
        }
    })
}
// createToken()

var addCardToCustomer = function() {
    Stripe.customers.createSource(id="cus_JFkZC66yp5UU5y", {source: 'tok_1IdV7QDtSmo7ipf1GhK4Q4dv'}, function (err, card){
        if(err){
            console.log("err: "+err);
        }if(card){
            console.log("success: "+JSON.stringify(card, null, 2 ))
        }else{
            console.log("Samething wrong")
        }
    })

}
// addCardToCustomer()

var chargeCustomerThroughCustomerID = function(){
    var param = {};
    param = {
        amount: '2000',
        currency: 'usd',
        description: "First payment",
        customer: 'cus_JFkZC66yp5UU5y'
    }
    Stripe.charges.create(param, function (err, charge){
        if(err){
            console.log("err: "+err);
        }if(charge){
            console.log("success: "+JSON.stringify(charge, null, 2 ))
        }else{
            console.log("Samething wrong")
        }
    })
}
// chargeCustomerThroughCustomerID()

var chargeCustomerThroughtoken = function(){
    var param = {};
    param = {
        amount: '2000',
        currency: 'usd',
        description: "First payment",
        source: 'tok_1IdWJGDtSmo7ipf1jiWSTz2g'
    }
    Stripe.charges.create(param, function (err, charge){
        if(err){
            console.log("err: "+err);
        }if(charge){
            console.log("success: "+JSON.stringify(charge, null, 2 ))
        }else{
            console.log("Samething wrong")
        }
    })
}
// chargeCustomerThroughtoken()

var getAllcustomers = function(){

    Stripe.customers.list(function (err, customers){
        if(err){
            console.log("err: "+err);
        }if(customers){
            console.log("success: "+JSON.stringify(customers, null, 2 ))
        }else{
            console.log("Samething wrong")
        }
    })
}
getAllcustomers()

app.listen(3000, function() {
    console.log("server running");
});