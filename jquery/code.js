$(() => {
  $("#start").click(start);
});
let inter;
function start() {
  drawCircles($("#circles").val(), $("#width").val());
  if(inter != 0){
    clearInterval(inter);
  }
  inter = onClickListener();
  growCircles($("#rate").val(), $("#growth").val());
}

const drawCircles = (count, size) => {
  let colors = [
    "red",
    "aliceblue",
    "blue",
    "aqua",
    "aquamarine",
    "beige",
    "blueviolet",
  ];
  for (let i = 0; i < count; i++) {
    $("#circle-container").append("<div class='circle'></div>");
  }
  $(".circle").each(function () {
    $(this).addClass(colors[Math.floor(Math.random() * (colors.length - 1))]);
  });
  $(".circle").height(size);
  $(".circle").width(size);
};

const growCircles = (interval, amount) => {
  let intervalID = setInterval(() => {
    console.log($(".circle").height());
    $(".circle").height(parseInt(amount) + parseInt($(".circle").height()));
    $(".circle").width(parseInt(amount) + parseInt($(".circle").width()));
  }, interval);
  return intervalID;
};

function onClick() {
  $(this).remove();
}
const onClickListener = () => {
  $(".circle").click(onClick);
};
// return Math.random() * (256 - 0);
