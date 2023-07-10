class Receita {
    nome: string;
    ingredientes: string[]
    instrucoes: string[]

    constructor(nome: string, ingredientes: string[],intrucoes:string[]){
        this.nome = nome; 
        this.ingredientes = ingredientes;
        this.instrucoes = intrucoes;
    }
    imprimirReceita(){
        return this.nome + this.ingredientes + this.instrucoes;
    }
}
const receita = new Receita("Bolo = ",["farinha, ovo, leite = "],["misturar, colocar na forma, assar"] )

console.log(receita.imprimirReceita())
