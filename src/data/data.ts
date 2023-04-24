import { ProductModel } from "@/models/ProductModel"
import LegoImg from "../assets/lego.jpg"
import MacbookImg from "../assets/macbook.jpg"
import NetflixImg from "../assets/netflix.jpg"
import XBox from "../assets/xbox.jpg"


export const data: ProductModel[] = [
    {
        thumbnailUrl: LegoImg,
        title: "Lego",
        author: "Jake",
        des: "WALL-E is a 2008 American computer-animated science fiction film produced by Pixar Animation Studios and released by Walt Disney Pictures.", 
        price: 100,
        amount: 0
    },
    {
        thumbnailUrl: MacbookImg,
        title: "Macbook",
        author: "Cameron",
        des: "Our most popular laptop, MacBook Air is supercharged by M1 and M2 chips. Featuring FaceTime HD camera, Touch ID and vibrant Retina display.", 
        price: 1000,
        amount: 0
    },
    {
        thumbnailUrl: NetflixImg,
        title: "Netflix",
        author: "Lebron",
        des: "Netflix, Inc. is an American media company based in Los Gatos, California.", 
        price: 20,
        amount: 0
    },
    {
        thumbnailUrl: XBox,
        title: "XBox",
        author: "Sally",
        des: "Experience the new generation of games and entertainment with Xbox. Explore consoles, new and old Xbox games and accessories to start your adventure.", 
        price: 500,
        amount: 0
    }
]

