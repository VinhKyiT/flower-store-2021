import "./Home.scss";
import {FaShippingFast, FaRegCreditCard} from "react-icons/fa";
import {IoFlowerOutline} from "react-icons/io5";
import ProductItem from "../../components/ProductItem/ProductItem";

function Home() {
    return (
        <>
            <div className="shipping">
                <div className="shipping__wrap">
                    <div className="icon">
                        <FaShippingFast />
                    </div>
                    <div className="content">
                        <p className="title">
                            Lorem ipsum
                        </p>
                        <p className="desc">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="shipping__wrap">
                    <div className="icon">
                        <FaRegCreditCard />
                    </div>
                    <div className="content">
                        <p className="title">
                            Lorem ipsum
                        </p>
                        <p className="desc">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
                <div className="shipping__wrap">
                    <div className="icon">
                        <IoFlowerOutline />
                    </div>
                    <div className="content">
                        <p className="title">
                            Lorem ipsum
                        </p>
                        <p className="desc">
                            Lorem ipsum dolor sit amet.
                        </p>
                    </div>
                </div>
            </div>
            <div className="product-area">
                <div className="title">
                    <p>Tất cả sản phẩm</p>
                </div>
                <div className="product-item-wrap">
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                    <ProductItem />
                </div>
            </div>
        </>
    )
}

export default Home
