import React from 'react'
import './style.css'
import Slider from '@mui/material/Slider';

export default function Filter() {

    function valuetext(value: number) {
        return `${value}°C`;
    }
    const [value, setValue] = React.useState<number[]>([50000, 4000000]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
    };
    return (
        <div className="filter">
            <div className="filter-body">
                <div className="filter-heading">
                    <div className="filter-heading-left">Filters</div>
                    <div className="filter-heading-right">Reset All</div>
                </div>

                <div className="price-range">
                    <div className="price-range-heading">Price Range</div>
                    <div className="price-values">
                        <div className="price-min">&#8377;&nbsp;{value[0]}</div>
                        <div className="price-max">&#8377;&nbsp;{value[1]}</div>
                    </div>
                    <div className="price-range-bar">
                        <Slider
                            // getAriaLabel={() => 'Temperature range'}
                            value={value}
                            onChange={handleChange}
                            // valueLabelDisplay="auto"
                            getAriaValueText={valuetext}
                            step={50000}
                            min={50000}
                            max={4000000}
                        />
                    </div>
                </div>

                <div className="brand-model">
                    <div className="brand-model-heading">Brand + Model</div>
                </div>
            </div>
        </div>
    )
}
