
import React from 'react'
import "./StudentsCard.css"
import img from '../../assets/dummy.webp';

const StudentsCard = ({ Img,name, like, branch, year, Achievements, skills, likes, dislikes, goals, relationship}) => {
 
    return (
        <div className='cards'>
            <div className="like">
                <i class="fa-regular fa-heart fa-2xl" style={{ color: "#6313b4;" }}></i>
            </div>
            
            <div className="dp" style={{ backgroundImage: `url(${Img || img})` }}></div>

            <p>{name||"NAME" }</p>

            {/* likes */}
            <p>&hearts; <span>{like || "2.1k"}</span></p>

            <table>

                <tr>
                    <td>Branch</td>
                    <td>{ branch||"EE"}</td>
                </tr>
                <tr>
                    <td>Year</td>
                    <td>{ year||"4th"}</td>
                </tr>
                <tr>
                    <td>Achievements</td>
                    <td>{Achievements || "Mr.fresher"}</td>
                </tr>
                <tr>
                    <td>Skills</td>
                    <td>{skills||"web-development" }</td>
                </tr>
                <tr>
                    <td>likes</td>
                    <td>{likes || "football"}</td>
                </tr>
                <tr>
                    <td>Dislikes</td>
                    <td>{ dislikes||"Bed men" }</td>
                </tr>

                <tr>
                    <td>Goals</td>
                    <td>{goals || "Software engineer"}</td>
                </tr>

            </table>

            <div className="contacts">
                <i class="fa-brands fa-github fa-xl"></i>
                <i class="fa-brands fa-facebook fa-xl"></i>
                <i class="fa-brands fa-instagram fa-xl"></i>
                <i class="fa-solid fa-envelope fa-xl"></i>
                <i class="fa-brands fa-x-twitter fa-xl"></i>
            </div>

            {/* relationship */}

            <button className={ relationship}>{relationship}</button>
        </div>
    )
}

export default StudentsCard
