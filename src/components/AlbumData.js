import axios from 'axios';

function getAlbumData(){
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/albums'
        })
        .then(results => {
            resolve(results.data);
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}


function getAlbumThumbnail(){
    return new Promise((resolve, reject) => {
        axios({
            method: 'get',
            url: 'https://jsonplaceholder.typicode.com/photos'
        })
        .then(results => {
            
            var data = results.data;
            var id_filter = [1,51,101,151,201,251,301,351,401,451]; //Extract thumbnail
            var filtered = data.filter(function(item) {
                return id_filter.indexOf(item.id) !== -1;
            })    
            resolve(filtered);                                                                                                  
        })
        .catch(error => {
            console.log(error);
            reject();
        })
    });
}


export default { getAlbumData, getAlbumThumbnail }