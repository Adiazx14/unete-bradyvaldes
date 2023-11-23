"use client";
import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
  Box,
  Link,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ThemeProvider,
  createTheme,
  Grid,
} from "@mui/material";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import {
  ArrowDownward,
  CheckCircleOutline,
  SouthOutlined,
} from "@mui/icons-material";
import Testimonios from "./components/Testimonios";
import Image from "next/image";
import LinkDropdown from "./components/LinkDropdown";
import HideOnScroll from "./components/HideOnScroll";

const InformationSection = ({ items }) => (
  <List>
    {items.map((item, index) => (
      <ListItem color="textPrimary" key={index}>
        <ListItemIcon>
          <CheckCircleOutline color="primary" />
        </ListItemIcon>
        <ListItemText
          primaryTypographyProps={{ color: "textPrimary" }}
          primary={item}
        />
      </ListItem>
    ))}
  </List>
);

function LandingPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    country: "",
    whatsapp: "",
    termsAccepted: false,
  });

  const handleChange = (e) => {
    const { name, value, checked } = e.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: name === "termsAccepted" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    window.open(
      `https://api.whatsapp.com/send?phone=17868657264&text=Hola, mi nombre es ${formData.name}, mi correo es ${formData.email} y vivo en ${formData.country}. Me puede brindar más información sobre el producto y el negocio?`,
      "_blank"
    );
    // Form submission logic here
  };

  const theme = createTheme({
    palette: {
      primary: {
        main: "#F2CC8F", // A modern purple, often associated with creativity and imagination
      },
      secondary: {
        main: "#9966cc", // A teal that provides a vibrant contrast to the purple
      },
      error: {
        main: "#CF6679", // A muted red, less aggressive than a bright red
      },
      warning: {
        main: "#fff", // A warm amber
      },
      info: {
        main: "#2196F3", // A classic blue, good for informational cues
      },
      success: {
        main: "#69F0AE", // A mint green, for a fresh look on success messages
      },
      background: {
        default: "#FFFFFF", // A very dark grey, almost black, for the main background
        paper: "#1E1E1E", // A slightly lighter grey for elements like cards and sheets
      },
      text: {
        primary: "#C5C6C7", // Pure white for the main text, offering a strong contrast
        secondary: "rgba(255, 255, 255, 0.7)", // A slightly dimmed white for less important text
      },
    },
    // Additional customizations can go here
  });

  return (
    <ThemeProvider theme={theme}>
      <HideOnScroll threshold={0}>
        <AppBar className="navbar" color="background" position="sticky">
          <Toolbar
            sx={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <LinkDropdown />
          </Toolbar>
        </AppBar>
      </HideOnScroll>

      <Container
        maxWidth="md"
        sx={{ my: 2, textAlign: "center", color: "textPrimary", px: 5 }}
      >
        <Box sx={{ my: 0 }}>
          <Typography color="textPrimary" variant="h4" gutterBottom>
            TE GUSTA AYUDAR A PERSONAS??? Mejorando tu Salud Fisica y
            Financiera...
          </Typography>
          <Typography
            fontWeight="bold"
            color="textPrimary"
            variant="h4"
            gutterBottom
          >
            Da click en el video y Descúbrelo aquí
          </Typography>
          <SouthOutlined sx={{ fontSize: 80, mb: 2 }} color="primary" />
          <video width="100%" height="auto" controls src="/main.mp4" />
        </Box>
        <Box sx={{ my: 6 }} component="form" onSubmit={handleSubmit}>
          <Typography
            color="textPrimary"
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            LLENA EL FORMULARIO PARA RECIBIR INFORMACIÓN MÁS A DETALLE
          </Typography>
          <SouthOutlined sx={{ fontSize: 80, mb: 2 }} color="primary" />
          <SouthOutlined sx={{ fontSize: 80, mb: 2 }} color="primary" />
          <SouthOutlined sx={{ fontSize: 80, mb: 2 }} color="primary" />

          <TextField
            color="primary"
            fullWidth
            label="Nombre y Apellido"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            required
          />
          <TextField
            color="primary"
            fullWidth
            label="Correo Electronico"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="filled"
            required
          />
          <TextField
            color="primary"
            required
            fullWidth
            label="País"
            name="country"
            value={formData.country}
            onChange={handleChange}
            margin="normal"
            variant="filled"
          />
          {/*           <FormControlLabel
            sx={{ alignItems: "center", display: "flex", color: "textPrimary" }}
            control={
              <Checkbox
                name="termsAccepted"
                checked={formData.termsAccepted}
                onChange={handleChange}
              />
            }
            label="I agree to terms & conditions provided by the company. By providing my phone number, I agree to receive text messages from the business."
          /> */}
          <Button
            color="primary"
            type="submit"
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Enviar Registro
          </Button>
          <Typography variant="h5" color="textSecondary">
            NOTA: Unirte a un equipo facilita llegar a tus metas
          </Typography>
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography
            color="textPrimary"
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            CONÓCENOS
          </Typography>
          <InformationSection
            items={[
              "PRODUCTOS CON NANOTECNOLOGIA",
              "PRODUCTOS CON ADAPTOGENOS",
              "TU TIENDA VIRTUAL",
              "ENLACES DE VENTA",
              "COMPENSACIÓN DEL 50%",
              "ENTRENAMIENTOS DE REDES SOCIALES",
              "12 FORMAS DE PAGO",
              "ENTRENAMIENTOS DE NEGOCIOS Y LIDERAZGO",
              "MERCADO DE AFILIADOS",
            ]}
          />
        </Box>

        <Box sx={{ my: 4 }}>
          <Typography
            color="textPrimary"
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            TESTIMONIOS DE PRODUCTO
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Conoce más sobre nuestros productos, como funcionan, más testimonios
            y su tecnología
          </Typography>
          <Button sx={{ my: 4 }} variant="contained">
            Descubre más sobre los productos
          </Button>
          <Testimonios />
        </Box>
        <Box sx={{ my: 2 }}>
          <Typography
            color="textPrimary"
            variant="h4"
            fontWeight="bold"
            gutterBottom
          >
            TESTIMONIOS DE NEGOCIO
          </Typography>
          <Typography variant="h5" color="textSecondary">
            Mira los detalles de la oportunidad de distribución y negocio para
            USA y Mexico
          </Typography>
          <Button sx={{ my: 4 }} variant="contained">
            Descubre más sobre el negocio
          </Button>
          <Grid
            container
            spacing={5}
            sx={{ display: "flex", justifyContent: "space-around" }}
          >
            <Grid item xs={12} md={4}>
              <Image
                src="/busi1.webp"
                alt="Picture of the author"
                width={260}
                height={260}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/busi2.webp"
                alt="Picture of the author"
                width={260}
                height={260}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <Image
                src="/busi3.webp"
                alt="Picture of the author"
                width={260}
                height={260}
              />
            </Grid>
          </Grid>
        </Box>

        {/* The rest of your page content goes here */}
      </Container>
    </ThemeProvider>
  );
}

export default LandingPage;
