import React from 'react'

function ProductItem(props) {
    const {id, name, image, price, count, size, onAdd, onDec, onDelete} = props;

    const Add = (id) => {
        onAdd(id);
    }

    const Dec = (id) => {
        onDec (id);
    }

    const Delete = (id) => {
        onDelete(id);
    }

    return (
        <div className="product-list">
            <div className="product-item d-flex border mb-4" key={id}>
                <div className="image">
                    <img src={image} alt={`sản phẩm`} />
                </div>
                <div className="info d-flex flex-column justify-content-between px-4 py-3 flex-grow-1">
                    <div >
                        <div className="d-flex justify-content-between align-items-center">
                            <h2 className="text-dark fs-5 fw-normal">
                                {name} ({size})
                            </h2>
                            <h2 className="text-danger fs-5 fw-normal">
                                {price} VND
                            </h2>
                        </div>
                        <div className="text-black-50">
                            <div className="d-inline-block me-3">
                                <button className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                        onClick={() => Dec(id)}
                                >
                                    -
                                </button>
                                <span className="py-2 px-3 d-inline-block fw-bold">{count}</span>
                                <button className="border py-2 px-3 d-inline-block fw-bold bg-light"
                                        onClick={() => Add(id)}
                                >
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div>
                        <button className="text-primary border-0 bg-transparent fw-light"
                                onClick={() => Delete(id)}
                        >
                            <span><i className="fa-solid fa-trash-can"></i></span>
                            Xóa
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem