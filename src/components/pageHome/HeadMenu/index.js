import React from 'react'
import styled from 'styled-components'
const BoxMenu = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: center;
  background-color: #f8f8f8;
  box-shadow: 0 1px 1px 1px rgba(157, 157, 157, 0.1);
  width: 100%;
`
const MenuName = styled.div`
  flex: 1;
  padding: 0.7rem;
  ${({ active }) => (active ? `border-bottom: 1px solid gray` : '')};
`
const HeaderMenu = () => {
  return (
    <BoxMenu>
      <MenuName active={true}>Featured</MenuName>
      <MenuName>Top</MenuName>
      <MenuName>Topic</MenuName>
    </BoxMenu>
  )
}
export default HeaderMenu
