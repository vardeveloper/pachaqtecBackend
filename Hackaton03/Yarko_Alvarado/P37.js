function Euclides(a,b){

        let n = b;
    
        b = a % b;
    
        a = n
    
        if(b==0){
    
            return n
    
        }else{
    
            return Euclides(n,b)
    
        }
    
    }
    
    console.log(Euclides(500, 230))
    
    
    