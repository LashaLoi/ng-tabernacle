import Header from '../components/header'
import PageWrapper from '../components/page-wrapper'

export default function About() {
  return (
    <PageWrapper itemKey="about">
      <div className="relative w-full overflow-x-hidden">
        <Header />

        <div className="container  px-6 mx-auto sm:text-2xl flex justify-center flex-col items-center">
          <h2 className="text-3xl font-bold mb-12 text-blue-900">О школе</h2>
          <section className="mb-32 text-gray-800 max-w-[800px]">
            <p className="mb-8 text-justify">
              Служение прославления было и остается одним из важнейших
              составляющих любой современной церкви. Это служение требует,
              высокого мастерства, как в духовных, так и в профессиональных
              навыках.
            </p>
            <p className="mb-10 text-justify">
              Школа поклонения{' '}
              <span className="main-title font-extrabold">СКИНИЯ</span> - это
              грамотное и разумное вложение своего времени и ресурсов, потому
              что за эти дни каждый участник найдет для себя массу ответов и
              получит стратегию и план для реформации своего служения, переведя
              его на качественно новый уровень для славы нашего{' '}
              <span className="font-bold text-blue-900">
                Господа Иисуса Христа.
              </span>
            </p>

            <p className="mb-2">Основные направления:</p>
            <ul className="ml-4 text-gray-500">
              <li>- учение о поклонении </li>
              <li>- практическое применение знаний</li>
              <li>- пророческое поклонение</li>
              <li>- знакомство, общение</li>
              <li>- обмен опытом</li>
            </ul>
          </section>
        </div>

        <div className="container sm:mt-24 mt-4 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-12 text-blue-900">
              Педагогическая команда
            </h2>

            <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-32">
              <div className="mb-6 lg:mb-0">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/1.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Леонид Вороненко</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                      Старший пастор церквей «Новое Поколение» в Беларуси{' '}
                    </p>
                  </div>
                </div>
              </div>

              <div className="sm:mb-24 mb-6">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/2.jpg" className="w-full rounded-t-lg max-h-[300px] object-cover" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Виталий Шушкевич</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                      Автор и исполнитель песен, лидер служения прославления
                      церкви «Новое Поколение» г. Барановичи{' '}
                    </p>
                  </div>
                </div>
              </div>

              <div className="">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/3.jpg" className="w-full rounded-t-lg" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,288L48,256C96,224,192,160,288,160C384,160,480,224,576,213.3C672,203,768,117,864,85.3C960,53,1056,75,1152,69.3C1248,64,1344,32,1392,16L1440,0L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Сергей Кобрин</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                      Звукорежиссёр, педагог, автор и исполнитель песен,
                      основатель группы «Деяния», руководитель музыкальных
                      проектов церкви{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:mb-24 mb-6">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/4.jpg" className="w-full rounded-t-lg max-h-[300px] object-cover object-center" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Наталья Байкс</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                      Педагог по вокалу и сценическому мастерству, автор и
                      исполнитель песен, лидер прославления церкви «Новое
                      Поколение» г. Юрмала, Латвия.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:mb-24 mb-6">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/5.jpg" className="w-full rounded-t-lg max-h-[300px] object-cover" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Нормунд Пиесис</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                      Магистр музыки, педагог джазовой импровизации,
                      руководитель ансамблей в ВУЗ, участник и солист
                      Латвийского биг-бэнда, участник международных проектов
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:mb-24 mb-6">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/9.jpg" className="w-full rounded-t-lg max-h-[300px] object-cover" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Станислав Янчин</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                    Музыкальный руководитель ц. &quot;Иисуса Христа&quot;, бас- гитарист, звукорежиссёр, автор инструментальной музыки. Преподаватель музыкального отделения хрестианского колледжа &quot;ХДН&quot; по предмету &quot;бас-гитара&quot; и &quot;ансамбль&quot;. Организатор и участник межцерковных музыкальных проектов. 
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:mb-24 mb-6">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/10.jpg" className="w-full rounded-t-lg max-h-[300px] object-cover object-top" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Любовь Янчина</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                    Артистка балета народного танца высшей категории (БГЗХА &quot;Хорошки&quot;). Педагог-хореограф первой категории (стаж работы 20 лет). Основатель и руководитель хрестианской танцевальной группы &quot;Радость Сиона&quot;. Участник межцерковных творческих проектов.
                    </p>
                  </div>
                </div>
              </div>
              <div className="sm:mb-24"mb-6>
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/11.jpg" className="w-full rounded-t-lg max-h-[300px] object-cover" />
                    <a href="#!">
                      <div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"></div>
                    </a>
                    <svg
                      className="absolute"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 1440 320"
                      style={{ left: 0, bottom: 0 }}
                    >
                      <path
                        fill="#fff"
                        d="M0,96L48,128C96,160,192,224,288,240C384,256,480,224,576,213.3C672,203,768,213,864,202.7C960,192,1056,160,1152,128C1248,96,1344,64,1392,48L1440,32L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                      ></path>
                    </svg>
                  </div>
                  <div className="p-6">
                    <h5 className="text-lg font-bold mb-4">Дарья Янчина</h5>
                    <p className="text-gray-500 mb-4 sm:text-base text-sm">
                    Артистка балета народного танца высшей категории (Гос.ансамбль танца Беларуси). Педагог-хореограф. Лидер хрестианской танцевальной группы  &quot;Радость Сиона&quot;, лидер Творческой лаборатории ц. &quot;Иисуса Христа&quot; (г.Минск), участник группы прославления, участник межцерковных творческих проектов.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </PageWrapper>
  )
}
