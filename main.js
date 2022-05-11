import {
  personListDJ,
  personListBy,
  personListGr,
  personListFr,
  personListUSA,
  personListLaLi,
  personListVg,
  personListVr,
  personListEk,
  personListKz,
  personListKr,
  personListMis,
  personListMo,
  personListMu,
  personListNn,
  personListOh,
  personListPk,
  personListPs,
  personListRd,
  personListRz,
  personListSam,
  personListSch,
  personListTv,
  personListChb,
  personListChe,
  personListSp
} from './components/data.js';
import {createPersons} from './components/Person.js';

const listDJ = document.querySelector('.list_dj');
const listBy = document.querySelector('.list_by');
const listGr = document.querySelector('.list_gr');
const listFr = document.querySelector('.list_fr');
const listUSA = document.querySelector('.list_usa');
const listLaLi = document.querySelector('.list_laLi');
const listVg = document.querySelector('.list_vg');
const listVr = document.querySelector('.list_vr');
const listEk = document.querySelector('.list_ek');
const listKz = document.querySelector('.list_kz');
const listKr = document.querySelector('.list_kr');
const listMis = document.querySelector('.list_mis');
const listMo = document.querySelector('.list_mo');
const listMu = document.querySelector('.list_mu');
const listNn = document.querySelector('.list_nn');
const listOh = document.querySelector('.list_oh');
const listPk = document.querySelector('.list_pk');
const listPs = document.querySelector('.list_ps');
const listRd = document.querySelector('.list_rd');
const listRz = document.querySelector('.list_rz');
const listSam = document.querySelector('.list_sam');
const listSch = document.querySelector('.list_sch');
const listTv = document.querySelector('.list_tv');
const listChb = document.querySelector('.list_chb');
const listChe = document.querySelector('.list_che');
const listSp = document.querySelector('.list_sp');

const allDate = [{
    personList: personListDJ,
    list:listDJ,
  },
    {
      personList: personListBy,
      list:listBy,
    },
    {
      personList: personListGr,
      list:listGr,
    },
    {
      personList: personListFr,
      list:listFr,
    },
    {
      personList: personListUSA,
      list:listUSA,
    },
    {
      personList:personListLaLi,
      list:listLaLi,
    },
    {
      personList:personListVg,
      list:listVg,
    },
    {
      personList:personListVr,
      list:listVr,
    },
    {
      personList:personListEk,
      list:listEk,
    },
    {
      personList:personListKz,
      list:listKz,
    },
    {
      personList:personListKr,
      list:listKr,
    },
    {
      personList:personListMis,
      list:listMis,
    },
    {
      personList:personListMo,
      list:listMo,
    },
    {
      personList:personListMu,
      list:listMu,
    },
    {
      personList:personListNn,
      list:listNn,
    },
    {
      personList: personListOh,
      list:listOh,
    },
    {
      personList:personListPk,
      list:listPk,
    },
    {
      personList:personListPs,
      list:listPs,
    },
    {
      personList:personListRd,
      list:listRd,
    },
    {
      personList:personListRz,
      list:listRz,
    },
    {
      personList:personListSam,
      list:listSam,
    },
    {
      personList:personListSch,
      list:listSch,
    },
    {
      personList:personListTv,
      list:listTv,
    },
    {
      personList: personListChb,
      list:listChb,
    },
    {
      personList:personListChe,
      list:listChe,
    },
    {
      personList: personListSp,
      list:listSp,
    },
  ]


function create(item) {
  item.forEach((item) => {
    createPersons(item.personList, item.list)
  });
}

create(allDate);




