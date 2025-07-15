import { BsTerminalFill } from '@react-icons/all-files/bs/BsTerminalFill';
import { DiGit } from '@react-icons/all-files/di/DiGit';
import { DiJavascript1 } from '@react-icons/all-files/di/DiJavascript1';
import { DiReact } from '@react-icons/all-files/di/DiReact';
import { DiCss3 } from '@react-icons/all-files/di/DiCss3';
import { DiHtml5 } from '@react-icons/all-files/di/DiHtml5';
import { SiTailwindcss } from 'react-icons/si';
import { SiMongodb } from 'react-icons/si';
import { SiExpress } from 'react-icons/si';
import { FaNode } from 'react-icons/fa6';
import { DiGithubBadge } from 'react-icons/di';
import s from './TechSkills.module.scss';
import {
  SiPostgresql,
  SiAngular,
  SiTypescript,
  SiBootstrap,
  SiPostman,
} from 'react-icons/si';
import { SiCplusplus, SiIntellijidea } from 'react-icons/si';
import { SiJava } from '@react-icons/all-files/si/SiJava';
import { SiSpring } from '@react-icons/all-files/si/SiSpring';
import { SiVisualstudiocode } from '@react-icons/all-files/si/SiVisualstudiocode';
import { FaDatabase } from '@react-icons/all-files/fa/FaDatabase';

const TechSkills = () => {
  return (
    <ul className={s.container}>
      <li className={s.techIcon}>
        <DiHtml5 />
        <br />
        <span className={s.text}>HTML</span>
      </li>
      <li className={s.techIcon}>
        <DiCss3 />
        <br />
        <span className={s.text}>CSS</span>
      </li>
      <li className={s.techIcon}>
        <DiJavascript1 />
        <br />
        <span className={s.text}>JavaScript</span>
      </li>
      <li className={s.techIcon}>
        <SiTypescript />
        <br />
        <span className={s.text}>TypeScript</span>
      </li>
      <li className={s.techIcon}>
        <SiAngular />
        <br />
        <span className={s.text}>Angular</span>
      </li>
      <li className={s.techIcon}>
        <DiReact />
        <br />
        <span className={s.text}>React</span>
      </li>
      <li className={s.techIcon}>
        <SiBootstrap />
        <br />
        <span className={s.text}>Bootstrap</span>
      </li>
      <li className={s.techIcon}>
        <SiTailwindcss />
        <br />
        <span className={s.text}>Tailwind</span>
      </li>
      <li className={s.techIcon}>
        <SiCplusplus />
        <br />
        <span className={s.text}>CPP</span>
      </li>
      <li className={s.techIcon}>
        <SiJava />
        <br />
        <span className={s.text}>Java</span>
      </li>
      <li className={s.techIcon}>
        <SiSpring />
        <br />
        <span className={s.text}>Springboot</span>
      </li>
      <li className={s.techIcon}>
        <FaNode />
        <br />
        <span className={s.text}>Node</span>
      </li>
      <li className={s.techIcon}>
        <SiExpress />
        <br />
        <span className={s.text}>Express</span>
      </li>
      <li className={s.techIcon}>
        <SiMongodb />
        <br />
        <span className={s.text}>Mongodb</span>
      </li>
      <li className={s.techIcon}>
        <FaDatabase />
        <br />
        <span className={s.text}>SQL</span>
      </li>
      <li className={s.techIcon}>
        <SiPostgresql />
        <br />
        <span className={s.text}>Postgre SQL</span>
      </li>

      <li className={s.techIcon}>
        <DiGit />
        <br />
        <span className={s.text}>Git</span>
      </li>
      <li className={s.techIcon}>
        <DiGithubBadge />
        <br />
        <span className={s.text}>GitHub</span>
      </li>
      <li className={s.techIcon}>
        <SiIntellijidea />
        <br />
        <span className={s.text}>Intellij IDEA</span>
      </li>
      <li className={s.techIcon}>
        <SiVisualstudiocode />
        <br />
        <span className={s.text}>VS Code</span>
      </li>
      <li className={s.techIcon}>
        <SiPostman />
        <br />
        <span className={s.text}>Postman</span>
      </li>
    </ul>
  );
};

export default TechSkills;
