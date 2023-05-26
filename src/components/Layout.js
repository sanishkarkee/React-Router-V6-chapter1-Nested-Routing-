import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';

//   NOTE:
// *) NavLink is used when you want to highlight a link as active and to style <Link/>

const Layout = () => {
  return (
    <>
      <h1>React router v6- Chapter 2: Nested Routing</h1>
      <ul>
        <li>
          <NavLink
            to='/'
            style={({ isActive }) => {
              return { backgroundColor: isActive ? 'green' : '' };
            }}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/about'
            style={({ isActive }) => {
              return { backgroundColor: isActive ? 'purple' : '' };
            }}>
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            to='contact'
            style={({ isActive }) => {
              return { backgroundColor: isActive ? 'yellow' : '' };
            }}>
            Contact
          </NavLink>
        </li>
        <li>
          <NavLink
            to='/post'
            style={({ isActive }) => {
              return { backgroundColor: isActive ? 'pink' : '' };
            }}>
            post
          </NavLink>
        </li>
      </ul>
      <Outlet />
    </>
  );
};

export default Layout;
