import React from 'react'
import { Link } from 'react-router-dom'
Link

const Footer = () => {
  return (
    <div style={{height:'250px',marginTop:'100px'}} className='mt-5 w-full bg-violet-600 text-white'>
      <div className='flex justify-between p-4'>
        <div style={{width:'400px'}} className='intro'>
          <h5 className='text-xl font-bold'><i className='fa-solid fa-truck-fast me-2'></i>E-Cart </h5>
          <p>Designed and built with all the love in the world by the luminar team with the help of our contributors.</p>
          <p>Code licensed MIT, docs CC BY 3.0.</p>
          <p>Currently v5.3.3.</p>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font bold'>Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Landing page</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Home page</Link>
          <Link to={'history/'} style={{ textDecoration: 'none', color: 'white' }}>watch History page</Link>
        </div>
         {/* guides */}
         <div className='flex flex-col'>
          <h5 className='text-xl font bold'>Guide</h5>
          <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}>React</a>
          <a href="https://react-bootstrap.netlify.app/" style={{ textDecoration: 'none', color: 'white' }} target='_blank'>React Bootstap</a>
          <a href="https://www.npmjs.com/package/react-router-dom" style={{ textDecoration: 'none', color: 'white' }}>React R outer</a>
        </div>
        <div className='flex flex-col'>
          <h5 className='text-xl font bold'>Contact</h5>
          <div className='d-flex flex-row'>
            <input type="text" placeholder='enter your email here...' className='form-control me-2' />
            <button className='btn btn-info'><i class="fa-solid fa-arrow-right "></i></button>
          </div>

          <div className='flex justify-between'>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-instagram"></i></a>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-square-twitter"></i></a>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-facebook"></i></a>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-github"></i></a>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin"></i></a>
            <a href="https://react.dev/" style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-phone"></i></a>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer