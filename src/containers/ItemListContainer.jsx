import React, { useEffect, useState } from 'react'
import Items from '../components/Items'
import { useParams } from 'react-router'
import { db } from '../utils/firebaseConfig'
import { collection, getDocs } from "firebase/firestore";



const ItemListContainer = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();

    const firestoreFetch = async () => {
        const querySnapshot = await getDocs(collection(db, "products"));
        const dataFromFirestore = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data()
        }))
        return dataFromFirestore;
    }

    useEffect(() => {
        if (id === undefined) {
            firestoreFetch().then(result => setData(result))
                .catch(error => console.log(error))
        } else {
            firestoreFetch().then(res=>setData(res.filter(item=>item.para === id)))
            .catch(err=>console.log(err))
        }
    }, [id])



    return (
        <div className='catalogo'>
            {
                data.length > 0 ? data.map(dato => <Items key={dato.id} array={dato} ></Items>) : <h2>Cargando ...</h2>
            }
        </div>
    )
}

export default ItemListContainer