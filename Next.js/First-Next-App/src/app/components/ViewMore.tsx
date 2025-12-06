'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const ViewMore = ({ id }: { id: number }) => {
    const router = useRouter();
    const viewMore = () => {
        console.log(id);
        router.push(`/products/${id}`);
    }
    return (
        <div>
            <button onClick={viewMore}>View More</button>
        </div>
    )
}

export default ViewMore