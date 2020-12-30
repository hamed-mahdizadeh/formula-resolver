# FORMULA RESOLVER [![npm version](https://badge.fury.io/js/formula-resolver.svg)](https://badge.fury.io/js/formula-resolver) ![npm](https://img.shields.io/npm/dt/formula-resolver?style=plastic)

### This is a simple formula parser which support excel functions and mathematical operators.
### The library has been written  by TypeScript. 
 **(+,-,*,/,^,=,>=,<=,<>)**.
**Numeric** and **true/false** operands are supported.
### Also, **parentheses “()”** in the formula are supported in the current version.

### Excel functions has been supported as bellow:
* **SUM**
* **POWER**
* **ABS**
* **AND**
* **OR**
* **ROUND**
* **TRUNC**
### Other functions will be added to package in coming versions soon.
### You can add any custom methods in addition to built-in ones
### Formula should be field by the specific value and variables like cell addresses are not supported.

**Example of correct formula:**
>  125+IF(OR(false,-100,20),500,SUM(1,15,8))+10+4*5/ABS(-100)+14

## **API**

 You should use **"resolve"** for resolving your formula: 

### **import** and **usage** example:

    import { Resolver } form 'node_modules/formula-resolver/dist/formula-resolver'

    const expression = 'IF(true=true,SUM(10,20,5),1000/0)';
    const resolver = new Resolver();
    const result = resolver.resolve(expression);

Also you can add your custom functions on Resolver with **register** method:
The input parameter of the register method is from FunctionInfo type.
passive and source properties of FunctionInfo class are not used in the current version but the functionality will be added to the next versions.

### Example of **register** method usage:

    import { Resolver, FunctionInfo } form 'node_modules/formula-resolver/dist/formula-resolver'

    const resolver = new Resolver();
    const functionInfo = new FunctionInfo(
            (params: string, source: any) => {
                console.log(params);
                return params;
            },
            'PRINT'

        );
    const result = resolver.register(functionInfo);
    resolver.resolve(PRINT("Hello World!"));

### Version 0.2.0 changes:
* register method has been added to the resolver module for defining custom functions.
* Operator regex bugs have been fixed.
