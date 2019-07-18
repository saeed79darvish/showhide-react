import React, { useState } from 'react'
import { data } from '../Data'
import ShowHideItem from './ShowHideItem';


const ShowHide = () => {

    const [selected, setSelected] = useState(null);


    return data.map((item, index) => (
        <ShowHideItem

            setSelected={i => setSelected(selected === i ? null : i)}
            opened={selected === index}
            item={item}
            key={index}
            id={index}
        />
    ))


}

export default ShowHide;

