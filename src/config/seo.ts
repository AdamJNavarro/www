const baseUrl = "https://adamjnavarro.com";

export const defaultSEO = {
  description:
    "Software builder, musician and fitness enthusiast. Currently working on Expo and Momento.",
  openGraph: {
    images: [
      {
        alt: "Adam Navarro",
        url: `${baseUrl}/og-image.png`,
      },
    ],
    locale: "en_US",
    site_name: "Adam Navarro",
    type: "website",
    url: baseUrl,
  },
  title: "Adam Navarro",
  twitter: {
    cardType: "summary_large_image",
    handle: "@adamjnavarro",
    site: "@adamjnavarro",
  },
};
