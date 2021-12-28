import  api  from "../config/api";

const shopService={
    getAllCategory(){
        return fetch(`${api}/category`).then(res=>res.json())
    },
    getListProductByCategory(slug){
        return fetch(`${api}/category/search/${slug}`).then(res=>res.json())
    },
    getListSubCateGoryByIdCate(id){
        return fetch(`${api}/category/subcategory/${id}`).then(res=>res.json())
    },
    getDetailProductBySlug(slug){
        return fetch(`${api}/products/${slug}`).then(res=>res.json())
    },
    getListProductBySubCategory(slug){
        return fetch(`${api}/subcategory/search/${slug}`).then(res=>res.json())
    },
    getVoucher(){
        return fetch(`${api}/voucher`).then(res=>res.json())
    },
    getListNews(){
        return fetch(`${api}/media/news`).then(res=>res.json())
    },
    getCatFoods(){
        return fetch(`${api}/products/getCatFoods`).then(res=>res.json())
    },
    getDogFoods(){
        return fetch(`${api}/products/getDogFoods`).then(res=>res.json())
    },
    getListProductBySearch(key){
        return fetch(`${api}/products/search?keys=${key}`).then(res=>res.json())
    }
}
export default shopService