import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { fetchPaymentData } from '../../services/payment/payment'

function loadScript(src) {
    return new Promise((resolve) => {
        const script = document.createElement('script')
        script.src = src
        script.onload = () => {
            resolve(true)
        }
        script.onerror = () => {
            resolve(false)
        }
        document.body.appendChild(script)
    })
}

const __DEV__ = document.domain === 'localhost'

function Razorpay() {
    const [name, setName] = useState('Mehul')

    async function displayRazorpay() {
        const res = await loadScript('https://checkout.razorpay.com/v1/checkout.js')

        if (!res) {
            alert('Razorpay SDK failed to load. Are you online?')
            return
        }

        const { data } = await fetchPaymentData()

        console.log(data)

        const options = {
            key: __DEV__ ? 'rzp_test_uGoq5ABJztRAhk' : 'PRODUCTION_KEY',
            currency: data.currency,
            amount: data.amount.toString(),
            order_id: data.id,
            name: 'Donation',
            description: 'Thank you for nothing. Please give us some money',
            image: 'http://localhost:1337/logo.svg',
            handler: function (response) {
                alert(response.razorpay_payment_id)
                alert(response.razorpay_order_id)
                alert(response.razorpay_signature)
            },
            prefill: {
                name,
                email: 'sdfdsjfh2@ndsfdf.com',
                phone_number: '9899999999'
            }
        }
        const paymentObject = new window.Razorpay(options)
        paymentObject.open()
    }

    return (
        <div className="App">
            <header className="App-header">
                <a
                    className="App-link"
                    onClick={displayRazorpay}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    PayToken Amount
                </a>
            </header>
        </div>
    )
}
export default Razorpay