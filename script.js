class traveler{
    constructor(name, food, isHealthy){
        this.name = name;
        this.food = food;
        this.isHealthy = isHealthy;
    }
    hunt(){
        food = food + 2;
        return this.food;
    }
    eat(){
        if(food > 0){
            food = food - 1;
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
        this.passageiros = passageiros;
    }
    getAvailableSeatCount(){
        return this.capacity - this.passageiros.length;
    }
    join(){
        if(this.getAvailableSeatCount > 0){
        this.passageiros.push(traveler)
        }
        return this.passageiros;
    }
    shouldQuarantine(){

    }
    totalfood(){
        
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