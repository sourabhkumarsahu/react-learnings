import TabButton from "./TabButton";
import {useState} from "react";
import {EXAMPLES} from "../data";
import Section from "./Section";
import Tabs from "./Tabs";

export default function Examples() {
    let [selectedTopic, setSelectedTopic] = useState();
    let tabContent = 'Please select a topic';
    if (selectedTopic) {
        tabContent = <div id='tab-content'>
            <h3>{EXAMPLES[selectedTopic].title}</h3>
            <p>{EXAMPLES[selectedTopic].description}</p>
            <pre>
                           <code>{EXAMPLES[selectedTopic].code}</code>
                       </pre>
        </div>
    }

    function handleSelect(selectedButton) {
        setSelectedTopic(selectedButton)
    }

    return (
        <Section title="Examples" id='examples'>
            <Tabs ButtonsContainer="menu" buttons={
                <> <TabButton onClick={() => handleSelect('components')}
                              isSelected={selectedTopic === 'components'}>Component</TabButton>
                    <TabButton onClick={() => handleSelect('jsx')}
                               isSelected={selectedTopic === 'jsx'}>JSX</TabButton>
                    <TabButton onClick={() => handleSelect('props')}
                               isSelected={selectedTopic === 'props'}>Props</TabButton>
                    <TabButton onClick={() => handleSelect('state')}
                               isSelected={selectedTopic === 'state'}>State</TabButton></>
            }>{tabContent}</Tabs>
        </Section>
    )
}