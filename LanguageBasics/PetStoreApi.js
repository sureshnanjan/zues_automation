/**
 * This is print function for 2 values
 * @param {This will be 1st value to be printed} value1 
 * @param {This will be 2ns value to be printed} value2 
 */
function print(value1, value2) {
    val1 = value1
    val2 = value2
    console.log(`${val1} - ${val2}`)

}

/**
 * Function category will take 2 parameters id and name
 * @param {Integer} id 
 * @param {String} name 
 */

function Category(id, name) {
    let categoryid = id
    let categoryname = name
    print(categoryid, categoryname)
    //console.log(`Category ID is ${categoryid} and Category Name is ${categoryname}`)
}

Category(1, 'Fish')
Category(2, 'Dogs')
Category(3, 'Reptiles')
Category(4, 'Cats')
Category(5, 'Birds')

/**
 * This is function Tag
 * @param {Integer value which will take tag ID} id 
 * @param {String value which will take tag name} name 
 */

function Tag(id, name) {
    let tagid = id
    let tagname = name
    print(tagid, tagname)
}

Tag(11, 'Seawater')
Tag(12, 'FreshWater')
Tag(21, 'Various Breeds')
Tag(31, 'Various Breed')
Tag(32, 'Exotic Varieties')
Tag(41, 'Lizards')
Tag(42, 'Turtles')
Tag(43, 'Snakes')
Tag(51, 'Exotic Varieties')

/**
 * THis function will be used for Pet's data
 * @param {Integer} id This value will have Pet ID
 * @param {fuction} __proto__ This is Category Function
 * @param {String} name This is name of the Pet
 * @param {String} photourl This is the URL of the Pet's photo
 * @param {function} __proto__ This is Tag Function
 * @param {String} status This is the status of the Pet which willl have 3 values available, pending and sold
 */

/*
function Pet(id, __proto__: Category, name, photourl, __proto__: Tag, status) {
    let petid = id
    let petname = name
    let peturl = photourl
    let petstatus = status
    console.log(`Pet Id is ${petid},Pet name is ${petname},URL of pgoto is ${peturl} and Pet status is ${petstatus}`)
}
*/

/**
 * THis function will bring Order related field
 * @param {integer} id This will be order id
 * @param {integer} petId This will be Pet ID 
 * @param {integer} quantity This is the quatity at which the user has brought the pet 
 * @param {String} shipDate This is the ship Date of the order
 * @param {String} status This is the status of the Order which can have 3 values (placed, approved, delivered)
 * @param {boolean} complete This will be 1 if completed and 0 id still in progress
 */


function Order(id, petId, quantity, shipDate, status, complete) {
    let oid = id
    let petid = petId
    let oquantity = quantity
    let oshipDate = shipDate
    let ostatus = status
    let ocomplete = complete
    console.log(`Order ID is ${oid}, Pet ID is ${petid}, Quantity of ordered pets is ${oquantity}, it will be shpped on ${oshipDate}, it has status ${ostatus} and the order is completed ${ocomplete}`)
}

Order(001,11,2,'20th April','Completed',1)
/**
 * 
 * @param {integer} id This will be user's ID
 * @param {string} username This is username
 * @param {string} firstName This is user's First Name
 * @param {string} lastName This is user's Last Name
 * @param {string} email This is user's email
 * @param {string} password This is user's password
 * @param {string} phone This is user's string
 * @param {integer} userStatus This is user's status
 */

function User(id,username,firstName,lastName,email,password,phone,userStatus) {
    let userid = id
    let user_username = username
    let user_firstName = firstName
    let user_lastName = lastName
    let user_email = email
    let user_password = password
    let user_phone = phone
    let user_userstatus = userStatus
    console.log(`User ID is ${userid}, user name is ${user_username}, User's first Name is ${user_firstName}, user's last name is ${user_lastName}, user's email is ${user_email}, user password is ${user_password}, user's phone number is ${user_phone} and user's status is ${user_userstatus}`)

}

User(100,'mrujams','Mrunal','Jamsandekar','mrunal.jamsandekar@zeuslaerning.com','Password@123','1234567890',1)
