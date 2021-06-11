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
                const localStorage = new LocalData()
                localStorage.storeValue('userId', id)
                console.log('API: Pessoa cadastrada')
                return true
            })
            .catch(err => {
                console.log('API: Erro no cadastrar', err.response)
                return false
            })
        return resultPromise
    }

    validaSms(data) {
        const numero = String(data.celularValue)
        const codigoSms = String(data.codigoSms)
        const body = {
            "ddd": Number(numero.substring(0, 2)),
            "numero": numero.substring(2, numero.length),
            "codigoSms": codigoSms
        }
        //console.log(body)
        const promise = api.post('/v1/sms/valida', body)
        const validado = promise.then(res => {
                console.log('API: SMS Validado')
                return true
            }).catch(err => {
                console.log('API: Erro no SMS', err)
                return false
            })
        return validado
    }

    async completarCadastro(data) {
        const localStorage = new LocalData()
        const id = await localStorage.getValue('userId')
        const nome = String(data.nome)
        const email = String(data.email)
        const nascRaw = String(data.nascimento)
        const nascimento = `${nascRaw.substring(4, 8)}-${nascRaw.substring(2, 4)}-${nascRaw.substring(0, 2)}`
        const genero = String(data.genero)
        const cep = String(data.cepMask)
        const logradouro = String(data.logradouro)
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
                "logradouro": logradouro,
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

    login(data) {
        const numero = String(data.celularValue)
        const senha = String(data.senha)
        const body = {
            "ddd": Number(numero.substring(0, 2)),
            "numero": numero.substring(2, numero.length),
            "password": senha
        }
        //console.log(body)
        const promise = api.post('/v1/login', body)
        const validado = promise.then(res => {
                console.log('API: Logado')
                const localStorage = new LocalData()
                localStorage.storeValue('apiToken', res.headers.authorization)
                localStorage.storeValue('userId', res.headers.userreference)
                localStorage.getValue('userId')
                localStorage.getValue('apiToken')
                return true
            }).catch(err => {
                console.log('API: Erro no login', err)
                return false
            })
        return validado
    }

    esqueciSenhaSms(data) {
        const numero = String(data.celularValue)
        const body = {
            "ddd": Number(numero.substring(0, 2)),
            "numero": numero.substring(2, numero.length)
        }
        //console.log(body)
        const promise = api.post('/v1/senhas/enviar-codigo', body)
        const validado = promise.then(res => {
                console.log('API: SMS enviado')
                return true
            }).catch(err => {
                console.log('API: Erro no envio do SMS', err)
                return false
            })
        return validado
    }

    redefinirSenha(data) {
        const numero = String(data.celularValue)
        const senha = String(data.senha1)
        const body = {
            "ddd": Number(numero.substring(0, 2)),
            "numero": numero.substring(2, numero.length),
            "senha": senha
        }
        //console.log(body)
        const promise = api.post('/v1/senhas/redefinir', body)
        const validado = promise.then(res => {
                console.log('API: Senha redefinida com sucesso')
                return true
            }).catch(err => {
                console.log('API: Erro ao redefinir senha', err)
                return false
            })
        return validado
    }

    async dadosPessoaFisica() {
        const localStorage = new LocalData()
        const id = await localStorage.getValue('userId')
        const token = await localStorage.getValue('apiToken')

        const data = await api.get(`/v1/pessoas-fisicas/${id}`, 
            { headers: {"Authorization" : `Bearer ${token}`} }
        ).then(res => {
            console.log('API: Puxou dados de pessoa física')
            return res.data
        }).catch(err => {
            console.log('API: Erro ao puxar dados de pessoa física', err)
            return false
        });
        return data
    }

    async editarDadosPessoaFisica(data) {
        const localStorage = new LocalData()
        const id = await localStorage.getValue('userId')
        const token = await localStorage.getValue('apiToken')

        const promise = api.post(`/v1/pessoas-fisicas/${id}/editar`, data, {
            headers: {
                'Authorization': `Bearer ${token}`
            }})

        const validado = promise.then(res => {
                console.log('API: Cadastro editado')
                return true
            }).catch(err => {
                console.log('API: Erro em alterar o cadastro', err.response)
                return false
            })
        return validado
    }
}

export default Backend;
