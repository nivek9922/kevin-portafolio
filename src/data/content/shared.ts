import citavekBooking from "@/assets/citavek/booking.png";
import citavekLanding from "@/assets/citavek/landing.png";
import citavekSignIn from "@/assets/citavek/sign-in.png";
import citavekSignUp from "@/assets/citavek/sign-up.png";
import kyzzAdminDashboard from "@/assets/kyzz/admin-dashboard.png";
import kyzzAdminOrders from "@/assets/kyzz/admin-orders.png";
import kyzzCart from "@/assets/kyzz/cart.png";
import kyzzCategories from "@/assets/kyzz/categories.png";
import kyzzCollection from "@/assets/kyzz/collection.png";
import kyzzOrderTracking from "@/assets/kyzz/order-tracking.png";
import kyzzProduct from "@/assets/kyzz/product.png";
import kyzzSpecialCollection from "@/assets/kyzz/special-collection.png";
import kyzzStorefront from "@/assets/kyzz/storefront.png";
import portrait from "@/assets/portrait/kevin.jpg";

/** Facts that do not change with the language. */
export const person = {
  name: "Kevin Rodríguez",
  email: "nivek9922@gmail.com",
  phone: { display: "+57 302 688 9618", href: "tel:+573026889618" },
  linkedin: "https://www.linkedin.com/in/kevin-rodriguez-833289224/",
  github: { handle: "nivek9922", url: "https://github.com/nivek9922" },
  locality: "Cali",
  country: "CO",
} as const;

export const projectUrls = {
  citavek: "https://citavek.com/",
  citavekRepository: "https://github.com/nivek9922/citavek-app",
  citavekShowcase: "https://citavek.com/san-fernando-cali",
  kyzz: "https://kyzz-shop.vercel.app/",
} as const;

/*
 * Product captures. `kyzz/admin-orders` and `kyzz/order-tracking` are redacted copies: customer
 * names/emails and the delivery address are blurred. Keep unredacted originals out of the repo.
 */
export const images = {
  portrait,
  citavekLanding,
  citavekBooking,
  citavekSignUp,
  citavekSignIn,
  kyzzStorefront,
  kyzzCollection,
  kyzzProduct,
  kyzzCategories,
  kyzzAdminDashboard,
  kyzzAdminOrders,
  kyzzSpecialCollection,
  kyzzCart,
  kyzzOrderTracking,
} as const;
