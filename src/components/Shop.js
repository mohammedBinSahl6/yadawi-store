import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { products } from "../data";
import Load from "./Load";
import OpenCart from "./OpenCart";
export default function Shop() {
  const [newProducts, setNewProducts] = useState(products);
  const [isLoading, setIsLoading] = useState(false);
  // const getProducts = ()=>{
  //     let requestOption = {
  //         method : 'GET'
  //     }
  //     let apiURL = process.env.REACT_APP_BASE_API_URL
  //     fetch(`${apiURL}/products`,requestOption).then(response => {
  //         console.log(response)
  //         return response.json()
  //     }).then(result =>{
  //         const {products} = result;
  //         setNewProducts(products)
  //         setIsLoading(false)
  //         console.log(result)
  //     }).catch(error =>{
  //         console.log(error)
  //         setIsLoading(false)
  //     })

  // }
  const myref = useRef();
  useEffect(() => {
    myref.current?.scrollIntoView({ behavior: "smooth" });
    console.log("the products$$ : ", newProducts);
  }, []);
  return (
    <div>
      {isLoading ? (
        <Load />
      ) : (
        <div className="shop starter " id="top" ref={myref}>
          <div className="row p-5">
            <h1 className="text-center">Explore our items</h1>
          </div>

          <div className="row">
            <div className="col-sm products-body p-3">
              <div className="row">
                {newProducts.map((p) => (
                  <div key={p.id} className="col-sm-4  f-holder">
                  <Link className="empty-link" to={`/product/${p.id}`}>
                    <article class="card">
                      <div class="temporary_text">
                        <img className="pro-imge" src={p.image} />
                      </div>
                      <div class="card_content">
                        <span class="card_title">{p.title}</span>
                        <span class="card_subtitle">
                          Perfect Product for you coming from our Culture.
                        </span>
                        <p class="card_description">
                         {p.disc}
                        </p>
                      </div>
                    </article>
                  </Link>
                </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      <OpenCart />
    </div>
  );
}
