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
      `https://api.whatsapp.com/send?phone=15615376267&text=Hola, mi nombre es ${formData.name}, mi correo es ${formData.email} y vivo en ${formData.country}. Me puede brindar más información sobre el producto y el negocio?`,
      "_blank"
    );
    // Form submission logic here
  };

  return (
    <Container
      maxWidth="md"
      sx={{ my: 2, textAlign: "center", color: "textPrimary", px: 5 }}
    >
      <Box sx={{ my: 0 }}>
        <Typography color="textPrimary" variant="h4" gutterBottom>
          Sé tu Propio Jefe del Bienestar: Explora Nuestra Gama de Suplementos
          con Adaptógenos y Beneficios Nanotecnológicos
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
          sx={{ mt: 3, mb: 2, fontSize: "1em" }}
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
            "NANOTECNOLOGÍA",
            "ADAPTÓGENOS",
            "TU TIENDA VIRTUAL",
            "ENLACES DE VENTA",
            "COMPENSACIÓN DEL 50%",
            "ENTRENAMIENTOS DE REDES SOCIALES",
            "12 FORMAS DE PAGO",
            "ENTRENAMIENTOS DE NEGOCIOS Y LIDERAZGO",
            "MERCADEO DE AFILIADOS",
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
          Conoce más sobre nuestros productos, cómo funcionan, más testimonios y
          su tecnología
        </Typography>
        <Button sx={{ my: 2, fontSize: "1em" }} variant="contained">
          <Link href="/producto">Descubre más sobre los productos</Link>
        </Button>
        <Testimonios
          videos={[
            "first",
            "second",
            "third",
            "fourth",
            "fifth",
            "sixth",
            "seventh",
            "eighth",
          ]}
        />
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
          Mira los detalles de la oportunidad de distribución y negocio para USA
          y Mexico
        </Typography>
        <Button sx={{ my: 4 }} variant="contained">
          <Link href="/negocio"> Descubre más sobre el negocio</Link>
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
  );
}

export default LandingPage;
