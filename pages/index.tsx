import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <div className='container mx-auto px-64'>
      <Head>
        <title>Monthly Reviews</title>
        <meta name="description" content="Monthly reviews" />
        <link rel="icon" href="/favicon.ico" />
        {/* This may not work. See console error and then fix it */}
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      </Head>
      <div className='flex justify-start'>
        <h1 className='text-3xl font-extrabold tracking-widest'>
          October 18th, 2022
        </h1>
      </div>

      <div>
        <label htmlFor="comment" className="block text-sm font-medium text-gray-700">
          What were my biggest wins?
        </label>
        <div className="mt-1">
          <textarea
            rows={4}
            name="comment"
            id="comment"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
            defaultValue={''}
          />
        </div>
      </div>
    </div>
  )
}

export default Home
