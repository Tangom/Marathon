import {personListDJ, personListBY, personListMO} from './data.js';


const popupPhoto = document.querySelector('.popup_photo');
const popupCloseImage = popupPhoto.querySelector('.popup__close_image');
const popupText = popupPhoto.querySelector('.popup__text');
const popupImage = popupPhoto.querySelector('.popup__image');
const listDJ = document.querySelector('.list_dj');
const listBY = document.querySelector('.list_by');
const listMO = document.querySelector('.list_mo');


function createElement(link, name, town) {
  const template = document.querySelector('.template').content;
  const person = template.cloneNode(true);
  const image = person.querySelector('.person__image')
  const  pName= person.querySelector('.person__name')
  const  pTown= person.querySelector('.person__town')

  image.src = link;
  image.alt = name
  pName.textContent = name;
  pTown.textContent = town;

  image.addEventListener('click', openPopupImage);
  return person;
}


function openPopup(mod) {
  mod.classList.add('popup_opened')
  addListener(mod);
}

function closePopup(mod) {
  mod.classList.remove('popup_opened')
  removeListener(mod);
}

function addListener(mod) {
  mod.addEventListener('click', closePopupOverlay);
  document.addEventListener('keydown', closePopupEsc);
}

function removeListener(mod) {
  mod.removeEventListener('click', closePopupOverlay);
  document.removeEventListener('keydown', closePopupEsc);
}

function closePopupEsc(evt) {
  if (evt.key === "Escape") {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function closePopupOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup(document.querySelector('.popup_opened'));
  }
}

function openPopupImage(evt) {
  openPopup(popupPhoto);
  popupImage.src = evt.target.src;
  popupImage.alt = evt.target.alt;
  popupText.textContent = evt.target.alt;
}

// const photoList = Array.from(document.querySelectorAll('.person__image'));
//
// photoList.forEach((photo) => {
//   photo.addEventListener('click', (evt) => openPopupImage(evt));
// });

popupCloseImage.addEventListener('click', () => closePopup(popupPhoto));

function createPersons(personList, list) {
  personList.forEach(element => {
    list.append(createElement(element.link, element.name, element.town));
  })
}

createPersons(personListDJ, listDJ);
createPersons(personListBY, listBY);
createPersons(personListMO, listMO);
