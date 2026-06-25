import { useRef, useEffect } from 'react';
import useProducts from '../hooks/useProducts.ts'

const Product = ()=>{
    const {data, hasNextPage, isFetchingNextPage, fetchNextPage} = useProducts();
    const sentinelRef = useRef<HTMLDivElement>(null);
    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting && hasNextPage && !isFetchingNextPage) {
                fetchNextPage();
            }
        });
        if (sentinelRef.current) {
            observer.observe(sentinelRef.current);
        }
        return () => { observer.disconnect() }
    },[hasNextPage, isFetchingNextPage, fetchNextPage])
    console.log(data)
    return <div>
        <h2>Products</h2>   
        <ul>
            {data?.pages.flat().map((product)=>(
                <li className="h-20 mx-auto flex justify-between" key={product.id}>{product.title} - ${product.price}</li> 
            ))}
        </ul>
        <div ref={sentinelRef} className="h-10"></div>
    </div>
}

export default Product