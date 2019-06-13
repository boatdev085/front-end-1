import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  background-color: gray;
  width: 100%;
  display: flex;
  flex-direction: row;
`
const MenuLeft = styled.div`
  flex: 0.2;
`
const MenuCenter = styled.div`
  flex: 0.8;
`
const MenuRight = styled.div`
  flex: 0.2;
`
const Header = () => {
  return (
    <Container>
      <MenuLeft>
        <select>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </MenuLeft>
      <MenuCenter>
        <input type="text" />
      </MenuCenter>
      <MenuRight>Genre</MenuRight>
    </Container>
  )
}

export default Header
