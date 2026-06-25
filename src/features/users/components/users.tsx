import type { UserType } from "../types/user.type";
import useUsers from "../hooks/useUsers"

const Users = () => {
    const {data, isPending, error} = useUsers();
    console.log(data)
    if(isPending) return <div>Loading...</div>
    if(error) return <div>Error occurred</div>
    else return <div>
        <ul>
            {data.map((v:UserType,i:number)=><li key={v.id}>{v.username}</li>)}
        </ul>
    </div>
}

export default Users