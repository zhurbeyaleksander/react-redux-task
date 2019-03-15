import React from 'react'
import PropTypes from 'prop-types'

export class Cart extends React.Component{
    onPlusClick = e => {
        const newItems = this.props.items.map(i =>{
            if(+i.id === +e.currentTarget.value){
            return {id: i.id, item: i.item, price: i.price, amount: i.amount + 1}
            } else{
                return {id: i.id, item: i.item, price: i.price, amount: i.amount}
            }
        }
            
            );
        this.props.changeItems(newItems);
        this.countTotal(newItems);
    }

    onMinusClick = e => {
        const newItems = this.props.items.map(i =>{
            if(+i.id === +e.currentTarget.value){
            return {id: i.id, item: i.item, price: i.price, amount: i.amount - 1}
            } else{
                return {id: i.id, item: i.item, price: i.price, amount: i.amount}
            }
        }
            
            );

        this.props.changeItems(newItems);
        this.countTotal(newItems);
    }

    onClearCart = () => {
        const newItems = this.props.items.map( i => {
            return {id: i.id, item: i.item, price: i.price, amount: 0}
        });

        this.props.changeItems(newItems);
        this.countTotal(newItems);
    }

    onClearItemFromCart = e => {
        const newItems = this.props.items.map(i =>{
            if(+i.id === +e.currentTarget.value){
            return {id: i.id, item: i.item, price: i.price, amount: 0}
            } else{
                return {id: i.id, item: i.item, price: i.price, amount: i.amount}
            }
        }
            
            );

        this.props.changeItems(newItems);
        this.countTotal(newItems);
    }

    countTotal = (newItems) =>{
        let price = 0;
      
        newItems.forEach(function(item) {
        price  += (item.price * item.amount);
    });

          this.props.changeTotal(price);
    }

    render(){
        const {page, items, total} = this.props
        const goodsItems = items.map(i => 
            <tr key={i.id}>
            <td>{i.id}</td>
            <td>{i.item}</td>
            <td>{i.price} $</td>
            <td>{i.amount}</td>
            <td><button className="btn btn-primary" onClick={this.onPlusClick} value={i.id}>+</button></td>
            </tr>
            );
        const goodsCart = items.map( i => {
            if(i.amount > 0){
            return(
            <tr key={i.id}>
            <td>{i.id}</td>
            <td>{i.item} </td>
            <td>{i.price * i.amount} $</td>
            <td>{i.amount} </td>
            <td><button className="btn btn-primary" onClick={this.onMinusClick} value={i.id}>-</button></td>
            <td><button className="btn btn-primary" onClick={this.onClearItemFromCart} value={i.id}>Удалить всё</button></td>
            </tr>
            )
            } 
        }
            );

     
        
        if(page === 'index'){
        return(
            <div>
                <table className="table table-borderless">
        <thead className="table-dark rounded">
    <tr>
    <th scope="col"></th>
      <th scope="col">Название</th>
      <th scope="col">Цена</th>
      <th scope="col">Количество</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
            {goodsItems}
            </tbody>
  </table>
            </div>
        )
        } else if(page === 'cart'){
            return(
                <div>
                    <table className="table table-borderless">
        <thead className="table-dark rounded">
    <tr>
    <th scope="col"></th>
      <th scope="col">Название</th>
      <th scope="col">Стоимость</th>
      <th scope="col">Количество</th>
      <th scope="col"></th>
      <th scope="col"></th>
    </tr>
  </thead>
  <tbody>
  {goodsCart}
  </tbody>
  </table>
       <b>Итого:</b> {total}
                </div>
                
            )
        }

    }
}

Cart.propTypes = {
    page: PropTypes.string.isRequired,
    items: PropTypes.array.isRequired,
    changeItems: PropTypes.func.isRequired,
    total: PropTypes.number.isRequired,
    changeTotal: PropTypes.func.isRequired,
}