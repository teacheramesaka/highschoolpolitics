//折り畳みボタンのjavascript
var $j = jQuery.noConflict();

$j(document).ready(function() {
    var collapsibleButtons = $j('.collapsible-button');
    
    collapsibleButtons.each(function() {
        var button = $j(this);
        var content = button.next('.collapsible-content');
        content.hide(); // 初期状態で非表示
        
        button.on('click', function() {
            button.toggleClass('active');
            content.slideToggle();
        });
    });
});