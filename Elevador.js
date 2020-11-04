var Elevador=(function () {
    var pisoactual = 7;
    var control = 0;//0 puerta cerrada, 1 puerta abierta
    var pisoelegido = 1;
 
    
     function estado(){
         if(control==0){
             control=1;
         }
         else{
             for(segundos=0;segundos<=20;segundos++){
                 control = 0;
             }
         }
 
     }
     console.log("Su piso inicial es:"+pisoactual);
    console.log("Su piso elegido es: "+pisoelegido);
    
        if (pisoactual < pisoelegido){
            for (i=pisoactual; i!=pisoelegido; i++){
                pisoactual++;
                console.log(pisoactual);
                
            }
        }
        else{
            for (i =pisoactual; i!=pisoelegido; i--){
                pisoactual--;
                console.log(pisoactual);
            }
        }
        
     console.log("A llegado a su piso: "+pisoactual);
 
 
 
 
 
     function Iniciar(){
         estado();
         estado();
         
         
     }
     return Iniciar;
   }
 
 )();
 