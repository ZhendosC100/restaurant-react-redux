import React from 'react';
import './cart-table.scss';
import {connect} from 'react-redux';
import { deleteFromCart } from '../../actions';

const CartTable = ({items, deleteFromCart}) => {
    
    return ( 
      <>
        <div className="cart__title">Your order:</div>
        <div className="cart__list">
          { 
            items.map(item => {
                const {title, price, url, id, counter} = item;         
              return (
                <div key={id} className="cart__item">
                  <img src={url} className="cart__item-img" alt="Cesar salad"></img>
                  <div className="cart__item-title"> {title} </div>
                  <div className="cart__item-price">{counter} X {price}$ | {counter*price} $</div>
                  <div onClick ={() => deleteFromCart(id)} className="cart__close">&times;</div>
                </div>
              )
            })
          }    
        </div>
    </>
  );
};

const mapStateToProps = ({menu}) => {
  return {
    items: menu.filter(item => item.counter > 0)
  }
};

const mapDispatchToProps = {
  deleteFromCart
}


export default connect(mapStateToProps, mapDispatchToProps)(CartTable);