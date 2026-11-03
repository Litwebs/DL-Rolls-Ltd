import React,{useEffect,useState} from 'react';
import {Store,useStore} from './Store.jsx';
import {Header,Footer,CartDrawer,Empty,Icon} from './components.jsx';
import {products} from './catalogue.js';
import Home from './Home.jsx';
import Shop from './Shop.jsx';
import Product from './Product.jsx';
import Basket from './Basket.jsx';
import {Contact,About,Delivery,Privacy} from './Info.jsx';
function location(){const hash=window.location.hash.slice(1)||'/';const [path,search='']=hash.split('?');return {path:path||'/',search,params:new URLSearchParams(search)};}
function Layout(){const [route,setRoute]=useState(location);const {toast}=useStore();useEffect(()=>{const change=()=>setRoute(location());window.addEventListener('hashchange',change);return()=>window.removeEventListener('hashchange',change);},[]);
 useEffect(()=>{window.scrollTo({top:0,behavior:'instant'});const main=document.getElementById('main');main?.focus({preventScroll:true});let title=route.path.startsWith('/product/')?products.find(p=>p.id===route.path.split('/')[2])?.name:({'/':'Paper. Hygiene. Sorted.','/shop':'Shop the range','/enquiry-list':'Your enquiry list','/enquiry':'Prepare an enquiry','/about':'About us','/contact':'Get in touch','/delivery':'Ordering & delivery','/privacy':'Privacy & demo information'})[route.path];document.title=(title||'Explore the range')+' | DL Rolls Ltd';},[route.path,route.search]);
 useEffect(()=>{if(!('IntersectionObserver' in window)||window.matchMedia('(prefers-reduced-motion: reduce)').matches)return;document.documentElement.classList.add('motion-ready');const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}}),{threshold:0.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));return()=>observer.disconnect();},[route.path,route.search]);
 let page=route.path==='/'?<Home/>:route.path==='/shop'?<Shop route={route}/>:route.path.startsWith('/product/')?<Product key={route.path} id={route.path.split('/')[2]}/>:route.path==='/enquiry-list'?<Basket/>:route.path==='/enquiry'?<Basket enquiry/>:route.path==='/contact'?<Contact/>:route.path==='/about'?<About/>:route.path==='/delivery'?<Delivery/>:route.path==='/privacy'?<Privacy/>:<div className="container"><Empty title="A small detour.">That page isn’t here. Let’s get you back to the everyday essentials.</Empty></div>;
 return <><Header route={route}/><main id="main" tabIndex="-1" key={route.path} className="page-content">{page}</main><Footer/><CartDrawer/><div className={'toast '+(toast?'show':'')} role="status" aria-live="polite">{toast&&<><Icon name="check"/><span>{toast}</span></>}</div></>;
}
export default function App(){return <Store><Layout/></Store>;}
