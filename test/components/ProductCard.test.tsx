import React from 'react';
import renderer from 'react-test-renderer';
import { ProductCard } from '../../src/components';
import { product1 } from './data/products';

const { act } = renderer;

describe('Pruebas en <ProductCard/>', () => { 

    test('debe de mostrar el componente correctamente', () => { 
        
        const warpper = renderer.create(
            <ProductCard product={ product1}>
                {
                    () => (
                        <h1>Product Card</h1>
                    )
                }
            </ProductCard>
        )

        expect(warpper.toJSON()).toMatchSnapshot();


     });

    test('debe de incrementar el contador', () => { 

        const warpper = renderer.create(
            <ProductCard product={ product1}>
                {
                    ({count, increaseBy}) => (
                        <>
                            <h1>Product Card</h1>
                            <span>{count}</span>
                            <button onClick={()=> increaseBy(1)}></button>
                        </>
                    )
                }
            </ProductCard>
        );

        let tree = warpper.toJSON();
        
        act(()=> 
            (tree as any).children[2].props.onClick()
        )
        tree = warpper.toJSON();

        expect((tree as any).children[1].children[0]).toBe('1');        

     })

 })