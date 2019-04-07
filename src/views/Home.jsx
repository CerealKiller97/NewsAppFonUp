import React, { useState, useEffect } from 'react'

import Search from '../components/Search'
import NewsCard from '../components/NewsCard'

import axios from 'axios'

const Home = () => {
  const [articles, setArticles] = useState([])

  useEffect(() => {
    axios.get('https://mysterious-savannah-50993.herokuapp.com/news')
      .then(res => setArticles(res.data.results))
      .catch(err => console.error(err))
  }, [])

  const listNews = articles.map(article => <NewsCard article={article} key={article.id} />)

  return (
    <>
      <Search />
      {
        articles.length 
        ? listNews
        : 'No articles'
      }
    </>
  )
}


export default Home
