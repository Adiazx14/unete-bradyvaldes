import React, { useState } from "react";
import { Button, Link, Menu, MenuItem } from "@mui/material";
import { MenuBook, MenuOpen } from "@mui/icons-material";

function LinkDropdown() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  // List of external links
  const externalLinks = [
    {
      title: "Información sobre los productos",
      url: "https://unetealequipo.com/productos",
    },
    {
      title: "Tienda",
      url: "https://shop.vitalhealthglobal.com/Healherventures",
    },
    {
      title: "Membresía",
      url: "https://join.vitalhealthglobal.com/enrollment/display?time=1700756386428&tipoEnvio=null&KEY_SALE_PAYPAY=&_ID_PAIS_REP=4&_PROSPECT_REGISTRATION_PROCESS=false&_ID_DISTRIBUIDOR_REP=0&_SPONSOR_WISENET_ID=Healherventures&rep=false&time=1700756386428#noback",
    },
    {
      title: "Información sobre el negocio",
      url: "https://unetealequipo.com/negocio",
    },
    // Add more links as needed
  ];

  return (
    <div>
      <Button
        aria-controls="external-links-menu"
        aria-haspopup="true"
        onClick={handleClick}
        endIcon={<MenuOpen />}
        sx={{ fontSize: "1em" }}
      >
        Enlaces externos
      </Button>
      <Menu
        id="external-links-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
      >
        {externalLinks.map((link, index) => (
          <MenuItem sx={{ width: "100%" }} key={index} onClick={handleClose}>
            <Link target="_blank" rel="noopener" href={link.url}>
              {link.title}
            </Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LinkDropdown;
