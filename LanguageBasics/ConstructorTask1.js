/**
 * This is a function for Category model of the Pet store
 * @param {number} id 
 * @param {string} name 
 */
function Category(id, name) {
    this.id = id
    this.name = name
    this.print = function () {
        console.log(`${this.name} - ${this.id}`)
    }
}

let fish = new Category(1,'fish');
let dog = new Category(2,'dog');

fish.print();

const petCategory = new Array ("fish", "dog", "cat", "reptile", "bird" )
console.log(petCategory[1]);

/**
 * This is a function for the Pet model of the Pet store
 * @param {string} id 
 * @param {string} name 
 * @param {string} photourls 
 * @param {string} tags 
 * @param {string} status 
 */
function Pet(id, name, photoUrls, tags, status){
    this.id	= id
    ///category	Category{...}
    this.name = name
    this.photoUrls = photoUrls
    this.tags = tags
    this.status = status
    this.print = function () {
        console.log(`${this.id} - ${this.name} - ${this.photoUrls} - ${this.tags} - ${this.status}`)
    }
    }

/**
 * This is a function for the Tag model of the Pet store
 * @param {number} id 
 * @param {string} name 
 */
function Tag(id, name) {
    this.id
    this.name
    this.print = function () {
        console.log(`${this.name} - ${this.id}`)
    }
}

/**
 * This is a function for the Order model of the Pet store
 * @param {number} id 
 * @param {number} petId 
 * @param {number} quantity 
 * @param {string} shipDate 
 * @param {string} complete 
 */
function Order(id, petId, quantity, shipDate, complete){
    this.id	= id
    this.petId = petId
    this.quantity = quantity
    this.shipDate = shipDate
    //status	[...]
    this.complete = complete
    this.print = function(){
        console.log(`${this.id} - ${this.petId} - ${this.quantity} - ${this.shipDate} - ${this.complete}`)
    }
    }

    /**
     * This is a function for the User model of the Pet store
     * @param {number} id 
     * @param {string} username 
     * @param {string} firstName 
     * @param {string} lastName 
     * @param {string} email 
     * @param {string} password 
     * @param {number} phone 
     * @param {number} userStatus 
     */
    function User(id, username, firstName, lastName, email, password, phone, userStatus){
        this.id	= id
        this.username = username
        this.firstName = firstName
        this.lastName = lastName
        this.email = email
        this.password = password
        this.phone = phone
        this.userStatus = userStatus
        this.print = function(){
            console.log(`${this.id} - ${username} - ${firstName} - ${lastName} - ${email} - ${password} - ${phone} - ${userStatus}`)
        }
        }


        let user1 = new User(01,'razia07','razia','ratlamwala','razia.ratlamwala@zeuslearning.com','Zeus@123',976990238,1001)

        user1.print();