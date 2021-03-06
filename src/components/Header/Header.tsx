import Brand from '@assets/logo/brand.svg';
import Menu from '@assets/logo/menu.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = (): JSX.Element => {
  const [burgerClicked, setBurgerClicked] = useState(false);

  const toggleBurgerClick = (): void => {
    setBurgerClicked(!burgerClicked);
  };

  return (
    <div className="lg:px-16 px-6 flex flex-wrap items-center lg:py-0 py-4 bg-white">
      <div id="logo" className="flex-1 flex items-center text-2xl">
        {' '}
        <Link to="/" className="flex flex-1 items-center">
          <Brand style={{ height: 42, width: 30 }} />
          <p className="px-2 font-sans">Brand</p>
        </Link>
      </div>

      {/* <span
        htmlFor="menu-toggle"
        className="cursor-pointer lg:hidden block"
        onClick={toggleBurgerClick}
      > */}
      <Menu style={{}} />
      {/* </span> */}
      <input
        type="checkbox"
        className="hidden"
        id="menu-toggle"
        checked={burgerClicked}
        // onChange={() => {}}
      />

      <div
        className="hidden lg:flex lg:items-center lg:w-auto w-full"
        id="menu"
      >
        <nav>
          <ul className="lg:flex items-center justify-between text-base text-gray-700 pt-4 lg:pt-0">
            <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
              <Link to="/" onClick={toggleBurgerClick}>
                <span
                  style={{
                    animation: `navLinkAnimation 0.5s ease forwards ${
                      1 / 5 + 0.5
                    }s`,
                  }}
                >
                  Home
                </span>
              </Link>
            </li>
            <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
              <Link to="/about" onClick={toggleBurgerClick}>
                <span
                  style={{
                    animation: `navLinkAnimation 0.5s ease forwards ${
                      2 / 5 + 0.5
                    }s`,
                  }}
                >
                  About
                </span>
              </Link>
            </li>
            <li className="lg:p-4 py-3 px-0 block border-b-2 border-transparent hover:border-indigo-400">
              <Link to="/user" onClick={toggleBurgerClick}>
                <span
                  style={{
                    animation: `navLinkAnimation 0.5s ease forwards ${
                      1 / 5 + 0.5
                    }s`,
                  }}
                >
                  user
                </span>
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Header;
