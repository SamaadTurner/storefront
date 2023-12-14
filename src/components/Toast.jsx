import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import MuiAlert from '@mui/material/Alert';
import ShoppingCartRoundedIcon from '@mui/icons-material/ShoppingCartRounded';
import SimpleCart from './SimpleCart/SimpleCart';
import Products from './Products/Products';


const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export default function CustomizedSnackbars() {
  const [state, setState] = React.useState({
    right: false,
  });

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ right: open });
  };

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    // Close the right drawer
    setState({ right: false });
  };

  const drawerContent = (
    <div sx={{ width: 250, padding: 2 }}>
        <SimpleCart />
        <Products />
      <Button onClick={handleClose}>Close</Button>
    </div>
  );

  return (
    <React.Fragment>
      <ShoppingCartRoundedIcon onClick={toggleDrawer(true)}/>
      <Drawer
        anchor="right"
        open={state.right}
        onClose={toggleDrawer(false)}
      >
        {drawerContent}
      </Drawer>
    </React.Fragment>
  );
}
