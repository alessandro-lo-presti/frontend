import { Container, makeStyles, TextField } from "@material-ui/core";

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
        justifyContent: 'space-around',
    },
    title: {
        fontSize: "52px",
    }
});

function Login() {
    const classes = useStyles();

    return (
        <Container maxWidth='md'>
            <div className={classes.formContaniner}>
                <h1 className={classes.title}>Login</h1>
                <form className={classes.form} noValidate autoComplete="off">
                    <TextField id="filled-basic" classes={classes.input} label="Name" variant="filled" />
                    <TextField id="filled-basic" classes={classes.input} label="Password" variant="filled" />
                </form>
            </div>
        </Container>
    );
}

export default Login;