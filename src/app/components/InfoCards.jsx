import {
  Card,
  CardActionArea,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Grid,
} from "@mui/material";

const info = [
  {
    title: "Diabetes",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e199b46ac493aa07371.jpeg",
    body: "Más de 1500 pacientes diabéticos que han dejado la metformina e insulina...",
    moreInfoUrl: "https://app.gohighlevel.com/v2/preview/14I8ja5dp0tYPwnboZkx",
  },
  {
    title: "Artritis Reumatoide",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e199b46ac11f2a07372.jpeg",
    body: "Liberate de los dolores y tensiones en tus articulaciones, descubre como mejoran otros pacientes...",
    moreInfoUrl: "https://app.gohighlevel.com/v2/preview/14I8ja5dp0tYPwnboZkx",
  },
  {
    title: "Cáncer",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e19e4e0132fae3e9a72.jpeg",
    body: "Muchas personas recuperandose mucho más rápido, evitando los efectos secundarios...",
    moreInfoUrl:
      "https://app.gohighlevel.com/v2/preview/AoVT2ml3a8FDzDrIaqLE?notrack=true",
  },
  {
    title: "Secuelas COVID",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e19241c3b3ca723bcde.jpeg",
    body: "Liberate de Materiales Pesados de las Vacunas y si tienes Secuelas, comienza a Restaurar tu Cuerpo...",
    moreInfoUrl:
      "https://app.gohighlevel.com/v2/preview/F5Cd7WJhfiZvD6opvjEz?notrack=true",
  },
  {
    title: "Problemas Renales",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e19241c3b317623bcdf.jpeg",
    body: "Conoce como las personas comienzan a recuperar el funcionamiento de sus riñones...",
    moreInfoUrl:
      "https://app.gohighlevel.com/v2/preview/tOjp7pm9B3OXYnXnvj4b?notrack=true",
  },
  {
    title: "Bajar de Peso",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e19241c3b227623bce0.jpeg",
    body: "Te gustaría, llegar al peso que deseas, sin tanto estres con tu dieta...",
    moreInfoUrl:
      "https://app.gohighlevel.com/v2/preview/rCGM85OAOFS9js4mYMi0?notrack=true",
  },
  {
    title: "Hígado Graso",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e199b46ac3466a07370.jpeg",
    body: "Sabias que el Higado Graso detona más de 80 enfermedades, como diabetes, cáncer y otros...",
    moreInfoUrl:
      "https://app.gohighlevel.com/v2/preview/rCGM85OAOFS9js4mYMi0?notrack=true",
  },
  {
    title: "Mejor Prevenir",
    imageUrl:
      "https://assets.cdn.filesafe.space/Jh9oJzTLlkFrsXXbM7bM/media/651b4e19241c3b102523bce1.jpeg",
    body: "Hace cuanto tiempo no le das un mantenimiento a tus Organos Vitales???",
    moreInfoUrl:
      "https://app.gohighlevel.com/v2/preview/rCGM85OAOFS9js4mYMi0?notrack=true",
  },
];

const InfoCards = () => {
  return (
    <Grid mt={2} columnSpacing={5} rowSpacing={4} container>
      {info.map((info, index) => (
        <Grid sx={{ display: "flex" }} item xs={12} sm={6} md={3} key={index}>
          <Card sx={{ maxWidth: 345 }}>
            <CardActionArea>
              <CardMedia
                component="img"
                height="140"
                image={info.imageUrl}
                alt="Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {info.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {info.body}
                </Typography>
              </CardContent>
            </CardActionArea>
            <CardActions>
              <Button
                size="small"
                color="primary"
                href={info.moreInfoUrl}
                target="_blank"
                rel="noopener noreferrer"
              >
                More Information
              </Button>
            </CardActions>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

export default InfoCards;
