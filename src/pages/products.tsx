import { data } from "../data/data" 
import { ProductModel } from "../models/ProductModel";
import Link from 'next/link';


export default function Products({ productArr } : { productArr: ProductModel[] }) {
    return (
      <div className="flex flex-col items-center justify-center py-10">
        <p className="text-4xl mb-10">Products</p>
        <div className="flex flex-row flex-wrap justify-center w-full">
          {
              productArr.map((product, index) =>  
                  <Link className="m-6" key={index} href= {`products/${product.title}`}>
                      <img className="h-[50vh] w-[50vh] object-cover" src={product.thumbnailUrl.src} alt="" />
                  </Link>
              )
          }
        </div>
      </div>
    )
}
  

export const getStaticProps = async (context: any) => {
    const productArr = data
    return {
      props: {
        productArr,
      },
    };
};