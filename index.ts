let index:number = 1;//indice
let side:number = 1003;//Numero de lados
let size:number = side * side + 1;//Tamaño total
let diagFirst:boolean = true;//switch para preguntar si hay o no primera diagonal
let diagLeft:number = 0;//diagonal izquierda
let diagRight:number = 0;//diagonal derecha
let entry:number = 0; //entradas
let gap:number = 2; //salto de numero

for(let i:number = 1; i<size; i++){
    if(i == index){
        if(diagFirst){
            diagLeft += i;
            diagFirst = false;
        }else{
            diagRight += i;
            diagFirst = true;
        }
        index += gap;
        entry++
    }
    if(entry == 4){
        entry = 0;
        gap +=2
    }

}
console.log( "total is = " + ( diagLeft + diagRight ));

