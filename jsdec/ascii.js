// Currently running intervalID
let intervalID = 0;
// Selected InterVal value defualt is 250;
let interVal = 250;
// current frame thats running;
let index = 0;

// stores selected frame;

// init values on page loads
window.onload = () => {
  "use strict";
  // put all of your code here
  document.getElementById("start").onclick = onstart;
  document.getElementById("stop").onclick = onstop;
  document.getElementById("fontsize").onchange = onfontchange;
  document.getElementById("turbo").onchange = onturbo;
};
// when start putton clicked
const onstart = () => {
  "use strict";
  // disable the values when the animation is running
  document.getElementById("start").disabled = true;
  document.getElementById("stop").disabled = false;
  document.getElementById("animation").disabled = true;
  startanimation();
};
//on stop animation button is clicked
const onstop = () => {
  "use strict";
  document.getElementById("start").disabled = false;
  document.getElementById("animation").disabled = false;
  document.getElementById("stop").disabled = true;
  document.getElementById("text-area").innerText = this.ANIMATIONS.Blank;
  stopanimation();
};
// fire the animation
const startanimation = () => {
  "use strict";
  let animation = document.getElementById("animation").value;
  let frames = this.ANIMATIONS[animation];
  frames = frames.split("=====\n");
  startInterval(frames);
};
// clear interval and enable the buttons
const stopanimation = () => {
  "use strict";
  index = 0;
  clearInterval(intervalID);
  intervalID = 0;
};
// on font change, change text-area s font
const onfontchange = (e) => {
  "use strict";
  document.getElementById("text-area").className = e.target.value;
};

//on click turbo change interval if the
// interval already started turn off the last one and start new one
const onturbo = () => {
  "use strict";
  if (document.getElementById("turbo").checked) {
    interVal = 50;
  } else {
    interVal = 250;
  }
  // clearing the last interval if exists and start new one
  if (intervalID != 0) {
    clearInterval(intervalID);
    startanimation();
  }
};
// start an interval and loop the frames on text area
const startInterval = (frames) => {
  "use strict";
  intervalID = setInterval(() => {
    document.getElementById("text-area").innerHTML = frames[index];
    index = (index + 1) % frames.length;
  }, interVal);
};
