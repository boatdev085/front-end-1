import React from 'react'
import styled from 'styled-components'
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
const StyleSelect = styled.div`
  position: relative;
  display: inline-block;
  select {
    display: inline-block;
    height: 30%;
    width: 100%;
    outline: none;
    color: white;
    border: 1px solid transparent;
    border-radius: 4px;
    background: transparent;
    font-size: 0.7rem;
    margin: 0.5rem 0.2rem 0.2rem 1rem;
  }
  i {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
    border-top: 5px solid white;
    position: absolute;
    display: inline-block;
    top: 15px;
    right: 3px;
  }
`
const MenuCenter = styled.div`
  position: relative;
  color: white;
  flex: 0.8;
`
const InputText = styled.input`
  text-indent: 15px;
  width: 90%;
  padding: 0;
  margin: 0;
  border: none;
  border: 1px solid #e6e6e6;
  border-radius: 10px;
  padding: 0.3rem 0 0.3rem 1rem;
  font-size: 1rem;
  margin-left: 10px;
`
const SearchIcon = styled.div`
  position: absolute;
  width: 70px;
  height: 70px;
  left: 5px;
  top: -5px;
  img {
    width: 60%;
  }
`
const MenuRight = styled.div`
  color: white;
  flex: 0.2;
`
const BoxGenre = styled.div`
  margin-top: 0.5rem;
`
const Header = () => {
  return (
    <Container>
      <MenuLeft>
        <StyleSelect>
          <i />
          <select>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </StyleSelect>
      </MenuLeft>
      <MenuCenter>
        <InputText type="search" placeholder="Search" />
        <SearchIcon>
          <img
            src="http://www.endlessicons.com/wp-content/uploads/2012/12/search-icon.png"
            alt="search"
          />
        </SearchIcon>
      </MenuCenter>
      <MenuRight>
        <BoxGenre>Genre</BoxGenre>
      </MenuRight>
    </Container>
  )
}

export default Header
