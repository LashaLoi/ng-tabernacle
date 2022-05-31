export const questions = [
  {
    label: 'Полоное имя',
    placeholder: 'Лой Алексей',
    component: 'input',
  },
  {
    label: 'Дата рождения',
    placeholder: '14/10/1998',
    component: 'input',
  },
  {
    label: 'Город',
    placeholder: 'Минск',
    component: 'input',
  },
  {
    label: 'Телефон',
    placeholder: '+375 33 603 80 02',
    component: 'input',
  },
  {
    label: 'Email',
    placeholder: 'lashaloi1409@gmail.com',
    component: 'input',
    validation: /\S+@\S+\.\S+/,
  },
  {
    label: 'Церковь',
    placeholder: 'Новое поколение Минск',
    component: 'input',
  },
  {
    label: 'Ваше служение в церкви',
    placeholder: 'Выберите ваше служение',
    component: 'select',
    options: [
      'Лидер прославления',
      'Служитель прославления',
      'Пастор',
      'Помощник пастора',
      'Другое',
      'Не несу служение',
      'Не прихожанин церкви',
    ],
  },
  {
    depend: true,
    value: 'Другое',
    label: 'Введите название другого служения',
    placeholder: 'Стулья раставляю',
    component: 'input',
  },
  {
    label:
      'Если вы приезжаете не на все время, укажите количество дней Вашего пребывания',
    placeholder: 'Количество дней',
    component: 'input',
  },
  {
    label: 'Хотели бы вы участвовать в Творческой лаборатории?',
    placeholder: 'Да / Нет',
    component: 'select',
    options: ['Да', 'Нет'],
  },
  {
    label: `Владеете ли Вы игрой на музыкальном инструменте? (укажите инструмент)`,
    placeholder: 'Ваш инструмент',
    component: 'input',
  },
  {
    label: 'Являетесь ли Вы вокалистом?',
    placeholder: 'Да / Нет',
    component: 'select',
    options: ['Да', 'Нет'],
  },
  {
    label:
      'Задайте вопрос, на который Вы бы хотели получить ответ на мастер-классе',
    placeholder: 'Ваш вопрос на мастер класс',
    component: 'input',
  },
  {
    label:
      'Поделитесь с нами вашим свидетельством после чувствия в школе поклонения СКИНИЯ прошлого/прошлый лет. Мы будем рады узнать, насколько этот проект повлиял на ваше служение!',
    placeholder: 'Ваше свидетельство',
    component: 'input',
  },
  {
    label: 'Приобрести майку с логотипом',
    placeholder: 'Размер / Нет',
    component: 'select',
    options: ['M', 'S', 'L', 'Нет'],
    price: true,
  },
  {
    label: 'Приобрести шоппер с логотипом - 20 BYN',
    placeholder: 'Да / Нет',
    component: 'select',
    options: ['Да', 'Нет'],
    price: true,
  },
]
