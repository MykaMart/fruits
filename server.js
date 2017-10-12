const express = require("express");
const app = express();
const bodyParser = require("body-parser"); //makes the request body readable


app.listen(4000, ()=> {}


//require our controllers

const fruitController = require ("./controllers/fruits")
//when we call the fruits controller in inclides the router module
// which returns what is in express.Router() so that the router mehtods we used will work
//anywher in our server


// tell express where our view is
app.set("view engine", "ejs");			//choose view engine
app.set("views", __dirname + "/views"); //set views directory


app.use(bodyParser.urlencoded({extended: false}))		//used to parse the body of the request so that we can read req.bod


app.use(express.static("public"))			//for static files lookin public folder


//use our controllers after body parser and static
//every route in the frutiController starts with /fruits now
//so the first route in the controller is /fruits/fruits
app.use("/fruits", fruitController)

// /fruits contains subroutes that can only be accessed by starteing with /fruits
// those subroute routes and the  instructions and methods that can contsined in them, 
	//are appended calling the fruitController


///body is information sent from the client like in networking