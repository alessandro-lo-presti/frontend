import {
  Button,
  CircularProgress,
  Container,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { useState } from "react";
import { connect } from "react-redux";
import { ApiService } from "../../services/ApiServices.js";
import {
  loginErrorAction,
  loginSuccessAction,
  tokenSelector,
} from "./../../redux/slices/loginSlice";

const mapStateToProps = (state) => ({
  token: tokenSelector(state),
});

const mapDispatchToProps = (dispatch) => ({
  loginSuccess: (token) => dispatch(loginSuccessAction(token)),
  loginError: () => dispatch(loginErrorAction()),
});

const useStyles = makeStyles({
  formContaniner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  form: {
    height: "180px",
    minWidth: "400px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },
  button: {
    alignSelf: "center",
  },
  title: {
    fontSize: "52px",
  },
});

function Login(props) {
  const classes = useStyles();
  const { loginSuccess, loginError } = props;
  const [waiting, setWaiting] = useState(false);

  const sendLoginData = (event) => {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    setWaiting(true);

    ApiService.loginApi(username, password)
      .then((r) => {
        setWaiting(false);
        loginSuccess(r.token);
      })
      .catch(() => {
        setWaiting(false);
        loginError();
      });
  };

  return (
    <Container maxWidth="md">
      <div className={classes.formContaniner}>
        <h1 className={classes.title}>Login</h1>
        <form className={classes.form} noValidate autoComplete="off">
          <TextField
            id="name"
            classes={classes.input}
            label="Name"
            variant="filled"
            placeholder="Inserisci nome..."
          />
          <TextField
            id="password"
            classes={classes.input}
            label="Password"
            variant="filled"
            type="password"
            placeholder="Inserisci password..."
          />
          <Button
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
            onClick={sendLoginData}
          >
            Invia
          </Button>
          {waiting ? <CircularProgress /> : ""}
        </form>
      </div>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
