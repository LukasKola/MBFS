'use client'
import { Carprops } from "types"
import CustomButton from "./CustomButton"
import Image from "next/image"
import { api } from "~/utils/api"
import CustomDialog from "./CustomDialog"
import { ConfirmationDialog } from "components"
import { useState } from "react"


const CarCard = ({ car, deleteCar }: Carprops) => {
    const { id, fuel, manufacturer, model, engineVal, color, prize, picture, year } = car
    const [ deleteDialogOpen, setDeleteDialogOpen] = useState(false)
    const [updateDialogOpen, setUpdateDialogOpen] = useState(false)
  

    return(
        <div className="car-card group">
            <div className="car-card__content flex justify-between">
                 <h2 className="car-card__content-title">
                    {manufacturer} {model}
                 </h2>
                 <div>
                    <CustomButton title="Smazat" btnType="button" handleClick={() => setDeleteDialogOpen(true)} />
                    <CustomButton title="Upravit" btnType="button" handleClick={() => setUpdateDialogOpen(true)}/>
                 </div>
            </div>
            <p className="flex flex-col mt-6 text-[32px] font-extrabold ">
                <span className="self-start text-[14px]" >Cena: {prize} Kč</span>
                <span className="self-start text-[14px]" >Objem motoru: {engineVal} kbcm</span>
                <span className="self-start text-[14px]" >Barva: {color}</span>
                <span className="self-start text-[14px]" >Typ paliva: {fuel}</span>
                <span className="self-start text-[14px]" >Rok výroby: {year}</span>
            </p>
            <div className="relative w-full h-40 my-3 object-contain" >
                <Image src={picture || '/hero.png'} alt="car model" fill priority className="object-contain" />
            </div>
            <ConfirmationDialog open={deleteDialogOpen} setOpen={setDeleteDialogOpen} callBack={deleteCar} carId={id!}/>
            <CustomDialog adding={false} car={car} open={updateDialogOpen} setOpen={setUpdateDialogOpen}/>
        </div>
    )
}

export default CarCard