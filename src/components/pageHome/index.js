import React from 'react'
import styled from 'styled-components'
import Header from '../../common/Header/index'
import HeaderMenu from './HeadMenu/index'
import GalleryImage from './GalleryImage/index'
import MenuCollection from './MenuCollection/index'
import CollectionBox from './CollectionBox/index'
const Container = styled.div`
  position: relative;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    display: none;
  }
`
const pageHome = () => {
  return (
    <Container>
      <Header />
      <HeaderMenu />
      <GalleryImage />
      <MenuCollection />
      <CollectionBox />
    </Container>
  )
}
export default pageHome
