$(function(){

	function initSlider(){
		var $sliderItem = $(".slider-item"),
			$sliderWrapper = $(".slider-wrapper"),
			$sliderViewport = $(".slider-viewport"),
			$prev = $(".btn-prev"),
			$next = $(".btn-next"),
			$pager = $("<div class='pager'></div>"),
			$pagerLine = $("<div class='pager-line'></div>"),
			$pagerItem,
			$pagerItemNum,
			$sliderTextTitle = $(".slider-text-title"),
			currentSlide = 1,
			currentPager,
			sliderPosition = 0,
			sliderQty = $sliderItem.length,
			sliderItemWidth = $sliderItem.width(),
			sliderWrapperWidth = $sliderWrapper.width(sliderItemWidth * sliderQty),
			colorArray = ["#2870c4", "#4bc9e5", "#47b616", "#ff7d00", "#e330a6", "#2870c4"];


			createPager();
			movePager();
			$next.on("click", moveNext);
			$prev.on("click", movePrev);


			function createPager(){
				$pager.prependTo($sliderViewport);
				$pagerLine.prependTo($pager);
				for(var i = 0; i < sliderQty; i++){
					$pager.append("<span class='pager-item'><span class='pager-item-bg'><span class='pager-item-num'>" + currentSlide++ + "</span></span></span> ");
				}
				$pagerItem = $(".pager-item");
				$pagerItemNum = $(".pager-item-num");
				currentSlide = 1;
				$pagerItemNum.eq(currentSlide - 1).addClass("pager-active");
			}

			function moveNext(){
				if(currentSlide === sliderQty) return;
				currentSlide++;
				$sliderWrapper.css("left", sliderPosition - sliderItemWidth * (currentSlide - 1))
				clearPager();
				movePager();
				console.log("current slide " + currentSlide);
			}
			function movePrev(){
				if(currentSlide === 1) return;
				currentSlide--;
				$sliderWrapper.css("left", sliderPosition - sliderItemWidth * (currentSlide - 1));
				clearPager();
				movePager();
				console.log("current slide " + currentSlide);
			}

			function clearPager(){
				$pagerItemNum.css("backgroundColor", "").removeClass("pager-active");
			}
			function movePager(){
				$pagerItemNum.eq(currentSlide - 1).css("backgroundColor", colorArray[currentSlide - 1]).addClass("pager-active");
				$sliderTextTitle.css("color", colorArray[currentSlide - 1]);
			} 

			$pagerItem.on("click", function(){
				var currentPager = + $(this).index();
				$sliderWrapper.css("left", sliderPosition - sliderItemWidth * (currentPager - 1));
				currentSlide = currentPager;
				clearPager();
				movePager();

				console.log("current PAGER " + currentPager);
			});



		console.log("current slide " + currentSlide);
		console.log(sliderQty);
	}

	initSlider();

});
