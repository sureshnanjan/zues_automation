 var assert = require('assert');
 describe('Testing whether all the functions are called out properly', function () {
     describe('Testing category function is printed', function () {
       it('Check if number of values added in category is correct', function () {
         assert.equal((Categories.length),2);
       });
      it('Check if number of values added in Tags is correct', function () {
         assert.equal((Tags.length),2);
       });
       it('Check if number of values added in pet is correct', function () {
        assert.equal((Pets.length),3);
      });
    });
  }); 
  
/**
 * Display all types of pets in the store
 * @param {String} categid Category Id should be displayed
 * @param {Number} categname Each category name should be displayed
 */
function Category(categid,categname){
    this.categid = categid;
    this.categname = categname;
    }
let Categories = [
        new Category( 1,"Dogs"),
        new Category(2,"Birds")
] 



/* let dogs = new CategoryBase(1,"Dogs");
let birds = new CategoryBase(2,"Birds");  */
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
}

let Tags = [
    new Tag(1,"Cute"),
         new Tag(2,"Angry")
        ]

Tags.forEach(element => {
    console.log(element);
}); 

/**
 * Display details of pets available
 * @param {Number} petid 
 * @param {Number} categid 
 * @param {String} categname 
 * @param {String} petname 
 * @param {String} photoURLS 
 * @param {Number} tagid 
 * @param {String} tagname 
 * @param {String} petstatus 
 */


function Pet(petid ,categid, categname, petname, photoURLS, tagid, tagname, petstatus ){
    this.petid = petid,
    Category.call(this, categid, categname),
    this.petname = petname,
    this.photoURLS = photoURLS,
    Tag.call(this,tagid, tagname),
    this.petstatus = petstatus
    }
let Pets = [
    new Pet(1,1,"Dog","BullDog","https://petstore.octoperf.com/images/dog1.gif",1,"","Available"),
    new Pet(2,2,"Birds","Amazon Parrot","https://petstore.octoperf.com/images/bird2.gif","","Cute","Sold"),
    new Pet(3,2,"Birds","Finch","https://petstore.octoperf.com/images/bird1.gif", 2 ,"","Available")
    ] 
Pets.forEach(element => {
        console.log(element);
    }); 

let promise = new Promise(function (resolve, reject))

