/* eslint-disable no-unused-vars */
// import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../Hooks/useMenu";


const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');

    // const [menu, setMenu] = useState([]);

    // useEffect(() =>{
    //     fetch('menu.json')
    //     .then(res=>res.json())
    //     .then(data =>{
    //         const popularItems = data.filter(item => item.category === 'popular');
    //         setMenu(popularItems)
    //     })
    // } ,[])

    return (

       
        <section className="m-10 flex flex-col justify-center items-center">
            <SectionTitle
            heading="From Our Menu"
            subHeading="Popular Items"
            ></SectionTitle>
            <div className="grid md:grid-cols-2 gap-5">
                {
                    popular.map(item=> <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn  btn-outline border-0 border-b-4 mt-5">Order Now</button>
        </section>
    );
};

export default PopularMenu;