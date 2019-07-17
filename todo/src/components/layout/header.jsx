import React from 'react';
import { Link } from 'react-router-dom';

function NavBar(){
 return (
  <header style={ headerStyle }>
   <h1>TodoList</h1>
   <Link style={ linkStyle } to="/"> Home </Link>  | {' '} <Link style={ linkStyle } to="/about"> About </Link>
  </header>
 )
}

const headerStyle = {
 background: 'navy',
 textAlign: 'center',
 color: '#fff',
 padding: '10px'
}

const linkStyle ={
 color: '#fff',
 textDecoration: 'none',
 fontSize: '20px'
}
export default NavBar;
