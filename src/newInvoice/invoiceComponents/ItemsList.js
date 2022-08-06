import React from 'react'
import styled from 'styled-components'

const ItemsList = () => {
  return (
    <Main className="itemList">ItemsList</Main>
  )
}
 
const Main = styled.div`

& .itemList{
  
   height:40%;
 }

`

export default ItemsList