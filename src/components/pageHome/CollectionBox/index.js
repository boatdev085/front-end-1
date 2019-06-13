import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { mapSortDataCollection } from '../../../utils/index'
import ContainerCollectionBox from './ContainerCollectionBox'
const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  padding-bottom: 5rem;
`

const CollectionBox = () => {
  const [useData, setData] = useState([])
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_COLLECTION)
      .then(res => {
        const { data } = res
        if (data.data || data.data.length > 0) {
          setData(mapSortDataCollection(data.data))
        } else {
          setData([])
        }
      })
      .catch(e => {
        setData([])
      })
  }, [])
  if (useData.length === 0) {
    return null
  }
  return (
    <Container>
      {useData.map((item, idx) => {
        if (item.Category !== 'Genre') {
          return (
            <ContainerCollectionBox key={item.Category || idx} item={item} />
          )
        } else {
          return null
        }
      })}
    </Container>
  )
}
export default CollectionBox
