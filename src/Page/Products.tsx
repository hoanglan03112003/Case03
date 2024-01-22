import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useDispatch, useSelector } from 'react-redux';
import { increment } from '../action/addtocart';
export type ProdcutItems = {
    id: number;
    name: string
    createdAt: number
    description: string
    thumbnail: string
    author: string
}

const Products = () => {
    const [product, setProduct] = useState<ProdcutItems[]>([])

    useEffect(() => {
        const fect = async () => {
            try {
                const res = await axios.get("https://0dffcbcca2ce4560bcd1a1ca5e7dff9b.api.mockbin.io/")
                setProduct(res.data)
            } catch (error) {
                console.log(error)
            }
        }
        fect()
    }, []);

    const count = useSelector(state => state.counter.value)
    const dispatch = useDispatch();


    return (
        <div className='row'>
            <h3>Products</h3>
            {product.map(item => {
                return (
                    <div key={item.id} className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={item.author} className="img-fluid rounded-start" alt={item.name} />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <h5 className="card-title">{item.name}</h5>
                                    <small>{item.createdAt}</small>
                                    <p>{item.description}</p>
                                    <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                </div>
                            </div>
                            <button onClick={() => dispatch(increment())}>Add to cart</button>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Products;