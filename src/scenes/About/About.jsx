import aboutPromoImg from '../../assets/about-promo.svg';
import BaseLayout from '../../layouts/BaseLayout/BaseLayout';
import s from './About.module.scss';
import AboutTextCard from './AboutTextCard/AboutTextCard';
import GithubActivity from './GithubActivity/GithubActivity';
import TechSkills from './TechSkills/TechSkills';

const About = () => {
  return (
    <BaseLayout>
      <div className={s.content}>
        <div className={s.about}>
          <div className={s.aboutDescription}>
            <h1 className={s.title}>
              Learn More <b className={s.purple}>About Me</b>
            </h1>
            <AboutTextCard />
          </div>

          <div className={s.aboutImg}>
            <img src="/photo.jpg" alt="about" />
          </div>
        </div>
        {/* Experience Section */}
        <h2 className={s.title}>
          My <b className={s.purple}>Experience</b>
        </h2>
        <div className={s.experienceCard}>
          <div className={s.expHeader}>
            <h3>GrowSpace M2M</h3>
            <p>
              <strong>04/2025 - Present</strong>
            </p>
          </div>
          <p className={s.expRole}>
            <i>Software Development Engineer Intern – On-site</i>
          </p>
          <ul className={s.expList}>
            <li>
              Contributing to front-end development using Angular,
              TypeScript, and Bootstrap to build dynamic, responsive
              interfaces.
            </li>
            <li>
              Collaborating with the team to implement features,
              enhance UI/UX, and improve platform functionality.
            </li>
            <li>
              Integrating RESTful APIs for seamless data handling and
              real-time user interaction.
            </li>
            <li>
              Additionally, learning back-end development using Java
              and Spring Boot to build a more robust full-stack
              skillset.
            </li>
          </ul>
        </div>

        <a href="https://leetcode.com/u/sharmabhishek0911/">
          <h2 className={s.githubActivity}>
            My <b className={s.purple}>Coding</b> Journey
          </h2>

          <GithubActivity />
        </a>

        <h2 className={s.skills}>
          My <b className={s.purple}>Skills</b>
        </h2>
        <TechSkills />

        {/* <a href="https://leetcode.com/u/sharmabhishek0911/">
          <h2 className={s.githubActivity}>
            My <b className={s.purple}>Coding</b> Journey
          </h2>

          <GithubActivity />
        </a> */}
      </div>
    </BaseLayout>
  );
};

export default About;
