import { Box, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import Link from "next/link";

export default function Contact() {
  const styles = useStyles();

  return (
    <div>
      <Button type="primary" variant="contained">
        Contact Us Page
      </Button>
    </div>
  );
}

const useStyles = makeStyles({});
