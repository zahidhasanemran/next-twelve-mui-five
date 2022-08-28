import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

export default function Contact() {
  const styles = useStyles();

  return (
    <div className={styles.container}>
      <Box boxShadow="">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
        </ul>
      </Box>
      <Button type="primary" variant="contained">
        Contact Us Page
      </Button>
    </div>
  );
}

const useStyles = makeStyles({
  container: {
    width: "100%",
    background: "#000",
  },
});
