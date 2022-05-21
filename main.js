import {allData} from './components/data.js';
import {photo} from './components/AddPhoto.js';
import {createPersons} from './components/Person.js';

 function create(item) {
  item.forEach((item) => {
    createPersons(item.personList, item.list)
  });
}

photo.setEventListeners();

create(allData);

photo.setEventListeners();


