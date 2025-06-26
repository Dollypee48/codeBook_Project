import React from 'react'
import { useTitle } from '../../Hooks/useTitle'
import DashboardCard from './Components/DashboardCard';
import DashboardEmpty from './Components/DashboardEmpty';


const Dashboardpage = () => {

    const orders = true;
    useTitle("Dashboard")
    
  return (
    <main>
        <section>
            <p className='text-2xl text-center font-semibold dark:text-slate-100 my-10 underline underline-offset-8'>
                My Dashboard
            </p>
        </section>

        <section>
            {orders && (
                <div>
                    <DashboardCard/>
                    <DashboardCard/>
                </div>
                
            )}
        </section>

        <section>
            {!orders && <DashboardEmpty/>}
        </section>
    </main>
  )
}

export default Dashboardpage
