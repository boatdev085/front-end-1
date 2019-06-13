import React from 'react'
import styled from 'styled-components'
import Recommend from '../../../assets/icon/sc_icon_tj.png'
import Collect from '../../../assets/icon/sc_icon_sc.png'
import Rating from '../../../assets/icon/sc_icon_pf.png'
import Completed from '../../../assets/icon/sc_icon_wj.png'
import Popular from '../../../assets/icon/sc_icon_rg.png'

const Container = styled.div`
  background-color: #f8f8f8;
  width: 100%;
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
    width: 45%;
    height: 60%;
  }
  div {
    position: relative;
    font-size: 0.8rem;
  }
`
const arrMenu = [
  { img: Recommend, name: 'Recommend' },
  { img: Collect, name: 'Collect' },
  { img: Rating, name: 'Rating' },
  { img: Completed, name: 'Completed' },
  { img: Popular, name: 'Popular' }
]
const HeaderMenu = () => {
  return (
    <Container>
      {arrMenu.map((item, idx) => {
        const { img, name } = item
        return (
          <BoxMenu key={idx}>
            <img src={img} alt={name} />
            <div>{name}</div>
          </BoxMenu>
        )
      })}
    </Container>
  )
}
export default HeaderMenu
