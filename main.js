const photo = document.querySelector('.person__image');
const popupPhoto = document.querySelector('.popup_photo');
const popupCloseImage = popupPhoto.querySelector('.popup__close_image');
const popupText = popupPhoto.querySelector('.popup__text');
const popupImage = popupPhoto.querySelector('.popup__image');


const person = [{
  name: 'Дмитрий Баклашов',
  link: './images/Дмитрий Баклашов.jpg'
},
  {
    name: 'Екатерина Виноградова',
    link: './images/Екатерина Виноградова.jpg'
  },
  {
    name: 'Алина Шатковская',
    link: './images/Алина Шатковская.jpg'
  },
  {
    name: 'Daniel Tuero',
    link: './images/Daniel Tuero.jpg'
  },
  {
    name: 'Hernán Brus',
    link: './images/Hernán Brusa.jpg'
  },
  {
    name: 'Виктор Шевченко',
    link: './images/Виктор Шевченко.jpg'
  },
  {
    name: 'Ирина Кострома',
    link: './images/Ира Кострома.jpg'
  }
]

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

 photo.addEventListener('click', (evt) => openPopupImage(evt))
popupCloseImage.addEventListener('click', () => closePopup(popupPhoto));