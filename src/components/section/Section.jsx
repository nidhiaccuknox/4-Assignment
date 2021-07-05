import React from 'react';
import './section.css';
import { useEffect, useState } from "react";
import SectionList from "../sectionList/SectionList";
import { trendingItem, popularItem, recomendItem } from "../../data";
import { useDispatchCart } from "../../CartContext/Cart";
import { Link } from "react-router-dom";
import { useLocation, useParams } from 'react-router';

function Section() {

    const [selected, setSelected] = useState("trending");
    const [data, setData] = useState([]);

    const list = [
        {
            id: "trending",
            title: "Trending",
        },
        {
            id: "popular",
            title: "Popular",
        },
        {
            id: "recomend",
            title: "We Recommend",
        },
    ];

    useEffect(() => {
        switch (selected) {
            case "trending":
                setData(trendingItem);
                break;
            case "popular":
                setData(popularItem);
                break;
            case "recomend":
                setData(recomendItem);
                break;
            default:
                setData(trendingItem);
        }
    }, [selected]);

    const dispatch = useDispatchCart();

    const addToCart = (item) => {
        dispatch({ type: "ADD", item });
    };


    return (
        <div className="portfolio" id="portfolio active">
            <ul>
                {list.map((item) => (
                    <SectionList
                        title={item.title}
                        active={selected === item.id}
                        setSelected={setSelected}
                        id={item.id}
                    />
                ))}
            </ul>
            <div className="container">
                {data.map((d) => (
                    <Link to={`/product/${d.id}`} >
                        <div className="item" key={d.id} product={d}>
                            <img
                                className="prodimg"
                                src={d.img}
                                alt=""
                            />
                            <h3>{d.title}</h3>
                            <h2>$50.00</h2>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    );
}


export default Section
