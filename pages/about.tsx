import Header from '../components/header'
import PageWrapper from '../components/page-wrapper'

export default function About() {
  return (
    <PageWrapper key="about">
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

        <div className="container mt-24 px-6 mx-auto">
          <section className="mb-32 text-gray-800 text-center">
            <h2 className="text-3xl font-bold mb-12 text-blue-900">
              Педагогическая команда
            </h2>

            <div className="grid md:grid-cols-3 gap-x-6 lg:gap-x-12">
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
                    <p className="text-gray-500 mb-4">
                      Старший пастор церквей «Новое Поколение» в Беларуси{' '}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mb-6 lg:mb-0">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/2.jpg" className="w-full rounded-t-lg" />
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
                    <p className="text-gray-500 mb-4">
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
                    <p className="text-gray-500 mb-4">
                      Звукорежиссёр, педагог, автор и исполнитель песен,
                      основатель группы «Деяния», руководитель музыкальных
                      проектов церкви{' '}
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/4.jpg" className="w-full rounded-t-lg" />
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
                    <p className="text-gray-500 mb-4">
                      Педагог по вокалу и сценическому мастерству, автор и
                      исполнитель песен, лидер прославления церкви «Новое
                      Поколение» г. Юрмала, Латвия.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mb-6 lg:mb-0">
                <div className="bg-white block rounded-lg shadow-lg">
                  <div className="relative overflow-hidden bg-no-repeat bg-cover">
                    <img src="/5.jpg" className="w-full rounded-t-lg" />
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
                    <p className="text-gray-500 mb-4">
                      Магистр музыки, педагог джазовой импровизации,
                      руководитель ансамблей в ВУЗ, участник и солист
                      Латвийского биг-бэнда, участник международных проектов
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* <section className="text-gray-600 body-font mb-32">
          <div className="container px-5  mx-auto">
            <div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block w-8 h-8 text-gray-400 mb-8"
                viewBox="0 0 975.036 975.036"
              >
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
              </svg>
              <p className="leading-relaxed text-lg">
                Edison bulb retro cloud bread echo park, helvetica stumptown
                taiyaki taxidermy 90&apos;s cronut +1 kinfolk. Single-origin
                coffee ennui shaman taiyaki vape DIY tote bag drinking vinegar
                cronut adaptogen squid fanny pack vaporware. Man bun next level
                coloring book skateboard four loko knausgaard. Kitsch keffiyeh
                master cleanse direct trade indigo juice before they sold out
                gentrify plaid gastropub normcore XOXO 90&apos;s pickled cindigo
                jean shorts. Slow-carb next level shoindigoitch ethical
                authentic, yr scenester sriracha forage franzen organic drinking
                vinegar.
              </p>
              <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
              <h2 className="text-gray-900 font-medium title-font tracking-wider text-sm">
                HOLDEN CAULFIELD
              </h2>
              <p className="text-gray-500">Senior Product Designer</p>
            </div>
          </div>
        </section> */}
        </div>
      </div>
    </PageWrapper>
  )
}
