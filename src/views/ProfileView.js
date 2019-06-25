import React from "react";
import Profile from "../components/Profile";

export class ProfileView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,

        };
    }

    componentWillMount(){
        this.setState({
            loading: false
        });

        // ProfileService.getProfileInfo().then((data) => {
        //     this.setState({
        //         data: [...data],
        //         loading: false
        //     });
        // }).catch((e) => {
        //     console.error(e);
        // });
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }

        return (
            <Profile data={this.state.data}/>
        );
    }
}