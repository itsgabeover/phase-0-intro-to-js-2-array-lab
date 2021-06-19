// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name){
    cats.push(name);
}

function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveLastCat(){
    cats.pop();
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}

function appendCat(name){
    const addcats = [...cats];
    addcats.push(name);
    return addcats;
}

function prependCat(name){
    const prepcat = [...cats];
    prepcat.unshift(name);
    return prepcat;
}

function removeLastCat(){
    const remcat = [...cats];
    remcat.pop();
    return remcat;
}

function removeFirstCat(){
    const remfircat = [...cats];
    remfircat.shift();
    return remfircat;
}