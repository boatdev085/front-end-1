import React, { useState } from 'react'
import styled from 'styled-components'
const FadeImage = styled.img`
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  animation: fadeIn 0.4s;
`
const ImageHover = props => {
  const { img, imgHover } = props
  const [useImage, setImage] = useState(img || null)
  const setHoverImage = () => {
    setImage(imgHover)
  }
  const resetHoverImage = () => {
    setImage(img)
  }
  return (
    <FadeImage
      onMouseOver={setHoverImage}
      onMouseOut={resetHoverImage}
      src={useImage}
      alt="menu"
    />
  )
}
export default ImageHover
