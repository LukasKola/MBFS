import { manufacturers } from "constantsCars"
import { useState } from "react"
import { CustomFormProps } from "types"
import CustomButton from "./CustomButton"

const CustomForm = ({onSave, car}: CustomFormProps) => {
    const [carData, setCarData] = useState(car)
    const [errors, setErrors] = useState({})

    const validateData = () => {
        let errors: any = {}

        if(!carData?.color){
            errors.color = 'Barva je povinné pole'
        }

        if(!carData?.engineVal || isNaN(Number(carData?.engineVal)))
        errors.engineVal = 'Objem motoru je povinné pole a musí být číslo'

        if(!carData?.fuel){
            errors.fuel = 'Typ paliva je povinné pole'
        }

        if(!carData?.manufacturer){
            errors.manufacturer = 'Výrobce je povinné pole'
        }

        if(!carData?.model){
            errors.model = 'model auta je povinné pole'
        }

        if(!carData?.prize || isNaN(Number(carData?.prize))){
            errors.prize = 'Cena je povinné pole a musí být číslo'
        }

        if(isNaN(Number(carData?.year))){
            errors.year = 'Rok výroby musí být číslo'
        }
        
        return errors
    }

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        console.log(name)
        setCarData((prevData) => ({...prevData, [name]: value}))
        
    }

    const handleSelectChange = (option: any) => {
        const manufacturer = option.target.value
        setCarData((prevData) => ({...prevData, manufacturer}))
    }

    const handleSave = () => {
        const errors = validateData();
        console.log(carData)
        if(Object.keys(errors).length){
            setErrors(errors)
            return
        }
        setErrors({})
        console.log(carData)
        onSave(carData)
    }

    const inputStyle = "border rounded shadow p-2 transition duration-200 focus:outline-none focus:border-blue-500"


 return(
 <>
 <div>
    <div>
        <p>Vyrobce</p>
        <select value={manufacturers.find((e) => e === carData?.manufacturer)} onChange={handleSelectChange} className={inputStyle}>
            {manufacturers.map((e) => <option>{e}</option>)}
        </select>
    </div>
    <div>
        <p>Model:</p>
        <input name="model" value={carData?.model} onChange={handleChange}  className={inputStyle}/>
        <div className="text-red-500">{errors.model}</div>
    </div>
    <div>
        <p>Obsah motoru:</p>
        <input name="engineVal" value={carData?.engineVal} onChange={handleChange}className={inputStyle}/>
        <div className="text-red-500">{errors.engineVal}</div>
    </div>
    <div>
        <p>Typ paliva:</p>
        <input name="fuel" value={carData?.fuel} onChange={handleChange}className={inputStyle}/>
        <div className="text-red-500">{errors.fuel}</div>
    </div>
    <div>
        <p>Barva:</p>
        <input name="color" value={carData?.color} onChange={handleChange} className={inputStyle}/>
        <div className="text-red-500">{errors.color}</div>
    </div>
    <div>
        <p>Cena:</p>
        <input name="prize" value={carData?.prize} onChange={handleChange} className={inputStyle}/>
        <div className="text-red-500">{errors.prize}</div>
    </div>
    <div>
        <p>Rok výroby:</p>
        <input name="year" value={carData?.year} onChange={handleChange} className={inputStyle}/>
        <div className="text-red-500" >{errors.year}</div>
    </div>
    <div>
        <CustomButton btnType="button" title="Uložit" handleClick={handleSave}/>
    </div>
 </div>
 </>
 )
}

export default CustomForm