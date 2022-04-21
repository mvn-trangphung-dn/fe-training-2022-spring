import React from 'react';

function NavMenuItemPage({item = {}}) {
  const {name} = item;
  return (
    <>
      <li><a href="">{name}</a></li>
    </>
  );
}

export default NavMenuItemPage;
