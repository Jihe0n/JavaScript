'use strict'

// 이중 for문의 else: continue 테크닉 // 특정 조건에서만 전체 for문을 탈출 가능한 편법 

let lst1 = [11,22,3,44]
let lst2 = [1,2,3,4]

loop1:for(let i in lst1){
    console.log("first = ",lst1[i]);
    for(let j in lst2){
        console.log("second = ",lst2[j]);
        if(lst1[i]===lst2[j]){
            console.log("적중");
            break loop1
        }      
    }
    
}

