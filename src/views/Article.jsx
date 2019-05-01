import React, { useEffect, useState } from 'react'

import { Container, Card, CardImg } from 'reactstrap'

import http from '../services/'
import Loading from '../components/Loading';

const Article = props => {
  const id = props.match.params.id
  const [article, setArticle] = useState({})
  const [loaded, setLoaded] = useState(false)

  useEffect(() => {
    const getArticle = async id => {
      const response = await http.get(`/news/${id}`)
      setArticle(response.data.article)
    }
    getArticle(id)
  }, [])

  const renderArticle = () => {
    const { urlToImage, title, content, author, publishedAt } = article
    return (
      <Container>
      <Card className="my-4">
        <CardImg
          top
          width="100%"
          src={urlToImage}
          alt={title}
        />
      </Card>
      <div className="text-white">
        <h3>{title}</h3>
        <p className="text-center">{content}</p>
        <p><span>Author:</span> {author}</p>
        <p><span>Published at:</span> {publishedAt}</p>
      </div>
    </Container>
    )
  }

  return (
      loaded 
      ? renderArticle()
      : <Loading />
  )
}

export default Article
