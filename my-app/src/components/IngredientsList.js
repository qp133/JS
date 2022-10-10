import React from 'react'
import Incredient from './Incredient'

export default function IngredientsList({list}) {
  return (
    <ul className='incredients'>
        {list.map((incrdient,i) => (
            <Incredient key={i} {...incrdient} />
        ))}
    </ul>
  )
}
