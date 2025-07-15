import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import s from './IntroSection.module.scss';

const IntroSection = () => {
  return (
    <section className={s.content}>
      <div className={s.introduction}>
        <div className={s.introductionText}>
          <h1 className={s.title}>
            LET ME <span className={s.purple}> INTRODUCE </span>{' '}
            MYSELF
          </h1>

          <div className={s.description}>
            <p>
              I'm currently a
              <i>
                <b className={s.purple}>
                  {' '}
                  Software Development Engineer Intern{' '}
                </b>
              </i>
              at
              <br />
              GrowSpace M2M, where I work as a Full Stack Developer.
            </p>
            <p>
              I love building clean, responsive and user-friendly web
              interfaces
              <br />
              using
              <i>
                <b className={s.purple}> Angular, TypeScript and Bootstrap</b>
              </i>
              . Lately, I’ve been 
              <br />
              diving into the back-end world with
              <i>
                <b className={s.purple}> Java and Spring Boot</b>
              </i>
              , 
              <br />
              expanding my skillset to become a more versatile developer.
            </p>

            <p>
              I'm passionate about turning ideas into real, usable
              products
              <br />—
              <i>
                <b className={s.purple}>
                  {' '}
                  always learning, always building{' '}
                </b>
              </i>
              .
            </p>
          </div>
        </div>

        <div trackOnWindow={true} className={s.homeimage}>
          <img alt="avatar" effect="blur" src="/photo.jpg" />
        </div>
      </div>

      <div className={s.introSocial}>
        <h1>Let's Connect</h1>
        <p>
          Feel free to <span className={s.purple}>connect </span>with
          me
        </p>
        <ul className={s.socialLinks}>
          <li className={s.socialLink}>
            <a
              href="https://github.com/sharmabhi0911"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="github"
            >
              <AiFillGithub />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="https://www.linkedin.com/in/abhisheksharma911/"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="linkedin"
            >
              <FaLinkedinIn />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="mailto:sharmabhishek0911@gmail.com"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="gmail"
            >
              <FaEnvelope />
            </a>
          </li>
          <li className={s.socialLink}>
            <a
              href="tel:+918958654929"
              target="_blank"
              rel="noreferrer"
              className={s.socialIcon}
              aria-label="phone"
            >
              <FaPhoneAlt />
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default IntroSection;
