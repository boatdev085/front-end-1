import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 3rem;
`
const BoxImage = styled.div`
  padding: 1rem 0 0 0;
  width: 100%;
  text-align: center;
  flex: 1 0 30%;
  div img {
    width: 70%;
    height: 100%;
  }
`
const NameBox = styled.div`
  padding: 0;
  margin: 0;
  color: black;
  font-size: 1rem;
`
const AuthorBox = styled.div`
  padding: 0;
  margin: 0;
  color: gray;
  word-wrap: break-word;
  width: 90%;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`
const CollectionCompleted = props => {
  const { item } = props
  const { Books } = item
  if (!item || item.length === 0) {
    return null
  }
  return (
    <Container>
      {Books.map((item, idx) => {
        const { Img, Name, Author } = item
        return (
          <BoxImage key={idx}>
            <div>
              <img src={process.env.REACT_APP_BOOK_IMAGE + Img} alt="books" />
            </div>
            <NameBox>{Name}</NameBox>
            <AuthorBox>{Author}</AuthorBox>
          </BoxImage>
        )
      })}
    </Container>
  )
}

export default CollectionCompleted
