const images = [
  "angular2",
  "vue",
  "react",
  "grunt",
  "phantomjs",
  "ember",
  "babel",
  "ionic",
  "gulp",
  "meteor",
  "yeoman",
  "yarn",
  "nodejs",
  "bower",
  "browserify",
];

const data: {
  content: string;
}[] = images.map((item) => {
  return {
    content: `https://raw.githubusercontent.com/samiheikki/javascript-guessing-game/master/static/logos/${item}.png`,
  };
});

export default data;
