import { Document, Font, Page, StyleSheet, Text, View } from '@react-pdf/renderer';
import React from 'react';
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
  6: '24px',
  8: '32px',
  9: '36px',
  12: '48px',
};

const layoutHorizontalSpacing = spacing[9];

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    display: 'flex',
    fontFamily: 'Geist Sans',
    justifyContent: 'flex-start',
    fontSize: fontSizes.base,
    fontWeight: fontWeights.light,
    color: colors.neutral.primary,
    paddingVertical: spacing[9],
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: layoutHorizontalSpacing,
    paddingBottom: spacing[9],
    gap: layoutHorizontalSpacing,
    //backgroundColor: 'green',
  },
  headerMain: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '65%',
    flexGrow: 1,
    flexShrink: 0,
    //backgroundColor: 'indigo',
  },
  headerTitle: {
    fontSize: 32,
    fontWeight: fontWeights.semiBold,
    color: colors.accent.primary,
  },
  headerSubtitle: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.regular,
    color: colors.neutral.tertiary,
  },
  headerContact: {
    //backgroundColor: 'orange',
    display: 'flex',
    flexBasis: '35%',
    flexGrow: 0,
    flexShrink: 1,
    gap: spacing.px,
    fontSize: fontSizes.sm,
  },
  content: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    flexGrow: 1,
    paddingHorizontal: layoutHorizontalSpacing,
    gap: layoutHorizontalSpacing,
  },
  sectionTitle: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semiBold,
    color: colors.accent.secondary,
  },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexBasis: '65%',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    gap: spacing[9],
    //backgroundColor: 'purple',
  },
  mainSection: {
    //backgroundColor: 'indigo',
    gap: spacing[3],
  },
  mainSectionEntry: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[6],
  },
  sidebar: {
    alignSelf: 'stretch',
    //backgroundColor: '#0f172a',
    display: 'flex',
    flexBasis: '35%',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
    gap: spacing[12],
  },
  sidebarSection: {
    //backgroundColor: 'royalblue',
    gap: spacing[3],
  },
  sidebarSectionEntry: {
    display: 'flex',
    flexDirection: 'column',
    gap: spacing[2],
  },
  sidebarEntryTitle: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semiBold,
    color: colors.neutral.secondary,
  },
  sidebarEntryBody: {
    //fontSize: 12,
  },
});

function SidebarSection({ title, children }: { title: string; children: any }) {
  return (
    <View style={styles.sidebarSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      {children}
    </View>
  );
}

function SidebarSectionEntry({ title, children }: { title: string; children: any }) {
  return (
    <View wrap={false} style={styles.sidebarSectionEntry}>
      <Text style={styles.sidebarEntryTitle}>{title}</Text>
      <Text style={styles.sidebarEntryBody}>{children}</Text>
    </View>
  );
}

export function ResumePdf() {
  const year = new Date().getFullYear();
  const { name, slogan, contacts } = resume;

  return (
    <Document author={name} title={`Résume for ${name}, ${year}`}>
      <Page size="LETTER" style={styles.page}>
        <View style={styles.header}>
          <View style={styles.headerMain}>
            <Text style={styles.headerTitle}>{name}</Text>
            <Text style={styles.headerSubtitle}>{slogan}</Text>
          </View>
          <View style={styles.headerContact}>
            {contacts.map((entry) => (
              <Text key={entry.label}>{entry.label}</Text>
            ))}
          </View>
        </View>
        <View style={styles.content}>
          <View style={styles.main}>
            <ExperienceSection />
            <ProjectSection />
          </View>
          <View style={styles.sidebar}>
            <TechSection />
            <PersonalSection />
          </View>
        </View>
      </Page>
    </Document>
  );
}

function ExperienceSection() {
  const { title, items } = resume.experience;
  return (
    <View style={styles.mainSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
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
                style={{ fontSize: fontSizes.md, fontWeight: fontWeights.medium }}
              >
                {company}
              </Text>
              <Text style={{ fontSize: fontSizes.md }}>•</Text>
              <Text
                style={{ fontSize: fontSizes.md, fontWeight: fontWeights.regular }}
              >
                {role}
              </Text>
            </View>
            <Text
              style={{
                fontWeight: fontWeights.regular,
                color: colors.neutral.tertiary,
                marginTop: spacing.px,
                marginBottom: spacing[3],
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
    </View>
  );
}

function ProjectSection() {
  const { title, items } = resume.projects;

  return (
    <View style={styles.mainSection}>
      <Text style={styles.sectionTitle}>{title}</Text>
      <View style={styles.mainSectionEntry}>
        {items.map((project) => {
          const { name, summary, stack } = project;
          return (
            <View
              wrap={false}
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text
                style={{ fontSize: fontSizes.md, fontWeight: fontWeights.medium }}
              >
                {name}
              </Text>
              <Text style={{ marginVertical: spacing[2] }}>{summary}</Text>
              <Text
                style={{
                  fontSize: fontSizes.sm,
                  color: colors.neutral.tertiary,
                }}
              >
                {stack.join(', ')}
              </Text>
            </View>
          );
        })}
      </View>
    </View>
  );
}

function TechStackBody({ label, stack }: any): any {
  const activeItems = stack.filter((item) => item.activelyUsing);
  const inactiveItems = stack.filter((item) => !item.activelyUsing);

  const activeNames = combineSharedNamespaces(activeItems);
  const inactiveNames = combineSharedNamespaces(inactiveItems);

  return (
    <View style={styles.sidebarSectionEntry}>
      <Text style={styles.sidebarEntryTitle}>{label}</Text>
      <Text style={[styles.sidebarEntryBody, { fontWeight: fontWeights.regular }]}>
        {activeNames}
        <Text
          style={[
            styles.sidebarEntryBody,
            { fontWeight: fontWeights.light, color: colors.neutral.secondary },
          ]}
        >
          {`, ${inactiveNames}`}
        </Text>
      </Text>
    </View>
  );
}

function TechSection() {
  const { title, stacks } = resume.tech;
  const { languages, tools, frameworks, services } = stacks;
  return (
    <SidebarSection title={title}>
      <TechStackBody label={languages.label} stack={languages.items} />
      <TechStackBody label={frameworks.label} stack={frameworks.items} />
      <TechStackBody label={services.label} stack={services.items} />
      <TechStackBody label={tools.label} stack={tools.items} />
      <Text style={{ fontWeight: fontWeights.regular }}>
        💡 Bold names indicate active use.
      </Text>
    </SidebarSection>
  );
}

function PersonalSection() {
  const { title, categories } = resume.personal;
  return (
    <SidebarSection title={title}>
      {categories.map((category) => (
        <SidebarSectionEntry key={category.label} title={category.label}>
          {category.body}
        </SidebarSectionEntry>
      ))}
    </SidebarSection>
  );
}
