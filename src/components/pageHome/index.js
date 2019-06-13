import React from 'react'
import HeaderMenu from './HeadMenu/index'
import GalleryImage from './GalleryImage/index'
import MenuCollection from './MenuCollection/index'
import CollectionBox from './CollectionBox/index'
const pageHome = () => {
  return (
    <>
      <HeaderMenu />
      <GalleryImage />
      <MenuCollection />
      <CollectionBox />
    </>
  )
}
export default pageHome
