import '../styles/loading.css';
import tiger from '../assets/tiger.svg';

export default function Top() {
    const logIMG = tiger;
    const subTitle = import.meta.env.DEV
    ? "Development"
    : "Production";

    return (
        <div className='app-shell'>

            <div className='title-container'>
                <h1 className="main-title">React Template </h1>
                <h2 className='sub-title'>{subTitle}</h2>
            </div>

            <div className="logo-container">
                <img src={logIMG} alt="Logo-Img" className="logo-img" />
            </div>

            {/* FROM HERE: loading-container */}
            <div className="loading-container">

                <div className="loading-text">Loading</div>

                <div className="dots-container">
                    <div className="dot"></div>
                    <div className="dot"></div>
                    <div className="dot"></div>
                </div>

            </div>
            {/* END HERE: loading-container */}

        </div>
    )
};
