import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const hyperlinks = links.map((link) =>{
    return <a key={link} href={'#' + link}>{link}</a>
  })

  return <nav>{hyperlinks}</nav>;
}

export default NavBar;
