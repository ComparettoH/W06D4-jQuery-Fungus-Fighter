$(document).ready(onReady);
// console.log('hello')
// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let FungiHP = 100;
let WarriorAP = 100;

// Array of objects for attacks
let attacks = [
    {
        name: 'arcane scepter',
        APcost: 12,
        HPdamage: 14,
    },
    {
        name: 'entangle',
        APcost: 23,
        HPdamage: 9,
    },
    {
        name: 'dragon blade',
        APcost: 38,
        HPdamage: 47,
    },
    {
        name: 'star fire',
        APcost: 33,
        HPdamage: 25,
    }]

function onReady() {
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM

    // Listener/Handlers:
    $('.attack-btn.arcane-scepter').on('click', attackFungi);
    $('.attack-btn.entangle').on('click', attackFungi1);
    $('.attack-btn.dragon-blade').on('click', attackFungi2);
    $('.attack-btn.star-fire').on('click', attackFungi3);

    // initial render, for HP/AP status bars
    render()
}

// function that applies attack logic to AP & HP for Arcane Scepter
function attackFungi() {
    // console.log('test 123')
    for (let i = 0; i < attacks.length; i++) {
        if (attacks[i].name === 'arcane scepter') {
            FungiHP -= 14;
            WarriorAP -= 12;
        }
        render()
    }
}

// function that applies attack logic to AP & HP for Entangle
function attackFungi1() {
    // console.log('test 456')
    for (let i = 0; i < attacks.length; i++) {
        if (attacks[i].name == 'entangle'){
            FungiHP -= 9;
            WarriorAP -= 23;
        }
        render()
    }
}

// function that applies attack logic to AP & HP for Dragon Blade
function attackFungi2() {
    // console.log('test 789')
    for (let i = 0; i < attacks.length; i++) {
         if (attacks[i].name == 'dragon blade'){
            FungiHP -= 47;
            WarriorAP -= 38;
        }
        render()
    }
}

// function that applies attack logic to AP & HP for Star Fire
function attackFungi3() {
    console.log('test 0')
    for (let i = 0; i < attacks.length; i++) {
        if (attacks[i].name == 'star fire'){
            FungiHP -= 25;
            WarriorAP -= 33;
        }
         if (FungiHP < 0){ FungiHP = 0;}
         if (WarriorAP < 0){WarriorAP = 0;}
        render () //<-------- I have tried SO HARD to dissect this code above
        // and can't figure out why it won't listen to the render exception like 
        // the rest of the functions??? Ended up using if's in code to work
    }
}
render ()
// function that renders (updates) status of AP & HP
function render() {
    // AP Meter update
    $('.ap-text').text(WarriorAP)
    // HP Meter update
    $('.hp-text').text(FungiHP)

    // conditionals to prevent score going below zero
    // conditional if Fungi HP run out
    if (FungiHP < 0){ FungiHP = 0;
    }
    if (WarriorAP < 0){ WarriorAP = 0;}

    //conditional if AP reaches 0
//     if (WarriorAP == 0){
//     $('.attack-btn.arcane-scepter').prop(disabled) ???
//   }

// Still need conditionals for AP 0 class and HP 0 class...
// further research/experiment to be done tomorrow...
}