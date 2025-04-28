import React from "react";
import "../styles.css";
import myStoryImage from "../assets/my-story.jpg";

const MyStory = () => {
    const handleSubscribeClick = () => {
        window.open("https://t.me/agabaiii", "_blank");
    };

    return (
        <section id="MyStory" className="my-story">
            <div className="my-story-content">
                <div className="text-content">
                    <h1>ЭТО МОЯ ИСТОРИЯ</h1>
                    <p>
                        Привет! Я снимаю влоги о своей жизни, делюсь яркими моментами и интересными событиями, которые случаются в моих буднях. 
                        Этот блог — моя возможность показать мир через мои глаза и поделиться с вами тем, что меня вдохновляет. 
                        Буду рада, если вам будет интересно следить за моими историями!
                    </p>
                    <p>
                        Когда я решила начать снимать влоги, просто захотелось делиться своими днями и тем, что происходит вокруг. 
                        Всё началось с простых видео, которые я показывала друзьям и семье, а потом поняла, что это может быть интересно и другим. 
                        Так появился этот блог, где я могу записывать все яркие моменты, забавные ситуации и просто делиться чем-то настоящим из своей жизни.
                    </p>
                    <button 
                        className="subscribe-button"
                        onClick={handleSubscribeClick}
                    >
                        Подписаться
                    </button>
                </div>
                <div className="image-content">
                    <img src={myStoryImage} alt="Моя история" />
                </div>
            </div>
        </section>
    );
};

export default MyStory;