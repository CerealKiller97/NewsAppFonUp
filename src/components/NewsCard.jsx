import React from 'react'
import PropTypes from 'prop-types'

import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button
} from 'reactstrap'

const NewsCard = props => {
  const { id, author, title, urlToImage, publishedAt } = props.article
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
          <Button color="danger">Read More</Button>
        </CardBody>
      </Card>
    </>
  )
}

NewsCard.propTypes = {
 article: PropTypes.object.isRequired
}

export default NewsCard