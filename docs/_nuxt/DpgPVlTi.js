import"./Bw4jz61w.js";import{l as x}from"./BAi9PCvQ.js";import{m as _}from"./DBeXZoyG.js";import{b as T}from"./BP8fmk0i.js";import{s as S}from"./DlCmZf2e.js";import{y as H,z as R,o as B,n as U,A as k,u as E,c as O,w as r,V,a as i,b as M,d as N,e as P,g,h as I,i as z,j as $,p as D}from"./BiZ071Qn.js";import{s as C}from"./COR6sKHN.js";import{c as j}from"./Cc3OSVma.js";import{r as F}from"./CNwjvqi1.js";import{a as q,b as Q}from"./CrThiacV.js";import{p as Y,t as u,d as G}from"./D0kzHlpo.js";import"./5voVPcsN.js";import"./yaaAvkcE.js";var J=new Array(3).concat("deebf79ecae13182bd","eff3ffbdd7e76baed62171b5","eff3ffbdd7e76baed63182bd08519c","eff3ffc6dbef9ecae16baed63182bd08519c","eff3ffc6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b5084594","f7fbffdeebf7c6dbef9ecae16baed64292c62171b508519c08306b").map(j);const X=F(J),K={__name:"MostWinsChart",props:{data:{type:Array,required:!0}},setup(a){const m=a,l=k(null);function e(){const s=l.value;if(!s||!m.data.length)return;s.innerHTML="";const n=m.data,w=s.clientWidth||800,A=26,o={top:10,right:56,bottom:24,left:84},L=w-o.left-o.right,h=n.length*A,f=C(s).append("svg").attr("width",w).attr("height",h+o.top+o.bottom).append("g").attr("transform",`translate(${o.left},${o.top})`),b=x().domain([0,_(n,t=>t.total_wins)]).nice().range([0,L]),d=T().domain(n.map(t=>t.team_abbr)).range([0,h]).padding(.3),W=S(X).domain([0,_(n,t=>t.total_wins)]);f.append("g").call(q(b).ticks(6).tickSizeOuter(0)).attr("transform",`translate(0,${h})`),f.append("g").call(Q(d).tickSizeOuter(0));const v=f.selectAll("rect").data(n).join("rect").attr("y",t=>d(t.team_abbr)).attr("height",d.bandwidth()).attr("width",t=>b(t.total_wins)).attr("fill",t=>W(t.total_wins)).attr("rx",3);f.selectAll("text.val").data(n).join("text").attr("class","val").attr("x",t=>b(t.total_wins)+6).attr("y",t=>d(t.team_abbr)+d.bandwidth()/2).attr("dy","0.35em").attr("font-size","12px").text(t=>t.total_wins);const y=C(s).append("div").style("position","absolute").style("opacity",0).style("pointer-events","none").style("background","rgba(0,0,0,0.88)").style("color","#fff").style("padding","8px 12px").style("border-radius","6px").style("font-size","12px").style("z-index",10);v.on("mousemove",function(t,p){y.style("opacity",1).html(`<strong>${p.team_name}</strong><br>Home: ${p.home_wins} · Away: ${p.away_wins}<br>Total: ${p.total_wins}`).style("left",t.offsetX+12+"px").style("top",t.offsetY-10+"px")}).on("mouseleave",()=>y.style("opacity",0))}const c=()=>e();return H(()=>{e(),window.addEventListener("resize",c)}),R(()=>{window.removeEventListener("resize",c)}),(s,n)=>(B(),U("div",{class:"chart-wrap",ref_key:"el",ref:l},null,512))}},Z=`team_abbr,team_name,home_wins,away_wins,total_wins
MUN,Manchester United,448,328,776
ARS,Arsenal,425,298,723
LIV,Liverpool,415,281,696
CHE,Chelsea,391,292,683
MCI,Manchester City,341,237,578
TOT,Tottenham Hotspur,345,216,561
EVE,Everton,294,171,465
NEW,Newcastle United,299,156,455
AVL,Aston Villa,255,176,431
WHU,West Ham United,242,139,381
SOU,Southampton,181,101,282
BLA,Blackburn Rovers,169,93,262
LEE,Leeds United,145,91,236
LEI,Leicester City,134,90,224
FUL,Fulham,155,65,220
CRY,Crystal Palace,102,92,194
SUN,Sunderland,108,60,168
MID,Middlesbrough,110,55,165
BOL,Bolton Wanderers,93,56,149
WOL,Wolverhampton Wanderers,81,48,129
WBA,West Bromwich Albion,76,41,117
STO,Stoke City,81,35,116
BHA,Brighton and Hove Albion,64,47,111
NFO,Nottingham Forest,61,48,109
BOU,Bournemouth,62,46,108
SHW,Sheffield Wednesday,63,38,101
COV,Coventry City,65,35,100
NOR,Norwich City,66,33,99
WIM,Wimbledon,62,37,99
CHA,Charlton Athletic,58,35,93
BUR,Burnley,56,36,92
WIG,Wigan Athletic,48,37,85
SWA,Swansea City,51,31,82
QPR,Queens Park Rangers,51,30,81
POR,Portsmouth,54,25,79
BIR,Birmingham City,50,23,73
WAT,Watford,45,28,73
BRE,Brentford,41,29,70
DER,Derby County,48,20,68
IPS,Ipswich Town,37,26,63
SHU,Sheffield United,40,16,56
HUL,Hull City,30,13,43
REA,Reading,23,9,32
OLD,Oldham Athletic,15,7,22
CAR,Cardiff City,11,6,17
BRA,Bradford City,10,4,14
HUD,Huddersfield Town,8,4,12
BAR,Barnsley,7,3,10
BPL,Blackpool,5,5,10
LUT,Luton Town,4,2,6
SWI,Swindon Town,4,1,5
`,tt=Y(Z,a=>({team_abbr:a.team_abbr,team_name:a.team_name,home_wins:u(a,"home_wins"),away_wins:u(a,"away_wins"),total_wins:u(a,"total_wins")})),bt={__name:"most-wins",setup(a){E({title:"Premier League Teams With the Most Wins",meta:[{name:"description",content:"All-time total wins by Premier League team, split by home and away, ranked most to least."}],script:[{type:"application/ld+json",innerHTML:JSON.stringify(G({name:"Premier League Total Wins by Team Dataset",description:"Total Premier League wins for every club since 1992, split by home and away, ranked most to least.",path:"/most-wins",csv:"wins.csv",keywords:["wins","home and away"]}))}]});const m=D(()=>[...tt].sort((l,e)=>e.total_wins-l.total_wins));return(l,e)=>{const c=K;return B(),O(V,null,{default:r(()=>[i(M,{cols:"12",md:"10","offset-md":"1"},{default:r(()=>[i(N,null,{default:r(()=>[i(P,{tag:"h1"},{default:r(()=>[...e[0]||(e[0]=[g("Total Wins by Team",-1)])]),_:1}),i(I,null,{default:r(()=>[...e[1]||(e[1]=[g("All 35 seasons · most wins at top",-1)])]),_:1}),i(z,null,{default:r(()=>[e[2]||(e[2]=$("p",{class:"mb-4"}," Manchester United are the only club in Premier League history to pass 700 wins, sitting on 775, 447 of them at home, the most any team has managed. Arsenal (720) and Liverpool (694) make up the chasing pack, with Chelsea (681) just behind. Each bar splits a club's record into home and away, so you can see which sides built their success at home and which travelled well. ",-1)),i(c,{data:m.value},null,8,["data"])]),_:1})]),_:1})]),_:1})]),_:1})}}};export{bt as default};
