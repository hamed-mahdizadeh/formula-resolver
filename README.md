# FORMULA RESOLVER [![npm version](https://badge.fury.io/js/formula-resolver.svg)](https://badge.fury.io/js/formula-resolver) ![npm](https://img.shields.io/npm/dt/formula-resolver?style=plastic)

### This is a simple formula parser which support excel functions and mathematical operators.
### The library has been written  by TypeScript. 
 **(+,-,*,/,^,=,>=,<=,<>)**.
**Numeric** and **true/false** operands are supported.
### Also, **parentheses “()”** in the formulas are supported in the current version.

### Supported functions are as below:

### Logical functions:
* **IF**
* **AND**
* **OR**
### Most of mathematical Excel functions from [formulajs](https://github.com/sutoiku/formula.js) have been ported or rewritten and have added to the library since version 0.7.0:
| **SUM**     | **ROUND**     | **POWER**       | **ABS**    | **TRUNC**    | **FLOOR**   | **FACT**       |
| ------------|:-------------:| ---------------:|-----------:|-------------:|------------:|---------------:|
| **ADD**     | **MINUS**     | **MULTIPLY**    | **GTE**    | **LT**       | **LTE**     | **GT**         |
| **ROUNDUP** | **ROUNDDOWN** | **RANDBETWEEN** | **DIVIDE** | **QUOTIENT** | **PRODUCT** | **MULTINOMIAL**|
| **ACOT**    | **ACOTH**     | **ACOS**        | **ACOSH**  | **COMBINA**  | **COMBIN**  | **CEILING**    |
| **RAND**    | **RADIANS**   | **MROUND**      | **MOD**    | **NE**       | **EQ**      | **GCD**        |
| **BASE**    | **LCM**       | **ATAN2**       | **LOG10**  | **LOG**      | **TANH**    | **TAN**        |
| **SQRTPI**  | **SQRT**      | **SINH**        | **SIGN**   | **SECH**     | **SEC**     | **ODD**        |
| **LN**      | **INT**       | **FACTDOUBLE**  | **ATANH**  | **EVEN**     | **DEGREES** | **DECIMAL**    |
| **CSCH**    | **CSC**       | **COTH**        | **COSH**   | **ASINH**    | **ATAN**    | **COS**        |
| **ASIN**    | 


### Other functions will be added to package in coming versions.
### You can add any custom methods in addition to built-in ones
### Formula should be field by the specific values.
### Variables like cell addresses are not supported.

**Example of correct formula:**
>  125+IF(OR(false,-100,20),500,SUM(1,15,8))+10+4*5/ABS(-100)+14

## **API**
## **Resolver**

 You can use **"resolve"** for resolving your normal formula: 

### **import** and **usage** example:

    import { Resolver } form 'node_modules/formula-resolver/dist/formula-resolver'

    const expression = 'IF(true=true,SUM(10,20,5),1000/0)';
    const resolver = new Resolver();
    const result = resolver.resolve(expression).result;

Also, you can add your custom functions on Resolver with **register** method:
The input parameter of the register method is from FunctionInfo type.
passive and source properties of FunctionInfo class are not used in the current version but the functionality will be added to the next versions.

### Example of **register** method usage:

    import { Resolver, FunctionInfo } form 'node_modules/formula-resolver/dist/formula-resolver'

    const resolver = new Resolver();
    const functionInfo = new CustomFunctionInfo(
            (params: string, source: any) => {
                console.log(params);
                return params;
            },
            'PRINT'
        )
    resolver.register(functionInfo);

    const expression = 'IF(10<0,PRINT("Passed!"),PRINT("Rejected!"))';
    resolver.resolve(expression).result;

## **DynamicResolver**
The resolve method of this class has more complex algorithm than normal resolver class so it is slower than normal resolver in most cases. This class is especially useful when you want to prevent the execution of your custom functions inside the conditional functions like **IF** or inside your costum conditional functions when the condition is not matched.

    import { DynamicResolver } from "../src/dynamic-resolver";

    let resolver: DynamicResolver = new DynamicResolver();
    class TestResolver implements CustomResolver {
 
        DO = function(this: DynamicResolver, param: string[][]) {
            let strParam = this.resolvePreProcessedParameter(param[0]);
            console.log('Method DO Called With Param ' + strParam);
            return strParam + '';
        }
        resolveFunction(functionContext: DynamicResolver, fn: FunctionInfo) {
            switch (fn.fnName) {
                case 'DO':
                    return this.DO.bind(functionContext)(fn.params);
                default:
                    return '';
            }
        }
    }
    let testResolver = new TestResolver();
    const expression = 'IF(true=true,DO(1),DO(2))';
    resolver.register(new TestResolver());
    resolver.resolve(expression).result

### Version 0.7.1 changes:
Optional **extraParams** parameter with type **any** has been added to **DynamicResolver** **resolve** method and it would be passed to your custom methods.
### Version 0.7.0 changes:
* Parenthesis bug in formula has been fixed.
* String result of the function now has been moved to an object for preventing future breaking change when extra fields like debugging info would be added to the result.
* Most of Excel supported Math formula now have been supported.
* **DynamicResolver** class has been added to the package. 
The resolve method of this class prevents unwanted execution of methods or operations inside of the methods like If, Or, And or other custom and conditional functions.
This class can help to preventing unwanted execution of custom functions which interact with user interface or server, inside the conditional blocks.  
### Version 0.2.0 changes:
* register method has been added to the resolver module for defining custom functions.
* Operator regex bugs have been fixed.
