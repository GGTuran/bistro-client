/* eslint-disable react/prop-types */


const SectionTitle = ({heading, subHeading}) => {
    return (
        <div className="md:w-1/3 my-8 text-center mx-auto">
            <p className="text-yellow-700 mb-2">---{subHeading}---</p>
            <h1 className="text-4xl uppercase border-y-4 py-4">{heading}</h1>
        </div>
    );
};

export default SectionTitle;