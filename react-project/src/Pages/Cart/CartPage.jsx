import { useCart } from "../../Context";
import { useTitle } from "../../Hooks/useTitle";
import CartEmpty from "./Component/CartEmpty";
import CartList from "./Component/CartList";

const CartPage = () => {
  const { cartList } = useCart();
  useTitle(`Cart (${cartList?.length || 0})`);

  return (
    <div>
      {(cartList?.length || 0) > 0 ? <CartList /> : <CartEmpty />}
    </div>
  );
};

export default CartPage;
