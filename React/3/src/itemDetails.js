import React, { useState, useEffect } from 'react';
import './App.css';

// curl --location --request GET "https://fortnite-api.theapinetwork.com/item/get?id={{itemid}}" \


function Item({ match }) {

    useEffect(() => {
        fetchItems();
        // console.log(match);
    }, []);

    const [item, setItem] = useState({
        item:{ images: {}}
    });

    const fetchItems = async () => {
        const fetchItem = await fetch(`https://fortnite-api.theapinetwork.com/item/get?id=${match.params.id}&authorization=e23f8d7474d9dabe9864e82c7d7b1b1b`);

        const item = await fetchItem.json();

        setItem(item.data);

        console.log(item.data);
    }

    return (
        <div>
            <h1>{item.item.name}</h1>
            <img src={item.item.images.icon} />
        </div>
    );
}

export default Item;