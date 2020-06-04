'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var MAX_WIZARD_COUNT = 4;

var wizards = [];
var userDialog = document.querySelector('.setup');
var similarBlock = userDialog.querySelector('.setup-similar');
var similarListElement = similarBlock.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var getRandomNumber = function (max) {
  var rand = Math.random() * max;
  return Math.floor(rand);
};

var getRandomValue = function (array) {
  return array[getRandomNumber(array.length)];
};

var getRandomWizardFullname = function (arrNames, arrSurnames) {
  return getRandomValue(arrNames) + ' ' + getRandomValue(arrSurnames);
};

var renderWizard = function (currentWizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = currentWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = currentWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = currentWizard.eyesColor;
  similarListElement.appendChild(wizardElement);
};

var fillArrayWizard = function () {
  for (var j = 0; j < MAX_WIZARD_COUNT; j++) {
    var wizard = {
      name: getRandomWizardFullname(WIZARD_NAMES, WIZARD_SURNAMES),
      coatColor: getRandomValue(COAT_COLORS),
      eyesColor: getRandomValue(EYES_COLORS)
    };
    wizards.push(wizard);
  }

  return wizards;
};

var renderSimilarList = function (array) {
  for (var i = 0; i < array.length; i++) {
    renderWizard(wizards[i]);
  }
};

userDialog.classList.remove('hidden');
similarBlock.classList.remove('hidden');

renderSimilarList(fillArrayWizard());

