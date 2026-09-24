
document.addEventListener("DOMContentLoaded",()=>{
 const p=document.getElementById("preloader");if(p)window.addEventListener("load",()=>{setTimeout(()=>{p.style.opacity=0;setTimeout(()=>p.remove(),450)},300)});
 const top=document.getElementById("backTop");if(top){addEventListener("scroll",()=>top.classList.toggle("show",scrollY>450));top.onclick=()=>scrollTo({top:0,behavior:"smooth"})}
 const f=document.getElementById("enquiryForm");if(f)f.addEventListener("submit",e=>{e.preventDefault();const v=id=>document.getElementById(id)?.value.trim()||"";const m=`Hello CAR SPORT ACCESSORIES,\n\nI would like to request an enquiry.\n\nName: ${v("enquiryName")}\nPhone: ${v("enquiryPhone")}\nEmail: ${v("enquiryEmail")||"Not provided"}\nService: ${v("enquiryService")}\nPreferred Date: ${v("enquiryDate")||"Not provided"}\nMessage: ${v("enquiryMessage")}`;open("https://wa.me/971553747077?text="+encodeURIComponent(m),"_blank");const x=document.getElementById("enquiryModal");if(x&&window.bootstrap)bootstrap.Modal.getOrCreateInstance(x).hide();f.reset()})
});
