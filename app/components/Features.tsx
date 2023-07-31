import React from 'react'

type Props = {}

function Features({ }: Props) {
    return (
        <div className='flex flex-col gap-20'>
            <div className='flex flex-col items-center justify-center w-auto md:w-full'>
                <h1 className='text-emerald-500 text-sm md:text-lg font-medium text-center'>Features</h1>
                <h1 className='text-white text-3xl md:text-5xl tracking-tight font-medium leading-10 '>built for <span className='font-playfairdisplay italic tracking-tight leading-10'>speed</span>,<span className='font-playfairdisplay italic tracking-tight leading-10'> power </span> and <span className='font-playfairdisplay italic tracking-tight leading-10'>scalability</span></h1>
            </div>

            <div className='flex flex-col gap-10'>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div className='flex flex-1 flex-col gap-3 h-full items-start justify-start p-5 w-full'>

                        <div className='bg-emerald-200 w-20 rounded-full p-2'>
                            <div className="bg-emerald-300 rounded-full p-2">
                                <div className="bg-emerald-400 text-center text-xl text-white font-medium rounded-full p-2">
                                    <img src="images/img_group11.svg" alt="imageSixteen" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-emerald-500'>
                                decentralized lending and borrowing
                            </h1>
                        </div>

                        <div>
                            <p className='text-sm text-white text-opacity-60 max-w-xs'>
                                built on solana, you have direct control over your
                                funds and financial activities.
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-1 flex-col gap-3 h-full items-start justify-start p-5 w-full'>

                        <div className='bg-emerald-200 w-20 rounded-full p-2'>
                            <div className="bg-emerald-300 rounded-full p-2">
                                <div className="bg-emerald-400 text-center text-xl text-white font-medium rounded-full p-2">
                                    <img src="images/img_close.svg" alt="imageSixteen" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-emerald-500'>
                                fixed and variable pooled lending
                            </h1>
                        </div>

                        <div>
                            <p className='text-sm text-white text-opacity-60 max-w-xs'>
                                with an option to choose between fixed rate and
                                variable pooled lending, you can choose based on your
                                preferences and risk tolerance.
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-1 flex-col gap-3 h-full items-start justify-start p-5 w-full'>

                        <div className='bg-emerald-200 w-20 rounded-full p-2'>
                            <div className="bg-emerald-300 rounded-full p-2">
                                <div className="bg-emerald-400 text-center text-xl text-white font-medium rounded-full p-2">
                                    10x
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-emerald-500'>
                                leverage trading
                            </h1>
                        </div>

                        <div>
                            <p className='text-sm text-white text-opacity-60 max-w-xs'>
                                use leverage trading through platforms like orca,
                                saber, and openbook to amplify your trading positions
                                by up to 10x.
                            </p>
                        </div>

                    </div>



                </div>

                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5'>

                    <div className='flex flex-1 flex-col gap-3 h-full items-start justify-start p-5 w-full'>

                        <div className='bg-emerald-200 w-20 rounded-full p-2'>
                            <div className="bg-emerald-300 rounded-full p-2">
                                <div className="bg-emerald-400 text-center text-xl text-white font-medium rounded-full p-2">
                                    <img src="images/img_info.svg" alt="imageSixteen" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-emerald-500'>
                                jet fixed rate application
                            </h1>
                        </div>

                        <div>
                            <p className='text-sm text-white text-opacity-60 max-w-xs'>
                                with this, you can submit orders, negotiate rates, and
                                access markets for popular assets such as USDC and SOL
                                over 1 and 30-day periods.
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-1 flex-col gap-3 h-full items-start justify-start p-5 w-full'>

                        <div className='bg-emerald-200 w-20 rounded-full p-2'>
                            <div className="bg-emerald-300 rounded-full p-2">
                                <div className="bg-emerald-400 text-center text-xl text-white font-medium rounded-full p-2">
                                    <img src="images/img_dashboard.svg" alt="imageSixteen" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-emerald-500'>
                                flexible margin accounts
                            </h1>
                        </div>

                        <div>
                            <p className='text-sm text-white text-opacity-60 max-w-xs'>
                                engage in leverage trading, hedging, and delta neutral
                                strategies through flexible margin accounts.
                            </p>
                        </div>

                    </div>

                    <div className='flex flex-1 flex-col gap-3 h-full items-start justify-start p-5 w-full'>

                        <div className='bg-emerald-200 w-20 rounded-full p-2'>
                            <div className="bg-emerald-300 rounded-full p-2">
                                <div className="bg-emerald-400 text-center text-xl text-white font-medium rounded-full p-2">
                                    <img src="images/img_computer.svg" alt="imageSixteen" />
                                </div>
                            </div>
                        </div>

                        <div>
                            <h1 className='text-emerald-500'>
                                user safety and audits
                            </h1>
                        </div>

                        <div>
                            <p className='text-sm text-white text-opacity-60 max-w-xs'>
                                with audits conducted by ottersec, we ensure integrity
                                and protect your invaluable assets.
                            </p>
                        </div>

                    </div>



                </div>


            </div>

        </div>
    )
}

export default Features