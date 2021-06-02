const baseUrl = "https://adamjnavarro.com"

export const defaultSEO = {
  title: "Adam Navarro",
  description:
    "Software builder, musician and fitness enthusiast. Currently working on Expo and Momento.",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: baseUrl,
    site_name: "Adam Navarro",
    images: [
      {
        url: `${baseUrl}/og-image.png`,
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
