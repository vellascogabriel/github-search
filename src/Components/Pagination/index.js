import React, { Component } from 'react';


class Pagina extends Component{

    state = {
        currentPage: 1,
        nextPage: currentPage+1,
        prevPage: currentPage-1
    }

    render(){
        return <h1></h1>
    }
}

export default Pagina;