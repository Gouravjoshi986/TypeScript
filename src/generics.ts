function identity<T>(args:T):T{             // identity is of generic type 
    return args;
}
let output1 = identity<string>("String");      //identity is called acc to string output
let output2 = identity<number>(1);            // identity is called acc to number output