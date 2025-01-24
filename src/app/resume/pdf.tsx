import {
  Document,
  Font,
  Link,
  Page,
  StyleSheet,
  Text,
  View,
} from '@react-pdf/renderer';
import type React from 'react';
import { resume } from './data';
import { combineSharedNamespaces } from './utils';

const hyphenationCallback = (word: string) => {
  // don't hyphenate
  return [word];
};

Font.register({
  family: 'Geist Sans',
  fonts: [
    {
      fontStyle: 'normal',
      fontWeight: 300,
      src: `node_modules/geist/dist/fonts/geist-sans/Geist-Light.ttf`,
    },
    {
      fontStyle: 'normal',
      fontWeight: 400,
      src: `node_modules/geist/dist/fonts/geist-sans/Geist-Regular.ttf`,
    },
    {
      fontStyle: 'normal',
      fontWeight: 500,
      src: `node_modules/geist/dist/fonts/geist-sans/Geist-Medium.ttf`,
    },
    {
      fontStyle: 'normal',
      fontWeight: 600,
      src: `node_modules/geist/dist/fonts/geist-sans/Geist-SemiBold.ttf`,
    },
    {
      fontStyle: 'normal',
      fontWeight: 700,
      src: `node_modules/geist/dist/fonts/geist-sans/Geist-Bold.ttf`,
    },
  ],
});

Font.registerHyphenationCallback(hyphenationCallback);

Font.registerEmojiSource({
  format: 'png',
  url: 'https://cdn.jsdelivr.net/npm/emoji-datasource-apple@15.1.2/img/apple/64/',
  withVariationSelectors: true,
});

const colors = {
  neutral: {
    primary: '#020617',
    secondary: '#1e293b',
    tertiary: '#475569',
  },
  accent: {
    primary: '#5b21b6',
    secondary: '#6d28d9',
  },
};

const fontSizes = {
  sm: 10.5,
  base: 11,
  md: 12,
  lg: 13,
  xl: 14,
};

const fontWeights = {
  light: 300,
  regular: 400,
  medium: 500,
  semiBold: 600,
  bold: 700,
};

const spacing = {
  px: '1px',
  1: '4px',
  2: '8px',
  3: '12px',
  4: '16px',
  5: '20px',
  6: '24px',
  8: '32px',
  9: '36px',
  12: '48px',
};

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    display: 'flex',
    fontFamily: 'Geist Sans',
    justifyContent: 'flex-start',
    fontSize: fontSizes.base,
    fontWeight: fontWeights.light,
    color: colors.neutral.primary,
    padding: spacing[12], // maybe "1in"
    gap: spacing[5],
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    // backgroundColor: "green",
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: fontWeights.semiBold,
    color: colors.neutral.primary,
    alignSelf: 'center',
  },
  headerSubtitle: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    color: colors.neutral.secondary,
    alignSelf: 'center',
  },
  headerContact: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    paddingTop: spacing[2],
    fontSize: fontSizes.sm,
    color: colors.neutral.secondary,
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
  },
  sectionTitle: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.medium,
    color: colors.neutral.primary,
    textTransform: 'uppercase',
  },
  sectionLine: {
    height: '0.5px',
    width: '100%',
    backgroundColor: colors.neutral.secondary,
  },
  sectionContent: {
    display: 'flex',
    flexDirection: 'column',
    paddingVertical: spacing[3],
  },
  sectionCategoryLabel: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
    color: colors.neutral.secondary,
    paddingBottom: spacing[1],
  },
  sectionCategoryBody: {
    fontSize: fontSizes.base,
  },
  link: {
    textDecoration: 'none',
    color: colors.accent.primary,
  },
});

export function ResumePdf() {
  const year = new Date().getFullYear();
  const { name, slogan, contacts } = resume;

  return (
    <Document author={name} title={`Résume for ${name}, ${year}`}>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}>{name}</Text>
          <Text style={styles.headerSubtitle}>{slogan}</Text>
          <View style={styles.headerContact}>
            {contacts.map((entry) => (
              <Text key={entry.label}>{entry.label}</Text>
            ))}
          </View>
        </View>
        <ExperienceSection />
        <Projects />
        <Skills />
      </Page>
    </Document>
  );
}

function Section({
  title,
  contentSpacing = spacing[6],
  children,
}: {
  title: string;
  contentSpacing?: string;
  children: React.ReactNode;
}) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.sectionLine} />
      <View style={[styles.sectionContent, { gap: contentSpacing }]}>
        {children}
      </View>
    </View>
  );
}

function ExperienceSection() {
  const { title, items } = resume.experience;
  return (
    <Section title={title} contentSpacing={spacing[5]}>
      {items.map((item) => {
        const { company, href, role, start, end, details } = item;
        return (
          <View
            key={`${company}-${role}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <View
              style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                gap: spacing[1],
              }}
            >
              <Text
                style={{
                  fontSize: fontSizes.md,
                  fontWeight: fontWeights.medium,
                }}
              >
                {company}
              </Text>
              <Text style={{ fontSize: fontSizes.md }}>•</Text>
              <Text
                style={{
                  fontSize: fontSizes.md,
                  fontWeight: fontWeights.regular,
                }}
              >
                {role}
              </Text>
            </View>
            <Text
              style={{
                fontWeight: fontWeights.regular,
                color: colors.neutral.tertiary,
                marginTop: spacing.px,
                marginBottom: spacing[2],
              }}
            >
              {start} &mdash; {end}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: spacing[1],
              }}
            >
              {details.map((detail) => (
                <Text key={detail}>• &nbsp;{detail}</Text>
              ))}
            </View>
          </View>
        );
      })}
    </Section>
  );
}

function Projects() {
  const { title, items } = resume.projects;

  return (
    <Section title={title} contentSpacing={spacing[3]}>
      {items.map((project) => {
        const { name, href, repo } = project;
        return (
          <View
            key={name}
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
              gap: spacing[2],
            }}
          >
            <Text style={{ fontSize: fontSizes.md }}>•</Text>

            <Link
              src={href}
              style={[
                styles.link,
                {
                  fontSize: fontSizes.md,
                  fontWeight: fontWeights.medium,
                },
              ]}
            >
              {name}
            </Link>

            <Text style={{ color: colors.neutral.tertiary }}>
              ({' '}
              <Link href={repo} style={{ color: colors.neutral.tertiary }}>
                repo
              </Link>{' '}
              )
            </Text>
          </View>
        );
      })}
    </Section>
  );
}

function Skills() {
  const { title, soft, hard } = resume.skills;

  const activeItems = hard.filter((item) => item.activelyUsing);

  const activeNames = combineSharedNamespaces(activeItems);

  return (
    <Section title={title} contentSpacing={spacing[3]}>
      <Text style={{ color: colors.neutral.primary }}>{activeNames}</Text>

      <Text style={{ color: colors.neutral.secondary }}>{soft}</Text>
    </Section>
  );
}
