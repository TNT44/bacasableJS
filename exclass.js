class Student {

    //var nom ="";
    //var prenom = "";

       constructor(name) {
           this.nom = name;

           if (arguments.length > 1)
           {
             this.prenom = arguments[1];
             console.dir(arguments);
           }
       }
/*
       constructor(name, prenom) {
         this.nom = name;
           this.prenom = name;
       }
*/
       aff()
       {
         console.dir(this);
       }
}

   const s1 = new Student("Eden");
   console.log(s1.name); //Output "Eden"
   s1.aff();

   const s2 = new Student("TERENCIO", "Duarte");
   console.log(s2.name); //Output "Eden"
   s2.aff();
