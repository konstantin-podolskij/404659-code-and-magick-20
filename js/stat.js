'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;             // Отступы
var FONT_GAP = 5;         // Отступы текста
var TEXT_HEIGHT = 16;     // Высота текста
var BAR_WIDTH = 40;       // Ширина колонки
var BAR_GAP = 50;         // Расстояние между колонками
var MAX_BAR_HEIGHT = 150;
var colors = ['#f90d1c','#030f86','#9899a1','#656780']

var getMaxElement = function (array) {
  var maxElement = array[0];

  for (var i = 0; i < array.length; i++) {
    if (array[i] > maxElement) {
      maxElement = array[i];
    }
  }

  return maxElement;
}

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
}

window.renderStatistics = function (ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  var maxTime = getMaxElement(times);

  ctx.fillStyle = '#000';
  ctx.fillText('Ура вы победили!', CLOUD_X + 20, 25 + TEXT_HEIGHT );
  ctx.fillText('Список результатов:',CLOUD_X + 20, 25 + TEXT_HEIGHT + FONT_GAP + TEXT_HEIGHT);

  for (var i = 0; i < players.length; i++) {
    ctx.fillStyle = '#000';
    ctx.fillText(players[i], CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP);
    ctx.fillStyle = colors[i];
    ctx.fillRect(CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - FONT_GAP - TEXT_HEIGHT , BAR_WIDTH, -((MAX_BAR_HEIGHT * times[i])/ maxTime));
    ctx.fillStyle = '#000';
    ctx.fillText(Math.floor(times[i]), CLOUD_X + BAR_GAP + (BAR_WIDTH + BAR_GAP) * i, CLOUD_HEIGHT - GAP - TEXT_HEIGHT - FONT_GAP - ((MAX_BAR_HEIGHT * times[i])/ maxTime) - GAP );
  }

}
