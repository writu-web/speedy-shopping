import { decrement, increment, incrementByAmount, incrementAsync } from "../../../state/counter/counterSlice"
import type { AppDispatch, RootState } from "../../../state/store"
import { useSelector,useDispatch } from "react-redux"

const Counter =()=>{
    const count = useSelector((state:RootState)=>state.counter.value)
    const dispatch = useDispatch<AppDispatch>()
    return <div>
        Counter{count}
        <button onClick={() => dispatch(increment())}>+</button>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(incrementByAmount(5))}>+5</button>
        <button onClick={() => dispatch(incrementAsync(10))}>+ Async 10</button>
        </div>
}

export default Counter