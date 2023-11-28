import { Info, SouthOutlined } from "@mui/icons-material";
import Link from "next/link";
import Testimonios from "../components/Testimonios";
import InfoCards from "../components/InfoCards";

const { Container, Box, Typography, Button } = require("@mui/material");

const Producto = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{ my: 2, textAlign: "center", color: "textPrimary", px: 5 }}
    >
      <Box sx={{ my: 0 }}>
        <Typography fontWeight="bold" color="textPrimary" variant="h4" mb={4}>
          Presentación completa de la compañía y productos por CEO y creador de
          la compañía Tony Rodriguez
        </Typography>
        <div class="container">
          <iframe
            class="responsive-iframe"
            src="https://player.vimeo.com/video/883601022?h=a42e16f37a"
          ></iframe>
        </div>
      </Box>

      <InfoCards />

      <Box sx={{ my: 5 }}>
        <Typography
          color="textPrimary"
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          TESTIMONIOS
        </Typography>

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
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 3, mb: 2, fontSize: "1em" }}
        >
          <Link href="https://api.whatsapp.com/send?phone=15615376267">
            Más informacion
          </Link>
        </Button>
      </Box>
    </Container>
  );
};

export default Producto;