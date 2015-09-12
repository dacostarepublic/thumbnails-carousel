// thumbnails.carousel.js jQuery plugin
;(function(window, $, undefined) {
    $.fn.thumbnailsCarousel = function(options) {
        conf = $.extend(conf, options);
        var objContainer = $(this.selector).parent();
        var objthumbnailsLi = $(this.selector + ' li');
        var objControls = objContainer.find('.carousel-control');
       	objContainer.find('ol.carousel-indicators').addClass('indicators-fix');
       	objthumbnailsLi.first().addClass('active-thumbnail');
       	var conf = {
        	center: true,
        	backgroundControl: false
    	};

    	if(!conf.backgroundControl) {
            objContainer.find('.carousel-control').addClass('controls-background-reset');
        }
        else {
            objControls.height(cache.$carouselContainer.find('.carousel-inner').height());
        }

        if(conf.center) {
            objthumbnailsLi.wrapAll("<div class='center clearfix'></div>");
        }

        objContainer.on('slide.bs.carousel', function(e) {
            
            objthumbnailsLi.removeClass('active-thumbnail');
        	objthumbnailsLi.eq($(e.relatedTarget).index()).addClass('active-thumbnail');
        });

        objthumbnailsLi.click(function(){
            objContainer.carousel($(this).index());
        });
        return this;
    }

})(window, jQuery);

