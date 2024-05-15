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

const styles = StyleSheet.create({
  page: {
    backgroundColor: '#fff',
    display: 'flex',
    fontFamily: 'Geist Sans',
    justifyContent: 'flex-start',
    fontSize: 10.5,
    fontWeight: 300,
    color: colors.neutral.primary,
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: '36px',
    paddingTop: '36px',
    flexBasis: '15%',
    flexGrow: 0,
    flexShrink: 1,
    gap: '36px',
    // backgroundColor: 'green',
  },
  headerMain: {
    display: 'flex',
    flexDirection: 'column',
    flexBasis: '65%',
    flexGrow: 1,
    flexShrink: 0,
    gap: '8px',
    //backgroundColor: 'indigo',
  },
  headerTitle: {
    fontSize: 36,
    fontWeight: 600,
    color: colors.accent.primary,
  },
  headerSubtitle: {
    fontSize: 10,
  },
  headerContact: {
    //backgroundColor: 'orange',
    display: 'flex',
    flexBasis: '35%',
    flexGrow: 0,
    flexShrink: 1,
    gap: '2px',
  },
  content: {
    alignItems: 'stretch',
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'nowrap',
    justifyContent: 'flex-start',
    flexBasis: '85%',
    flexGrow: 1,
    flexShrink: 0,
    paddingHorizontal: '36px',
    gap: '36px',
  },
  sectionTitle: {
    fontSize: 13,
    fontWeight: 600,
    color: colors.accent.secondary,
  },
  main: {
    alignSelf: 'stretch',
    display: 'flex',
    flexBasis: '65%',
    flexDirection: 'column',
    flexGrow: 1,
    flexShrink: 0,
    gap: '48px',
    //backgroundColor: 'purple',
  },
  mainSection: {
    //backgroundColor: 'indigo',
    gap: '12px',
  },
  mainSectionEntry: {
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  sidebar: {
    alignSelf: 'stretch',
    //backgroundColor: '#0f172a',
    display: 'flex',
    flexBasis: '35%',
    flexDirection: 'column',
    flexGrow: 0,
    flexShrink: 1,
    gap: '48px',
  },
  sidebarSection: {
    //backgroundColor: 'royalblue',
    gap: '12px',
  },
  sidebarSectionEntry: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  sidebarEntryTitle: {
    fontSize: 11,
    fontWeight: 600,
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
    <View style={styles.sidebarSectionEntry}>
      <Text style={styles.sidebarEntryTitle}>{title}</Text>
      <Text style={styles.sidebarEntryBody}>{children}</Text>
    </View>
  );
}

export function ResumePdf() {
  const year = new Date().getFullYear();
  const { name, slogan, contacts } = resume;

  return (
    // @ts-ignore
    <Document author={name} title={`Résume for ${name}, ${year}`}>
      {/* @ts-ignore */}
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
                gap: '4px',
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 500 }}>{company}</Text>
              <Text style={{ fontSize: 12 }}>•</Text>
              <Text style={{ fontSize: 12, fontWeight: 400 }}>{role}</Text>
            </View>
            <Text
              style={{
                fontWeight: 400,
                //fontSize: 11,
                color: colors.neutral.tertiary,
                marginTop: '2px',
                marginBottom: '12px',
              }}
            >
              {start} &mdash; {end}
            </Text>
            <View
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '10px',
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
              key={name}
              style={{
                display: 'flex',
                flexDirection: 'column',
              }}
            >
              <Text style={{ fontSize: 12, fontWeight: 500 }}>{name}</Text>
              <Text style={{ marginTop: '6px', marginBottom: '8px' }}>
                {summary}
              </Text>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: 400,
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
  return (
    <View style={styles.sidebarSectionEntry}>
      <Text style={styles.sidebarEntryTitle}>{label}</Text>
      <Text style={styles.sidebarEntryBody}>
        {`${combineSharedNamespaces(activeItems)}, `}
        <Text style={[styles.sidebarEntryBody, { color: colors.neutral.tertiary }]}>
          {combineSharedNamespaces(inactiveItems)}
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
