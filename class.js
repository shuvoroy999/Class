class Bike {
    constructor(name, model, topspeed) {
        this.name = name;
        this.model = model;
        this.topspeed = topspeed;
    }
    topSpeed(opnieon) {
        console.log(`${this.name} have top Speed ${this.topspeed} ${opnieon}`);
    }
    modelNo(opnieon) {
        console.log(`This is ${this.name} ${this.model} ${opnieon}`);
    }
    fullDtl(opnieon) {
        console.log(`This is ${this.name} ${this.model} it's have ${this.topspeed} top Speed ${opnieon}`);
    }
}

const Bike1 = new Bike("Yamaha", "R15v4","148kmph");
const Bike2 = new Bike("Suzuki", "GSXR","160kmph");
const Bike3 = new Bike("HONDA", "CBR","150kmph");

Bike3.modelNo("This best for Maximum Pepole");
Bike1.topSpeed("It is a Avrage Speed for this Bike");
Bike2.fullDtl("This is My dreem Bike ever");