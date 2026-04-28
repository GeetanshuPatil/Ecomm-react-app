// features/cart/pages/Cart.jsx

import { useSelector } from "react-redux";
import { selectCartItems } from "../cartSelectors";
import CartItem from "../components/CartItem";
import CartSummary from "../components/CartSummary";
import BackButton from "../../../shared/components/BackButton";

const Cart = () => {
const items = useSelector(selectCartItems) || [];

  if (items.length === 0) {
    return <p className="p-4">Your cart is empty</p>;
  }

  return (
    <div className="grid lg:grid-cols-3 gap-8">
  <div className="p-6">
      <BackButton />
  {/* LEFT: Items */}
  <div className="lg:col-span-2 flex flex-col gap-4">
    {items.map((item) => (
      <CartItem key={item.id} item={item} />
    ))}
  </div>

  {/* RIGHT: Summary */}
  <div>
    <CartSummary />
  </div>

</div>
</div>
  );
};

export default Cart;