import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { FUNDING } from '@paypal/react-paypal-js'

export default function MyPaPal() {
    return (
        <PayPalScriptProvider options={{ "client-id": "test" }}>
            <PayPalButtons fundingSource={FUNDING.PAYPAL} />
        </PayPalScriptProvider>
    );
};

// const initialOptions = {
//     "client-id": "test",
//     currency: "USD",
//     intent: "capture",
//     "data-client-token": "abc123xyz==",
// };
// <PayPalScriptProvider options={initialOptions}>
//     <PayPalButtons />
// </PayPalScriptProvider>;

// const [{ isPending }] = usePayPalScriptReducer();

// return (
//     <>
//         {isPending ? <div className="spinner" /> : null}
//         <PayPalButtons />
//     </>
// );

// // get the state for the sdk script and the dispatch method
// const [{ options }, dispatch] = usePayPalScriptReducer();
// const [currency, setCurrency] = useState(options.currency);

// function onCurrencyChange({ target: { value } }) {
//     setCurrency(value);
//     dispatch({
//         type: "resetOptions",
//         value: {
//             ...options,
//             currency: value,
//         },
//     });
// }

// return (
//     <>
//         <select value={currency} onChange={onCurrencyChange}>
//             <option value="USD">United States dollar</option>
//             <option value="EUR">Euro</option>
//         </select>
//         <PayPalButtons />
//     </>
// );