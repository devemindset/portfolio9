"use client"
import type { FC } from 'react';
import { motion } from "framer-motion";
import Image from 'next/image';

import SmartLink from './ui/SmartLink';
import Round from './ui/Round';




const Hero: FC = () => {
        return (
            <>

            
            <section className='relative flex-col flex w-screen lg:h-screen bg-[var(--hero-bg)]   lg:flex-row md:flex-col  h-full'>
                
               

                
                {/* container 1  */}
                <div className='relative block lg:flex flex-col text-[var(--text-element)]  lg:w-full 2xl:pt-52 xl:pt-32 pt-28 pb-5 px-10 md:w-[550px] md:ml-24  z-10 xl:mt-36 2xl:mt-96'>
                <motion.h1 className=' font-bold 2xl:text-5xl xl:text-3xl text-xl mb-3'
                    initial= {{ opacity:0, y: -100 }}
                    animate = {{opacity : 1, y: 0}}
                    transition={{ duration:1, delay:0.6}}
                >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, tempora a. Maxime.</motion.h1>
                <motion.h3 className=' italic 2xl:text-3xl xl:text-xl text-sm mb-10'
                initial= {{ opacity:0, y: -100 }}
                animate = {{opacity : 1, y: 0}}
                transition={{ duration:1, delay:0.7}}
                >
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores rem quidem culpa!
                </motion.h3>
                <SmartLink href='/about' className='bg-[var(--btn-bg)] md:py-2 px-10 text-[var(--btn-text)] mt-10  font-semibold hover:scale-105 hover:bg-[var(--btn-hover)] transition-all cursor-pointer shadow-2xl xl:w-[250px]  xl:text-sm w-[200px] py-2   h-auto text-center'>ABOUT ME</SmartLink>
              
                    
                </div>
                {/* container 2  */}
                <div className='relative block lg:flex justify-center items-center h-[550px] lg:h-screen w-screen '>
                    <div className='absolute w-full h-full bg-[var(--rounded)]/40 z-10' />
                    <div className=' relative w-full h-full'>
                        <Image
                            src="/images/hero.jpg"
                            fill
                            alt='hero image'
                            className='object-cover'
                            property=''
                            


                        />
                    </div>
                    
                </div>
              <Round className=' bg-[var(--rounded)]/40  absolute w-[250px] h-[250px] right-0 rotate-45  ' />
              <Round className=' bg-[var(--rounded)]/40  absolute w-[250px] h-[250px] bottom-0 left-0 rotate-45  ' />
              <Round className=' bg-[var(--rounded)]/40  absolute w-[350px] h-[350px] -top-32 -left-5 rotate-45  z-0' />

              <Round className='hidden 2xl:block bg-[var(--rounded)]/40  absolute w-[550px] h-[550px] left-96 top-92 rotate-12  z-0' />
            </section>
            </>
        );
}
export default Hero;