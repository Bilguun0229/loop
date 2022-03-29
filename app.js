
                for(y=0; y<=100; y++){
                    const dunNumber=document.createElement("div");
                    if(y<60)
                    dunNumber.textContent=(y +" % " + " нь " + "F дүн юм");
                    else if(y<70)
                    dunNumber.textContent=(y +" % " + " нь " + "D дүн юм");
                    else if(y<80)
                    dunNumber.textContent=(y +" % " + " нь " + "C дүн юм");
                    else if(y<90)
                    dunNumber.textContent=(y +" % " + " нь " + " B дүн юм");
                    else if(y<=100)
                    dunNumber.textContent=(y +" % " + " нь " + "A дүн юм");
                    document.getElementById("dun").appendChild(dunNumber);
                    
             }  
       