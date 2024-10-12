import "../../chunk-3RG5ZIWI.js";

// src/components/layout/footer.tsx
import Image from "next/image";
import Link from "next/link";

// src/components/layout/footer-links.ts
var NavigationLinks = [
  {
    title: "Home",
    href: "#"
  },
  {
    title: "Feed",
    href: "#"
  },
  {
    title: "Map",
    href: "#"
  },
  {
    title: "Messages",
    href: "#"
  },
  {
    title: "Pricing",
    href: "/pricing"
  }
];
var LegalLinks = [
  {
    title: "Terms",
    href: "#"
  },
  {
    title: "Privacy",
    href: "#"
  },
  {
    title: "Cookies",
    href: "#"
  },
  {
    title: "Contact",
    href: "/contact"
  }
];
var SocialLinks = [
  {
    title: "Facebook",
    href: "#"
  },
  {
    title: "Twitter",
    href: "#"
  },
  {
    title: "Instagram",
    href: "#"
  }
];

// src/components/layout/footer.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var Footer = () => {
  return /* @__PURE__ */ jsxs("footer", { className: "bg-3deg-greenish-100 content-spacing py-[15%] md:pt-[5%] md:pb-[3%] space-y-10", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col lg:flex-row gap-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "space-y-4 lg:w-1/4", children: [
        /* @__PURE__ */ jsx(Link, { href: "/", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: "/images/brand-logo-secondary.svg",
            alt: "threedegrees brand",
            width: 150,
            height: 200
          }
        ) }),
        /* @__PURE__ */ jsx("p", { className: "text-3deg-black-200 text-sm", children: "Design amazing digital experiences that create more happy in the world." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-6 grid-cols-2 md:grid-cols-3 lg:w-3/4 lg:place-items-center lg:items-start", children: [
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h6", { className: "text-3deg-black-200 text-sm", children: "Navigation" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 flex flex-col", children: NavigationLinks.map((item) => /* @__PURE__ */ jsx(FooterLink, { href: item.href, children: item.title }, item.title)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h6", { className: "text-3deg-black-200 text-sm", children: "Legal" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 flex flex-col", children: LegalLinks.map((item) => /* @__PURE__ */ jsx(FooterLink, { href: item.href, children: item.title }, item.title)) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("h6", { className: "text-3deg-black-200 text-sm", children: "Social" }),
          /* @__PURE__ */ jsx("div", { className: "space-y-3 flex flex-col", children: SocialLinks.map((item) => /* @__PURE__ */ jsx(
            "a",
            {
              target: "_blank",
              rel: "noopener noreferrer",
              href: item.href,
              className: "text-3deg-black-100 font-medium text-sm",
              children: item.title
            },
            item.title
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row justify-between items-center md:px-[10%] lg:px-[20%] gap-5", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "pb-2 font-medium text-3deg-black-300 text-center", children: "iOS" }),
        /* @__PURE__ */ jsx(Link, { href: "#", passHref: true, legacyBehavior: true, children: /* @__PURE__ */ jsx("a", { target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: "/images/download-on-apple-store.svg",
            alt: "download-on-apple-store",
            width: 130,
            height: 100
          }
        ) }) })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("h5", { className: "pb-2 font-medium text-3deg-black-300 text-center", children: "Android" }),
        /* @__PURE__ */ jsx(Link, { href: "#", passHref: true, legacyBehavior: true, children: /* @__PURE__ */ jsx("a", { target: "_blank", rel: "noopener noreferrer", children: /* @__PURE__ */ jsx(
          Image,
          {
            src: "/images/download-on-google-play-store.svg",
            alt: "download-on-google-play-store",
            width: 130,
            height: 100
          }
        ) }) })
      ] })
    ] }),
    /* @__PURE__ */ jsxs("p", { className: "text-center text-3deg-greenish-200 text-sm pt-8", children: [
      "\xA9 ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " 3 Degrees. All rights reserved."
    ] })
  ] });
};
var FooterLink = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Link, { ...props, className: "text-3deg-black-100 font-medium text-sm", children });
};
export {
  Footer
};
