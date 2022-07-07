import React, { useEffect, useState } from 'react';

export default function Table(){

    const [data, setData] = useState([]);
    async function record(){
        const result = await fetch('https://jsonplaceholder.typicode.com/photos');
        const js = await result.json();
        setData(js);
    }
    useEffect(() => {
        record();
    }, [])
    console.log(data);

    return(
        <table className='table'>
            <tr>
                <th><button>album ID</button></th>
                <th><button>id</button></th>
                <th><button>title</button></th>
                <th><button>url</button></th>
                <th><button>thumbnailUrl</button></th>
            </tr>
            {data.map((item) => (
                <tr>
                    <td>{item.albumId}</td>
                    <td>{item.id}</td>
                    <td>{item.title}</td>
                    <td>{item.url}</td>
                    <td>{item.thumbnailUrl}</td>
                </tr>
            ))

            }
        </table>
    )
}