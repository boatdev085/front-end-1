import React from 'react'
import styled from 'styled-components'
import Constants from '../../../constants/index'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 3rem;
`
const BoxContainerSecond = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`
const BoxImage = styled.div`
  padding: 1rem 0 0 0;
  width: 100%;
  text-align: center;
  flex: 1 0 30%;
  div img {
    width: 70%;
    height: 100%;
  }
`
const NameBox = styled.div`
  padding: 0;
  margin: 0;
  color: black;
  font-size: 1rem;
`
const AuthorBox = styled.div`
  padding: 0;
  margin: 0;
  color: gray;
  word-wrap: break-word;
  width: 90%;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`
const CollectionTopHead = styled.div`
  margin: 1rem 0 1rem 0;
  width: 100%;
  display: flex;
  flex-direction: row;
`
const BoxImageHead = styled.div`
  text-align: center;
  flex: 0.4;
  img {
    width: 70%;
  }
`
const BoxContentHead = styled.div`
  flex: 0.6;
`
const DescBoxHead = styled.div`
  padding: 0;
  margin: 0;
  color: gray;
  word-wrap: break-word;
  width: 100%;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 0.9rem;
`
const AuthorBoxHead = styled.div`
  padding: 0;
  margin: 0;
  color: #666666;
  word-wrap: break-word;
  width: 100%;
  margin: 0 auto;
  margin-top: 0.5rem;
  font-size: 0.9rem;
  span {
    border: 1px solid #5090be;
    padding: 0.2rem 0.5rem;
    border-radius: 20px;
    color: #5090be;
    margin-left: 0.5rem;
  }
`
const BoxStyleMovie = styled.div`
  margin-top: 1rem;
  display: flex;
  flex-direction: row;
`
const ItemStyleMovie = styled.div`
  flex: 1;
  text-align: center;
  border: 1px solid ${({ color }) => color};
  background-color: ${({ color }) => color};
  padding: 0.4rem 0.5rem;
  font-size: 0.8rem;
  margin: 0 0.5rem;
  border-radius: 20px;
  color: white;
`
const CollectionNew = props => {
  const { item } = props
  const { Books, genre } = item
  const { Categories } = genre
  console.log('item', Categories)

  if (!item || item.length === 0) {
    return null
  }
  return (
    <Container>
      {Books.map((item, idx) => {
        const { Img, Name, Author, Desc, CName } = item
        if (idx === 0 || idx === 1) {
          return (
            <CollectionTopHead key={idx}>
              <BoxImageHead>
                <img src={Constants.PATH_IMAGE + Img} alt="books" />
              </BoxImageHead>
              <BoxContentHead>
                <NameBox>{Name}</NameBox>
                <DescBoxHead>{Desc}</DescBoxHead>
                <AuthorBoxHead>
                  {Author} <span>{CName}</span>
                </AuthorBoxHead>
              </BoxContentHead>
            </CollectionTopHead>
          )
        } else {
          return null
        }
      })}
      <BoxContainerSecond>
        {Books.map((item, idx) => {
          const { Img, Name, Author } = item
          if (idx === 0 || idx === 1) {
            return null
          }
          return (
            <BoxImage key={idx}>
              <div>
                <img src={Constants.PATH_IMAGE + Img} alt="books" />
              </div>
              <NameBox>{Name}</NameBox>
              <AuthorBox>{Author}</AuthorBox>
            </BoxImage>
          )
        })}
      </BoxContainerSecond>
      {Categories && Categories.length > 0 ? (
        <BoxStyleMovie>
          {Categories.map(item => {
            const { CategoryName } = item
            let colorBox = '#5090be'
            if (CategoryName === 'Fantasy') {
              colorBox = '#00cccb'
            } else if (CategoryName === 'Xianxia') {
              colorBox = '#ff9934'
            } else if (CategoryName === 'Romantic') {
              colorBox = '#989933'
            }
            return (
              <ItemStyleMovie color={colorBox} key={CategoryName}>
                {CategoryName}
              </ItemStyleMovie>
            )
          })}
        </BoxStyleMovie>
      ) : null}
    </Container>
  )
}

export default CollectionNew
