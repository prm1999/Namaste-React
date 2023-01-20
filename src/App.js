       /**
         * Haeder 
         * -Logo
         * -Nav Item(Right Side)
         * -Cart
         * Body
         * -Search Bar
         * -Resturant List
         * -- Resturant Card
         * ---Image
         * ---Name
         * ---Rating
         * ---Cusines
         * Footer
         * -Links
         * -CopyRight
         * 
         * 
         * 
         * 
         * 
         * 
         * 
         */
import React from "react"
import ReactDOM,{ createRoot } from "react-dom/client";


const Title=()=>(
    <a href="/">
    <img
    className="logo"
    alt=" logo"
    src="data:image/jpeg;base64,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"/>
    </a> 
     // <h1 id="title" keys="h2">
        //     Food Villa
        // </h1>
)

const returant_list=[
    {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "515134",
          "name": "Junior Kuppanna",
          "uuid": "7b1b58c2-b352-4251-af40-c0703c402c0b",
          "city": "8",
          "area": "Karapakkam",
          "totalRatingsString": "500+ ratings",
          "cloudinaryImageId": "vwd0hxweqil7ascdente",
          "cuisines": [
            "South Indian",
            "Indian",
            "Biryani"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 35,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 40,
          "slaString": "30-40 MINS",
          "lastMileTravel": 8,
          "slugs": {
            "restaurant": "junior-kuppanna-karapakkam-karapakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "213/197 , Okkiyam Thoraipakkam , Sholinganallur Taluk , Chennai - 600097",
          "locality": "Okkiyam",
          "parentId": 112209,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5758078~p=4~eid=00000185-cb31-a435-031c-43d10022043b",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "8 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "515134",
            "deliveryTime": 35,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 40,
            "lastMileTravel": 8,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 500,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "33743",
          "name": "Guntur Gongura",
          "uuid": "d1b8c9a4-08a2-4e4a-a13f-edb1c5565172",
          "city": "8",
          "area": "Sholinganallur",
          "totalRatingsString": "1000+ ratings",
          "cloudinaryImageId": "drsqbi7ullwgvkawp93z",
          "cuisines": [
            "Andhra",
            "North Indian",
            "South Indian",
            "Biryani",
            "Chinese",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 25,
          "minDeliveryTime": 25,
          "maxDeliveryTime": 25,
          "slaString": "25 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "krishnas-dosa-kadai-sholinganallur-karappakam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "293 A   IT Express Way  Sholinganallur  Chennai",
          "locality": "Shollinganallur",
          "parentId": 18528,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "33743",
            "deliveryTime": 25,
            "minDeliveryTime": 25,
            "maxDeliveryTime": 25,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.9",
          "totalRatings": 1000,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "440399",
          "name": "JUST 99rs",
          "uuid": "64be7b97-b66e-4f7a-b2fb-579d5c020c9d",
          "city": "8",
          "area": "Chrompet",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "z7hfajkfbh7el6rvcnmh",
          "cuisines": [
            "Chinese",
            "Tandoor"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 38,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 45,
          "slaString": "35-45 MINS",
          "lastMileTravel": 11.300000190734863,
          "slugs": {
            "restaurant": "just-99rs-chrompet-chrompet",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "GANDHI STREET,VIVEK NAGAR,MUTHULAKSHMI NAGAR,CHITLAPAKKAM,CHENNAI-600064",
          "locality": "Vivek Nagar",
          "parentId": 248247,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 10000,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 10000,
            "message": "",
            "title": "Delivery Charge",
            "amount": "10000",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "11.3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "440399",
            "deliveryTime": 38,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 45,
            "lastMileTravel": 11.300000190734863,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.2",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "42944",
          "name": "Oven Story Pizza",
          "uuid": "63e69d9c-9777-4764-8711-409ab8391cc8",
          "city": "8",
          "area": "Medavakkam",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "ggglzphjohtx67hdy09q",
          "cuisines": [
            "Pizzas",
            "Italian"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 45,
          "slaString": "35-45 MINS",
          "lastMileTravel": 3.799999952316284,
          "slugs": {
            "restaurant": "ovenstory-pizza-ex-service-man-colony1st-street-medavakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "#4/13, Ex-Service Man colony,1st Street, Jaladianpet, Medavakkam, Chennai-600100",
          "locality": "Ex-Service Man colony,1st Street",
          "parentId": 3534,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5759144~p=7~eid=00000185-cb31-a435-031c-43d200220712",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "42944",
            "deliveryTime": 36,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 45,
            "lastMileTravel": 3.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "3.9",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "612571",
          "name": "KFC",
          "uuid": "8efb8ec3-514b-4744-bcd1-a6bde864b8e8",
          "city": "8",
          "area": "Perumbakkam",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "bdcd233971b7c81bf77e1fa4471280eb",
          "cuisines": [
            "Burgers",
            "Biryani",
            "American",
            "Snacks",
            "Fast Food"
          ],
          "tags": [
            
          ],
          "costForTwo": 40000,
          "costForTwoString": "₹400 FOR TWO",
          "deliveryTime": 35,
          "minDeliveryTime": 30,
          "maxDeliveryTime": 40,
          "slaString": "30-40 MINS",
          "lastMileTravel": 3,
          "slugs": {
            "restaurant": "kfc-perumbakkam-perumbakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "Sapphire Foods India Ltd. , Plot No : 5, Kailash Nagar, Medavakkam Sholinganallur Road, Next to HDFC bank, Perumbakkam, Chennai -600100",
          "locality": "Kailash Nagar",
          "parentId": 547,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "3 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "612571",
            "deliveryTime": 35,
            "minDeliveryTime": 30,
            "maxDeliveryTime": 40,
            "lastMileTravel": 3,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.7",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "450729",
          "name": "Cake House",
          "uuid": "2f65619d-b288-4afb-af3b-98bdc4c9079f",
          "city": "8",
          "area": "Madipakkam",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "hqcghvsxz8zp0gzaqjpa",
          "cuisines": [
            "Bakery"
          ],
          "tags": [
            
          ],
          "costForTwo": 25000,
          "costForTwoString": "₹250 FOR TWO",
          "deliveryTime": 42,
          "minDeliveryTime": 40,
          "maxDeliveryTime": 50,
          "slaString": "40-50 MINS",
          "lastMileTravel": 10.5,
          "slugs": {
            "restaurant": "cake-house-madipakkam-madipakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "DOOR NO.48A, MEDAVAKKAM MAIN  ROAD, KEELKATTALAI,  MADIPAKKAM, Kancheepuram,  Tamil Nadu, 600091",
          "locality": "Keelkattalai",
          "parentId": 8539,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              {
                "name": "distance",
                "fee": 9300,
                "message": ""
              },
              {
                "name": "time",
                "fee": 0,
                "message": ""
              },
              {
                "name": "special",
                "fee": 0,
                "message": ""
              }
            ],
            "totalFees": 9300,
            "message": "",
            "title": "Delivery Charge",
            "amount": "9300",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 1,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "10.5 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "450729",
            "deliveryTime": 42,
            "minDeliveryTime": 40,
            "maxDeliveryTime": 50,
            "lastMileTravel": 10.5,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "IT_IS_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "4.0",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "315758",
          "name": "THE BELGIAN WAFFLE CAFE",
          "uuid": "c7dcdf90-c309-40ad-beae-50faa2d1ec69",
          "city": "8",
          "area": "Medavakkam",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "hmo0ganenyv8iiweuwfd",
          "cuisines": [
            "Desserts",
            "Snacks",
            "Beverages"
          ],
          "tags": [
            
          ],
          "costForTwo": 15000,
          "costForTwoString": "₹150 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 45,
          "slaString": "35-45 MINS",
          "lastMileTravel": 2.799999952316284,
          "slugs": {
            "restaurant": "the-belgian-waffle-cafe-madipakkam-madipakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "77, Sholinganallur Main Rd, Kailash Nagar, Medavakkam, Chennai, Tamil Nadu 600100",
          "locality": "Perubakkam",
          "parentId": 10384,
          "unserviceable": false,
          "veg": true,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "ribbon": [
            {
              "type": "PROMOTED"
            }
          ],
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "cid=5624107~p=10~eid=00000185-cb31-a435-031c-43d300220a29",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "315758",
            "deliveryTime": 36,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 45,
            "lastMileTravel": 2.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": true,
          "avgRating": "4.3",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
      {
        "type": "restaurant",
        "data": {
          "type": "F",
          "id": "609737",
          "name": "Pizza Hut",
          "uuid": "b0306bfc-b5b5-40a3-9d6f-f92a67fdc482",
          "city": "8",
          "area": "Perumbakkam",
          "totalRatingsString": "100+ ratings",
          "cloudinaryImageId": "no3lnjuuzn8nvohihqer",
          "cuisines": [
            "Pizzas"
          ],
          "tags": [
            
          ],
          "costForTwo": 35000,
          "costForTwoString": "₹350 FOR TWO",
          "deliveryTime": 36,
          "minDeliveryTime": 35,
          "maxDeliveryTime": 45,
          "slaString": "35-45 MINS",
          "lastMileTravel": 2.799999952316284,
          "slugs": {
            "restaurant": "pizza-hut-perumbakkam-perumbakkam",
            "city": "chennai"
          },
          "cityState": "8",
          "address": "Plot Number 5, Kailash Nagar, Medavakkam Sholinganallur Road, Next to HDFC bank, Perumbakkam, Chennai -600100",
          "locality": "Kailash Nagar",
          "parentId": 721,
          "unserviceable": false,
          "veg": false,
          "select": false,
          "favorite": false,
          "tradeCampaignHeaders": [
            
          ],
          "aggregatedDiscountInfo": {
            "header": "50% off",
            "shortDescriptionList": [
              {
                "meta": "50% off | Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "aggregatedDiscountInfoV2": {
            "header": "50% OFF",
            "shortDescriptionList": [
              {
                "meta": "Use WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "descriptionList": [
              {
                "meta": "50% off up to ₹100 | Use code WELCOME50",
                "discountType": "Percentage",
                "operationType": "RESTAURANT"
              }
            ],
            "subHeader": "",
            "headerType": 0,
            "superFreedel": ""
          },
          "chain": [
            
          ],
          "feeDetails": {
            "fees": [
              
            ],
            "totalFees": 0,
            "message": "",
            "title": "",
            "amount": "",
            "icon": ""
          },
          "availability": {
            "opened": true,
            "nextOpenMessage": "",
            "nextCloseMessage": ""
          },
          "longDistanceEnabled": 0,
          "rainMode": "NONE",
          "thirdPartyAddress": false,
          "thirdPartyVendor": "",
          "adTrackingID": "",
          "badges": {
            "imageBased": [
              
            ],
            "textBased": [
              
            ],
            "textExtendedBadges": [
              
            ]
          },
          "lastMileTravelString": "2.7 kms",
          "hasSurge": false,
          "sla": {
            "restaurantId": "609737",
            "deliveryTime": 36,
            "minDeliveryTime": 35,
            "maxDeliveryTime": 45,
            "lastMileTravel": 2.799999952316284,
            "lastMileDistance": 0,
            "serviceability": "SERVICEABLE",
            "rainMode": "NONE",
            "longDistance": "NOT_LONG_DISTANCE",
            "preferentialService": false,
            "iconType": "EMPTY"
          },
          "promoted": false,
          "avgRating": "3.8",
          "totalRatings": 100,
          "new": false
        },
        "subtype": "basic"
      },
    

    ]

const ResturantCard=({
    name,cuisines,cloudinaryImageId,minDeliveryTime,
})=>{
    // const {name,cuisines,cloudinaryImageId,minDeliveryTime}=data.data;
    return (
        <div className="card">
        <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+
       cloudinaryImageId} alt="image"/>
        <h2>{name}</h2>
        <h3>{cuisines}</h3>
        <h4>{minDeliveryTime} minutes star</h4>
        </div>
    )
}








const Header=()=>{
    return(
        <div className="header">
           <Title/>
           <div className="nav-items">
            <ul>
                <li> Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Cart</li>
            </ul>
            </div>
        </div>
 
    );
};
// React Fragment is a component exprted in react
// JXS has only one parent



function Body() {
    return (
<div className="resurantlist">
 {/* restaurant is array of data is mapping with the restutant array  * in Resturant card there are the data of the resturant which isnmapping with the  */} 
 {/* returant_list is map with the function callback function */}
    {returant_list.map((object)=>{
        return <ResturantCard {...object.data} key={object.data.id}/>
    })}

    {/* Using Destructing */}

    {/* <ResturantCard {...returant[0].data}/>
    <ResturantCard  {...returant[1].data}/>
    <ResturantCard  {...returant[2].data}/>
    <ResturantCard  {...returant[3].data}/>
    <ResturantCard  {...returant[4].data}/>
    <ResturantCard  {...returant[5].data}/> */}
</div>    );
}

const Footer=()=>{
    return (
        <h1> Footer</h1>
    )
}





const AppLayout=()=>{
    return(
        <React.Fragment>
        <Header/>
        <Body/>
        <Footer/>
        </React.Fragment>
    )
}
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);