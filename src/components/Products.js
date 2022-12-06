import styles from '../products.module.css'


const Products = ()=>{
   const products = [
    {
        id: 1 ,
        name : 'product 1',
        price : 150
    },
    {
        id: 2 ,
        name : 'product 2',
        price : 100
    },  {
        id: 3 ,
        name : 'product 3',
        price : 250
    },  {
        id: 4 ,
        name : 'product 4',
        price : 230
    },
   ]
   
   
   
    return(
        <div className={styles.container}>

            {products.map((p ,index)=>(
                 <div key={index} className={styles.product}>
                 <div className={styles.product_img}>
                     <img src='' alt='' />
                 </div>
                 <div className={styles.product_info}>
                     <div className={styles.product_name}>
                         <p>
                            {p.name}
                         </p>
                         <p>
                             {p.price}
                         </p>
                     </div>
                 </div>
             </div>
            ))}
           
        </div>
    )
};
export default Products