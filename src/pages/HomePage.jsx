import AddCreator from "./AddCreator";
import ShowCreators from "./ShowCreators";
function HomePage() {
    return (
        <div>
            <h1> CreatorVerse HomePage!</h1>
            <p> This is where we will have the / route and it will also have buttons to add or edit or delete creators.</p>
            <AddCreator />
            <p> ShowCreators component will render right below this text tag.</p>
            <ShowCreators />
        </div>
    );
}

export default HomePage;