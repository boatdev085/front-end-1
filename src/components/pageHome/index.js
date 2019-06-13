import React from 'react'
import styled from 'styled-components'
import HeaderMenu from './HeadMenu/index'
import GalleryImage from './GalleryImage/index'
import MenuCollection from './MenuCollection/index'
import CollectionBox from './CollectionBox/index'
const Container = styled.div`
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const pageHome = () => {
  return (
    <Container>
      <HeaderMenu />
      <GalleryImage />
      <MenuCollection />
      <CollectionBox />
    </Container>
  )
}
export default pageHome
