import React, {useState} from "react";
import {useStripe, useElements, CardElement} from "@stripe/react-stripe-js";
import AuthUser from "../auth/AuthUser";


export default function PaymentForm() {
    const {httpurl} = AuthUser();
    const [success, setSuccess] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const paymentSubmit = async (event) => {
        event.preventDefault();

        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement),
        })
        console.log(paymentMethod)
        // if (!error) {
        //     try {
        //         const {id} = paymentMethod
        //         const response = await httpurl.post('payment', {
        //             amount: 100,
        //             id
        //         });
        //
        //         if (response.data.success) {
        //             console.log('successful payment')
        //             setSuccess(true)
        //         }
        //     } catch (error) {
        //         console.log('Error:', error)
        //     }
        // } else {
        //     console.log(error.message)
        // }
    }

    return(
        <>
            {
                !success ?

                    <form onSubmit={paymentSubmit}>
                        <fieldset>
                            <CardElement id='card-element'/>
                        </fieldset>
                        <button className='bg-green-500 text-white px-4 py-1 mt-4 mb-10'>pay</button>
                    </form>
                    :
                    <span>Success</span>
            }
        </>
    )
}