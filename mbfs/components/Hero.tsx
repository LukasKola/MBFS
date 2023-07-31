import { CustomButton } from "components"

const Hero = () => {
    return (
        <div className="hero" >
            <div className="flex-1 pt-36 padding-x">
                <h1 className="hero__title">
                    Zde najdeš své vysněné auto, rychle a lehce!
                </h1>
                <p className="hero_subtitle">
                    S námi je hledáni auta radost.
                </p>
                <CustomButton/>
            </div>
        </div>
    )
}

export default Hero