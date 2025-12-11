import { useNavigate } from "react-router-dom";
import "./HomePage.css";

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="homepage-wrapper">
            <div className="homepage-container">
                <h1 className="homepage-title">CreatorVerse</h1>
                <p className="homepage-description">
                    Manage, explore, and add new creators to the platform.
                </p>

                <div className="homepage-buttons">
                    <button 
                        className="homepage-button add"
                        onClick={() => navigate("/AddCreator")}
                    >
                        ➕ Add Creator
                    </button>

                    <button 
                        className="homepage-button show"
                        onClick={() => navigate("/ShowCreators")}
                    >
                        📜 View Creators
                    </button>
                </div>
            </div>
        </div>
    );
}

export default HomePage;
