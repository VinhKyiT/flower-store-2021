import "./ProductItem.scss";

function ProductItem() {
    return (
        <div className="card">
            <div className="card-img">
                <img src="https://via.placeholder.com/150" alt="product" />
            </div>
            <div className="card-content">
                <div className="card-title">
                    Lorem ipsum dolor.
                </div>
                <div className="card-description">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat, ab.
                </div>
                <div className="card-price">
                    <span className="amount">$100</span>
                </div>
            </div>
            <div className="card-action">
                <div className="buy">Buy</div>
                <div className="add-to-cart">Add to cart</div>
            </div>
        </div>
    )
}

export default ProductItem
