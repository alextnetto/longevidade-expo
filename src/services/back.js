import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8080/v1'
})
class Backend {

    cadastrarPessoa(data) {
        const numero = String(data.celularValue)
        const senha = String(data.senha1)
        const body = {
            "telefoneRequest": {
                "ddd": numero.substring(0, 2),
                "numero": numero,
                "principal": true,
                "tipoTelefone": 2
            },
            "senha": senha,
            "tipoPessoa": "PF"
        }
        api.post('/pessoas', body)
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err)
            })
    }

    validaSms(data) {
        const numero = String(data.celularValue)
        const codigoSms = String(data.codigoSms)
        api.post('/sms/valida',{
            "ddd": numero.substring(0, 2),
            "numero": numero,
            "codigoSms": codigoSms
        }).then(res => {
            console.log(res)
        }).catch(err => {
            console.log(err)
        })
    }

    tipoTelefone(data) {
        api.get('/tipos-telefones')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.response)

            })
    }
}

export default Backend;
