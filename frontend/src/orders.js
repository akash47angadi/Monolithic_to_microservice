// import { useEffect, useState } from "react";
// import { useParams } from "react-router-dom";
// import Singleorder from "./orderitem";

// function Order() {
//     const param = useParams()
//     const [ord, setord] = useState([])
//     useEffect(() => {
//         console.log(param.user)
//         const gethistory = async () => {
//             const res = await fetch("http://localhost:5003/history/" + param.user)
//             const json = await res.json()
//             setord([...json].reverse())
//         }
//         gethistory()
//     }, [param.user]);
//     return (<div>
//         <div class="flex flex-col text-center w-full mb-5">
//             <h1 class="text-2xl font-medium title-font text-gray-900 tracking-widest">YOUR ORDERS</h1>
//         </div>
//         {ord.map((n) => (
//                 <Singleorder key={n._id} data={n}/>
//         ))}
//     </div>);
// }

// export default Order;





import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Singleorder from "./orderitem";

function Order() {
    const param = useParams()
    const [ord, setord] = useState([])
    const [error, setError] = useState(null);

    useEffect(() => {
        const getHistory = async () => {
            try {
                const res = await fetch("http://localhost:5003/history/" + param.user);
                if (!res.ok) {
                    throw new Error('Failed to fetch data');
                }
                const json = await res.json();
                setord([...json].reverse());
                setError(null);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('');
            }
        };
        getHistory();
    }, [param.user]);

    return (
        <div>
            <div class="flex flex-col text-center w-full mb-5">
                <h1 class="text-2xl font-medium title-font text-gray-900 tracking-widest">YOUR ORDERS</h1>
            </div>
            {error ? <p>{error}</p> : ord.map((n) => (
                <Singleorder key={n._id} data={n} />
            ))}
        </div>
    );
}

export default Order;
