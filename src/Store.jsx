import React,{createContext,useContext,useEffect,useState} from 'react';
import {products,cleanBasket,basketTotal,basketCount} from './catalogue.js';
const Context=createContext(null);
function read(key,fallback){try{return JSON.parse(localStorage.getItem(key))??fallback;}catch{return fallback;}}
export function Store({children}){
 const [basket,setBasket]=useState(()=>cleanBasket(read('dl-rolls-basket-v1',{})));
 const [saved,setSaved]=useState(()=>{const v=read('dl-rolls-saved-v1',[]);return Array.isArray(v)?[...new Set(v.filter(id=>products.some(p=>p.id===id)))]:[];});
 const [toast,setToast]=useState(''),[drawer,setDrawer]=useState(false);
 useEffect(()=>{try{localStorage.setItem('dl-rolls-basket-v1',JSON.stringify(basket));}catch{}},[basket]);
 useEffect(()=>{try{localStorage.setItem('dl-rolls-saved-v1',JSON.stringify(saved));}catch{}},[saved]);
 useEffect(()=>{if(!toast)return;const t=setTimeout(()=>setToast(''),3500);return()=>clearTimeout(t);},[toast]);
 function add(id,n=1){const p=products.find(x=>x.id===id);if(!p)return;setBasket(v=>({...v,[id]:Math.min(99,(v[id]||0)+Math.max(1,Math.min(99,n)))}));setToast(p.name+' added to your enquiry list');}
 function quantity(id,n){if(!Number.isFinite(n))return;setBasket(v=>{const next={...v};if(n<=0)delete next[id];else next[id]=Math.min(99,Math.round(n));return next;});}
 function toggleSaved(id){setSaved(v=>v.includes(id)?v.filter(x=>x!==id):[...v,id]);}
 return <Context.Provider value={{basket,saved,toast,drawer,setDrawer,setToast,add,quantity,toggleSaved,total:basketTotal(basket),count:basketCount(basket)}}>{children}</Context.Provider>;
}
export const useStore=()=>useContext(Context);
