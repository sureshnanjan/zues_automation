function Order(id, petId, quantity, shipDate, status, complete){

    this.id=id;
    this.petId=petId;
    this.quantity=quantity;
    this.shipDate=shipDate;
    this.complete=status;
    this.complete=complete;
    }
    
    // Objects
    const id=['BD-01', 'PO-02', 'DL-01'];
    const petId=['BD', 'PO', 'DL'];
    const quantity=['5', '6', '4'];
    const shipDate=['7/4', '6/4', '8/4'];
    const status=['placed', 'approved', 'delivered'];
    const complete=['yes', 'no'];
    //Order1 = new Order(BD-01, 'BD', '6', '7/4', 'placed', 'no');
    
    // print
    var assert = require (`assert`)
    describe('Testing the Orders', function (name) {
    describe('Testing Order function', () => {
            let Order1 = new Order('BD-01', 'BD', '6', '7/4', 'placed', 'no');
    
            it('id should be same as provided by the user', () => {
                    assert.equal(Order1.id, 'BD-01');
            });
    
            it(`petId should be same as provided by the user`, () => {
                assert.equal(Order1.petId, 'BD');
            });
    
            it('quantity should be same as provided by the user', () => {
                assert.equal(Order1.quantity, '6');
            });
    
            it('ShipDate should be same as provided by the user', () => {
                assert.equal(Order1.shipDate, '7/4');
            });
    
            it('status should be same as provided by the user', () => {
                assert.equal(Order1.status, 'placed');
            });
    
            it('complete status should be same as provided by the user', () => {
                assert.equal(Order1.complete, 'no');
            });
      });
    });
