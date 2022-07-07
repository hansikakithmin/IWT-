function loadDetails(btn){
	if(btn == "btn1"){
		document.getElementById("para2").innerHTML="<h3>Weddings and Events</h3><ul><li>Include large fleet of luxury cars</li><li>Include driver for the car</li><li>Vehicle decorations are provided by us</li><li>Special discounts for wedding hires</li></ul>";
	}
	else if(btn == "btn2"){
		document.getElementById("para2").innerHTML="<h3>Self Drive</h3><ul><li>Include wide range of cars to choose</li><li>All the vehicles are equipped with luxury seats and A/C</li><li>We can offer optional equipments such as baby seats,road maps</li></ul>"
	}
	else if(btn == "btn3"){
		document.getElementById("para2").innerHTML="<h3>Renting Vehicles Including Drivers</h3><ul><li>Include experienced driver</li><li>Include wide range of cars to choose</li><li>All the vehicles are equipped with luxury seats and A/C</li><li>We can offer optional equipments such as baby seats,road maps</li></ul>"
	}
	else if(btn == "btn4"){
		document.getElementById("para2").innerHTML="<h3>Airport/City Transfer</h3><ul><li>Best rates guranteed</li><li>We offer the vehicle with a experienced driver</li><li>Include CMB-Colombo transfer and beyond</li><li>We offer best rates for city transfer</li></ul>"
	}
	else if(btn == "btn5"){
		document.getElementById("para2").innerHTML="<h3>Road Side Assistance</h3><ul><li>We offer 24*7 roadside assistance service island wide</li></ul>"
	}
}
