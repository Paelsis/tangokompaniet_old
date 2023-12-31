import React from 'react'
import { connect } from 'react-redux'
import { resetItemList } from 'redux/actions/actionsShop'
import RemoveIcon from  'material-ui/svg-icons/action/remove-shopping-cart';
import IconButton from 'material-ui/IconButton';
import tkColors from 'Settings/tkColors'


const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
  button: {
    border:0,
    padding:0,
  }
};



let ShoppingCartReset = ({ dispatch }) => {
  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        // Reset the shoping list
        dispatch(resetItemList())
        }}>
        <IconButton 
          type="submit"       
          style={styles.button} 
          tooltip="Töm Kundvagn"
          tooltipPosition="bottom-left"
          iconStyle={styles.mediumIcon}
          style={styles.medium}
        >
         <RemoveIcon color={tkColors.icon} />
        </IconButton>

      </form>
    </div>
  )
}

/*
        <button className="button" style={{backgroundColor:'orange', color:'green'}} type="submit">
          Nollställ hela min shopping lista
        </button>
*/

ShoppingCartReset = connect()(ShoppingCartReset)

export default ShoppingCartReset