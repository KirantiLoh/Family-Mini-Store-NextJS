import React from 'react'
import { useState, useEffect } from 'react'

const Categories = (props) => {

    const categories = props.categories

    return (
        <ul className={props.className}>
            {categories.map(category => {
                return (
                    <li className="product">
                        {category.name}
                    </li>
                )
            })}
        </ul>
    )
}

export default Categories
