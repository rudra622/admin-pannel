import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { Bag, PencilFill, Search, Trash } from 'react-bootstrap-icons'
import AddProduct from './AddProduct'
import { DeleteProductAsync, GetProductSuccess, GetProductsAsync, getProductAsync, getProductsAsync } from '../../service/action/ProductAction'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import moment from "moment";

function Product() {
    const [add, setAdd] = useState(true)

    function handleButtonClick() {
        setAdd(!add);
    }

    const { Products, isEdit,totalPrice } = useSelector(state => state.productReducer)

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleEdit =(id)=>{
        // console.log(id,"click");
        dispatch(getProductAsync(id))
    }

    const [isDelete, setIsDelete] = useState(false)
    
    const handleDelete = (id) => {
        // console.log(id,"ok");
        dispatch(DeleteProductAsync(id))
        setIsDelete(!isDelete)
    }

    const getData = () => {

        dispatch(GetProductsAsync())
    }
    useEffect(() => {
        dispatch(getProductsAsync())
        getData();
    }, [])

    if (isEdit) {
        navigate('/editproduct')
    } else {
        return (
            <>
                {
                    add === false ? <AddProduct handleButtonClick={handleButtonClick} />
                        :
                        <>
                            <div className="search-product mt-4 p-3">
                                <div className=" d-flex">
                                    <div className="search-style-2 col-10 border-bottom border-dark border-3">
                                        <form action="#">
                                            <select className="select-active select2-hidden-accessible border-0" >
                                                <option data-select2-id={3}>All Categories</option>
                                                <option>Women's</option>
                                                <option>Men's</option>
                                                <option>Cellphones</option>
                                                <option>Computer</option>
                                                <option>Electronics</option>
                                                <option> Accessories</option>
                                                <option>Home &amp; Garden</option>
                                                <option>Luggage</option>
                                                <option>Shoes</option>
                                                <option>Mother &amp; Kids</option>
                                            </select>
                                            <Search />
                                            <input type="text" className='border-0 ps-3' placeholder="Search for items..." />
                                        </form>
                                    </div>
                                    <div className='col-2 d-flex justify-content-end'>
                                        <Button onClick={handleButtonClick}>Add Product</Button>
                                    </div>
                                </div>
                            </div>
                            <section className="mt-50 mb-50">
                                <div className="container">
                                    <div className="row">
                                        <div className="col-12">
                                            <div className="table-responsive">
                                                <table className="table table-bordered shopping-summery text-center">
                                                    <thead>
                                                        <tr className="main-heading">
                                                            <th className="col-4" colSpan={2}>Product</th>
                                                            <th className="col-2">Price</th>
                                                            <th className="col-2">Date</th>
                                                            <th className="col-2">Stock Status</th>
                                                            <th className="col-2">Remove</th>
                                                        </tr>
                                                    </thead>
                                                    {
                                                        Products.map((pro, id) => {
                                                            console.log(pro.img);
                                                            return (
                                                                <>
                                                                    <tbody className=''>
                                                                        <tr>
                                                                            <td className="image product-thumbnail">
                                                                                <img src={pro.img} className='w-50 my-3' alt="" />
                                                                            </td>
                                                                            <td className="product-des product-name">
                                                                                <h5 className="product-name">
                                                                                    <a href="" className='text-decoration-none'>{pro.title}</a>
                                                                                </h5>
                                                                                <p className="font-xs">{pro.details}.</p>
                                                                            </td>
                                                                            <td className="price"><span>{pro.price} </span></td>
                                                                            <td className="text-center m-0" >
                                                                                <h6>{moment(pro.createAt).calendar()}</h6>
                                                                                <p>time</p>
                                                                            </td>
                                                                            <td className="text-center" >
                                                                                <span className="color3 font-weight-bold">{pro.stock}</span>
                                                                            </td>
                                                                            <td className="action align-items-center d-flex justify-content-evenly" >
                                                                                <button className='btn border-0 ' onClick={() => { handleEdit(pro.id) }}>
                                                                                    <PencilFill />
                                                                                </button>
                                                                                |
                                                                                <button className='btn border-0' onClick={() => { handleDelete(pro.id) }}>
                                                                                    <Trash />
                                                                                </button>
                                                                            </td>
                                                                        </tr>

                                                                    </tbody>
                                                                </>
                                                            )
                                                        })
                                                    }
                                                    <thead >
                                                        <tr className="main-heading">
                                                            <th scope="col" colSpan={2}>Total</th>
                                                            <th scope="col" colSpan={1}>{totalPrice}&#8377; </th>
                                                        </tr>
                                                    </thead>

                                                </table>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </section>
                        </>
                }
            </>
        )
    }
}


export default Product