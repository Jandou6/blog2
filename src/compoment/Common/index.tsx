import * as React from 'react';
import { Link } from 'react-router-dom';

interface IProps {
  children: any;
}

export default (props:IProps) => {
  return (<div>
    <div>
      <Link to='/'>Home</Link>
      <Link to='about'>About</Link>
    </div>
    {props.children}
  </div>)
}