function loadDetails(btn){
	if(btn == "btn1"){
		document.getElementById("img1").src="images/s350.jpg";
		document.getElementById("para1").innerHTML="<h4>Mercedes Benz S350</h4><ul>Model Year:2016</ul><ul>Leather interior,A/C,CD/DVD player,</ul><ul>Power steering,Lane depature warning system,Luxury seats,Rear seat TV</ul>";
		document.getElementById("img2").src="images/520d.jpg";
		document.getElementById("para2").innerHTML="<h4>BMW 520D</h4><ul>Model Year:2013</ul><ul>Fabric interior,A/C,CD/DVD player,</ul><ul>Power steering,Comfortble seats,Rear seat TV</ul>";
		document.getElementById("img3").src="images/premio.jpg";
		document.getElementById("para3").innerHTML="<h4>Toyota Premio</h4><ul>Model Year:2017</ul><ul>Fabric beige interior,A/C,CD/DVD player,</ul><ul>Power steering,Comfortble seats</ul>";
	}
	else if(btn == "btn2"){
		document.getElementById("img1").src="images/axio.jpg";
		document.getElementById("para1").innerHTML="<h4>Toyota Axio 161</h4><ul>Model Year:2014</ul><ul>A/C,CD player,Power steering,Auto</ul>";
		document.getElementById("img2").src="images/axio141.jpg";
		document.getElementById("para2").innerHTML="<h4>Toyota Axio 141</h4><ul>Model Year:2010</ul><ul>A/C,CD player,Power steering,Auto</ul>";
		document.getElementById("img3").src="images/allion.jpg";
		document.getElementById("para3").innerHTML="<h4>Toyota Allion</h4><ul>Model Year:2009</ul><ul>A/C,CD player,Power steering,Auto,</ul><ul>Leather seats</ul>";
	}
	else if(btn == "btn3"){
		document.getElementById("img1").src="images/vitz.jpg";
		document.getElementById("para1").innerHTML="<h4>Toyota Vitz</h4><ul>Model Year:2018</ul><ul>A/C,CD player,Auto</ul>";
		document.getElementById("img2").src="images/yaris.jpg";
		document.getElementById("para2").innerHTML="<h4>Toyota Yaris</h4><ul>Model Year:2009</ul><ul>A/C,CD player,Manual</ul>";
		document.getElementById("img3").src="";
		document.getElementById("para3").innerHTML="";
	}
	else if(btn == "btn4"){
		document.getElementById("img1").src="images/hiace.jpg";
		document.getElementById("para1").innerHTML="<h4>Toyota Hiace</h4><ul>Model Year:2015</ul><ul>Dual A/C,CD player,Power steering,Auto,</ul><ul>Driver+14 seats";
		document.getElementById("img2").src="images/caravan.jpg";
		document.getElementById("para2").innerHTML="<h4>Nissan Urvan</h4><ul>Model Year:2008</ul><ul>Dual A/C,CD player,Manual,</ul><ul>Driver+9 seats";
		document.getElementById("para3").innerHTML="";
	}
	else if(btn == "btn5"){
		document.getElementById("img1").src="images/coaster.jpg";
		document.getElementById("para1").innerHTML="<h4>Toyota Coaster</h4><ul>Model Year:2017</ul><ul>Dual A/C,TV,Manual,</ul><ul>Large luggage holder,Driver+30 seats</ul>";
		document.getElementById("img2").src="images/coaster2.jpg";
		document.getElementById("para2").innerHTML="<h4>Toyota Coaster</h4><ul>Model Year:2017</ul><ul>Duak A/C,Manual,</ul><ul>Large luggage holder,Driver+28 seats</ul>";
		document.getElementById("para3").innerHTML="";
	}
	else{
		alert("Invalid");
	}
}