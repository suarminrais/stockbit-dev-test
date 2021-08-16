import React from 'react'
import { SearchFieldContainer, SearchText } from './searchfield.styles'

const SearchField = ({ setCallback }) => {

  return (
    <SearchFieldContainer>
      <SearchText onChange={e => setCallback(e.target.value)} type="search" placeholder="Search Movie..." />
    </SearchFieldContainer>
  )
}

export default SearchField