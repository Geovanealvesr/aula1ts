class Circulo {
    raio: number;


    constructor(raio: number) {
        this.raio = raio;
    }

    calcularDiametro(): number {
        const resultado = this.raio * 2;
        return resultado;
    }

    calcularCircuferencia(): number {
       const resultado = 3.14159 * this.raio;
        return resultado;
    }

    calcularArea(): number {
        return this.raio * this.raio * 3.14159 ;
    }
}

const circulo = new Circulo(3);

console.log(circulo);

console.log(circulo.calcularDiametro());
console.log(circulo.calcularCircuferencia());
console.log(circulo.calcularArea());