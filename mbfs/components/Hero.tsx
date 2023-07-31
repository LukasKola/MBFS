
import { CustomButton } from "components"
import CustomDialog from "./CustomDialog"
import { useState } from "react"

const Hero = () => {
const [open, setOpen] = useState(false)
    return (
        <div className="hero" >
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Správa vozidel
                </h1>
                < CustomButton
                    btnType="button"
                    title="Přidat vozidlo"
                    handleClick={() => setOpen(true)}
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'

                />
                <CustomDialog adding={true} open={open} setOpen={setOpen}/>
            </div>
    
        </div>
    )
}

export default Hero