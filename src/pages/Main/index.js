import React, {Component} from 'react';
import {FaSearch , FaSpinner} from 'react-icons/fa';

import api from '../../services/api';
// import estados from '../../services/ibge';
import { estados } from './utils';


import { Container, Form, SubmitButton } from './styles';


class Main extends Component {

    state = {
        newProfile: '',
        profiles: [],
        loading: false,
        location:'',
        order:''
    };

    handleInputChange = e =>{
        this.setState({ 
                        newProfile: e.target.value,
                    });
    };

    handleLocationChange = e =>{
        e.preventDefault()
        this.setState({
            location:e.target.value,
        })
    }

    handleOrderChange = e =>{

        e.preventDefault()
        this.setState({
            order: e.target.value,
        })
    }


    handleSubmit = async  e =>{
        e.preventDefault();

        console.log(this.state)
        this.setState({ loading: true});

        const { newProfile, profiles, order} = this.state;

        var response =''

        if(newProfile){

            response = await api.get(`/users/${newProfile}`)

            // console.log(response)
            
           
            

            const data = {
                nome: response.data.name,
                login: response.data.login,
                criacao: response.data.created_at,
                location: response.data.location,
                bio: response.data.bio
            }

            console.log(data);

        }else{
            response = await api.get(`/users`)

            console.log(response.data)
            console.log(this.state)

            response.data.filter(elemento =>{
                 return elemento.name === 'lukas';
            })

        }     
        

        this.setState({
            loading: false,
        })
        // Adicionar o perfil na lista de perfis
        // this.setState({
        //     profiles: [...profiles, data],
        //     newRepo: '',
               
        // })
    }
    
    render(){

        const { newProfile, loading} = this.state;

    return (
    <Container>
        <h1>
            Perfis
        </h1>

        <Form onSubmit={this.handleSubmit}>

            <input 
            type="text"  
            placeholder="Buscar Usuário"
            value={newProfile}
            onChange={this.handleInputChange}
            />

            <div>
            <select id="location" placeholder="Local" name="location" onChange={this.handleLocationChange}>
                <option value="">Local</option>
                {
                    estados.map(elementos => {
                        return <option value={elementos}>{elementos}</option>
                    })
                }   

            </select>

            <select id="order" name="order" onChange={this.handleOrderChange}>
               
                <option value="">Reordenar</option>
                <option value="1">Usuarios mais novos</option>
                <option value="2">Usuarios mais antigos</option>
            </select>

            <SubmitButton loading={loading}>

                {loading ? 
                <FaSpinner color="#FFF" size={14 }/> : <FaSearch color = "#fff" size={14} />}
                
            </SubmitButton>
            </div>
            
        </Form>

        

    </Container>
    );
}
}

export default Main;