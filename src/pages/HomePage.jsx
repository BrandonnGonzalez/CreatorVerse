import AddCreator from "./AddCreator";
import ShowCreators from "./ShowCreators";

import { useNavigate } from "react-router-dom";
function HomePage() {
    const navigate = useNavigate();
    return (
        <div>
            <h1> CreatorVerse HomePage!</h1>
            <p> This is where we will have the / route and it will also have buttons to add or edit or delete creators.</p>
            <button onClick={() => navigate("/AddCreator")}></button>
            <AddCreator />
            <p> ShowCreators component will render right below this text tag.</p>
            <button onClick={() => navigate("/ShowCreators")}></button>
            <ShowCreators />
        </div>
    );
}

export default HomePage;