import {personListDJ, personListBY, personListMO, personListSP, listDJ, listBY, listMO, listSP} from './components/data.js';
import {createPersons} from './components/Person.js';

createPersons(personListDJ, listDJ);
createPersons(personListMO, listMO);
createPersons(personListBY, listBY);
createPersons(personListSP, listSP);

// const photoList = Array.from(document.querySelectorAll('.person__image'));
//
// photoList.forEach((photo) => {
//   photo.addEventListener('click', (evt) => openPopupImage(evt));
// });

