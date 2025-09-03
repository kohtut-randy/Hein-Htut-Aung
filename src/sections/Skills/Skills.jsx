import styles from "./SkillsStyles.module.css";

function Skills() {
  return (
    <section id="skills" className="bg-[#111827] min-h-screen flex flex-col align-center justify-center gap-5">
      <h1 style={{ color: "white"  }} className="text-center text-5xl">Skills & Technologies</h1>
      <p style={{ color: "white" }} className="text-center text-gray-400">
        Technologies I work with to bring ideas to life
      </p>
      <div className={styles.skillsGrid}>
        <div className={styles.skillsColumn}>
          <h2 className={styles.columnTitle} style={{ color: '#6dd5ed' }}>Frontend</h2>
          <div className={styles.tags}>
            <span>React</span>
            <span>TypeScript</span>
            <span>Next.js</span>
            {/* <span>Vue.js</span> */}
            <span>JavaScript (ES6+)</span>
            <span>HTML5</span>
            <span>CSS3</span>
            {/* <span>Sass/SCSS</span> */}
            <span>Tailwind CSS</span>
          </div>
        </div>
        <div className={styles.skillsColumn}>
          <h2 className={styles.columnTitle} style={{ color: '#b993f8' }}>Tools & Libraries</h2>
          <div className={styles.tags}>
            <span>Vite</span>
            {/* <span>Webpack</span> */}
            <span>Git</span>
            <span>Figma</span>
            <span>Framer Motion</span>
            <span>React Query</span>
            {/* <span>Zustand</span>
            <span>Jest</span>
            <span>Cypress</span> */}
          </div>
        </div>
        <div className={styles.skillsColumn}>
          <h2 className={styles.columnTitle} style={{ color: '#f7971e' }}>Backend & Cloud</h2>
          <div className={styles.tags}>
            <span>Node.js</span>
            <span>Express</span>
            {/* <span>PostgreSQL</span> */}
            <span>MongoDB</span>
            {/* <span>AWS</span> */}
            <span>Vercel</span>
            {/* <span>Docker</span>
            <span>Supabase</span> */}
          </div>
        </div>
      </div>
      <hr />
    </section>
  );
}

export default Skills;
