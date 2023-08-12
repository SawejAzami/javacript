// ************************how does javasrcipt code exicute *********************

// Execution context   => Global , Functon, Eval

// code run in two phase=> 1-memory creation phase(it aalocate the memory for the variable), 2-Execution phase

let val1=10
let val2=5
function addnum(num1,num2){
    let total = num1+num2;
    return total;
}
let result1=addnum(val1,val2)
let result2=addnum(10,2)


// how code run 
// *step1: any code run in global execution and it is allocated to the "This" keyword

// *step2:memory creation phase,  
        // line 1=>val->=undefine
        // line 2=>val2->undefine
        // line 3=>function->undefine
        // line 7=>result1->undefine
        // line 8=>result2->undefine

// *step3:Execution phase
        //vla1=10
        //val2=5
        // addnum=> again it make new variable and execution thread
        //result=15
        //addnum=>    again it make new variable and execution thread   like previous addnum function
        //result2=12

                             // *step2:memory creation phase,  
                                        // line 1=>val->=undefine
                                        // line 2=>val2->undefine
                                        // line 3=>total->undefine
                             // *step3:Execution phase
                                            //num1=10
                                            //num2=5
                                            //total=15  => now total is return to the global execution
                         // **********     after the finshing the function new execution is deleted             

