import { ProductModel } from "../../models/ProductModel"
import { useDispatch } from "react-redux"
import { increaseAmount } from "@/slices/cartSlice"
import { data } from "../../data/data"


export default function Product({ productInfo }: { productInfo: ProductModel }){ 
    const dispatch = useDispatch()

    return( 
        <div className="flex flex-row items-center justify-center w-full mt-14">
            <div className="flex flex-1 flex-col items-center justify-center">
                <img className="h-[50vh] w-[90%] object-cover" src={productInfo.thumbnailUrl.src} alt="" />
            </div>
            <div className="flex flex-1 flex-col items-center justify-center text-xl">
                <div className="flex flex-col w-[80%] text-left items-start">
                    <p className="text-5xl mb-4">{ productInfo.title }</p>
                    <p className="bg-pink-100 mb-12 px-5 py-1 rounded-full">Sold by <span className="text-red-500">{ productInfo.author }</span></p>
                    <p className="mb-12">{ productInfo.des }</p>
                    <p className="mb-5">Price: ${ productInfo.price }</p>
                    <button className="bg-green-200 text-green-900 px-8 py-3 rounded-lg" onClick={() => { dispatch(increaseAmount({ productInfo })) }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}


export async function getStaticPaths() {
    const titles = data.map((product) => product.title);

    const paths = titles.map((title) => ({
        params: { product: title.toString() },
    }));
    
    return {
        paths,
        fallback: false,
    };
};


export const getStaticProps = async (context: any) => { 
    const productInfo = data.find((product) => product.title == context.params.product);

    return {
        props: {
            productInfo,
        },
    };
};