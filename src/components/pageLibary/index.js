import React from 'react'
import styled from 'styled-components'
import HeaderLibrary from '../../common/Header/HeaderLibrary'
import ImgPlus from '../../assets/icon/add.png'
const Container = styled.div`
  position: relative;
`
const ContainerIn = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: start;
  flex-direction: column;
  text-align: center;
  font-size: 1rem;
  padding-top: 5rem;
  p {
    padding: 0;
    margin: 0;
  }
`
const BoxInsert = styled.div`
  background-color: #7f7f7f;
  padding: 4rem;
  margin: 0 auto;
  margin-top: 3rem;
  width: 10%;
`
const pageLibrary = () => {
  return (
    <Container>
      <HeaderLibrary />
      <ContainerIn>
        <p>it's time to Explore</p>
        <BoxInsert>
          <img src={ImgPlus} alt="plus" />
        </BoxInsert>
      </ContainerIn>
    </Container>
  )
}
export default pageLibrary
