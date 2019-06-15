import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  background-color: #2e2e30;
  color: white;
  width: 100%;
  display: flex;
  flex-direction: row;
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
    font-size: 0.5rem;
  }
  span {
    width: 20%;
    height: 50%;
    position: absolute;
    display: inline-block;
    top: 6px;
    right: 3px;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAYFBMVEX///8AAACTk5P7+/v5+fldXV1iYmJTU1NsbGxGRkZ0dHQ+Pj6FhYWJiYkuLi5xcXFLS0t7e3s2NjZQUFB6eno/Pz+BgYGpqalgYGAzMzMpKSkYGBhHR0fy8vIlJSXDw8OQwmjUAAACvElEQVR4nO3ViVbiQBBG4RqMK4qKK6gz7/+WQ3A4CiYhS3fXMvc+QX3n74AIERERERERERERERERERERERERERERERER7fUyi92LfLz9itzbh0j1W/uKjK2r+p1WC+07srWoPj/Faq19SabW1e7XJuiKi+rrBzXkiuvq+3/GSbwVFyf7f4vhHuqikoOCrXi44HbFlfZVCVv9WDDYik0LbolL7csStWwBbogxHuqqFRhkxfYFg6zYteA278TlEZ/7h9r9RP/lmXh8we2Kc+07Rzfvs6DnFfst6HjFp97ATR6J8yFAj8SBQH/EwUBvxBFAkSftqwc06EfG44qjFvS04sgF/RAnAEUuta/v0eUUoAfiRKB94mSg9W9x0je4y/KKCRase9d2tHaXBmh3xUQL1t1pWxpLtmCdxYf6nhJoccWkC1okJgeKPGib9npID7S1YoYFbREzAe081CxP1BIxI1DkXFu36Twn0MKKWRes014x84L6xAJAXWIRoCaxEFCPWAyoRSwIFDlVAJ6WBGoQCwPLE4sDSxMVgGWJKkCRs2LAMx2gyGsh4KsWsNSKaguWIqoCSxCVgSIXmYEX2sDcK6ovWJdzRQML1uVb0cSCdblWNLJgXR6iIWAeoilgDqIxYHqiOaDIbVLgrTanqZREk8CURKPAdESzwFTEK21GV1fRgSmIxoHTieaBU4kOgCKPE4CP2sf3azzRCXA80Q1wLNERcBzRFVDkfjDwXvvkoQ0lugMOJToEDiO6BIo89wY+a586tr5Et8C+RMfAfkTXwD5E58DjRPdAketO4LX2eSnqIoYAdhGDANuJYYAiN43AG+2zUtZEDAVsIgYD/iSGAx4SAwL3iSGB34lBgV/EsMAdMTDwkzjTPiJvs+hAkT/aBxAREREREREREREREREREREREREREREREf3v/QWzfD8ftAVJFwAAAABJRU5ErkJggg==)
      right / 90% no-repeat #fff;
    pointer-events: none;
  }
  i {
    width: 0;
    height: 0;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;

    border-top: 5px solid white;
    position: absolute;
    display: inline-block;
    top: 10px;
    right: 3px;
  }
`
const MenuCenter = styled.div`
  color: white;
  flex: 0.8;
`
const MenuRight = styled.div`
  color: white;
  flex: 0.2;
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
        <input type="text" />
      </MenuCenter>
      <MenuRight>Genre</MenuRight>
    </Container>
  )
}

export default Header
