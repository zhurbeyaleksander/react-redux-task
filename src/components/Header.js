import React from 'react'
import PropTypes from 'prop-types'

export class Header extends React.Component{
    render(){
        const {page} = this.props
        if(page === 'index' ){
        return(
            <div><h1>Список товаров</h1></div>
        )
        } else if(page === 'cart'){
            return(
                <div><h1>Корзина</h1></div>
            )
        }
    }
}

Header.propTypes = {
    page: PropTypes.string.isRequired,
}