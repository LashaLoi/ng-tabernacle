import { Suspense, useCallback } from 'react'
import Head from 'next/head'
import { motion } from 'framer-motion'

import { Canvas } from '@react-three/fiber'
import { Stars } from '../components/tree/star'
import HomeModule from '../modules/home'
import { FadeIn } from '../components/fade-in'
import Image from 'next/image'
import logo from '../public/logo.svg'

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
          <div className="absolute top-0 w-full h-full flex justify-center">
            <div className="flex flex-col justify-center items-center">
              <FadeIn delay={0.2}>
                <Image
                  src={logo.src}
                  alt="logo"
                  height={200}
                  width={300}
                  priority
                />
              </FadeIn>
              <FadeIn delay={0.4}>
                <h1 className="main-title text-4xl mb-6">NEW GENERATION</h1>
              </FadeIn>
            </div>
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
          <div className="absolute sm:hidden block w-full bottom-20 text-white flex justify-center">
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
