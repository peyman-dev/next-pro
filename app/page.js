import Hero from '@/components/layouts/pages/home/Hero'
import LatestQuestions from '@/components/layouts/pages/home/LatestQuestions'
import React from 'react'



const page = async () => {

  return (
    <>
      <main className='sm:py-10 mb-20 space-y-32'>
        <Hero />
        <LatestQuestions />
      </main>
    </>
  )
}

export default page