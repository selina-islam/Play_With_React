import React, { useState } from 'react'
import Celsius from './Celsius'
import Fahrenheit from './Fahrenheit'

function Temperature() {
        const [temperature, setTemperature] = useState({
                celsius:'',
                fahrenheit:''
        })

        // handle celsius change
        const handleCelsiusChange = (value) => {
                const celsius = parseFloat(value) || 0;
                const fahrenheit = (celsius * 9) / 5 + 32;
                setTemperature({
                        celsius: value,
                        fahrenheit:fahrenheit.toFixed(2)
                })
        }

        // handle fahrenheit change
        const handlFahrenheit = (value) => {
                const fahrenheit = parseFloat(value) || 0;
                const celsius = ((fahrenheit - 32) * 5) / 9;
        
                setTemperature({
                        celsius: celsius.toFixed(2),
                        fahrenheit :value
})
}

  return (
          <div className='max-w-sm mx-auto mt-10 p-8 border border-gray-100 rounded shadow-lg bg-white'>
                  <h1 className='text-2xl font-bold mb-6 text-center'>Temperature Converter</h1>
                  <Celsius celsius={temperature.celsius } onTemperatureChange={handleCelsiusChange} />
                  <Fahrenheit fahrenheit={ temperature.fahrenheit} onTemperatureChange={handlFahrenheit}/>
    </div>
  )
}

export default Temperature