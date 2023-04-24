 var assert = require('assert');
 describe('Testing whether all the functions are called out properly', function () {
  describe('Testing Categories function', () => {
    let category1 = new Category( 1,"Dogs");
    it('Category id should be same as provided by the user', () => {
        assert.equal(category1.categid, 1);
    });
    it('Category name should be same as provided by the user', () => {
        assert.equal(category1.categname, 'Dogs');
    });
    it('The printCategory function should print the name and id of the category', () => {
        assert.equal(category1.printCategory(), '1 - Dogs');
    });
  });

  describe('Testing Tag function', () => {
    let Tag1 = new Tag(1,"Cute");
    it('Tag id should be same as provided by the user', () => {
        assert.equal(Tag1.tagid, 1);
    });
    it('Tag name should be same as provided by the user', () => {
        assert.equal(Tag1.tagname, 'Cute');
    });
    it('The printTag function should print the name and id of the tag', () => {
        assert.equal(Tag1.printTag(), '1 - Cute');
    });
  });

  describe('Testing Pets function', () => {
    let pet1 = new Pet(1,1,"Dogs","BullDog","https://petstore.octoperf.com/images/dog1.gif",1,"Angry","Available");
    it('Pet id should be same as provided by the user', () => {
        assert.equal(pet1.petid, 1);
    });
    it('Category id should be same as provided by the user', () => {
        assert.equal(pet1.categid, 1);
    });
    it('Category name should be same as provided by the user', () => {
      assert.equal(pet1.categname, 'Dogs');
    });
    it('Pet name should be same as provided by the user', () => {
      assert.equal(pet1.petname, 'BullDog');
    });
    it('Photo Url should be same as provided by the user', () => {
      assert.equal(pet1.photoURLS, 'https://petstore.octoperf.com/images/dog1.gif');
    });
   it('Tag id should be same as provided by the user', () => {
    assert.equal(pet1.tagid, 1);
    });
    it('Tag name should be same as provided by the user', () => {
      assert.equal(pet1.tagname, 'Angry');
    });
    it('Pet Status should be same as provided by the user', () => {
      assert.equal(pet1.petstatus, 'Available');
    });
    it('The printPet function should print the details of the pet', () => {
        assert.equal(pet1.printPet(), '1 - 1 - Dogs, BullDog , photoUrl - https://petstore.octoperf.com/images/dog1.gif , 1 - Angry, status - Available');
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
    this.printCategory = function () {
      //console.log(`${this.categid} - ${this.categname}`);
      return `${this.categid} - ${this.categname}`;
  }
    }
let Categories = [
        new Category( 1,"Dogs"),
        new Category(2,"Birds")
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
    //console.log(`${this.tagid} - ${this.tagname}`);
    return `${this.tagid} - ${this.tagname}`;
  }
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
    this.printPet = function () {
      //console.log(`${this.petid} - ${this.categid} - ${this.categname}, ${this.petname}  , photoUrl - ${this.photoURLS}, ${this.tagid} - ${this.tagname},  status - ${this.status}`);
      return `${this.petid} - ${this.categid} - ${this.categname}, ${this.petname} , photoUrl - ${this.photoURLS} , ${this.tagid} - ${this.tagname}, status - ${this.petstatus}`;
      }
    }
    
let Pets = [
    new Pet(1,1,"Dog","BullDog","https://petstore.octoperf.com/images/dog1.gif",1,"Angry","Available"),
    new Pet(2,2,"Birds","Amazon Parrot","https://petstore.octoperf.com/images/bird2.gif",1,"Cute","Sold"),
    new Pet(3,2,"Birds","Finch","https://petstore.octoperf.com/images/bird1.gif", 2 ,"Angry","Available")
    ] 
Pets.forEach(element => {
        console.log(element);
    }); 


