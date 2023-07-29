export default class Cliente {
    #id: string
    #nome: string
    #idade: number

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }
    //metodo static para criar um cliente vazio
    static vazio() {
        return new Cliente('', 0) //para não ter que instanciar ja cria aqui
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
}