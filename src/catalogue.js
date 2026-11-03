// Illustrative range only. Confirm SKUs, specifications, availability and prices with DL Rolls Ltd.
export const categories=[
 {id:'toilet-paper',name:'Toilet paper',short:'Toilet rolls',image:'toilet-colour.webp',description:'A little everyday comfort. From household packs to business-sized cases.',tone:'sage',icon:'roll'},
 {id:'kitchen-rolls',name:'Kitchen rolls',short:'Kitchen rolls',image:'kitchen-colour.webp',description:'For spills, splashes and everything in between. Find your everyday essentials.',tone:'peach',icon:'kitchen'},
 {id:'wipes',name:'Wipes',short:'Wipes',image:'wipes-colour.webp',description:'Convenient packs for everyday clean-ups. Choose a format that fits your routine.',tone:'blue',icon:'wipes'}
];
const rows=[
 ['Andrex','Classic Clean Toilet Tissue','toilet-paper',800,9,'rolls',2,'Everyday'],
 ['Cushelle','Original Toilet Tissue','toilet-paper',1000,9,'rolls',2,'Everyday'],
 ['Nicky','Elite Toilet Tissue','toilet-paper',1200,18,'rolls',3,'Value pack'],
 ['DL Rolls','Everyday White Toilet Tissue','toilet-paper',1500,24,'rolls',2,'Value pack'],
 ['Andrex','Family Toilet Tissue Pack','toilet-paper',2500,24,'rolls',2,'Family pack'],
 ['Cushelle','Comfort Toilet Tissue Case','toilet-paper',4500,24,'rolls',3,'Larger pack'],
 ['Regina','Soft Toilet Tissue Case','toilet-paper',5000,40,'rolls',3,'Bulk pack'],
 ['Tork','Conventional Toilet Tissue Case','toilet-paper',5500,36,'rolls',2,'Business pack'],
 ['DL Rolls','Business Toilet Tissue Bundle','toilet-paper',6500,120,'rolls',2,'Bulk pack'],
 ['Tork','Workplace Toilet Tissue Bundle','toilet-paper',6500,240,'rolls',2,'Bulk pack'],
 ['DL Rolls','Everyday Kitchen Rolls','kitchen-rolls',500,2,'rolls',2,'Everyday'],
 ['Plenty','Original Kitchen Towel','kitchen-rolls',600,2,'rolls',2,'Everyday'],
 ['Regina','Kitchen Towel Pack','kitchen-rolls',700,3,'rolls',3,'Everyday'],
 ['Nicky','Kitchen Roll Value Pack','kitchen-rolls',900,4,'rolls',2,'Value pack'],
 ['DL Rolls','Household Kitchen Roll Pack','kitchen-rolls',1100,12,'rolls',2,'Value pack'],
 ['Plenty','Family Kitchen Towel Pack','kitchen-rolls',1500,12,'rolls',2,'Family pack'],
 ['Regina','Kitchen Towel Case','kitchen-rolls',2500,12,'rolls',3,'Larger pack'],
 ['Tork','Kitchen Paper Case','kitchen-rolls',4500,24,'rolls',2,'Business pack'],
 ['DL Rolls','Catering Kitchen Roll Bundle','kitchen-rolls',5500,60,'rolls',2,'Bulk pack'],
 ['Tork','Workplace Kitchen Roll Bundle','kitchen-rolls',6500,96,'rolls',2,'Bulk pack'],
 ['DL Rolls','Everyday Surface Wipes','wipes',500,80,'wipes',null,'Everyday'],
 ['Flash','Multipurpose Wipes','wipes',700,60,'wipes',null,'Everyday'],
 ['Dettol','Surface Cleaning Wipes','wipes',800,72,'wipes',null,'Everyday'],
 ['DL Rolls','Surface Wipes Twin Pack','wipes',1000,160,'wipes',null,'Value pack'],
 ['Flash','Surface Wipes Multipack','wipes',1200,240,'wipes',null,'Value pack'],
 ['Dettol','Surface Wipes Family Pack','wipes',1500,288,'wipes',null,'Family pack'],
 ['DL Rolls','Surface Wipes Case','wipes',2500,800,'wipes',null,'Larger pack'],
 ['Flash','Workplace Wipes Case','wipes',4500,960,'wipes',null,'Business pack'],
 ['Dettol','Surface Wipes Business Bundle','wipes',5000,1440,'wipes',null,'Bulk pack'],
 ['DL Rolls','Workplace Wipes Bulk Bundle','wipes',6500,4000,'wipes',null,'Bulk pack']
];
export const products=rows.map((r,i)=>({id:'dl-'+(1001+i),sku:'DL'+(1001+i),brand:r[0],name:r[1],category:r[2],price:r[3],units:r[4],unit:r[5],ply:r[6],badge:r[7],featured:[0,3,5,11,14,21,22,26].includes(i),image:'dl-'+(1001+i)+'-colour.webp'}));
export const priceOptions=[...new Set(products.map(p=>p.price))].sort((a,b)=>a-b);
export const catalogueMaxPrice=priceOptions.at(-1);
export const brands=[...new Set(products.map(p=>p.brand))].sort();
export const money=pence=>new Intl.NumberFormat('en-GB',{style:'currency',currency:'GBP',minimumFractionDigits:0,maximumFractionDigits:0}).format(pence/100);
export function filterProducts({category='',query='',selectedBrands=[],maxPrice=catalogueMaxPrice,bulk=false,savedOnly=false,saved=[]}={}){
 const terms=query.trim().toLowerCase().split(/\s+/).filter(Boolean);
 return products.filter(p=>(!category||p.category===category)&&terms.every(term=>(p.brand+' '+p.name+' '+p.sku+' '+p.badge).toLowerCase().includes(term))&&(!selectedBrands.length||selectedBrands.includes(p.brand))&&p.price<=maxPrice&&(!bulk||p.badge==='Bulk pack')&&(!savedOnly||saved.includes(p.id)));
}
export function cleanBasket(value){
 if(!value||typeof value!=='object'||Array.isArray(value))return {};
 return Object.fromEntries(Object.entries(value).filter(([id,n])=>products.some(p=>p.id===id)&&Number.isInteger(n)&&n>0&&n<=99));
}
export function basketTotal(basket){return products.reduce((sum,p)=>sum+p.price*(basket[p.id]||0),0);}
export function basketCount(basket){return Object.values(basket).reduce((a,n)=>a+n,0);}
export const company={name:'DL Rolls Ltd',email:'dlrollsltd@hotmail.com',phone:'07851 931610',tel:'07851931610'};
