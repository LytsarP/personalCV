var $win = $(window);
var $marker = $('#anim_line-first, #anim_line-second, #anim_line-last');
$win.scroll(function() {
    if ($win.scrollTop() + $win.height() >= $marker.offset().top) {
        $win.unbind('scroll');
        $marker.addClass('line-bg slideRight');
    }
});