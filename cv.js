(function() {
  $(".skills-prog")
    .find(".skills-bar")
    .each(function(i) {
      $(this)
        .find(".bar")
        .delay(i * 450)
        .animate(
          {
            width:
              $(this)
                .parents()
                .attr("data-percent") + "%"
          },
          1000,
          "linear",
          function() {
            return $(this).css({
              "transition-duration": ".5s"
            });
          }
        );
    });

 
}.call(this));

