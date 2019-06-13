import React, { useState, useEffect } from 'react'
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
  const { img, imgHover, name, activeMenu } = props
  const [useImage, setImage] = useState(img || null)
  // const setHoverImage = () => {
  //   setImage(imgHover)
  // }
  // const resetHoverImage = () => {
  //   setImage(img)
  // }
  useEffect(() => {
    if (activeMenu === name) {
      setImage(imgHover)
    } else {
      setImage(img)
    }
    // eslint-disable-next-line
  }, [activeMenu])
  return (
    <FadeImage
      // onMouseOver={setHoverImage}
      // onMouseOut={resetHoverImage}
      src={useImage}
      alt="menu"
    />
  )
}
export default ImageHover
