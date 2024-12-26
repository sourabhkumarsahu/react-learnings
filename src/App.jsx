import reactImg from './assets/react-core-concepts.png'
import TabButton from "./components/TabButton";
import CoreConceptsSection from "./components/CoreConceptsSection";
import Examples from "./components/Examples";


function App() {
    return (
        <>
            <header>
                <img src={reactImg} alt="Stylized atom"/>
                <h1>React Essentials s</h1>
                <p>
                    React concepts you will need for almost any app you are
                    going to build!
                </p>
            </header>
            <main>
                <CoreConceptsSection></CoreConceptsSection>
                <Examples/>
                <h2>Time to get started!</h2>
            </main>
        </>
    );
}

export default App;
