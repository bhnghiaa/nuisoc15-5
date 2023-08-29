$(function () {
  setTimeout(function () {
    $(".name").animate(
      {
        opacity: "1",
        top: "3%",
      },
      1000
    );
  }, 2000);
  setTimeout(function () {
    $(".happy").animate(
      {
        opacity: "1",
        top: "12%",
      },
      1000
    );
  }, 1000);
  setTimeout(function () {
    $(".button-style1").animate(
      {
        opacity: "1",
        top: "87%",
        left: "25%",
      },
      1000
    );
    $(".button-style2").animate(
      {
        opacity: "1",
        top: "87%",
        left: "75%",
      },
      1000
    );
  }, 10000);
  // $(window).click(function(){
  // 	$('audio')[0].play();
  // });
  // window.audio=$('audio')[0].play();
});
