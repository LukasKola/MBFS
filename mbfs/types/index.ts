import { MouseEventHandler, ReactNode } from "react";

import { Prisma } from '@prisma/client'
type Car = Prisma.CarGetPayload<{
  // select all available fields
  select: Prisma.CarSelect
}>

export interface CustomButtonProps {
    title: string;
    btnType: "button" | "submit" | "reset" | undefined;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface LayoutProps {
    children: ReactNode;
};

export interface SearchManufacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
};

export interface Carprops {
    car: Car;
    deleteCar: (id: string) => void;
};

export interface HeroProps {
    refetch: boolean;
    setRefetch: (refetch: boolean) => void;
};

export interface CustomFormProps {
    car?: Car;
    onSave: (values: any) => void;
}

export interface CustomDialogProps {
    car?: Car;
    adding: boolean;
    open: boolean;
    setOpen: (open: boolean) => void;
};

export interface ConfirmationDialogProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    callBack: (action?: any) => void;
    carId: string;
};