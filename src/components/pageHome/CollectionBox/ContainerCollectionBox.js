import React from 'react'
import styled from 'styled-components'
import CollectionRecommended from './CollectionRecommended'
import CollectionCompleted from './CollectionCompleted'
import CollectionTop from './CollectionTop'
import CollectionNew from './CollectionNew'
const Container = styled.div`
  background-color: #f8f8f8;
  box-shadow: 0 1px 1px 1px rgba(157, 157, 157, 0.1);
  margin-top: 0.5rem;
  padding: 1rem;
`
const BoxTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
`
const Title = styled.div`
  font-weight: bold;
  font-size: 1rem;
  flex: 1;
  text-align: left;
`
const More = styled.div`
  flex: 1;
  text-align: right;
  font-size: 0.8rem;
  cursor: pointer;
  color: gray;
`
const selectComponents = item => {
  const { Category } = item
  switch (Category) {
    case 'Recommended':
      return <CollectionRecommended item={item} />
    case 'Top':
      return <CollectionTop item={item} />
    case 'New':
      return <CollectionNew item={item} />
    case 'Completed':
      return <CollectionCompleted item={item} />
    default:
      return null
  }
}
const ContainerCollectionBox = props => {
  const { item } = props
  return (
    <Container>
      <BoxTitle>
        <Title>{item.Category}</Title>
        <More>More ></More>
      </BoxTitle>
      {selectComponents(item)}
    </Container>
  )
}
export default ContainerCollectionBox
