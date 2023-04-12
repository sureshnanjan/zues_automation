function Category(id,name) {
    this.id=id;
    this.name=name;
    this.print = function r2() {
        let r = `This function returns Category with id = ${id} and name = ${name}.`;
        return r;
    }
}


function Pet(Petid,id,name,petName,photoUrls,tags,status1) {
    this.Petid=Petid;
    Category.call(this,id, name);
    //this.id = Categoryid;
    //this.name = Categoryname;
    this.petName=petName;
    this.photoUrls = photoUrls;
    this.tags = tags;
    this.status1 = status1;
    this.print = function r3() {
        let r = `This function returns Pet with ${this.Petid} and ${this.name}`;
        return r;
}
}

let Category1 = new Category(1, "gh");
console.log(Category1.print());

let Pet1 = new Pet(1, 2, "vfj", "rfvert", "gvbtb", "gvttd","tgvt");
console.log(Pet1.print());
