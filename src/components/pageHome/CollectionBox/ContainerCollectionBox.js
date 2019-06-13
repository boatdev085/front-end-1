import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100%;
  background-color: #f8f8f8;
  margin-top: 0.5rem;
`
const ContainerCollectionBox = props => {
  return <Container>{props.children}</Container>
}
export default ContainerCollectionBox
