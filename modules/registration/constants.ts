export const questions = [
  {
    label: 'Полное имя',
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
      'Если вы приезжаете не на все время, укажите количество дней вашего пребывания',
    placeholder: 'С какого - по какое число',
    component: 'input',
    optional: true,
    description: 'Пропустите вопрос если вы приезжаете на всю школу.',
  },
  {
    label: 'Хотели бы вы участвовать в Творческой лаборатории?',
    placeholder: 'Да / Нет',
    component: 'select',
    options: ['Да', 'Нет'],
    description:
      'В четверг 28 июля, будем работать над внешним и внутренним, а вечером на шоу талантов наслаждаться каждым творческим номером!',
  },
  {
    label: `Владеете ли Вы игрой на музыкальном инструменте? (укажите инструмент)`,
    placeholder: 'Ваш инструмент',
    component: 'input',
    optional: true,
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
    optional: true,
  },
  {
    label:
      'Поделитесь вашим свидетельством после участия в школе поклонения СКИНИЯ. Мы будем рады узнать, насколько этот проект повлиял на ваше служение!',
    placeholder: 'Ваше свидетельство',
    component: 'input',
    optional: true,
  },
  {
    label: 'Приобрести майку с логотипом (+20 BYN)',
    placeholder: 'Размер / Нет',
    component: 'select',
    options: ['M', 'S', 'L', 'Нет'],
    price: true,
    value: 'Нет',
  },
  {
    label: 'Приобрести шоппер с логотипом (+20 BYN)',
    placeholder: 'Да / Нет',
    component: 'select',
    options: ['Да', 'Нет'],
    price: true,
    value: 'Нет',
  },
]
