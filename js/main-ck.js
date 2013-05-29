// scroll away address bar
window.addEventListener("load", function() {
    setTimeout(function() {
        window.scrollTo(0, 1);
    }, 0);
});

$("#search-box").focus(function() {
    $("header").fadeOut;
});

$("#search-box").blur(function() {
    $(".search-prompt").show();
    $("header").show();
});