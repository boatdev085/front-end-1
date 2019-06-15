import React from 'react'
import styled from 'styled-components'
const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  font-size: 2rem;
  margin-top: -5rem;
`
const pageRanking = () => {
  return (
    <Container>
      ranking <br />
      Coming Soon
    </Container>
  )
}
export default pageRanking
