import React from 'react'

const ColorPicker = ( {setColor, options} ) => {
    const handleSelect = (e) => {
        setColor(e.target.value)
    }

  return (
    <>
        <select onChange={handleSelect}>
            {
                options.map((opt) => (
                    <option key={opt.value} value={opt.value}>{opt.label}</option>
                ))
            }
        </select>
    </>
  )
}

export default ColorPicker