class LoginControl extends React.Component {
    constructor(props) {
        super(props);
        this.handleLoginClick = this.handleLoginClick.bind(this);
        this.handleLogoutClick = this.handleLogoutClick.bind(this);
        this.state = { isLoggedIn: false };
    }

    handleLoginClick() {
        this.setState({ isLoggedIn: true });
    }

    handleLogoutClick() {
        this.setState({ isLoggedIn: false });
    }

    render() {
        const isLoggedIn = this.state.isLoggedIn;

        let button;

        if (isLoggedIn) {
            button = <LogstateButton ppp={this.handleLogoutClick} textname="Logout" />;
        } else {
            button = <LogstateButton ppp={this.handleLoginClick} textname="Login" />;
        }

        return (
            <div>
                <Greeting userstate={isLoggedIn} />
                {button}
            </div>
        );
    }
}

function Greeting(props) {
    if (props.userstate) {
        return <h1>Welcome back!</h1>;
    }
    return <h1>Please sign up.</h1>;
}

function LogstateButton(props) {
    return (
        <button onClick={props.ppp}>
            {props.textname}
        </button>
    );
}

ReactDOM.render(
    <LoginControl />,
    document.getElementById('loginarea')
);
