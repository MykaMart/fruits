const express = require("express");
const router = express.Router()  //.Router is a mehtod that lets us use controllers 

//express.Router links your controller to the server.js file
//adiditionalit going to allows  the code continaed int he controller
// and the otehr conteollers to see each other and run as if they were natively written on the 
// server.js file
//also allows paths to begin at where the route that pointed to the controller left off.

const fruits  = require("../models/fruits");

//In this case study of this controller the routes we specify correspond to what we are seindg to  diffent views
// the views we are rendering are varieable names corresing to their view file(ejs hbs etc)
// but they are just variable  names and other than how we mark them up and script them, 
//could be named anything.

router.get("/", (req, res) => {
	res.render("index", {						//render the view "index"
							fruit:fruits		//send this info to the index view so it can be used
												//fruit is a key wer're createing to hold the 
												//fruits model object we are pasing into it.
												//which is what comes after the colon.
						});			
})

router.get("/new", (req, res) => {
	res.render("new", {})						//render the view "new"
												//send sempty object to "new" view
})


// To write the show route for each individual fruit

router.get("/:index", (req, res) => {
	
	res.render("show", {fruit: fruits[req.params.index]})      //render the show view anc craete
															   // a key in which we pass the intem in tthe index
															   //specificed index of the fruits model obect

		
	})

//create new fruits					// the post creates an object


router.post("/create", (req, res) => {						//whats being sent from the form will be stored in the request req.body
	console.log(req.body)										//object with keys name, color, readyToEat sent to terminal
	
	if (req.body.readyToEat === "on") {			 //the .post method makes a poste request  to the specified routte
		req.body.readytoEat = true;			
	} else {								   	//post calls the psot method to make the post request	
		req.body.readytoEat = false;		//the key of readyToEat in the object is changed from on or off to true or false
	}										//and we're chaing it to be cosnistent with the data in the array

	fruits.push(req.body)					//fruits which we specified the path for above pushes the modified object in the request body
											//into the array
	res.redirect("/fruits")					//makes get request to /fruits to take us (in ths case to our fruits hompage)
})

module.exports = router;


