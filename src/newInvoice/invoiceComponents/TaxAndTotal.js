import React from 'react'
import styled from 'styled-components'

function TaxAndTotal() {
  return (
    <Main className="taxAndTotal">TaxAndTotal</Main>
  )
}

const Main = styled.div`
 & .taxAndTotal{
  
   height:20%;
 }
`

export default TaxAndTotal