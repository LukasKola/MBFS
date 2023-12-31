'use client'

import React from 'react'
import { CustomButtonProps } from 'types'

export default function CustomButton({ btnType ,title, containerStyles, handleClick}: CustomButtonProps) {
    return (
        <button
            disabled={false}
            type={btnType}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={'flex-1'}>{title}</span>
        </button>
    )
}
