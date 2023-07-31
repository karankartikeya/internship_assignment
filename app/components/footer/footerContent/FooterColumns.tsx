import Link from "next/link";
import React from "react";

export const footerContent = [
  {
    title: "Contact",
    subtitles: [
      {
        text: "hello@jetprotocol.io",
        href: "#",
      },
      {
        text: "termsofservice",
        href: "#",
      },
    ],
  },
  {
    title: "developers",
    subtitles: [
      {
        text: "documentation",
        href: "#",
      },
      {
        text: "github",
        href: "#",
      },
      {
        text: "bugbounty",
        href: "#",
      },
    ],
  },
  {
    title: "community",
    subtitles: [
      {
        text: "forum",
        href: "#",
      },
      {
        text: "governance",
        href: "#",
      },
    ],
  },
  {
    title: "resources",
    subtitles: [
      {
        text: "blog",
        href: "#",
      },
      {
        text: "litepaper",
        href: "#",
      },
      {
        text: "jobs",
        href: "#",
      },
    ],
  },
];
const FooterColumns = () => {
  return (
    <div className="flex justify-start items-start flex-wrap flex-grow  mt-4">
      {footerContent.map((item) => {
        return (
          <div className="mt-6 md:mt-0" key={item.title}>
            <h2 className="text-md rtl:border-r-4 ltr:border-l-4 border-palette-primary text-white px-2 uppercase">
              {item.title}
            </h2>
            <div className="flex flex-col mt-2">
              {item.subtitles.map((subItem) => {
                return (
                  <Link legacyBehavior href={subItem.href} key={subItem.text}>
                    <a className="text-sm text-white text-opacity-60 px-4 py-2 hover:text-palette-base/100">
                      {subItem.text}
                    </a>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FooterColumns;
