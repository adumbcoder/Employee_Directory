import axios from 'axios';

let APIfunction = {
    getEmpList:function() {
        return axios.get('https://randomuser.me/api/?results=25&nat=us');
    }
}


export default APIfunction;
