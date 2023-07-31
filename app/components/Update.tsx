import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Button } from './Button'

type Props = {}

function Update({ }: Props) {
    return (
        <div className="flex flex-col items-center justify-center space-y-6 rounded-3xl p-2 bg-gradient4 border border-solid  px-5 py-20">
            <h2
                className='text-center text-teal-300 text-xs w-auto uppercase'
            >
                Join Us
            </h2>
            <p className="max-w-[741px] md:max-w-full text-5xl sm:text-[38px] md:text-[44px] text-center font-semibold leading-10 text-white">
                become a part of community driven <br />
                <span className="text-white-A700 font-playfairdisplay font-semibold italic">
                    defi governance
                </span>
            </p>
            <p className='w-full text-center text-white text-opacity-60  text-sm font-light mt-10'>
                join the JetDAO community and shape the future of
                decentralized finance
            </p>
            <div className="flex flex-col space-y-2 pt-10 md:flex-row md:space-y-0">
                <Button className="bg-[#64ae9d] border border-solid border-white cursor-pointer font-semibold leading-[normal] lowercase min-w-[119px] py-2 rounded-[18px] shadow-bs text-black-900 text-center text-sm">
                    get started
                </Button>
            </div>
        </div>
    )
}

export default Update