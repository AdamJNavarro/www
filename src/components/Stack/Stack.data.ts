enum Tag {
  Mobile = 'mobile',
  Ios = 'iOS',
  Macos = 'macOS',
  Free = 'free',
  Web = 'web',
}

interface StackProduct {
  name: string;
  href: string;
  logo: string;
  preview: string;
  tags?: Tag[];
  secondaryTags?: Tag[];
  noLongerUse?: boolean;
}

const stackBank: StackProduct[] = [
  {
    name: 'brave browser',
    href: 'https://brave.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510444/logos/brave-browser.png',
    preview: "There's nothing better than Brave when it comes to browser privacy.",
  },
  {
    name: 'bear',
    href: 'https://bear.app/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660426417/logos/bear.png',
    preview: 'My preferred note-taking app.',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'spotify',
    href: 'https://www.spotify.com/us/home/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660509695/logos/spotify.png',
    preview:
      'My favorite music app that I use religiously. What puts it above for me is the lesser known remixes and tracks the library has.',
  },
  {
    name: 'keyboard maestro',
    href: 'https://www.keyboardmaestro.com/main/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510584/logos/keyboard-maestro.png',
    preview: "When in doubt, automate. I've saved hours upon hours with KM.",
    tags: [Tag.Macos],
  },
  {
    name: 'things',
    href: 'https://culturedcode.com/things/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510468/logos/things.png',
    preview: '',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'fantastical',
    href: 'https://flexibits.com/fantastical',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510480/logos/fantastical.png',
    preview: '',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'linear',
    href: 'https://linear.app/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510530/logos/linear.png',
    preview: '',
  },
  {
    name: 'mimestream',
    href: 'https://mimestream.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510522/logos/mimestream.png',
    preview: '',
    tags: [Tag.Macos],
  },
  {
    name: 'ableton live',
    href: 'https://www.ableton.com/en/live/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660512416/logos/ableton.png',
    preview: '',
  },
  {
    name: 'cardhop',
    href: 'https://flexibits.com/cardhop',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660512393/logos/cardhop.png',
    preview: '',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'bartender',
    href: 'https://www.macbartender.com/Bartender4/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660512336/logos/bartender.png',
    preview: '',
    tags: [Tag.Macos],
  },
];

export { stackBank };
