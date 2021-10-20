class Traveler{
    constructor(name, food, isHealthy){
        this.name = name;
        this.food = 1;
        this.isHealthy = true;
    }
    hunt(){
        this.food = this.food + 2;
        return this.food;
    }
    eat(){
        if(this.food > 0){
            this.food = this.food - 1;
            return this.food;
        }else{
            this.isHealthy = false;
            return this.isHealthy
        }
    }
}
class Wagon{
    constructor(capacity, passageiros){
        this.capacity = capacity;
        this.passageiros = [];
    }
    getAvailableSeatCount(){
        let available = this.capacity - this.passageiros.length;
        return available;
    }
    join(traveler){
        if(this.getAvailableSeatCount() > 0){
        this.passageiros.push(traveler)
        }
        return this.passageiros;
    }
    shouldQuarantine(){
        for(let i=0; i<this.passageiros.length; i++){
            if(this.passageiros[i].isHealthy == false){
                return true;
            }
        }
        return false;
    }
    totalFood(){
        let comida = 0;
        for(let i=0; i<this.passageiros.length; i++){
            comida = comida + this.passageiros[i].food;
        }
        return comida;
    }
}

// Criar uma carroça que comporta 2 pessoas
let wagon = new Wagon(2);
// Criar três viajantes
let henrietta = new Traveler('Henrietta');
let juan = new Traveler('Juan');
let maude = new Traveler('Maude');
 
console.log(`${wagon.getAvailableSeatCount()} should be 2`);
 
wagon.join(henrietta);
console.log(`${wagon.getAvailableSeatCount()} should be 1`);
 
wagon.join(juan);
wagon.join(maude); // Não tem espaço para ela!
console.log(`${wagon.getAvailableSeatCount()} should be 0`);
 
henrietta.hunt(); // pega mais comida
juan.eat();
juan.eat(); // juan agora está com fome (doente)
 
console.log(`${wagon.shouldQuarantine()} should be true since juan is sick`);
console.log(`${wagon.totalFood()} should be 3`);