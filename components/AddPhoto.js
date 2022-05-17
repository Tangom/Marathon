// import {createPersons} from './Person.js';
import {personListVg} from './data.js';

// const listVg = document.querySelector('.list_vg')

const add = document.querySelector('.add');
// const name = add.querySelector('.add-input_name');
// const inputImage = add.querySelector('.add-input_image');
// const button = add.querySelector('.add-button');


class AddPhoto {
  constructor() {

  }

  _getInputValues() {
    const inputValues = {};
    const inputList = Array.from(add.querySelectorAll('.add-input'));
    inputList.forEach(input => {
      inputValues[input.name] = input.value;
    });
    return inputValues;
  }

  setEventListeners() {
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


export {photo};












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


