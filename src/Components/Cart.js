import { useSelector } from "react-redux";
import CartItem from "./CartItem";

const Cart = () => {
  const cartItems = useSelector((store) => store?.cart?.cartItems);
  return (
    <div className="w-1/2 m-auto">
        <div className="text-center text-3xl font-bold mt-2">Cart</div>
      {cartItems?.map((menuList) => (
        <CartItem menu={menuList} key={menuList?.card?.info?.id} />
      ))}
    </div>
  );
};

export default Cart;
