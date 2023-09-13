import React from 'react'

const AboutBox = () => {
    return (
        <div className='about__boxes grid'>
            <div className="about__box">
                <i className='about__icon icon-fire'></i>
                <div>
                    <h3 className='about__title'>Completed </h3>
                    <span className='about__subtitle'>10 academic projects</span>
                </div>
            </div>

            <div className="about__box">
                <i className='about__icon icon-people'></i>
                <div>
                    <h3 className='about__title'>Seft-learning</h3>
                    <span className='about__subtitle'>3 developement training courses</span>
                </div>
            </div>

            <div className="about__box">
                <i className='about__icon icon-badge'></i>
                <div>
                    <h3 className='about__title'>Skills</h3>
                    <span className='about__subtitle'>Java, C#, Javascript, Reactjs...</span>
                </div>
            </div>

            <div className="about__box">
                <i className='about__icon icon-plus'></i>
                <div>
                    <h3 className='about__title'>Hobbies</h3>
                    <span className='about__subtitle'>Learning new things</span>
                </div>
            </div>
        </div>
    )
}

export default AboutBox