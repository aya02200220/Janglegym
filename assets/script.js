window.addEventListener("load", () => {
(function () {
  console.log("sss");
  $(".has-sub").hover(function () {
    $(this).children(".sub").stop().slideToggle();
  });
});
}
