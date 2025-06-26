import React from 'react'
import { Link } from 'react-router-dom'


const DashboardCard = ({order}) => {
  return (
    <div className='max-w-4xl m-auto p-2 mb-5 border dark:border-slate-700'>
        <div className='flex justify-between text-sm m-2 font-bold dark:text-slate-200'>
            <span>Order Id: 2</span>
            <span>Total: $48</span>
        </div>

        <div className='flex flex-wrap justify-between max-w-4xl m-auto p-2 my-5'>
            <div className='flex'>
                <Link to='/products/10002'>
                    <img src="https://images.unsplash.com/photo-1580894894513-541e068a3e2b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=650&q=40" alt="Django Framework for Beginners" className='w-32'/>
                
                </Link>

                <div>
                    <Link to='/products/10002'>
                        <p className='text-lg ml-2 dark:text-slate-200'>Django Framework for Beginners</p>
                    </Link>

                    <div className='text-lg m-2 dark:text-slate-200'>
                        <span>$29</span>                    
                    </div>
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default DashboardCard
