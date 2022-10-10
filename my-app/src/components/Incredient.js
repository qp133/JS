import React from 'react'

export default function Incredient({amount, measurement, name}) {
  return (
    <li>
        {amount} {measurement} {name}
    </li>
  );
}
