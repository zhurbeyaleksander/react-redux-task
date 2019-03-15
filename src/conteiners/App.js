import React, { Component } from 'react';
import './css/bootstrap.css';
import {Header} from '../components/Header'
import {Table} from '../components/Table'

import {Links} from '../components/Links'
import {connect} from 'react-redux'
import {switchPage} from '../actions/PageSwitchAction'
import {changeItems, changeTotal} from '../actions/TableActions'

import { BrowserRouter, Route } from 'react-router-dom';

import {Cart} from '../components/Cart'



class App extends Component {
  render() {
    const {page, items, total, switchPageAction, changeItemsAction, changeTotal} = this.props


    return (
      <BrowserRouter>
      <div className="container mainCont rounded">

        <Header page={page.page} />
        <Route exact path="/"  render={
            () => {
                return (
                  <Table page={page.page} items={items.items} total={total} changeItems={changeItemsAction} changeTotal={changeTotal} />  
            )
            }
            }/>

        <Route  path="/Cart"  render={
            () => {
                return (
                  <Cart page={page.page} items={items.items} total={total} changeItems={changeItemsAction} changeTotal={changeTotal} />  
            )
            }
            }/>
        <Links page={page.page} changeItems={changeItemsAction} switchPage={switchPageAction} 
        items={items.items} total={total} changeTotal={changeTotal}/>
      </div>
      </BrowserRouter>

    );
  }
}

const mapStateToProps = store => {
  console.log('Это из App')
  console.log(store)
  return {
    page: store.pageSwitch,
    items: store.goodsStore,
    total: store.goodsStore.total,
  }
}

const mapDispatchToProps = dispatch => {
  return{
    switchPageAction: page => dispatch(switchPage(page)),
    changeItemsAction: items => dispatch(changeItems(items)),
    changeTotal: total => dispatch(changeTotal(total)), 
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App)
