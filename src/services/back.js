import axios from 'axios';
import LocalData from './localData'

const api = axios.create({
    baseURL: 'http://localhost:8080'
    //baseURL: 'https://longevidade-dev.herokuapp.com'
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
        const promise = api.post(`/v1/pessoas?aceite=${data.aceite}`, body)
        const resultPromise = promise.then(res => {
                const id = res.data.idPessoa
                console.log(id)
                const localStorage = new LocalData()
                localStorage.storeId(id)
                console.log('API: Pessoa cadastrada', res)
                return true
            })
            .catch(err => {
                console.log('API: Erro no cadastro', err)
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
        const promise = api.post('/v1/sms/valida', body)
        const validado = promise.then(res => {
                console.log('API: SMS Validado', res)
                return true
            }).catch(err => {
                console.log('API: Erro no SMS', err)
                return false
            })
        return validado
    }

    async completarCadastro(data) {
        const localStorage = new LocalData()
        const id = await localStorage.getId()
        const nome = String(data.nome)
        const email = String(data.email)
        const nascRaw = String(data.nascimento)
        const nascimento = `${nascRaw.substring(4, 8)}-${nascRaw.substring(2, 4)}-${nascRaw.substring(0, 2)}`
        const genero = String(data.genero)
        const cep = String(data.cepMask)
        const endereco = String(data.endereco)
        const numero = String(data.numero)
        const complemento = String(data.complemento)
        const bairro = String(data.bairro)
        const cidade = String(data.cidade)
        const estado = String(data.estado)
        const referencia = String(data.referencia)
        const body = {
            "nome": nome.split(' ').slice(0, -1).join(' '),
            "email": email,
            "endereco": {
                "cep": cep,
                "logradouro": endereco,
                "numero": numero,
                "complemento": complemento,
                "pontoReferencia": referencia,
                "bairro": bairro,
                "cidade": cidade,
                "estado": estado,
                "tipoEndereco": 1
            },
            "idPessoa": id,
            "sobreNome": nome.split(' ').slice(-1).join(' '),
            "genero": genero,
            "dataNascimento": nascimento,
        }
        console.log(body)
        const promise = api.post('/v1/pessoas-fisicas', body)
        const validado = promise.then(res => {
                console.log('API: Cadastro completado')
                return true
            }).catch(err => {
                console.log('API: Erro no completar cadastro', err.request)
                return false
            })
        return validado
    }

    tipoTelefone(data) {
        api.get('/v1/tipos-telefones')
            .then(res => {
                console.log(res)
            })
            .catch(err => {
                console.log(err.response)

            })
    }
}

export default Backend;
