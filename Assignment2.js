//Assignment2 --> Use of Constructor, for loop and Unit testing using mocha framework.
/**
 * This is a Contructor function for ApiResponse
 * @param {integer} code 
 * @param {string} type 
 * @param {string} message 
 * @param {function} print
 */
function apiResponse (code, type, message) {
    this.code = code;
    this.type = type;
    this.message = message;
    this.print = function r1() {
        let r = `This function returns Api Response with code = ${this.code}, type = ${this.type} and message = ${this.message}.`;
        return r;
    }
}

var result1 = new apiResponse(2, 'Type1', 'Looks Good');
console.log (`\r\n${result1.print()}`);

//Unit Testing for apiResponse function
var assert = require('assert');
    describe('Test to verify ApiResponse function', function() {
        it('Checking for the values inserted', function() {
            assert.equal(result1.print(),"This function returns Api Response with code = 2, type = Type1 and message = Looks Good.");
    });
});

/**
 * This Constructor function is of Category.
 * @param {integer} id 
 * @param {string} name 
 */
function Category(id,name) {
    this.id=id;
    this.name=name;
    this.print = function r2() {
        let r = `This function returns Category with id = ${this.id} and name = ${this.name}.`;
        return r;
    }
}

//Creating array of the Category instances for print function
let DiffCategories = [  
    new Category(1, 'Fish'),
    new Category(2, 'Reptile'),
    new Category(3, 'Bird'),
    ]

console.log("\r\nPrinting of Categories: \r\n");

// Invoking Print function for the categories.
for (let i = 0; i < DiffCategories.length; i++) {
    console.log(DiffCategories[i].print());
  }

//Unit Testing for Category function
var result2 = new Category(1,"Dogs");
    describe('Test to verify Category function', function() {
        it('Checking for the values inserted', function() {
            assert.equal(result2.print(),"This function returns Category with id = 1 and name = Dogs.");
});
});

/**
 * This Constructor function is of Pet
 * @param {integer} Petid 
 * @param {integer} id 
 * @param {string} name 
 * @param {string} petName 
 * @param {string} photoUrls 
 * @param {string} tags 
 * @param {string} status1 
 */
function Pet (Petid,id,name,petName,photoUrls,tags,Petstatus) {
    this.Petid=Petid;
    Category.call(this,id, name);
    this.petName=petName;
    this.photoUrls = photoUrls;
    this.tags = tags;
    this.Petstatus = Petstatus;
    this.print = function r3() {
        let r = `This function returns Pet with Petid = ${this.Petid}, Categoryid = ${this.id}, Categoryname = ${this.name}, Petname = ${this.petName}, photoUrl = ${this.photoUrls}, tag = ${this.tags} and Availability status = ${this.Petstatus}.`;
        return r;
}
}

//Creating array of the Pet instances for print function
let PetStatuses = ["available", "pending", "sold"];
let PetNames = [  
    new Pet(20, 1, 'Fish', "Goldie", "Fish_photoURL", "Fishtag", PetStatuses[1]),
    new Pet(21, 2, 'Reptile', "Allie", "Reptile_photoURL", "Reptiletag", PetStatuses[2]),
    new Pet(22, 3, 'Bird', "Birdie", "Bird_photoURL", "Birdtag", PetStatuses[0])
]

console.log("\r\nPrinting of Pet details: \r\n");


// Invoking Print function for the Pet instances
for (let i = 0; i < PetNames.length; i++) {
    console.log(PetNames[i].print());
  }

//Unit Testing for Pet function
var result5 = new Pet (6, 3, "Dogs", "Brownie", "Dog_PhotoURL", "dogtag", "available");
    describe('Test to verify Pet function', function() {
        it('Checking for the values inserted', function() {
            assert.equal(result5.print(),"This function returns Pet with Petid = 6, Categoryid = 3, Categoryname = Dogs, Petname = Brownie, photoUrl = Dog_PhotoURL, tag = dogtag and Availability status = available.");
});
});

/**
 * This Constructor function is of Tag.
 * @param {integer} id 
 * @param {string} name 
 */
 function Tag(id,name) {
    this.id=id;
    this.name=name;
    this.print = function r3() {
        let r = `This function returns Tag with id = ${id} and name = ${name}.`;
        return r;
    }
}

//Unit Testing for Tag function
var result3 = new Tag(24,"TagName");

console.log(`\r\n${result3.print()}`);

    describe('Test to verify Tag function', function() {
        it('Checking for the values inserted', function() {
            assert.equal(result3.print(),"This function returns Tag with id = 24 and name = TagName.");
});
});
/**
 * This Constructor function is of Order.
 * @param {integer} orderid 
 * @param {integer} petId 
 * @param {integer} quantity 
 * @param {Date} shipDate 
 * @param {array} orderStatus 
 * @param {boolean} complete 
 */

 function Order(orderid,Petid,quantity,shipDate,orderStatus,complete) {
    this.orderid=orderid;
    Pet.call(this, Petid);
    this.quantity=quantity;
    this.shipDate=shipDate;
    this.orderStatus=orderStatus;
    this.complete=complete;
    this.print = function r3() {
        let r = `This function returns Order details with orderID = ${this.orderid}, PetID = ${this.Petid}, Quantity = ${this.quantity}, ShipDate = ${this.shipDate}, OrderStatus = ${this.orderStatus} and it is ${this.complete}.`;
        return r;
    }
}

//Creating array of the Order instances for print function
let OrderStatuses = ["placed", "approved", "deivered"];
let Completed = ["completed","not completed"];
let OrderDetails = [  
    new Order(40, 78, 2,"01/01/2023", OrderStatuses[0], Completed[1]),
    new Order(41, 79, 1, "02/01/2023", OrderStatuses[1], Completed[1]),
    new Order(42, 80, 1, "03/01/2023", OrderStatuses[2], Completed[0]),
]

console.log("\r\nPrinting of Order details: \r\n");

// Invoking Print function for the Order instances
for (let i = 0; i < OrderDetails.length; i++) {
    console.log(OrderDetails[i].print());
  }

//Unit Testing for Order function
var result4 = new Order(24, 5, 2, "02/04/2023","approved", "completed" );
    describe('Test to verify Order function', function() {
        it('Checking for the values inserted', function() {
            assert.equal(result4.print(),"This function returns Order details with orderID = 24, PetID = 5, Quantity = 2, ShipDate = 02/04/2023, OrderStatus = approved and it is completed.");
});
});

/**
 * This Constructor function is of User deatils.
 * @param {integer} userid 
 * @param {string} username 
 * @param {string} firstName 
 * @param {string} lastName 
 * @param {string} email 
 * @param {string} password 
 * @param {string} phone 
 * @param {string} userStatus 
 */

function User (userid, username, firstName, lastName, email, password, phone, userStatus){
    this.userid=userid;
    this.username=username;
    this.firstName=firstName;
    this.lastname=lastName;
    this.email=email;
    this.password=password;
    this.phone=phone;
    this.userstatus=userStatus;
    this.print = function r3() {
        let r = `This function returns User details with UserID = ${this.userid}, Username = ${this.username}, Firstname = ${this.firstName}, Lastname = ${this.lastname}, EmailId = ${this.email}, Password = ${this.password}, Contact no. = ${this.phone} and UserStatus = ${this.userstatus}.`;
        return r;
}
}

//Unit Testing for User Details function
var result6 = new User(6, "mhatre_maithili", "Maithili", "Mhatre", "mm@gmail.com", "december@19", "2586321", "Active" );

console.log(`\r\n${result6.print()}`);

    describe('Test to verify User function', function() {
        it('Checking for the values inserted', function() {
            assert.equal(result6.print(),"This function returns User details with UserID = 6, Username = mhatre_maithili, Firstname = Maithili, Lastname = Mhatre, EmailId = mm@gmail.com, Password = december@19, Contact no. = 2586321 and UserStatus = Active.");
});
    });
