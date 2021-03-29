import axios from "axios";


export default {
goolgeSearch: function(query){
    return axios.get(` https://www.googleapis.com/books/v1/volumes?q=${query}`)
}
};