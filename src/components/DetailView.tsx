import React from 'react'


// Produktsida- Productpage
export default class DetailView extends React.Component {
    render() {
        return (
            <div>
                <h2>
                    The title
                </h2>
                <p>
                    Descerption
                </p>
                <img src="" alt="the pic of the movie" />
                <p>price</p>
                <button>add to cart</button>
            </div>
        )
    }
};