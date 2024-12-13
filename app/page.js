import ExploreLanguages from '@/components/layouts/pages/home/explore-languages'
import Hero from '@/components/layouts/pages/home/Hero'
import React from 'react'
import { getLanguages } from './actions'
import TrendingQuestions from '@/components/layouts/pages/home/trending-questions'

const page = async () => {
  const langs_res = await getLanguages()


  return (
    <>
      <main tabIndex={"1"} className='lg:mb-20 group-has-focus:bg-black space-y-32'>
        <Hero />
        <ExploreLanguages langs={langs_res.languages} />
        <TrendingQuestions />
      </main>
    </>
  )
}

export default page