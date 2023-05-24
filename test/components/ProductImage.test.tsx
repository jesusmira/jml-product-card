import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard,  ProductImage } from '../../src/components';
import { product2 } from './data/products';


describe('Pruebas en <ProductImage/>', () => { 

    test('debe de mostrar el componente inicialmente del producto', () => { 
        
        const warpper = renderer.create(
            <ProductImage img='https://test.jpg'/>
        )

        expect(warpper.toJSON()).toMatchSnapshot();


     });

    test('Debe de mostrar el componente con la imagen del producto 2', () => { 

        const warpper = renderer.create(
            <ProductCard product={ product2}>
                {
                    () => (
                        <ProductImage/>
                    )
                }
            </ProductCard>
        )

        expect(warpper.toJSON()).toMatchSnapshot();

     })

 })