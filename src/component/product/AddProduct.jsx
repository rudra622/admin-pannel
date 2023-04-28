import React, { useState } from 'react'
import { Button, Container, Form } from 'react-bootstrap'
import './addproduct.css'
import { useDispatch } from 'react-redux';
import { CreateProductAsync } from '../../service/action/ProductAction'

function AddProduct({ handleButtonClick }) {
    const [product, setProduct] = useState({
        img: "",
        title: "",
        details: "",
        price: "",
        stock: ""
    })
    const dispatch = useDispatch()

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setProduct({ ...product, [name]: value })
    }

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(CreateProductAsync(product))
        handleButtonClick();
        setProduct({
            img: "",
            title: "",
            details: "",
            price: "",
            stock: ""
        })
    }

    
    return (
        <>
            <div className='form-wrapper mt-5 d-flex justify-content-center align-items-center'>
                <Container className='wrapper'>

                    <h5>add product</h5>

                    <Form onSubmit={(e) => { handleSubmit(e) }}>
                        <div className='row'>
                            <div className='col-6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Image</Form.Label>
                                    <Form.Control type="text" placeholder="Enter  title" name='img' value={product.img} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Title</Form.Label>
                                    <Form.Control type="text" placeholder="Enter  title" name='title' value={product.title} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>details</Form.Label>
                                    <Form.Control type="text" placeholder="enter products details" name='details' value={product.details} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>price</Form.Label>
                                    <Form.Control type="text" placeholder="product price" name='price' value={product.price} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label>stock</Form.Label>
                                    <Form.Control type="text" placeholder="product stock" name='stock' value={product.stock} onChange={(e) => { handleChange(e) }} />
                                </Form.Group>
                                <div className='d-flex justify-content-center'>
                                    <Button className='bg-primary' type="submit">
                                        Submit
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </Container>
            </div>
        </>
    )
}

export default AddProduct