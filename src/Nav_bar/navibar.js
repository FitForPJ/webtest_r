import React, { Component } from 'react';
import './nav_container.css';
import Home from '../Component/Home/home'
import About from '../Component/About/about'
import { Route, Link } from 'react-router-dom'
const menuItems = [
    'Home',
    'About',
    'Product',
    'Contact',
 ];

export default class NavbarRoute extends Component {
    state={
        active : ''
    }

    handleClick(menuItem){ 
        this.setState({ active: menuItem });
      }

    componentDidMount(){
        
        this.setState({active : window.location.pathname.replace("/","")})
    }
    
    render() {

        const activeStyle = { color: '#0000ff' ,fontWeight: "bold"};

        const HomePage = () => <Home />
        const AboutPage = () => <About />
        const ProductPage = () => <div>{window.location.pathname}This is the Product Page</div>
        const ContactPage = () => <div>{window.location.pathname}This is a Contact Page</div>

        return (
            <div>
                <div className="nav">
                    <ul className="nav-list">
                        {menuItems.map(menuItem =>
                            <li key={menuItem} ><Link
                                to={"/"+menuItem}
                                style={this.state.active === menuItem ? activeStyle : {}}
                                onClick={this.handleClick.bind(this, menuItem)}
                            >
                                {menuItem}
                            </Link></li>
                        )}
                    </ul>
                    <hr height="2px" width="99%" />
                </div>
                <div className="container">
                    <Route path="/" exact component={HomePage} />
                    <Route path="/Home"  component={HomePage} />
                    <Route path="/About" component={AboutPage} />
                    <Route path="/Contact" component={ContactPage} />
                    <Route path="/Product" component={ProductPage} />
                </div>
            </div>
        )
    }
}