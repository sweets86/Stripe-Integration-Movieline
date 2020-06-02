import React from 'react'
import ProductItem from './ProductItem'

interface Props {
    view: string
}

// Startsida- Startpage
export default function MasterView(props: Props) {

    const products = ['jobs', 'pirates', 'silicon', 'socialNet']
    
        return(
            <div style={container}>
                {products.map((title) => {
                    return <ProductItem view={title} key={title}  />
                })}
            </div>
        )

};

const container: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    margin: '2em',
    justifyContent: 'stretch',
    alignItems: 'stretch'
}