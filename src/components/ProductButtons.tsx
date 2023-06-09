import React, { useCallback, useContext } from 'react';
import { ProductContext } from './ProductCard';

import styles from '../styles/styles.module.css';

export interface Props{
  className?: string,
  style?: React.CSSProperties 
}

export const ProductButtons = ({ className, style }: Props) => {

    // TODO: maxCounter
    
    const {increaseBy, counter, maxCount } = useContext(ProductContext);

    // TODO: isMaxReached = useCallback, dependencias [ counter, maxCounter]
    // TRUE si el counter === maxCount
    // false si no lo es
    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter, maxCount],
    )
    
  
    return (
      <div className={`${styles.buttonsContainer} ${ className}`}
          style={ style }>
             <button
              onClick={() => increaseBy( -1 )}
              className={ styles.buttonMinus}>-</button>  
  
             <div className={ styles.countLabel}>{ counter }</div>
             
             <button
             onClick={() => increaseBy( +1 )} 
             className={ `${styles.buttonAdd}  ${ isMaxReached() && styles.disabled}`}>+</button>  
          </div>
  
    )
  }
