import { BsChevronDown } from "react-icons/bs";

export const navList = [
  {
    list: "My URLs",
    href: "/",
  },
  {
    list: "Features",
    icon: (
      <>
        <BsChevronDown />
      </>
    ),
    href: "/features",
  },
  { list: "Pricing", href: "#pricing" },
  { list: "Analytics", href: "/anallytics" },
  { list: "FAQs", href: "#faq" },
];
