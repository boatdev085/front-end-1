import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ImageGallery from 'react-image-gallery'
import 'react-image-gallery/styles/css/image-gallery.css'
import Constants from '../../../constants/index'

const GalleryImage = () => {
  const [useImage, setImage] = useState([])
  const convertData = arr => {
    return arr.map(item => {
      item.original = item.imgurl
      return item
    })
  }
  useEffect(() => {
    axios
      .get(Constants.HOST + Constants.API.banner)
      .then(res => {
        const { data } = res
        if (data.data || data.data.length > 0) {
          setImage(data.data)
        } else {
          setImage([])
        }
      })
      .catch(e => {
        setImage([])
      })
  }, [])
  return (
    <ImageGallery
      showPlayButton={false}
      showFullscreenButton={false}
      showThumbnails={false}
      showNav={false}
      showBullets={true}
      lazyLoad={true}
      autoPlay={true}
      items={convertData(useImage)}
    />
  )
}
export default GalleryImage
