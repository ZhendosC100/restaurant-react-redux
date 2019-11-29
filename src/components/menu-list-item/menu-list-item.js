import React from 'react';
import './menu-list-item.scss';

const MenuListItem = ({menuItem, onAddToCart}) => {
  const {title, price, url, category, urlicon} = menuItem;
    return (
        
      <li className="menu__item">
        <div className="menu__title"> {title} </div>
        <img className="menu__img" src={url} alt={title}></img>
        <div className="menu__category">Category: <span> {category} </span></div>
        <div className="menu__price">Price: <span> {price}$</span></div>
        <button onClick={onAddToCart} className="menu__btn">Add to cart</button>
        <img className="menu__icon" src={urlicon} alt="icon_pizza"></img>
      </li>
    )
}

export default MenuListItem;