import { Switch, Route, Redirect, BrowserRouter } from 'react-router-dom'
import Home from './pages/Home'
import Tables from './pages/Tables'
import Billing from './pages/Billing'
import Rtl from './pages/Rtl'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Main from './components/layout/Main'
import Consutant from './pages/Consultant'
import Shop from './pages/Shop'
import Zodiac from './pages/Zodiac'
import House from './pages/House'
import 'antd/dist/antd.css'
import './assets/styles/main.css'
import './assets/styles/responsive.css'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate'
import DetailZodiac from './pages/DetailZodiac'

function App () {
  return (
    <div className='App'>
      <BrowserRouter>
        <Switch>
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/sign-in' exact component={SignIn} />
          <Main>
            <Route exact path='/Dashboard' component={Home} />
            <Route exact path='/tables' component={Tables} />
            <Route exact path='/billing' component={Billing} />
            <Route exact path='/rtl' component={Rtl} />
            <Route exact path='/profile' component={Profile} />
            <Redirect from='*' to='/Dashboard' />
            <Route exact path='/consultant' component={Consutant} />
            <Route exact path='/Shop' component={Shop} />
            <Route exact path='/zodiac' component={Zodiac} />
            <Route exact path='/house' component={House} />
            <HomeTemplate
              exact
              path='/zodiacdetail/:id'
              Component={DetailZodiac}
            />
          </Main>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
