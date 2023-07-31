import { Dialog, Transition } from "@headlessui/react"
import { Fragment, useState } from "react"

import CustomButton from "./CustomButton"
import CustomForm from "./CustomForm"
import { CustomDialogProps } from "types"
import { api } from "~/utils/api"
import { Car } from "@prisma/client"


const CustomDialog = ({ car, adding, open, setOpen }: CustomDialogProps) => {
    const utils = api.useContext()
    const { mutate: addNewCar } = api.carRouter.addCar.useMutation({
        async onSuccess() {
            await utils.carRouter.getCars.invalidate()
        }
    })
    const { mutate: updateCar } = api.carRouter.updateCar.useMutation({
        async onSuccess() {
            await utils.carRouter.getCars.invalidate()
        }
    })

    const handleSave = (values: any) => {
        console.log(values)
        if (adding) {
            const valuesWithpicture: Car = { ...values, picture: 'neco' }
            addNewCar(valuesWithpicture)
            setOpen(false)
        } else {
            updateCar({id: car?.id! ,data: values})
            setOpen(false)
        }

    }

    return (
        <>
            <Transition appear show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => setOpen(false)}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <Dialog.Title
                                        as="h3"
                                        className="text-lg font-medium leading-6 text-gray-900"
                                    >
                                        Přidat vozidlo
                                    </Dialog.Title>
                                    <div className="mt-2">
                                        <CustomForm onSave={handleSave} car={car} />
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>

    )
}

export default CustomDialog