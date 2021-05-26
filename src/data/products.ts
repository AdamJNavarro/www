/*
{
        name: "",
        description: "",
        image: "",
        url: "",
    }

*/

export const products = [
  {
    name: "next.js",
    description: "A framework to build React websites for production.",
    image: "nextjs.png",
    url: "https://nextjs.org/",
    openSource: true,
  },
  {
    name: "1password",
    description: "A password manager that works on both web and mobile.",
    image: "1password.png",
    url: "https://1password.com",
  },
  {
    name: "figma",
    description:
      "A design tool that makes it easy to collaborate and iterate quickly.",
    image: "figma.jpg",
    url: "https://www.figma.com/",
  },
  {
    name: "vercel",
    description: "A platform for deploying and hosting your frontend apps.",
    image: "vercel.jpg",
    url: "https://vercel.com",
  },
  {
    name: "apollo",
    description:
      "A platform that allows you to build a data graph and connect your app clients to your backend.",
    image: "apollo.png",
    url: "https://www.apollographql.com/",
    openSource: true,
  },
  {
    name: "render",
    description: "A platform to build, deploy and host your apps and websites.",
    image: "render.png",
    url: "https://render.com/",
  },
  {
    name: "cloudinary",
    description:
      "An end-to-end media management solution for websites and mobile apps.",
    image: "cloudinary.png",
    url: "https://cloudinary.com/",
  },
  {
    name: "aws",
    description:
      "Amazon Web Services - reliable, scalable, and inexpensive cloud computing services.",
    image: "aws.png",
    url: "https://aws.amazon.com/",
  },
  {
    name: "expo",
    description: "A framework and a platform for universal React applications.",
    image: "expo.png",
    url: "https://expo.io/",
    openSource: true,
  },
]

export type ProductName =
  | "next.js"
  | "vercel"
  | "figma"
  | "1password"
  | "apollo"
  | "render"
  | "cloudinary"
  | "aws"
  | "expo"
