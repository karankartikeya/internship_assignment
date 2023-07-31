

import React from "react";
import Link from "next/link";
import { BsDiscord , BsTwitter, BsSlack} from "react-icons/bs";
import Image from "next/image";


const SocialPart = () => {

  return (
    <div className="mt-8 rtl:md:mt-0 ltr:xl:mt-0 rtl:lg:mr-12 ltr:xl:ml-12  ltr:2xl:ml-48">
      <div>
        <Image
          src='/images/img_image1.png'
          className="cursor-pointer p-4 "
          height={150}
          width={156}
          priority
          alt='logo'
        />
        <div className="flex mt-3 space-x-2">
          <div className=" p-2 h-10 my-auto">
            <Link legacyBehavior href='/' key="instagram" >
              <a
                className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out "
                aria-label="instagram"
              >

                <BsDiscord
                  style={{
                    fontSize: "2rem",
                    color: "white",
                  }}
                />
              </a>
            </Link>
          </div>

          <div className=" p-2 h-10 my-auto">
            <Link legacyBehavior href='/' key="instagram" >
              <a
                className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out "
                aria-label="instagram"
              >

                <BsTwitter
                  style={{
                    fontSize: "2rem",
                    color: "white",
                  }}
                />
              </a>
            </Link>
          </div>


          <div className=" p-2 h-10 my-auto">
            <Link legacyBehavior href='/' key="instagram" >
              <a
                className="px-2 opacity-60 hover:opacity-100 transition-opacity duration-300 ease-in-out "
                aria-label="instagram"
              >

                <BsSlack
                  style={{
                    fontSize: "2rem",
                    color: "white",
                  }}
                />
              </a>
            </Link>
          </div>
          

        </div>
      </div>
    </div>
  );
};

export default SocialPart;
