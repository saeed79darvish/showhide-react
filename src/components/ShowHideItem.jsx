import React from 'react'


export default function ShowHideItem({ item, id, setSelected, opened }) {
    return (
        <div>
            <button onClick={() => setSelected(id)}>{item.heading}</button>
            {opened &&
                item.names.map((ele, i) => {
                    return (
                        <li key={i}>{ele}</li>
                    )
                })}
        </div>
    )
}
