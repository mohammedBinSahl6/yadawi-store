import { useContext, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../App";
import proda from "../imgs/product.jpg";

export default function Cart() {
  const { cart, setCart } = useContext(CartContext);
  const [removed, setRemoved] = useState(false);

  function increace(id) {
    const selected = cart.find((item) => item.id === id);
    selected.count++;
    const filtered = cart.filter((item) => item.id !== id);
    console.log(filtered);
    setCart([...filtered, selected]);
  }

  function decreace(id) {
    const selected = cart.find((item) => item.id === id);
    selected.count--;
    const filtered = cart.filter((item) => item.id !== id);
    console.log("filtred is " + filtered);
    setCart([...filtered, selected]);
  }

  function removeItem(id) {
    const filtered = cart.filter((item) => item.id !== id);
    console.log("filtered is" + filtered);
    setCart(filtered);
    setRemoved(true);
  }
  const myref = useRef();
  useEffect(() => {
    myref.current?.scrollIntoView({ behavior: "smooth" });
    console.log("the cart ##" + cart);
  }, []);
  return (
    <div className="cart starter" ref={myref}>
      <div className="row">
        <h1 className="text-center">
          My Cart <i className="bx bxs-cart-alt"></i>
        </h1>
      </div>
      {removed ? (
        <div className="alert alert-danger rmv-msg">
          <h2 className="text-center">Removed</h2>
        </div>
      ) : null}

      <div className="container-fluid p-5">
        <ul className="list-group">
          {cart.length === 0 ? (
            <div className="h1 text-center p-3">The cart is empty..</div>
          ) : (
            cart?.map((cartP) => (
              <li key={cartP.id} className="list-group-item">
                <div className="cart-item p-3">
                  <h2 className="remove-btn">
                    <i
                      className="bx bxs-trash-alt text-danger"
                      onClick={() => removeItem(cartP.id)}
                      onMouseLeave={() => setRemoved(false)}
                    ></i>
                  </h2>
                  <div className=" p-3 row ">
                    <div className="col-sm">
                      <img className="img-pro" src={cartP.image} />
                    </div>
                    <div className="col-sm d-flex">
                      <h5 className="">{cartP?.title}</h5>
                    </div>
                  </div>
                  <div className=" p-3 f-holder">
                    <div className="d-flex f-holder counter">
                      <button
                        className="btn"
                        onClick={() => increace(cartP.id)}
                        disabled={cartP.count == cartP.qty}
                      >
                        <i class="bx bx-plus-circle counter-btn"></i>
                      </button>
                      <h4 className="display-6">{cartP.count}</h4>
                      <button
                        className="btn"
                        onClick={() => decreace(cartP.id)}
                        disabled={cartP.count == 1}
                      >
                        {" "}
                        <i class="bx bx-minus-circle counter-btn"></i>
                      </button>
                    </div>
                  </div>
                  <div className="row">
                    <p>Item Price : ${cartP.price}</p>
                    <h4>TOTAL : {cartP.price * cartP.count}</h4>
                  </div>
                </div>
              </li>
            ))
          )}
        </ul>

        <div className="row p-5">
          <div className="f-holder">
            <Link to="/checkout" className="btn btn-dark">
              Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
