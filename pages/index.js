import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectCard from "../components/ProjectCard";

export default function Home() {
  const styles = useStyles();

  return (
    <div>
      <Container>
        <Grid container spacing={5}>
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
          <ProjectCard />
        </Grid>
      </Container>
    </div>
  );
}

const useStyles = makeStyles({});
