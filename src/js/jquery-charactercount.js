/** 
 * Character counter
 *
 * Display maxlength, character counter, character remaining 
 * and words counter of and element
 * Customize: the pattern, the message and the rendered design (tag and class)
 */
(function( $ ){
	'use strict';
	
	$.fn.characterCount = function (options) {
		
		var opts = $.extend({}, $.fn.characterCount.defaults, options);

		return this.each(function (i, el) {

			$(el).after('<' + 
				opts.wrapTag + ' class="' + 
				opts.messageClass + '"></' + 
				opts.wrapTag + '>');
			$('.limit').css('text-align', 'right');
			
			updateCharCounter($(this), opts);
			
			$(el).keyup(function(){
				updateCharCounter($(this), opts);
			});			
			
		});
	};	
	function updateCharCounter($content, opts) {
    var tag = $content.prop("tagName"),
      formTag = ["input", "textarea"],
      checkTag = formTag.indexOf(tag.toLowerCase()),
      contentText;

    if( checkTag > -1 ) {
      contentText = $content.val();
    } else {
      contentText = $content.text();
    }

		var mapObj = {
				_nbLimit_ : parseInt($content.attr('maxlength'), 10),
				_nbCharCounter_ : contentText.length,
				_nbRemaining_ : (parseInt($content.attr('maxlength'), 10) - contentText.length),
				_nbWordCounter_ : contentText
					.replace(opts.customPattern,"x")
					.replace(/[^x]+/g,"")
					.length
			};

		var maxLength = parseInt($content.attr('maxlength'), 10),
			// $counter = $content.siblings('.limit');
			$counter = $content.next();
			if(!maxLength){
				if(opts.debug){
					console.log($content.context.type + 
					" has no maxlength attribute, " +
					" in " + $content.context.baseURI);
					console.log($content.context.outerHTML);
				}
			} else {
				
				
				$counter.text(opts.message.replace(
				/_nbLimit_|_nbCharCounter_|_nbRemaining_|_nbWordCounter_/gi, 
				function(matched){
				  return mapObj[matched];
				}));
				
			}
	}

	$.fn.characterCount.defaults = {
		message: 
		"limit: _nbLimit_ characters, remaining: _nbRemaining_ [ _nbCharCounter_ letters/_nbWordCounter_ words ]",
		messageClass: "limit",
		wrapTag: "p",
		customPattern: /\w+/g, 
		debug: false,
	}
	
}( jQuery ));