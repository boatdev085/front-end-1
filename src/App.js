import React from 'react'
import styled from 'styled-components'
import { Route, Redirect, Switch } from 'react-router-dom'
import Header from './common/Header/index'
import MenuBottom from './common/MenuBottom/index'
import PageHome from './components/pageHome/index'
import PageLibrary from './components/pageLibary/index'
import PageRanking from './components/pageRanking/index'
import PageError from './components/pageError/index'
const Container = styled.div`
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100vh;
`
const App = () => {
  return (
    <Container>
      <Header />
      <Switch>
        <Route path="/ranking" component={PageRanking} />
        <Route path="/library" component={PageLibrary} />
        <Route path="/error" component={PageError} />
        <Route path="/" exact component={PageHome} />
        <Redirect path="/home" to="/" />
      </Switch>
      <MenuBottom />
    </Container>
  )
}

export default App
