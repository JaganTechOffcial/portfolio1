
import { AiOutlineTwitter, AiOutlineFacebook, AiOutlineLinkedin } from "react-icons/ai";
import JaganImg from '../assets/jagan.jpg';

export default function Hero() {
    const config = {
        subtitle: "I'm a Full-stack developer and Designer",
        social: {
            twitter: 'https://twitter.com/jvlcode',
            facebook: 'https://facebook.com/jvlcode',
            linkedin: 'https://in.linkedin.com/company/jvl-code',
        },
    };

    return (
        <section className='flex flex-col md:flex-row px-5 py-32 bg-primary justify-center'>
            <div className='md:w-1/2 flex flex-col'>
                <h1 className='text-white text-6xl font-hero-font'>
                    Hi, <br /> I'm <span className='text-black'>AJ</span> Jagan
                </h1>
                <p className='text-2xl text-white'>{config.subtitle}</p>
                <div className='flex py-10'>
                    <a href={config.social.twitter} className='pr-5 hover:text-white'>
                        <AiOutlineTwitter size={40} />
                    </a>
                    <a href={config.social.facebook} className='pr-5 hover:text-white'>
                        <AiOutlineFacebook size={40} />
                    </a>
                    <a href={config.social.linkedin} className='hover:text-white'>
                        <AiOutlineLinkedin size={40} />
                    </a>
                </div>
            </div>
            <img className='md:w-1/3' src={JaganImg} alt="Jagan" />
        </section>
    );
}
