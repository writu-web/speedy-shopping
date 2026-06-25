import useCart from "../hooks/useCart";
import useThrottle from "../../../shared/hooks/useThrottle";
const Cart =()=>{
    const { cartItems, removeItemFromCart, updateItemQuantity,clearCartItems, addItemToCart,totalItems, totalPrice } = useCart();
    const throttledRemove = useThrottle(id=>removeItemFromCart(id),300)
    const throttleUpdateQuantity = useThrottle((id,quantity)=>updateItemQuantity(id,quantity),200)
    return <div>
            Cart {totalItems}
            <ul>
                {cartItems.map((item)=>(
                    <li className="w-120 h-200" key={item.id}>
                        {item.name} - {item.price} x {item.quantity}
                        <button className="px-2 py-2 mx-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => throttledRemove(item.id)}>Remove</button>
                        <button className="px-2 py-2 mx-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => throttleUpdateQuantity(item.id, item.quantity + 1)}>+</button>
                        <button  className="px-2 py-2 mx-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => throttleUpdateQuantity(item.id,item.quantity - 1)}>-</button>
                    </li>
                ))}
            </ul>
            <button  className="px-2 py-2 mx-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => clearCartItems()}>Clear Cart</button>
            <button className="px-2 py-2 mx-2 my-2 bg-blue-500 text-white rounded hover:bg-blue-600" onClick={() => addItemToCart({ id: 1, name: "Sample Item", price: 10, quantity: 1 })}>Add Sample Item</button>
            <p>Total Items: {totalItems}</p>
            <p>Total Price: ${totalPrice.toFixed(2)}</p>
        </div>
}

export default Cart