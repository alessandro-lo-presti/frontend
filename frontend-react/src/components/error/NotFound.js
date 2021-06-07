import { CircularProgress, Container } from "@material-ui/core";
import { Redirect } from "react-router";
import { useEffect, useState } from "react";

function NotFound() {
  const [redirect, setRedirect] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      setRedirect(<Redirect to="/" />);
    }, 5000);
  }, []);

  return (
    <>
      <Container maxWidth="md">404 not found</Container>
      {redirect ? redirect : <CircularProgress />}
    </>
  );
}

export default NotFound;
