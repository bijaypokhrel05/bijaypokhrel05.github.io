import { motion } from 'framer-motion';
import type { IconType } from 'react-icons';
import {
  SiTypescript,
  SiReact,
  SiNodedotjs,
  SiPython,
  SiPostgresql,
  SiGit,
  SiSwagger,
} from 'react-icons/si';
import {
  MdAccountTree,
  MdTableChart,
  MdSpeed,
  MdBugReport,
  MdCategory,
  MdBarChart,
  MdFunctions,
  MdSwapVert,
  MdShowChart,
  MdPsychology,
} from 'react-icons/md';

const ICON_SIZE = 26;

const CATEGORIES = [
  {
    title: 'Core Engineering',
    accentClass: 'border-t-[var(--color-accent)]',
    items: [
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'React', Icon: SiReact },
      { name: 'Node.js', Icon: SiNodedotjs },
      { name: 'Python', Icon: SiPython },
      { name: 'SQL', Icon: SiPostgresql },
      { name: 'Git', Icon: SiGit },
      { name: 'REST APIs', Icon: SiSwagger },
    ],
  },
  {
    title: 'Systems Thinking',
    accentClass: 'border-t-[var(--color-accent-secondary)]',
    items: [
      { name: 'Architecture', Icon: MdAccountTree },
      { name: 'Data Modeling', Icon: MdTableChart },
      { name: 'Performance', Icon: MdSpeed },
      { name: 'Debugging', Icon: MdBugReport },
      { name: 'Abstractions', Icon: MdCategory },
    ],
  },
  {
    title: 'Mathematics & Data',
    accentClass: 'border-t-[var(--color-sage)]',
    items: [
      { name: 'Statistics', Icon: MdBarChart },
      { name: 'Linear Algebra', Icon: MdFunctions },
      { name: 'Data Pipelines', Icon: MdSwapVert },
      { name: 'Visualization', Icon: MdShowChart },
      { name: 'ML Basics', Icon: MdPsychology },
    ],
  },
] as const;

export function Skills() {
  return (
    <section id="skills" className="border-t border-[var(--color-border)] bg-[var(--color-bg)] py-16 px-4 sm:px-6 md:py-24">
      <div className="mx-auto max-w-2xl sm:max-w-3xl md:max-w-5xl">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="section-heading mb-8 text-xl sm:text-2xl md:text-3xl"
        >
          Skills
        </motion.h2>

        <div className="flex flex-col gap-6 sm:gap-8">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:gap-8">
            {CATEGORIES.slice(0, 2).map((category, i) => (
              <motion.section
                key={category.title}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.35, delay: i * 0.06 }}
                className={`rounded-2xl border border-[var(--color-border)] border-t-4 bg-[var(--color-surface)] p-5 shadow-sm sm:p-6 ${category.accentClass}`}
              >
                <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] sm:mb-5 sm:text-base">
                  {category.title}
                </h3>
                <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4">
                  {category.items.map(({ name, Icon }) => (
                    <SkillIcon key={name} name={name} Icon={Icon} />
                  ))}
                </div>
              </motion.section>
            ))}
          </div>
          {CATEGORIES.slice(2, 3).map((category) => (
            <motion.section
              key={category.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.35, delay: 0.12 }}
              className={`rounded-2xl border border-[var(--color-border)] border-t-4 bg-[var(--color-surface)] p-5 shadow-sm sm:p-6 ${category.accentClass}`}
            >
              <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-[var(--color-text-muted)] sm:mb-5 sm:text-base">
                {category.title}
              </h3>
              <div className="grid grid-cols-4 gap-3 sm:grid-cols-5 sm:gap-4 md:grid-cols-6">
                {category.items.map(({ name, Icon }) => (
                  <SkillIcon key={name} name={name} Icon={Icon} />
                ))}
              </div>
            </motion.section>
          ))}
        </div>
      </div>
    </section>
  );
}

function SkillIcon({ name, Icon }: { name: string; Icon: IconType }) {
  return (
    <motion.div
      whileHover={{ scale: 1.06 }}
      transition={{ duration: 0.2 }}
      className="flex aspect-square items-center justify-center rounded-xl bg-[var(--color-bg)] text-[var(--color-text-muted)] transition hover:bg-[var(--color-accent)] hover:text-[var(--color-on-accent)]"
      title={name}
    >
      <Icon size={ICON_SIZE} aria-hidden />
    </motion.div>
  );
}
