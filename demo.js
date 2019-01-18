const cheerio = require('cheerio');
const fs = require('fs');
let products = [];
let i;
fs.readFile('princard1.txt','utf8', (err,data) =>{
	if(err){
		console.log('Error in reading file data');
	}
	else{
		const $ = cheerio.load(data);
		$('table.product-detail-table > tbody > tr').each((i,elem) => {

			let Selling_Collection = $(elem).find('p:nth-child(1)>b').text();
			let Collection = $(elem).find('p:nth-child(2)>b').text();
			let Style = $(elem).find('p:nth-child(3)>b').text();
			let Pearl_Type = $(elem).find('p:nth-child(4)>b').text();
			let Pearl_Size = $(elem).find('p:nth-child(5)>b').text();
			let Quality = $(elem).find('p:nth-child(6)>b').text();
			let Stone_Type = $(elem).find('p:nth-child(7)>b').text();
			let Metals = $(elem).find('p:nth-child(8)>b').text();
			let Notes = $(elem).find('p:nth-child(9)>b').text();
			let Additional_Notes = $(elem).find('p:nth-child(10)>b').text();
			let MSRP = $(elem).find('p:nth-child(11)>b').text();
			let Quantity = $(elem).find('p:nth-child(12)>b').text();

			let metadata = {
				Selling_Collection:Selling_Collection,
				Collection:Collection,
				Style:Style,
				Pearl_Type:Pearl_Type,
				Pearl_Size:Pearl_Size,
				Quality:Quality,
				Stone_Type:Stone_Type,
				Metals:Metals,
				Notes:Notes,
				Additional_Notes:Additional_Notes,
				MSRP:MSRP,
				Quantity:Quantity
			}
			products.push(metadata);
		})
	}
	console.log(products);
});

