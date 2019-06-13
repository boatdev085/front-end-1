import React from 'react'
import styled from 'styled-components'
import AliceCarousel from 'react-alice-carousel'
import 'react-alice-carousel/lib/alice-carousel.css'
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
  p {
    padding: 0;
    margin: 0;
    color: gray;
  }
`
const StyleAliceCarousel = styled(AliceCarousel)`
  ul {
    margin: 0 !important;
  }
`
const CollectionRecommended = props => {
  const { item } = props
  const responsive = { 0: { items: 3 } }
  const { Books } = item
  if (!item || item.length === 0) {
    return null
  }
  return (
    <StyleAliceCarousel
      items={Books.map((item, idx) => {
        const { Img, Name } = item
        return (
          <BoxImage key={idx}>
            <div>
              <img src={process.env.REACT_APP_BOOK_IMAGE + Img} alt="books" />
            </div>
            <p>{Name}</p>
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
  )
}

export default CollectionRecommended
