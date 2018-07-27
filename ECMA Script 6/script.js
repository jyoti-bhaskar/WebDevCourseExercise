//let + const

const player = 'bobby';
let experience =100;
let wizardlevel = false;

if(experience > 90){
    let wizardlevel =true;    
    console.log('inside',wizardlevel); //true
}
console.log('outside',wizardlevel); //false

const obj = {
    player : 'bobby',
    experience: 100,
    wizardlevel: false
}

obj = 2; //not allowed
obj.experience = 50; // valid

