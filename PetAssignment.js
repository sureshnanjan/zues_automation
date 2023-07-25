var assert = require('assert');
describe('Function Call check', function () {
 describe('Categories function check', () => {
   let categ = new Category( 1,"Dogs");
   it('Category id provided is dissimilar. Please provide category id mentioned by user.', () => {
       assert.equal(categ.categoryid, 1);
   });
   it('Category name provided is dissimilar. Please provide category name mentioned by user', () => {
       assert.equal(categ.categoryname, 'Dogs');
   });
   it('Print the name and id of the category', () => {
       assert.equal(categ.printCategory(), '1 - Dogs');
   });
 });

 describe('Tag function Check', () => {
   let petTag = new Tag(1,"Loyal");
   it('Tag id provided is dissimilar. Please provide Tag id mentioned by user.', () => {
       assert.equal(petTag.tagid, 1);
   });
   it('Tagname provided is dissimilar. Please provide Tagname mentioned by user.', () => {
       assert.equal(petTag.tagname, 'Loyal');
   });
   it('Print the name and id of the tag', () => {
       assert.equal(petTag.printTag(), '1 - Loyal');
   });
 });

 describe('Pets function Check', () => {
   let petModel = new Pet(1,1,"Dogs","Poodle","https://petstore.octoperf.com/images/dog6.gif",1,"Loyal","Available");
   it('Pet id provided is dissimilar. Please provide Pet id mentioned by user.', () => {
       assert.equal(petModel.petid, 1);
   });
   it('Tag id provided is dissimilar. Please provide Tag id mentioned by user.', () => {
       assert.equal(petModel.categoryid, 1);
   });
   it('Category name provided is dissimilar. Please provide category name mentioned by user', () => {
     assert.equal(petModel.categoryname, 'Dogs');
   });
   it('Pet name provided is dissimilar. Please provide pet name mentioned by user', () => {
     assert.equal(petModel.petname, 'Poodle');
   });
   it('Photo Url provided is dissimilar. Please provide photo Url mentioned by user', () => {
     assert.equal(petModel.photoLink, 'https://petstore.octoperf.com/images/dog6.gif');
   });
  it('Tag id provided is dissimilar. Please provide Tag id mentioned by user.', () => {
   assert.equal(petModel.tagid, 1);
   });
   it('Tagname provided is dissimilar. Please provide Tagname mentioned by user.', () => {
     assert.equal(petModel.tagname, 'Loyal');
   });
   it('Pet Status provided is dissimilar. Please provide Pet Status mentioned by user.', () => {
     assert.equal(petModel.petstatus, 'Available');
   });
   it('Print the details of the pet', () => {
       assert.equal(petModel.printPet(), '1 - 1 - Dogs, Poodle , photoUrl - https://petstore.octoperf.com/images/dog6.gif , 1 - Loyal, status - Available');
   });
 });
}); 
 
/**
* Display all types of pets in the store
* @param {String} categoryid Category Id should be displayed
* @param {Number} categoryName Each category name should be displayed
*/
function Category(categoryid,categoryName){
   this.categoryid = categoryid;
   this.categoryName = categoryName;
   this.printCategory = function () {
     return `${this.categoryid} - ${this.categoryName}`;
 }
   }
let Categories = [
       new Category( 1,"Dogs"),
       new Category(2,"Fish")
] 

Categories.forEach(element => {
   console.log(element);
});

/**
* Display all types of tags for individual pet in the store
* @param {Number} tagid  Tag Id should be displayed
* @param {String} tagname  Each Tag name should be displayed
*/

function Tag(tagid, tagname){
   this.tagid = tagid,
  this.tagname = tagname
  this.printTag = function () {
   return `${this.tagid} - ${this.tagname}`;
 }
}

let Tags = [
   new Tag(1,"Loyal"),
        new Tag(2,"Fast")
       ]

Tags.forEach(element => {
   console.log(element);
}); 

/**
* Display details of pets available
* @param {Number} petid 
* @param {Number} categoryid 
* @param {String} categoryName 
* @param {String} petname 
* @param {String} photoLink 
* @param {Number} tagid 
* @param {String} tagname 
* @param {String} petstatus 
*/


function Pet(petid ,categoryid, categoryName, petname, photoLink, tagid, tagname, petstatus ){
   this.petid = petid,
   Category.call(this, categoryid, categoryName),
   this.petname = petname,
   this.photoLink = photoLink,
   Tag.call(this,tagid, tagname),
   this.petstatus = petstatus
   this.printPet = function () {
     return `${this.petid} - ${this.categoryid} - ${this.categoryName}, ${this.petname} , photoUrl - ${this.photoLink} , ${this.tagid} - ${this.tagname}, status - ${this.petstatus}`;
     }
   }
   
let Pets = [
   new Pet(1,1,"Dog","Poodle","https://petstore.octoperf.com/images/dog6.gif",1,"Loyal","Available"),
   new Pet(2,2,"Fish","Koi","https://petstore.octoperf.com/images/fish3.gif",1,"Fast","Sold"),
   new Pet(3,2,"Fish","Goldfish","https://petstore.octoperf.com/images/fish2.gif", 2 ,"Fast","Available")
   ] 
Pets.forEach(element => {
       console.log(element);
   }); 