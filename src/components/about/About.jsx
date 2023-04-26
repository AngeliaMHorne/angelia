import React from 'react';
import './about.css';
import about1 from '../../assets/about1.png';
import about2 from '../../assets/about2.png';

const About = () => {
  return (
    <div className="about_container">
      <div className="about-content">
        <h1>Angelia Horne</h1>
        <p>
        As an experienced artist with a diverse background, I bring a broad range of skills and knowledge to the table. I have a strong foundation in both traditional and digital art, and I am comfortable with logical systems dating back to the pre-internet days. This allows me to quickly and easily learn new software and hardware as technologies evolve. I am a lifelong learner with a natural intellectual curiosity, which allows me to present unique viewpoints and innovative approaches to any project.</p>

<p>In addition to my professional experience, I am also a proud parent of two grown children. This has given me invaluable soft skills such as patience, communication, adaptability, time management, and problem-solving. During their childhood, I ran and operated a web development company, which provided me with a diverse range of skills that have been useful throughout my career. I also worked in broadcast news, producing graphics for four newscasts a day, in addition to operating proprietary equipment such as floor cams and the Chyron system. I thrive in high-pressure, fast-paced, production-oriented environments.</p>

<p>Recently, I taught myself 3D modeling and animation, which is becoming one of my strongest assets. I have a natural problem-solving ability and enjoy working under tight deadlines. Within a month of learning Blender for 3D modeling and animation, I was actively employed as a promotional materials designer for a fintech company. Simultaneously, I contributed to several other companies in the crypto space and engaged in the NFT and auction spaces. Last month, I completed two specialization certifications in UX/UI in under four weeks to stay current with trends in the field.</p>

<p>Overall, I am a friendly, engaging, and innovative individual who is excited to contribute my diverse skillset and unique perspective to any team or project. My ability to quickly learn new software and hardware, work under pressure, and consistently produce high-quality work has been a valuable asset throughout my career. I bring a wealth of experience and skills to the table, and I am always eager to continue learning and growing as an artist and professional.</p>

<h2>Hobbies</h2>

<p>When I'm not sitting at a desk, I enjoy exploring my creative side through a variety of hobbies. At the top of my list is sculpting, which is a skill that I've been honing for years. There's something deeply satisfying about being able to take a block of clay and transform it into a beautiful work of art. Through my sculpting, I've developed a keen eye for detail and form, and I'm constantly seeking out new techniques and projects to challenge my skills.</p>

<p>In addition to sculpting, I also enjoy using my skills in 3D modeling and animation to create intricate and detailed models and animations. I find it rewarding to bring my imagination to life in a digital medium, and I'm always eager to learn new techniques and software to improve my abilities.</p>

<p>When I'm not working on digital projects, I like to unwind by playing bass guitar. I've been playing for years and am always looking for new techniques and styles to incorporate into my playing. I also enjoy working with my hands through watercolor painting, making jewelry, and crochet. These tactile hobbies challenge me to experiment with new materials and techniques and allow me to express my creativity in a tangible way.</p>

<p>Overall, my diverse hobbies showcase my willingness to take on new challenges, expand my knowledge base, and learn and grow as an individual.
        </p>
      </div>
      <div className="about-image">
        <img src={about1} alt="Brothers 1"/>
        <img src={about2} alt="Brothers 2"/>
      </div>
    </div>
  )
}

export default About;