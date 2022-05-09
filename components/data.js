const listDJ = document.querySelector('.list_dj');
const listBY = document.querySelector('.list_by');
const listMO = document.querySelector('.list_mo');
const listSP = document.querySelector('.list_sp');

const personListDJ = [{
  name: 'Дмитрий Баклашов',
  link: './images/Дмитрий Баклашов.jpg',
  town: 'Воронеж'
},
  {
    name: 'Екатерина Виноградова',
    link: './images/Екатерина Виноградова.jpg',
    town: 'Москва'
  },
  {
    name: 'Алина Шатковская',
    link: './images/Алина Шатковская.jpg',
    town: 'Москва'
  },
  {
    name: 'Daniel Tuero',
    link: './images/Daniel Tuero.jpg',
    town: 'Buenos Aires/Москва'
  },
  {
    name: 'Hernán Brus',
    link: './images/Hernán Brusa.jpg',
    town: 'Buenos-Aires/Санкт-Петербург'
  },
  {
    name: 'Виктор Шевченко',
    link: './images/Виктор Шевченко.jpg',
    town: 'Вологда'
  },
  {
    name: 'Ирина Кострома',
    link: './images/Ира Кострома.jpg',
    town: 'Псков'
  }
]

const personListBY = [{
  name: 'Виталий Аверченко',
  link: './images/Виталий Аверченко.jpg',
  town: 'Минск'
},
  {
    name: 'Наталья Аверченко',
    link: './images/Наталья Аверченко.jpg',
    town: 'Минск'
  },
  {
    name: 'Ольга Войтович',
    link: './images/Ольга Войтович.JPG',
    town: 'Минск'
  },
  {
    name: 'Марина Иванова',
    link: './images/Марина Иванова.jpg',
    town: 'Минск'
  },
  {
    name: 'Екатерина Ясовеева',
    link: './images/Екатерина Ясовеева.jpg',
    town: 'Минск'
  },
  {
    name: 'Ирина Ястребкова',
    link: './images/Ирина Ястребкова.jpg',
    town: 'Минск'
  }
]

const personListMO = [{
  name: 'Мария Андрианова',
  link: './images/Мария Адрианова.jpg',
},
  {
    name: 'Игорь Антонов',
    link: './images/Игорь Антонов.png',
  },
  {
    name: 'Петр Богов',
    link: './images/Петр Богов.jpg',
  },
  {
    name: 'Татьяна Боярова',
    link: './images/Татьяна Боярова.jpg',
  },
  {
    name: 'Сергей Быстров',
    link: './images/Сергей Быстров.jpg',
  },
  {
    name: 'Анна Быстрова',
    link: './images/Анна Быстрова.jpg',
  },
  {
    name: 'Александр Выборнов',
    link: './images/Александр Выборнов.jpg',
  },
  {
    name: 'Лина Гиза',
    link: './images/Лина Гиза.jpg',
  },
  {
    name: 'Галина Глушко',
    link: './images/Галина Глушко.jpg',
  },
  {
    name: 'Виктор Глушко',
    link: './images/Виктор Глушко.jpg',
  },
  {
    name: 'Юлия Дагиль',
    link: './images/Юлия Дагиль.jpg',
  },
  {
    name: 'Юлия Датура-Чапораль',
    link: './images/Юлия Датура Чапараль.jpg',
  },
  {
    name: 'Алексей Дульцев',
    link: './images/Алексей Дульцев.png',
  },
  {
    name: 'Александр Загребайлов',
    link: './images/Александр Загребайлов.jpg',
  },
  {
    name: 'Ирина Загребайлова',
    link: './images/Ирина Загребайлова.jpg',
  },
  {
    name: 'Елена Аргона Иванова',
    link: './images/Елена Аргона Иванова.jpg',
  },
  {
    name: 'Евгений Козюрман',
    link: './images/Евгений Козюрман.jpg',
  },
  {
    name: 'Андрей Кравцев',
    link: './images/Андрей Кравцев.jpg',
  },
  {
    name: 'Юлия Кравцова',
    link: './images/Юлия Кравцова 2.jpg',
  },
  {
    name: 'Ирина Крылова',
    link: './images/Ирина Крылова.jpeg',
  },
  {
    name: 'Сергей Лутченков',
    link: './images/Сергей Лутченков.jpg',
  },
  {
    name: 'Вячеслав Максюта',
    link: './images/Вячеслав Максюта.jpg',
  },
  {
    name: 'Марина Матросова',
    link: './images/Некто.jpg',
  },
  {
    name: 'Александра Матросова',
    link: './images/Александра Матросова.jpg',
  },
  {
    name: 'Наталья Молокова',
    link: './images/Наталья Молокова.jpg',
  },
  {
    name: 'Oleg Nice',
    link: './images/Oleg Nice.jpg',
  },
  {
    name: 'Ринат Нигматуллин',
    link: './images/Ринат Нигматуллин.jpg',
  },
  {
    name: 'Антон Никулин',
    link: './images/Антон Никулин.jpeg',
  },
  {
    name: 'Наталья Полынкова',
    link: './images/Наталья Полынкова.jpg',
  },
  {
    name: 'Дарья Помян',
    link: './images/Дарья Помян.jpg',
  },
  {
    name: 'Игорь Помян',
    link: './images/Игорь Помян.jpg',
  },
  {
    name: 'Дмитрий Редин',
    link: './images/Дмитрий Редин.jpg',
  },
  {
    name: 'Марина Румянцева',
    link: './images/Марина Румянцева.jpg',
  },
  {
    name: 'Александр Сергеев',
    link: './images/Александр Сергеев.jpg',
  },
  {
    name: 'Ирина Соколова',
    link: './images/Ирина Соколова.jpeg',
  },
  {
    name: 'Анна Соловьева',
    link: './images/Анна Соловьева.jpg',
  },
  {
    name: 'Ирина Сытова',
    link: './images/Ирина Сытова.jpg',
  },
  {
    name: 'Алексей Тупов',
    link: './images/Алексей Тупов.jpg',
  }
]

const personListSP = [{
  name: 'Инна Апрельская',
  link: './images/Инна Апрельская.jpg',
},
  {
    name: 'Татьяна Архипова',
    link: './images/Архипова Татьяна.jpg',
  },
  {
    name: 'Дарья Бажанова',
    link: './images/Дарья Бажанова.jpg',
  },
  {
    name: 'Мария Белокурова',
    link: './images/Мария Белокурова.jpg',
  },
  {
    name: 'Елена Берестецкая',
    link: './images/Елена Берестецкая.jpg',
  },
  {
    name: 'Алексей Биорк',
    link: './images/Алексей Биорк.jpg',
  },
  {
    name: 'Игорь Близнец',
    link: './images/Игорь Близнец.png',
  },
  {
    name: 'Владимир Брагин',
    link: './images/Владимир Брагин.jpg',
  },
  {
    name: 'Мария Брусса',
    link: './images/Мария Брусса.jpg',
  },
  {
    name: 'Константин Волошенко',
    link: './images/Константин Волошенко.jpg',
  },
  {
    name: 'Олег Голубев',
    link: './images/Олег Голубев.jpg',
  },
  {
    name: 'Артём Довбуш',
    link: './images/Артём Довбуш.jpg',
  },
  {
    name: 'Игорь Дорофеев',
    link: './images/Некто.jpg',
  },
  {
    name: 'Наталья Жемеркина',
    link: './images/Наталья Жемеркина.jpg',
  },
  {
    name: 'Александр Захаров',
    link: './images/Александр Захаров.jpg',
  },
  {
    name: 'Лариса Захарова',
    link: './images/Лариса Захарова.jpg',
  },
  {
    name: 'Светлана Зинченко',
    link: './images/Светлана Зинченко.jpg',
  },
  {
    name: 'Игорь Иванов',
    link: './images/Игорь Иванов.jpg',
  },
  {
    name: 'Александра Иванова',
    link: './images/Александра Иванова.jpg',
  },
  {
    name: 'Елена Кадырова',
    link: './images/елена кадырова.jpg',
  },
  {
    name: 'Дмитрий Корытов',
    link: './images/Дмитрий Корытов.jpg',
  },
  {
    name: 'Светлана Котляренко',
    link: './images/Светлана Котляренко.jpg',
  },
  {
    name: 'Кирилл Красиков',
    link: './images/Кирилл Красиков.jpg',
  },
  {
    name: 'Роман Лебедев',
    link: './images/Роман Лебедев.jpg',
  },
  {
    name: 'Анна Лебедева',
    link: './images/Анна Лебедева.jpg',
  },
  {
    name: 'Наталья Луан',
    link: './images/Наталья Луан.jpg',
  },
  {
    name: 'Андрей Макаров',
    link: './images/Андрей Макаров.jpg',
  },
  {
    name: 'Андрей Маноменов',
    link: './images/Андрей Маноменов.jpg',
  },
  {
    name: 'Елена Маноменова',
    link: './images/Елена Маноменова.jpg',
  },
  {
    name: 'Артур Мкртчян',
    link: './images/Артур Мкртчян.jpg',
  },
  {
    name: 'Максим Могиль',
    link: './images/Максим Могиль.jpg',
  },
  {
    name: 'Игорь Муравьев',
    link: './images/Игорь Муравьев.jpg',
  },
  {
    name: 'Татьяна Мыльникова',
    link: './images/Татьяна Мыльникова.jpg',
  },
  {
    name: 'Мария Нейланд',
    link: './images/Мария Нейланд.png',
  },
  {
    name: 'Ирина Некрасова',
    link: './images/Ирина Некрасова.jpg',
  },
  {
    name: 'Анна Никитина',
    link: './images/Некто.jpg',
  },
  {
    name: 'Владимир Огородников',
    link: './images/Владимир Огородников.jpg',
  },
  {
    name: 'Ксения Оржесковская',
    link: './images/Ксения Оржесковская.jpeg',
  },
  {
    name: 'Александр Павленко',
    link: './images/Александр Павленко.jpg',
  },
  {
    name: 'Елена Павлишина',
    link: './images/Елена Павлишина.jpg',
  },
  {
    name: 'Ольга Павлова',
    link: './images/Ольга Павлова.jpeg',
  },
  {
    name: 'Татьяна Парфилова',
    link: './images/Татьяна Парфилова.jpg',
  },
  {
    name: 'Александра Писаренко',
    link: './images/Александра Писаренко.jpg',
  },
  {
    name: 'Денис Подгорный',
    link: './images/Денис Подгорный.jpg',
  },
  {
    name: 'Наталья Подгорная',
    link: './images/Наталья Подгорная.jpg',
  },
  {
    name: 'Александр Пономарёв',
    link: './images/Александр Пономарёв.jpg',
  },
  {
    name: 'Андрей Почивалов',
    link: './images/Андрей Почивалов.jpg',
  },
  {
    name: 'Алексей Рощектаев',
    link: './images/Алексей Рощектаев.jpg',
  },
  {
    name: 'Михо Саградян',
    link: './images/михо.jpg',
  },
  {
    name: 'Юля Тарасова',
    link: './images/Юля Тарасова.jpg',
  },
  {
    name: 'Сергей Туркин',
    link: './images/Сергей Туркин.jpg',
  },
  {
    name: 'Галина Уварова',
    link: './images/Галина Уварова.jpg',
  },
  {
    name: 'Анна Ушакова',
    link: './images/Анна Ушакова.jpeg',
  },
  {
    name: 'Татьяна Федеченкова',
    link: './images/Татьяна Федеченкова.jpg',
  },
  {
    name: 'Евгения Федорова',
    link: './images/Некто.jpg',
  },
  {
    name: 'Александр Флеминг',
    link: './images/Александр Флеминг.jpg',
  },
  {
    name: 'Людмила Худолеева',
    link: './images/Некто.jpg',
  },
  {
    name: 'Аля Цой',
    link: './images/Ала цой.jpg',
  },
  {
    name: 'Александр цой',
    link: './images/Александр цой.jpg',
  }
]

export {personListDJ, personListBY, personListMO, personListSP, listDJ, listBY, listMO, listSP};