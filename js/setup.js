'use strict';

var WIZARD_NAMES = ['Иван', 'Хуан Себастьян', 'Мария', 'Кристоф', 'Виктор', 'Юлия', 'Люпита', 'Вашингтон'];
var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго', 'Ирвинг'];
var COAT_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

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

var getWizardFullname = function () {
  var wizardFullname = getRandomName() + ' ' + getRandomSurname();

  return wizardFullname;
};

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var similarListElement = document.querySelector('.setup-similar-list');
var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');

var wizards = [
  {
    name: getWizardFullname(),
    coatColor: getRandomCoatColor()
  },
  {
    name: getWizardFullname(),
    coatColor: getRandomCoatColor()
  },
  {
    name: getWizardFullname(),
    coatColor: getRandomCoatColor()
  },
  {
    name: getWizardFullname(),
    coatColor: getRandomCoatColor()
  }
];

var renderWizard = function (wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;
  similarListElement.appendChild(wizardElement);
};

for (var i = 0; i < wizards.length; i++) {
  renderWizard(wizards[i]);
}
