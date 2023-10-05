import logo from './../../assets/logo.png'
import moment from 'moment';
import Headline from './Page/Headline';
import Navbar from './Page/Navbar';
import Allnews from './Page/Allnews';
import CagegoryNews from './Page/CagegoryNews';
import MainNews from './Page/MainNews';
const Home = () => {
    return (
        <div className='max-w-screen-xl mx-auto'>
            <div className='text-center'>
                <img className='mx-auto' src={logo} alt="" />
                <h5>Journalism Without Fear or Favour</h5>
                <h5>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</h5>
            </div>
            <Headline/>
            <Navbar/>
            <div className='mt-5 grid grid-cols-1  md:grid-cols-4 text-center gap-3'>
                <div className=''>
                    <h1 className=' text-lg p-4 font-semibold'>Category</h1>
                    <div>
                        <h1 className='mb-5 p-4 border'>National news</h1>
                        <Allnews/>
                        <CagegoryNews/>


                    </div>
                </div>
                <div className='col-span-2 '>
                    <h1 className=' p-4'>Drogin news</h1>
                    <MainNews/>
                </div>
                <div className=''>
                    <h1 className='p-4'>Loginside</h1>
                    <div className='border'></div>
                    
                     </div>
            </div>
        </div>
    );
};

export default Home;