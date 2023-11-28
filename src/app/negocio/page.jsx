import { SouthOutlined } from "@mui/icons-material";
import Link from "next/link";
import Testimonios from "../components/Testimonios";

const { Container, Box, Typography, Button } = require("@mui/material");

const Negocio = () => {
  return (
    <Container
      maxWidth="md"
      sx={{ my: 2, textAlign: "center", color: "textPrimary", px: 5 }}
    >
      <Box sx={{ my: 0 }}>
        <Typography color="textPrimary" variant="h3" gutterBottom>
          INVITACIÓN
        </Typography>
        <Typography fontWeight="bold" color="textPrimary" variant="h5" mb={4}>
          Mira este video de 5 minutos para que conozcas más sobre la
          oportunidad de ser fundador en los Estados Unidos, y regístrate o
          agenda una llamada para mas detalles.
        </Typography>
        <video width="100%" height="auto" controls src="/busi-main.mp4" />
        <Typography my={4} variant="h5" color="textSecondary">
          &quot;Un optimista ve una oportunidad en toda calamidad, un pesimista
          ve una calamidad en toda oportunidad&quot; - Winston Churchill
        </Typography>
      </Box>
      <Box sx={{ my: 0 }}>
        <Typography color="textPrimary" mt={4} variant="h4">
          PRESENTACIÓN PLAN DE COMPENSACIÓN
        </Typography>
        <SouthOutlined sx={{ fontSize: 80, mb: 2 }} color="primary" />

        <video width="100%" height="auto" controls src="/comp.mp4" />
      </Box>
      <Box sx={{ my: 0 }}>
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 3, mb: 2, fontSize: "1em" }}
        >
          <Link href="https://join.vitalhealthglobal.com/Bradyvaldes">
            Comienza tu membresía
          </Link>
        </Button>
        <br />
        <Button
          color="primary"
          variant="contained"
          sx={{ mt: 3, mb: 2, fontSize: "1em" }}
        >
          <Link href="https://api.whatsapp.com/send?phone=15615376267">
            Contáctame en Whatsapp
          </Link>
        </Button>
      </Box>
      <Box sx={{ my: 4 }}>
        <Typography
          color="textPrimary"
          variant="h4"
          fontWeight="bold"
          gutterBottom
        >
          TESTIMONIOS
        </Typography>

        <Testimonios videos={["busi1", "busi2", "busi3", "busi4"]} />
      </Box>
    </Container>
  );
};

export default Negocio;
