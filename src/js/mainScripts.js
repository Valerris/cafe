jQuery(function($) {
  $(".gototop").click(function() {
    $('html, body').animate({
      scrollTop: $("#hb").offset().top
    }, 1500);
  });
  $("#button, #tm1").click(function() {
    $('html, body').animate({
      scrollTop: $("#id1").offset().top
    }, 1500);
  });
  $("#button2, #tm2").click(function() {
    $('html, body').animate({
      scrollTop: $("#id2").offset().top
    }, 1500);
  });
  $("#button3, #tm3").click(function() {
    $('html, body').animate({
      scrollTop: $("#id3").offset().top
    }, 1500);
  });
  $("#button4, #tm4").click(function() {
    $('html, body').animate({
      scrollTop: $("#id4").offset().top
    }, 1500);
  });
  $("#button5, #tm5").click(function() {
    $('html, body').animate({
      scrollTop: $("#id5").offset().top
    }, 1500);
  });
  $("#button6, #tm6").click(function() {
    $('html, body').animate({
      scrollTop: $("#id6").offset().top
    }, 1500);
  });

  // Почему выбирают коворкинг скрипт начало
  $('#kk0').click(function() {
    chart.update({
      series: [{
        name: 'Все резиденты',
        data: [66, 37, 34, 29, 14],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });


  $('#kk1').click(function() {
    chart.update({
      series: [{
        name: 'Фрилансеры',
        data: [40, 25, 36, 26, 67],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kk2').click(function() {
    chart.update({
      series: [{
        name: 'Компании на стадии идеи/прототипа',
        data: [42, 33, 17, 25, 8],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kk3').click(function() {
    chart.update({
      series: [{
        name: 'Компании на стадии первых продаж',
        data: [12, 8, 14, 21, 22],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kk4').click(function() {
    chart.update({
      series: [{
        name: 'Компании на стадии расширения',
        data: [37, 50, 41, 37, 1],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });
  // Почему выбирают коворкинг скрипт конец

  // Причины смены коворкинга скрипт начало
  $('#kkk0').click(function() {
    chart1.update({
      series: [{
        name: 'Все резиденты',
        data: [43, 33, 20, 13, 7, 7],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  })

  $('#kkk1').click(function() {

    chart1.update({
      series: [{
        name: 'Фрилансеры',
        data: [56, 56, 11, 1, 1, 1],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kkk2').click(function() {
    chart1.update({
      series: [{
        name: 'Компании на стадии идеи/прототипа',
        data: [33, 1, 33, 67, 1, 1],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kkk3').click(function() {
    chart1.update({
      series: [{
        name: 'Компании на стадии первых продаж',
        data: [60, 40, 20, 20, 1, 20],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kkk4').click(function() {
    chart1.update({
      series: [{
        name: 'Компании на стадии расширения',
        data: [30, 25, 25, 8, 17, 8],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });
  // Причины смены коворкинга скрипт конец

  // Влияние коворкинга скрипт начало
  $('#kkkk0').click(function() {
    chart2.update({
      series: [{
        name: 'Все резиденты',
        data: [66, 27, 24, 17, 11, 9, 6, 1],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  })


  $('#kkkk1').click(function() {
    chart2.update({
      series: [{
        name: 'Фрилансеры',
        data: [68, 25, 32, 21, 14, 4, 4, 4],
        animation: {
          duration: 1000
        }
      }]
    });


    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kkkk2').click(function() {
    chart2.update({
      series: [{
        name: 'Компании на стадии идеи/прототипа',
        data: [50, 33, 17, 8, 0.5, 0.5, 8, 0.5],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kkkk3').click(function() {
    chart2.update({
      series: [{
        name: 'Компании на стадии первых продаж',
        data: [71, 36, 21, 7, 14, 14, 7, 0.5],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });

  $('#kkkk4').click(function() {
    chart2.update({
      series: [{
        name: 'Компании на стадии расширения',
        data: [71, 21, 18, 18, 9, 12, 9, 0.5],
        animation: {
          duration: 1000
        }
      }]
    });

    $(this).addClass("coformat-active");
    $(this).siblings().removeClass("coformat-active");
  });
  // Влияние коворкинга скрипт конец
});

$("#button, #tm1").click(function() {
  $("#id1").removeClass("idno").addClass("idyes");
  $("#id2").removeClass("idyes").addClass("idno");
  $("#id3").removeClass("idyes").addClass("idno");
  $("#id4").removeClass("idyes").addClass("idno");
  $("#id5").removeClass("idyes").addClass("idno");
  $("#id6").removeClass("idyes").addClass("idno");
  $("#hb").removeClass("hblock-open").addClass("hblock-close");
  $('#fly1').clone(true).unwrap().appendTo($('#flying-header').empty());
});

$("#button2, #tm2").click(function() {
  $("#id1").removeClass("idyes").addClass("idno");
  $("#id2").removeClass("idno").addClass("idyes");
  $("#id3").removeClass("idyes").addClass("idno");
  $("#id4").removeClass("idyes").addClass("idno");
  $("#id5").removeClass("idyes").addClass("idno");
  $("#id6").removeClass("idyes").addClass("idno");
  $("#hb").removeClass("hblock-open").addClass("hblock-close");
  $('#flying-header').empty();
  $('#fly2').clone(true).unwrap().appendTo($('#flying-header').empty());
});

$("#button3, #tm3").click(function() {
  $("#id1").removeClass("idyes").addClass("idno");
  $("#id2").removeClass("idyes").addClass("idno");
  $("#id3").removeClass("idno").addClass("idyes");
  $("#id4").removeClass("idyes").addClass("idno");
  $("#id5").removeClass("idyes").addClass("idno");
  $("#id6").removeClass("idyes").addClass("idno");
  $("#hb").removeClass("hblock-open").addClass("hblock-close");
  $('#flying-header').empty();
  $('#fly3').clone(true).unwrap().appendTo($('#flying-header').empty());
});

$("#button4, #tm4").click(function() {
  $("#id1").removeClass("idyes").addClass("idno");
  $("#id2").removeClass("idyes").addClass("idno");
  $("#id3").removeClass("idyes").addClass("idno");
  $("#id4").removeClass("idno").addClass("idyes");
  $("#id5").removeClass("idyes").addClass("idno");
  $("#id6").removeClass("idyes").addClass("idno");
  $("#hb").removeClass("hblock-open").addClass("hblock-close");
  $('#flying-header').empty();
  $('#fly4').clone(true).unwrap().appendTo($('#flying-header').empty());
});

$("#button5, #tm5").click(function() {
  $("#id1").removeClass("idyes").addClass("idno");
  $("#id2").removeClass("idyes").addClass("idno");
  $("#id3").removeClass("idyes").addClass("idno");
  $("#id4").removeClass("idyes").addClass("idno");
  $("#id5").removeClass("idno").addClass("idyes");
  $("#id6").removeClass("idyes").addClass("idno");
  $("#hb").removeClass("hblock-open").addClass("hblock-close");
  $('#flying-header').empty();
  $('#fly5').clone(true).unwrap().appendTo($('#flying-header').empty());
});

$("#button6, #tm6").click(function() {
  $("#id1").removeClass("idyes").addClass("idno");
  $("#id2").removeClass("idyes").addClass("idno");
  $("#id3").removeClass("idyes").addClass("idno");
  $("#id4").removeClass("idyes").addClass("idno");
  $("#id5").removeClass("idyes").addClass("idno");
  $("#id6").removeClass("idno").addClass("idyes");
  $("#hb").removeClass("hblock-open").addClass("hblock-close");
  $('#flying-header').empty();
  $('#fly6').clone(true).unwrap().appendTo($('#flying-header').empty());
});

$("#flying-header").css({
  position: 'absolute',
  display: 'none',
  left: '0',
  top: '0'
});

// Новый Scroll
// $("html").niceScroll({
//   cursorcolor: "#5d687e",
//   background: "#293754",
//   autohidemode: "false",
//   cursorborder: "none",
//   cursorborderradius: "none"
// })

$(window).scroll(function() {
  // $("html").getNiceScroll().resize();

  var $win = $(window);
  var winH = $win.height();

  if ($(window).scrollTop() >= winH) {
    $("#flying-header").css({
      position: 'fixed',
      display: 'block',
      left: '0',
      top: '0'
    });
  } else {
    $("#flying-header").css({
      position: 'absolute',
      display: 'none',
      left: '0',
      top: '0'
    });
  }
});

$('.mp1').hover(function() {
  $(".maph1").css("fill", "#FFFFFF");
}, function() {
  $(".maph1").css("fill", "#F72A7C");
});

$('.mp2').hover(function() {
  $(".maph2").css("fill", "#FFFFFF");
}, function() {
  $(".maph2").css("fill", "#F85496");
});

$('.mp3').hover(function() {
  $(".maph3").css("fill", "#FFFFFF");
}, function() {
  $(".maph3").css("fill", "#FB8CB8");
});

$('.mp4').hover(function() {
  $(".maph4").css("fill", "#FFFFFF");
}, function() {
  $(".maph4").css("fill", "#A4E9C1");
});

$('.mp5').hover(function() {
  $(".maph5").css("fill", "#FFFFFF");
}, function() {
  $(".maph5").css("fill", "#66DA97");
});

$('.mp6').hover(function() {
  $(".maph6").css("fill", "#FFFFFF");
}, function() {
  $(".maph6").css("fill", "#17B65A");
});

$("path, polygon, circle").hover(function(e) {
  $('#info-box').css('display', 'block');
  $('#info-box').html($(this).data('info'));
});

$("path, polygon, circle").mouseleave(function(e) {
  $('#info-box').css('display', 'none');
});

$(document).mousemove(function(e) {
  var pt = e.pageY - $("#us-map").offset().top - 55;
  var pl = e.pageX - $("#us-map").offset().left - ($('#info-box').width()) / 2;
  $('#info-box').css('top', pt).css('left', pl);
  $("#log").text("Y: " + pt + " X: " + pl + "pageX: " + e.pageX + ", pageY: " + e.pageY);

}).mouseover();

//var ios = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
//if(ios) {
//  $('a').on('click touchend', function() {
//    var link = $(this).attr('href');
//    window.open(link,'_blank');
//    return false;
//  });
//}
