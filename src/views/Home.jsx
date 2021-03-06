import React, { useState, useEffect } from 'react'

import Search from '../components/Search'
import NewsCard from '../components/NewsCard'

import http from '../services';
import Loading from '../components/Loading';

const Home = () => {
  const [articles, setArticles] = useState([])

  const fetchData = async () => {
    const res = await http.get('/news')
    setArticles(res.data.results)
  }

  useEffect(() => {
    fetchData()
  }, [])

  const newsList = articles.map(article => <NewsCard article={article} key={article.id} />)

  return (
    <>
      <Search articles={articles} />
      {
        articles.length ? newsList : <Loading />
      }
    </>
  )
}

export default Home
