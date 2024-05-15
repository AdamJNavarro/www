import { StackItem } from '~/app/(main)/data/stack';
import { resume } from './data';
import ThemeImage from '~/components/common/ThemeImage';
import { getLogoPath } from '~/utils';
import { sortStackByUsage } from './utils';

const textLinkClass =
  'no-underline text-violet-700 dark:text-violet-400 hover:underline';

const flatSectionClass = 'px-8 tablet:px-0';

const surfaceSectionClass =
  'p-8 bg-surface shadow-lg dark:shadow-violet-500/20 tablet:p-12 tablet:rounded-xl';

const sectionTitleClass =
  'text-center mb-16 text-surface-primary font-bold text-3xl desktop:text-4xl';

const subSectionLabelClass =
  'mb-6 text-surface-secondary font-medium text-2xl desktop:text-2xl';

export default function ResumePage() {
  return (
    <>
      <div className="py-12 border-b dark:border-slate-800">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="font-bold text-4xl desktop:text-5xl">{resume.name}</div>
            <div className="text-surface-secondary font-medium text-lg desktop:text-xl">
              {resume.slogan}
            </div>
            <a
              className={`${textLinkClass} text-base desktop:text-lg`}
              href="/api/pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
      <div className="py-36 space-y-36 tablet:container">
        <IntroSection />
        <TechStackSection />
        <ExperienceSection />
        <ProjectSection />
        <PersonalSection />
      </div>
    </>
  );
}

function IntroSection() {
  return (
    <div
      className={`${flatSectionClass} text-center desktop:text-left grid grid-cols-1 gap-16 desktop:grid-cols-[1fr_auto]`}
    >
      <div>
        <div className={`${subSectionLabelClass}`}>What I'm Looking For</div>
        <div className="text-lg desktop:text-xl bg-transparent">{resume.about}</div>
      </div>
      <div>
        <div className={subSectionLabelClass}>Contact Info</div>
        <div className="space-y-0.5 font-medium">
          {resume.contacts.map((entry) => {
            if (entry.href)
              return (
                <div key={entry.label}>
                  <a
                    className={`${textLinkClass}`}
                    href={entry.href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {entry.label}
                  </a>
                </div>
              );
            return <div key={entry.label}>{entry.label} </div>;
          })}
        </div>
      </div>
    </div>
  );
}

function TechStackSection() {
  const { title, stacks } = resume.tech;
  const { languages, tools, frameworks, services } = stacks;
  return (
    <div className={`${surfaceSectionClass}`}>
      <div className={sectionTitleClass}>{title}</div>
      <div className="text-base text-surface-tertiary text-center -mt-12 mb-16">
        Brighter logos indicate active use.
      </div>
      <div className="space-y-16">
        <div className="grid grid-cols-1 gap-12 desktop:gap-24 desktop:grid-cols-2">
          <ResumeStack label={languages.label} stack={languages.items} />
          <ResumeStack label={tools.label} stack={tools.items} />
        </div>
        <div className="grid grid-cols-1 gap-12 desktop:gap-24 desktop:grid-cols-2">
          <ResumeStack label={frameworks.label} stack={frameworks.items} />
          <ResumeStack label={services.label} stack={services.items} />
        </div>
      </div>
    </div>
  );
}

function ExperienceSection() {
  const { title, items } = resume.experience;
  return (
    <div className={`${flatSectionClass} w-full desktop:w-3/4 mx-auto`}>
      <div className={`${sectionTitleClass}`}>{title}</div>
      <div className="space-y-16">
        {items.map((item) => {
          const { company, href, role, start, end, details } = item;
          return (
            <div key={`${company}-${role}`} className="space-y-8">
              <div className="flex flex-col items-center  tablet:justify-between tablet:flex-row">
                <div className="space-x-1.5 text-lg tablet:text-2xl">
                  <a
                    className={`${textLinkClass} font-semibold`}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {company}
                  </a>
                  <span className="text-surface-tertiary">•</span>
                  <span className="font-regular text-surface-primary">{role}</span>
                </div>
                <span className="text-surface-tertiary text-base desktop:text-lg">
                  {start} &mdash; {end}
                </span>
              </div>
              <div className="text-surface-secondary text-lg desktop:text-xl space-y-3">
                {details.map((detail) => (
                  <li key={detail}>{detail}</li>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ProjectSection() {
  const { title, items } = resume.projects;
  return (
    <div className={`${surfaceSectionClass} text-center`}>
      <div className={sectionTitleClass}>{title}</div>
      <div className="space-y-24 w-full desktop:w-3/4 mx-auto">
        {items.map((project) => (
          <div key={project.id} className="space-y-6">
            <a
              className={`${textLinkClass} font-medium text-xl desktop:text-2xl`}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>

            <div className="text-base desktop:text-lg">{project.summary}</div>
            <ul className="list-inline text-surface-tertiary text-sm desktop:text-base">
              {project.stack.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

function PersonalSection() {
  const { title, categories } = resume.personal;
  return (
    <div className={`${flatSectionClass} text-center`}>
      <div className={sectionTitleClass}>{title}</div>
      <div className="grid grid-cols-1 gap-16 desktop:grid-cols-2">
        {categories.map((category) => (
          <div key={`personal-cat-${category.label}`} className="">
            <div className={subSectionLabelClass}>{category.label}</div>
            <div className="text-surface-secondary text-base desktop:text-lg">
              {category.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function ResumeStack({ label, stack }: { label: string; stack: StackItem[] }) {
  return (
    <div className="text-center space-y-12">
      <div className={`${subSectionLabelClass}`}>{label}</div>
      <div>
        {sortStackByUsage(stack).map((item) => {
          const { name, href, hasThemeLogos, activelyUsing } = item;
          return (
            <div
              key={name}
              className="inline-block w-12 mr-5 mb-5 tablet:w-16 tablet:mr-7 tablet:mb-7"
            >
              <a href={href} target="_blank" rel="noopener noreferrer">
                <ThemeImage
                  srcDark={getLogoPath(name, hasThemeLogos ? 'dark' : undefined)}
                  srcLight={getLogoPath(name, hasThemeLogos ? 'light' : undefined)}
                  width={80}
                  height={80}
                  alt={`${name} stack icon`}
                  className={`${activelyUsing ? 'brightness-100' : 'brightness-[.4]'} h-8 tablet:h-12 inline  transition transform duration-300 hover:scale-110 hover:filter-none`}
                />
              </a>
            </div>
          );
        })}
      </div>
    </div>
  );
}
