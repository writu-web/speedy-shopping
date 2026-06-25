import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../state/store";
import { addItem, removeItem, updateQuantity, clearCart } from "../cartSlice";
import type { CartItem } from "../types/cart.type";

const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const addItemToCart = (item: CartItem) => {
    dispatch(addItem(item));
  };
  const removeItemFromCart = (id: number) => {
    dispatch(removeItem(id));
  };
  const updateItemQuantity = (id: number, quantity: number) => {
    dispatch(updateQuantity({ id, quantity }));
  };
  const clearCartItems = () => {
    dispatch(clearCart());
  };
  const totalItems = cartItems.reduce(
    (total, item) => total + item.quantity,
    0,
  );
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0,
  );
  return {
    cartItems,
    addItemToCart,
    removeItemFromCart,
    updateItemQuantity,
    clearCartItems,
    totalItems,
    totalPrice,
  };
};

export default useCart;
