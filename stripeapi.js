const cors = require("cors")
const express = require("express")
require('dotenv').config()
// TODO: add a stripe key
// const stripe = require("stripe")("pk_test_51AXQQfDtSmo7ipf19YWOZ0Zm3Yq87hyb5w0KQcWiIDpJx6JmBkbe4iJZj5LNqL6acIEkjs2VIJgaoWlHsJtYUE1y0057oE5k6k")
const stripe = require("stripe")(process.env.STRIPE_SECRET_TEST)
const uuid = require("uuid/v4");
const bodyParser = require("body-parser")
const app  = express();


// middleware

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(express.json())
app.use(cors())


// routes
app.get("/", (req, res)=>{
    res.send("IT WORKS XYCODER")
})

app.post("/payment", (req, res) =>{
    const {product, token } = req.body;
    console.log("PRODUCT", product);
    // console.log("email", product.email)
    // console.log("PRICE", product.price);
    const idempontencyKey = uuid()

    return stripe.customers.create({
        email: token.email,
        source: token.id
    }).then(customer =>{
        stripe.changes.create({
            amount: product.price * 100,
            currency: 'usd',
            customer: customer.id,
            // receipt_email: token.email,
            description: `purchase of product.name`,
            shipping:{
                name: token.card.name,
                address: {
                    country: token.card.address_country
                }
            }
        }, {idempontencyKey})
    })
    .then(result => res.status(200).json(result))
    .catch(err => console.log(err))
})

app.post("/payments", cors(), async (req, res) => {
	let { amount, id } = req.body
	try {
		const payment = await stripe.paymentIntents.create({
			amount,
			currency: "USD",
			description: "Spatula company",
			payment_method: id,
			confirm: true
		})
		console.log("Payment", payment)
		res.json({
			message: "Payment successful",
			success: true
		})
	} catch (error) {
		console.log("Error", error)
		res.json({
			message: "Payment failed",
			success: false
		})
	}
})

// listen
app.listen(8282, () => console.log("LISTENING AT PORT 8282"))