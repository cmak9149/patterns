
export interface iAccountBuilder {
    id(_id: string): AccountBuilder;
    getId(): string;
    firstName(fn: string): AccountBuilder;
    getFirstName(): string;
    lastName(_ln: string): AccountBuilder;
    getLastName(): string;
    contactType(_ct: string): AccountBuilder;
    getContactType(): string;
    contactNumber(cn: string): AccountBuilder; 
    getContactNumber(): string;
    addressLine1(addr1 :string): AccountBuilder;
    getAddressLine1(): string;
    addressLine2(addr2: string|undefined): AccountBuilder;
    getAddressLine2(): string|undefined;
    city(_city: string): AccountBuilder;
    getCity(): string;
    state(_state: string): AccountBuilder;
    getState(): string;     
    zipCode(zip: string): AccountBuilder;
    getZipCode(): string;
    create(): void;
}

export class AccountWB {
    source: string;
    id: string;
    firstName: string;
    lastName: string;
    contactType: string;
    contactNumber: string;
    addressLine1:string;
    addressLine2: string|undefined;
    city: string;
    state: string;
    zipCode: string;

    constructor(src: string, builder: iAccountBuilder) {
        this.source = src;
        this.id = builder.getId();
        this.firstName = builder.getFirstName();
        this.lastName = builder.getLastName();
        this.contactType = builder.getContactType();
        this.contactNumber = builder.getContactNumber();
        this.addressLine1 = builder.getAddressLine1();
        this.addressLine2 = builder.getAddressLine2();
        this.city = builder.getCity();
        this.state = builder.getState();
        this.zipCode = builder.getZipCode();
    } 

    detail() {
        console.log("source", this.source);
    }
}

export class AccountBuilder implements iAccountBuilder  {
    _id?: string;
    _firstName?: string;
    _lastName?: string;
    _contactType?: string;
    _contactNumber?: string;
    _addressLine1?:string;
    _addressLine2: string|undefined;
    _city?: string;
    _state?: string;
    _zipCode?: string;

    id(_id: string): AccountBuilder {
        this._id = _id;
        return this;        
    }
    
    getId(): string {
        return this._id!;
    }

    firstName(fn: string): AccountBuilder {
        this._firstName = fn;
        return this;        
    }

    getFirstName(): string {
        return this._firstName!;
    }
    
    lastName(_ln: string): AccountBuilder {
        this._lastName= _ln;
        return this;        
    }

    getLastName(): string {
        return this._lastName!;
    }
    
    contactType(_ct: string): AccountBuilder {
        this._contactType = _ct;
        return this;        
    }

    getContactType(): string {
        return this._contactType!;
    }
    
    contactNumber(cn: string): AccountBuilder {
        this._contactNumber = cn;
        return this;        
    }
    
    getContactNumber(): string {
        return this._contactNumber!;
    }

    addressLine1(addr1 :string): AccountBuilder {
        this._addressLine1 = addr1;
        return this;        
    }

    getAddressLine1(): string {
        return this._addressLine1!;
    }
    
    addressLine2(addr2: string|undefined): AccountBuilder {
        this._addressLine2 = addr2;
        return this;        
    }
    
    getAddressLine2(): string|undefined {
        return this._addressLine2;
    } 

    city(_city: string): AccountBuilder {
        this._city = _city;
        return this;        
    }

    getCity(): string {
        return this._city!;
    }
    
    state(_state: string): AccountBuilder {
        this._state = _state;
        return this;        
    }

    getState(): string {
        return this._state!;
    }
    
    zipCode(zip: string): AccountBuilder {
        this._zipCode = zip;
        return this;        
    }

    getZipCode(): string {
        return this._zipCode!;
    } 

    create() {
        return new AccountWB("In Premise", this);
    }
}

export class NetAccountBuilder implements iAccountBuilder  {
    _id?: string;
    _firstName?: string;
    _lastName?: string;
    _contactType?: string;
    _contactNumber?: string;
    _addressLine1?:string;
    _addressLine2: string|undefined;
    _city?: string;
    _state?: string;
    _zipCode?: string;

    id(_id: string): NetAccountBuilder {
        this._id = _id;
        return this;        
    }
    
    getId(): string {
        return this._id!;
    }

    firstName(fn: string): NetAccountBuilder {
        this._firstName = fn;
        return this;        
    }

    getFirstName(): string {
        return this._firstName!;
    }
    
    lastName(_ln: string): NetAccountBuilder {
        this._lastName= _ln;
        return this;        
    }

    getLastName(): string {
        return this._lastName!;
    }
    
    contactType(_ct: string): NetAccountBuilder {
        this._contactType = _ct;
        return this;        
    }

    getContactType(): string {
        return this._contactType!;
    }
    
    contactNumber(cn: string): NetAccountBuilder {
        this._contactNumber = cn;
        return this;        
    }
    
    getContactNumber(): string {
        return this._contactNumber!;
    }

    addressLine1(addr1 :string): NetAccountBuilder {
        this._addressLine1 = addr1;
        return this;        
    }

    getAddressLine1(): string {
        return this._addressLine1!;
    }
    
    addressLine2(addr2: string|undefined): AccountBuilder {
        this._addressLine2 = addr2;
        return this;        
    }
    
    getAddressLine2(): string|undefined {
        return this._addressLine2;
    } 

    city(_city: string): NetAccountBuilder {
        this._city = _city;
        return this;        
    }

    getCity(): string {
        return this._city!;
    }
    
    state(_state: string): NetAccountBuilder {
        this._state = _state;
        return this;        
    }

    getState(): string {
        return this._state!;
    }
    
    zipCode(zip: string): NetAccountBuilder {
        this._zipCode = zip;
        return this;        
    }

    getZipCode(): string {
        return this._zipCode!;
    } 

    create() {
        return new AccountWB("WWW", this);
    }
}

function test(builder: iAccountBuilder) {
    let account = builder.id("123")
                    .firstName("Peter")
                    .lastName( "Smith")
                    .contactType("cell")
                    .contactNumber("312-326-1234")
                    .addressLine1("123 S Wells")
                    .addressLine2(undefined)
                    .city("Chicago")
                    .state("IL").zipCode("60616")
                    .create();
    account.detail();                    
}

let netAccountBuilder = new NetAccountBuilder();
let tranditionBuilder = new AccountBuilder();

console.log("****** Traditional Account builder *******")
test(tranditionBuilder);

// net account builder 
console.log("****** Net Account builder *******")
test(netAccountBuilder); 