'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var FONT_GAP = 5;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var BAR_GAP = 50;
var MAX_BAR_HEIGHT = 150;

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }
  return maxElement;
};

var renderText = function (ctx, text, coordX, coordY) {
  ctx.fillStyle = '#000';
  ctx.fillText(text, coordX, coordY);
};

var renderBar = function (ctx, color, coordX, coordY, barWidth, barHeight) {
  ctx.fillStyle = color;
  ctx.fillRect(coordX, coordY, barWidth, barHeight);
};

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getRandomSaturationPercent = function () {
  return (Math.floor(Math.random() * 100) + 1);
};

var getBarColor = function (playerName) {
  if (playerName === 'Вы') {
    return 'rgba(255, 0, 0, 1)';
  } else {
    return 'hsl(240, ' + getRandomSaturationPercent() + '%, 50%)';
  }
};

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, 25 + TEXT_HEIGHT);
  ctx.fillText('Список результатов:', CLOUD_X + 20, 25 + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT);

  for (var i = 0; i < players.length; i++) {
    var coordX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var coordY = CLOUD_HEIGHT - GAP - FONT_GAP - TEXT_HEIGHT;

    renderText(ctx, players[i], coordX, CLOUD_HEIGHT - GAP);
    renderBar(ctx, getBarColor(players[i]), coordX, coordY, BAR_WIDTH, -((MAX_BAR_HEIGHT * times[i]) / maxTime));
    renderText(ctx, Math.floor(times[i]), coordX, coordY - ((MAX_BAR_HEIGHT * times[i]) / maxTime) - GAP);
  }
};
