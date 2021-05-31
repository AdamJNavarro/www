const baseUrl = "https://adamjnavarro.com"
const baseEmail = "adamjnavarro@icloud.com"

export const defaultSEO = {
  title: "Adam Navarro",
  description:
    "Software builder, writer, musician and fitness enthusiast. Living in Milwaukee, WI. Currently working on Expo and Momento.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Adam Navarro",
    images: [
      {
        url: `${baseUrl}/images/`,
        alt: "Adam Navarro",
      },
    ],
  },
  twitter: {
    handle: "@adamjnavarro",
    site: "@adamjnavarro",
    cardType: "summary_large_image",
  },
}
