import { ProductModel } from "@/models/ProductModel"
import { increaseAmount, decreaseAmount, removeProduct } from "../slices/cartSlice"
import { useDispatch } from "react-redux"


export default function Product({ productInfo }: { productInfo: ProductModel }) {
    const dispatch = useDispatch()

    return (
        <div className="rounded-2xl bg-gray-200 my-8 flex-1 w-[90%] flex flex-row items-center justify-center p-10">
            <div className="flex-auto w-1/4 flex flex-col">
                <img className="rounded-2xl w-full h-[30vh] object-cover" src={productInfo.thumbnailUrl.src} alt="" />
            </div>
            <div className="flex-auto w-2/4 flex flex-col px-10">
                <p className="text-2xl mb-6">{productInfo.title}</p>
                <p className="text-base">{productInfo.des}</p>
            </div>
            <div className="flex-auto w-[10vh] flex flex-col items-center justify-center text-xl">
                <p className="text-green-700 text-base">Item Price: ${productInfo.price}</p>
                <div className="my-5 flex flex-row items-center justify-center">
                    <button className="rounded-lg bg-zinc-300 w-[5vh] h-[5vh]" onClick={() => { if (productInfo.amount <= 0) {
                        dispatch(removeProduct({ productInfo }))
                        return
                    } 
                    dispatch(decreaseAmount({ productInfo })) }}>
                        -
                    </button>
                    <p className="mx-4">{productInfo.amount}</p>
                    <button className="rounded-lg bg-zinc-300 w-[5vh] h-[5vh]" onClick={() => { dispatch(increaseAmount({ productInfo })) }}>+</button>
                </div>
                <button className="text-base text-red-500" onClick={() => { dispatch(removeProduct({ productInfo })) }}>Remove</button>
            </div>
        </div>
    )
}