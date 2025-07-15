import s from './AboutTextCard.module.scss';

const AboutTextCard = () => {
  return (
    <div className={s.card}>
      <p style={{ textAlign: 'justify' }}>
        <p>
          Hi everyone, I’m
          <span className={s.purple}> Abhishek Sharma, </span>
          a Software Developer Intern at
          <br />
          GrowSpace M2M Service Provider.
        </p>
        <p>
          I’ve completed my Bachelor’s degree in Computer Science and 
          <br />
          Engineering with a CGPA of 9.16 from Dr. Akhilesh Das Gupta 
          <br />
          Institute of Professional Studies and I also hold a Diploma 
          <br/>
          in Mechanical Engineering from Prem Mahavidyalay Polytechnic.
        </p>
        <p>
          I specialize in front-end development and I am currently  
          <br />
          exploring back-end development to become a well-rounded 
          <br/>
          full-stack developer.
        </p>
        <p>
          Passionate about continuous learning and improvement, always 
          <br />
          striving to enhance technical expertise & deliver high-quality solutions.
        </p>
        <p> Outside of coding:</p>

        <ul style={{ marginLeft: 14 }}>
          <li className={s.aboutActivity}>- Travelling</li>
          <li className={s.aboutActivity}>- Playing Football</li>
        </ul>
      </p>
    </div>
  );
};

export default AboutTextCard;
