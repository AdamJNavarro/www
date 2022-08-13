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
    name: 'bear',
    href: 'https://bear.app/',
    logo: 'https://res.cloudinary.com/dkddfip9j/image/upload/v1660426417/logos/bear.png',
    preview: 'My preferred note-taking app.',
    tags: [Tag.Ios, Tag.Macos],
  },
];

export { stackBank };
