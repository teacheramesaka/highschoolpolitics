//折り畳みボタンのjavascript
document.addEventListener("DOMContentLoaded", function() {
    var collapsibleButtons = document.querySelectorAll('.collapsible-button');
    
    collapsibleButtons.forEach(function(button) {
        button.classList.remove('active'); // 初期状態でactiveクラスを削除
        var content = button.nextElementSibling;
        content.style.display = "none"; // 初期状態で非表示
        
        button.addEventListener('click', function() {
            this.classList.toggle('active');
            if (content.style.display === "block") {
                content.style.display = "none";
            } else {
                content.style.display = "block";
            }
        });
    });
});