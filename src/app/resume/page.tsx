import { StackItem } from '~/app/data/stack';
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
  'text-center mb-16 text-surface-primary font-semibold text-xl';

const subSectionLabelClass =
  'mb-6 text-surface-secondary font-medium text-lg tablet:1x';

export default function ResumePage() {
  return (
    <>
      <div className="py-12 border-b dark:border-slate-800">
        <div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="font-bold text-2xl">{resume.name}</div>
            <div className="text-surface-secondary font-medium text-md">
              {resume.slogan}
            </div>
            <a
              className={`${textLinkClass} text-sm`}
              href="/api/pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download PDF
            </a>
          </div>
        </div>
      </div>
      <div className="py-36 space-y-36">
        <IntroSection />
        <ExperienceSection />
        <ProjectSection />
        <TechStackSection />
      </div>
    </>
  );
}

function IntroSection() {
  return (
    <div
      className={`${flatSectionClass} text-lgeft grid grid-cols-1 gap-16 desktop:grid-cols-[1fr_auto]`}
    >
      <div>
        <div className={`${subSectionLabelClass}`}>What I'm Looking For</div>
        <div className="text-md">{resume.objective}</div>
      </div>
      <div>
        <div className={subSectionLabelClass}>Contact Info</div>
        <div className="space-y-0.5 font-medium text-sm">
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
      <div className="text-sm text-surface-tertiary text-center -mt-12 mb-16">
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
    <div className={`${flatSectionClass}`}>
      <div className={`${sectionTitleClass}`}>{title}</div>
      <div className="space-y-16">
        {items.map((item) => {
          const { company, href, role, start, end, details } = item;
          return (
            <div key={`${company}-${role}`} className="space-y-8">
              <div className="flex flex-col items-center  tablet:justify-between tablet:flex-row">
                <div className="space-x-1.5 text-md tablet:text-lg">
                  {href ? (
                    <a
                      className={`${textLinkClass} font-medium`}
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {company}
                    </a>
                  ) : (
                    <span className={`font-medium`}>{company}</span>
                  )}

                  <span className="text-surface-tertiary">•</span>
                  <span className="font-regular text-surface-primary">{role}</span>
                </div>
                <span className="text-surface-tertiary text-sm">
                  {start} &mdash; {end}
                </span>
              </div>
              <div className="text-surface-secondary text-md space-y-3">
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
      <div className="space-y-24">
        {items.map((project) => (
          <div key={project.id} className="space-y-6">
            <a
              className={`${textLinkClass} font-regular text-lg`}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {project.name}
            </a>

            <div className="text-md">{project.summary}</div>           
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
