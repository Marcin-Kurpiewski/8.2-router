import React, {Component} from 'react';
import { Router, Route, IndexRoute, Link, hashHistory } from 'react-router';
import styles from './App.css'
class App extends Component{
    render(){
        return(
            <Router history={hashHistory}>
                <Route path='/' component={Navigation}>
                    <IndexRoute component={Home} />
                    <Route path='/about' component={About} />
                    <Route path='/contact' component={Contact} />
                    <Route path ='hello/:name' component={Hello}/>
                    <Route path='*' component={PageNotFound}/>
                </Route>
            </Router>
        )
    }
}

const Navigation = props => (
    <div>
        <ul>
            <li><Link to="/" activeStyle={{color:'#48abee'}} onlyActiveOnIndex>Home</Link></li>
            <li><Link to="/about" activeClassName='active'>About</Link></li>
            <li><Link to="/contact" activeClassName='active'>Contact</Link></li>
        </ul>
        {props.children}
    </div>
);



const Home =() => <h1>home component pierwszy</h1>
const About =() => <h1>compononet About</h1>
const Contact =() => <h1>component contact</h1>
const PageNotFound= () => <h1>404 not found</h1>
const Hello = (props) => <h1>Witaj, {props.params.name}</h1>
export default App;