import React from 'react';
import renderer from 'react-test-renderer'
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from './data/products';


describe('Pruebas en < ProductTitle /> ', () => { 
    
    test('Debe de mostrar el componente con el titulo personalizado', () => { 
        
        const warpper = renderer.create(
            <ProductTitle title="Custom Product"/>
        )

        expect(warpper.toJSON()).toMatchSnapshot();

     });

    test('Debe de mostrar el componente con el nombre del producto', () => { 
        
        const warpper = renderer.create(
            <ProductCard product={ product1}>
                {
                    () => (
                        <ProductTitle/>
                    )
                }
            </ProductCard>
        )

        expect(warpper.toJSON()).toMatchSnapshot();

     }) 
     
})