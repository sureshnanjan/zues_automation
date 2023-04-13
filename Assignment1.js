var assert = require('assert');
describe('Category Module', function () {
    describe('Print Function', function (){
    it('Testing the Category Id value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Categoryid, F1);}});
    it('Testing the Category Id value for Dog', function () {
        if(Petname.element=="Dog"){assert.equal(Categoryid, D1);}});
    it('Testing the Category Id value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Categoryid, C1);}});
    
    it('Testing the Category Name value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(CategoryName, Fish);}});
    it('Testing the Category Name value for Dog', function () {
        if(Petname.element=="Dog"){assert.equal(CategoryName, Dog);}});
    it('Testing the Category Name value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(CategoryName, Cat);}});
    });
  });
/**
 * Category Function prints the CategoryId and CategoryName of the Pet
 * @param {*} Categoryid CategoryId of the Pet
 * @param {*} CategoryName CategoryName of the Pet
 */
function Category(Categoryid, CategoryName) {
    this.Categoryid = Categoryid;
    this.CategoryName = CategoryName
    this.print = function () {
        console.log("Category: CategoryId= " +`${this.Categoryid}`+" CategoryName= " + `${this.CategoryName}`)
    }
}
describe('Pets Module', function () {
    describe('Print Function', function (){
    it('Testing the Pet Id value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Petid, AngelFish1);} });
    it('Testing the Pet Id value', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(Petid, Bulldog1);} });
    it('Testing the Pet Id value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Petid, Persian1);} });

    it('Testing the Category Id value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Categoryid, F1);}});
    it('Testing the Category Id value', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(Categoryid, D1);}});
    it('Testing the Category Id value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Categoryid, C1);}});
    
    it('Testing the Category Name value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(CategoryName, Fish);}});
    it('Testing the Category Name value for Dog', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(CategoryName, Dog);}});
    it('Testing the Category Name value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(CategoryName, Cat);}});
    
    it('Testing the Photo URL value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(photoUrls, AngelFish1_URL);}});
    it('Testing the Photo URL value', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(photoUrls, Bulldog1_URL);}});
    it('Testing the Photo URL value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(photoUrls, Persian1_URL);}});
    
    it('Testing the Tag id value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Tagid, TG1);}});
    it('Testing the Tag id value for Dog', function () {
        if(Petname.element=="Dog"){assert.equal(Tagid, TG2);}});
    it('Testing the Tag id value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Tagid, TG3);}});
   
    it('Testing the TagName value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(TagName, TgAngelFish);}});
    it('Testing the TagName value for Dog', function () {
        if(Petname.element=="Dog"){assert.equal(TagName, TgBullDog1);}});
    it('Testing the TagName value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(TagName, TgPersian);}});

    it('Testing the Status value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(TagName, Available);}});
    it('Testing the Status value for Dog', function () {
        if(Petname.element=="Dog"){assert.equal(TagName, Available);}});
    it('Testing the Status value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(TagName, Available);}});
  });
});
/**
 * Pets function prints the Petid, Categoryid, CategoryName, photoUrls, Tagid, TagName and Status of the Pet
 * @param {*} Petid Id of the Pet
 * @param {*} Categoryid CategoryId of the Pet
 * @param {*} CategoryName CategoryName of the Pet
 * @param {*} photoUrls photoUrl of the Pet
 * @param {*} Tagid Tag id of the Pet
 * @param {*} TagName Tag Name of the Pet
 * @param {*} Status Availaibility Status of the Pet
 */
function Pets(Petid, Categoryid, CategoryName, photoUrls, Tagid, TagName, Status) {
    this.Petid = Petid;
    this.Categoryid = Categoryid;
    this.CategoryName = CategoryName;
    this.photoUrls = photoUrls;
    this.Tagid = Tagid;
    this.TagName = TagName;
    this.Status = Status;
    this.print = function () {
        console.log("Pets: PetId= " +`${this.Petid}` + " Categoryid= " + `${this.Categoryid}`+" CategoryName= "+`${this.CategoryName}`+
        " PhotoUrls= "+ `${this.photoUrls}`+" TagID= "+`${this.Tagid}`+" TagName= "+ `${this.TagName}`+" Status= "+ `${this.Status}`)
    }
}
describe('Tag Module', function () {
    describe('Print Function', function (){
        it('Testing the Tag id value for Fish', function () {
            if(Petname.element=="Fish"){assert.equal(Tagid, TG1);}});
        it('Testing the Tag id value for Dog', function () {
            if(Petname.element=="Dog"){assert.equal(Tagid, TG2);}});
        it('Testing the Tag id value for Cat', function () {
            if(Petname.element=="Cat"){assert.equal(Tagid, TG3);}});

        it('Testing the TagName value for Fish', function () {
            if(Petname.element=="Fish"){assert.equal(TagName, TgAngelFish);}});
        it('Testing the TagName value for Dog', function () {
            if(Petname.element=="Dog"){assert.equal(TagName, TgBullDog1);}});
        it('Testing the TagName value for Cat', function () {
            if(Petname.element=="Cat"){assert.equal(TagName, TgPersian);}});
        
  });
});
/**
 *  Tag Function prints the TagID and TagName of the Pet
 * @param {*} tagid Tag Id of the Pet
 * @param {*} TagName Tag Name of the Pet
 */
function Tag(tagid, TagName) {
    this.tagid = tagid;
    this.TagName = TagName;
    this.print = function () {
        console.log("Tag: TagID= " +`${this.tagid}`+" TagName= "+`${this.TagName}`)
    }
}
describe('Pets Module', function () {
    describe('Print Function', function (){
    it('Testing the Order Id value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Orderid, OD1);} });
    it('Testing the Order Id value', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(Orderid, OD2);} });
    it('Testing the Order Id value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Orderid, OD3);} });

    it('Testing the Quantity value for Fish', function () {
            if(Petname.element=="Fish"){assert.equal(Quantity,1);} });
    it('Testing the Quantity value', function () {
            if(Petname.element=="Dog for Dog"){assert.equal(Quantity, 1);} });
    it('Testing the Quantity Id value for Cat', function () {
            if(Petname.element=="Cat"){assert.equal(Quantity, 1);} });
    
    it('Testing the Ship Date value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(shipDate, 01/01/23);}});
    it('Testing the Ship Date value for Dog', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(shipDate, 01/01/23);}});
    it('Testing the Ship Date value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(shipDate, 01/01/23);}});
    
    it('Testing the orderStatus value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(orderStatus, "In Progress");}});
    it('Testing the orderStatus value', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(orderStatus, "In Progress");}});
    it('Testing the orderStatus value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(orderStatus, "In Progress");}});
    
    it('Testing the completion Status for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(complete, False);}});
    it('Testing the completion Status value for Dog', function () {
        if(Petname.element=="Dog"){assert.equal(complete, False);}});
    it('Testing the completion Status value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(complete, False);}});
  });
});
/**
 *  Order function prints the following parameters for the Pet
 * @param {*} Orderid Order Id of the Pet
 * @param {*} Petid Pet Id of the Pet
 * @param {*} Quantity Quantity of Pets in the order
 * @param {*} shipDate Shipment Date
 * @param {*} orderStatus Status of the Order
 * @param {*} complete If the order is complete or not
 */
function Order(Orderid, Petid, Quantity, shipDate, orderStatus, complete) {
    this.Orderid = Orderid;
    this.Petid = Petid;
    this.Quantity = Quantity;
    this.shipDate = shipDate;
    this.orderStatus = orderStatus;
    this.complete = complete;
    this.print = function () {
        console.log("Order: OrderID= " +`${this.Orderid}`+" PetID= "+`${this.Petid}`+" Quantity= "+`${this.Quantity}`+" ShipDate= "+`${this.shipDate}`+
        " OrderStatus= "+`${this.orderStatus}`+" Complete= "+`${this.complete}`)
    }
}
describe('User Module', function () {
    describe('Print Function', function (){
    it('Testing the User Id value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Userid, User1);} });
    it('Testing the User Id value', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(Userid, User1);} });
    it('Testing the User Id value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Userid, User1);} });

    it('Testing the Username value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Username, UN1);}});
    it('Testing the Username value', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(Username, UN1);}});
    it('Testing the Username value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Username, UN1);}});
    
    it('Testing the Firstname value for Fish', function () {
        if(Petname.element=="Fish"){assert.equal(Firstname, FN1);}});
    it('Testing the Firstname value for Dog', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(Firstname, FN1);}});
    it('Testing the Firstname value for Cat', function () {
        if(Petname.element=="Cat"){assert.equal(Firstname, FN1);}});
    
    it('Testing the lastName URL value for Fish Buyer', function () {
        if(Petname.element=="Fish"){assert.equal(lastName, LN1);}});
    it('Testing the lastName URL value for Dog Buyer', function () {
        if(Petname.element=="Dog for Dog"){assert.equal(lastName, LN1);}});
    it('Testing the Photo lastName value for Cat Buyer', function () {
        if(Petname.element=="Cat"){assert.equal(lastName, LN1);}});
    
    it('Testing the email id value for Fish Buyer', function () {
        if(Petname.element=="Fish"){assert.equal(email, "123@gmail.com");}});
    it('Testing the email id value for Dog Buyer', function () {
        if(Petname.element=="Dog"){assert.equal(email, "123@gmail.com");}});
    it('Testing the email id value for Cat Buyer', function () {
        if(Petname.element=="Cat"){assert.equal(email, "123@gmail.com");}});
   
    it('Testing the Password value for Fish Buyer', function () {
        if(Petname.element=="Fish"){assert.equal(Password, 123);}});
    it('Testing the Password value for Dog Buyer', function () {
        if(Petname.element=="Dog"){assert.equal(Password, 123);}});
    it('Testing the Password value for Cat Buyer', function () {
        if(Petname.element=="Cat"){assert.equal(Password, 123);}});

    it('Testing the Phonenumber value for Fish Buyer', function () {
        if(Petname.element=="Fish"){assert.equal(Phone, 123456789);}});
    it('Testing the Phonenumber value for Dog Buyer', function () {
        if(Petname.element=="Dog"){assert.equal(Phone, 123456789);}});
    it('Testing the Phonenumber value for Cat Buyer', function () {
        if(Petname.element=="Cat"){assert.equal(Phone, 123456789);}});

    it('Testing the userStatus value for Fish Buyer', function () {
            if(Petname.element=="Fish"){assert.equal(userStatus, NewUser);}});
    it('Testing the userStatus value for Dog Buyer', function () {
            if(Petname.element=="Dog"){assert.equal(userStatus, NewUser);}});
    it('Testing the userStatus value for Cat Buyer', function () {
            if(Petname.element=="Cat"){assert.equal(userStatus, NewUser);}});
  });
});
/**
 * User function prints the following parameters for the User
 * @param {*} Userid User Id of the User
 * @param {*} Username Username of the user
 * @param {*} Firstname Firstname of the user
 * @param {*} lastName lastName of the user
 * @param {*} email email of the user
 * @param {*} Password Password of the user
 * @param {*} Phone Phone number of the user
 * @param {*} userStatus Status of the user wheather new or returning
 */
function User(Userid, Username, Firstname, lastName, email, Password, Phone, userStatus) {
    this.Userid = Userid;
    this.Username = Username;
    this.Firstname = Firstname;
    this.lastName = lastName;
    this.email = email;
    this.Password = Password;
    this.phone = Phone;
    this.userStatus = userStatus;
    this.print = function () {
        console.log("User: UserID= "+`${this.Userid}`+" Username= "+`${this.Username}`+" Firstname= "+`${this.Firstname}`+
        " lastName= "+`${this.lastName}`+" email= "+`${this.email}`+" Password= "+`${this.Password}`+" Phone_Number= "+`${this.phone}`+" userStatus= "+`${this.userStatus}` + "\n" + "")
    }
}
/*** Aray of the Pet names */
let Petname = ["Fish", "Dog", "Cat"];
/**
 * For each element of the above array,  Category, Pets, Tag, Order and User functions will be called and their parameters will be printed.
 */
Petname.forEach(element => {
    if (element == "Fish") {
        Categoryid = "F1"; CategoryName = "Fish", Petid = "AngelFish1", Petname = "AngelFish", photoUrls = "AngelFish1_URL", tagid = "TG1", TagName = "TgAngelFish", Status = "Available",
            Orderid = "OD1", Quantity = "1", shipDate = "01/01/23", orderStatus = "In progress", complete = "False", Userid = "User1", Username = "UN1", Firstname = "FN1", lastName = "LN1", email = "123@gmail.com",
            Password = "123", Phone = "123456789", userStatus = "NewUser"
    }
    if (element == "Dog") {
        Categoryid = "D1"; CategoryName = "Dog", Petid = "BullDog1", Petname = "BullDog", photoUrls = "BullDog1_URL", tagid = "TG2", TagName = "TgBullDog1", Status = "Available",
            Orderid = "OD2", Quantity = "1", shipDate = "01/01/23", orderStatus = "In progress", complete = "False", Userid = "User1", Username = "UN1", Firstname = "FN1", lastName = "LN1", email = "123@gmail.com",
            Password = "123", Phone = "123456789", userStatus = "NewUser"
    }
    if (element == "Cat") {
        Categoryid = "C1"; CategoryName = "Cat", Petid = "Persian1", Petname = "Persian", photoUrls = "Persian_URL", tagid = "TG3", TagName = "TgPersian1", Status = "Available",
        Orderid = "OD3", Quantity = "1", shipDate = "01/01/23", orderStatus = "In progress", complete = "False", Userid = "User1", Username = "UN1", Firstname = "FN1", lastName = "LN1", email = "123@gmail.com",
        Password = "123", Phone = "123456789", userStatus = "NewUser"
    }
    let Category1 = new Category(Categoryid, CategoryName);
    Category1.print();
    let Pet = new Pets(Petid, Categoryid, CategoryName, photoUrls, tagid, TagName, Status);
    Pet.print();
    let Tag1= new Tag(tagid, TagName);
    Tag1.print();
    let Order1 = new Order(Orderid, Petid, Quantity, shipDate, orderStatus, complete);
    Order1.print();
    let User1 = new User(Userid, Username, Firstname, lastName, email, Password, Phone, userStatus);
    User1.print();
});