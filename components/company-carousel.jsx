'use client'
import React from 'react'
import { Carousel, CarouselContent, CarouselItem } from './ui/carousel'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import compaines from '@/data/companies'
const CompanyCarousel = () => {
  return (
    <Carousel 
    plugins={[
      Autoplay({
        delay:2000,
      }),
    ]} className='w-full py-10'>
      <CarouselContent className='flex gap-5 sm:gap-20 items-center'> 
        {compaines.map(({name,path,id})=>{
        return <CarouselItem className='basis-1/3 lg:basis-1/6' key={id}>
        <Image  src={path} alt={name} width='200' height='56' className='h-9 sm:h-14 w-auto object-contain' />
        </CarouselItem>
      })}</CarouselContent>
    </Carousel>
  )
}


export default CompanyCarousel
