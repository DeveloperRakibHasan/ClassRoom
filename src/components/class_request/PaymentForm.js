import React, {useState} from "react";
import {CardElement, useElements,  useStripe} from "@stripe/react-stripe-js";
import AuthUser from "../auth/AuthUser";

// const CARD_OPTIONS = {
//     iconStyle: "solid",
//     style: {
//         base: {
//             iconColor: '#c4f0ff',
//             color: '#fff',
//             fontWeight: 500,
//             fontSize: '16px',
//         },
//         invalid: {
//             iconColor: '#ffc7ee',
//             color: '#ffc7ee',
//         }
//     }
// }

export default function PaymentForm() {
    const {httpurl} = AuthUser();
    const [success, setSuccess] = useState(false);
    const stripe = useStripe();
    const elements = useElements();

    const paymentSubmit = async (e) => {
        e.preventDefault();
        const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: "card",
            card: elements.getElement(CardElement)
        })

        if (!error) {
            try {
                // const {id} = loadStripe
                const {id} = paymentMethod
                const responce = httpurl.post('payment', {
                    amount: 100,
                    id
                });

                if (responce.data.success) {
                    console.log('successful payment')
                    setSuccess(true)
                }
            } catch (error) {
                console.log('Error:', error)
            }
        } else {
            console.log(error.message)
        }
    }

    return(
        <>
            {!success ?
                <form onSubmit={paymentSubmit}>
                    <fieldset>
                        <div>
                            <CardElement />
                        </div>
                    </fieldset>
                    <button>pay</button>
                </form>
                :
                <div>
                    message
                </div>
            }
        </>
    )
}