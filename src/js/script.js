(function($) {
  "use strict";

  var App = window.App || {};

  function BlocksToggle(options) {
    this.btn = document.body.querySelector(options.btnSelector);
    this.block = document.body.querySelector(options.blockSelector);

    if(!this.btn) console.log("No btn selector provided");
    if(!this.block) console.log("No block selector provided");
  }

  BlocksToggle.prototype.toggle = function (clsName) {
    var block = this.block;
    this.btn.addEventListener('click', function(e) {
      var target = e.target;

      if(target !== this) return;

      block.classList.toggle(clsName);
      if(!block.classList.contains(clsName)) {
        return;
      }

      var dn = $(block).offset().top - 50;

      $('html, body').animate({scrollTop: dn}, 1000);
    })
  };

  App.BlocksToggle = BlocksToggle;
  window.App = App;

})(jQuery);
