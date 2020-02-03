var customThis;

(function ($) {
    $.fn.hasScrollBar = function () {
        $(this).each((i, ele) => {
            if (ele.scrollHeight > ele.clientHeight) {
                console.log(ele.scrollHeight, ele.clientHeight);
            }
        });
        // return this.get(0).scrollHeight > this.height();
    }
})(jQuery);