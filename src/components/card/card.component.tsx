import React, { FunctionComponent } from 'react'
import cardStyle from './card.module.css'
 
const CardComponent: FunctionComponent = ({children}) => {
    return (  
        <div className={cardStyle['card-container']}>
            {children}
        </div>
    );
}
 
export default CardComponent;