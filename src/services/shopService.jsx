import axios from "axios";
import  api  from "../config/api";

const shopService={
    getAllCategory(){
        return fetch(`${api}/category`).then(res=>res.json())
    },
    getListProductByCategory(slug,page,sort){
        if(sort){
            if(page){
                return fetch(`${api}/products/sortPrice/${slug}?sort=${sort}&&page=${page}`).then(res=>res.json())
            }
            else{
                return fetch(`${api}/products/sortPrice/${slug}?sort=${sort}`).then(res=>res.json())
            }
        }
        if(page){
            return fetch(`${api}/category/search/${slug}?page=${page}`).then(res=>res.json())
        }
        return fetch(`${api}/category/search/${slug}`).then(res=>res.json())
    },
    getListSubCateGoryByIdCate(id){
        return fetch(`${api}/category/subcategory/${id}`).then(res=>res.json())
    },
    getDetailProductBySlug(slug){
        return fetch(`${api}/products/${slug}`).then(res=>res.json())
    },
    getListProductBySubCategory(slug,page,sort){
        if(sort){
            if(page){
                return fetch(`${api}/subcategory/search/${slug}?page=${page}&&sort=${sort}`).then(res=>res.json())
            }else{
                return fetch(`${api}/subcategory/search/${slug}?sort=${sort}`).then(res=>res.json())
            }
        }
        if(page)
        {
        return fetch(`${api}/subcategory/search/${slug}?page=${page}`).then(res=>res.json())
        }
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
    getListProductBySearch(key,page,sort){
        if(sort){
            if(page){
                return fetch(`${api}/products/search?keys=${key}&&page=${page}&&sort=${sort}`).then(res=>res.json())
            }else{
                return fetch(`${api}/products/search?keys=${key}&&sort=${sort}`).then(res=>res.json())
            }
        }
        if(page){
            return fetch(`${api}/products/search?keys=${key}&&page=${page}`).then(res=>res.json())
        }
        return fetch(`${api}/products/search?keys=${key}`).then(res=>res.json())
    },
    getProductsRelate(slug){
        return fetch(`${api}/products/getListSame/${slug}`).then(res => res.json())
    },
    getAllProducts(page){
        if(!page){
            return fetch(`${api}/products`).then(res=>res.json())
        }
        else{
            return fetch(`${api}/products?page=${page}`).then(res=>res.json())
        }
    },
    getNewsDetail(slug){
        return fetch(`${api}/media/news/${slug}`).then(res=>res.json())
    }
}
export default shopService