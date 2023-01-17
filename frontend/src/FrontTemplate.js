import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import useLocalStorage from './hooks/useLocalStorage';

function FrontTemplate() {
  const [cartItems, setCartItems] = useLocalStorage('cartitems', []);

  // Add items to cart
  const onAdd = (product) => {
    const exists = cartItems.find((x) => x.id === product.id);
    if (exists) {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exists, qty: exists.qty + 1 } : x))
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // Method for reducing items
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) => (x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x))
      );
    }
  };

  // Method for removing items
  const onEmpty = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    }
  };

  // Calculate total price
  const itemsPrice = cartItems.reduce((a, c) => a + c.product_price * c.qty, 0);

  return (
    <>
      <Header cartItems={cartItems} onEmpty={onEmpty} itemsPrice={itemsPrice} />

      <Outlet context={[cartItems, onAdd, onRemove, onEmpty]} />

      <Footer />
    </>
  );
}

export default FrontTemplate;
