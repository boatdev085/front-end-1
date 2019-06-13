import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import ContainerCollectionBox from './ContainerCollectionBox'
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`

const CollectionBox = () => {
  const [useData, setData] = useState([])
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_COLLECTION)
      .then(res => {
        const { data } = res
        if (data.data || data.data.length > 0) {
          setData(data.data)
        } else {
          setData([])
        }
      })
      .catch(e => {
        setData([])
      })
  }, [])
  console.log('useData', useData)
  if (useData.length === 0) {
    return null
  }
  return (
    <Container>
      {useData.map((item, idx) => {
        return (
          <ContainerCollectionBox key={item.Category || idx}>
            boat
          </ContainerCollectionBox>
        )
      })}
    </Container>
  )
}
export default CollectionBox
