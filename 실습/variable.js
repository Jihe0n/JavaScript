'use strict'

// 이중 for문의 else: continue 테크닉 // 특정 조건에서만 전체 for문을 탈출 가능한 편법 

// let lst1 = [11,22,3,44]
// let lst2 = [1,2,3,4]

// loop1:for(let i in lst1){
//     console.log("first = ",lst1[i]);
//     for(let j in lst2){
//         console.log("second = ",lst2[j]);
//         if(lst1[i]===lst2[j]){
//             console.log("적중");
//             break loop1
//         }      
//     }
    
// }

// func1()
// func2()



// //1 hoist 
// function func1 () {
//     console.log("func1");
// }

// let func2 = function () {
//     console.log("func2");
// }


class Person {

    #a = 13

    constructor(name, age){ // 생성자 
        this.name = name;
        this.age = age; // a.age = 20 
    }

    print(){
        console.log(`이름은 : ${this.name} 나이는 : ${this.age}`);
    }
    
    get age(){
        return this.private_age 
    }

    set age(value){
        
        this.private_age = (value < 0)? 0: value

    }

   
}

const a = new Person("tomato",-20);
a.print()
console.log(a.a);


function re(name, age){
    return{
        name,
        age
    }
}


console.log(re("tomato",30));

let lst = ['💙', '🧡','💚']

lst.forEach((value, indx, arr) => {
    console.log(value, indx, arr);
});

