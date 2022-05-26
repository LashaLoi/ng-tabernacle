import { Suspense, useCallback } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Canvas } from '@react-three/fiber'
import { Stars } from '../components/tree/star'
import HomeModule from '../modules/home'
import { FadeIn } from '../components/fade-in'
import Image from 'next/image'
import logo from '../public/skinia.svg'

export const defaultVariants = {
  hidden: { opacity: 0 },
  enter: { opacity: 1 },
  exit: { opacity: 0 },
}

export const arrowDown = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-7 w-7"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M16.707 10.293a1 1 0 010 1.414l-6 6a1 1 0 01-1.414 0l-6-6a1 1 0 111.414-1.414L9 14.586V3a1 1 0 012 0v11.586l4.293-4.293a1 1 0 011.414 0z"
      clipRule="evenodd"
    />
  </svg>
)

export default function Home() {
  const handleClick = useCallback(() => {
    scroll({
      top: 1000,
      behavior: 'smooth',
    })
  }, [])

  return (
    <motion.div
      variants={defaultVariants}
      initial="hidden"
      animate="enter"
      exit="exit"
      transition={{ duration: 0.3 }}
    >
      <Head>
        <title>Tabernacle</title>
      </Head>
      <div className="relative flex flex-wrap md items-center h-screen bg-[#100120]">
        <div className="w-full md:w-1/2 h-screen relative">
          <div className="absolute top-0 w-full h-full flex justify-center flex-col overflow-hidden">
            <div className="flex flex-col justify-center items-center">
              <FadeIn delay={0.2}>
                <Image
                  src={logo.src}
                  alt="logo"
                  height={500}
                  width={500}
                  priority
                />
              </FadeIn>
            </div>
            <FadeIn delay={0.3}>
              <div className="container px-5 mx-auto text-gray-300">
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
                    Господу Богу твоему поклоняйся и Ему одному служи
                  </p>
                  <p className="text-gray-400 mt-6">Матфея 4:10</p>
                </div>
              </div>
            </FadeIn>
          </div>
          <Suspense fallback={null}>
            <Canvas
              dpr={[1, 2]}
              camera={{ position: [0, 0, 10], fov: 5 }}
              style={{ height: '100vh' }}
            >
              <Stars />
            </Canvas>
          </Suspense>
          <div className="absolute sm:hidden block w-full bottom-4 text-white flex justify-center">
            <div className="cursor-pointer" onClick={handleClick}>
              {arrowDown}
            </div>
          </div>
        </div>
        <div className="bg-white w-full md:w-1/2 h-screen">
          <HomeModule />
        </div>
      </div>
    </motion.div>
  )
}
