import React, { useState } from 'react';

import {
  Form,
  FormGroup,
  Input
} from 'reactstrap'

const Search = props => {
  const [term, setTerm] = useState('')
  const articles = props.articles
  
  const filterData = e => {
    e.preventDefault()
    setTerm(e.target.value)
    const searchTerm = term.toLowerCase()
    
    const filteredArticles = articles.filter(article => {
      return article.title.toLowerCase().includes(searchTerm)
    })

    // passing data to Home component left (children to parent communication)
    return filteredArticles
  }

  return (
    <div className="my-3">
      <Form>
        <FormGroup>
          <Input 
            type="text"
            name="term"
            placeholder="Search news..."
            onChange={e => filterData(e)}
          />
        </FormGroup>
      </Form>
    </div>
  )
}

export default Search
