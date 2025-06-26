import React from 'react'
import { useLocation } from 'react-router-dom'
import { useTitle } from '../../Hooks/useTitle'
import OrderSuccess from './Components/OrderSuccess'
import OrderFail from './Components/OrderFail'


const OrderPage = () => {

    useTitle("Order Summary")
    const {state} = useLocation()
  return (
    <main>
    {state.status ? (
      <OrderSuccess orderData={state.orderData} />
    ) : (
      <OrderFail message={state.message} />
    )}
    </main>
  )
}

export default OrderPage
