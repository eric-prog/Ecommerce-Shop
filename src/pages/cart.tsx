import { RootState } from "../store"
import { useSelector } from "react-redux"
import Product from "@/components/Product"
import { ProductModel } from "../models/ProductModel"


export default function Cart() {
    const products = useSelector((store: RootState) => store.cart.products) as ProductModel[]
    const { totalPrice, totalQuantity } = useSelector((store: RootState) => store.cart)

    return (
        <div className="flex flex-col items-center justify-center py-10"> 
            <p className="text-4xl my-4">My Cart</p>
            <div className="flex flex-row items-center justify-center my-4">
                <p className="bg-pink-100 py-3 rounded-full px-9 text-2xl mx-2">Total Items: <span className="text-red-500">{totalQuantity}</span></p>
                <p className="bg-green-100 py-3 rounded-full px-9 text-2xl mx-2">Total Price: <span className="text-green-700">${totalPrice}</span></p>
            </div>
            {products.map((prod, i) => (
                <Product
                    key={i}
                    productInfo={prod}
                />
            ))}
        </div>
    )
}
    