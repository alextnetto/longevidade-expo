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
                "numero": numero.substring(2, numero.length),
                "principal": true,
                "tipoTelefone": 2
            },
            "senha": senha,
            "tipoPessoa": "PF"
        }
        console.log(body)
        const promise = api.post(`/pessoas?aceite=${data.aceite}`, body)
        const resultPromise = promise.then(res => {
                console.log('OK')
                return true
            })
            .catch(err => {
                console.log('Erro')
                return false
            })
        return resultPromise
    }

    validaSms(data) {
        const numero = String(data.celularValue)
        const codigoSms = String(data.codigoSms)
        const body = {
            "ddd": numero.substring(0, 2),
            "numero": numero.substring(2, numero.length),
            "codigoSms": codigoSms
        }
        console.log(body)
        const promise = api.post('/sms/valida', body)
        const validado = promise.then(res => {
                console.log('OK')
                return true
            }).catch(err => {
                console.log('Erro')
                return false
            })
        return validado
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
