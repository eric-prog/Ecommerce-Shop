import React, { PropsWithChildren } from "react";
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from 'react'
import { updateTotal } from '@/slices/cartSlice'
import { RootState } from "../store"
import Navbar from "./Navbar";


export default function Layout({ children }: PropsWithChildren) {
  const products = useSelector((store: RootState) => store.cart.products) 
  const account = useSelector((store: RootState) => store.account)

  const dispatch = useDispatch()

  useEffect(() => {
      dispatch(updateTotal())
  }, [products, account, dispatch])

  return (
    <div className="min-h-screen w-full h-full">
      <Navbar />
      <div className="w-full h-full">{children}</div>
    </div>
  );
};

