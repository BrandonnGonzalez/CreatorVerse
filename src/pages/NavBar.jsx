import { useNavigate } from 'react-router-dom';
import './NavBar.css';

function NavBar() {
    const navigate = useNavigate();

    const handleHome = () => {
        navigate('/');
    }

    return (
        <div className="navbar-container">
            <button className="navbar-button" onClick={handleHome}>
                Home 合
            </button>
        </div>
    );
}

export default NavBar;
