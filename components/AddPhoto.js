<<<<<<< HEAD
import {Person} from './Person.js';
// import {personListVg} from './data.js';

 const listVg = document.querySelector('.list_vg')
=======
// import {createPersons} from './Person.js';
import {personListVg} from './data.js';

// const listVg = document.querySelector('.list_vg')
>>>>>>> origin/main

const add = document.querySelector('.add');
// const name = add.querySelector('.add-input_name');
// const inputImage = add.querySelector('.add-input_image');
// const button = add.querySelector('.add-button');


class AddPhoto {
<<<<<<< HEAD
  constructor({submitForm}) {
    // this._formSelector = formSelector;
    this._submitForm = submitForm;
  }

  // _getTemplate() {
  //   return document.querySelector(this._formSelector).content.cloneNode(true);
  // }
=======
  constructor() {

  }
>>>>>>> origin/main

  _getInputValues() {
    const inputValues = {};
    const inputList = Array.from(add.querySelectorAll('.add-input'));
    inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
<<<<<<< HEAD
    add.addEventListener('submit', (evt) => {
      evt.preventDefault();
      this._submitForm(this._getInputValues())
      add.reset();
    })
  }

  // generatePhoto() {
  //   this._element = this._getTemplate();
  //   this._setEventListeners();
  //
  //   return this._element;
  // }
}


const photo = new AddPhoto({
  formSelector: '.template',
  submitForm: (data) => {
    const person= new Person(data);
    const personElement = person.generatePerson();
    listVg.append(personElement);

  }
});
=======
     add.addEventListener('submit', (evt) => {
      evt.preventDefault();
       personListVg.append( this._getInputValues())
      // name: this._getInputValues().place,
      // link: this._getInputValues().link

       add.reset();
    })
  }

}


const photo = new AddPhoto();

>>>>>>> origin/main

export {photo};


<<<<<<< HEAD
 // postAddCard(item) {
 //      name: item.name,
 //      link: item.link
 //
 //
 //  submitForm: (item) => {
 //    popupCardForm.waitLoading(true);
 //    api.postAddCard({
 //      name: item.place,
 //      link: item.link
=======










>>>>>>> origin/main
// class AddPhoto {
//   constructor({ formSelector, handleFormSubmit }) {
//     this._formSelector = formSelector;
//     this._handleFormSubmit = handleFormSubmit;
//   }
//
//   _getTemplate() {
//     return document.querySelector(this._formSelector).content.cloneNode(true);
//   }
//
//   generatePhoto() {
//     this._element = this._getTemplate();
//     this._setEventListeners();
//     // const image = this._element.querySelector('.person__image');
//     // image.src = inputImage;
//     // image.alt = name;
//     // this._element.querySelector('.person__name').textContent = name;
//
//     return this._element;
//   }
//
//   _setEventListeners() {
//     this._element.addEventListener('submit', (evt) => {
//       evt.preventDefault()
//
//       this._handleFormSubmit(this._getInputValues());
//
//       this._element.reset();
//     });
//   }
//
//   _getInputValues() {
//     // достаём все элементы полей
//     this._inputList = this._element.querySelectorAll('.add-input');
//
//     // создаём пустой объект
//     this._formValues = {};
//
//     // добавляем в этот объект значения всех полей
//     this._inputList.forEach(input => {
//       this._formValues[input.name] = input.value;
//     });
//
//     // возвращаем объект значений
//     return this._formValues;
//   }
//
// }
//
// const photo = new AddPhoto({
//   formSelector: '.add',
//   handleFormSubmit: (formData) => {
//     const person= new Person(formData);
//     const personElement = person.generatePerson()
//     listVg.append(personElement);
//   }
// });
//
//
//
//
// const photoElement =photo.generatePhoto();
// listVg.append(photoElement);

// 1. получаем данные с полей кнопкой 2. передаём их в лист


