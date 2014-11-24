var colors = {
  dan: "purple",
  lisa: "kale",
  carl: "green",
  lenny: "pink",
  tina: "maroon",
  ted: "yellow",
  crawford: "pink",
  kobe: "silver",
  david: "white",
  sean: "purple",
  nina: "black",
  robyn: "aqua",
  larry: "orange",
  sam: "purple"
}

var keys = Object.keys(colors);

for ( i = 0; i < keys.length; i++) {
  var key = keys[i];
  var value = colors[key];
  if (value === "pink" || value === "purple") {
    console.log(key);
  }
}