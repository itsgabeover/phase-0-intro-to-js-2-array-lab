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
    const addcats = [...cats, name];
    return addcats;
}

function prependCat(name){
    const prepcat = [name,...cats];
    return prepcat;
}

function removeLastCat(){
    const newArray = cats.slice(0, cats.length - 1);
    return newArray
}

function removeFirstCat(){
    return [...cats].slice(1, cats.length);
}