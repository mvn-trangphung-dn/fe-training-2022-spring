import React from 'react';
import NavMenuItemPage from './NavMenuItemPage';

function NavMenuPage() {
  return (
    <>
      <ul className="header-menu">
        <NavMenuItemPage item={{name: "Home"}}></NavMenuItemPage>
        <NavMenuItemPage item={{name: "Products"}}></NavMenuItemPage>
        <NavMenuItemPage item={{name: "About Us"}}></NavMenuItemPage>
        <NavMenuItemPage item={{name: "News"}}></NavMenuItemPage>
        <NavMenuItemPage item={{name: "Contact"}}></NavMenuItemPage>
      </ul>
    </>
  );
}

export default NavMenuPage;
