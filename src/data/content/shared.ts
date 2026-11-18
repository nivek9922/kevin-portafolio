import citavekBooking from "@/assets/citavek/booking.png";
import citavekDay from "@/assets/citavek/day.png";
import citavekLanding from "@/assets/citavek/landing.png";
import citavekReport from "@/assets/citavek/report.png";
import citavekTemplates from "@/assets/citavek/templates.png";
import demachosCatalog from "@/assets/demachos/catalog.png";
import demachosMobile from "@/assets/demachos/mobile.png";
import demachosStorefront from "@/assets/demachos/storefront.png";
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
import stockvekKardex from "@/assets/stockvek/kardex.png";
import stockvekProfit from "@/assets/stockvek/profit.png";
import stockvekStock from "@/assets/stockvek/stock.png";

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
  citavekShowcase: "https://citavek.com/san-fernando-cali",
  demachos: "https://demachos.vercel.app/",
  kyzz: "https://kyzz-shop.vercel.app/",
} as const;

/*
 * Product captures. `kyzz/admin-orders` and `kyzz/order-tracking` are redacted copies: customer
 * names/emails and the delivery address are blurred. Keep unredacted originals out of the repo.
 * `stockvek/*` are its approved design prototypes with demo data, not captures of the live app.
 */
export const images = {
  portrait,
  citavekLanding,
  citavekTemplates,
  citavekDay,
  citavekReport,
  citavekBooking,
  demachosStorefront,
  demachosCatalog,
  demachosMobile,
  stockvekStock,
  stockvekKardex,
  stockvekProfit,
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
