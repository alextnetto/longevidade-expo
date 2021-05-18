import axios from 'axios';

function getCepData(cep) {
    const promise = axios.get(`https://viacep.com.br/ws/${cep}/json/`)

    const dataPromise = promise
        .then(res => res.data)
        .catch(err => false);

    return dataPromise
}
export default getCepData;