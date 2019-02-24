import React, { Component } from 'react';
import logo from './logo.svg';
import './css/bootstrap.css';
import {Header} from '../components/Header'
import {Table} from '../components/Table'
import {Links} from '../components/Links'
import {connect} from 'react-redux'
import {switchPage} from '../actions/PageSwitchAction'
import {changeItems, changeTotal} from '../actions/TableActions'

class App extends Component {
  render() {
    const {page, items, total, switchPageAction, changeItemsAction, changeTotal} = this.props
    return (
      <div className="container mainCont rounded">
        <Header page={page.page} />
        <Table page={page.page} items={items.items} total={total}
         changeItems={changeItemsAction} changeTotal={changeTotal} />
        <Links page={page.page} changeItems={changeItemsAction} switchPage={switchPageAction} 
        items={items.items} total={total} changeTotal={changeTotal}/>
      </div>
    );
  }
}

const mapStateToProps = store => {
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
