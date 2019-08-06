$(document).foundation();

$('.b10').css('opacity', '0');
$('#button6').hover(
    function() {
        $('.b10').animate({opacity: 1}, 500);
        $('.b3').animate({opacity: 1}, 500);
    },

    function() {
        $('.b10').animate({opacity: 0}, 1500);
        $('.b3').animate({opacity: 1}, 500);
    }
);

$('.b11').css('opacity', '0');
$('#button').css('cursor','pointer');
$('#button').hover(
    function() {
        $('.b11').animate({opacity: 1}, 500);
        $('.b3').animate({opacity: 1}, 0);
    },

    function() {
        $('.b11').animate({opacity: 0}, 1500);
        $('.b3').animate({opacity: 1}, 0);
    }
);

$('.b12').css('opacity', '0');
$('#button2').hover(
    function() {
        $('.b12').animate({opacity: 1}, 500);
        $('.b3').animate({opacity: 1}, 500);
    },

    function() {
        $('.b12').animate({opacity: 0}, 500);
        $('.b3').animate({opacity: 1}, 500);
    }
);

$('.b14').css('opacity', '0');
$('#button4').hover(
    function() {
        $('.b14').animate({opacity: 1}, 500);
        $('.b3').animate({opacity: 1}, 500);
    },

    function() {
        $('.b14').animate({opacity: 0}, 500);
        $('.b3').animate({opacity: 1}, 500);
    }
);

$('.b15').css('opacity', '0');
$('#button5').hover(
    function() {
        $('.b15').animate({opacity: 1}, 500);
        $('.b3').animate({opacity: 1}, 500);
    },

    function() {
        $('.b15').animate({opacity: 0}, 1500);
        $('.b3').animate({opacity: 1}, 500);
    }
);

$('.b16').css('opacity', '0');
$('#button3').hover(
    function() {
        $('.b16').animate({opacity: 1}, 500);
        $('.b3').animate({opacity: 1}, 500);
    },

    function() {
        $('.b16').animate({opacity: 0}, 1500);
        $('.b3').animate({opacity: 1}, 500);
    }
);

// ****************************************************

var btnGreenZone = '[data-green-zone="moscow-vs-world-btn"]',
    blockGreenZone = '[data-green-zone="moscow-vs-world-block"]',
    btnPinkZone = '[data-pink-zone="evaluation-factors-btn"]',
    blockPinkZone = '[data-pink-zone="evaluation-factors-block"]',
    toggleClassName = "open";

var App = window.App,
    blocksToggleGreen = new App.BlocksToggle({
      btnSelector: btnGreenZone,
      blockSelector: blockGreenZone
    }),
    blocksTogglePink = new App.BlocksToggle({
      btnSelector: btnPinkZone,
      blockSelector: blockPinkZone
    });

    blocksToggleGreen.toggle(toggleClassName);
    blocksTogglePink.toggle(toggleClassName);
