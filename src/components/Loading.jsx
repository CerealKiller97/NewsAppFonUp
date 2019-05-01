import React from 'react'

import { Spinner } from 'reactstrap'

const Loading = () => {
  return (
    <>
      <Spinner
        style={{ width: '10rem', height: '10rem' }}
        type="grow"
        color="light"
      />
    </>
  )
}

export default Loading
