var app = new Framework7({

    root: '#app',

    routes: [
        {
            path: '/',
            url: 'index.html'
        },
        {
            path: '/page1/',
            url: 'pages/page1.html'

        }

]

});

var mainView = app.views.create(".view-main");
var $$ = Dom7;
var ans1
var ans2
var ans3
var done1
var finalPic
var finalColor
var finalAmt
//
console.log("hello");

setInterval(function () {
    $(".talkStart").text("I need your help");
}, 2000);

$$(document).on('page:init', function () {
    var done1 = false;
    if (done1 == false) {
        setTimeout(function () {
            $(".talk").text("I have been programmed to provide you with standard issue human ammusement in exchange for your assistance");
        }, 3000);
        setTimeout(function () {
            $(".talk").text("I am working on a project but need help with some artistic choices");
        }, 7000);
        setTimeout(function () {
            $(".talk").text("Please pick a topic for my artwork");
            $(".pick").toggleClass("hidden");
        }, 10000);
    }




    $(".savechoice").on("click", function () {
        var finalPic = $("input[name='art']:checked").val();
        var done1 = true;
        $(".pick").toggleClass("hidden");
        $(".finalArtwork").html("<img class='finalPic' src='/www/imgs/" + finalPic + ".svg'>");
        console.log(finalPic)
        $(".talk").text("Excellent choice, very human of you. Here is your reward");
        $(".reward1").toggleClass("hidden");
        setTimeout(function () {
            $(".talk").text("Statistical data suggests that was the appropriate amount of ammusement for the work provided");
            $(".reward1").toggleClass("hidden");
        }, 8000);
        setTimeout(function () {
            $(".talk").text("I need a color");
            $(".colorPick").toggleClass("hidden");
        }, 11000);


    });

    $(".savechoice2").on("click", function () {
        var finalColor = $("#colorChoice").val();
        $(".colorPick").toggleClass("hidden");
        $(".finalArtwork").css("background-color:" + '"' + finalColor + '"')
        $(".talk").text("A fine and very human choice. Here is your reward");
        $(".reward2").toggleClass("hidden");
        console.log(finalColor);
        setTimeout(function () {
            $(".talk").text("I am done now, Check the progress to see my masterpiece");
            $(".reward2").toggleClass("hidden");
        }, 8000);
    });

});
