//class declaration
class Team
  {  
        constructor(id,name) {  
      this.id=id;  
      this.name=name;  
    }  
//method declaration 
    detail()  {  
  console.log(this.id+" "+this.name+" ") ;
    }  
  }  
let member1=new Team(1,"Niraj");  

let member2=new Team(2,"Pratik");  

member1.detail(); 
member2.detail(); 