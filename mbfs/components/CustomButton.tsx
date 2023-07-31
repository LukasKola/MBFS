'use client'

import React from 'react'
import Image from 'next/image'

export default function CustomButton() {
    return (
        <button
            disabled={false}
            type='button'
            className={'custom-btn'}
            onClick={() => { }}
        >
            <span className={'flex-1'}>Title</span>
        </button>
    )
}
