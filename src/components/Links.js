import React from 'react'
import PropTypes from 'prop-types'
import { Link  } from "react-router-dom";

export class Links extends React.Component{
    onSwitchPageClick = e => {
        const page = e.currentTarget.value
        this.props.switchPage(page)
    }

    onClearCart = () => {
        const newItems = this.props.items.map( i => {
            return {id: i.id, item: i.item, price: i.price, amount: 0}
        });
        this.props.changeItems(newItems);
        this.countTotal(newItems);
    }

    countTotal = (newItems) =>{

       
        let price = 0;
      
        newItems.forEach(function(item, i, arr) {
        price  += (item.price * item.amount);
    });

          this.props.changeTotal(price);
    }

    render(){
        const {page} = this.props
        if(page === 'index'){
        return(
            <div>
                <Link to="/Cart"><button className="btn btn-primary" onClick={this.onSwitchPageClick} value='cart'>В корзину</button></Link>
            </div>
        )
        } else if(page === 'cart'){
            return(
                <div className="linksButton">
                   <Link to="/"><button className="btn btn-primary" onClick={this.onSwitchPageClick} value='index'>Перейти к списку товаров</button> </Link> &nbsp;  
                   <button className="btn btn-primary" onClick={this.onClearCart}>Очистить корзину</button>
                </div>
            )
        }
    }
}

Links.propTypes = {
    page: PropTypes.string.isRequired,
    switchPage: PropTypes.func.isRequired,
    items: PropTypes.array.isRequired,
    total: PropTypes.number.isRequired,
    changeTotal: PropTypes.func.isRequired,
    changeItems: PropTypes.func.isRequired,
}