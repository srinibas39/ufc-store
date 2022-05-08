import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: "3d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Men's UFC Ticket T-shirt - Orang...",
    price: "3000",
    categoryName: "T-shirt",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0285_260x.jpg?v=1641831263%20260w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0285_320x.jpg?v=1641831263%20320w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0285_380x.jpg?v=1641831263%20380w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0285_440x.jpg?v=1641831263%20440w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0285_500x.jpg?v=1641831263%20500w",
    discount: "10% off",
    stock: true,
    qty: 0


  }, {
    _id: "4d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Men's UFC Strategy Buzz T-shirt ...",
    price: "3200",
    categoryName: "T-shirt",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0283_260x.jpg?v=1641831247%20260w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0283_320x.jpg?v=1641831247%20320w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0283_380x.jpg?v=1641831247%20380w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0283_440x.jpg?v=1641831247%20440w,//cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0283_500x.jpg?v=1641831247%20500w",
    discount: "12% off",
    stock: true,
    qty: 0


  }, {
    _id: "5d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Men's UFC Tonal Long Sleeve T-Sh...",
    price: "4500",
    categoryName: "T-shirt",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMT0287_500x.jpg?v=1641831284",
    discount: "10% off",
    stock: true,
    qty: 0
  }, {
    _id: "6d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Urban Dress Socks",
    price: "1500",
    categoryName: "Socks",
    rating: "3",
    image: "	https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMF002904_500x.jpg?v=1642098162",
    discount: "10% off",
    stock: true,
    qty: 0
  }, {
    _id: "7d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "omen's UFC Pastel Tie Dye T-Shi...",
    price: "1000",
    categoryName: "T-shirt",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGLT0191_320x.jpg?v=1644873155",
    discount: "10% off",
    stock: false,
    qty: 0
  }, {
    _id: "8d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Authentic Fight Night ...",
    price: "1200",
    categoryName: "Cap",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/VNMUFC-00010-001_02B_500x.jpg?v=1616673644",
    discount: "10% off",
    stock: true,
    qty: 0
  }, {
    _id: "9d3ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Authentic Fight Night ...",
    price: "1300",
    categoryName: "Cap",
    rating: "2",
    image: "	https://cdn.shopify.com/s/files/1/0035/4274/5152/products/VNMUFC-00010-126_01B_500x.jpg?v=1616673704",
    discount: "10% off",
    stock: true,
    qty: 0
  }, {
    _id: "103ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Replica Men's Hoodie",
    price: "2700",
    categoryName: "Hoodie",
    rating: "1",
    image: "	https://cdn.shopify.com/s/files/1/0035/4274/5152/products/VNMUFC-00067-001_01F_500x.jpg?v=1622123669",
    discount: "10% off",
    stock: true,
    qty: 0
  }, {
    _id: "113ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Authentic Fight Night Men's Walkout Pant.",
    price: "2100",
    categoryName: "Pant",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/VNMUFC-00005-001_00F_500x.jpg?v=1622119723",
    discount: "10% off",
    stock: true,
    qty: 0
  }, {
    _id: "123ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Authentic Fight Night Men's Walkout Pant.",
    price: "2300",
    categoryName: "Pant",
    rating: "3",
    image: "	https://cdn.shopify.com/s/files/1/0035/4274/5152/products/VNMUFC-00068-126_04_500x.jpg?v=1616531322",
    discount: "10% off",
    stock: false,
    qty: 0
  }, {
    _id: "133ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Replica Men's Hoodie",
    price: "3200",
    categoryName: "Hoodie",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/CHAMPION-Mens-Champion-Hoodie-Front_844856f1-4957-4eb6-82f0-dd4a622b91b2_500x.jpg?v=1633539575",
    discount: "30% off",
    stock: true,
    qty: 0
  },

  {
    _id: "143ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "OPROBlack/Red/Gold UFC Platinum ...",
    price: "2500",
    categoryName: "Mouthguard",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0029_A_440x.jpg?v=1569251142",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "153ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "OPRORed/Black/Silver UFC Platinu...",
    price: "2600",
    categoryName: "Mouthguard",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0030_A_440x.jpg?v=1569251142",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "163ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "OPRO Black/Gold UFC Gold Mouth G...",
    price: "2750",
    categoryName: "Mouthguard",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0024_A_440x.jpg?v=1569251142",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "173ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "OPRO Red/Black UFC Silver Mouth ...",
    price: "3020",
    categoryName: "Mouthguard",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0021_A_440x.jpg?v=1569251142",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "183ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 180 Black Hand Wraps",
    price: "1299",
    categoryName: "Handwraps",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0007-_2_440x.jpg?v=1569250513",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "193ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 180 Red Hand Wraps",
    price: "1399",
    categoryName: "Handwraps",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0008-_2_440x.jpg?v=15692505132",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "203ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 180  White Hand Wraps",
    price: "1499",
    categoryName: "Handwraps",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0011-_3_440x.jpg?v=1569250515",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "213ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 180 Blue Hand Wraps",
    price: "1599",
    categoryName: "Handwraps",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0009-_4_440x.jpg?v=1569250513",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "223ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 5 oz MMA Red Gloves",
    price: "3099",
    categoryName: "Gloves",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMF0006-_1_440x.jpg?v=1569250517",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "233ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 5 oz MMA White Gloves",
    price: "3199",
    categoryName: "Gloves",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMF0008-_1_440x.jpg?v=1569250518",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "243ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 5 oz MMA Blue Gloves",
    price: "3299",
    categoryName: "Gloves",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMF0007-_1_440x.jpg?v=1569250518",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "253ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 5 oz MMA Black Gloves",
    price: "3399",
    categoryName: "Gloves",
    rating: "1",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGMF0005-_1_440x.jpg?v=1569250515",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "263ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC MMA Heavy Bag 80 lbs.",
    price: "4399",
    categoryName: "Heavy Bags",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ5002-_1_440x.jpg?v=1569250517",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "273ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Standard Heavy Bag 70 lbs.",
    price: "4499",
    categoryName: "Heavy Bags",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ5000-_1_440x.jpg?v=1569250516",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "283ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Pro Leather Speed Bag",
    price: "4599",
    categoryName: "Heavy Bags",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ501900_A_440x.jpg?v=1571077625",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "293ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Strike Shield",
    price: "4699",
    categoryName: "Heavy Bags",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGEQ0004-_1_440x.jpg?v=1569250513",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "303ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Body Action System Standard",
    price: "4999",
    categoryName: "Body Action System",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV5000_440x.jpg?v=1615297232",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "313ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Body Action System X2 Model",
    price: "4999",
    categoryName: "Body Action System",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV5002_440x.jpg?v=1615297251",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "323ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Strike Shield",
    price: "4999",
    categoryName: "Body Action System",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV5001_440x.jpg?v=1615297217",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "333ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Legacy Championship Replica ...",
    price: "2199",
    categoryName: "Championship Belt",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGJB0016_E1_440x.jpg?v=1647951318",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "343ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "BMF Replica Belt",
    price: "2299",
    categoryName: "Championship Belt",
    rating: "1",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGCL0019_B_440x.jpg?v=1572640564",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "353ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Classic Championship Replica...",
    price: "2399",
    categoryName: "Championship Belt",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGJB001500_C_440x.jpg?v=1569424310",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "363ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Pride Replica Belt",
    price: "2899",
    categoryName: "Championship Belt",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0068_A_440x.jpg?v=1582751564",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "373ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ultimate Series Limited Edit...",
    price: "1200",
    categoryName: "Action Figure",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFNV0028_C_440x.jpg?v=1601497198",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "383ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ultimate Series Limited Edit...",
    price: "1300",
    categoryName: "Action Figure",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFNV0030_D_440x.jpg?v=1601497317",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "393ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ultimate Series Limited Edit...",
    price: "1700",
    categoryName: "Action Figure",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFNV0031_A_440x.jpg?v=1601497370",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "403ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Collectible Octagon",
    price: "1900",
    categoryName: "Action Figure",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/20201030_105957_440x.jpg?v=1604088218",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "413ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC 2021 Panini Chronicles Tradi...",
    price: "1199",
    categoryName: "Training Cards",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/21ChroniclesUFC_Blaster_C2919_440x.jpg?v=1645558141",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "423ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ulti-Man Bobblehead",
    price: "1599",
    categoryName: "Bobble Head",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0022_A_440x.jpg?v=1569248452",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "433ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Conor McGregor Bobblehead.",
    price: "2599",
    categoryName: "Bobble Head",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/McGregor_Bobblehead_440x.jpg?v=1569280532",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "443ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Jon Jones Bobblehead..",
    price: "3599",
    categoryName: "Bobble Head",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/Jones_bobblehead_440x.jpg?v=1569280532",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "453ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Daniel Cormier Bobblehead",
    price: "4570",
    categoryName: "Bobble Head",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFNV001800_A_440x.jpg?v=1569281570",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "463ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Amanda Nunes Big Shots Pillo...",
    price: "1430",
    categoryName: "Plushes",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFPL500000_Front_440x.jpg?v=1643656541",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "473ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Conor McGregor Big Shots Pil...",
    price: "1440",
    categoryName: "Plushes",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFPL500200_Front_440x.jpg?v=1643720645",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "483ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Daniel Cormier Big Shots Pil...",
    price: "1450",
    categoryName: "Plushes",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFPL500400_Front_440x.jpg?v=1643720664",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "493ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Chuck Liddell Big Shots Pill...",
    price: "2400",
    categoryName: "Plushes",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCFPL500100_Front_440x.jpg?v=1643656560",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "503ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Gloves Flag",
    price: "2400",
    categoryName: "Poster",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0246_440x.jpg?v=1631535102",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "513ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ultimate Fighting Championsh...",
    price: "2400",
    categoryName: "Poster",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV024400_440x.jpg?v=1628608536",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "523ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Pin Collectors Banner",
    price: "2400",
    categoryName: "Poster",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV005500_A_440x.jpg?v=1569287905",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "533ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Urban Scrawl Global Flag",
    price: "2400",
    categoryName: "Poster",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0215_440x.jpg?v=1619696705",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "543ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC X DFNS Apparel Launder FLIGH...",
    price: "1000",
    categoryName: "Body Refresher",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0207A_440x.jpg?v=1618858358",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "553ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC X DFNS All-Purpose Hygiene S...",
    price: "1000",
    categoryName: "Body Refresher",
    rating: "1",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0211A_440x.jpg?v=1618859136",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "563ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC X DFNS Sport Gear Refresher ...",
    price: "1000",
    categoryName: "Body Refresher",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0209A_440x.jpg?v=1618859545",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "573ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC X DFNS Sport Gear Refresher ...",
    price: "1000",
    categoryName: "Body Refresher",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0208A_440x.jpg?v=1618858965",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "583ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Authentic Fight Night ...",
    price: "2400",
    categoryName: "Cap",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/VNMUFC-00009-001_01F_440x.jpg?v=1622120026",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "593ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC White Lapel Pin",
    price: "600",
    categoryName: "Pin",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGHP000400_A_440x.jpg?v=1569287788",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "603ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Octagon Pin",
    price: "700",
    categoryName: "Pin",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGHP0001_A_440x.jpg?v=1569194243",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "613ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Black Glove Octagon Lapel Pi...",
    price: "800",
    categoryName: "Pin",
    rating: "2",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGHP000300_A_440x.jpg?v=1601656877",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "623ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC White Glove Octagon Lapel Pi...",
    price: "900",
    categoryName: "Pin",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGHP000500_A_440x.jpg?v=1569287788",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "633ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Diecut Logo Keychain",
    price: "100",
    categoryName: "Key Chain",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0133_440x.jpg?v=1645626541",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "643ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Logo Keychain",
    price: "200",
    categoryName: "Key Chain",
    rating: "3",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0132_440x.jpg?v=1645626532",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "653ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Bottle Opener Keychain.",
    price: "300",
    categoryName: "Key Chain",
    rating: "1",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0125_440x.jpg?v=1622119023",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "663ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC SPinner Keychain",
    price: "400",
    categoryName: "Key Chain",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0125_440x.jpg?v=1622119023",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "673ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC VENUM Authentic Fight Week B...",
    price: "120",
    categoryName: "Towel",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/VNMUFC-00054-100_06_440x.jpg?v=1616674083",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "683ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ulti-Man Towel",
    price: "130",
    categoryName: "Towel",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0005_A_440x.jpg?v=1569194247",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "693ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Flask and Shot Glass Set",
    price: "250",
    categoryName: "Glassware",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV000600_440x.jpg?v=1571669322",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "703ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Shot Glass 4 Pack",
    price: "250",
    categoryName: "Glassware",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV000800_440x.jpg?v=1569281896",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "713ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Camp Mug",
    price: "150",
    categoryName: "Glassware",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV001000_A_440x.jpg?v=1608325381",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "723ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Stainless Steel Water Bottle...",
    price: "400",
    categoryName: "Glassware",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV0024_440x.jpg?v=1625158732",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "733ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Premium Octagon 14K Yellow G...",
    price: "685",
    categoryName: "Earings",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV0024_440x.jpg?v=1625158732",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "743ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Deluxe UFC Octagon Black Diamond...",
    price: "185",
    categoryName: "Earings",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV0024_440x.jpg?v=1625158732",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "753ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Conor The Notorious McGreg...",
    price: "985",
    categoryName: "Earings",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV0024_440x.jpg?v=1625158732",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "763ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Khabib The Eagle Nurmagome...",
    price: "985",
    categoryName: "Earings",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGBV0024_440x.jpg?v=1625158732",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "773ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Retro Pager - Black",
    price: "1250",
    categoryName: "Retro Pager",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0112_440x.jpg?v=1612888885",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "783ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Retro Pager - White",
    price: "1250",
    categoryName: "Retro Pager",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0113_440x.jpg?v=1612888901",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "793ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Flare 8 Speaker",
    price: "3999",
    categoryName: "Retro Pager",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0114_A_440x.jpg?v=1612888916",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "803ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Elements Red & White Enamel ...",
    price: "2000",
    categoryName: "Necklace",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGJB0004A_a0a68c4f-4e08-4533-997f-d994498733e2_500x.jpg?v=1569234304",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "813ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Premium Octagon 14K Yellow G...",
    price: "1110",
    categoryName: "Necklace",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGJB5026_500x.jpg?v=1569279354",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "823ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "Deluxe UFC Octagon Beaded Dog Ta...",
    price: "1550",
    categoryName: "Necklace",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGJB5008_500x.jpg?v=1569279352",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "833ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ulti-Man Octagon Pendant in ...",
    price: "1850",
    categoryName: "Necklace",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGJB5034_500x.jpg?v=1569279355",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "843ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Pub Chair with Back",
    price: "3500",
    categoryName: "Chair",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV5005_500x.jpg?v=1627408894",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "853ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Black Pub Table",
    price: "4600",
    categoryName: "Table",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV5005_500x.jpg?v=1627408894",
    discount: "30% off",
    stock: false,
    qty: 0
  }, {
    _id: "863ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Bar Stool",
    price: "4300",
    categoryName: "Table",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV5005_500x.jpg?v=1627408894",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "873ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Chrome Pub Table",
    price: "4650",
    categoryName: "Table",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV5005_500x.jpg?v=1627408894",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "883ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Graphic Slides",
    price: "1300",
    categoryName: "Slipper",
    rating: "5",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGLF0001_A_500x.jpg?v=1622818363",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "893ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Ulti-Man Whiteout Lanyard",
    price: "180",
    categoryName: "Lanyard",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0130_500x.jpg?v=1645626509",
    discount: "30% off",
    stock: true,
    qty: 0
  }, {
    _id: "903ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Charcoal Lanyard",
    price: "180",
    categoryName: "Lanyard",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV0129_500x.jpg?v=1645626498",
    discount: "30% off",
    stock: true,
    qty: 0
  },

  {
    _id: "913ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC White Lanyard",
    price: "180",
    categoryName: "Lanyard",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV004300_500x.jpg?v=1569281896",
    discount: "30% off",
    stock: true,
    qty: 0
  },

  {
    _id: "923ef9d4-6a56-4dae-a155-3b4a7554242c",
    title: "UFC Blackout Lanyard",
    price: "190",
    categoryName: "Lanyard",
    rating: "4",
    image: "https://cdn.shopify.com/s/files/1/0035/4274/5152/products/UFCGNV004800_500x.jpg?v=1569281896",
    discount: "30% off",
    stock: false,
    qty: 0
  },
];

