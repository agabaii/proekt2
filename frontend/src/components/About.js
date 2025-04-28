import React from "react";
import "../styles.css";
import aboutImage from "../assets/about-photo.jpeg"; 

const About = () => {
    return (
        <section id="about" className="about-section">
            <div className="about-container">
                <div className="about-text">
                    <h2>Обо мне</h2>
                    <div className="about-content">
                        <p>
                            Привет! Я — <strong>Аида Агабай</strong>, человек, который научился делить себя на три части:
                        </p>
                        
                        <ul className="about-roles">
                            <li>Фотограф, влюбленный в игру света и теней</li>
                            <li>IT-студент, покоряющий цифровые вершины</li>
                            <li>Мультисталкер, совмещающий 3 работы без потери качества</li>
                        </ul>

                        <p>
                            Моя жизнь — это постоянное движение между творчеством и технологиями. 
                            В объективе я ловлю эмоции, в коде — логику, 
                            а в ежедневной рутине — баланс этого безумного микса.
                        </p>

                        <p>
                            Верю, что страсть к своему делу — это топливо, 
                            которое превращает "я устал" в "я смогу".
                        </p>

                        <p className="about-ps">
                            <small>
                                P.S. Если вы не нашли меня в соцсетях — я либо в фоторедакторе, 
                                либо на лекции, либо сплю. Но я всегда на связи!
                            </small>
                        </p>

                        <p className="about-cta">
                            <strong>Давайте создавать что-то яркое вместе!</strong> 
                        </p>
                    </div>

                    <div className="about-stats">
                        <div className="stat">
                            <span className="stat-number">-100</span>
                            <span className="stat-label">Нервов</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">+5728624</span>
                            <span className="stat-label">Смешных историй</span>
                        </div>
                        <div className="stat">
                            <span className="stat-number">17</span>
                            <span className="stat-label">лет опыта</span>
                        </div>
                    </div>
                </div>
                <div className="about-image">
                    <img src={aboutImage} alt="Аида Агабай" />
                </div>
            </div>
        </section>
    );
};

export default About;