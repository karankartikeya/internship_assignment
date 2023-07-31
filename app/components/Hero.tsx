import React from 'react'
import { Text } from './Text'
import { Button } from './Button'
import { Img } from './Img'

type Props = {}

function Hero({ }: Props) {
    return (
        <div className="items-center pb-10 border-b w-full ">
            <Img
                className="absolute h-[492px] w-[82rem] inset-x-[0] mx-auto -z-10 top-[0] mt-[10px] md:mt-24"
                src="images/img_gradient.png"
                alt="gradient"
            />
            <div className='mt-14 md:mt-48 items-center justify-center text-center space-y-1 md:space-y-5  flex-col'>
                <h1 className='text-emerald-500 text-sm md:text-lg font-medium text-center'>Jet Protocol</h1>
                <h1 className='text-white text-4xl md:text-8xl tracking-tight font-medium leading-10 '>the next generation of</h1>
                <h1 className='text-white text-4xl md:text-8xl font-playfairdisplay italic tracking-tight leading-10'>defi governance</h1>
            </div>
            <div className="w-full text-center text-white text-opacity-60  text-xl md:text-2xl font-light mt-10">
                experience open source, transparent and efficient borrowing  <br /> and lending on solana.
            </div>
            <div className='flex justify-center space-x-10 mt-10'>
                <div className="w-32 h-9 p-[20px] bg-[#64ae9d] rounded-full shadow-inner border border-white border-opacity-25 justify-center items-center inline-flex">
                    <div className="text-center text-sm text-black font-bold lowercase">read docs</div>
                </div>
                <div className="w-32 h-9 p-[20px] bg-black rounded-full shadow-inner border border-white border-opacity-25 justify-center items-center inline-flex">
                    <div className="text-center text-sm text-white  font-semibold lowercase">how it works</div>
                </div>
            </div>

            <div className="overflow-x-auto w-full md:mt-24 mt-10">
            <div className="flex flex-row sm:gap-5 gap-6 items-start justify-center overflow-auto w-auto md:w-full">
              <Img
                className="h-12 md:h-auto object-cover w-[104px]"
                src="images/img_image16.png"
                alt="imageSixteen"
              />
              <Img
                className="h-12 md:h-auto object-cover w-[93px]"
                src="images/img_image19.png"
                alt="imageNineteen"
              />
              <Img
                className="h-12 md:h-auto object-cover w-[93px]"
                src="images/img_image20.png"
                alt="imageTwenty"
              />
              <Img
                className="h-12 md:h-auto object-cover w-[140px]"
                src="images/img_image21.png"
                alt="imageTwentyOne"
              />
              <Img
                className="h-12 md:h-auto object-cover w-[90px]"
                src="images/img_image22.png"
                alt="imageTwentyTwo"
              />
              <Img
                className="h-12 md:h-auto object-cover w-11"
                src="images/img_image23.png"
                alt="imageTwentyThree"
              />
              <Img
                className="h-12 md:h-auto object-cover w-[79px]"
                src="images/img_image24.png"
                alt="imageTwentyFour"
              />
              <Img
                className="h-12 md:h-auto object-cover w-[104px]"
                src="images/img_image25.png"
                alt="imageTwentyFive"
              />
              
              <Img
                className="h-12 md:h-auto object-cover w-[49px]"
                src="images/img_image28.png"
                alt="imageTwentyEight"
              />
              <Img
                className="h-12 md:h-auto object-cover w-[67px]"
                src="images/img_image29.png"
                alt="imageTwentyNine"
              />
            </div>
          </div>
        </div>
    )
}

export default Hero