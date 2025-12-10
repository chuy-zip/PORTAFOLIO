// Achievements.jsx
import pic1 from '../assets/uvg1.jpg';
import pic2 from '../assets/comp2.jpg';
import pic3 from '../assets/uvg2.jpg';
import pic4 from '../assets/grad.jpg';
import pic5 from '../assets/speech.jpg';
import pic6 from '../assets/comp1.jpg';
import pic7 from '../assets/cs50.jpg';
import pic8 from '../assets/ieee.jpg';
import pic9 from '../assets/space_apps.jpg';
import pic10 from '../assets/honor3.jpeg'
const achievements = [
    {
        img: pic6,
        title: "Competencia de Robótica 2017",
        desc: "Premio en Competencia de Tecnikids a nivel centroamericano",
        rows: 2,
        cols: 2
    },
    {
        img: pic2,
        title: "Competencia de Robótica 2019",
        desc: "Premio en Competencia de Tecnikids a nivel centroamericano",
        rows: 2,
        cols: 1
    },
    {
        img: pic4,
        title: "Graduación",
        desc: "Logro académico y finalización de estudios con honores",
        rows: 2,
        cols: 2
    },
    {
        img: pic5,
        title: "Presentación Pública",
        desc: "Exposición de despedida en Ingles para graduación de 5to Bachillerato",
        rows: 2,
        cols: 2
    },
    {
        img: pic1,
        title: "UVG Honor al Mérito 2022",
        desc: "Reconocimiento académico por excelencia en la Universidad del Valle de Guatemala",
        rows: 2, // Ocupa 2 filas
        cols: 1  // Ocupa 1 columna
    },
    {
        img: pic3,
        title: "UVG Honor al Mérito 2023",
        desc: "Reconocimiento académico por excelencia en la Universidad del Valle de Guatemala",
        rows: 2,
        cols: 1
    },
    {
        img: pic10,
        title: "UVG Honor al Mérito 2024",
        desc: "Reconocimiento académico por excelencia en la Universidad del Valle de Guatemala",
        rows: 2,
        cols: 1
    },
    {
        img: pic8,
        title: "IEEE UVG",
        desc: "Participación en la comunidad IEEE como vicepresidente",
        rows: 2,
        cols: 1
    },
    {
        img: pic7,
        title: "Certificación CS50",
        desc: "Harvard University - Introduction to Computer Science",
        rows: 2,
        cols: 2
    },
    {
        img: pic9,
        title: "NASA Space Apps",
        desc: "Best Mission Concept Award - Guatemala 2024",
        rows: 2,
        cols: 2
    },
];

function Achievements() {
    return (
        <div id="AchievementsSection">
            <h2 className='secondTitle'>Achievements</h2>

            <div className="gallery-container">
                <div className="achievements-grid">
                    {achievements.map((achievement, index) => (
                        <div
                            className="achievement-card"
                            style={{
                                gridRowEnd: `span ${achievement.rows}`,
                                gridColumnEnd: `span ${achievement.cols}`
                            }}
                            key={index}
                        >
                            <div className="card-image">
                                <img
                                    src={achievement.img}
                                    alt={achievement.title}
                                    className="achievement-img"
                                />
                                <div className="card-overlay">
                                    <h3>{achievement.title}</h3>
                                    <p>{achievement.desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Achievements;