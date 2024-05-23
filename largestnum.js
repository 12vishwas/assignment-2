let a,b,c;
a=100;
b=87;
c=200;

function largest(){
    if(a>b && a>c){
        console.log( "a has the largest value that is " + a );
    }
    else if(b>a && b>c){
        console.log( "b has the largest value that is " + b );
    }
    else{
        console.log( "c has the largest value that is " + c );
    }
    
}
largest();

