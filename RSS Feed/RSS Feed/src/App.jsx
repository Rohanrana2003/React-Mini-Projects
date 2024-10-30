import axios from 'axios'

import { useState, useEffect } from 'react'
import Feed from './components/feed';


function App() {

  const [articles, setArticles] = useState([]);


  const getArticles = async () => {
    try {

      const result = await axios.get('http://localhost:4000/')
      setArticles(result.data);

    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, [])


  return (
    <>
      <h4 className='text-2xl font-semibold text-center mt-2 mb-4'>Good Morining</h4>
      <h1 className='text-4xl font-semibold text-center mt-2 mb-4'>Here are your Articles</h1>



      <div className='w-3/4 max-w-lg border mx-auto p-5 rounded-xl'>

        <div className='bg-black flex flex-col items-center rounded-lg py-2 mb-5 px-6 '>
          <img src="https://cdn-images-1.medium.com/v2/resize:fit:606/1*rOPLUJ3W6FUA3rO1U1IeuA@2x.png" alt="" />
        </div>
        {articles.map((e, i) =>
          <Feed
            key={i}
            title={e.e.title}
            link={e.e.link}
            date={e.e.pubDate}
          />
        )}
      </div>


    </>
  )
}

export default App
