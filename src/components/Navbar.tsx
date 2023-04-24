import Link from "next/link";
import { RootState } from "../store"
import { useSelector } from "react-redux"


function Navbar() {
    const totalQuantity = useSelector((store: RootState) => store.cart.totalQuantity)
    const accountInfo = useSelector((store: RootState) => store.account)

    return (
        <div className="flex justify-between py-10 text-lg bg-gray-100 items-center justify-center">
            <div className="ml-20 flex items-center justify-center">
                <a className="text-4xl m-0">🛍️</a>
                <Link className="mx-10 m-0 hover:text-pink-500" href="/">Home</Link>
                <Link className="mx-10 m-0 hover:text-pink-500" href="/products">Products</Link>
                <Link className="mx-10 m-0 hover:text-pink-500" href="/cart">Cart: <span className="bg-red-500 text-white p-1 rounded">{totalQuantity}</span></Link>
            </div>
            <div className="flex mr-20">
                <Link className="flex flex-row items-center justify-center" href="/account">
                    <div className="flex flex-col mr-8">
                        <p>{ accountInfo.firstName },</p>
                        <p>{ accountInfo.lastName }</p>
                    </div>
                    {accountInfo.profileImg != "" ? 
                    <img className="border-4 border-green-400/50 w-[10vh] h-[10vh] object-cover rounded-full" src={accountInfo.profileImg} alt="" />
                    :  
                    <div className="border-4 border-green-400/50 w-[10vh] h-[10vh] object-cover rounded-full bg-green-400"></div>
                    }
                </Link>
            </div>
        </div>
    );
};


export default Navbar;