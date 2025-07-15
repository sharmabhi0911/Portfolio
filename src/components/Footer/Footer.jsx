import { AiFillGithub } from '@react-icons/all-files/ai/AiFillGithub';
import { FaLinkedinIn } from '@react-icons/all-files/fa/FaLinkedinIn';
import { FaPhoneAlt } from '@react-icons/all-files/fa/FaPhoneAlt';
import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';
import s from './Footer.module.scss';

const Footer = () => {
  // let date = new Date();
  // let year = date.getFullYear();

  return (
    <div className={s.footer}>
      <div className={s.container}>
        <div className={s.copyright}>
          <h1>Made with ❤️ by Abhishek Sharma</h1>
        </div>

        <div className={s.body}>
          <ul className={s.socialIcons}>
            <li>
              <a
                href="https://github.com/sharmabhi0911"
                target="_blank"
                rel="noreferrer"
                aria-label="github"
              >
                <AiFillGithub />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/abhisheksharma911/"
                target="_blank"
                rel="noreferrer"
                aria-label="linkedin"
              >
                <FaLinkedinIn />
              </a>
            </li>
            <li>
              <a
                href="mailto:sharmabhishek0911@gmail.com"
                target="_blank"
                rel="noreferrer"
                aria-label="gmail"
              >
                <FaEnvelope />
              </a>
            </li>
            <li>
              <a
                href="tel:+918958654929"
                target="_blank"
                rel="noreferrer"
                aria-label="phone"
              >
                <FaPhoneAlt />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
