import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
const Container = styled.div`
  margin-bottom: 5rem;
`
const BoxImage = styled.div`
  padding: 1rem 0 0 0;
  width: 100%;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  div img {
    width: 70%;
  }
`
const NameBox = styled.p`
  padding: 0;
  margin: 0;
  color: black;
  font-size: 1rem;
`
const AuthorBox = styled.p`
  padding: 0;
  margin: 0;
  color: gray;
  word-wrap: break-word;
  width: 90%;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`
const CollectionRecommended = props => {
  const { item } = props
  const responsive = { 0: { items: 3 } }
  const { Books } = item
  if (!item || item.length === 0) {
    return null
  }
  return (
    <Container>
      <AliceCarousel
        items={Books.map((item, idx) => {
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
        responsive={responsive}
        autoPlayDirection="ltr"
        // autoPlay={true}
        fadeOutAnimation={true}
        mouseDragEnabled={true}
        buttonsDisabled={true}
        dotsDisabled={true}
      />
    </Container>
  )
}

export default CollectionRecommended
