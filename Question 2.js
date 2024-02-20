/* For the given JSON iterate over all for loops (for, for in, for of, forEach)


var resume = [{
    "name" : "nithya", 
    "email"   : "nithyanisha06@gmail.com",
    "label" : "Full stack developer",
    "qualification": "BE(EEE)",
    "description":"Excellent planning and problem solving skills.",
    "phone": "124345677"
},
{
    "name" : "janani", 
    "email"   : "jannsuyy@gamil.com",
    "label" : "Full stack development",
    "qualification": "BE(CSE)",
    "description":"Self motivated and eager to learn.",
    "phone": "124345677"
   
}];

a)forEach loop:

  
       resume.forEach(function(obj) { console.log(obj.label) });


b)for loop:


    for(var i = 0; i < resume.length; i++) {
    var obj = resume[i];
    console.log(obj.label);
}

c)for in loop:

    for (var key in resume) 
    {
   if (resume.hasOwnProperty(key)) {
          console.log(resume[key].name);
          console.log(resume[key].phone);
 
}
}

d)for of loop:

  let txt = "";
for (let x in resume) {
  txt += resume[x] + " ";
}
console.log(txt);

*/
