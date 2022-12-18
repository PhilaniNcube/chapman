import { Fragment } from "react";
import Menu from "./Menu";
import RestaurantHero from "./RestaurantHero";
import RestaurantHistory from "./RestaurantHistory";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <RestaurantHero />
      <RestaurantHistory />
      <Menu />
      {children}
    </Fragment>
  );
};
export default layout;
