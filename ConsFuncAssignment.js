var assert = require('assert');
/**
 * Creates a new Category object.
 * @constructor
 * @param {number} id - The ID of the category
 * @param {string} name - The name of the category.
 */
function Category(id,name){
    this.id = id
    this.name = name
    this.print = function(){
        console.log("Category:")
        for(var key in this){
            console.log(this[key])
        }
    }
}

/**
 * Creates a new Tag object.
 * @constructor
 * @param {number} id - The ID of the tag.
 * @param {string} name - The name of the tag.
 */
function Tag(id,name){
    this.id = id;
    this.name = name
    this.print = function(){
        console.log("Tag details:")
        for(var key in this){
            console.log(this[key])
        }
    }
}

/**
 * Creates a new Pet object.
 * @constructor
 * @param {number} id - The ID of the pet.
 * @param {string} name - The name of the pet.
 * @param {Object} photoUrls - An Object of photo URLs for the pet.
 * @param {string} status - The status of the pet.
 */
function Pet(id,name,photoUrls,status){
    this.id = id
    this.name = name
    Category.call(this, id, name)
    this.photoUrls = photoUrls
    Tag.call(this, id, name)
    this.status = status
    this.print = function(){
        console.log("Pet details:")
        for(var key in this){
            console.log(this[key])
        }
    }
}

/**
 * Creates a new Order object.
 * @constructor
 * @param {number} id - The ID of the order.
 * @param {number} petId - The ID of the pet associated with the order.
 * @param {number} quantity - The quantity of pets in the order.
 * @param {string} shipDate - The date the order was shipped.
 * @param {string} status - The status of the order.
 * @param {boolean} complete - Indicates if the order is complete.
 */
function Order(id,petId,quantity,shipDate,status,complete){
    this.id = id
    this.petId = petId
    this.quantity = quantity
    this.shipDate = shipDate
    this.status = status
    this.complete = complete
    this.print = function(){
        console.log("Order details:")
        for(var key in this){
            console.log(this[key])
        }
    }
}

/**
 * Creates a new User object.
 * @constructor
 * @param {number} id - The ID of the user.
 * @param {string} username - The username of the user.
 * @param {string} firstName - The first name of the user.
 * @param {string} lastName - The last name of the user.
 * @param {string} email - The email address of the user.
 * @param {string} password - The password of the user.
 * @param {string} phone - The phone number of the user.
 * @param {number} userStatus - The status of the user.
 */
function User(id,username,firstName,lastName,email,password,phone,userStatus){
    this.id = id
    this.username = username
    this.firstName = firstName
    this.lastName = lastName
    this.email = email
    this.password = password
    this.phone = phone
    this.userStatus = userStatus
    this.print = function(){
        console.log("User details:")
        for(var key in this){
            console.log(this[key])
        }
    }
}

var category1 = new Category(1,"Fish")
category1.print()
var category2 = new Category(2,"Dogs")
category2.print()
var category3 = new Category(3,"Cats")
category3.print()
var category4 = new Category(4,"Reptiles")
category4.print()
var category5 = new Category(5,"Birds")
category5.print()
var tag1 = new Tag(1,"tag1")
tag1.print()
var tag2 = new Tag(2,"tag2")
tag2.print()
var tag3 = new Tag(3,"tag3")
tag3.print()
var pet1 = new Pet(20,"Bulldog",{"BullDogPic1":"BullDogPic1Url","BullDogPic2":"BullDogPic2Url"},"available")
pet1.print()
var pet2 = new Pet(10,"Tiger Shark",{"TigerSharkPic":"TigerSharkPicUrl"},"pending")
pet2.print()
var pet3 = new Pet(40,"Rattlesnake",{"RattleSnakePic":"RattleSnakePicUrl"},"sold")
pet3.print()
var order1 = new Order(1,20,2,"10Apr2023","approved",false)
order1.print()
var order2 = new Order(1,10,1,"1Apr2023","placed",false)
order2.print()
var order3 = new Order(1,40,4,"5Apr2023","delivered",true)
order3.print()
var user1 = new User(1,"jvazquez","Jeanette","Vazquez","nisi.nibh@hotmail.org","KMR36YDB4NA","1-932-131-1582",0)
user1.print()
var user2 = new User(2,"ejimenez","Edan","Jimenez","orci.in@icloud.com","RQM25MTU0SK","(556) 715-1886",1)
user2.print()

describe('Category Constructor function', function() {
    it('should create a new Category object with the correct ID and name', function() {
    const category = new Category(1, 'Fish')
    assert.equal(category.id, 1)
    assert.equal(category.name, 'Fish')
    })
    it('should create a new Category object with the correct ID and name', function() {
    const category = new Category(2, 'Dogs')
    assert.equal(category.id, 2)
    assert.equal(category.name, 'Dogs')
    })
})

describe('Tag Constructor function', function(){
    it('show create a new Tag object with the correct properties',function(){
        const tag = new Tag(1,"tag1")
        assert.equal(tag.id,1)
        assert.equal(tag.name,'tag1')
    })
})

describe('Pet Constructor function', function() {
    it('should create a new Pet object with the correct properties', function() {
      const pet = new Pet(20, 'Bulldog', {"BullDogPic1":"BullDogPic1Url","BullDogPic2":"BullDogPic2Url"},'available')
      assert.equal(pet.id, 20)
      assert.equal(pet.name, 'Bulldog')
      assert.equal(pet.photoUrls.BullDogPic1,'BullDogPic1Url')
      assert.equal(pet.status, 'available')
    })
})

describe('Order Constructor function', function(){
    it('show create an Order object with the correct properties',function(){
        const order = new Order(1,20,2,"10Apr2023","approved",false)
        assert.equal(order.id,1)
        assert.equal(order.petId,20)
        assert.equal(order.quantity,2)
        assert.equal(order.shipDate,'10Apr2023')
        assert.equal(order.status,'approved')
        assert.equal(order.complete,false)
    })
})

describe('User Constructor function', function(){
    it('show create a User object with the correct properties',function(){
        const user = new User(2,"ejimenez","Edan","Jimenez","orci.in@icloud.com","RQM25MTU0SK","(556) 715-1886",1)
        assert.equal(user.id,2)
        assert.equal(user.username,'ejimenez')
        assert.equal(user.firstName,'Edan')
        assert.equal(user.lastName,'Jimenez')
        assert.equal(user.email,'orci.in@icloud.com')
        assert.equal(user.password,'RQM25MTU0SK')
        assert.equal(user.phone,'(556) 715-1886')
        assert.equal(user.userStatus,1)
    })
})