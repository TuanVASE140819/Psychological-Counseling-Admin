import { Switch, Route, Redirect, BrowserRouter, Router } from 'react-router-dom'
import Home from './pages/Home'
import Tables from './pages/Tables'
import Billing from './pages/Billing'
import Rtl from './pages/Rtl'
import Profile from './pages/Profile'
import SignUp from './pages/SignUp'
import SignIn from './pages/SignIn'
import Main from './components/layout/Main'

// Page quản lý User
import Consutant from './pages/Consultant'
import Customer from './pages/Customer'
import Shop from './pages/Shop'
import Zodiac from './pages/Zodiac'
import House from './pages/House'
import Planet from './pages/Planet'
import 'antd/dist/antd.css'
import './assets/styles/main.css'
import './assets/styles/responsive.css'
import { HomeTemplate } from './templates/HomeTemplate/HomeTemplate'
import DetailZodiac from './pages/DetailZodiac'
import CreateConsultant from './pages/CreateConsultant'
import { createBrowserHistory } from 'history';
export const history = createBrowserHistory();
function App () {

  return (
    <div className='App'>
      <Router history={history}>
        <Switch>
          <Route path='/sign-up' exact component={SignUp} />
          <Route path='/sign-in' exact component={SignIn} />
          {/* <Main> */}
          <Route exact path='/Dashboard' component={Home} />
          <Route exact path='/tables' component={Tables} />
          <Route exact path='/billing' component={Billing} />
          <Route exact path='/rtl' component={Rtl} />
          <Route exact path='/profile' component={Profile} />
          {/* <Redirect from='*' to='/Dashboard' /> */}
          {/* Route quản lý User */}
          <Route exact path='/consultant' component={Consutant} />
          <Route exact path='/customer' component={Customer} />
          {/* Route quản lý Shop */}
          <Route exact path='/Shop' component={Shop} />
          {/* Route quản lý Zodiac */}
          <Route exact path='/zodiac' component={Zodiac} />
          {/* Route quản lý House */}
          <Route exact path='/house' component={House} />
          {/* Route quản lý Planet */}
          <Route exact path='/planet' component={Planet} />
          <Route exact path='/createconsultant' component={CreateConsultant} />

          <HomeTemplate
            exact
            path='/zodiacdetail/:id'
            Component={DetailZodiac}
          />
          {/* </Main> */}
        </Switch>
      </Router>
    </div>
  )
}

export default App
