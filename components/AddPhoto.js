import {Person} from './Person.js';

const listVg = document.querySelector('.list_vg');
const add = document.querySelector('.add');
// import {createPersons} from './Person.js';
import {personListVg} from './data.js';


class AddPhoto {
  constructor({submitForm}) {
    // this._formSelector = formSelector;
    this._submitForm = submitForm;
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
      this._submitForm(this._getInputValues())
      add.reset();
    })
  }
}

const photo = new AddPhoto({
  formSelector: '.template',
  submitForm: (data) => {
   personListVg.push(data);
 const person = new Person(data);
 const personElement = person.generatePerson();
 listVg.append(personElement);
  }
});

export {photo};



