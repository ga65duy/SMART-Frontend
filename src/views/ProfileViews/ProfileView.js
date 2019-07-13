import React from "react";
import Profile from "../../components/ProfileComponents/Profile";
import UserService from "../../services/UserService";
import UniversityService from "../../services/UniversityService";
import Page from "../../components/Page";

/**
 * ProfileView
 * Shows the profile of the user, that can be edited
 * Author: Maria
 */

export class ProfileView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
        };
        this.updateProfile = this.updateProfile.bind(this);
        this.resetSaveButton = this.resetSaveButton.bind(this);
    }

    componentWillMount() {
        this.setState({
            loading: true
        });

        UserService.getLoggedInUserInfo().then(user => {
            UniversityService.getUniversities().then((universities) => {
                this.setState({
                    user: user,
                    universities: [...universities],
                    loading: false
                });
            }).catch((e) => {
                console.error(e);
            });
        }).catch((e) => {
            console.error(e);
        });
    }

    updateProfile() {
        UserService.updateUser(this.state.user, this.state.user.isUniversityUser).then(() => {
            this.setState({
                    userUpdated: true
                }
            )
        }).catch((error) => {
            console.error(error)
        })
    }

    resetSaveButton() {
        this.setState({
            userUpdated: false
        })
    }

    render() {
        if (this.state.loading) {
            return (<h2>Loading...</h2>);
        }
        return (
            <Page>
                <Profile user={this.state.user} universities={this.state.universities}
                         updateProfile={this.updateProfile} resetSaveButton={this.resetSaveButton}
                         userUpdated={this.state.userUpdated}/>
            </Page>
        );
    }
}