$(document).ready(function() {
  console.log('Ready!');
  createStars1(1000);
  createStars2(1000);
  createAsteroids(700);
});

var createAsteroids = function(numberOfAsteroids) {
  var asteroids = [];
  var time, top, left, widthVariance, sizeFactor;
  for (var n = 0; n < numberOfAsteroids; n++) {
    asteroids.push($('<span class="entity asteroid"></span>'));
    $('.sun-child').append(asteroids[n]);
    sizeFactor = 300;
    time = Math.random() * 10;
    widthVariance = Math.random() * 100 - 1;
    top = Math.sin(time) * (sizeFactor + widthVariance) + 30;
    left = Math.cos(time) * (sizeFactor + widthVariance) + 30;
    console.log('top: ', top, 'left: ', left);
    var asteroidStyle = {
      top: top,
      left: left
    };
    asteroids[n].css(asteroidStyle);
  }
};

var createStars1 = function(numberOfStars) {
  var stars = [];
  for (var n = 0; n < numberOfStars; n++) {
    stars.push($('<span class="center entity star"></span>'));
    $('.star-holder1').append(stars[n]);
    var top = -1000 + Math.random() * window.innerHeight * 3;
    var left = -1000 + Math.random() * window.innerWidth * 3;
    var styleSettings = {
      top: top,
      left: left,
      animation: 'star-orbit 12s linear infinite',
      zIndex: 100,
      border: '1px solid grey',
      padding: '0px',
      borderRadius: '0px'
    };
    stars[n].css(styleSettings);
  }
};

var createStars2 = function(numberOfStars) {
  var stars = [];
  for (var n = 0; n < numberOfStars; n++) {
    stars.push($('<span class="center entity star"></span>'));
    $('.star-holder2').append(stars[n]);
    var top = -1000 + Math.random() * window.innerHeight * 3;
    var left = -1000 + Math.random() * window.innerWidth * 3;
    var styleSettings = {
      top: top,
      left: left,
      animation: 'star-orbit 12s linear infinite',
      zIndex: 100,
      border: '1px solid grey',
      padding: '0px',
      borderRadius: '0px'
    };
    stars[n].css(styleSettings);
  }
};
