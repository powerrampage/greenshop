import NewSectionComponent1 from './NewSectionComponent1';
import NewSectionComponent2 from './NewSectionComponent2';
import NewSectionComponent3 from './NewSectionComponent3';

const NewSection = () => {
    return (
        <section aria-labelledby="new-section-title" className="py-8">
            <h2 id="new-section-title" className="text-2xl font-bold mb-4">New Section</h2>
            <NewSectionComponent1 />
            <NewSectionComponent2 />
            <NewSectionComponent3 />
        </section>
    );
};

export default NewSection;