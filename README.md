# FORMULA RESOLVER 

### This is a simple formula parser which support excel functions and mathematical operators.
### The library has been writen by TypeScript. 
 **(+,-,*,/,^,=,<=,<=,<>)**.
**Numeric** and **true/false** operands are supported.
### Also, **parentheses “()”** in the formula are supported in the current version.

### In the first beta version (0.1.0) few excel functions has been supported as bellow:
* **SUM**
* **POWER**
* **ABS**
* **AND**
* **OR**
### Other functions will be added to package in coming versions soon.
### You can add any custom methods in addition to built-in ones
### Formula should be field by the specific value and variables like cell addresses are not supported.
**Example of correct formula:**
>  125+IF(OR(false,-100,20),500,SUM(1,15,8))+10+4*5/ABS(-100)+14

## **API**

There is just one public method **"resolve"** which you should use for resolving your formula: 

### **example**:

    const expression = 'IF(true=true,SUM(10,20,5),1000/0)';
    const resolver = new Resolver();
    const result = resolver.resolve(expression); 
