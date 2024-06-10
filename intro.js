// Console Methods

//1. log method
console.log("Hello World");

//2. info Mthod
console.info("This is an information class about JaaScript");

//3. Warn Method
console.warn("Be careful with your coding");

//3. Warn Method using object 
console.warn({name:"Himanshu",alert:"Be careful with Javascript"});

//4. Error Method 
console.error("Hey This is an error Message!!");

//4. Error Method using object
console.error({name:"Hmanshu",alert:"Be careful with this guy"});

//5. Asser Method
console.assert(document.getElementById("name"),"No element found");

//6. Count Method
for(var i =0;i<6;i++)
{
    console.count();
}

//7. countReset Method
console.countReset();

for(var i=0;i<10;i++)
{
    console.count();
}

console.countReset();

//8.Group Method
console.group("First Group");
console.log("In the first Group");

console.groupEnd();

console.group("Second Group");
console.log("In the second group");

console.groupEnd();

//9. Clear()
console.clear();
