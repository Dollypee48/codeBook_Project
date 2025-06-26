export {getFeaturedList, getProduct, getProductList} from "./productservice"
// export {getUser} from "./dataService"
// export {login, register, logout} from "./authService"

import authService from "./authService";
import dataService from "./dataService";
import cartService from "./cartService";
import orderService from "./orderService";
import adminService from "./adminService";

export const { login, register, logout } = authService;
export const { getUser, checkLoggingStatus } = dataService;
export const { getUserCart, addToCartAPI, removeFromCartAPI, clearCartAPI  } = cartService;
export const { placeOrder, getUserOrder, getOrderById } = orderService;
export const { createEbook, updateEbook, checkAdminStatus} = adminService;
