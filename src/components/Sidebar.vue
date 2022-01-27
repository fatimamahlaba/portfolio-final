<template>
  <div>

	<div class="nav">
		<!-- Checkbox to toggle the menu -->
		<input type="checkbox" id="tm" />
		<!-- The menu -->
		<div class="sidenav">
<router-link :to="{name: 'Home'}" action><span class="icon fa-check"></span>Home</router-link>
<router-link :to="{name: 'About'}"><span class="icon fa-inbox"></span>About</router-link>
<router-link :to="{name: 'Portfolio'}"><span class="icon fa-pencil"></span>Portfolio</router-link>
<router-link :to="{name: 'Testimonials'}"><span class="icon fa-cog"></span>Testimonials</router-link>
<router-link :to="{name: 'Contact'}"><span class="icon fa-star"></span>Contact</router-link>	
	
      </div>

		<!-- Content area -->
		<section>
			<!-- Label for #tm checkbox -->
			<label for="tm">Click Me</label>
		</section>
	</div>
</div>
</template>

<script>
export default {

}
</script>

<style>
/*Fontawesome Iconfont*/
@import url(https://maxcdn.bootstrapcdn.com/font-awesome/4.5.0/css/font-awesome.min.css);
/*Montserrat, Open Sans*/
@import url(https://fonts.googleapis.com/css?family=Montserrat|Open+Sans:400,300);

* {
    margin: 0;
    padding: 0;
}
body 
{
    background: #333;
}

.nav {
	float: left;
    position: relative;
	/* box-shadow: 0 0 25px 0 rgba(0, 0, 0, 0.5); */
	/* overflow: hidden; */
}
/*Hiding the checkbox*/
#tm {display: none;}
/*picture animation*/
.nav section {
	background: url("http://thecodeplayer.com/uploads/media/mb1.png");
	width: 1000px; height: 1000px;
	position: relative; transition: all 0.25s;
}
/* click me */
.nav section label {
	color: white; 
    font: bold 14px; 
    text-align: center;
	border: 2px solid white; 
    border-radius: 4px;
	display: block; 
    padding: 10px 0;
	width: 60%; 
    position: absolute; left: 20%; top: 100px;
	cursor: pointer; 
    text-transform: uppercase;
}
/*Nav styles*/
.sidenav {
	/* background: rgb(50, 60, 60); width: 150px; */
	/* position: absolute; left: 0; top: 0; bottom: 0; padding-top: 100px; */
    list-style-type: none;
    color: white; text-decoration: none;
	font: bold 12px/48px Montserrat; display: block;
	opacity: 0; transform: translateX(50px); transition: all 0.4s;
	display: block; width: 50px; float: left; 
	font-size: 16px; line-height: 48px; text-align: center;
}
/*Animation controls using checkbox hack*/
/*Animate content area to the right*/
#tm:checked ~ section {transform: translateX(150px);}
/*Animate links from right to left + fade in effect*/
#tm:checked ~ .sidenav b {opacity: 1; transform: translateX(0);}

/*Adding delay to link animation - in multiples of .08s*/
/*One can use jQuery also for creating the delayed effect. But I will stick to manual CSS for this walkthrough.*/
#tm:checked ~ .sidenav li:nth-child(1) b {transition-delay: 0.08s;}
#tm:checked ~ .sidenav li:nth-child(2) b {transition-delay: 0.16s;}
#tm:checked ~ .sidenav li:nth-child(3) b {transition-delay: 0.24s;}
#tm:checked ~ .sidenav li:nth-child(4) b {transition-delay: 0.32s;}
#tm:checked ~ .sidenav li:nth-child(5) b {transition-delay: 0.40s;}
#tm:checked ~ .sidenav li:nth-child(6) b {transition-delay: 0.48s;}

</style>