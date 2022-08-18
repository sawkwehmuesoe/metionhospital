$(document).ready(function(){

	// console.log("hi");


	// Start Info Section

	$(window).scroll(function(){

		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		if(getscrolltop >= 250){

			$(".infotexts").addClass("fromlefts");
			$(".infopics").addClass("fromrights");
		}else{
			$(".infotexts").removeClass("fromlefts");
			$(".infopics").removeClass("fromrights");
		}

	});

	// End Info Section

	// Start Adv Section

	$("#videos").click(function(){

		var getmodal = $(this).data("bs-target");
		var getvideosrc = $(this).data("video");
		var videourlwithauto = getvideosrc + "?autoplay=1";

		$(getmodal + " iframe").attr("src",videourlwithauto);

		$(getmodal + " button.btn-close").click(function(){

			$(getmodal + " iframe").attr("src",getvideosrc);

		});

		$(getmodal).click("hidden.bs.modal",function(){

			$(getmodal + " iframe").attr("src",getvideosrc);

		});

	});

	// End Adv Section

	// Start Premises Section

	$("#lightslider").lightSlider({
		// auto:true,
		item:4,
        loop:true,
        slideMove:1,
        speed:600,
	}).play();

	// End Premises Section

	// Start Pricing Section

	$(window).scroll(function(){
		let getscroll = $(this).scrollTop();
		// console.log(getscroll);

		if(getscroll >= 2600){
			$(".cardones").addClass("movelefts");
			$(".cardtwos").addClass("movebottoms");
			$(".cardthrees").addClass("moverights");
		}else{
			$(".cardones").removeClass("movelefts");
			$(".cardtwos").removeClass("movebottoms");
			$(".cardthrees").removeClass("moverights");
		}
	});

	// End Pricing Section

	// Start Join Us Section

	$("#accordion").accordion();

	// End Join Us Section

	// Start Footer Section

	$("#getyear").text(new Date().getUTCFullYear());

	// End Footer Section 

	// Start Progress

	$(window).scroll(function(){

		var getprogress = $("#progresses");
		var getprogressval = $("#progressvalues");
		var getscrolltop = $(this).scrollTop();
		// console.log(getscrolltop);

		var getscrollheight = $(document).height();
		// console.log(getscrollheight);
		var getclientheight = $(window).height();
		// console.log(getclientheight);

		var calcheight = getscrollheight - getclientheight;

		var getfinalheigth = Math.round(getscrolltop * 100 / calcheight);
		// console.log(getfinalheigth);

		getprogressval.text(`${getfinalheigth}%`);
		getprogress.css({
			"background" : `conic-gradient(steelblue ${getfinalheigth}%,#eee ${getfinalheigth}%)`
		});

	});

	// End Progress


})