import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import featuredImg from "../../../../assets/home/featured.jpg";
import './Featured.css'
const Featured = () => {
    return (
        <div className="featured-img bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading='check it out'
            heading='Featured Item'
            ></SectionTitle>
            <div className="md:flex justify-center bg-slate-400 bg-opacity-60 items-center pb-20 pt-12 px-36">
                <div>
                    <img src={featuredImg} alt="" />
                </div>
                <div className="md:ml-10">
                    <p>April 27, 2024</p>
                    <p className="uppercase">Where can i get some?</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorem ratione consectetur ullam tenetur enim culpa at hic et in, non officiis accusantium maxime, quo repellat ipsa alias sapiente neque corporis odit deleniti, veniam nemo. Minima inventore neque accusamus maiores voluptatum necessitatibus officiis quam veniam consectetur minus, molestias eligendi delectus atque.</p>
                    <button className="btn btn-outline border-0 border-b-4 mt-5">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;