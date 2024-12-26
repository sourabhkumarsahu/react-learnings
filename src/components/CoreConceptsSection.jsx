import {CORE_CONCEPTS} from "../data";
import CoreConcept from "./CoreConcept";
import Section from "./Section";

export default function CoreConceptsSection(){
    return (
        <Section title="Core Concept" id='core-concepts'>
            <ul>
                {CORE_CONCEPTS.map((concept) => (
                    <CoreConcept key={concept.title} {...concept} />))}
            </ul>
        </Section>
    )
}