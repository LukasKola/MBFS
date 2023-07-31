'use client'
import { CustomButton } from "components"
import Image from "next/image"
const Hero = () => {
    const handleScroll = () => { }
    return (
        <div className="hero" >
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Správa vozidel
                </h1>
                <CustomButton
                    title='Přidat vozidlo'
                    containerStyles='bg-primary-blue text-white rounded-full mt-10'
                    handleClick={handleScroll}
                />
            </div>
    
        </div>
    )
}

export default Hero