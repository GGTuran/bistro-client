/* eslint-disable no-unused-vars */
import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuImg from "../../../../assets/menu/banner3.jpg"
import useMenu from "../../../Hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";
// import PopularMenu from "../../Home/Popular/PopularMenu";

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(item => item.category === 'dessert');
  const soup = menu.filter(item => item.category === 'soup');
  const salad = menu.filter(item => item.category === 'salad');
  const pizza = menu.filter(item => item.category === 'pizza');
  const offered = menu.filter(item => item.category === 'offered');
  return (
    <div>
      <Helmet>
        <title>Bistro | Menu</title>
      </Helmet>
      <Cover img={menuImg} title='our menu'  ></Cover>
      <SectionTitle subHeading='do not Miss' heading="Today's Offer"></SectionTitle>
      <MenuCategory items={offered}></MenuCategory>

    </div>
  );
};

export default Menu;
