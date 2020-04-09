const BASE_URL = "api"
export const apis = {
  userVerify: BASE_URL + '/user/verify',
  userLogin: BASE_URL + '/user/login',
  loginOut: BASE_URL + '/user/loginOut',
  userInfo: BASE_URL + '/user/login',
  register: BASE_URL + '/user/register',
  upload: BASE_URL + '/user/uploadHead',
  updateheadimage: BASE_URL + '/user/updateheadimage',
  productHome: BASE_URL + '/shopping/homepage',
  // 导航栏
  navList: BASE_URL + '/shopping/navigation',
  // 推荐商品
  recommend: BASE_URL + '/shopping/recommend',
  // 获取产品列表
  getAllGoods: BASE_URL + '/shopping/goods',
  // 产品分类
  getAllCategories: BASE_URL + '/shopping/categories',
  // 商品评论
  getAllComments: BASE_URL + '/shopping/comments',
  // 商品评论数量
  getAllCommentsCount: BASE_URL + '/shopping/comment/count',
  getCartList: BASE_URL + '/shopping/carts',
  addCart: BASE_URL + '/shopping/carts',
  delCart: BASE_URL + '/shopping/carts',
  delCartChecked: BASE_URL + '/shopping/items',
  cartEdit: BASE_URL + '/shopping/carts',
  editCheckAll: BASE_URL + '/shopping/items',
  cartDel: BASE_URL + '/shopping/carts',
  addressList: BASE_URL + '/shopping/addresses',
  getAddress: BASE_URL + '/shopping/addresses',
  addressUpdate: BASE_URL + '/shopping/addresses',
  addressAdd: BASE_URL + '/shopping/addresses',
  addressDel: BASE_URL + '/shopping/addresses',
  submitOrder: BASE_URL + '/shopping/order',
  payMent: BASE_URL + '/cashier/pay',
  orderList: BASE_URL + '/shopping/order',
  getOrderDet: BASE_URL + '/shopping/order',
  cancelOrder: BASE_URL + '/shopping/cancelOrder',
  productDet: BASE_URL + '/shopping/product',
  delOrder: BASE_URL + '/shopping/delOrder',
  getSearch: BASE_URL + '/shopping/search',
  getQuickSearch: BASE_URL + '/shopping/search',
  initKaptcha: BASE_URL + '/user/kaptcha'
}
