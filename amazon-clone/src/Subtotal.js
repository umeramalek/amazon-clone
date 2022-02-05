import React from 'react'
import "./Subtotal.css"
import CurrencyFormat from 'react-currency-format'

// - The code is a function that returns the total amount of money spent. - The code starts by declaring a variable called "value" which is set to 0, and then declares another variable called "displayType" which is set to text. - Next, it sets the thousandSeparator property of currencyFormat to true so that when we display numbers in our output, they will be separated by commas instead of periods. - Then it sets the prefix property of currencyFormat to "$". - Finally, it creates an element with className="subtotal__gift", inputs type="checkbox", and outputs value={0}.
// The code is an example of a function that returns the total amount of money in the current order.

function Subtotal() {
    return (
        <div className="subtotal">
            <CurrencyFormat
            // the one inside the render text is actually being rendered on the face of the page 
            renderText={(value) => (
                <>
                <p>
                    Subtotal (0 items) : <strong>{0}</strong>
                </p>
                <small className="subtotal__gift">
                    <input type="checkbox" /> 
                    This order contains a gift
                </small>
                </>
            )}
            // two decimal places
            decimalScale={2}
            value={0}
            displayType={"text"}
            // if the value is over a 1000 it will seperate the price by thousand
            thousandSeparator={true}
            // dollar
            prefix={"$"}
            />

            <button> Proceed to Checkout </button>
        </div>
    )
}

export default Subtotal
