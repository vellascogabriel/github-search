import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


import api from '../../services/api';

import Container from  '../../Components/Container';
import { Loading, User, UserData } from './styles'

class Profile extends Component{

    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                login: PropTypes.string,
            })
        }).isRequired,
    };

    state = {
        profile: {},
        loading: true
    }

    async componentDidMount() {

        const { match } = this.props;

        const profileName = match.params.login;

        console.log(profileName);

        const resposta = await api.get(`/users/${profileName}`);

        this.setState({
            profile: resposta.data,
            loading: false
        })
    }


    render(){

        const { profile, loading } = this.state;

        if(loading){
            return <Loading>Carregando</Loading>
        }
        
        return (
        <Container>
            <User>
                <Link to="/">
                Voltar para pesquisa
                </Link>
                <img src={profile.avatar_url} alt={profile.avatar_url}/>

                <h1>{profile.name}</h1>

                <UserData>
                        <h3>{profile.location}</h3>
                        <h3>Folowing: {profile.following}</h3>
                        <h3>Followers: {profile.followers}</h3>
                        <h3>Desde: {profile.created_at}</h3>
                </UserData>

            </User>
        </Container>
        )
    }
}

export default Profile;
