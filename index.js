$(document).ready(function() {
  console.log('Ready!');
  createStars(1000);
  createStars2(1000);
});

var createAsteroids = function(numberOfAsteroids) {
  var asteroids = [];
  for (var n = 0; n < numberOfAsteroids; n++) {
    asteroids.push($('<span class="entity asteroid"></span>'));
    var top = Math.random() * window.innerHeight * 4;
    var left = Math.random() * window.innerWidth * 4;
    var styleSettings = {
      top: top,
      left: left,
      animation: 'asteroid-orbit 2s linear infinite'
    };
    asteroids[n].css(styleSettings);
    $('.sun').append(asteroids[n]);
  }
};

var createStars = function(numberOfStars) {
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
