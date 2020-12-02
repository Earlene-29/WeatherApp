import React from 'react'
import Pages from './pages'
import {Route, Switch, } from 'react-router-dom'

const Router = () => {
    return(
        <React.Suspense fallback={<h6>Loading...</h6>}>
            <Switch>
                <Route path='/login' component={Pages.Login}/>
                <Route path='/signup' component={Pages.SignUp}/>
                <Route path='/weatherPage' component={Pages.weatherPage}/>
                
                
            </Switch>


        </React.Suspense>
    )
}

export default Router;