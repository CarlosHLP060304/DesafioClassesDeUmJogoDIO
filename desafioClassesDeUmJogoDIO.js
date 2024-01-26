class hero{
    constructor(name,age,type){
        this.name = name
        this.age = age
        this.type = type
    }

    attack(){
        let attack = ""
        switch (this.type) {
            case "Wizard":
                attack = "magia"             
                break;
            case "Warrior":
                attack = "espada"
                break; 
            case "Monk":
                attack = "artes marciais"             
                break;
            case "Ninja":
                attack = "shuriken"
                break;
            default:
                break;
        }
        console.log(`o ${this.type} atacou usando ${attack}`)
    }
}


let wizard = new hero("Carlos",60,"Wizard")
let ninja = new hero("Nancy",27,"Ninja")

wizard.attack()
ninja.attack()
