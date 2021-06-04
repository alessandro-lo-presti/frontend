import { Button, Container, makeStyles, TextField } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { tryLogin } from "../../redux/slices/loginSlice";

const useStyles = makeStyles({
    formContaniner: {
        display: 'flex',
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "center"
    },
    form: {
        height: '180px',
        width: '500px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    button: {
        alignSelf: "center"
    },
    title: {
        fontSize: "52px",
    }
});

function Login() {
    const classes = useStyles();
    const {token} = useSelector(state => state.token);
    const dispatch = useDispatch();

    const sendLoginData = (event) => {
        event.preventDefault();
        const username = document.getElementById('name').value;
        const password = document.getElementById('password').value;

        dispatch(tryLogin({username, password}));
    }

    return (
        <Container maxWidth='md'>
            <div className={classes.formContaniner}>
                <h1 className={classes.title}>Login</h1>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="name" classes={classes.input} label="Name" variant="filled" placeholder="Inserisci nome..."/>
                    <TextField id="password" classes={classes.input} label="Password" variant="filled" type="password" placeholder="Inserisci password..."/>
                    <Button className={classes.button} variant="contained" color="primary" type="submit" onClick={sendLoginData}>Invia</Button>
                </form>
            </div>
        </Container>
    );
}

export default Login;