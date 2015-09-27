/*!
 * Start Bootstrap - Agency Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */
$( document ).ready(function() {
  // Handler for .ready() called.

  	// $(".menu1").click(function(){
   //    // $('.ganti').fadeOut(500, function() {
   //    //    $(this).empty().show();
   //    // });
   //    $('.ganti').hide().html('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Sedang Proses...</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row "><!-- loading --><div class="loader"><h1 style="color:white">Tunggu Sebentar Yaa...</h1><bR><span></span><span></span><span></span></div></div>').fadeIn(1000);
   //    // $(".ganti").append('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Sedang Proses...</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row "><!-- loading --><div class="loader"><h1 style="color:white">Tunggu Sebentar Yaa...</h1><bR><span></span><span></span><span></span></div></div>');
  	// 	// $(".menu0").fadeOut();
  	// 	// $(".loader2").fadeIn("slow");
  	// 	setTimeout(keluar, 3000);
   //    $(".insert").click();
  		
  	// });

    $(".ganti").on("click", "button.menu1", function(){
       // $('.ganti').fadeOut(500, function() {
      //    $(this).empty().show();
      // });
      $('.ganti').hide().html('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Sedang Proses...</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row "><!-- loading --><div class="loader"><h1 style="color:white">Tunggu Sebentar Yaa...</h1><bR><span></span><span></span><span></span></div></div>').fadeIn(1000);
      // $(".ganti").append('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">Sedang Proses...</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row "><!-- loading --><div class="loader"><h1 style="color:white">Tunggu Sebentar Yaa...</h1><bR><span></span><span></span><span></span></div></div>');
      // $(".menu0").fadeOut();
      // $(".loader2").fadeIn("slow");
      setTimeout(keluar, 3000);
      $(".insert").click();
    });

  	function keluar(){
  		// $(".ganti").empty();
      $('.ganti').hide().html('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">INSERT DATA</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-lg-12"><div class="row"><div class="col-md-6"><div class="form-group"><input type="text" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name."><p class="help-block text-danger"></p></div><div class="form-group"><input type="email" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address."><p class="help-block text-danger"></p></div><div class="form-group"><input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number."><p class="help-block text-danger"></p></div></div><div class="col-md-6"><div class="form-group"><textarea class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea><p class="help-block text-danger"></p></div></div><div class="clearfix"></div><div class="col-lg-12 text-center"><div id="success"></div><button type="submit" class="btn btn-xl menucek">CEK BIAYA</button></div></div></div></div>').fadeIn(1000);
  		// $(".insert_info").fadeIn("slow"); 
  		
  	}

    $(".ganti").on("click", "button.menucek", function(){
        // alert('yes');
      // $(".insert_info").fadeOut();
      // $(".view_bayar").fadeIn("slow");
      $('.ganti').hide().html('<div class="row"><div class="col-lg-12 text-center"><h2 class="section-heading">BILL</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-lg-12"><div class="row"><div class="col-md-6"><div class="form-group"><input type="text" class="form-control" placeholder="Your Name *" id="name" required data-validation-required-message="Please enter your name."><p class="help-block text-danger"></p></div><div class="form-group"><input type="email" class="form-control" placeholder="Your Email *" id="email" required data-validation-required-message="Please enter your email address."><p class="help-block text-danger"></p></div><div class="form-group"><input type="tel" class="form-control" placeholder="Your Phone *" id="phone" required data-validation-required-message="Please enter your phone number."><p class="help-block text-danger"></p></div></div><div class="col-md-6"><div class="form-group"><textarea class="form-control" placeholder="Your Message *" id="message" required data-validation-required-message="Please enter a message."></textarea><p class="help-block text-danger"></p></div></div><div class="clearfix"></div><div class="col-lg-12 text-center"><div id="success"></div><button type="submit" class="btn btn-xl selesai">SELESAI</button></div></div></div></div>').fadeIn(1000);
      $(".bayar").click();
    });

    $(".ganti").on("click", "button.selesai", function(){
        // alert('yes');
      // $(".insert_info").fadeOut();
      // $(".view_bayar").fadeIn("slow");
      $('.ganti').hide().html('<div class="col-lg-12 text-center"><h2 class="section-heading">TARUH BARANG ANDA DIATAS ALAT</h2><h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3></div></div><div class="row"><div class="col-lg-12"><div class="row"><div class="col-md-6"><div class="form-group"><input type="text" class="form-control" placeholder="Your Name *" id="name" ><p class="help-block text-danger"></p></div><div class="form-group"><input type="email" class="form-control" placeholder="Your Email *" id="email" ><p class="help-block text-danger"></p></div><div class="form-group"><input type="tel" class="form-control" placeholder="Your Phone *" id="phone" ><p class="help-block text-danger"></p></div></div><div class="col-md-6"><div class="form-group"><textarea class="form-control" placeholder="Your Message *" id="message" ></textarea><p class="help-block text-danger"></p></div></div><div class="clearfix"></div><div class="col-lg-12 text-center"><div id="success"></div><button type="submit" class="btn btn-xl menu1">OKE</button></div></div></div></div>').fadeIn(1000);
      $(".turun").click();
    });



// jQuery for page scrolling feature - requires jQuery Easing plugin
	$(function() {
	    $('a.page-scroll').bind('click', function(event) {
	        var $anchor = $(this);
	        $('html, body').stop().animate({
	            scrollTop: $($anchor.attr('href')).offset().top
	        }, 1500, 'easeInOutExpo');
	        event.preventDefault();
	    });
	});

	// Highlight the top nav as scrolling occurs
	$('body').scrollspy({
	    target: '.navbar-fixed-top'
	})

	// Closes the Responsive Menu on Menu Item Click
	$('.navbar-collapse ul li a').click(function() {
	    $('.navbar-toggle:visible').click();
	});
});