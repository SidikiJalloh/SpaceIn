// //name your ship and (fixed) add its properties IMG
const Hero = document.getElementsByClassName('nameBox') 
Hero[0].innerHTML= 'USS Diablo' //change name of hero

const HeroStats = document.getElementsByClassName('playerStats')
HeroStats[0].innerHTML= "Hull : 20 <br> FirePower : 5  <br> Accuracy : .7 "






// //making overall Ship //tishana make one ship then new ones from it
class Ship{
    constructor(name,hull,firepower,accuracy){
        this.name = name;
        this.hull =hull;
        this.firepower =firepower;
        this.accuracy = accuracy;


        
// add methods for dmg etc
}
attack(ship){
    if(Math.random()<this.accuracy) {
        ship.hull-= this.firepower;
        console.log( `%c ${this.name} hit ${ship.name} for ${this.firepower}`,'color: pink')
        console.log(`%c ${ship.name} has ${ship.hull} left`, 'color: lightblue')
    }else if(Math.random()>this.accuracy){
           console.log('Cant aim and missed')
    }
}


}



//make enemies class with randomized stats
//create 6 alien ships randomly add its properties
// class enemy{
//     constructor(shipName, hull, firepower, accuracy){
//         this.shipName='Alien Ship';
//         this.hull= Math.floor(Math.random()*(6-3)+1 +3);
//         this.firepower= Math.floor(Math.random()*(4-2)+1 +2);
//         this.accuracy= Math.floor(Math.random()*(8-6)+1 +6) /10;
        

//     }
// }


//Fighters>>>>>>>>>>>
const UssDiablo = new Ship ('USS Diablo', 20, 5 , 0.7);
// const FighterJet =new Ship ('Alien Fighter Jet',Math.floor(Math.random()*(6-3)+1 +3),Math.floor(Math.random()*(4-2)+1 +2),Math.floor(Math.random()*(8-6)+1 +6) /10)
// const  Retreat = window.prompt('Retreat  Y/N')
//use shift 1st ship gets killed then its removed
const Alienhorde = [
new Ship ('Alien Fighter Jet',Math.floor(Math.random()*(6-3)+1 +3),Math.floor(Math.random()*(4-2)+1 +2),Math.floor(Math.random()*(8-6)+1 +6) /10),
new Ship ('Alien DeathStar',Math.floor(Math.random()*(6-3)+1 +3),Math.floor(Math.random()*(4-2)+1 +2),Math.floor(Math.random()*(8-6)+1 +6) /10),
new Ship ('Alien A Wing',Math.floor(Math.random()*(6-3)+1 +3),Math.floor(Math.random()*(4-2)+1 +2),Math.floor(Math.random()*(8-6)+1 +6) /10),
new Ship ('Alien N-1 StarFighter',Math.floor(Math.random()*(6-3)+1 +3),Math.floor(Math.random()*(4-2)+1 +2),Math.floor(Math.random()*(8-6)+1 +6) /10),
new Ship ('Alien X Wing',Math.floor(Math.random()*(6-3)+1 +3),Math.floor(Math.random()*(4-2)+1 +2),Math.floor(Math.random()*(8-6)+1 +6) /10),
new Ship ('Alien Y Wing',Math.floor(Math.random()*(6-3)+1 +3),Math.floor(Math.random()*(4-2)+1 +2),Math.floor(Math.random()*(8-6)+1 +6) /10)
]
//Fighters>>>>>>>>>>>



console.log('%c Spacebattle', 'font-size: 40px')
//Look into while loops
console.log(Alienhorde[0])
// console.log(FighterJet)
console.log(UssDiablo)
// const RandomAlien = Math.floor(Math.random()* Alienhorde.length)
// Game start funtionality

function playGame(){
    // if (Alienhorde.length <= 0){
    //     console.log('Game Over You killed all alien invaders')
    //     return;
    // }
    //my turn //attack first/ not targetting attack in order
    console.log('%c My Turn','color: green')
    UssDiablo.attack(Alienhorde[0]);

    if ( Alienhorde[0].hull <= 0){
        console.log('ALien Down')
        // Alienhorde.shift(Alienhorde.pop); 
            // console.log(Alienhorde[0]);
            // console.log('%c My Turn','color: green')
            // UssDiablo.attack(Alienhorde[0]);
        const retreat =window.prompt('Retreat? Yes or No?')
        if(retreat === ('Yes')){
            console.log('Live to fight another day')
            return;//reset
        }if(retreat === ('No')){
            Alienhorde.shift(Alienhorde.pop); 
            console.log(Alienhorde[0]);
             console.log('%c My Turn','color: green')
            UssDiablo.attack(Alienhorde[0]);    
        }
     
    }
     //alien turn //enemy ship survives first attack = their turn etc.   
        console.log('%c Enemy Turn','color: red')
        Alienhorde[0].attack(UssDiablo);  
    if(UssDiablo.hull <=0){
            console.log('Hero ship destroyed Game Over')
          return;//reset
        }
      
        
            

playGame();//loop
}
playGame();//call function to start loop




//I survive = my turn etc.
//if I win choose to retreat of continue fighting 
//if I die, game ends and refresh
