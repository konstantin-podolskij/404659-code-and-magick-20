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

var renderTitle = function (ctx, TitleCoordX, FirstTitleCoordY, SecondTitleCoordY) {
  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', TitleCoordX, FirstTitleCoordY);
  ctx.fillText('Список результатов:', TitleCoordX, SecondTitleCoordY);
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
  var maxTime = getMaxElement(times);
  var shadowCoordX = CLOUD_X + GAP;
  var shadowCoordY = CLOUD_Y + GAP;
  var titleCoordX = CLOUD_X + GAP * 2;
  var firstTitleCoordY = FONT_GAP + TEXT_HEIGHT + GAP * 2;
  var secondTitleCoordY = firstTitleCoordY + FONT_GAP + TEXT_HEIGHT;

  renderCloud(ctx, shadowCoordX, shadowCoordY, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');
  renderTitle(ctx, titleCoordX, firstTitleCoordY, secondTitleCoordY);

  for (var i = 0; i < players.length; i++) {
    var coordX = CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i;
    var coordY = CLOUD_HEIGHT - GAP - FONT_GAP - TEXT_HEIGHT;
    var currentTime = Math.floor(times[i]);
    var currentBarColor = getBarColor(players[i]);
    var currentBarHeight = (MAX_BAR_HEIGHT * times[i]) / maxTime;
    var coordNameLabel = CLOUD_HEIGHT - GAP;
    var coordValue = coordY - currentBarHeight - GAP;

    renderText(ctx, players[i], coordX, coordNameLabel);
    renderBar(ctx, currentBarColor, coordX, coordY, BAR_WIDTH, -currentBarHeight);
    renderText(ctx, currentTime, coordX, coordValue);
  }
};
