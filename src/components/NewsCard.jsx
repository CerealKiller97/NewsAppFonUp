import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap'

const NewsCard = props => {
  const { id, title, urlToImage } = props.article
  return (
    <>
      <Card className="my-4">
        <CardImg
          top
          width="100%"
          src={urlToImage}
          alt={title}
        />
        <CardBody>
          <CardTitle>{title}</CardTitle>
          <Button 
            color="danger"
            tag={Link}
            to={`/article/${id}`}>Read More</Button>
        </CardBody>
      </Card>
    </>
  )
}

NewsCard.propTypes = {
 article: PropTypes.object.isRequired
}

export default NewsCard