import React from 'react'
import Image from 'next/image';

type OneProductProps = {
  params: {
    productid: string;
  };
};

const Oneproduct = async ({ params }: OneProductProps) => {
  console.log(await params);
  const res = fetch(`https://dummyjson.com/products/${params.productid}`);
  const data = await (await res).json();
  console.log(data);

  return (
    <>
      <div>
        <div className="product-card">
          <Image
            alt={await data.title}
            src={await data.thumbnail}
            width={100}
            height={100}
            className="product-image"
          />
          <h2>{await data.title}</h2>
          <p>{await data.description}</p>
          <p>Price: ${await data.price}</p>
        </div>
      </div>
    </>
  )
}

export default Oneproduct