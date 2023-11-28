import React, { useState } from "react";
import { Button, Menu, MenuItem } from "@mui/material";
import { MenuBook, MenuOpen } from "@mui/icons-material";
import Link from "next/link";

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
      title: "Inicio",
      url: "/",
    },

    {
      title: "Información sobre el negocio",
      url: "/negocio",
    },
    {
      title: "Información sobre los productos",
      url: "/producto",
    },
    {
      title: "Tienda",
      url: "https://shop.vitalhealthglobal.com/Bradyvaldes",
    },
    {
      title: "Membresía",
      url: "https://join.vitalhealthglobal.com/Bradyvaldes",
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
        Enlaces
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
            <Link href={link.url}>{link.title}</Link>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default LinkDropdown;
