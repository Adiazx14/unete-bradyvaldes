import { Grid } from "@mui/material";

const Testimonios = ({ videos }) => {
  return (
    <Grid mt={2} columnSpacing={5} rowSpacing={4} container>
      {videos.map((video, index) => (
        <Grid sx={{ display: "flex" }} item xs={12} sm={6} md={3} key={index}>
          <video
            controls
            width="100%"
            src={`/${video}.mp4`}
            title="YouTube video player"
          ></video>
        </Grid>
      ))}
    </Grid>
  );
};

export default Testimonios;
