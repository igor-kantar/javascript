// Write a function that computes the dominant writing direction in a string of
// text. Remember that each script object has a direction property that can be
// "ltr" (left to right), "rtl" (right to left), or "ttb" (top to bottom).
//  The dominant direction is the direction of a majority of the characters that
// have a script associated with them. The characterScript and countBy func-
// tions defined earlier in the chapter are probably useful here.

import { SCRIPTS } from "./scripts.js";

function countBy(items, groupName) {
    // return a list of {name: str, count: int} objects
    let counts = [];
    for (let item of items) {
        let name = groupName(item);
        let known = counts.findIndex(c => c.name == name);
        if (known == -1) {
            counts.push({name, count: 1});
        } else {
            counts[known].count++;
        }
    }
    return counts;
}

function characterScript(code) {
    // return script object of unicode (if any)
    for (let script of SCRIPTS) {
        if (script.ranges.some(([from, to]) => {
            return code >= from && code < to;
        })) {
        return script;
        }
    }
    return null;
}

// ------MY-CODE----------

function getDominantDirection(text) {
    // get array of direction objects
    let directions = countBy(text, getDirection)
    // filter out null directions
    directions = directions.filter(direction => direction.name != null)
    let dominantD  = getDominant(directions)
    return dominantD ? dominantD.name : "null"
}

function getDirection(char){
    let script = characterScript(char.codePointAt(0))
    return script ? script.direction : null
}

function getDominant(directions){
    if (directions.length == 0)
        return null;
    else{
        let max = {name:"", count:0};
        for(const direction of directions){
            if (max.count < direction.count)
                max = direction
        }
        return max
    }
}

console.log(getDominantDirection("Hello!"));
// → ltr
console.log(getDominantDirection("Hey, مساء الخير"));
// → rtl
console.log(getDominantDirection("Strangers, مساء الخير"));
// → ltr
console.log(getDominantDirection(""));
// → null
// -----------------------------------------------

