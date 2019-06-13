import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import ImageHover from '../ImgHover/index'
import SC from '../../assets/icon/sc.png'
import SC_SELECT from '../../assets/icon/sc_select.png'
import SD from '../../assets/icon/sd.png'
import SD_SELECT from '../../assets/icon/sd_select.png'
import SJ from '../../assets/icon/sj.png'
import SJ_SELECT from '../../assets/icon/sj_select.png'
const arrMenu = [
  { img: SJ, imgHover: SJ_SELECT, name: 'Library', link: '/library' },
  { img: SC, imgHover: SC_SELECT, name: 'Home', link: '/home' },
  { img: SD, imgHover: SD_SELECT, name: 'Ranking', link: '/ranking' }
]
const Container = styled.div`
  background-color: black;
  width: 100%;
  position: fixed;
  bottom: 0;
  display: flex;
  flex-direction: row;
  overflow: scroll;
  padding: 0.5rem 0 0.5rem 0;
  color: gray;
  text-align: center;
  justify-content: center;
`
const BoxMenu = styled.div`
  flex: 1;
  img {
    width: 30%;
  }
  div {
    position: relative;
    top: -0.2rem;
  }
`
const MenuBottom = () => {
  if (arrMenu.length === 0) {
    return <Container>Coming Soon</Container>
  }
  return (
    <Container>
      {arrMenu.map((item, idx) => {
        const { img, imgHover, name, link } = item
        return (
          <BoxMenu key={idx}>
            <Link to={link}>
              <ImageHover img={img} imgHover={imgHover} />
              <div>{name}</div>
            </Link>
          </BoxMenu>
        )
      })}
    </Container>
  )
}

export default MenuBottom
