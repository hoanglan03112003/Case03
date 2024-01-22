import React from 'react'

const CarItem = () => {
    return (
        <tr className='d-flex justify-content-around align-items-center'>
            <td><img alt="" className='img-fluid' /></td>
            <td><span className='item-name'></span></td>
            <td><span className='item-quantity'></span> x  <span className='item-quantity'></span>
                <button type='button' className='btn btn-primary ms-4 me-2' ><strong>-</strong></button>
                <button type='button' className='btn btn-primary' ><strong></strong>+</button>
            </td>
            <td><span className='item-price'></span></td>
            <td>
                <button className='btn btn-danger btn-remove'></button>
            </td>
        </tr>
    )
}

export default CarItem