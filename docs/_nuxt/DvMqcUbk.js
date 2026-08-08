import{a as O,m as R,c as M,d as qe,e as le,V as ie,f as ee,b as be,g as Se,h as Ye,i as K,j as Ae,k as ze,l as ge,n as _e,R as de,o as Ke,p as Je,u as Ze,q as Xe,r as en,s as nn,t as tn,v as an,w as sn,x as rn,y as on,z as ln,A as dn}from"./DI_waHUv.js";import{j as I,s as un,b as d,n as k,k as w,l as N,a as v,F as ue,t as ce,I as G,S as cn,v as mn,x as Ue,y as te,h as We,z as me,A as ne,i as L,q as W,B as $,C as hn,D as Cn,p as Le,E as yn,G as he,T as fn,m as Ee,H as Be,J as vn,K as bn,L as we,M as x,N as ae}from"./ChkcLlDk.js";var Ce={},J={},Z=34,F=10,X=13;function pe(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function Sn(e,t){var n=pe(e);return function(a,s){return t(n(a),s,e)}}function ye(e){var t=Object.create(null),n=[];return e.forEach(function(a){for(var s in a)s in t||n.push(t[s]=s)}),n}function f(e,t){var n=e+"",a=n.length;return a<t?new Array(t-a+1).join(0)+n:n}function An(e){return e<0?"-"+f(-e,6):e>9999?"+"+f(e,6):f(e,4)}function gn(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),a=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":An(e.getUTCFullYear())+"-"+f(e.getUTCMonth()+1,2)+"-"+f(e.getUTCDate(),2)+(s?"T"+f(t,2)+":"+f(n,2)+":"+f(a,2)+"."+f(s,3)+"Z":a?"T"+f(t,2)+":"+f(n,2)+":"+f(a,2)+"Z":n||t?"T"+f(t,2)+":"+f(n,2)+"Z":"")}function _n(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function a(r,u){var g,h,c=s(r,function(y,_){if(g)return g(y,_-1);h=y,g=u?Sn(y,u):pe(y)});return c.columns=h||[],c}function s(r,u){var g=[],h=r.length,c=0,y=0,_,S=h<=0,C=!1;r.charCodeAt(h-1)===F&&--h,r.charCodeAt(h-1)===X&&--h;function V(){if(S)return J;if(C)return C=!1,Ce;var B,H=c,U;if(r.charCodeAt(H)===Z){for(;c++<h&&r.charCodeAt(c)!==Z||r.charCodeAt(++c)===Z;);return(B=c)>=h?S=!0:(U=r.charCodeAt(c++))===F?C=!0:U===X&&(C=!0,r.charCodeAt(c)===F&&++c),r.slice(H+1,B-1).replace(/""/g,'"')}for(;c<h;){if((U=r.charCodeAt(B=c++))===F)C=!0;else if(U===X)C=!0,r.charCodeAt(c)===F&&++c;else if(U!==n)continue;return r.slice(H,B)}return S=!0,r.slice(H,h)}for(;(_=V())!==J;){for(var A=[];_!==Ce&&_!==J;)A.push(_),_=V();u&&(A=u(A,y++))==null||g.push(A)}return g}function o(r,u){return r.map(function(g){return u.map(function(h){return E(g[h])}).join(e)})}function m(r,u){return u==null&&(u=ye(r)),[u.map(E).join(e)].concat(o(r,u)).join(`
`)}function i(r,u){return u==null&&(u=ye(r)),o(r,u).join(`
`)}function l(r){return r.map(b).join(`
`)}function b(r){return r.map(E).join(e)}function E(r){return r==null?"":r instanceof Date?gn(r):t.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:a,parseRows:s,format:m,formatBody:i,formatRows:l,formatRow:b,formatValue:E}}var Un=_n(","),Ne=Un.parse;const Wn=`total_matches,total_unique_teams,total_goals,last_updated
13166,51,35478,2026-08-08
`,Ln=`team_abbr,team_name,home_wins,away_wins,total_wins
MUN,Manchester United,447,328,775
ARS,Arsenal,423,296,719
LIV,Liverpool,415,279,694
CHE,Chelsea,390,291,681
MCI,Manchester City,338,235,573
TOT,Tottenham Hotspur,345,216,561
EVE,Everton,292,171,463
NEW,Newcastle United,298,155,453
AVL,Aston Villa,255,175,430
WHU,West Ham United,242,139,381
SOU,Southampton,181,101,282
BLA,Blackburn Rovers,169,93,262
LEE,Leeds United,144,90,234
LEI,Leicester City,134,90,224
FUL,Fulham,155,65,220
CRY,Crystal Palace,102,91,193
SUN,Sunderland,107,60,167
MID,Middlesbrough,110,55,165
BOL,Bolton Wanderers,93,56,149
WOL,Wolverhampton Wanderers,81,48,129
WBA,West Bromwich Albion,76,41,117
STO,Stoke City,81,35,116
BHA,Brighton and Hove Albion,62,46,108
BOU,Bournemouth,62,46,108
NFO,Nottingham Forest,61,47,108
SHW,Sheffield Wednesday,63,38,101
COV,Coventry City,65,34,99
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
BRE,Brentford,39,29,68
DER,Derby County,48,20,68
IPS,Ipswich Town,36,25,61
SHU,Sheffield United,40,16,56
HUL,Hull City,29,12,41
REA,Reading,23,9,32
OLD,Oldham Athletic,15,7,22
CAR,Cardiff City,11,6,17
BRA,Bradford City,10,4,14
HUD,Huddersfield Town,8,4,12
BAR,Barnsley,7,3,10
BPL,Blackpool,5,5,10
LUT,Luton Town,4,2,6
SWI,Swindon Town,4,1,5
`,En=`season_label,team_count,matches_played,avg_matches_per_team
1992-93,22,462,42.0
1993-94,22,462,42.0
1994-95,22,462,42.0
1995-96,20,380,38.0
1996-97,20,380,38.0
1997-98,20,380,38.0
1998-99,20,380,38.0
1999-00,20,380,38.0
2000-01,20,380,38.0
2001-02,20,380,38.0
2002-03,20,380,38.0
2003-04,20,380,38.0
2004-05,20,380,38.0
2005-06,20,380,38.0
2006-07,20,380,38.0
2007-08,20,380,38.0
2008-09,20,380,38.0
2009-10,20,380,38.0
2010-11,20,380,38.0
2011-12,20,380,38.0
2012-13,20,380,38.0
2013-14,20,380,38.0
2014-15,20,380,38.0
2015-16,20,380,38.0
2016-17,20,380,38.0
2017-18,20,380,38.0
2018-19,20,380,38.0
2019-20,20,380,38.0
2020-21,20,380,38.0
2021-22,20,380,38.0
2022-23,20,380,38.0
2023-24,20,380,38.0
2024-25,20,380,38.0
2025-26,20,380,38.0
`,Bn=`season_label,team_abbr,team_name,avg_home_attendance
1992-93,ARS,Arsenal,24403.0
1992-93,AVL,Aston Villa,29594.0
1992-93,BLA,Blackburn Rovers,16247.0
1992-93,CHE,Chelsea,18754.0
1992-93,COV,Coventry City,15024.0
1992-93,CRY,Crystal Palace,15726.0
1992-93,EVE,Everton,20457.0
1992-93,IPS,Ipswich Town,18185.0
1992-93,LEE,Leeds United,29229.0
1992-93,LIV,Liverpool,37009.0
1992-93,MCI,Manchester City,24698.0
1992-93,MID,Middlesbrough,16722.0
1992-93,MUN,Manchester United,35132.0
1992-93,NFO,Nottingham Forest,21957.0
1992-93,NOR,Norwich City,16253.0
1992-93,OLD,Oldham Athletic,12862.0
1992-93,QPR,Queens Park Rangers,14999.0
1992-93,SHU,Sheffield United,18799.0
1992-93,SHW,Sheffield Wednesday,27264.0
1992-93,SOU,Southampton,15934.0
1992-93,TOT,Tottenham Hotspur,27878.0
1992-93,WIM,Wimbledon,8353.0
1993-94,ARS,Arsenal,30492.0
1993-94,AVL,Aston Villa,29065.0
1993-94,BLA,Blackburn Rovers,17332.0
1993-94,CHE,Chelsea,19211.0
1993-94,COV,Coventry City,13312.0
1993-94,EVE,Everton,23104.0
1993-94,IPS,Ipswich Town,16574.0
1993-94,LEE,Leeds United,34506.0
1993-94,LIV,Liverpool,38508.0
1993-94,MCI,Manchester City,26684.0
1993-94,MUN,Manchester United,44244.0
1993-94,NEW,Newcastle United,33792.0
1993-94,NOR,Norwich City,18179.0
1993-94,OLD,Oldham Athletic,12572.0
1993-94,QPR,Queens Park Rangers,14228.0
1993-94,SHU,Sheffield United,19562.0
1993-94,SHW,Sheffield Wednesday,27181.0
1993-94,SOU,Southampton,14756.0
1993-94,SWI,Swindon Town,15011.0
1993-94,TOT,Tottenham Hotspur,27251.0
1993-94,WHU,West Ham United,20598.0
1993-94,WIM,Wimbledon,10442.0
1994-95,ARS,Arsenal,35330.0
1994-95,AVL,Aston Villa,29761.0
1994-95,BLA,Blackburn Rovers,25271.0
1994-95,CHE,Chelsea,21062.0
1994-95,COV,Coventry City,15955.0
1994-95,CRY,Crystal Palace,14802.0
1994-95,EVE,Everton,31035.0
1994-95,IPS,Ipswich Town,16918.0
1994-95,LEE,Leeds United,32852.0
1994-95,LEI,Leicester City,20882.0
1994-95,LIV,Liverpool,33805.0
1994-95,MCI,Manchester City,21883.0
1994-95,MUN,Manchester United,42763.0
1994-95,NEW,Newcastle United,34552.0
1994-95,NFO,Nottingham Forest,24136.0
1994-95,NOR,Norwich City,20079.0
1994-95,QPR,Queens Park Rangers,15830.0
1994-95,SHW,Sheffield Wednesday,26451.0
1994-95,SOU,Southampton,15978.0
1994-95,TOT,Tottenham Hotspur,26245.0
1994-95,WHU,West Ham United,20406.0
1994-95,WIM,Wimbledon,12359.0
1995-96,ARS,Arsenal,37568.0
1995-96,AVL,Aston Villa,32772.0
1995-96,BLA,Blackburn Rovers,27552.0
1995-96,BOL,Bolton Wanderers,18823.0
1995-96,CHE,Chelsea,25581.0
1995-96,COV,Coventry City,18528.0
1995-96,EVE,Everton,35424.0
1995-96,LEE,Leeds United,32629.0
1995-96,LIV,Liverpool,39553.0
1995-96,MCI,Manchester City,27941.0
1995-96,MID,Middlesbrough,29257.0
1995-96,MUN,Manchester United,41681.0
1995-96,NEW,Newcastle United,36505.0
1995-96,NFO,Nottingham Forest,25916.0
1995-96,QPR,Queens Park Rangers,15672.0
1995-96,SHW,Sheffield Wednesday,24877.0
1995-96,SOU,Southampton,14822.0
1995-96,TOT,Tottenham Hotspur,30548.0
1995-96,WHU,West Ham United,22317.0
1995-96,WIM,Wimbledon,13230.0
1996-97,ARS,Arsenal,37826.0
1996-97,AVL,Aston Villa,36027.0
1996-97,BLA,Blackburn Rovers,24966.0
1996-97,CHE,Chelsea,27617.0
1996-97,COV,Coventry City,19613.0
1996-97,DER,Derby County,17889.0
1996-97,EVE,Everton,36188.0
1996-97,LEE,Leeds United,32118.0
1996-97,LEI,Leicester City,20184.0
1996-97,LIV,Liverpool,39774.0
1996-97,MID,Middlesbrough,29871.0
1996-97,MUN,Manchester United,55081.0
1996-97,NEW,Newcastle United,36414.0
1996-97,NFO,Nottingham Forest,24588.0
1996-97,SHW,Sheffield Wednesday,25714.0
1996-97,SOU,Southampton,15105.0
1996-97,SUN,Sunderland,20974.0
1996-97,TOT,Tottenham Hotspur,31067.0
1996-97,WHU,West Ham United,23209.0
1996-97,WIM,Wimbledon,15138.0
1997-98,ARS,Arsenal,38053.0
1997-98,AVL,Aston Villa,36031.0
1997-98,BAR,Barnsley,18443.0
1997-98,BLA,Blackburn Rovers,25253.0
1997-98,BOL,Bolton Wanderers,24352.0
1997-98,CHE,Chelsea,33387.0
1997-98,COV,Coventry City,19723.0
1997-98,CRY,Crystal Palace,21983.0
1997-98,DER,Derby County,29105.0
1997-98,EVE,Everton,35355.0
1997-98,LEE,Leeds United,34642.0
1997-98,LEI,Leicester City,20615.0
1997-98,LIV,Liverpool,40628.0
1997-98,MUN,Manchester United,55166.0
1997-98,NEW,Newcastle United,36671.0
1997-98,SHW,Sheffield Wednesday,28706.0
1997-98,SOU,Southampton,15159.0
1997-98,TOT,Tottenham Hotspur,29144.0
1997-98,WHU,West Ham United,25075.0
1997-98,WIM,Wimbledon,16666.0
1998-99,ARS,Arsenal,38024.0
1998-99,AVL,Aston Villa,36937.0
1998-99,BLA,Blackburn Rovers,25761.0
1998-99,CHA,Charlton Athletic,19816.0
1998-99,CHE,Chelsea,34754.0
1998-99,COV,Coventry City,20773.0
1998-99,DER,Derby County,29193.0
1998-99,EVE,Everton,36202.0
1998-99,LEE,Leeds United,35807.0
1998-99,LEI,Leicester City,20469.0
1998-99,LIV,Liverpool,43321.0
1998-99,MID,Middlesbrough,34386.0
1998-99,MUN,Manchester United,55188.0
1998-99,NEW,Newcastle United,36692.0
1998-99,NFO,Nottingham Forest,24415.0
1998-99,SHW,Sheffield Wednesday,26745.0
1998-99,SOU,Southampton,15140.0
1998-99,TOT,Tottenham Hotspur,34152.0
1998-99,WHU,West Ham United,25639.0
1998-99,WIM,Wimbledon,18243.0
1999-00,ARS,Arsenal,38033.0
1999-00,AVL,Aston Villa,29952.0
1999-00,BRA,Bradford City,18030.0
1999-00,CHE,Chelsea,34532.0
1999-00,COV,Coventry City,20804.0
1999-00,DER,Derby County,29351.0
1999-00,EVE,Everton,32185.0
1999-00,LEE,Leeds United,39022.0
1999-00,LEI,Leicester City,20489.0
1999-00,LIV,Liverpool,43268.0
1999-00,MID,Middlesbrough,32518.0
1999-00,MUN,Manchester United,53689.0
1999-00,NEW,Newcastle United,36163.0
1999-00,SHW,Sheffield Wednesday,24568.0
1999-00,SOU,Southampton,15340.0
1999-00,SUN,Sunderland,40540.0
1999-00,TOT,Tottenham Hotspur,34928.0
1999-00,WAT,Watford,19276.0
1999-00,WHU,West Ham United,25510.0
1999-00,WIM,Wimbledon,18266.0
2000-01,ARS,Arsenal,37974.0
2000-01,AVL,Aston Villa,31521.0
2000-01,BRA,Bradford City,18511.0
2000-01,CHA,Charlton Athletic,20021.0
2000-01,CHE,Chelsea,34700.0
2000-01,COV,Coventry City,20582.0
2000-01,DER,Derby County,28551.0
2000-01,EVE,Everton,34131.0
2000-01,IPS,Ipswich Town,22459.0
2000-01,LEE,Leeds United,38974.0
2000-01,LEI,Leicester City,20452.0
2000-01,LIV,Liverpool,43699.0
2000-01,MCI,Manchester City,34058.0
2000-01,MID,Middlesbrough,30748.0
2000-01,MUN,Manchester United,67490.0
2000-01,NEW,Newcastle United,51309.0
2000-01,SOU,Southampton,15115.0
2000-01,SUN,Sunderland,46831.0
2000-01,TOT,Tottenham Hotspur,35195.0
2000-01,WHU,West Ham United,26223.0
2001-02,ARS,Arsenal,38055.0
2001-02,AVL,Aston Villa,35012.0
2001-02,BLA,Blackburn Rovers,25976.0
2001-02,BOL,Bolton Wanderers,25098.0
2001-02,CHA,Charlton Athletic,24165.0
2001-02,CHE,Chelsea,39030.0
2001-02,DER,Derby County,29816.0
2001-02,EVE,Everton,33582.0
2001-02,FUL,Fulham,19343.0
2001-02,IPS,Ipswich Town,24420.0
2001-02,LEE,Leeds United,39789.0
2001-02,LEI,Leicester City,19913.0
2001-02,LIV,Liverpool,43389.0
2001-02,MID,Middlesbrough,28461.0
2001-02,MUN,Manchester United,67558.0
2001-02,NEW,Newcastle United,51373.0
2001-02,SOU,Southampton,30633.0
2001-02,SUN,Sunderland,46744.0
2001-02,TOT,Tottenham Hotspur,35001.0
2001-02,WHU,West Ham United,31569.0
2002-03,ARS,Arsenal,38042.0
2002-03,AVL,Aston Villa,34975.0
2002-03,BIR,Birmingham City,28831.0
2002-03,BLA,Blackburn Rovers,26226.0
2002-03,BOL,Bolton Wanderers,25012.0
2002-03,CHA,Charlton Athletic,26258.0
2002-03,CHE,Chelsea,39784.0
2002-03,EVE,Everton,38504.0
2002-03,FUL,Fulham,15787.0
2002-03,LEE,Leeds United,39120.0
2002-03,LIV,Liverpool,43243.0
2002-03,MCI,Manchester City,34565.0
2002-03,MID,Middlesbrough,31025.0
2002-03,MUN,Manchester United,67602.0
2002-03,NEW,Newcastle United,51923.0
2002-03,SOU,Southampton,30680.0
2002-03,SUN,Sunderland,39698.0
2002-03,TOT,Tottenham Hotspur,35897.0
2002-03,WBA,West Bromwich Albion,26731.0
2002-03,WHU,West Ham United,34432.0
2003-04,ARS,Arsenal,38079.0
2003-04,AVL,Aston Villa,36622.0
2003-04,BIR,Birmingham City,29078.0
2003-04,BLA,Blackburn Rovers,24376.0
2003-04,BOL,Bolton Wanderers,26718.0
2003-04,CHA,Charlton Athletic,26278.0
2003-04,CHE,Chelsea,41272.0
2003-04,EVE,Everton,38837.0
2003-04,FUL,Fulham,16240.0
2003-04,LEE,Leeds United,36666.0
2003-04,LEI,Leicester City,30983.0
2003-04,LIV,Liverpool,42677.0
2003-04,MCI,Manchester City,46830.0
2003-04,MID,Middlesbrough,30395.0
2003-04,MUN,Manchester United,67641.0
2003-04,NEW,Newcastle United,51966.0
2003-04,POR,Portsmouth,20054.0
2003-04,SOU,Southampton,31717.0
2003-04,TOT,Tottenham Hotspur,34872.0
2003-04,WOL,Wolverhampton Wanderers,28864.0
2004-05,ARS,Arsenal,37979.0
2004-05,AVL,Aston Villa,37354.0
2004-05,BIR,Birmingham City,28760.0
2004-05,BLA,Blackburn Rovers,22315.0
2004-05,BOL,Bolton Wanderers,25953.0
2004-05,CHA,Charlton Athletic,26384.0
2004-05,CHE,Chelsea,41907.0
2004-05,CRY,Crystal Palace,24192.0
2004-05,EVE,Everton,36819.0
2004-05,FUL,Fulham,19839.0
2004-05,LIV,Liverpool,42550.0
2004-05,MCI,Manchester City,45259.0
2004-05,MID,Middlesbrough,31938.0
2004-05,MUN,Manchester United,67871.0
2004-05,NEW,Newcastle United,51846.0
2004-05,NOR,Norwich City,24350.0
2004-05,POR,Portsmouth,20087.0
2004-05,SOU,Southampton,30610.0
2004-05,TOT,Tottenham Hotspur,35931.0
2004-05,WBA,West Bromwich Albion,26044.0
2005-06,ARS,Arsenal,38184.0
2005-06,AVL,Aston Villa,34112.0
2005-06,BIR,Birmingham City,27390.0
2005-06,BLA,Blackburn Rovers,21015.0
2005-06,BOL,Bolton Wanderers,25201.0
2005-06,CHA,Charlton Athletic,26171.0
2005-06,CHE,Chelsea,41859.0
2005-06,EVE,Everton,36857.0
2005-06,FUL,Fulham,20662.0
2005-06,LIV,Liverpool,44897.0
2005-06,MCI,Manchester City,42856.0
2005-06,MID,Middlesbrough,28467.0
2005-06,MUN,Manchester United,68765.0
2005-06,NEW,Newcastle United,52134.0
2005-06,POR,Portsmouth,19868.0
2005-06,SUN,Sunderland,33904.0
2005-06,TOT,Tottenham Hotspur,36036.0
2005-06,WBA,West Bromwich Albion,25203.0
2005-06,WHU,West Ham United,33225.0
2005-06,WIG,Wigan Athletic,20886.0
2006-07,ARS,Arsenal,60046.0
2006-07,AVL,Aston Villa,36238.0
2006-07,BLA,Blackburn Rovers,21262.0
2006-07,BOL,Bolton Wanderers,23586.0
2006-07,CHA,Charlton Athletic,26195.0
2006-07,CHE,Chelsea,41551.0
2006-07,EVE,Everton,36739.0
2006-07,FUL,Fulham,22241.0
2006-07,LIV,Liverpool,44801.0
2006-07,MCI,Manchester City,39988.0
2006-07,MID,Middlesbrough,27729.0
2006-07,MUN,Manchester United,75821.0
2006-07,NEW,Newcastle United,50974.0
2006-07,POR,Portsmouth,19843.0
2006-07,REA,Reading,23764.0
2006-07,SHU,Sheffield United,30680.0
2006-07,TOT,Tottenham Hotspur,35803.0
2006-07,WAT,Watford,18892.0
2006-07,WHU,West Ham United,34586.0
2006-07,WIG,Wigan Athletic,18437.0
2007-08,ARS,Arsenal,60114.0
2007-08,BIR,Birmingham City,27300.0
2007-08,BLA,Blackburn Rovers,23212.0
2007-08,CHE,Chelsea,41715.0
2007-08,DER,Derby County,32844.0
2007-08,FUL,Fulham,20340.0
2007-08,MID,Middlesbrough,27613.0
2007-08,MUN,Manchester United,75633.0
2007-08,REA,Reading,24058.0
2007-08,WHU,West Ham United,34909.0
2008-09,ARS,Arsenal,60027.0
2008-09,AVL,Aston Villa,40545.0
2008-09,BLA,Blackburn Rovers,23521.0
2008-09,BOL,Bolton Wanderers,22808.0
2008-09,CHE,Chelsea,41604.0
2008-09,EVE,Everton,36013.0
2008-09,FUL,Fulham,24530.0
2008-09,HUL,Hull City,24816.0
2008-09,LIV,Liverpool,44031.0
2008-09,MCI,Manchester City,43065.0
2008-09,MID,Middlesbrough,28504.0
2008-09,MUN,Manchester United,75268.0
2008-09,NEW,Newcastle United,50177.0
2008-09,POR,Portsmouth,19952.0
2008-09,STO,Stoke City,26824.0
2008-09,SUN,Sunderland,40491.0
2008-09,TOT,Tottenham Hotspur,35945.0
2008-09,WBA,West Bromwich Albion,25704.0
2008-09,WHU,West Ham United,34415.0
2008-09,WIG,Wigan Athletic,18697.0
2009-10,ARS,Arsenal,59918.0
2009-10,AVL,Aston Villa,38573.0
2009-10,BIR,Birmingham City,25246.0
2009-10,BLA,Blackburn Rovers,25428.0
2009-10,BOL,Bolton Wanderers,21881.0
2009-10,BUR,Burnley,20672.0
2009-10,CHE,Chelsea,41423.0
2009-10,EVE,Everton,36581.0
2009-10,FUL,Fulham,23909.0
2009-10,HUL,Hull City,24358.0
2009-10,LIV,Liverpool,42864.0
2009-10,MCI,Manchester City,45513.0
2009-10,MUN,Manchester United,74864.0
2009-10,POR,Portsmouth,18249.0
2009-10,STO,Stoke City,27291.0
2009-10,SUN,Sunderland,40510.0
2009-10,TOT,Tottenham Hotspur,35794.0
2009-10,WHU,West Ham United,33683.0
2009-10,WIG,Wigan Athletic,18006.0
2009-10,WOL,Wolverhampton Wanderers,28366.0
2010-11,ARS,Arsenal,60025.0
2010-11,AVL,Aston Villa,37194.0
2010-11,BIR,Birmingham City,25462.0
2010-11,BLA,Blackburn Rovers,25000.0
2010-11,BOL,Bolton Wanderers,22870.0
2010-11,BPL,Blackpool,15780.0
2010-11,CHE,Chelsea,41435.0
2010-11,EVE,Everton,36039.0
2010-11,FUL,Fulham,25043.0
2010-11,LIV,Liverpool,42820.0
2010-11,MCI,Manchester City,45880.0
2010-11,MUN,Manchester United,75109.0
2010-11,NEW,Newcastle United,47718.0
2010-11,STO,Stoke City,26858.0
2010-11,SUN,Sunderland,40011.0
2010-11,TOT,Tottenham Hotspur,35704.0
2010-11,WBA,West Bromwich Albion,24683.0
2010-11,WHU,West Ham United,33427.0
2010-11,WIG,Wigan Athletic,16812.0
2010-11,WOL,Wolverhampton Wanderers,27696.0
2011-12,ARS,Arsenal,60000.0
2011-12,AVL,Aston Villa,33873.0
2011-12,BLA,Blackburn Rovers,22551.0
2011-12,BOL,Bolton Wanderers,23670.0
2011-12,CHE,Chelsea,41478.0
2011-12,EVE,Everton,33228.0
2011-12,FUL,Fulham,25293.0
2011-12,LIV,Liverpool,44253.0
2011-12,MCI,Manchester City,47045.0
2011-12,MUN,Manchester United,75387.0
2011-12,NEW,Newcastle United,49936.0
2011-12,NOR,Norwich City,26606.0
2011-12,QPR,Queens Park Rangers,17295.0
2011-12,STO,Stoke City,27226.0
2011-12,SUN,Sunderland,39095.0
2011-12,SWA,Swansea City,19946.0
2011-12,TOT,Tottenham Hotspur,36026.0
2011-12,WBA,West Bromwich Albion,24798.0
2011-12,WIG,Wigan Athletic,18634.0
2011-12,WOL,Wolverhampton Wanderers,25682.0
2012-13,ARS,Arsenal,60079.0
2012-13,AVL,Aston Villa,35060.0
2012-13,CHE,Chelsea,41462.0
2012-13,EVE,Everton,36356.0
2012-13,FUL,Fulham,25394.0
2012-13,LIV,Liverpool,44749.0
2012-13,MCI,Manchester City,46974.0
2012-13,MUN,Manchester United,75530.0
2012-13,NEW,Newcastle United,50517.0
2012-13,NOR,Norwich City,26672.0
2012-13,QPR,Queens Park Rangers,17779.0
2012-13,REA,Reading,23862.0
2012-13,SOU,Southampton,30874.0
2012-13,STO,Stoke City,26732.0
2012-13,SUN,Sunderland,40544.0
2012-13,SWA,Swansea City,20370.0
2012-13,TOT,Tottenham Hotspur,36030.0
2012-13,WBA,West Bromwich Albion,25360.0
2012-13,WHU,West Ham United,34720.0
2012-13,WIG,Wigan Athletic,19359.0
2013-14,ARS,Arsenal,60013.0
2013-14,AVL,Aston Villa,36081.0
2013-14,CAR,Cardiff City,27430.0
2013-14,CHE,Chelsea,41482.0
2013-14,CRY,Crystal Palace,24114.0
2013-14,EVE,Everton,37732.0
2013-14,FUL,Fulham,24977.0
2013-14,HUL,Hull City,24117.0
2013-14,LIV,Liverpool,44671.0
2013-14,MCI,Manchester City,47080.0
2013-14,MUN,Manchester United,75207.0
2013-14,NEW,Newcastle United,50395.0
2013-14,NOR,Norwich City,26805.0
2013-14,SOU,Southampton,30212.0
2013-14,STO,Stoke City,26137.0
2013-14,SUN,Sunderland,41090.0
2013-14,SWA,Swansea City,20407.0
2013-14,TOT,Tottenham Hotspur,35808.0
2013-14,WBA,West Bromwich Albion,25194.0
2013-14,WHU,West Ham United,34197.0
2014-15,ARS,Arsenal,59992.0
2014-15,AVL,Aston Villa,34133.0
2014-15,BUR,Burnley,19131.0
2014-15,CHE,Chelsea,41546.0
2014-15,CRY,Crystal Palace,24421.0
2014-15,EVE,Everton,38406.0
2014-15,HUL,Hull City,23557.0
2014-15,LEI,Leicester City,31693.0
2014-15,LIV,Liverpool,44659.0
2014-15,MCI,Manchester City,45365.0
2014-15,MUN,Manchester United,75335.0
2014-15,NEW,Newcastle United,50359.0
2014-15,QPR,Queens Park Rangers,17809.0
2014-15,SOU,Southampton,30652.0
2014-15,STO,Stoke City,27081.0
2014-15,SUN,Sunderland,43157.0
2014-15,SWA,Swansea City,20555.0
2014-15,TOT,Tottenham Hotspur,35728.0
2014-15,WBA,West Bromwich Albion,25064.0
2014-15,WHU,West Ham United,34871.0
2015-16,ARS,Arsenal,59944.0
2015-16,AVL,Aston Villa,33690.0
2015-16,BOU,Bournemouth,11189.0
2015-16,CHE,Chelsea,41500.0
2015-16,CRY,Crystal Palace,24636.0
2015-16,EVE,Everton,38124.0
2015-16,LEI,Leicester City,32021.0
2015-16,LIV,Liverpool,43910.0
2015-16,MCI,Manchester City,54041.0
2015-16,MUN,Manchester United,75279.0
2015-16,NEW,Newcastle United,49754.0
2015-16,NOR,Norwich City,26972.0
2015-16,SOU,Southampton,30751.0
2015-16,STO,Stoke City,27534.0
2015-16,SUN,Sunderland,43071.0
2015-16,SWA,Swansea City,20711.0
2015-16,TOT,Tottenham Hotspur,35776.0
2015-16,WAT,Watford,20594.0
2015-16,WBA,West Bromwich Albion,24631.0
2015-16,WHU,West Ham United,34910.0
2016-17,ARS,Arsenal,59957.0
2016-17,BOU,Bournemouth,11182.0
2016-17,BUR,Burnley,20558.0
2016-17,CHE,Chelsea,41508.0
2016-17,CRY,Crystal Palace,25161.0
2016-17,EVE,Everton,39310.0
2016-17,HUL,Hull City,20761.0
2016-17,LEI,Leicester City,31893.0
2016-17,LIV,Liverpool,53016.0
2016-17,MCI,Manchester City,54019.0
2016-17,MID,Middlesbrough,30449.0
2016-17,MUN,Manchester United,75290.0
2016-17,SOU,Southampton,30936.0
2016-17,STO,Stoke City,27433.0
2016-17,SUN,Sunderland,41287.0
2016-17,SWA,Swansea City,20619.0
2016-17,TOT,Tottenham Hotspur,31639.0
2016-17,WAT,Watford,20571.0
2016-17,WBA,West Bromwich Albion,23876.0
2016-17,WHU,West Ham United,56972.0
2017-18,ARS,Arsenal,59323.0
2017-18,BHA,Brighton and Hove Albion,30403.0
2017-18,BOU,Bournemouth,10641.0
2017-18,BUR,Burnley,20688.0
2017-18,CHE,Chelsea,41282.0
2017-18,CRY,Crystal Palace,25063.0
2017-18,EVE,Everton,38797.0
2017-18,HUD,Huddersfield Town,24032.0
2017-18,LEI,Leicester City,31636.0
2017-18,LIV,Liverpool,53049.0
2017-18,MCI,Manchester City,54070.0
2017-18,MUN,Manchester United,74976.0
2017-18,NEW,Newcastle United,51992.0
2017-18,SOU,Southampton,30794.0
2017-18,STO,Stoke City,29280.0
2017-18,SWA,Swansea City,20623.0
2017-18,TOT,Tottenham Hotspur,68052.0
2017-18,WAT,Watford,20231.0
2017-18,WBA,West Bromwich Albion,24520.0
2017-18,WHU,West Ham United,56885.0
2018-19,ARS,Arsenal,59899.0
2018-19,BHA,Brighton and Hove Albion,30426.0
2018-19,BOU,Bournemouth,10532.0
2018-19,BUR,Burnley,20534.0
2018-19,CAR,Cardiff City,31408.0
2018-19,CHE,Chelsea,40441.0
2018-19,CRY,Crystal Palace,25455.0
2018-19,EVE,Everton,39043.0
2018-19,FUL,Fulham,24371.0
2018-19,HUD,Huddersfield Town,23203.0
2018-19,LEI,Leicester City,31851.0
2018-19,LIV,Liverpool,52983.0
2018-19,MCI,Manchester City,54130.0
2018-19,MUN,Manchester United,74498.0
2018-19,NEW,Newcastle United,51121.0
2018-19,SOU,Southampton,30139.0
2018-19,TOT,Tottenham Hotspur,54216.0
2018-19,WAT,Watford,20016.0
2018-19,WHU,West Ham United,58336.0
2018-19,WOL,Wolverhampton Wanderers,31030.0
2019-20,ARS,Arsenal,60279.0
2019-20,AVL,Aston Villa,41661.0
2019-20,BHA,Brighton and Hove Albion,30358.0
2019-20,BOU,Bournemouth,10510.0
2019-20,BUR,Burnley,20260.0
2019-20,CHE,Chelsea,40563.0
2019-20,CRY,Crystal Palace,25060.0
2019-20,EVE,Everton,39150.0
2019-20,LEI,Leicester City,32061.0
2019-20,LIV,Liverpool,53143.0
2019-20,MCI,Manchester City,54219.0
2019-20,MUN,Manchester United,72726.0
2019-20,NEW,Newcastle United,48248.0
2019-20,NOR,Norwich City,27025.0
2019-20,SHU,Sheffield United,30869.0
2019-20,SOU,Southampton,29675.0
2019-20,TOT,Tottenham Hotspur,59384.0
2019-20,WAT,Watford,20837.0
2019-20,WHU,West Ham United,59896.0
2019-20,WOL,Wolverhampton Wanderers,31360.0
2025-26,ARS,Arsenal,60217.0
2025-26,AVL,Aston Villa,41977.0
2025-26,BHA,Brighton and Hove Albion,31379.0
2025-26,BOU,Bournemouth,11175.0
2025-26,BRE,Brentford,17132.0
2025-26,BUR,Burnley,21005.0
2025-26,CHE,Chelsea,39602.0
2025-26,CRY,Crystal Palace,25017.0
2025-26,EVE,Everton,52132.0
2025-26,FUL,Fulham,27228.0
2025-26,LEE,Leeds United,36695.0
2025-26,LIV,Liverpool,60389.0
2025-26,MCI,Manchester City,52730.0
2025-26,MUN,Manchester United,73975.0
2025-26,NEW,Newcastle United,52161.0
2025-26,NFO,Nottingham Forest,30425.0
2025-26,SUN,Sunderland,46546.0
2025-26,TOT,Tottenham Hotspur,61006.0
2025-26,WHU,West Ham United,62347.0
2025-26,WOL,Wolverhampton Wanderers,29835.0
`,wn=`team_abbr,team_name,matches_played,wins,draws,losses,points
MUN,Manchester United,1304,775,289,240,2614
ARS,Arsenal,1304,719,316,269,2473
LIV,Liverpool,1304,694,320,290,2402
CHE,Chelsea,1304,681,323,300,2366
TOT,Tottenham Hotspur,1304,561,309,434,1992
MCI,Manchester City,1114,573,239,302,1958
EVE,Everton,1304,463,366,475,1755
NEW,Newcastle United,1186,453,297,436,1656
AVL,Aston Villa,1190,430,328,432,1618
WHU,West Ham United,1148,381,289,478,1432
SOU,Southampton,962,282,254,426,1100
BLA,Blackburn Rovers,696,262,184,250,970
LEE,Leeds United,620,234,165,221,867
LEI,Leicester City,688,224,174,290,846
FUL,Fulham,722,220,185,317,845
CRY,Crystal Palace,654,193,177,284,756
SUN,Sunderland,646,167,171,308,672
MID,Middlesbrough,574,165,169,240,664
BOL,Bolton Wanderers,494,149,128,217,575
WOL,Wolverhampton Wanderers,456,129,110,217,497
WBA,West Bromwich Albion,494,117,139,238,490
STO,Stoke City,380,116,109,155,457
BHA,Brighton and Hove Albion,342,108,109,125,433
NFO,Nottingham Forest,350,108,98,144,422
BOU,Bournemouth,342,108,87,147,411
COV,Coventry City,354,99,112,143,409
NOR,Norwich City,392,99,105,188,402
SHW,Sheffield Wednesday,316,101,89,126,392
WIM,Wimbledon,316,99,94,123,391
BUR,Burnley,380,92,95,193,371
CHA,Charlton Athletic,304,93,82,129,361
WIG,Wigan Athletic,304,85,76,143,331
SWA,Swansea City,266,82,66,118,312
QPR,Queens Park Rangers,278,81,65,132,308
POR,Portsmouth,266,79,65,122,302
BIR,Birmingham City,266,73,82,111,301
WAT,Watford,304,73,66,165,285
DER,Derby County,266,68,70,128,274
BRE,Brentford,190,68,49,73,253
IPS,Ipswich Town,240,61,63,116,246
SHU,Sheffield United,236,56,57,123,225
HUL,Hull City,190,41,48,101,171
REA,Reading,114,32,23,59,119
OLD,Oldham Athletic,84,22,23,39,89
CAR,Cardiff City,76,17,13,46,64
BRA,Bradford City,76,14,20,42,62
HUD,Huddersfield Town,76,12,17,47,53
BPL,Blackpool,38,10,9,19,39
BAR,Barnsley,38,10,5,23,35
SWI,Swindon Town,42,5,15,22,30
LUT,Luton Town,38,6,8,24,26
`,pn=`team_name,season_label,streak_start,streak_length,opponents
Arsenal,2025-26,2026-04-25,5,"Newcastle United, Fulham, West Ham United, Burnley, Crystal Palace"
Manchester City,2025-26,2025-11-29,6,"Leeds United, Fulham, Sunderland, Crystal Palace, West Ham United, Nottingham Forest"
Aston Villa,2025-26,2025-11-09,8,"Bournemouth, Leeds United, Wolverhampton Wanderers, Brighton and Hove Albion, Arsenal, West Ham United, Manchester United, Chelsea"
Liverpool,2025-26,2025-08-15,5,"Bournemouth, Newcastle United, Arsenal, Burnley, Everton"
Wolverhampton Wanderers,2024-25,2025-03-15,6,"Southampton, West Ham United, Ipswich Town, Tottenham Hotspur, Manchester United, Leicester City"
Newcastle United,2024-25,2025-03-10,5,"West Ham United, Brentford, Leicester City, Manchester United, Crystal Palace"
Nottingham Forest,2024-25,2024-12-07,6,"Manchester United, Aston Villa, Brentford, Tottenham Hotspur, Everton, Wolverhampton Wanderers"
Chelsea,2024-25,2024-11-23,5,"Leicester City, Aston Villa, Southampton, Tottenham Hotspur, Brentford"
Manchester United,2022-23,2022-11-13,5,"Fulham, Nottingham Forest, Wolverhampton Wanderers, Bournemouth, Manchester City"
Leicester City,2019-20,2019-10-19,8,"Burnley, Southampton, Crystal Palace, Arsenal, Brighton and Hove Albion, Everton, Watford, Aston Villa"
Tottenham Hotspur,2018-19,2018-12-05,5,"Southampton, Leicester City, Burnley, Everton, Bournemouth"
Burnley,2017-18,2018-03-03,5,"Everton, West Ham United, West Bromwich Albion, Watford, Leicester City"
Crystal Palace,2013-14,2014-03-29,5,"Chelsea, Cardiff City, Aston Villa, Everton, West Ham United"
Everton,2013-14,2014-03-01,7,"West Ham United, Cardiff City, Swansea City, Newcastle United, Fulham, Arsenal, Sunderland"
Birmingham City,2009-10,2009-11-21,5,"Fulham, Wolverhampton Wanderers, Wigan Athletic, West Ham United, Blackburn Rovers"
Bolton Wanderers,2006-07,2006-12-09,5,"West Ham United, Aston Villa, Manchester City, Newcastle United, Portsmouth"
West Ham United,2005-06,2006-01-14,5,"Aston Villa, Fulham, Arsenal, Sunderland, Birmingham City"
Wigan Athletic,2005-06,2005-09-24,6,"Everton, Bolton Wanderers, Newcastle United, Aston Villa, Fulham, Portsmouth, Portsmouth"
Charlton Athletic,2002-03,2003-01-22,5,"West Ham United, West Bromwich Albion, Sunderland, Everton, Aston Villa"
Leeds United,2000-01,2001-03-17,6,"Charlton Athletic, Sunderland, Southampton, Liverpool, West Ham United, Chelsea"
Southampton,2000-01,2001-01-31,5,"Leicester City, Bradford City, Middlesbrough, Manchester City, Everton"
Sunderland,1999-00,1999-09-11,5,"Leicester City, Derby County, Sheffield Wednesday, Bradford City, Aston Villa"
Coventry City,1997-98,1998-01-31,5,"Manchester City, Bolton Wanderers, Sheffield Wednesday, Southampton, Barnsley, Crystal Palace"
Wimbledon,1996-97,1996-09-04,7,"Tottenham Hotspur, Everton, West Ham United, Southampton, Derby County, Sheffield Wednesday, Chelsea"
Middlesbrough,1995-96,1995-09-16,5,"Coventry City, Manchester City, Blackburn Rovers, Sheffield Wednesday, Queens Park Rangers, Everton"
Blackburn Rovers,1994-95,1994-10-29,7,"Nottingham Forest, Sheffield Wednesday, Tottenham Hotspur, Ipswich Town, Queens Park Rangers, Wimbledon, Southampton"
Sheffield Wednesday,1992-93,1992-12-28,7,"Southampton, Norwich City, Tottenham Hotspur, Chelsea, Everton, Crystal Palace, Manchester City"
Norwich City,1992-93,1992-08-29,5,"Crystal Palace, Nottingham Forest, Southampton, Chelsea, Sheffield Wednesday"
`,Nn=`copy (
    with matches as (
        select
            match_id,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            'home' as side,
            result
        from fct_matches
        union all
        select
            match_id,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            'away' as side,
            result
        from fct_matches
    )
    select
        team_abbr,
        min(team_name) as team_name,
        count(*) filter (where side = 'home' and result = 'home_win') as home_wins,
        count(*) filter (where side = 'away' and result = 'away_win') as away_wins,
        count(*) filter (
            where side = 'home' and result = 'home_win'
               or side = 'away' and result = 'away_win'
        ) as total_wins
    from matches
    group by team_abbr
    order by total_wins desc, team_abbr
)
to 'assets/data/wins.csv' (header, delimiter ',');
`,Hn=`copy (
    with team_counts as (
        select season_label, count(distinct team_id) as team_count
        from (
            select season_label, home_team_id as team_id from fct_matches
            union all
            select season_label, away_team_id as team_id from fct_matches
        )
        group by season_label
    )
    select
        m.season_label,
        tc.team_count,
        count(*) as matches_played,
        round(2.0 * count(*) / tc.team_count, 1) as avg_matches_per_team
    from fct_matches as m
    left join team_counts as tc on m.season_label = tc.season_label
    group by m.season_label, tc.team_count
    order by min(m.kickoff_date)
)
to 'assets/data/season_quality.csv' (header, delimiter ',');
`,Vn=`copy (
    select
        season_label,
        home_team_abbr as team_abbr,
        min(home_team_name) as team_name,
        round(avg(attendance), 0) as avg_home_attendance
    from fct_matches
    where attendance is not null
    group by season_label, home_team_abbr
    order by season_label, home_team_abbr
)
to 'assets/data/attendance.csv' (header, delimiter ',');
`,kn=`copy (
    with appearances as (
        select
            match_id,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            'home' as side,
            result
        from fct_matches
        union all
        select
            match_id,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            'away' as side,
            result
        from fct_matches
    )
    select
        team_abbr,
        min(team_name) as team_name,
        count(*) as matches_played,
        count(*) filter (where side = 'home' and result = 'home_win'
                       or side = 'away' and result = 'away_win') as wins,
        count(*) filter (where result = 'draw') as draws,
        count(*) filter (where side = 'home' and result = 'away_win'
                       or side = 'away' and result = 'home_win') as losses,
        3 * count(*) filter (where side = 'home' and result = 'home_win'
                           or side = 'away' and result = 'away_win')
          + count(*) filter (where result = 'draw') as points
    from appearances
    group by team_abbr
    order by points desc, team_abbr
)
to 'assets/data/all_time_table.csv' (header, delimiter ',');
`,Rn=`copy (
    with team_games as (
        select
            match_id,
            season_label,
            kickoff_at,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            away_team_abbr as opponent_abbr,
            away_team_name as opponent_name,
            result = 'home_win' as is_win
        from fct_matches
        union all
        select
            match_id,
            season_label,
            kickoff_at,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            home_team_abbr as opponent_abbr,
            home_team_name as opponent_name,
            result = 'away_win' as is_win
        from fct_matches
    ),
    games_ranked as (
        select
            *,
            row_number() over (
                partition by team_abbr, season_label
                order by kickoff_at, match_id
            ) as rn_in_season
        from team_games
    ),
    wins as (
        select
            *,
            rn_in_season - row_number() over (
                partition by team_abbr
                order by season_label, kickoff_at, match_id
            ) as grp
        from games_ranked
        where is_win
    ),
    streaks as (
        select
            team_abbr,
            min(team_name) as team_name,
            season_label,
            count(*) as streak_length,
            min(kickoff_at) as started_at,
            min(rn_in_season) as start_game,
            grp
        from wins
        group by team_abbr, grp, season_label
        having count(*) >= 5
    ),
    last_streaks as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by started_at desc, start_game desc
            ) as rn
        from streaks
    )
    select
        team_name,
        season_label,
        date(started_at) as streak_start,
        streak_length,
        (
            select string_agg(opponent_name, ', ' order by kickoff_at)
            from wins w
            where w.team_abbr = ls.team_abbr and w.grp = ls.grp
        ) as opponents
    from last_streaks ls
    where rn = 1
    order by streak_start desc, team_name
)
to 'assets/data/five_game_streaks.csv' (header, delimiter ',');
`;function p(e,t){return+(e[t]??0)}function He(e,t){return+(e[t]??0)}function D(e,t){return Ne(e,t)}const ht=(()=>{const t=Ne(Wn)[0];return{total_matches:+t.total_matches,total_unique_teams:+t.total_unique_teams,total_goals:+t.total_goals,last_updated:t.last_updated}})(),Ct=D(Ln,e=>({team_abbr:e.team_abbr,team_name:e.team_name,home_wins:p(e,"home_wins"),away_wins:p(e,"away_wins"),total_wins:p(e,"total_wins")})),yt=D(En,e=>({season_label:e.season_label,team_count:p(e,"team_count"),matches_played:p(e,"matches_played"),avg_matches_per_team:He(e,"avg_matches_per_team")})),ft=D(Bn,e=>({season_label:e.season_label,team_abbr:e.team_abbr,team_name:e.team_name,avg_home_attendance:He(e,"avg_home_attendance")})),vt=D(wn,e=>({team_abbr:e.team_abbr,team_name:e.team_name,matches_played:p(e,"matches_played"),wins:p(e,"wins"),draws:p(e,"draws"),losses:p(e,"losses"),points:p(e,"points")})),bt=D(pn,e=>({team_name:e.team_name,season_label:e.season_label,streak_start:e.streak_start,streak_length:p(e,"streak_length"),opponents:e.opponents})),St={wins:Nn,quality:Hn,attendance:Vn,allTimeTable:kn,fiveGameStreaks:Rn},Mn=N({...M(),...R()},"VCardActions"),In=I()({name:"VCardActions",props:Mn(),setup(e,t){let{slots:n}=t;return un({VBtn:{slim:!0,variant:"text"}}),O(()=>d(e.tag,{class:w(["v-card-actions",e.class]),style:k(e.style)},n)),{}}}),Tn=N({opacity:[Number,String],...M(),...R()},"VCardSubtitle"),On=I()({name:"VCardSubtitle",props:Tn(),setup(e,t){let{slots:n}=t;return O(()=>d(e.tag,{class:w(["v-card-subtitle",e.class]),style:k([{"--v-card-subtitle-opacity":e.opacity},e.style])},n)),{}}}),Pn=qe("v-card-title"),Fn=N({appendAvatar:String,appendIcon:G,prependAvatar:String,prependIcon:G,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...M(),...be(),...R()},"VCardItem"),Dn=I()({name:"VCardItem",props:Fn(),setup(e,t){let{slots:n}=t;return O(()=>{const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||n.prepend),o=!!(e.appendAvatar||e.appendIcon),m=!!(o||n.append),i=!!(e.title!=null||n.title),l=!!(e.subtitle!=null||n.subtitle);return d(e.tag,{class:w(["v-card-item",e.class]),style:k(e.style)},{default:()=>[s&&v("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?d(ee,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):v(ue,null,[e.prependAvatar&&d(le,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&d(ie,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),v("div",{class:"v-card-item__content"},[i&&d(Pn,{key:"title"},{default:()=>[n.title?.()??ce(e.title)]}),l&&d(On,{key:"subtitle"},{default:()=>[n.subtitle?.()??ce(e.subtitle)]}),n.default?.()]),m&&v("div",{key:"append",class:"v-card-item__append"},[n.append?d(ee,{key:"append-defaults",disabled:!o,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):v(ue,null,[e.appendIcon&&d(ie,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&d(le,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]})}),{}}}),jn=N({opacity:[Number,String],...M(),...R()},"VCardText"),Gn=I()({name:"VCardText",props:jn(),setup(e,t){let{slots:n}=t;return O(()=>d(e.tag,{class:w(["v-card-text",e.class]),style:k([{"--v-card-text-opacity":e.opacity},e.style])},n)),{}}});function $n(e,t){const n=We(),a=te(!1);if(cn){const s=new IntersectionObserver(o=>{a.value=!!o.find(m=>m.isIntersecting)},t);mn(()=>{s.disconnect()}),Ue(n,(o,m)=>{m&&(s.unobserve(m),a.value=!1),o&&s.observe(o)},{flush:"post"})}return{intersectionRef:n,isIntersecting:a}}const xn=N({chunkCount:{type:[Number,String],default:null},chunkWidth:{type:[Number,String],default:null},chunkGap:{type:[Number,String],default:4}},"chunks");function Qn(e,t){const n=$(()=>!!e.chunkCount||!!e.chunkWidth),a=L(()=>{const i=me(t);if(!i)return 0;if(!e.chunkCount)return Number(e.chunkWidth);const l=Number(e.chunkCount);return(i-Number(e.chunkGap)*(l-1))/l}),s=$(()=>Number(e.chunkGap)),o=L(()=>{if(!n.value)return{};const i=W(s.value),l=W(a.value);return{maskRepeat:"repeat-x",maskImage:`linear-gradient(90deg, #000, #000 ${l}, transparent ${l}, transparent)`,maskSize:`calc(${l} + ${i}) 100%`}});function m(i){const l=me(t);if(!l)return i;const b=100*s.value/l,E=100*(a.value+s.value)/l,r=Math.floor((i+b)/E+1e-9);return ne(r*E-b/2,0,100)}return{hasChunks:n,chunksMaskStyles:o,snapValueToChunk:m}}const qn=N({absolute:Boolean,active:{type:Boolean,default:!0},bgColor:String,bgOpacity:[Number,String],bufferValue:{type:[Number,String],default:0},bufferColor:String,bufferOpacity:[Number,String],clickable:Boolean,color:String,height:{type:[Number,String],default:4},indeterminate:Boolean,max:{type:[Number,String],default:100},modelValue:{type:[Number,String],default:0},opacity:[Number,String],reverse:Boolean,stream:Boolean,striped:Boolean,roundedBar:Boolean,...xn(),...M(),..._e({location:"top"}),...ge(),...R(),...Ee()},"VProgressLinear"),Yn=I()({name:"VProgressLinear",props:qn(),emits:{"update:modelValue":e=>!0},setup(e,t){let{slots:n}=t;const a=We(),s=hn(e,"modelValue"),{isRtl:o,rtlClasses:m}=Cn(),{themeClasses:i}=Le(e),{locationStyles:l}=Se(e),{textColorClasses:b,textColorStyles:E}=Ye(()=>e.color),{backgroundColorClasses:r,backgroundColorStyles:u}=K(()=>e.bgColor||e.color),{backgroundColorClasses:g,backgroundColorStyles:h}=K(()=>e.bufferColor||e.bgColor||e.color),{backgroundColorClasses:c,backgroundColorStyles:y}=K(()=>e.color),{roundedClasses:_}=Ae(e),{intersectionRef:S,isIntersecting:C}=$n(),V=L(()=>parseFloat(e.max)),A=L(()=>parseFloat(e.height)),B=L(()=>ne(parseFloat(e.bufferValue)/V.value*100,0,100)),H=L(()=>ne(parseFloat(s.value)/V.value*100,0,100)),U=L(()=>o.value!==e.reverse),Q=L(()=>e.indeterminate?"fade-transition":"slide-x-transition"),j=te(0),{hasChunks:P,chunksMaskStyles:q,snapValueToChunk:oe}=Qn(e,j);yn(P,()=>{const{resizeRef:T}=ze(Y=>j.value=Y[0].contentRect.width);he(()=>T.value=a.value)});const je=L(()=>P.value?oe(B.value):B.value),Ge=L(()=>P.value?oe(H.value):H.value);function $e(T){if(!S.value)return;const{left:Y,right:xe,width:z}=S.value.getBoundingClientRect(),Qe=U.value?z-T.clientX+(xe-z):T.clientX-Y;s.value=Math.round(Qe/z*V.value)}return he(()=>{S.value=a.value}),O(()=>d(e.tag,{ref:a,class:w(["v-progress-linear",{"v-progress-linear--absolute":e.absolute,"v-progress-linear--active":e.active&&C.value,"v-progress-linear--reverse":U.value,"v-progress-linear--rounded":e.rounded,"v-progress-linear--rounded-bar":e.roundedBar,"v-progress-linear--striped":e.striped,"v-progress-linear--clickable":e.clickable},_.value,i.value,m.value,e.class]),style:k([{bottom:e.location==="bottom"?0:void 0,top:e.location==="top"?0:void 0,height:e.active?W(A.value):0,"--v-progress-linear-height":W(A.value),...e.absolute?l.value:{}},q.value,e.style]),role:"progressbar","aria-hidden":e.active?"false":"true","aria-valuemin":"0","aria-valuemax":e.max,"aria-valuenow":e.indeterminate?void 0:Math.min(parseFloat(s.value),V.value),onClick:e.clickable&&$e},{default:()=>[e.stream&&v("div",{key:"stream",class:w(["v-progress-linear__stream",b.value]),style:{...E.value,[U.value?"left":"right"]:W(-A.value),borderTop:`${W(A.value/2)} dotted`,opacity:e.bufferOpacity!=null?parseFloat(e.bufferOpacity):void 0,top:`calc(50% - ${W(A.value/4)})`,width:W(100-B.value,"%"),"--v-progress-linear-stream-to":W(A.value*(U.value?1:-1))}},null),v("div",{class:w(["v-progress-linear__background",r.value]),style:k([u.value,{opacity:e.bgOpacity!=null?parseFloat(e.bgOpacity):void 0,width:e.stream?0:void 0}])},null),v("div",{class:w(["v-progress-linear__buffer",g.value]),style:k([h.value,{opacity:e.bufferOpacity!=null?parseFloat(e.bufferOpacity):void 0,width:W(je.value,"%")}])},null),d(fn,{name:Q.value},{default:()=>[e.indeterminate?v("div",{class:"v-progress-linear__indeterminate"},[["long","short"].map(T=>v("div",{key:T,class:w(["v-progress-linear__indeterminate",T,c.value]),style:k(y.value)},null))]):v("div",{class:w(["v-progress-linear__determinate",c.value]),style:k([y.value,{width:W(Ge.value,"%")}])},null)]}),n.default&&v("div",{class:"v-progress-linear__content"},[n.default({value:H.value,buffer:B.value})])]})),{}}}),zn=N({loading:[Boolean,String]},"loader");function Kn(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Be();return{loaderClasses:$(()=>({[`${t}--loading`]:e.loading}))}}function Jn(e,t){let{slots:n}=t;return v("div",{class:w(`${e.name}__loader`)},[n.default?.({color:e.color,isActive:e.active})||d(Yn,{absolute:e.absolute,active:e.active,color:e.color,height:"2",indeterminate:!0},null)])}const Zn=["static","relative","fixed","absolute","sticky"],Xn=N({position:{type:String,validator:e=>Zn.includes(e)}},"position");function et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:Be();return{positionClasses:$(()=>e.position?`${t}--${e.position}`:void 0)}}const nt=N({appendAvatar:String,appendIcon:G,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:G,ripple:{type:[Boolean,Object],default:!0},subtitle:{type:[String,Number,Boolean],default:void 0},text:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...sn(),...M(),...be(),...an(),...tn(),...zn(),..._e(),...Xn(),...ge(),...nn(),...R(),...Ee(),...en({variant:"elevated"})},"VCard"),At=I()({name:"VCard",directives:{vRipple:de},props:nt(),setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:s}=Le(e),{borderClasses:o}=Ke(e),{colorClasses:m,colorStyles:i,variantClasses:l}=Je(e),{densityClasses:b}=Ze(e),{dimensionStyles:E}=ln(e),{elevationClasses:r}=dn(e),{loaderClasses:u}=Kn(e),{locationStyles:g}=Se(e),{positionClasses:h}=et(e),{roundedClasses:c}=Ae(e),y=Xe(e,n),_=te(void 0);return Ue(()=>e.loading,(S,C)=>{_.value=!S&&typeof C=="string"?C:typeof S=="boolean"?void 0:S},{immediate:!0}),O(()=>{const S=e.link!==!1&&y.isLink.value,C=!e.disabled&&e.link!==!1&&(e.link||y.isClickable.value),V=S?"a":e.tag,A=!!(a.title||e.title!=null),B=!!(a.subtitle||e.subtitle!=null),H=A||B,U=!!(a.append||e.appendAvatar||e.appendIcon),Q=!!(a.prepend||e.prependAvatar||e.prependIcon),j=!!(a.image||e.image),P=H||Q||U,q=!!(a.text||e.text!=null);return vn(d(V,bn(y.linkProps,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":C},s.value,o.value,m.value,b.value,r.value,u.value,h.value,c.value,l.value,e.class],style:[i.value,E.value,g.value,{"--v-card-height":W(e.height)},e.style],onClick:C&&y.navigate.value,tabindex:e.disabled?-1:void 0}),{default:()=>[j&&v("div",{key:"image",class:"v-card__image"},[a.image?d(ee,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):d(rn,{key:"image-img",cover:!0,src:e.image},null)]),d(Jn,{name:"v-card",active:!!e.loading,color:_.value},{default:a.loader}),P&&d(Dn,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),q&&d(Gn,{key:"text"},{default:()=>[a.text?.()??e.text]}),a.default?.(),a.actions&&d(In,null,{default:a.actions}),on(C,"v-card")]}),[[de,C&&e.ripple]])}),{}}}),Ve=x.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}),ke=x.reduce((e,t)=>{const n="offset"+ae(t);return e[n]={type:[String,Number],default:null},e},{}),Re=x.reduce((e,t)=>{const n="order"+ae(t);return e[n]={type:[String,Number],default:null},e},{}),fe={col:Object.keys(Ve),offset:Object.keys(ke),order:Object.keys(Re)};function tt(e,t,n){let a=e;if(!(n==null||n===!1)){if(t){const s=t.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(n===""||n===!0)||(a+=`-${n}`),a.toLowerCase()}}const at=["auto","start","end","center","baseline","stretch"],st=N({cols:{type:[Boolean,String,Number],default:!1},...Ve,offset:{type:[String,Number],default:null},...ke,order:{type:[String,Number],default:null},...Re,alignSelf:{type:String,default:null,validator:e=>at.includes(e)},...M(),...R()},"VCol"),gt=I()({name:"VCol",props:st(),setup(e,t){let{slots:n}=t;const a=L(()=>{const s=[];let o;for(o in fe)fe[o].forEach(i=>{const l=e[i],b=tt(o,i,l);b&&s.push(b)});const m=s.some(i=>i.startsWith("v-col-"));return s.push({"v-col":!m||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>we(e.tag,{class:[a.value,e.class],style:e.style},n.default?.())}}),se=["start","end","center"],Me=["space-between","space-around","space-evenly"];function re(e,t){return x.reduce((n,a)=>{const s=e+ae(a);return n[s]=t(),n},{})}const rt=[...se,"baseline","stretch"],Ie=e=>rt.includes(e),Te=re("align",()=>({type:String,default:null,validator:Ie})),ot=[...se,...Me],Oe=e=>ot.includes(e),Pe=re("justify",()=>({type:String,default:null,validator:Oe})),lt=[...se,...Me,"stretch"],Fe=e=>lt.includes(e),De=re("alignContent",()=>({type:String,default:null,validator:Fe})),ve={align:Object.keys(Te),justify:Object.keys(Pe),alignContent:Object.keys(De)},it={align:"align",justify:"justify",alignContent:"align-content"};function dt(e,t,n){let a=it[e];if(n!=null){if(t){const s=t.replace(e,"");a+=`-${s}`}return a+=`-${n}`,a.toLowerCase()}}const ut=N({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:Ie},...Te,justify:{type:String,default:null,validator:Oe},...Pe,alignContent:{type:String,default:null,validator:Fe},...De,...M(),...R()},"VRow"),_t=I()({name:"VRow",props:ut(),setup(e,t){let{slots:n}=t;const a=L(()=>{const s=[];let o;for(o in ve)ve[o].forEach(m=>{const i=e[m],l=dt(o,m,i);l&&s.push(l)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>we(e.tag,{class:["v-row",a.value,e.class],style:e.style},n.default?.())}});export{_t as V,gt as a,At as b,Gn as c,Pn as d,On as e,St as f,ft as g,vt as h,bt as i,yt as q,ht as s,Ct as w};
