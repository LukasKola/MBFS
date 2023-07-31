import { execOnce } from "next/dist/shared/lib/utils";
import { MouseEventHandler, ReactNode } from "react";

export interface CustomButtonProps {
    title: string;
    containerStyles?: string;
    handleClick?: MouseEventHandler<HTMLButtonElement>
}

export interface LayoutProps {
    children: ReactNode
}

export interface SearchManufacturerProps {
    manufacturer: string;
    setManuFacturer: (manufacturer: string) => void;
}