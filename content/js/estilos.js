$(function(){

	var	header = document.getElementById('header');
	var headroom = new Headroom(header);
	headroom.init();


	//menu reponsive

	var	ancho = $(window).width(),
		enlaces = $('#enlaces'),
		btnMenu = $('#btn-menu'),
		icono = $('#btn-menu .icono');

		if (ancho < 700) {
			enlaces.hide();
			icono.addClass('fa-bars');
		}

		btnMenu.on('click', function(e){
			enlaces.slideToggle();
			icono.ToggleClass('fa-bars');
			icono.ToggleClass('fa-times');
		});


		$(window).on('resize', function(){
			if ($(this).width() > 700){
				enlaces.show();
				icono.addClass('fa-times');
				icono.removeClass('fa-bars');
			}else{
				enlaces.hide();
				icono.addClass('fa-bars');
				icono.removeClass('fa-times');
			}
		});


});

//imagenes zoom


$(".imagen").click(function(e){
	var enlaceImagen = e.target.src;
	var data = $(this).attr("data");
	console.log(data);
	var lichbox = '<div class="lichbox">' +
					'<img  src="'+enlaceImagen+'" alt="" id="zoom_mw" data-zoom-image="'+data+'">' +
					'</div>';

	$("body").append(lichbox)
	$("#zoom_mw").elevateZoom({
		scrollZoom : true,
		cursor: "crosshair",
		zoomWindowOffetx: 15
	});
	$(".lichbox").click(function(){
		$(".lichbox").remove();
	})
})


//slider var

$(function () {

	var page = (function () {

		var $navArrows = $('#nav-arrows').hide(),
		$shadon = $('#shadon').hide(),
		slicebox = $('#sb-slider').slicebox({
			onReady: function () {

				$navArrows.show();
				$shadon.show();

			},

			orientation: 'r',
			cuboidRandom: true,
			disperseFactor: 30

		}),

		init = function () {

			initEvents();

		},

		initEvents = function () {

			$navArrows.children(':first').on('click', function(){


					slicebox.next();
					return false;
			});

		}

	})

})