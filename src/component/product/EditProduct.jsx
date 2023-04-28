import React, { useState } from 'react'
import { Button, Container, Form, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux';
import { EditProductAsync } from '../../service/action/ProductAction';
import { useNavigate } from 'react-router-dom';
import { CloudUpload } from 'react-bootstrap-icons';
import { click } from '@testing-library/user-event/dist/click';

function EditProduct() {
    // const [dragActive, setDragActive] = React.useState(false);

    // const handleDrag = function (e) {
    //     e.preventDefault();
    //     e.stopPropagation();
    //     if (e.type === "dragenter" || e.type === "dragover") {
    //         setDragActive(true);
    //     } else if (e.type === "dragleave") {
    //         setDragActive(false);
    //     }
    // };
    const { Product, isEdit } =useSelector(state => state.productReducer)
    const [product, setProduct] = useState(Product)

    const handleChange = (e) => {

        const name = e.target.name;
        const value = e.target.value;

        setProduct({ ...product, [name]: value })
    }

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleSubmit = (e) => {

        e.preventDefault()
        dispatch(EditProductAsync(product))
        setProduct({
            img: "",
            title: "",
            details: "",
            price: "",
            stock: ""
        })
    }

    if (!isEdit) {
        navigate('/product')
    } else {
        return (
            <>
                <div className='form-wrapper mt-5 d-flex justify-content-center align-items-center'>
                <Container className='wrapper'>

                    <h5>Edit product</h5>

                    <Form onSubmit={(e) => { handleSubmit(e) }} >
                        <div className='row'>
                            {/* <div className='col-6'>
                                <input type="file" id="input-file-upload" multiple={true} name='img' value={product.img} onChange={(e) => { handleChange(e) }} />
                                <label id="label-file-upload" htmlFor="input-file-upload" className={dragActive ? "drag-active" : ""}>
                                    <div className='text-center'>
                                        <p>Drag and drop your product image</p>
                                        <button className="upload-button"><CloudUpload className='fs-1' /></button>
                                    </div>
                                </label>
                            </div> */}
                            <div className='col-6'>
                                <Form.Group className="mb-3" >
                                    <Form.Label>Title</Form.Label>
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
                                        update
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
}

export default EditProduct