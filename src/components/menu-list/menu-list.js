import React, {Component} from 'react';
import MenuListItem from '../menu-list-item';
import {connect} from 'react-redux';
import WithRestoService from '../hoc';
import {menuLoaded, menuRequested, menuError, addedToCart} from '../../actions';
import Spinner from '../spinner';

import Error from '../error';

import './menu-list.scss';

class MenuList extends Component {

    componentDidMount(){
        
      const {RestoService, menuItems, menuRequested} = this.props;
        if(!menuItems.length){
          menuRequested();
          RestoService.getMenuItems()
            .then(res => this.props.menuLoaded(res));
        }  
    }

    componentDidCatch = () =>{
      return this.props.menuError();
    }

    render() {

      const {menuItems, loading, error, addedToCart} = this.props;

        if (error){
          return <Error/>
        }
        if(loading) {
          return  <Spinner/>
        }

    return (
      <ul className="menu__list">
        {
          menuItems.map(menuItem => {
            return <MenuListItem 
              key={menuItem.id} 
              menuItem={menuItem} 
              onAddToCart={() => addedToCart(menuItem.id)}/>
            })
        }
      </ul>
    )
  }
};

const mapStateToProps = (state) => {
    return {
        menuItems: state.menu,
        loading: state.loading,
        error: state.error
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         menuLoaded: (newMenu) => {
//             dispatch(menuLoaded(newMenu))
//         }
//     }
// }
const mapDispatchToProps =  {
    menuLoaded,
    menuRequested,
    addedToCart,
    menuError
};


export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(MenuList));