import pic1 from '../assets/code1.png'
import pic2 from '../assets/code1.png'
import pic3 from '../assets/code2.jpg'
import pic4 from '../assets/pa.jpg'
import pic5 from '../assets/back1.png'
import pic6 from '../assets/code1.png'

function Achievements() {
    return (
        <div id="AchievementsSection">
            <h2 className='secondTitle'>Achievements</h2>

            <section className="gallery">

                <figure className="gallery_picture">
                    <img src={pic1} className='gallery_img' />
                </figure>

                <figure className="gallery_picture">
                    <img src={pic2} className='gallery_img' />
                </figure>

                <figure className="gallery_picture">
                    <img src={pic3} className='gallery_img' />
                </figure>

                <figure className="gallery_picture">
                    <img src={pic4} className='gallery_img' />
                </figure>

                <figure className="gallery_picture">
                    <img src={pic5} className='gallery_img' />
                </figure>

                <figure className="gallery_picture">
                    <img src={pic6} className='gallery_img' />
                </figure>

            </section>
        </div>
    )
}

export default Achievements