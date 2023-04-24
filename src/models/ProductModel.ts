import { StaticImageData } from "next/image";


export interface CartSliceModel {
    products: ProductModel[],
    totalPrice: number,
    totalQuantity: number,
}


export interface ProductModel {
    thumbnailUrl: StaticImageData,
    title: string,
    author: string,
    des: string,
    price: number,
    amount: number,
}
