// Calcular el área de un triángulo dados sus lados.
let lado_a = 3;
let lado_b = 4;
let lado_c = 5;


function Triangulo (lado_a, lado_b, lado_c){
    this.lado_a = lado_a;
    this.lado_b = lado_b;
    this.lado_c = lado_c;
    this.validar_lados = () => {
        let condicion1 = this.lado_a + this.lado_b > this.lado_c;
        let condicion2 = this.lado_a + this.lado_c > this.lado_b;
        let condicion3 = this.lado_b + this.lado_c > this.lado_a;
        let condicion = condicion1 && condicion2 && condicion3;
        if (condicion1 && condicion2 && condicion3){
            console.log("Es un triangulo Valido");
        }else{
            console.log("No es un triangulo valido");
        }
        return condicion
    }
    this.calcular_area = () =>{
        
        if (!this.validar_lados()){
            return -1
        }console.log("usando la formula de poncelet");
        semiperimpetro = (this.lado_a + this.lado_b + this.lado_c) / 2;
        area = semiperimpetro * (semiperimpetro - this.lado_a) * (semiperimpetro - this.lado_b) * (semiperimpetro - this.lado_c)
        area = Math.sqrt(area);
        return area;
    }
}

let triangulo1 = new Triangulo(lado_a, lado_b, lado_c);
console.log(triangulo1.calcular_area());
