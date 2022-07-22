import { Text, createStyles, Group, Space } from '@mantine/core';
import Link from 'next/link';
import Image from 'next/image';
import { PlatformBadge, ProductPlatform } from '../common/Badges';

type CodingProject = {
  name: string;
  desc: string;
  platforms: ProductPlatform[];
  url: string;
};

const codingProjects: CodingProject[] = [
  {
    name: 'Expo',
    desc: 'A placeholder description paragraph to help figure out spacing and layout design.',
    platforms: ['android', 'ios', 'web'],
    url: '',
  },
];

const useStyles = createStyles((theme) => ({
  container: {
    marginBottom: theme.spacing.xl * 2.5,
  },

  nameContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: theme.spacing.xl,
  },
}));

function ProjectItem({ name, desc, platforms, url }: CodingProject) {
  const { classes } = useStyles();

  const assetName = name.replaceAll(' ', '-').replaceAll('.', '');
  const imageSrc = `/img/logos/${assetName}.png`;

  return (
    <div className={classes.container}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Link href={url}>
          <a style={{ display: 'inline-block' }}>
            <Image
              src={imageSrc}
              width={72}
              height={72}
              layout="fixed"
              alt={`${name} icon`}
              //className={'rounded-2xl'}
            />
          </a>
        </Link>
        <div className={classes.nameContainer}>
          <Text weight={600} size="xl">
            {name}
          </Text>
          <Space h="sm" />
          <Group spacing="md">
            {platforms.map((platform) => (
              <PlatformBadge key={`${name}-${platform}`} name={platform} />
            ))}
          </Group>
        </div>
      </div>
      <Text size="md" weight={500} mt="md">
        {desc}
      </Text>
    </div>
  );
}

export default function CodingProjects() {
  return (
    <div>
      {codingProjects.map((project) => (
        <ProjectItem key={project.name} {...project} />
      ))}
    </div>
  );
}
