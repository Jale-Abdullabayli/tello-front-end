import React, { useState, useEffect } from 'react';
import './PriceFilter.scss';
import * as api from '../../../api/products';

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';



function PriceFilter({getProductByPriceRange}) {
    const [maxAndMin, setMaxAndMin] = useState({});
    const [value, setValue] = useState([]);

    async function getPriceRange() {
        const { data } = await api.getPriceRange();
        setMaxAndMin({ max: data.data.maxPrice, min: data.data.minPrice });
        setValue([data.data.minPrice,data.data.maxPrice]);
        getProductByPriceRange(data.data.minPrice,data.data.maxPrice);
    }

    useEffect(() => {
        getPriceRange();
    }, []);


    function valuetext(value) {
        return value;
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

  

    return (
        <div className='priceFilter'>
            <h2>Qiymət aralığı</h2>
            <Box sx={{ width: '100%' }}>
                <Slider
                    getAriaLabel={() => 'Temperature range'}
                    value={value}
                    onChange={handleChange}
                    valueLabelDisplay="auto"
                    getAriaValueText={valuetext}
                    max={maxAndMin.max}
                    min={maxAndMin.min}
                    onChangeCommitted={()=>getProductByPriceRange(value[0],value[1])}
                />
            </Box>
            <div className="range">
                <span className='min'>{value[0]}</span>
                <span className='from'>dən</span>
                <span className='max'>{value[1]}</span>
                <span className='to'>dək</span>

            </div>
        </div>
    )
}

export default PriceFilter