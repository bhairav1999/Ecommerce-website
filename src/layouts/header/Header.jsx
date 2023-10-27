import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components';
import Navbar from '../navbar/Navbar';

const Header = () => {
  return (
   <>
       <MainHeader>
      <NavLink to="/">
        <img className='logo' src="https://th.bing.com/th/id/OIP.d9ORHJIpDpP7WXH0v-a9lgHaCW?pid=ImgDet&rs=1" alt="my logo img" />
      </NavLink>
      <Navbar />
    </MainHeader>
   
   </>
  )
}
const MainHeader =styled.header`
  padding: 0%, 4.8rem;
  padding: 0 4.8rem;
  height: 10rem;
  background-color: ${({ theme }) => theme.colors.bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  .logo {
    height: 5rem;
  }
`
export default Header
