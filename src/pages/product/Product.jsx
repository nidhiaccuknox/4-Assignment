import './product.css';
import React from 'react';
import { trendingItem } from "../../data";
import { useLocation, useParams } from 'react-router';
import { Link, useHistory } from "react-router-dom";
import { useCart, useDispatchCart } from "../../CartContext/Cart";
import { ArrowBack, LocalMall, FavoriteBorder, ArrowDropDown } from '@material-ui/icons';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';

function Product() {

    // const location = useLocation()
    // const path = location.pathname.split('/')[2];
    //const product = { title: "A watch", price: 100, desc: "Men Silver-Toned Analogue Watch WRG00048A", img: "https://static.wixstatic.com/media/2cd43b_4b23db1699ec44f4802c3741398fb42b~mv2.png/v1/fill/w_184,h_184,q_90/2cd43b_4b23db1699ec44f4802c3741398fb42b~mv2.png" }
    //const product = trendingItem[path - 1];

    const { idInParam } = useParams();
    //console.log('idInParam', idInParam);
    const [product] = trendingItem.filter(x => x.id == idInParam);

    const history = useHistory();
    const handleHistory = () => {
        history.push('/');
    }
    const handleHistoryBag = () => {
        history.push('/mycart');
    }

    const items = useCart();
    const dispatch = useDispatchCart();

    const totalQuantiy = items.reduce((total, b) => total + (b.quantity), 0);

    const addToCart = (item) => {
        const existingItem = items.filter(x => x.id == item.id);

        if (existingItem.length) {
            item.quantity += 1;
            dispatch({ type: "UPDATE", item });
        } else {
            item.quantity = 1;
            dispatch({ type: "ADD", item });
        }
    };

    return (
        <>
            <div className="topBrand">
                <ArrowBack className="back" onClick={handleHistory} />
                <div className="topbarIconContainers">
                    <LocalMall className="bag" />
                    <Link className="topIconBadges" onClick={handleHistoryBag}> {totalQuantiy}</Link>
                </div>
            </div>

            <div className="continerPro">
                <div className="upperBox">
                    <TransformWrapper defaultScale={1} defaultPositionX={100} defaultPositionY={200}>
                        <TransformComponent>
                            <img src={product.img} alt="" />
                        </TransformComponent>
                    </TransformWrapper>
                </div>
                <div className="lowerBox">
                    <div className="proName">
                        <span className="names">{product.title}</span>
                        <span className="like"><FavoriteBorder className="iconBox" /></span>
                    </div>
                    <div className="proDesc">
                        {product.desc}
                    </div>
                    <div className="proSc">
                        <div className="size">Size: 44mm<ArrowDropDown /></div>
                        <div className="color">Color: ⚫<ArrowDropDown /></div>
                    </div>
                </div>
                <div className="addCart">
                    <Link to={`/mycart/`} className='link'><span className="lpart" onClick={() => addToCart(product)}>Add to Cart -</span></Link>
                    <span className="rpart">${product.price}</span>
                </div>

            </div>
        </>
    )
}

export default Product
