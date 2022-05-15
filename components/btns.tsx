import Link from 'next/link'

export const Btns = () => (
  <>
    {' '}
    {/*<motion.div*/}
    {/*  initial="init"*/}
    {/*  animate="out"*/}
    {/*  variants={{*/}
    {/*    init: {*/}
    {/*      width: 0,*/}
    {/*    },*/}
    {/*    out: {*/}
    {/*      width: 200,*/}
    {/*    },*/}
    {/*  }}*/}
    {/*  transition={{*/}
    {/*    delay: 0.5,*/}
    {/*  }}*/}
    {/*  className="h-[1px] bg-gradient-to-r from-[#c850c0] to-blue-500 mb-14"*/}
    {/*/>*/}
    <div className="flex sm:flex-row flex-col">
      <Link href="/registration">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-br from-purple-600 to-blue-500  hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Регистрация
        </a>
      </Link>
      <Link href="/program">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Программа
        </a>
      </Link>
      <Link href="/about">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Контакты
        </a>
      </Link>
      <Link href="/gallery">
        <a className="sm:w-[130px] w-[200px] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium text-sm sm:py-2 py-1 text-center mx-2 mb-4">
          Галерея
        </a>
      </Link>
    </div>
    {/*<Form.Item*/}
    {/*  name="fullName"*/}
    {/*  label="ФИО"*/}
    {/*  rules={[*/}
    {/*    {*/}
    {/*      required: true,*/}
    {/*      message: 'Пожалуйста введите свое ФИО.',*/}
    {/*    },*/}
    {/*  ]}*/}
    {/*>*/}
    {/*  <Input placeholder="Иван Иванович Иванов" />*/}
    {/*</Form.Item>*/}
    {/*{step === 2 && (*/}
    {/*  <Form.Item*/}
    {/*    name="date-picker"*/}
    {/*    label="Дата рождения"*/}
    {/*    rules={[*/}
    {/*      {*/}
    {/*        type: 'object' as const,*/}
    {/*        required: true,*/}
    {/*        message: 'Please select time!',*/}
    {/*      },*/}
    {/*    ]}*/}
    {/*  >*/}
    {/*    <DatePicker style={{ width: '100%' }} />*/}
    {/*  </Form.Item>*/}
    {/*)}*/}
    {/*<Form.Item*/}
    {/*  name="city"*/}
    {/*  label="Город"*/}
    {/*  rules={[*/}
    {/*    {*/}
    {/*      required: true,*/}
    {/*      message: 'Пожауйста введите ваш Город.',*/}
    {/*    },*/}
    {/*  ]}*/}
    {/*>*/}
    {/*  <Input placeholder="Минск" />*/}
    {/*</Form.Item>*/}
    {/*<Form.Item*/}
    {/*  name="phone"*/}
    {/*  label="Телефон"*/}
    {/*  rules={[*/}
    {/*    {*/}
    {/*      required: true,*/}
    {/*      message: 'Пожауйста введите ваш Телефон.',*/}
    {/*    },*/}
    {/*  ]}*/}
    {/*>*/}
    {/*  <Input addonBefore={prefixSelector} style={{ width: '100%' }} />*/}
    {/*</Form.Item>*/}
    {/*<Form.Item*/}
    {/*  name="email"*/}
    {/*  label="Email"*/}
    {/*  rules={[*/}
    {/*    {*/}
    {/*      type: 'email',*/}
    {/*      message: 'Введите валидный Email.',*/}
    {/*    },*/}
    {/*    {*/}
    {/*      required: true,*/}
    {/*      message: 'Пожауйста введите ваш Email.',*/}
    {/*    },*/}
    {/*  ]}*/}
    {/*>*/}
    {/*  <Input placeholder="lashaloi1409@gmail.com" />*/}
    {/*</Form.Item>*/}
    {/*<Form.Item*/}
    {/*  name="church"*/}
    {/*  label="Церковь"*/}
    {/*  rules={[*/}
    {/*    {*/}
    {/*      required: true,*/}
    {/*      message: 'Пожалуйста введите название церкви.',*/}
    {/*    },*/}
    {/*  ]}*/}
    {/*>*/}
    {/*  <Input placeholder="Новое Поколение" />*/}
    {/*</Form.Item>*/}
    {/*<Form.Item*/}
    {/*  name="ministry"*/}
    {/*  label="Ваше служение в церкви"*/}
    {/*  rules={[{ required: true, message: 'Выберите ваше служение.' }]}*/}
    {/*>*/}
    {/*  <Select placeholder="Выберите ваше служение">*/}
    {/*    <Option value="singLeader">Лидер прославления</Option>*/}
    {/*    <Option value="sing">Служитель прославления</Option>*/}
    {/*    <Option value="pastor">Пастор</Option>*/}
    {/*    <Option value="pastorHelper">Помощник пастора</Option>*/}
    {/*    <Option value="otherMinistry">Другое служение</Option>*/}
    {/*    <Option value="none">Не несу служение</Option>*/}
    {/*    <Option value="noneInChurch">Не прихожанин церкви</Option>*/}
    {/*  </Select>*/}
    {/*</Form.Item>*/}
    {/*{ministry === 'otherMinistry' && (*/}
    {/*  <Form.Item*/}
    {/*    name="otherMinistry"*/}
    {/*    label="Другое служение"*/}
    {/*    rules={[*/}
    {/*      {*/}
    {/*        required: true,*/}
    {/*        message: 'Пожалуйста введите название служения.',*/}
    {/*      },*/}
    {/*    ]}*/}
    {/*  >*/}
    {/*    <Input placeholder="Стулья раставляю" />*/}
    {/*  </Form.Item>*/}
    {/*)}*/}
    {/*<Form.Item*/}
    {/*  name="days"*/}
    {/*  label="Количество дней"*/}
    {/*  rules={[*/}
    {/*    {*/}
    {/*      required: true,*/}
    {/*      message: 'Пожалуйста введите количество дней.',*/}
    {/*    },*/}
    {/*  ]}*/}
    {/*>*/}
    {/*  <InputNumber placeholder="Дни" />*/}
    {/*</Form.Item>*/}
    {/*<Form*/}
    {/*  form={form}*/}
    {/*  name="register"*/}
    {/*  layout="vertical"*/}
    {/*  onFinish={onFinish}*/}
    {/*  initialValues={{*/}
    {/*    prefix: '33',*/}
    {/*  }}*/}
    {/*  scrollToFirstError*/}
    {/*></Form>*/}
  </>
)
