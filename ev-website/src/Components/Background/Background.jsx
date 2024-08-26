import './Background.css'
import video1 from '../../assets/video1.mp4';
import image1 from '../../assets/image1.png';
import img1 from '../../assets/img1.jpeg';
import img2 from '../../assets/img2.jpg';
import img3 from '../../assets/img3.jpg';

const Background = ({playStatus,heroCount}) => {
 
      if(playStatus){
        return (
            <video className='background fade-in' autoPlay loop muted>
                <source src={video1} type='video/mp4' />
            </video>
        )
      }
      else if(heroCount === 0)
      {
        return <img src={img2} alt="" className='background fade-in' />
      }
      else if(heroCount === 1)
      {
        return <img src={image1} alt="" className='background fade-in' />
      }
      else if(heroCount === 2)
      {
        return <img src={img3} alt="" className='background fade-in' />
      }
   
}

export default Background
