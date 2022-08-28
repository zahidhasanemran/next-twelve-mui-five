import { Container, Grid } from "@mui/material";
import { makeStyles } from "@mui/styles";
import ProjectCard from "../components/ProjectCard";

export default function Home({ products }) {
  const styles = useStyles();

  console.log(products);

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

export async function getServerSideProps({ req, res }) {
  // Fetch data from external API
  const result = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await result.json();

  // Pass data to the page via props
  return { props: { products: data } };
}
