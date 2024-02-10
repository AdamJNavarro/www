enum Tag {
  Mobile = 'mobile',
  Ios = 'iOS',
  Macos = 'macOS',
  Apple = 'apple',
  Web = 'web',
  Free = 'free',
  Freemium = 'freemium',
  Subscription = 'subscription',
  OTP = 'one-time fee',
}

export interface UsesItem {
  name: string;
  href: string;
  details: string;
  logo?: string;
  tags?: Tag[];
}

const miscUsesItems = [
  {
    name: '1Password',
    href: 'https://1password.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523795/logos/1password.png',
    details: 'Handling passwords has never been smoother or simpler.',
    tags: [Tag.Subscription],
  },
  {
    name: 'Bear',
    href: 'https://bear.app/',
    details: 'My preferred note-taking app.',
    tags: [Tag.Ios, Tag.Macos, Tag.Freemium],
  },
  {
    name: 'Spotify',
    href: 'https://www.spotify.com/us/home/',
    details: 'Where I get all my songs and podcasts.',
    tags: [Tag.Freemium],
  },
  {
    name: 'Things',
    href: 'https://culturedcode.com/things/',
    details: 'My ultimate task manager.',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510468/logos/things.png',
    tags: [Tag.Ios, Tag.Macos, Tag.OTP],
  },
  {
    name: 'Literal',
    href: 'https://literal.club/',
    details: 'How I track my reading.',
    tags: [Tag.Free],
  },
  {
    name: 'Trakt',
    href: 'https://trakt.tv/dashboard',
    details: 'How I track my tv consumption.',
    tags: [Tag.Freemium],
  },
  {
    name: 'Letterboxd',
    href: 'https://letterboxd.com/',
    details: 'How I track my movie-going.',
    tags: [Tag.Freemium],
  },
  {
    name: 'Inshot',
    href: 'https://inshot.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660527854/logos/inshot.png',
    details: 'My go-to for editing videos and photos on my phone.',
    tags: [Tag.Mobile, Tag.Freemium],
  },
  {
    name: 'Udemy',
    href: 'https://www.udemy.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660582591/logos/udemy.png',
    details: 'Where I do my online learning.',
    tags: [Tag.Subscription, Tag.OTP],
  },
  {
    name: 'Gametime',
    href: 'https://gametime.co/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660581785/logos/gametime.png',
    details: 'What I use to buy tickets whenever I go to events.',
    tags: [Tag.Free],
  },
  {
    name: 'Fandango',
    href: 'https://www.fandango.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1707538646/logos/fandango.png',
    details: 'Where I buy my movie tickets.',
    tags: [Tag.Free],
  },
  {
    name: 'Brave Browser',
    href: 'https://brave.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510444/logos/brave-browser.png',
    details: "There's nothing better than Brave when it comes to browser privacy.",
    tags: [Tag.Free],
  },
];

const computerUsesItems: UsesItem[] = [
  {
    name: 'Keyboard Maestro',
    href: 'https://www.keyboardmaestro.com/main/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660510584/logos/keyboard-maestro.png',
    details: "When in doubt, automate. I've saved hours upon hours with KM.",
    tags: [Tag.Macos, Tag.OTP],
  },
  {
    name: 'Bartender',
    href: 'https://www.macbartender.com/',
    details: 'Helps tidy up your menu bar and keep your screen space clean.',
    tags: [Tag.Macos, Tag.OTP],
  },
  {
    name: 'Magnet',
    href: 'https://magnet.crowdcafe.com/index.html',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523926/logos/magnet.png',
    details: 'How I keep all my windows organized.',
    tags: [Tag.Macos, Tag.OTP],
  },
  {
    name: 'DaisyDisk',
    href: 'https://daisydiskapp.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523835/logos/daisydisk.png',
    details: 'A beautiful way to keep your storage under control.',
    tags: [Tag.Macos, Tag.OTP],
  },
  {
    name: 'Shortcuts',
    href: 'https://support.apple.com/en-nz/guide/shortcuts/welcome/ios',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660659562/logos/shortcuts.png',
    details: 'A great way to automate within the Apple ecosystem.',
    tags: [Tag.Ios, Tag.Macos],
  },
  {
    name: 'Choosy',
    href: 'https://www.choosyosx.com/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660523809/logos/choosy.png',
    details: 'A great way to control link opening behavior.',
    tags: [Tag.Macos, Tag.OTP],
  },
];

export { computerUsesItems, miscUsesItems };
