export const questions = [
  {
    label: 'ФИО',
    placeholder: 'Лой Алексей Павлович',
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
    label: 'Пожертвование (BYN)',
    placeholder: 'Сумма',
    component: 'input',
  },
]
