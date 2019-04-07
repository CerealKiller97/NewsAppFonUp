import React, { useState } from 'react';

import {
  Form,
  FormGroup,
  Input
} from 'reactstrap'

const Search = () => {
  const [term, setTerm] = useState('')

  return (
    <div className="my-3">
      <Form>
        <FormGroup>
          <Input 
            type="text"
            name="term"
            onInput={e => setTerm(e.target.value)}
          />
        </FormGroup>
      </Form>
    </div>
  )
}

export default Search
