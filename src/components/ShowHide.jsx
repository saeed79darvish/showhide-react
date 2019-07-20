import React, { useState } from 'react'
import ShowHideItem from './ShowHideItem';
import { connect } from "react-redux";


const ShowHide = ({ data }) => {

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
const mapStateToProps = state => ({
    data: state.data
});

export default connect(mapStateToProps)(ShowHide);

