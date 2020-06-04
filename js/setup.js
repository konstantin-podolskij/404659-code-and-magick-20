'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
var wizards = [];

var getRandomNumber = function (max) {
  var rand = Math.random() * max;
  return Math.floor(rand);
};

var getRandomName = function () {
  return WIZARD_NAMES[getRandomNumber(WIZARD_NAMES.length)];
};

var getRandomSurname = function () {
  return WIZARD_SURNAMES[getRandomNumber(WIZARD_SURNAMES.length)];
};

var getRandomCoatColor = function () {
  return COAT_COLORS[getRandomNumber(COAT_COLORS.length)];
};

var getRandomEyesColor = function () {
  return EYES_COLORS[getRandomNumber(EYES_COLORS.length)];
};

var getRandomWizardFullname = function () {
  var wizardFullname = getRandomName() + ' ' + getRandomSurname();

  return wizardFullname;
};

var renderWizard = function (currentWizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = currentWizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = currentWizard.coatColor;
  wizardElement.querySelector('.wizard-eyes').style.fill = currentWizard.eyesColor;
  similarListElement.appendChild(wizardElement);
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');


for (var j = 0; j < 4; j++) {
  var wizard = {
    name: getRandomWizardFullname(),
    coatColor: getRandomCoatColor(),
    eyesColor: getRandomEyesColor()
  };
  wizards.push(wizard);
}

for (var i = 0; i < wizards.length; i++) {
  renderWizard(wizards[i]);
}
