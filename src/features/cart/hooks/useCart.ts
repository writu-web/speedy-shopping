import { useCallback, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../../state/store";
import { addItem, removeItem, updateQuantity, clearCart } from "../cartSlice";
import type { CartItem } from "../types/cart.type";

const useCart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const addItemToCart = useCallback(
    (item: CartItem) => {
      dispatch(addItem(item));
    },
    [dispatch],
  );
  const removeItemFromCart = useCallback(
    (id: number) => {
      dispatch(removeItem(id));
    },
    [dispatch],
  );
  const updateItemQuantity = useCallback(
    (id: number, quantity: number) => {
      dispatch(updateQuantity({ id, quantity }));
    },
    [dispatch],
  );
  const clearCartItems = useCallback(() => {
    dispatch(clearCart());
  }, [dispatch]);
  const totalItems = useMemo(
    () => cartItems.reduce((total, item) => total + item.quantity, 0),
    [cartItems],
  );
  const totalPrice = useMemo(
    () =>
      cartItems.reduce((total, item) => total + item.price * item.quantity, 0),
    [cartItems],
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
