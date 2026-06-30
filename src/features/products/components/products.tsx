import { useRef, useEffect, useMemo } from 'react';
import useProducts from '../hooks/useProducts.ts'

const Product = ()=>{
    const {data, hasNextPage, isFetchingNextPage, fetchNextPage} = useProducts();
    const sentinelRef = useRef<HTMLDivElement>(null);
    const allProducts = useMemo(()=>data?.pages.flat(),[data?.pages])
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
    return <div>
        <h2>Products</h2>   
        <ul className='grid  grid-cols-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {allProducts?.map((product)=>(
                <li className="h-full w-80 border mx-auto" key={product.id}>{product.title} - ${product.price}</li> 
            ))}
        </ul>
        <div ref={sentinelRef} className="h-10"></div>
    </div>
}

export default Product