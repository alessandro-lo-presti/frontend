import {
  Button,
  CircularProgress,
  Container,
  makeStyles,
  TextField,
} from "@material-ui/core";
import { connect } from "react-redux";
import { loginApi } from "../../services/ApiServices";
import {
  loginErrorAction,
  loginSuccessAction,
  tokenSelector,
} from "./../../redux/slices/loginSlice";

//redux - start
//utility per leggere properties da stato
const mapStateToProps = (state) => {
  console.log("map state to props", state);
  return {
    token: tokenSelector(state),
  };
};
//utility per dispatchare action
const mapDispatchToProps = (dispatch) => {
  console.log("map dispatch to props");
  return {
    loginSuccess: (token) => dispatch(loginSuccessAction(token)),
    loginError: () => dispatch(loginErrorAction()),
  };
};
//redux - finish

const useStyles = makeStyles({
  formContaniner: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
  },
  form: {
    height: "180px",
    width: "500px",
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
  console.log("login component", props);
  const classes = useStyles();

  const { token, loginSuccess, loginError } = props;

  console.log("LOGIN - token", token);

  const sendLoginData = (event) => {
    event.preventDefault();
    const username = document.getElementById("name").value;
    const password = document.getElementById("password").value;

    loginApi(username, password)
      .then((r) => r.json())
      .then((r) => loginSuccess(r.response))
      .catch(loginError);
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
        </form>
      </div>
    </Container>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
