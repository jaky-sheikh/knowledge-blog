import profile from '../../assets/images/profile.png'
const Header = () => {
    return (
        <div className='flex justify-between items-center p-5 border-b-2 max-w-7xl mx-auto'>
            <h1 className='text-3xl font-bold'>Knowledge Blog</h1>
            <img src={profile} alt="" />
        </div>
    );
};

export default Header;