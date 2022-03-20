import { NavLink } from "react-router-dom";
import React from "react";

const HARIBO =
  "https://res.cloudinary.com/nassau-candy/image/upload/c_fit,w_300,h_300,f_auto/v1569333797/4339.jpg";

const BBQ_LAYS =
  "https://images.costcobusinessdelivery.com/ImageDelivery/imageService?profileId=12028466&imageId=320867__1&recipeName=350";

const CHOCOLATE =
  "https://richmedia.ca-richimage.com/ImageDelivery/imageService?profileId=12028466&id=949280&recipeId=715";

const GO_BACK = (
  <div>
    <NavLink exact to="/">
      GO BACK
    </NavLink>
  </div>
);

const SNACK_I_NAV = (
  <NavLink exact to="/snack-I">
    CHIPS
  </NavLink>
);

const SNACK_II_NAV = (
  <NavLink exact to="/snack-II">
    CHOCOLATE
  </NavLink>
);

const SNACK_III_NAV = (
  <NavLink exact to="/snack-III">
    GUMMIES
  </NavLink>
);
export { HARIBO, BBQ_LAYS, CHOCOLATE, GO_BACK, SNACK_III_NAV, SNACK_II_NAV, SNACK_I_NAV };
