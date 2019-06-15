import React from 'react'
import styled from 'styled-components'
import ImgPlus from '../../assets/icon/add.png'
import ImgSearch from '../../assets/icon/search.png'

const Container = styled.div`
  position: relative;
  background-color: #2e2e30;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
  padding: 1rem 0;
`
const MenuLeft = styled.div`
  color: white;
  flex: 0.2;
`
const BoxHamburger = styled.div`
  position: relative;
  img {
    width: 50%;
    margin-left: 20px;
  }
`
const MenuCenter = styled.div`
  position: relative;
  color: white;
  flex: 0.8;
  text-align: center;
  margin-top: 0.5rem;
  img {
    width: 5%;
    margin-left: 2.5rem;
    position: absolute;
    top: 5px;
  }
`
const MenuRight = styled.div`
  color: white;
  flex: 0.2;
  margin-top: 0.5rem;
`
const BoxPlus = styled.div`
  img {
    width: 30%;
  }
`
const HeaderLibrary = () => {
  return (
    <Container>
      <MenuLeft>
        <BoxHamburger>
          <img
            src="https://www.stickpng.com/assets/images/588a64e7d06f6719692a2d11.png"
            alt="hamburger"
          />
        </BoxHamburger>
      </MenuLeft>
      <MenuCenter>
        Library
        <img src={ImgSearch} alt="search" />
      </MenuCenter>
      <MenuRight>
        <BoxPlus>
          <img src={ImgPlus} alt="plus" />
        </BoxPlus>
      </MenuRight>
    </Container>
  )
}

export default HeaderLibrary
