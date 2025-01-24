import React from 'react'
import bag from '../assests/accessories/bag1.jpg'
import holder1 from '../assests/accessories/holder1.jpg'
import halmet1 from '../assests/accessories/halmet1.jpg'
import charger1 from '../assests/accessories/Charger1.jpg'
import lock1 from '../assests/accessories/lock1.jpg'
import Airpump from '../assests/accessories/Airpump.jpg'
import toolkit from '../assests/accessories/toolkit.jpg'

const accessoriesItems = [
  {
    id: 1,
    name: "Halmet",
    imgsrc: halmet1

  },
  {
    id: 2,
    name: "Charger",
    imgsrc: charger1

  },
  {
    id: 3,
    name: "Phone Holder",
    imgsrc: holder1

  },
  {
    id: 4,
    name: "Lock",
    imgsrc: lock1

  },
  {
    id: 5,
    name: "Bag",
    imgsrc: bag

  },{
    id:6,
    name:"Air Pump",
    imgsrc:Airpump
  },{
    id:7,
    name:"Toolkit",
    imgsrc:toolkit

  }
]

const Accessories = () => {
  return (
    <div>
      <section className="w-fit mx-14 grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-10 mt-10 mb-5 ">
        {accessoriesItems.map((product) => (
          <div key={product.id} className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-2xl  ">
            <div>
              <img
                src={product.imgsrc}
                alt="Product"
                style={{width:'90%',aspectRatio:'8/9', objectFit:'contain',}}
              />
              <div>
              </div>
            </div>
            <span className="text-gray-400 mr-3 uppercase text-xs">WeRev</span>
            <p className="text-lg font-bold text-black truncate block capitalize">
              {product.name}
            </p>
          </div>
        ))}

      </section>

    </div>
  )
}

export default Accessories
