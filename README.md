# JML-Product-Card

Este es un paquete de pruebas de despliegue en NPM.

### Jesús Mira Lorente

## Ejemplo

```
import { ProductCard, ProductImage, ProductTitle, ProductButtons } from 'jml-product-card'

```

```
<ProductCard
    product = { product }
    initialValues={{
    count: 4,
    // maxCount: 10
    }}
    >
    {
        ( { count, reset, increaseBy, maxCount, isMaxCountReached  } ) => (
        <>
            <ProductImage />
            <ProductTitle />
            <ProductButtons />
            
        </>
        )
    }
        
</ProductCard>

```
