export default function Home() {
  return (
    <div className="absolute top-0  w-full h-full flex justify-center">
      <div className="w-full mt-5 flex flex-col justify-center items-center">
        <h1 className="main-title text-4xl mb-4">NEW GENERATION</h1>
        <div className="h-[1px] w-28 bg-gradient-to-r from-[#c850c0] to-blue-500 mb-12"></div>
        <div className="flex">
          <button className="w-[130px] text-white bg-gradient-to-br from-purple-600 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm text-center mx-2 mb-2">
            Регистрация
          </button>
          <button className="w-[130px] text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">
            Программа
          </button>
          <button className="w-[130px] text-white bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-1 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">
            Контакты
          </button>
          <button className="w-[130px] text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-1 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mx-2 mb-2">
            Галерея
          </button>
        </div>
      </div>
    </div>
  )
}
