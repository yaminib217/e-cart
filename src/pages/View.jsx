import React from 'react'
import Header from '../components/Header'
Header

const View = () => {
    return (
        <>
            <Header />
            <div className='flex flex-col mx-5'>
                <div className='grid grid-cols-2 item-center h-screen'>
                    <img width={'450px'} height={'200px'} src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_640.jpg" alt="" />
                  <div>
                        <h3 className='font-bold'>PID : ID </h3>
                        <h1 className='text-5xl font-bold'>product name</h1>
                        <h4 className='font-bold text-red-600 text-2xl'>$ 250</h4>
                        <h4> Brand: Brand</h4>
                        <h4>category : category</h4>
                        <p>
                            <span className='font-bold'>Description</span>: Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos consectetur laborum itaque
                            provident vitae quia soluta error consequatur eligendi libero aperiam repudiandae dolor architecto labore veritatis nostrum excepturi,
                            iste expedita
                            <div className='flex justify-between mt-5'>
                                <button className='bg-blue-600 text-white p-2'>Add to Wishlist</button>
                                <button className='bg-green-600 text-white p-2'>Add to Cart</button>
                            </div>
                        </p>
                  </div>
                </div>
            </div>
        </>
    )
}

export default View