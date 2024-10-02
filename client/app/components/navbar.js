import Link from 'next/link';
import Logo from './logo';
import './navbar.css';

const NavBar = () => {
  return(
    <div className='navbarContainer'>
      <Link href='/'>
        <Logo />
      </Link>
      <Link href='about'>
        <div>About</div>
      </Link>
    </div>
  )
}

export default NavBar
