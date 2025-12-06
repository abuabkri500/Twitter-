import React from 'react'
import Image from 'next/image';
import ViewMore from '../components/ViewMore';

type Product = {
    id: number;
    name: string;
    price: number;
}

const ProductList = async () => {
    const res = await fetch('http://localhost:3000/api/products');
    if (!res.ok) {
        throw new Error('Failed to fetch products');
    }
    const data = await res.json();

    return (
        <div>
            <div>
                {data.map((product: Product) => (
                    <div key={product.id} className="product-card">
                        {/* <Image
                            alt={product.title}
                            src={product.thumbnail}
                            width={100}
                            height={100}
                            className="product-image"
                        /> */}
                        <h2>{product.id}</h2>
                        <h2>{product.name}</h2>
                        <p>Price: ${product.price}</p>
                        <ViewMore id={product.id} />
                        <br />
                        <br />
                    </div>
                ))}


            </div>
        </div>
    )
}

export default ProductList