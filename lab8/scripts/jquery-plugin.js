!function($) {
    var defaults = {
        'classes': 'my default classes',
        'text':    'Some default text'
    };

    $.fn.plugin = function(options) {
        options = $.extend(true, {}, defaults, options);

        return this.each(function() {
            $(this).addClass(options.classes).text(options.text);
        });
    }
}(jQuery);
