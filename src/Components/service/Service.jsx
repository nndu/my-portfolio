import React from 'react';
import "./service.css";
import S1 from "../../asset/service-1.svg"
import S2 from "../../asset/service-2.svg"
import S3 from "../../asset/applogo.png"

const data = [
    {
        id: 3,
        image: S3,
        title: "Mobile Developer",
        description:
            " My passion is creating user-friendly and visually appealing apps that meet business objectives. I'm excited to contribute to innovative mobile solutions. My skill is Java, Swift",
    },
    {
        id: 1,
        image: S1,
        title: "Front-end",
        description:
            "I'm passionate about creating great user experiences and have a strong understanding of usability and accessibility standards. I have a good understanding of HTML, CSS, JavaScript, and Reactjs.",
    },

    {
        id: 2,
        image: S2,
        title: "Back end",
        description:
            "  I enjoy building scalable and efficient systems that meet the needs of the business and the end-users. My skill is Node.js, Javascript, Java",
    },

];

const Service = () => {
    return (
        <section className='services container section' id="services" >
            <h2 className='section__title'>My Abilities</h2>
            <div className='services__container grid'>
                {data.map(({ id, image, title, description }) => {
                    return (
                        < div className="services__card" key={id}>
                            <img src={image} alt="" className="services__img" />
                            <h3 className='services__title'>{title}</h3>
                            <p className="services__description">{description}</p>
                        </div>
                    );
                })}
            </div>
        </section>

    )
}

export default Service