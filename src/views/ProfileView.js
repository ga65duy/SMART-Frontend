import React from "react";
import Profile from "../components/Profile";
import UserService from "../services/UserService";

/**
 * ProfileView
 * Author: Maria
 */

export class ProfileView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
    }

    componentWillMount(){
        this.setState({
            loading: true
        });

        //const userId = UserService.getCurrentUser().id;
        UserService.getLoggedInUserInfo().then(user =>{
            this.setState({user: user, loading: false})
        });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Profile user={this.state.user}/>
        );
    }
}