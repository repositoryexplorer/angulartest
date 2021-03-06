import { Injectable } from '@angular/core';

export class Product {
  id: string;
  text: string;
  expanded?: boolean;
  items?: Product[];
  price?: number;
  image?: string;
}

export class Bucket {
  id: string;
  text: string;
  items?: Bucket[];
  expanded?: boolean;
}
export class FlatBucket {
  id: number;
  parentId: number;
  text: string;
  items?: Bucket[];
  expanded?: boolean;
}

var bucketsFlatList: FlatBucket[] = [
  {
    id: 1,
    parentId: -1,
    text: "Food",
    expanded: false,
  },
  {
    id: 200,
    parentId: 1,
    text: "Almond shavings",
    expanded: false
  },{
    id: 3,
    parentId: 1,
    text: "Bound soup",
    expanded: false
  },{
    id: 4,
    parentId: 1,
    text: "Chickenragout",
    expanded: false
  },{
    id: 5,
    parentId: 1,
    text: "Crispy cups",
    expanded: false
  },{
    id: 6,
    parentId: 1,
    text: "Cup a Soup",
    expanded: false
  },{
    id: 7,
    parentId: 1,
    text: "Dressing",
    expanded: false
  },{
    id: 8,
    parentId: 1,
    text: "Dried fruit",
    expanded: false
  },{
    id: 9,
    parentId: 1,
    text: "Flour",
    expanded: false
  },{
    id: 10,
    parentId: 1,
    text: "Gherkins",
    expanded: false
  },{
    id: 11,
    parentId: 1,
    text: "Gherkins",
    expanded: false
  },
  {
    id: 2,
    parentId: -1,
    text: "Fashion",
    expanded: false,
  }, {
    id: 20,
    parentId: 2,
    text: "Woman",
    expanded: false,
  }, {
    id: 30,
    parentId: 20,
    text: "Shirts",
    expanded: false,
  }, {
    id: 31,
    parentId: 30,
    text: "Blouse with glitter stripes",
    expanded: false
  }, {
    id: 32,
    parentId: 30,
    text: "Blouse with lace",
    expanded: false
  }, {
    id: 33,
    parentId: 30,
    text: "Shirt with star print",
    expanded: false
  }, {
    id: 40,
    parentId: 20,
    text: "Dresses",
    expanded: false,
  }, {
    id: 41,
    parentId: 40,
    text: "Mesh dress"
  }, {
    id: 42,
    parentId: 40,
    text: "Dress with lacing"
  }, {
    id: 43,
    parentId: 40,
    text: "Ethno dress"
  }, {
    id: 50,
    parentId: 20,
    text: "Trousers",
  }, {
    id: 51,
    parentId: 50,
    text: "Boyfriend trousers"
  }, {
    id: 52,
    parentId: 50,
    text: "Glencheck pants with red stripes"
  }, {
    id: 60,
    parentId: -1,
    text: "Hardware",
    expanded: false,
  }, {
    id: 61,
    parentId: 60,
    text: "Laptops",
  }, {
    id: 62,
    parentId: 61,
    text: "Arums E Model",
  }, {
    id: 63,
    parentId: 62,
    text: "Arums E40",
  },{
    id: 64,
    parentId: 62,
    text: "Arums E50",
  }, {
    id: 65,
    parentId: 61,
    text: "Mini",
  }, {
    id: 66,
    parentId: 65,
    text: "MINI 3 CORE I3",
  },{
    id: 67,
    parentId: 65,
    text: "MINI 3 CORE I40",
  },{
    id: 68,
    parentId: 65,
    text: "MINI 3 CORE I280",
  }, {
    id: 70,
    parentId: -1,
    text: "Lightning",
    expanded: false,
  }, {
    id: 71,
    parentId: 70,
    text: "H4 12V 55/60W Xtreme Vision",
  }, {
    id: 72,
    parentId: 70,
    text: "H4 12V 60/65W Extra Life",
  }];

var buckets: Bucket[] = [
    {
    id: "1",
    text: "Food",
    expanded: false,
    items: [{
      id: "1_1",
      text: "Almond shavings",
      expanded: false
      },{
        id: "1_2",
        text: "Bound soup",
        expanded: false
      },{
        id: "1_3",
        text: "Chickenragout",
        expanded: false
      },{
        id: "1_4",
        text: "Crispy cups",
        expanded: false
      },{
        id: "1_5",
        text: "Cup a Soup",
        expanded: false
      },{
        id: "1_6",
        text: "Dressing",
        expanded: false
      },{
        id: "1_7",
        text: "Dried fruit",
        expanded: false
      },{
        id: "1_8",
        text: "Flour",
        expanded: false
      },{
        id: "1_9",
        text: "Gherkins",
        expanded: false
      },{
        id: "1_10",
        text: "Gherkins",
        expanded: false
      }]
    },
  {
    id: "2",
    text: "Fashion",
    expanded: false,
    items: [{
      id: "2_1",
      text: "Woman",
      expanded: false,
      items: [{
          id: "2_1_1",
          text: "Shirts",
          expanded: false,
          items: [{
                id:"2_1_1_1",
                text:"Blouse with glitter stripes",
                expanded: false
              },
              {
                id:"2_1_1_2",
                text:"Blouse with lace",
                expanded: false
              },
              {
                id:"2_1_1_3",
                text:"Shirt with star print",
                expanded: false
              }]
        }, {
          id: "2_1_2",
          text: "Dresses",
          expanded: false,
          items: [{
            id: "2_1_2_1",
            text: "Mesh dress"
          }, {
            id: "2_1_2_2",
            text: "Dress with lacing"
          }, {
            id: "2_1_2_3",
            text: "Ethno dress"
          }]
        }, {
          id: "2_1_3",
          text: "Trousers",
          items: [{
            id: "2_1_3_1",
            text: "Boyfriend trousers"
          },{
            id: "2_1_3_2",
            text: "Glencheck pants with red stripes"
          }]
        }]
    }]
},


  {
    id: "3",
    text: "Hardware",
    expanded: false,
    items: [{
      id: "3_1",
      text: "Laptops",
      items: [{
        id: "3_1_1",
        text: "Arums E Model",
        items: [{
          id: "3_1_1_1",
          text: "Arums E40",
        },{
          id: "3_1_1_2",
          text: "Arums E50",
        }]
      },{
        id: "3_1_2",
        text: "Mini",
        items: [{
          id: "3_1_2_1",
          text: "MINI 3 CORE I3",
        },{
          id: "3_1_2_2",
          text: "MINI 3 CORE I40",
        },{
          id: "3_1_2_3",
          text: "MINI 3 CORE I280",
        }]
      }]
    }]
  },
  {
    id: "4",
    text: "Lightning",
    expanded: false,
    items: [{
      id: "4_1",
      text: "H4 12V 55/60W Xtreme Vision",
    },{
      id: "4_2",
      text: "H4 12V 60/65W Extra Life",
    }]
   }];

var products: Product[] = [{
  id: "1",
  text: "Stores",
  expanded: true,
  items: [{
    id: "1_1",
    text: "Super Mart of the West",
    expanded: true,
    items: [{
      id: "1_1_1",
      text: "Video Players",
      items: [{
        id: "1_1_1_1",
        text: "HD Video Player",
        price: 220,
        image: "https://picsum.photos/200/300",
      }, {
        id: "1_1_1_2",
        text: "SuperHD Video Player",
        image: "https://picsum.photos/200/300",
        price: 270
      }]
    }, {
      id: "1_1_2",
      text: "Televisions",
      expanded: true,
      items: [{
        id: "1_1_2_1",
        text: "SuperLCD 42",
        image: "https://picsum.photos/200/300",
        price: 1200
      }, {
        id: "1_1_2_2",
        text: "SuperLED 42",
        image: "https://picsum.photos/200/300",
        price: 1450
      }, {
        id: "1_1_2_3",
        text: "SuperLED 50",
        image: "https://picsum.photos/200/300",
        price: 1600
      }, {
        id: "1_1_2_4",
        text: "SuperLCD 55",
        image: "https://picsum.photos/200/300",
        price: 1350
      }, {
        id: "1_1_2_5",
        text: "SuperLCD 70",
        image: "https://picsum.photos/200/300",
        price: 4000
      }]
    }, {
      id: "1_1_3",
      text: "Monitors",
      expanded: true,
      items: [{
        id: "1_1_3_1",
        text: "19\"",
        expanded: true,
        items: [{
          id: "1_1_3_1_1",
          text: "DesktopLCD 19",
          image: "https://picsum.photos/200/300",
          price: 160
        }]
      }, {
        id: "1_1_3_2",
        text: "21\"",
        items: [{
          id: "1_1_3_2_1",
          text: "DesktopLCD 21",
          image: "https://picsum.photos/200/300",
          price: 170
        }, {
          id: "1_1_3_2_2",
          text: "DesktopLED 21",
          image: "https://picsum.photos/200/300",
          price: 175
        }]
      }]
    }, {
      id: "1_1_4",
      text: "Projectors",
      items: [{
        id: "1_1_4_1",
        text: "Projector Plus",
        image: "https://picsum.photos/200/300",
        price: 550
      }, {
        id: "1_1_4_2",
        text: "Projector PlusHD",
        image: "https://picsum.photos/200/300",
        price: 750
      }]
    }]

  }, {
    id: "1_2",
    text: "Braeburn",
    items: [{
      id: "1_2_1",
      text: "Video Players",
      items: [{
        id: "1_2_1_1",
        text: "HD Video Player",
        image: "https://picsum.photos/200/300",
        price: 240
      }, {
        id: "1_2_1_2",
        text: "SuperHD Video Player",
        image: "https://picsum.photos/200/300",
        price: 300
      }]
    }, {
      id: "1_2_2",
      text: "Televisions",
      items: [{
        id: "1_2_2_1",
        text: "SuperPlasma 50",
        image: "https://picsum.photos/200/300",
        price: 1800
      }, {
        id: "1_2_2_2",
        text: "SuperPlasma 65",
        image: "https://picsum.photos/200/300",
        price: 3500
      }]
    }, {
      id: "1_2_3",
      text: "Monitors",
      items: [{
        id: "1_2_3_1",
        text: "19\"",
        items: [{
          id: "1_2_3_1_1",
          text: "DesktopLCD 19",
          image: "https://picsum.photos/200/300",
          price: 170
        }]
      }, {
        id: "1_2_3_2",
        text: "21\"",
        items: [{
          id: "1_2_3_2_1",
          text: "DesktopLCD 21",
          image: "https://picsum.photos/200/300",
          price: 180
        }, {
          id: "1_2_3_2_2",
          text: "DesktopLED 21",
          image: "https://picsum.photos/200/300",
          price: 190
        }]
      }]
    }]

  }, {
    id: "1_3",
    text: "E-Mart",
    items: [{
      id: "1_3_1",
      text: "Video Players",
      items: [{
        id: "1_3_1_1",
        text: "HD Video Player",
        image: "https://picsum.photos/200/300",
        price: 220
      }, {
        id: "1_3_1_2",
        text: "SuperHD Video Player",
        image: "https://picsum.photos/200/300",
        price: 275
      }]
    }, {
      id: "1_3_3",
      text: "Monitors",
      items: [{
        id: "1_3_3_1",
        text: "19\"",
        items: [{
          id: "1_3_3_1_1",
          text: "DesktopLCD 19",
          image: "https://picsum.photos/200/300",
          price: 165
        }]
      }, {
        id: "1_3_3_2",
        text: "21\"",
        items: [{
          id: "1_3_3_2_1",
          text: "DesktopLCD 21",
          image: "https://picsum.photos/200/300",
          price: 175
        }]
      }]
    }]
  }, {
    id: "1_4",
    text: "Walters",
    items: [{
      id: "1_4_1",
      text: "Video Players",
      items: [{
        id: "1_4_1_1",
        text: "HD Video Player",
        image: "https://picsum.photos/200/300",
        price: 210
      }, {
        id: "1_4_1_2",
        text: "SuperHD Video Player",
        image: "https://picsum.photos/200/300",
        price: 250
      }]
    }, {
      id: "1_4_2",
      text: "Televisions",
      items: [{
        id: "1_4_2_1",
        text: "SuperLCD 42",
        image: "https://picsum.photos/200/300",
        price: 1100
      }, {
        id: "1_4_2_2",
        text: "SuperLED 42",
        image: "https://picsum.photos/200/300",
        price: 1400
      }, {
        id: "1_4_2_3",
        text: "SuperLED 50",
        image: "https://picsum.photos/200/300",
        price: 1500
      }, {
        id: "1_4_2_4",
        text: "SuperLCD 55",
        image: "https://picsum.photos/200/300",
        price: 1300
      }, {
        id: "1_4_2_5",
        text: "SuperLCD 70",
        image: "https://picsum.photos/200/300",
        price: 4000
      }, {
        id: "1_4_2_6",
        text: "SuperPlasma 50",
        image: "https://picsum.photos/200/300",
        price: 1700
      }]
    }, {
      id: "1_4_3",
      text: "Monitors",
      items: [{
        id: "1_4_3_1",
        text: "19\"",
        items: [{
          id: "1_4_3_1_1",
          text: "DesktopLCD 19",
          image: "https://picsum.photos/200/300",
          price: 160
        }]
      }, {
        id: "1_4_3_2",
        text: "21\"",
        items: [{
          id: "1_4_3_2_1",
          text: "DesktopLCD 21",
          image: "https://picsum.photos/200/300",
          price: 170
        }, {
          id: "1_4_3_2_2",
          text: "DesktopLED 21",
          image: "https://picsum.photos/200/300",
          price: 180
        }]
      }]
    }, {
      id: "1_4_4",
      text: "Projectors",
      items: [{
        id: "1_4_4_1",
        text: "Projector Plus",
        image: "https://picsum.photos/200/300",
        price: 550
      }, {
        id: "1_4_4_2",
        text: "Projector PlusHD",
        image: "https://picsum.photos/200/300",
        price: 750
      }]
    }]

  }]
}];

export class Customer {
  ID: number;
  CompanyName: string;
  Address: string;
  City: string;
  State: string;
  Zipcode: number;
  Phone: string;
  Fax: string;
  Website: string;
}

let customers: Customer[] = [{
  "ID": 1,
  "CompanyName": "Super Mart of the West",
  "Address": "702 SW 8th Street",
  "City": "Bentonville",
  "State": "Arkansas",
  "Zipcode": 72716,
  "Phone": "(800) 555-2797",
  "Fax": "(800) 555-2171",
  "Website": "http://www.nowebsitesupermart.com"
}, {
  "ID": 2,
  "CompanyName": "Electronics Depot",
  "Address": "2455 Paces Ferry Road NW",
  "City": "Atlanta",
  "State": "Georgia",
  "Zipcode": 30339,
  "Phone": "(800) 595-3232",
  "Fax": "(800) 595-3231",
  "Website": "http://www.nowebsitedepot.com"
}, {
  "ID": 3,
  "CompanyName": "K&S Music",
  "Address": "1000 Nicllet Mall",
  "City": "Minneapolis",
  "State": "Minnesota",
  "Zipcode": 55403,
  "Phone": "(612) 304-6073",
  "Fax": "(612) 304-6074",
  "Website": "http://www.nowebsitemusic.com"
}, {
  "ID": 4,
  "CompanyName": "Tom's Club",
  "Address": "999 Lake Drive",
  "City": "Issaquah",
  "State": "Washington",
  "Zipcode": 98027,
  "Phone": "(800) 955-2292",
  "Fax": "(800) 955-2293",
  "Website": "http://www.nowebsitetomsclub.com"
}, {
  "ID": 5,
  "CompanyName": "E-Mart",
  "Address": "3333 Beverly Rd",
  "City": "Hoffman Estates",
  "State": "Illinois",
  "Zipcode": 60179,
  "Phone": "(847) 286-2500",
  "Fax": "(847) 286-2501",
  "Website": "http://www.nowebsiteemart.com"
}, {
  "ID": 6,
  "CompanyName": "Walters",
  "Address": "200 Wilmot Rd",
  "City": "Deerfield",
  "State": "Illinois",
  "Zipcode": 60015,
  "Phone": "(847) 940-2500",
  "Fax": "(847) 940-2501",
  "Website": "http://www.nowebsitewalters.com"
}, {
  "ID": 7,
  "CompanyName": "StereoShack",
  "Address": "400 Commerce S",
  "City": "Fort Worth",
  "State": "Texas",
  "Zipcode": 76102,
  "Phone": "(817) 820-0741",
  "Fax": "(817) 820-0742",
  "Website": "http://www.nowebsiteshack.com"
}, {
  "ID": 8,
  "CompanyName": "Circuit Town",
  "Address": "2200 Kensington Court",
  "City": "Oak Brook",
  "State": "Illinois",
  "Zipcode": 60523,
  "Phone": "(800) 955-2929",
  "Fax": "(800) 955-9392",
  "Website": "http://www.nowebsitecircuittown.com"
}, {
  "ID": 9,
  "CompanyName": "Premier Buy",
  "Address": "7601 Penn Avenue South",
  "City": "Richfield",
  "State": "Minnesota",
  "Zipcode": 55423,
  "Phone": "(612) 291-1000",
  "Fax": "(612) 291-2001",
  "Website": "http://www.nowebsitepremierbuy.com"
}, {
  "ID": 10,
  "CompanyName": "ElectrixMax",
  "Address": "263 Shuman Blvd",
  "City": "Naperville",
  "State": "Illinois",
  "Zipcode": 60563,
  "Phone": "(630) 438-7800",
  "Fax": "(630) 438-7801",
  "Website": "http://www.nowebsiteelectrixmax.com"
}, {
  "ID": 11,
  "CompanyName": "Video Emporium",
  "Address": "1201 Elm Street",
  "City": "Dallas",
  "State": "Texas",
  "Zipcode": 75270,
  "Phone": "(214) 854-3000",
  "Fax": "(214) 854-3001",
  "Website": "http://www.nowebsitevideoemporium.com"
}, {
  "ID": 12,
  "CompanyName": "Screen Shop",
  "Address": "1000 Lowes Blvd",
  "City": "Mooresville",
  "State": "North Carolina",
  "Zipcode": 28117,
  "Phone": "(800) 445-6937",
  "Fax": "(800) 445-6938",
  "Website": "http://www.nowebsitescreenshop.com"
}];



@Injectable()
export class TreeTestService {

  getCustomers() {
    return customers;
  }

  getProducts(): Product[] {
    return products;
  }
  getBuckets(): Bucket[] {
    return buckets;
  }

  getFlatBuckets(): FlatBucket[] {
    return bucketsFlatList;
  }
}
