import React from 'react'
import './Productlist.css';
import { Link } from 'react-router-dom';
import img2 from '../assests/Ether/Ether1.jpg'
import img1 from '../assests/Earth/Earth1.jpg'
import img3 from '../assests/Air/Air1.jpg'
import img4 from '../assests/Fire/Fire1.jpg'
import img5 from '../assests/AirOne/AirOne1.jpg'
const count =
    [
        { id: 1, name: 'Earth', img: img1 },
        { id: 2, name: 'Ether', img: img2 },
        { id: 3, name: 'Air', img: img3 },
        { id: 4, name: 'Fire', img: img4 },
        { id: 5, name: 'AirOne', img: img5 }];




const Productlist = () => {
    return (
        <div>
            <>
                <div className="text-center p-10">
                    <h1 className="font-bold text-2xl lg:mb-4 ">Our  Products </h1>
                </div>
                <section className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-2 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                    {count.map((product) => (
                        <div key={product.id} className="w-72 h-72 lg:h-[32rem] lg:w-[38rem]  bg-white shadow-md rounded-xl duration-500 hover:scale-101 hover:shadoxl "
                            style={
                                {
                                    position: 'relative', 
                                    overflow:' hidden',
                                    border:'2px Soild Red'
                                }
                            }>

                            <Link to={`/product/${product.name}`}>
                                <img
                                    src={product.img}
                                    alt="Product"
                                    className="rounded-t-xl h-[65%] lg:h-[75%] w-full"
                                    style={{
                                        objectFit:'cover',
                                        aspectRatio:'3/1',
                                    }}
                                />
                                <div className="px-4 py-3 w-75">
                                    <span className="text-gray-400 mr-3 text-lg font-bold uppercase ">WeRev</span>
                                    <p className="text-xl font-bold text-black truncate block capitalize">
                                        {product.name}
                                    </p>
                                </div>
                            </Link>
                        </div>
                    ))}

                </section>

            </>

        </div>
    )
}

export default Productlist
