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
    name: 'Brave Browser',
    href: 'https://brave.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510444/logos/brave-browser.png',
    preview: "There's nothing better than Brave when it comes to browser privacy.",
  },
  {
    name: 'Bear',
    href: 'https://bear.app/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660426417/logos/bear.png',
    preview: 'My preferred note-taking app.',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'Spotify',
    href: 'https://www.spotify.com/us/home/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660509695/logos/spotify.png',
    preview:
      'My favorite music app that I use religiously. What puts it above for me is the lesser known remixes and tracks the library has.',
  },
  {
    name: 'Keyboard Maestro',
    href: 'https://www.keyboardmaestro.com/main/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510584/logos/keyboard-maestro.png',
    preview: "When in doubt, automate. I've saved hours upon hours with KM.",
    tags: [Tag.Macos],
  },
  {
    name: 'Things',
    href: 'https://culturedcode.com/things/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510468/logos/things.png',
    preview: '',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'Fantastical',
    href: 'https://flexibits.com/fantastical',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510480/logos/fantastical.png',
    preview: '',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'Linear',
    href: 'https://linear.app/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510530/logos/linear.png',
    preview: '',
  },
  {
    name: 'Mimestream',
    href: 'https://mimestream.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510522/logos/mimestream.png',
    preview: '',
    tags: [Tag.Macos],
  },
  {
    name: 'Ableton Live',
    href: 'https://www.ableton.com/en/live/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660512416/logos/ableton.png',
    preview: '',
  },
  {
    name: 'Cardhop',
    href: 'https://flexibits.com/cardhop',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660512393/logos/cardhop.png',
    preview: '',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'Bartender',
    href: 'https://www.macbartender.com/Bartender4/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660512336/logos/bartender.png',
    preview: '',
    tags: [Tag.Macos],
  },
  {
    name: 'Magnet',
    href: 'https://magnet.crowdcafe.com/index.html',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523926/logos/magnet.png',
    preview: '',
    tags: [Tag.Macos],
  },
  {
    name: 'Usb Overdrive',
    href: 'https://www.usboverdrive.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523895/logos/usb-overdrive.png',
    preview: '',
    tags: [Tag.Macos],
  },
  {
    name: 'Texts',
    href: 'https://texts.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523881/logos/texts.png',
    preview: '',
  },
  {
    name: 'Reflector',
    href: 'https://www.airsquirrels.com/reflector',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523862/logos/reflector.png',
    preview: '',
  },
  {
    name: 'DaisyDisk',
    href: 'https://daisydiskapp.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523835/logos/daisydisk.png',
    preview: '',
    tags: [Tag.Macos],
  },
  {
    name: 'Choosy',
    href: 'https://www.choosyosx.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523809/logos/choosy.png',
    preview: '',
    tags: [Tag.Macos],
  },
  {
    name: '1Password',
    href: 'https://1password.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523795/logos/1password.png',
    preview: '',
  },
  {
    name: 'Cloudflare WARP',
    href: 'https://1.1.1.1/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523822/logos/cloudflare-warp.png',
    preview: '',
  },
  {
    name: 'Literal',
    href: 'https://literal.club/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660527872/logos/literal.png',
    preview: '',
  },
  {
    name: 'Trakt',
    href: 'https://trakt.tv/dashboard',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660527885/logos/trakt.png',
    preview: '',
  },
  {
    name: 'Inshot',
    href: 'https://inshot.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660527854/logos/inshot.png',
    preview: '',
    tags: [Tag.Mobile],
  },
  {
    name: 'Pillow',
    href: 'https://pillow.app/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660527879/logos/pillow.png',
    preview: '',
    tags: [Tag.Ios],
  },
  {
    name: 'Letterboxd',
    href: 'https://letterboxd.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660527863/logos/letterboxd.png',
    preview: '',
  },
  {
    name: 'Gametime',
    href: 'https://gametime.co/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660581785/logos/gametime.png',
    preview: '',
  },
  {
    name: 'VUDU',
    href: 'https://vudu.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660581793/logos/vudu.png',
    preview: '',
  },
];

export { stackBank };
