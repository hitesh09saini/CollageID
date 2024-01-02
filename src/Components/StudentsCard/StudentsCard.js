import React from 'react';
import "./StudentsCard.css";
import img from '../../assets/dummy.webp';

const StudentsCard = ({ data }) => {

    return (
        <div className='cards' style={{ border: `${data.style.BorderStyle}`, backgroundColor: `${data.style.themeStyle}`, boxShadow: `${data.style.BoxStyle}`, fontStyle: `${data.style.fontStyle}` }}>
            <div className="like">
                <i className="fa-regular fa-heart fa-2xl" style={{ color: "#6313b4;" }}></i>
            </div>

            <div className="dp" style={{ backgroundImage: `url(${data.avatar.secure_url || img})` }}></div>

            <p>{data.name || "NAME"}</p>
            <p>{data.username || "name_09"}</p>

            {/* likes */}
            <p>&hearts; <span>{data.follower || "2.1k"} follower</span></p>
            <p>&hearts; <span>{data.following || "2.1k"} following</span></p>

            <table>
                <tr>
                    <td>Branch</td>
                    <td>{data.colleges.branch || "EE"}</td>
                </tr>
                <tr>
                    <td>Year</td>
                    <td>{data.colleges.semester || "1th"}</td>
                </tr>
                <tr>
                    <td>bio</td>
                    <td>{data.bio}</td>
                </tr>
                <tr>
                    <td>Goals</td>
                    <td>{data.goal || "football"}</td>
                </tr>
            </table>

            <div className="contacts">
                {
                    data.links.map((item, index) => (
                        <i key={index} className={`fa-brands fa-x-${item.name.toLowerCase()} fa-xl`}><a href={item.link}>{item.name}</a></i>
                    ))
                }
            </div>

            {/* relationship */}
            <button className={data.relationship}>{data.relationship}</button>
        </div>
    );
}

export default StudentsCard;
