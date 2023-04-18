/**
 * This function shows which category the pet falls into
 * @param {*} id 
 * @param {*} name 
 */

function Category(id,name){
    this.id = id;
    this.name = name;
    this.print = function(){
        console.log("Category")
        console.log(`
        Name: ${this.name}
        ID: ${this.id}`)
    }
}
let fish = new Category('FI-SW-01','Angelfish')

/**
 * This function gives all the information about the Pet
 * @param {*} id 
 * @param {*} name 
 * @param {*} photourls 
 * @param {*} status 
 */
function Pet(id,name,photourls,status){
    this.id = id;
    this.name = name;
    this.photourls = photourls;
    this.status = status;
    this.print = function(){
    console.log("Pet")
    console.log(`
    ID:${this.id}
    Name: ${this.name}
    PhotoUrls: ${this.photourls}
    Status: ${this.status}
    `)
    }
}
let reptile = new Pet('RP-SN-01','Rattlesnake','www.google.com','In store')

function Tag(id, name){
    this.id = id;
    this.name = name;
    this.print = function(){
        console.log("Tag")
        console.log(`
        Name: ${this.name}
        Tag ID: ${this.id}`)
    }
}
let dog = new Tag('K9-RT-02','Adult Male Labrador Retriever')

/**
 * This function will print all the order related details
 * @param {*} id 
 * @param {*} petId 
 * @param {*} quantity 
 * @param {*} shipdate 
 * @param {*} status 
 * @param {*} complete 
 */
function Order(id,petId,quantity,shipdate,status,complete){
    this.id = id;
    this.petId = petId;
    this.quantity = quantity;
    this.shipdate = shipdate;
    this.status = status;
    this.complete = complete;
    this.print = function(){
        console.log("Order")
        console.log(`
        Id: ${this.id} 
        PetID: ${this.petId}
        Quantity: ${this.quantity}
        Ship Date: ${this.shipdate}
        Status: ${this.status}
        Complete: ${this.complete}
        `)
    }
}
let cat = new Order('EST-16', 'FL-DLH-02', 1,'5/4/2023','Placed',true)

/**
 * This function gives all information about the PetStore website user
 * @param {*} id 
 * @param {*} username 
 * @param {*} firstname 
 * @param {*} lastname 
 * @param {*} email 
 * @param {*} password 
 * @param {*} phone 
 * @param {*} userstatus 
 */
function User(id,username,firstname,lastname,email,password,phone,userstatus){
    this.id = id;
    this.username = username;
    this.firstname = firstname;
    this.lastname = lastname;
    this.email = email;
    this.password = password;
    this.phone = phone;
    this.userstatus = userstatus;
    this.print = function(){
        console.log("User")
        console.log(`
        Id: ${this.id} 
        username: ${this.username}
        firstanme: ${this.firstname}
        lastname: ${this.lastname}
        email: ${this.email}
        password: ${this.password}
        phone: ${this.phone}
        userstatus: ${this.userstatus}`)
    }
}
let user = new User(001,'neha.qazi','Neha','Qazi','neha.qazi@zeuslearning.com','password1',1234567890,'Active')

/**
 * Created instances which will print informations of all the pets
 */
fish.print()
reptile.print()
dog.print()
cat.print()
user.print()

/*
Unit test cases for the above implementation
*/

var assert = require('assert');
describe('Testing petstore constructor task', function() {
    describe('Testing instances, function () {
    it('should create a Category instance with attributes ', function() {
      assert.equal(fish.id, 'FI-SW-01');
      assert.equal(fish.name, 'Angelfish');
    });
    it('should create a pet instance with correct properties', function() {
        assert.equal(reptile.id,'RP-SN-01');
        assert.equal(reptile.name,'Rattlesnake');
        assert.equal(reptile.photoUrls,'www.google.com');
        assert.equal(reptile.status,'In store');
      });
    it('should create a users instance with correct properties', function() {
          var user1 = new user(1,
                'JaneRizzoli',
                'Jane',
                'Rizzoli',
                'janeRizzoli@gmail.com',
                'Password',
                '123-456-7890',
                1
              );
          assert.equal(user1.id,1);
          assert.equal(user1.username,'JaneRizzoli');
          assert.equal(user1.firstName,'Jane');
          assert.equal(user1.lastName,"Rizzoli");
          assert.equal(user1.email,"janeRizzoli@gmail.com");
          assert.equal(user1.password,"Password");
          assert.equal(user1.phone,"123-456-7890");
          assert.equal(user1.userStatus,1);
          });
    it('should create a order instance with correct properties', function() {
        var order1 = new order(1,1,1,"2023-04-03","delivered",true);
        assert.equal(order1.id,1);
        assert.equal(order1.petId,1);
        assert.equal(order1.quantity,1);
        assert.equal(order1.shipDate,"2023-04-03");
        assert.equal(order1.status,'delivered');
        assert.equal(order1.complete,true);
    });
    it('should create a tag instance with correct properties', function() {
        //var colourful = new tag(1,"colourful");
        assert.equal(tags[0].id,1);
        assert.equal(tags[0].name,"small");
    });
  });
