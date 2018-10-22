		//карусель
	/* 	
		
		$(document).ready(function () {
			$('.owl-carousel').owlCarousel({
				loop:true, //Зацикливаем слайдер
				margin:0, //Отступ от элемента справа в 50px
				nav:true, //Отключение навигации
				autoplay:true, //Автозапуск слайдера
				smartSpeed:1000, //Время движения слайда
				autoplayTimeout:80000,//Время смены слайда
				stagePadding:0,			
				responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
				
					600:{
						items:2
					},
					1000:{
						items:3
					},
					2500:{
						items:4
					}

				}
			});
		});
		
	 */
		
			
			
		$(document).ready(function () {
			$('.carousel1').owlCarousel({
				loop:true, //Зацикливаем слайдер
				margin:0, //Отступ от элемента справа в 50px
				nav:true, //Отключение навигации
				autoplay:true, //Автозапуск слайдера
				smartSpeed:1000, //Время движения слайда
				autoplayTimeout:80000,//Время смены слайда
				stagePadding:0,			
				responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
					0:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:3
					},
					2000:{
						items:4
					}

				}
			});
		
			var owl = $('.carousel1');
				owl.owlCarousel();
				// Go to the next item
				$('.js-owl-next').click(function() {
					owl.trigger('next.owl.carousel');
				})

				$('.js-owl-prev').click(function() {
					owl.trigger('prev.owl.carousel');
				})
				


				
					$('.coment-carousel').owlCarousel({
						loop:true, //Зацикливаем слайдер
						margin:0, //Отступ от элемента справа в 50px
						nav:true, //Отключение навигации
						autoplay:true, //Автозапуск слайдера
						smartSpeed:1000, //Время движения слайда
						autoplayTimeout:20000,//Время смены слайда
						stagePadding:0,			
						responsive:{ //Адаптивность. Кол-во выводимых элементов при определенной ширине.
							0:{
								items:1
							},
							600:{
								items:1
							},
							1000:{
								items:2
							},
							2500:{
								items:2
							}
						}
					});
			
					var owll = $('.coment-carousel');
					owll.owlCarousel();
					// Go to the next item
					$('.js-owl-next1').click(function() {
						owll.trigger('next.owl.carousel');
					})
	
					$('.js-owl-prev1').click(function() {
						owll.trigger('prev.owl.carousel');
					})
		

			
		});
		
				
			
			
				
	
		