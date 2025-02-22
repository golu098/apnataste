import { CartProvider } from "./cartContext";
import CartPage from "./CartPage";
import CheckoutPage from "./CheckoutPage";
// import CheckoutPage from "./CheckoutPage";

export default function Cart() {
    return (
      // <div className="flex justify-center items-center h-screen text-3xl font-bold">
      //   Hello, I am the Cart Page
      // </div>
      <div>
        <CartPage/>
        <CartProvider/>
        <CheckoutPage/>
        
      </div>
    );
  }
  