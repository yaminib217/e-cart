import React, { useEffect } from 'react'
import Header from '../components/Header'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { fetchProducts } from '../redux/slices/productSlice'
Link
Header

const Home = () => {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchProducts())
  },[])
  return (
    <>
    <Header insideHome={true}/>
    <div style={{paddingTop:'100px'}} className='container px-4 mx-auto'>
        <div className='grid grid-cols-4 gap-4'>
            <div className='rounded border p-2 shadow'>
                <img width={'100%'} height={'200px'} src="https://cdn.pixabay.com/photo/2017/05/07/19/32/strawberry-2293337_640.jpg" alt="" />
                <div className='text-center'>
                    <h3 className='text-xl font-bold'>stawberry</h3>
                    <Link to={'/id/view'} className='bg-violet-600 rounded p-1 mt-3 text-white inline-block'>view more...</Link>

                </div>

            </div>
            
        </div>

    </div>
    </>
  )
}

export default Home