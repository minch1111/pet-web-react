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
    }
}
export default shopService