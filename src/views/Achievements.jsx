import pic1 from '../assets/uvg1.jpg'
import pic2 from '../assets/comp2.jpg'
import pic3 from '../assets/uvg2.jpg'
import pic4 from '../assets/grad.jpg'
import pic5 from '../assets/speech.jpg'
import pic6 from '../assets/comp1.jpg'
import pic7 from '../assets/cs50.jpg'
import pic8 from '../assets/ieee.jpg'



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

                <figure className="gallery_picture">
                    <img src={pic7} className='gallery_img' />
                </figure>

                <figure className="gallery_picture">
                    <img src={pic8} className='gallery_img' />
                </figure>

            </section>
        </div>
    )
}

export default Achievements