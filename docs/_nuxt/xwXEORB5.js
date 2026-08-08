import{a as N,m as g,c as S,d as We,e as x,V as K,f as j,b as ae,R as z,g as we,h as ge,u as Se,i as Le,j as ve,k as Be,l as Me,n as Ee,o as He,p as ke,q as Re,r as Ne,s as Te,t as Ie,v as Oe,w as Ve,x as Pe,y as Fe,L as De,z as Qe,A as je,B as Ye}from"./qhOKSqqy.js";import{j as L,s as Ge,b as l,n as O,k as V,l as v,a as k,F as Z,t as J,I,p as qe,v as $e,x as xe,m as Ke,y as ze,z as Ze,q as Je,A as se,i as re,B as P,C as Y}from"./Cx_WtnXL.js";var X={},F={},D=34,R=10,Q=13;function oe(e){return new Function("d","return {"+e.map(function(t,n){return JSON.stringify(t)+": d["+n+'] || ""'}).join(",")+"}")}function Xe(e,t){var n=oe(e);return function(a,s){return t(n(a),s,e)}}function ee(e){var t=Object.create(null),n=[];return e.forEach(function(a){for(var s in a)s in t||n.push(t[s]=s)}),n}function C(e,t){var n=e+"",a=n.length;return a<t?new Array(t-a+1).join(0)+n:n}function en(e){return e<0?"-"+C(-e,6):e>9999?"+"+C(e,6):C(e,4)}function nn(e){var t=e.getUTCHours(),n=e.getUTCMinutes(),a=e.getUTCSeconds(),s=e.getUTCMilliseconds();return isNaN(e)?"Invalid Date":en(e.getUTCFullYear())+"-"+C(e.getUTCMonth()+1,2)+"-"+C(e.getUTCDate(),2)+(s?"T"+C(t,2)+":"+C(n,2)+":"+C(a,2)+"."+C(s,3)+"Z":a?"T"+C(t,2)+":"+C(n,2)+":"+C(a,2)+"Z":n||t?"T"+C(t,2)+":"+C(n,2)+"Z":"")}function tn(e){var t=new RegExp('["'+e+`
\r]`),n=e.charCodeAt(0);function a(r,m){var p,_,h=s(r,function(b,U){if(p)return p(b,U-1);_=b,p=m?Xe(b,m):oe(b)});return h.columns=_||[],h}function s(r,m){var p=[],_=r.length,h=0,b=0,U,A=_<=0,u=!1;r.charCodeAt(_-1)===R&&--_,r.charCodeAt(_-1)===Q&&--_;function T(){if(A)return F;if(u)return u=!1,X;var E,H=h,w;if(r.charCodeAt(H)===D){for(;h++<_&&r.charCodeAt(h)!==D||r.charCodeAt(++h)===D;);return(E=h)>=_?A=!0:(w=r.charCodeAt(h++))===R?u=!0:w===Q&&(u=!0,r.charCodeAt(h)===R&&++h),r.slice(H+1,E-1).replace(/""/g,'"')}for(;h<_;){if((w=r.charCodeAt(E=h++))===R)u=!0;else if(w===Q)u=!0,r.charCodeAt(h)===R&&++h;else if(w!==n)continue;return r.slice(H,E)}return A=!0,r.slice(H,_)}for(;(U=T())!==F;){for(var M=[];U!==X&&U!==F;)M.push(U),U=T();m&&(M=m(M,b++))==null||p.push(M)}return p}function i(r,m){return r.map(function(p){return m.map(function(_){return B(p[_])}).join(e)})}function c(r,m){return m==null&&(m=ee(r)),[m.map(B).join(e)].concat(i(r,m)).join(`
`)}function d(r,m){return m==null&&(m=ee(r)),i(r,m).join(`
`)}function f(r){return r.map(W).join(`
`)}function W(r){return r.map(B).join(e)}function B(r){return r==null?"":r instanceof Date?nn(r):t.test(r+="")?'"'+r.replace(/"/g,'""')+'"':r}return{parse:a,parseRows:s,format:c,formatBody:d,formatRows:f,formatRow:W,formatValue:B}}var an=tn(","),ie=an.parse;const sn=`total_matches,total_unique_teams,total_goals,last_updated
13166,51,35478,2026-08-08
`,rn=`team_abbr,team_name,home_wins,away_wins,total_wins
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
`,on=`season_label,team_count,matches_played,avg_matches_per_team
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
`,ln=`season_label,team_abbr,team_name,avg_home_attendance
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
`,mn=`team_abbr,team_name,matches_played,wins,draws,losses,points
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
`,cn=`team_name,season_label,streak_start,streak_length,opponents
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
`,dn=`streak_id,team_name,season_label,streak_length,match_date,opponent_abbr,opponent_name,score
1,Manchester City,2017-18,18,2017-08-26,BOU,Bournemouth,2-1
1,Manchester City,2017-18,18,2017-09-09,LIV,Liverpool,5-0
1,Manchester City,2017-18,18,2017-09-16,WAT,Watford,6-0
1,Manchester City,2017-18,18,2017-09-23,CRY,Crystal Palace,5-0
1,Manchester City,2017-18,18,2017-09-30,CHE,Chelsea,1-0
1,Manchester City,2017-18,18,2017-10-14,STO,Stoke City,7-2
1,Manchester City,2017-18,18,2017-10-21,BUR,Burnley,3-0
1,Manchester City,2017-18,18,2017-10-28,WBA,West Bromwich Albion,3-2
1,Manchester City,2017-18,18,2017-11-05,ARS,Arsenal,3-1
1,Manchester City,2017-18,18,2017-11-18,LEI,Leicester City,2-0
1,Manchester City,2017-18,18,2017-11-26,HUD,Huddersfield Town,2-1
1,Manchester City,2017-18,18,2017-11-29,SOU,Southampton,2-1
1,Manchester City,2017-18,18,2017-12-03,WHU,West Ham United,2-1
1,Manchester City,2017-18,18,2017-12-10,MUN,Manchester United,2-1
1,Manchester City,2017-18,18,2017-12-13,SWA,Swansea City,4-0
1,Manchester City,2017-18,18,2017-12-16,TOT,Tottenham Hotspur,4-1
1,Manchester City,2017-18,18,2017-12-23,BOU,Bournemouth,4-0
1,Manchester City,2017-18,18,2017-12-27,NEW,Newcastle United,1-0
2,Liverpool,2019-20,18,2019-10-27,TOT,Tottenham Hotspur,2-1
2,Liverpool,2019-20,18,2019-11-02,AVL,Aston Villa,2-1
2,Liverpool,2019-20,18,2019-11-10,MCI,Manchester City,3-1
2,Liverpool,2019-20,18,2019-11-23,CRY,Crystal Palace,2-1
2,Liverpool,2019-20,18,2019-11-30,BHA,Brighton and Hove Albion,2-1
2,Liverpool,2019-20,18,2019-12-04,EVE,Everton,5-2
2,Liverpool,2019-20,18,2019-12-07,BOU,Bournemouth,3-0
2,Liverpool,2019-20,18,2019-12-14,WAT,Watford,2-0
2,Liverpool,2019-20,18,2019-12-26,LEI,Leicester City,4-0
2,Liverpool,2019-20,18,2019-12-29,WOL,Wolverhampton Wanderers,1-0
2,Liverpool,2019-20,18,2020-01-02,SHU,Sheffield United,2-0
2,Liverpool,2019-20,18,2020-01-11,TOT,Tottenham Hotspur,1-0
2,Liverpool,2019-20,18,2020-01-19,MUN,Manchester United,2-0
2,Liverpool,2019-20,18,2020-01-23,WOL,Wolverhampton Wanderers,2-1
2,Liverpool,2019-20,18,2020-01-29,WHU,West Ham United,2-0
2,Liverpool,2019-20,18,2020-02-01,SOU,Southampton,4-0
2,Liverpool,2019-20,18,2020-02-15,NOR,Norwich City,1-0
2,Liverpool,2019-20,18,2020-02-24,WHU,West Ham United,3-2
3,Manchester City,2020-21,15,2020-12-19,SOU,Southampton,1-0
3,Manchester City,2020-21,15,2020-12-26,NEW,Newcastle United,2-0
3,Manchester City,2020-21,15,2021-01-03,CHE,Chelsea,3-1
3,Manchester City,2020-21,15,2021-01-13,BHA,Brighton and Hove Albion,1-0
3,Manchester City,2020-21,15,2021-01-17,CRY,Crystal Palace,4-0
3,Manchester City,2020-21,15,2021-01-20,AVL,Aston Villa,2-0
3,Manchester City,2020-21,15,2021-01-26,WBA,West Bromwich Albion,5-0
3,Manchester City,2020-21,15,2021-01-30,SHU,Sheffield United,1-0
3,Manchester City,2020-21,15,2021-02-03,BUR,Burnley,2-0
3,Manchester City,2020-21,15,2021-02-07,LIV,Liverpool,4-1
3,Manchester City,2020-21,15,2021-02-13,TOT,Tottenham Hotspur,3-0
3,Manchester City,2020-21,15,2021-02-17,EVE,Everton,3-1
3,Manchester City,2020-21,15,2021-02-21,ARS,Arsenal,1-0
3,Manchester City,2020-21,15,2021-02-27,WHU,West Ham United,2-1
3,Manchester City,2020-21,15,2021-03-02,WOL,Wolverhampton Wanderers,4-1
4,Manchester City,2018-19,14,2019-02-03,ARS,Arsenal,3-1
4,Manchester City,2018-19,14,2019-02-06,EVE,Everton,2-0
4,Manchester City,2018-19,14,2019-02-10,CHE,Chelsea,6-0
4,Manchester City,2018-19,14,2019-02-27,WHU,West Ham United,1-0
4,Manchester City,2018-19,14,2019-03-02,BOU,Bournemouth,1-0
4,Manchester City,2018-19,14,2019-03-09,WAT,Watford,3-1
4,Manchester City,2018-19,14,2019-03-30,FUL,Fulham,2-0
4,Manchester City,2018-19,14,2019-04-03,CAR,Cardiff City,2-0
4,Manchester City,2018-19,14,2019-04-14,CRY,Crystal Palace,3-1
4,Manchester City,2018-19,14,2019-04-20,TOT,Tottenham Hotspur,1-0
4,Manchester City,2018-19,14,2019-04-24,MUN,Manchester United,2-0
4,Manchester City,2018-19,14,2019-04-28,BUR,Burnley,1-0
4,Manchester City,2018-19,14,2019-05-06,LEI,Leicester City,1-0
4,Manchester City,2018-19,14,2019-05-12,BHA,Brighton and Hove Albion,4-1
5,Arsenal,2001-02,13,2002-02-10,EVE,Everton,1-0
5,Arsenal,2001-02,13,2002-02-23,FUL,Fulham,4-1
5,Arsenal,2001-02,13,2002-03-02,NEW,Newcastle United,2-0
5,Arsenal,2001-02,13,2002-03-05,DER,Derby County,1-0
5,Arsenal,2001-02,13,2002-03-17,AVL,Aston Villa,2-1
5,Arsenal,2001-02,13,2002-03-30,SUN,Sunderland,3-0
5,Arsenal,2001-02,13,2002-04-01,CHA,Charlton Athletic,3-0
5,Arsenal,2001-02,13,2002-04-06,TOT,Tottenham Hotspur,2-1
5,Arsenal,2001-02,13,2002-04-21,IPS,Ipswich Town,2-0
5,Arsenal,2001-02,13,2002-04-24,WHU,West Ham United,2-0
5,Arsenal,2001-02,13,2002-04-29,BOL,Bolton Wanderers,2-0
5,Arsenal,2001-02,13,2002-05-08,MUN,Manchester United,1-0
5,Arsenal,2001-02,13,2002-05-11,EVE,Everton,4-3
6,Chelsea,2016-17,13,2016-10-01,HUL,Hull City,2-0
6,Chelsea,2016-17,13,2016-10-15,LEI,Leicester City,3-0
6,Chelsea,2016-17,13,2016-10-23,MUN,Manchester United,4-0
6,Chelsea,2016-17,13,2016-10-30,SOU,Southampton,2-0
6,Chelsea,2016-17,13,2016-11-05,EVE,Everton,5-0
6,Chelsea,2016-17,13,2016-11-20,MID,Middlesbrough,1-0
6,Chelsea,2016-17,13,2016-11-26,TOT,Tottenham Hotspur,2-1
6,Chelsea,2016-17,13,2016-12-03,MCI,Manchester City,3-1
6,Chelsea,2016-17,13,2016-12-11,WBA,West Bromwich Albion,1-0
6,Chelsea,2016-17,13,2016-12-14,SUN,Sunderland,1-0
6,Chelsea,2016-17,13,2016-12-17,CRY,Crystal Palace,1-0
6,Chelsea,2016-17,13,2016-12-26,BOU,Bournemouth,3-0
6,Chelsea,2016-17,13,2016-12-31,STO,Stoke City,4-2
7,Manchester City,2021-22,12,2021-11-06,MUN,Manchester United,2-0
7,Manchester City,2021-22,12,2021-11-21,EVE,Everton,3-0
7,Manchester City,2021-22,12,2021-11-28,WHU,West Ham United,2-1
7,Manchester City,2021-22,12,2021-12-01,AVL,Aston Villa,2-1
7,Manchester City,2021-22,12,2021-12-04,WAT,Watford,3-1
7,Manchester City,2021-22,12,2021-12-11,WOL,Wolverhampton Wanderers,1-0
7,Manchester City,2021-22,12,2021-12-14,LEE,Leeds United,7-0
7,Manchester City,2021-22,12,2021-12-19,NEW,Newcastle United,4-0
7,Manchester City,2021-22,12,2021-12-26,LEI,Leicester City,6-3
7,Manchester City,2021-22,12,2021-12-29,BRE,Brentford,1-0
7,Manchester City,2021-22,12,2022-01-01,ARS,Arsenal,2-1
7,Manchester City,2021-22,12,2022-01-15,CHE,Chelsea,1-0
8,Manchester City,2022-23,12,2023-02-25,BOU,Bournemouth,4-1
8,Manchester City,2022-23,12,2023-03-04,NEW,Newcastle United,2-0
8,Manchester City,2022-23,12,2023-03-11,CRY,Crystal Palace,1-0
8,Manchester City,2022-23,12,2023-04-01,LIV,Liverpool,4-1
8,Manchester City,2022-23,12,2023-04-08,SOU,Southampton,4-1
8,Manchester City,2022-23,12,2023-04-15,LEI,Leicester City,3-1
8,Manchester City,2022-23,12,2023-04-26,ARS,Arsenal,4-1
8,Manchester City,2022-23,12,2023-04-30,FUL,Fulham,2-1
8,Manchester City,2022-23,12,2023-05-03,WHU,West Ham United,3-0
8,Manchester City,2022-23,12,2023-05-06,LEE,Leeds United,2-1
8,Manchester City,2022-23,12,2023-05-14,EVE,Everton,3-0
8,Manchester City,2022-23,12,2023-05-21,CHE,Chelsea,1-0
9,Manchester United,1999-00,11,2000-03-11,DER,Derby County,3-1
9,Manchester United,1999-00,11,2000-03-18,LEI,Leicester City,2-0
9,Manchester United,1999-00,11,2000-03-25,BRA,Bradford City,4-0
9,Manchester United,1999-00,11,2000-04-01,WHU,West Ham United,7-1
9,Manchester United,1999-00,11,2000-04-10,MID,Middlesbrough,4-3
9,Manchester United,1999-00,11,2000-04-15,SUN,Sunderland,4-0
9,Manchester United,1999-00,11,2000-04-22,SOU,Southampton,3-1
9,Manchester United,1999-00,11,2000-04-24,CHE,Chelsea,3-2
9,Manchester United,1999-00,11,2000-04-29,WAT,Watford,3-2
9,Manchester United,1999-00,11,2000-05-06,TOT,Tottenham Hotspur,3-1
9,Manchester United,1999-00,11,2000-05-14,AVL,Aston Villa,1-0
10,Manchester United,2008-09,11,2008-12-26,STO,Stoke City,1-0
10,Manchester United,2008-09,11,2008-12-29,MID,Middlesbrough,1-0
10,Manchester United,2008-09,11,2009-01-11,CHE,Chelsea,3-0
10,Manchester United,2008-09,11,2009-01-14,WIG,Wigan Athletic,1-0
10,Manchester United,2008-09,11,2009-01-17,BOL,Bolton Wanderers,1-0
10,Manchester United,2008-09,11,2009-01-27,WBA,West Bromwich Albion,5-0
10,Manchester United,2008-09,11,2009-01-31,EVE,Everton,1-0
10,Manchester United,2008-09,11,2009-02-08,WHU,West Ham United,1-0
10,Manchester United,2008-09,11,2009-02-18,FUL,Fulham,3-0
10,Manchester United,2008-09,11,2009-02-21,BLA,Blackburn Rovers,2-1
10,Manchester United,2008-09,11,2009-03-04,NEW,Newcastle United,2-1
11,Liverpool,2013-14,11,2014-02-08,ARS,Arsenal,5-1
11,Liverpool,2013-14,11,2014-02-12,FUL,Fulham,3-2
11,Liverpool,2013-14,11,2014-02-23,SWA,Swansea City,4-3
11,Liverpool,2013-14,11,2014-03-01,SOU,Southampton,3-0
11,Liverpool,2013-14,11,2014-03-16,MUN,Manchester United,3-0
11,Liverpool,2013-14,11,2014-03-22,CAR,Cardiff City,6-3
11,Liverpool,2013-14,11,2014-03-26,SUN,Sunderland,2-1
11,Liverpool,2013-14,11,2014-03-30,TOT,Tottenham Hotspur,4-0
11,Liverpool,2013-14,11,2014-04-06,WHU,West Ham United,2-1
11,Liverpool,2013-14,11,2014-04-13,MCI,Manchester City,3-2
11,Liverpool,2013-14,11,2014-04-20,NOR,Norwich City,3-2
`,hn=`team_name,team_abbr,start_date,end_date,gap_days,matches_between
Nottingham Forest,NFO,1999-05-16,2022-08-14,8491,1
Ipswich Town,IPS,2002-04-24,2024-11-10,8236,12
Leeds United,LEE,2004-04-10,2020-09-19,6006,7
Queens Park Rangers,QPR,1996-04-27,2011-08-20,5593,2
Sheffield United,SHU,1994-04-30,2006-09-30,4536,8
Leicester City,LEI,2004-05-08,2014-09-13,3780,4
Norwich City,NOR,1995-03-20,2004-11-20,3533,21
Crystal Palace,CRY,2005-04-23,2013-08-31,3052,5
Watford,WAT,2007-05-05,2015-09-12,3052,5
Sunderland,SUN,2017-05-06,2025-08-16,3024,3
Southampton,SOU,2005-04-30,2012-09-22,2702,6
Middlesbrough,MID,2009-04-11,2016-08-21,2689,7
Wolverhampton Wanderers,WOL,2012-02-04,2018-09-01,2401,17
Derby County,DER,2002-03-16,2007-09-17,2011,13
Cardiff City,CAR,2014-04-12,2018-10-20,1652,12
Reading,REA,2008-05-11,2012-11-17,1651,10
Burnley,BUR,2010-05-09,2014-11-08,1644,10
Fulham,FUL,2014-04-12,2018-08-26,1597,6
Manchester City,MCI,1996-04-27,2000-08-23,1579,2
Aston Villa,AVL,2016-02-06,2019-08-23,1294,15
Hull City,HUL,2010-03-27,2013-08-24,1246,8
Bolton Wanderers,BOL,1998-05-02,2001-08-18,1204,1
West Bromwich Albion,WBA,2006-02-04,2008-09-13,952,16
Blackburn Rovers,BLA,1999-03-20,2001-08-25,889,10
West Ham United,WHU,2003-05-03,2005-08-13,833,1
Bournemouth,BOU,2020-07-26,2022-08-06,741,0
Birmingham City,BIR,2006-04-19,2007-08-25,493,6
Charlton Athletic,CHA,1999-05-08,2000-08-19,469,1
Newcastle United,NEW,2016-05-15,2017-08-26,468,2
Huddersfield Town,HUD,2018-04-14,2018-11-05,205,14
Everton,EVE,1994-05-07,1994-11-01,178,12
Tottenham Hotspur,TOT,2008-05-03,2008-10-26,176,9
Brighton and Hove Albion,BHA,2019-12-28,2020-06-20,175,9
Stoke City,STO,2012-04-07,2012-09-29,175,11
Wimbledon,WIM,1999-03-03,1999-08-07,157,11
Liverpool,LIV,2012-05-08,2012-09-29,144,6
Portsmouth,POR,2008-04-08,2008-08-30,144,7
Coventry City,COV,1996-04-27,1996-09-14,140,6
Sheffield Wednesday,SHW,1999-05-16,1999-10-02,139,9
Arsenal,ARS,2006-05-07,2006-09-17,133,3
Wigan Athletic,WIG,2010-04-18,2010-08-28,132,5
Manchester United,MUN,2014-05-06,2014-09-14,131,4
Chelsea,CHE,1996-04-13,1996-08-21,130,4
Swansea City,SWA,2013-05-07,2013-09-01,117,4
Brentford,BRE,2025-05-10,2025-08-23,105,3
Bradford City,BRA,2001-01-01,2001-04-13,102,10
Oldham Athletic,OLD,1993-05-08,1993-08-18,102,1
Swindon Town,SWI,1994-02-05,1994-04-30,84,12
Blackpool,BPL,2011-02-22,2011-05-14,81,9
Luton Town,LUT,2024-01-30,2024-04-06,67,10
Barnsley,BAR,1997-08-27,1997-10-20,54,6
`,_n=`match_id,kickoff_date,season_label,home_team_name,home_team_abbr,home_score,home_red_cards,away_team_name,away_team_abbr,away_score,away_red_cards,total_goals,total_red_cards,goals_points,red_points,chaos_score
128511,2007-09-29,2007-08,Portsmouth,POR,7,0,Reading,REA,4,0,11,0,33,0,33
360493,2011-08-28,2011-12,Manchester United,MUN,8,0,Arsenal,ARS,2,1,10,1,30,2,32
2128500,2021-02-02,2020-21,Manchester United,MUN,9,0,Southampton,SOU,0,2,9,2,27,4,31
128617,2007-12-26,2007-08,Chelsea,CHE,4,2,Aston Villa,AVL,4,1,8,3,24,6,30
128633,2007-12-29,2007-08,Tottenham Hotspur,TOT,6,0,Reading,REA,4,0,10,0,30,0,30
284129,2009-11-22,2009-10,Tottenham Hotspur,TOT,9,0,Wigan Athletic,WIG,1,0,10,0,30,0,30
442189,2012-12-29,2012-13,Arsenal,ARS,7,0,Newcastle United,NEW,3,0,10,0,30,0,30
442376,2013-05-19,2012-13,West Bromwich Albion,WBA,5,0,Manchester United,MUN,5,0,10,0,30,0,30
128810,2008-05-11,2007-08,Middlesbrough,MID,8,0,Manchester City,MCI,1,1,9,1,27,2,29
1059799,2019-10-25,2019-20,Southampton,SOU,0,1,Leicester City,LEI,9,0,9,1,27,2,29
17344,1994-04-09,1993-94,Norwich City,NOR,4,0,Southampton,SOU,5,0,9,0,27,0,27
16126,1995-03-04,1994-95,Manchester United,MUN,9,0,Ipswich Town,IPS,0,0,9,0,27,0,27
16977,1996-10-26,1996-97,Southampton,SOU,6,0,Manchester United,MUN,3,0,9,0,27,0,27
14411,1997-08-25,1997-98,Blackburn Rovers,BLA,7,0,Sheffield Wednesday,SHW,2,0,9,0,27,0,27
17012,1999-02-06,1998-99,Nottingham Forest,NFO,1,0,Manchester United,MUN,8,0,9,0,27,0,27
14688,2000-02-12,1999-00,West Ham United,WHU,5,0,Bradford City,BRA,4,0,9,0,27,0,27
17633,2000-03-11,1999-00,Tottenham Hotspur,TOT,7,0,Southampton,SOU,2,0,9,0,27,0,27
5829,2004-11-13,2004-05,Tottenham Hotspur,TOT,4,0,Arsenal,ARS,5,0,9,0,27,0,27
284213,2010-01-16,2009-10,Chelsea,CHE,7,0,Sunderland,SUN,2,0,9,0,27,0,27
695056,2013-12-14,2013-14,Manchester City,MCI,6,0,Arsenal,ARS,3,0,9,0,27,0,27
695202,2014-03-22,2013-14,Cardiff City,CAR,3,0,Liverpool,LIV,6,0,9,0,27,0,27
755325,2014-08-30,2014-15,Everton,EVE,3,0,Chelsea,CHE,6,0,9,0,27,0,27
803385,2016-01-23,2015-16,Norwich City,NOR,4,0,Liverpool,LIV,5,0,9,0,27,0,27
855300,2016-11-26,2016-17,Swansea City,SWA,5,0,Crystal Palace,CRY,4,0,9,0,27,0,27
855404,2017-02-04,2016-17,Everton,EVE,6,0,Bournemouth,BOU,3,0,9,0,27,0,27
918968,2017-10-14,2017-18,Manchester City,MCI,7,0,Stoke City,STO,2,0,9,0,27,0,27
919271,2018-05-13,2017-18,Tottenham Hotspur,TOT,5,0,Leicester City,LEI,4,0,9,0,27,0,27
2128317,2020-10-04,2020-21,Aston Villa,AVL,7,0,Liverpool,LIV,2,0,9,0,27,0,27
2210455,2021-12-26,2021-22,Manchester City,MCI,6,0,Leicester City,LEI,3,0,9,0,27,0,27
2292845,2022-08-27,2022-23,Liverpool,LIV,9,0,Bournemouth,BOU,0,0,9,0,27,0,27
2292897,2022-10-02,2022-23,Manchester City,MCI,6,0,Manchester United,MUN,3,0,9,0,27,0,27
2444638,2024-12-22,2024-25,Tottenham Hotspur,TOT,3,0,Liverpool,LIV,6,0,9,0,27,0,27
2562029,2025-12-02,2025-26,Fulham,FUL,4,0,Manchester City,MCI,5,0,9,0,27,0,27
128605,2007-12-15,2007-08,Wigan Athletic,WIG,5,0,Blackburn Rovers,BLA,3,1,8,1,24,2,26
284137,2009-11-28,2009-10,West Ham United,WHU,5,0,Burnley,BUR,3,1,8,1,24,2,26
284374,2010-05-09,2009-10,Chelsea,CHE,8,0,Wigan Athletic,WIG,0,1,8,1,24,2,26
321911,2011-02-05,2010-11,Newcastle United,NEW,4,0,Arsenal,ARS,4,1,8,1,24,2,26
360699,2012-02-04,2011-12,Arsenal,ARS,7,0,Blackburn Rovers,BLA,1,1,8,1,24,2,26
755346,2014-09-21,2014-15,Leicester City,LEI,5,0,Manchester United,MUN,3,1,8,1,24,2,26
17362,1992-08-22,1992-93,Oldham Athletic,OLD,5,0,Nottingham Forest,NFO,3,0,8,0,24,0,24
14235,1992-10-03,1992-93,Blackburn Rovers,BLA,7,0,Norwich City,NOR,1,0,8,0,24,0,24
17428,1993-04-03,1992-93,Oldham Athletic,OLD,6,0,Wimbledon,WIM,2,0,8,0,24,0,24
15743,1993-04-12,1992-93,Everton,EVE,3,0,Queens Park Rangers,QPR,5,0,8,0,24,0,24
16588,1993-05-08,1992-93,Liverpool,LIV,6,0,Tottenham Hotspur,TOT,2,0,8,0,24,0,24
15767,1994-01-15,1993-94,Everton,EVE,6,0,Swindon Town,SWI,2,0,8,0,24,0,24
17202,1994-03-12,1993-94,Newcastle United,NEW,7,0,Swindon Town,SWI,1,0,8,0,24,0,24
13856,1995-02-11,1994-95,Aston Villa,AVL,7,0,Wimbledon,WIM,1,0,8,0,24,0,24
13858,1995-02-22,1994-95,Aston Villa,AVL,4,0,Leicester City,LEI,4,0,8,0,24,0,24
17384,1995-04-01,1994-95,Sheffield Wednesday,SHW,1,0,Nottingham Forest,NFO,7,0,8,0,24,0,24
16268,1995-12-16,1995-96,Sheffield Wednesday,SHW,6,0,Leeds United,LEE,2,0,8,0,24,0,24
`,un=`team_name,team_abbr,total_wins,home_1_0_wins,away_1_0_wins,one_nil_wins,pct_one_nil
Sheffield United,SHU,56,15,7,22,39.3
Wigan Athletic,WIG,85,21,12,33,38.8
West Bromwich Albion,WBA,117,24,17,41,35.0
Charlton Athletic,CHA,93,14,18,32,34.4
Derby County,DER,68,17,6,23,33.8
Sunderland,SUN,167,37,18,55,32.9
Stoke City,STO,116,22,16,38,32.8
Burnley,BUR,92,21,9,30,32.6
Nottingham Forest,NFO,108,23,12,35,32.4
Birmingham City,BIR,73,13,10,23,31.5
Reading,REA,32,7,3,10,31.3
Wimbledon,WIM,99,19,11,30,30.3
Southampton,SOU,282,46,38,84,29.8
Bolton Wanderers,BOL,149,28,15,43,28.9
Wolverhampton Wanderers,WOL,129,21,16,37,28.7
Norwich City,NOR,99,21,7,28,28.3
Everton,EVE,463,73,56,129,27.9
Middlesbrough,MID,165,26,19,45,27.3
Crystal Palace,CRY,193,31,21,52,26.9
Sheffield Wednesday,SHW,101,16,11,27,26.7
Blackburn Rovers,BLA,262,44,25,69,26.3
Ipswich Town,IPS,61,8,8,16,26.2
Aston Villa,AVL,430,63,48,111,25.8
Swansea City,SWA,82,14,6,20,24.4
Hull City,HUL,41,7,3,10,24.4
Coventry City,COV,99,21,3,24,24.2
West Ham United,WHU,381,54,38,92,24.1
Fulham,FUL,220,35,18,53,24.1
Watford,WAT,73,11,6,17,23.3
Portsmouth,POR,79,10,8,18,22.8
Newcastle United,NEW,453,64,37,101,22.3
Queens Park Rangers,QPR,81,9,9,18,22.2
Chelsea,CHE,681,81,68,149,21.9
Leicester City,LEI,224,26,22,48,21.4
Brighton and Hove Albion,BHA,108,14,9,23,21.3
Bournemouth,BOU,108,12,11,23,21.3
Tottenham Hotspur,TOT,561,70,48,118,21.0
Leeds United,LEE,234,35,12,47,20.1
Arsenal,ARS,719,68,73,141,19.6
Manchester United,MUN,775,75,76,151,19.5
Manchester City,MCI,573,54,47,101,17.6
Liverpool,LIV,694,62,53,115,16.6
Brentford,BRE,68,3,3,6,8.8
`,Cn=`team_name,team_abbr,run_length,seasons,start_date,end_date,opponents
Crystal Palace,CRY,3,2018-19,2019-01-12,2019-01-30,"Watford, Liverpool, Southampton"
Manchester City,MCI,3,1992-93,1993-04-09,1993-04-18,"Sheffield United, Liverpool, Aston Villa"
Newcastle United,NEW,3,1999-00,1999-08-15,1999-08-25,"Southampton, Wimbledon, Sunderland"
Sheffield Wednesday,SHW,3,1995-96,1995-11-18,1995-11-25,"Manchester City, Arsenal, Everton"
Sunderland,SUN,3,2012-13,2012-09-01,2012-09-22,"Swansea City, Liverpool, West Ham United"
Wolverhampton Wanderers,WOL,3,2010-11,2010-08-28,2010-09-18,"Newcastle United, Fulham, Tottenham Hotspur"
Arsenal,ARS,2,2019-20,2019-10-27,2019-11-02,"Crystal Palace, Wolverhampton Wanderers"
Aston Villa,AVL,2,2000-01,2000-11-25,2000-12-02,"Coventry City, Newcastle United"
Birmingham City,BIR,2,2004-05,2004-11-21,2004-11-27,"Blackburn Rovers, Norwich City"
Blackburn Rovers,BLA,2,1994-95,1995-04-15,1995-04-17,"Leeds United, Manchester City"
Bolton Wanderers,BOL,2,2009-10,2009-12-26,2009-12-29,"Burnley, Hull City"
Bournemouth,BOU,2,2022-23,2022-10-29,2022-11-05,"Tottenham Hotspur, Leeds United"
Brentford,BRE,2,2024-25,2025-05-18,2025-05-25,"Fulham, Wolverhampton Wanderers"
Brighton and Hove Albion,BHA,2,2024-25,2024-10-26,2024-11-02,"Wolverhampton Wanderers, Liverpool"
Burnley,BUR,2,2009-10,2009-11-07,2009-11-21,"Manchester City, Aston Villa"
Charlton Athletic,CHA,2,2002-03,2002-12-21,2002-12-26,"Birmingham City, Tottenham Hotspur"
Chelsea,CHE,2,1994-95,1995-04-01,1995-04-10,"Newcastle United, Wimbledon"
Coventry City,COV,2,1997-98,1997-08-23,1997-08-27,"Bolton Wanderers, West Ham United"
Derby County,DER,2,2001-02,2001-10-20,2001-10-28,"Charlton Athletic, Chelsea"
Everton,EVE,2,1993-94,1993-10-03,1993-10-16,"Tottenham Hotspur, Swindon Town"
Fulham,FUL,2,2007-08,2007-08-18,2007-08-25,"Middlesbrough, Aston Villa"
Ipswich Town,IPS,2,1992-93,1993-04-03,1993-04-06,"Manchester City, Chelsea"
Leicester City,LEI,2,1994-95,1994-11-26,1994-12-03,"Norwich City, Aston Villa"
Liverpool,LIV,2,1994-95,1994-11-26,1994-12-03,"Tottenham Hotspur, Coventry City"
Manchester United,MUN,2,1998-99,1998-12-12,1998-12-16,"Tottenham Hotspur, Chelsea"
Middlesbrough,MID,2,1998-99,1998-10-24,1998-11-01,"Wimbledon, Nottingham Forest"
Norwich City,NOR,2,2019-20,2019-12-28,2020-01-01,"Tottenham Hotspur, Crystal Palace"
Nottingham Forest,NFO,2,2022-23,2022-09-03,2022-09-16,"Bournemouth, Fulham"
Queens Park Rangers,QPR,2,1993-94,1993-11-27,1993-12-04,"Tottenham Hotspur, Aston Villa"
Reading,REA,2,2012-13,2012-10-27,2012-11-04,"Fulham, Queens Park Rangers"
Sheffield United,SHU,2,2019-20,2019-11-24,2019-12-01,"Manchester United, Wolverhampton Wanderers"
Southampton,SOU,2,1992-93,1992-09-12,1992-09-19,"Queens Park Rangers, Leeds United"
Stoke City,STO,2,2009-10,2009-10-31,2009-11-08,"Wolverhampton Wanderers, Hull City"
Swansea City,SWA,2,2013-14,2014-03-02,2014-03-15,"Crystal Palace, West Bromwich Albion"
Tottenham Hotspur,TOT,2,1994-95,1995-05-03,1995-05-06,"Newcastle United, Queens Park Rangers"
West Bromwich Albion,WBA,2,2002-03,2002-12-21,2002-12-26,"Sunderland, Arsenal"
West Ham United,WHU,2,1994-95 → 1995-96,1995-05-14,1995-08-19,"Manchester United, Leeds United"
Wigan Athletic,WIG,2,2009-10,2010-02-06,2010-02-09,"Sunderland, Stoke City"
Wimbledon,WIM,2,1996-97,1997-03-18,1997-03-23,"West Ham United, Newcastle United"
Barnsley,BAR,1,1997-98,1997-08-09,1997-08-09,West Ham United
Blackpool,BPL,1,2010-11,2010-11-27,2010-11-27,Bolton Wanderers
Bradford City,BRA,1,1999-00,2000-01-08,2000-01-08,Chelsea
Cardiff City,CAR,1,2013-14,2013-12-28,2013-12-28,Sunderland
Huddersfield Town,HUD,1,2017-18,2017-11-26,2017-11-26,Manchester City
Hull City,HUL,1,2008-09,2008-09-21,2008-09-21,Everton
Leeds United,LEE,1,1992-93,1993-03-24,1993-03-24,Chelsea
Luton Town,LUT,1,2023-24,2023-12-10,2023-12-10,Manchester City
Oldham Athletic,OLD,1,1992-93,1992-08-19,1992-08-19,Crystal Palace
Portsmouth,POR,1,2004-05,2004-10-02,2004-10-02,Norwich City
Swindon Town,SWI,1,1993-94,1993-12-29,1993-12-29,Sheffield Wednesday
Watford,WAT,1,1999-00,1999-11-06,1999-11-06,Sheffield Wednesday
`,yn=`team_name,team_abbr,run_length,seasons,start_date,end_date,opponents
Arsenal,ARS,2,2001-02,2001-12-26,2001-12-29,"Chelsea, Middlesbrough"
Aston Villa,AVL,2,2024-25,2024-09-14,2024-09-21,"Everton, Wolverhampton Wanderers"
Brighton and Hove Albion,BHA,2,2024-25,2025-05-19,2025-05-25,"Liverpool, Tottenham Hotspur"
Liverpool,LIV,2,2008-09,2008-10-05,2008-10-18,"Manchester City, Wigan Athletic"
Manchester United,MUN,2,1993-94,1993-10-30,1993-11-07,"Queens Park Rangers, Manchester City"
Newcastle United,NEW,2,2001-02,2001-12-15,2001-12-18,"Blackburn Rovers, Arsenal"
Norwich City,NOR,2,1992-93,1992-08-15,1992-08-19,"Arsenal, Chelsea"
Reading,REA,2,2012-13,2013-01-12,2013-01-19,"West Bromwich Albion, Newcastle United"
Sheffield United,SHU,2,1993-94,1994-03-28,1994-04-02,"West Ham United, Liverpool"
Tottenham Hotspur,TOT,2,2010-11,2010-11-20,2010-11-28,"Arsenal, Liverpool"
Wolverhampton Wanderers,WOL,2,2019-20,2019-12-21,2019-12-27,"Norwich City, Manchester City"
Birmingham City,BIR,1,2002-03,2003-04-21,2003-04-21,Southampton
Blackburn Rovers,BLA,1,1994-95,1994-10-15,1994-10-15,Liverpool
Bolton Wanderers,BOL,1,2004-05,2005-05-15,2005-05-15,Everton
Bournemouth,BOU,1,2016-17,2016-12-04,2016-12-04,Liverpool
Brentford,BRE,1,2021-22,2021-12-10,2021-12-10,Watford
Burnley,BUR,1,2009-10,2010-05-09,2010-05-09,Tottenham Hotspur
Cardiff City,CAR,1,2013-14,2014-02-01,2014-02-01,Norwich City
Charlton Athletic,CHA,1,1998-99,1998-10-24,1998-10-24,West Ham United
Chelsea,CHE,1,1993-94,1994-05-07,1994-05-07,Sheffield United
Coventry City,COV,1,1993-94,1993-08-18,1993-08-18,Newcastle United
Crystal Palace,CRY,1,1992-93,1992-12-12,1992-12-12,Queens Park Rangers
Derby County,DER,1,1996-97,1997-03-01,1997-03-01,Chelsea
Everton,EVE,1,1992-93,1993-03-03,1993-03-03,Blackburn Rovers
Fulham,FUL,1,2002-03,2002-09-11,2002-09-11,Tottenham Hotspur
Hull City,HUL,1,2009-10,2009-11-08,2009-11-08,Stoke City
Ipswich Town,IPS,1,1992-93,1992-12-12,1992-12-12,Manchester City
Leeds United,LEE,1,1992-93,1993-01-09,1993-01-09,Southampton
Leicester City,LEI,1,1999-00,1999-10-03,1999-10-03,Tottenham Hotspur
Manchester City,MCI,1,1992-93,1992-11-21,1992-11-21,Coventry City
Middlesbrough,MID,1,1992-93,1992-12-05,1992-12-05,Blackburn Rovers
Nottingham Forest,NFO,1,1996-97,1997-01-19,1997-01-19,Tottenham Hotspur
Portsmouth,POR,1,2004-05,2004-12-04,2004-12-04,West Bromwich Albion
Queens Park Rangers,QPR,1,1992-93,1992-08-19,1992-08-19,Southampton
Sheffield Wednesday,SHW,1,1996-97,1997-02-22,1997-02-22,Southampton
Southampton,SOU,1,1992-93,1993-03-13,1993-03-13,Ipswich Town
Stoke City,STO,1,2009-10,2010-02-20,2010-02-20,Portsmouth
Sunderland,SUN,1,1999-00,1999-08-25,1999-08-25,Newcastle United
Swansea City,SWA,1,2012-13,2013-05-07,2013-05-07,Wigan Athletic
Watford,WAT,1,2017-18,2017-10-14,2017-10-14,Arsenal
West Bromwich Albion,WBA,1,2010-11,2010-09-18,2010-09-18,Birmingham City
West Ham United,WHU,1,1995-96,1995-12-16,1995-12-16,Southampton
Wigan Athletic,WIG,1,2009-10,2010-04-18,2010-04-18,Arsenal
Wimbledon,WIM,1,1993-94,1994-03-29,1994-03-29,Blackburn Rovers
`,bn=`team_name,team_abbr,season_label,comeback_count
Fulham,FUL,2024-25,5
Manchester City,MCI,2023-24,5
Manchester United,MUN,2020-21,5
Aston Villa,AVL,2025-26,4
Brighton and Hove Albion,BHA,2024-25,4
Wolverhampton Wanderers,WOL,2019-20,4
Arsenal,ARS,2007-08,4
Chelsea,CHE,2002-03,4
Arsenal,ARS,2001-02,4
Queens Park Rangers,QPR,1992-93,4
`,fn=`-- Total wins by team across all seasons (home/away split)
copy (
    select
        team_abbr,
        min(team_name) as team_name,
        count(*) filter (where is_home and result = 'win') as home_wins,
        count(*) filter (where not is_home and result = 'win') as away_wins,
        count(*) filter (where result = 'win') as total_wins
    from "premier_league"."main"."fct_team_matches"
    group by team_abbr
    order by total_wins desc, team_abbr
)
to 'assets/data/wins.csv' (header, delimiter ',')`,pn=`-- Season-by-season team counts and matches per team
copy (
    with team_counts as (
        select season_label, count(distinct team_id) as team_count
        from (
            select season_label, home_team_id as team_id from "premier_league"."main"."fct_matches"
            union all
            select season_label, away_team_id as team_id from "premier_league"."main"."fct_matches"
        )
        group by season_label
    )
    select
        m.season_label,
        tc.team_count,
        count(*) as matches_played,
        round(2.0 * count(*) / tc.team_count, 1) as avg_matches_per_team
    from "premier_league"."main"."fct_matches" as m
    left join team_counts as tc on m.season_label = tc.season_label
    group by m.season_label, tc.team_count
    order by min(m.kickoff_date)
)
to 'assets/data/season_quality.csv' (header, delimiter ',')`,Un=`-- Average home attendance by team per season
copy (
    select
        season_label,
        team_abbr,
        min(team_name) as team_name,
        round(avg(attendance), 0) as avg_home_attendance
    from "premier_league"."main"."fct_team_matches"
    where attendance is not null and is_home
    group by season_label, team_abbr
    order by season_label, team_abbr
)
to 'assets/data/attendance.csv' (header, delimiter ',')`,An=`-- All-time Premier League table (P/W/D/L/points)
copy (
    select
        team_abbr,
        min(team_name) as team_name,
        count(*) as matches_played,
        count(*) filter (where result = 'win') as wins,
        count(*) filter (where result = 'draw') as draws,
        count(*) filter (where result = 'loss') as losses,
        sum(points) as points
    from "premier_league"."main"."fct_team_matches"
    group by team_abbr
    order by points desc, team_abbr
)
to 'assets/data/all_time_table.csv' (header, delimiter ',')`,Wn=`-- Most recent run of 5+ consecutive wins within a single season, per team
copy (
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
        from "premier_league"."main"."fct_matches"
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
        from "premier_league"."main"."fct_matches"
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
to 'assets/data/five_game_streaks.csv' (header, delimiter ',')`,wn=`-- Longest winning streaks within a single season (11+ wins), one row per win game
copy (
    with team_games as (
        select
            match_id,
            season_label,
            kickoff_at,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            away_team_abbr as opponent_abbr,
            away_team_name as opponent_name,
            home_score as goals_for,
            away_score as goals_against,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            season_label,
            kickoff_at,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            home_team_abbr as opponent_abbr,
            home_team_name as opponent_name,
            away_score as goals_for,
            home_score as goals_against,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
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
            grp,
            count(*) as streak_length,
            min(kickoff_at) as started_at
        from wins
        group by team_abbr, season_label, grp
        having count(*) > 10
    ),
    ranked_streaks as (
        select
            *,
            row_number() over (
                order by streak_length desc, started_at, team_name
            ) as streak_id
        from streaks
    )
    select
        rs.streak_id,
        rs.team_name,
        rs.season_label,
        rs.streak_length,
        date(w.kickoff_at) as match_date,
        w.opponent_abbr,
        w.opponent_name,
        cast(w.goals_for as varchar) || '-' || cast(w.goals_against as varchar) as score
    from ranked_streaks rs
    join wins w
        on w.team_abbr = rs.team_abbr
       and w.season_label = rs.season_label
       and w.grp = rs.grp
    order by rs.streak_id, w.kickoff_at, w.match_id
)
to 'assets/data/big_win_streaks.csv' (header, delimiter ',')`,gn=`-- Longest calendar gap each team went between consecutive wins, across all seasons
copy (
    with team_games as (
        select
            match_id,
            kickoff_at,
            kickoff_date,
            home_team_id as team_id,
            home_team_name as team_name,
            home_team_abbr as team_abbr,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            kickoff_at,
            kickoff_date,
            away_team_id as team_id,
            away_team_name as team_name,
            away_team_abbr as team_abbr,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    games_ranked as (
        select
            *,
            row_number() over (
                partition by team_id
                order by kickoff_at, match_id
            ) as game_rank
        from team_games
    ),
    wins as (
        select
            *,
            lag(game_rank) over (
                partition by team_id
                order by kickoff_at, match_id
            ) as prev_win_game_rank,
            lag(kickoff_date) over (
                partition by team_id
                order by kickoff_at, match_id
            ) as prev_win_date
        from games_ranked
        where is_win
    ),
    gaps as (
        select
            team_id,
            min(team_name) as team_name,
            min(team_abbr) as team_abbr,
            prev_win_date as start_date,
            kickoff_date as end_date,
            datediff('day', prev_win_date, kickoff_date) as gap_days,
            game_rank - prev_win_game_rank - 1 as matches_between
        from wins
        where prev_win_date is not null
        group by
            team_id,
            prev_win_date,
            kickoff_date,
            game_rank - prev_win_game_rank - 1
    ),
    ranked as (
        select
            *,
            row_number() over (
                partition by team_id
                order by gap_days desc, end_date desc
            ) as rn
        from gaps
    )
    select
        team_name,
        team_abbr,
        start_date,
        end_date,
        gap_days,
        matches_between
    from ranked
    where rn = 1
    order by gap_days desc, team_name
)
to 'assets/data/longest_winless_gaps.csv' (header, delimiter ',')`,Sn=`-- Most chaotic matches: 3 points per goal + 2 points per red card, top 50
copy (
    select
        match_id,
        kickoff_date,
        season_label,
        home_team_name,
        home_team_abbr,
        home_score,
        coalesce(home_red_cards, 0) as home_red_cards,
        away_team_name,
        away_team_abbr,
        away_score,
        coalesce(away_red_cards, 0) as away_red_cards,
        home_score + away_score as total_goals,
        coalesce(home_red_cards, 0) + coalesce(away_red_cards, 0) as total_red_cards,
        3 * (home_score + away_score) as goals_points,
        2 * (coalesce(home_red_cards, 0) + coalesce(away_red_cards, 0)) as red_points,
        3 * (home_score + away_score) + 2 * (coalesce(home_red_cards, 0) + coalesce(away_red_cards, 0)) as chaos_score
    from "premier_league"."main"."fct_matches"
    order by chaos_score desc, kickoff_date, match_id
    limit 50
)
to 'assets/data/most_chaotic_matches.csv' (header, delimiter ',')`,Ln=`-- Share of each club's Premier League wins that finished 1-0 (home or away), clubs with 30+ wins
copy (
    select
        min(team_name) as team_name,
        min(team_abbr) as team_abbr,
        count(*) filter (where result = 'win') as total_wins,
        count(*) filter (where is_home and is_one_nil) as home_1_0_wins,
        count(*) filter (where not is_home and is_one_nil) as away_1_0_wins,
        sum(is_one_nil) as one_nil_wins,
        round(100.0 * sum(is_one_nil) / count(*) filter (where result = 'win'), 1) as pct_one_nil
    from "premier_league"."main"."fct_team_matches"
    group by team_id
    having count(*) filter (where result = 'win') >= 30
    order by pct_one_nil desc, total_wins desc
)
to 'assets/data/one_nil_wins.csv' (header, delimiter ',')`,vn=`-- Longest consecutive run of matches where each team led at half-time but failed to win
copy (
    with team_games as (
        select
            match_id,
            season_label,
            kickoff_at,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            away_team_abbr as opponent_abbr,
            away_team_name as opponent_name,
            home_half_time_score as ht_goals_for,
            away_half_time_score as ht_goals_against,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            season_label,
            kickoff_at,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            home_team_abbr as opponent_abbr,
            home_team_name as opponent_name,
            away_half_time_score as ht_goals_for,
            home_half_time_score as ht_goals_against,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    games_ranked as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as rn
        from team_games
    ),
    flagged as (
        select
            *,
            rn - row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as grp
        from games_ranked
        where ht_goals_for > ht_goals_against and not is_win
    ),
    runs as (
        select
            team_abbr,
            min(team_name) as team_name,
            min(season_label) as start_season,
            max(season_label) as end_season,
            count(*) as run_length,
            min(kickoff_at) as start_at,
            max(kickoff_at) as end_at,
            grp
        from flagged
        group by team_abbr, grp
    ),
    ranked_runs as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by run_length desc, start_at, team_name
            ) as rn
        from runs
    ),
    final as (
        select * from ranked_runs where rn = 1
    )
    select
        f.team_name,
        f.team_abbr,
        f.run_length,
        case
            when f.start_season = f.end_season then f.start_season
            else f.start_season || ' → ' || f.end_season
        end as seasons,
        date(f.start_at) as start_date,
        date(f.end_at) as end_date,
        (
            select string_agg(w.opponent_name, ', ' order by w.kickoff_at, w.match_id)
            from flagged w
            where w.team_abbr = f.team_abbr and w.grp = f.grp
        ) as opponents
    from final f
    order by f.run_length desc, f.team_name
)
to 'assets/data/ht_lead_no_win_streaks.csv' (header, delimiter ',')`,Bn=`-- Longest consecutive run of matches where each team was losing at half-time but came back to win
copy (
    with team_games as (
        select
            match_id,
            season_label,
            kickoff_at,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            away_team_abbr as opponent_abbr,
            away_team_name as opponent_name,
            home_half_time_score as ht_goals_for,
            away_half_time_score as ht_goals_against,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            season_label,
            kickoff_at,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            home_team_abbr as opponent_abbr,
            home_team_name as opponent_name,
            away_half_time_score as ht_goals_for,
            home_half_time_score as ht_goals_against,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    games_ranked as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as rn
        from team_games
    ),
    flagged as (
        select
            *,
            rn - row_number() over (
                partition by team_abbr
                order by kickoff_at, match_id
            ) as grp
        from games_ranked
        where ht_goals_for < ht_goals_against and is_win
    ),
    runs as (
        select
            team_abbr,
            min(team_name) as team_name,
            min(season_label) as start_season,
            max(season_label) as end_season,
            count(*) as run_length,
            min(kickoff_at) as start_at,
            max(kickoff_at) as end_at,
            grp
        from flagged
        group by team_abbr, grp
    ),
    ranked_runs as (
        select
            *,
            row_number() over (
                partition by team_abbr
                order by run_length desc, start_at, team_name
            ) as rn
        from runs
    ),
    final as (
        select * from ranked_runs where rn = 1
    )
    select
        f.team_name,
        f.team_abbr,
        f.run_length,
        case
            when f.start_season = f.end_season then f.start_season
            else f.start_season || ' → ' || f.end_season
        end as seasons,
        date(f.start_at) as start_date,
        date(f.end_at) as end_date,
        (
            select string_agg(w.opponent_name, ', ' order by w.kickoff_at, w.match_id)
            from flagged w
            where w.team_abbr = f.team_abbr and w.grp = f.grp
        ) as opponents
    from final f
    order by f.run_length desc, f.team_name
)
to 'assets/data/comeback_kings.csv' (header, delimiter ',')`,Mn=`-- Teams with the most half-time comebacks (trailing at HT, then winning) in a single season, top 10
copy (
    with team_games as (
        select
            match_id,
            season_label,
            home_team_abbr as team_abbr,
            home_team_name as team_name,
            home_half_time_score as ht_goals_for,
            away_half_time_score as ht_goals_against,
            result = 'home_win' as is_win
        from "premier_league"."main"."fct_matches"
        union all
        select
            match_id,
            season_label,
            away_team_abbr as team_abbr,
            away_team_name as team_name,
            away_half_time_score as ht_goals_for,
            home_half_time_score as ht_goals_against,
            result = 'away_win' as is_win
        from "premier_league"."main"."fct_matches"
    ),
    comebacks as (
        select
            team_abbr,
            min(team_name) as team_name,
            season_label,
            count(*) as comeback_count
        from team_games
        where ht_goals_for < ht_goals_against and is_win
        group by team_abbr, season_label
    ),
    ranked as (
        select
            *,
            row_number() over (
                order by comeback_count desc, season_label desc, team_name
            ) as rn
        from comebacks
    )
    select
        team_name,
        team_abbr,
        season_label,
        comeback_count
    from ranked
    where rn <= 10
    order by comeback_count desc, season_label desc, team_name
)
to 'assets/data/most_comebacks.csv' (header, delimiter ',')`;function Zn(e,t){const n=new Date(e+"T00:00:00Z"),a=new Date(t+"T00:00:00Z");let s=a.getUTCFullYear()-n.getUTCFullYear();const i=new Date(n);i.setUTCFullYear(n.getUTCFullYear()+s),i>a&&(s-=1,i.setUTCFullYear(i.getUTCFullYear()-1));const c=Math.round((a.getTime()-i.getTime())/864e5);let d;return s>0&&c>0?d=`${s} ${s===1?"year":"years"} and ${c} ${c===1?"day":"days"}`:s>0?d=`${s} ${s===1?"year":"years"}`:d=`${c} ${c===1?"day":"days"}`,{label:d,years:s,days:c}}function o(e,t){return+(e[t]??0)}function G(e,t){return+(e[t]??0)}function y(e,t){return ie(e,t)}const Jn=(()=>{const t=ie(sn)[0];return{total_matches:+t.total_matches,total_unique_teams:+t.total_unique_teams,total_goals:+t.total_goals,last_updated:t.last_updated}})(),Xn=y(rn,e=>({team_abbr:e.team_abbr,team_name:e.team_name,home_wins:o(e,"home_wins"),away_wins:o(e,"away_wins"),total_wins:o(e,"total_wins")})),e0=y(on,e=>({season_label:e.season_label,team_count:o(e,"team_count"),matches_played:o(e,"matches_played"),avg_matches_per_team:G(e,"avg_matches_per_team")})),n0=y(ln,e=>({season_label:e.season_label,team_abbr:e.team_abbr,team_name:e.team_name,avg_home_attendance:G(e,"avg_home_attendance")})),t0=y(mn,e=>({team_abbr:e.team_abbr,team_name:e.team_name,matches_played:o(e,"matches_played"),wins:o(e,"wins"),draws:o(e,"draws"),losses:o(e,"losses"),points:o(e,"points")})),a0=y(cn,e=>({team_name:e.team_name,season_label:e.season_label,streak_start:e.streak_start,streak_length:o(e,"streak_length"),opponents:e.opponents})),s0=y(dn,e=>({streak_id:o(e,"streak_id"),team_name:e.team_name,season_label:e.season_label,streak_length:o(e,"streak_length"),match_date:e.match_date,opponent_abbr:e.opponent_abbr,opponent_name:e.opponent_name,score:e.score})),r0=y(hn,e=>({team_name:e.team_name,team_abbr:e.team_abbr,start_date:e.start_date,end_date:e.end_date,gap_days:o(e,"gap_days"),matches_between:o(e,"matches_between")})),o0=y(_n,e=>({match_id:o(e,"match_id"),kickoff_date:e.kickoff_date,season_label:e.season_label,home_team_name:e.home_team_name,home_team_abbr:e.home_team_abbr,home_score:o(e,"home_score"),home_red_cards:o(e,"home_red_cards"),away_team_name:e.away_team_name,away_team_abbr:e.away_team_abbr,away_score:o(e,"away_score"),away_red_cards:o(e,"away_red_cards"),total_goals:o(e,"total_goals"),total_red_cards:o(e,"total_red_cards"),goals_points:o(e,"goals_points"),red_points:o(e,"red_points"),chaos_score:o(e,"chaos_score")})),i0=y(un,e=>({team_name:e.team_name,team_abbr:e.team_abbr,total_wins:o(e,"total_wins"),home_1_0_wins:o(e,"home_1_0_wins"),away_1_0_wins:o(e,"away_1_0_wins"),one_nil_wins:o(e,"one_nil_wins"),pct_one_nil:G(e,"pct_one_nil")})),l0=y(Cn,e=>({team_name:e.team_name,team_abbr:e.team_abbr,run_length:o(e,"run_length"),seasons:e.seasons,start_date:e.start_date,end_date:e.end_date,opponents:e.opponents})),m0=y(yn,e=>({team_name:e.team_name,team_abbr:e.team_abbr,run_length:o(e,"run_length"),seasons:e.seasons,start_date:e.start_date,end_date:e.end_date,opponents:e.opponents})),c0=y(bn,e=>({team_name:e.team_name,team_abbr:e.team_abbr,season_label:e.season_label,comeback_count:o(e,"comeback_count")})),d0={wins:fn,quality:pn,attendance:Un,allTimeTable:An,fiveGameStreaks:Wn,bigWinStreaks:wn,longestWinlessGaps:gn,mostChaoticMatches:Sn,oneNilWins:Ln,htLeadNoWinStreaks:vn,comebackKings:Bn,mostComebacks:Mn},En=v({...S(),...g()},"VCardActions"),Hn=L()({name:"VCardActions",props:En(),setup(e,t){let{slots:n}=t;return Ge({VBtn:{slim:!0,variant:"text"}}),N(()=>l(e.tag,{class:V(["v-card-actions",e.class]),style:O(e.style)},n)),{}}}),kn=v({opacity:[Number,String],...S(),...g()},"VCardSubtitle"),Rn=L()({name:"VCardSubtitle",props:kn(),setup(e,t){let{slots:n}=t;return N(()=>l(e.tag,{class:V(["v-card-subtitle",e.class]),style:O([{"--v-card-subtitle-opacity":e.opacity},e.style])},n)),{}}}),Nn=We("v-card-title"),Tn=v({appendAvatar:String,appendIcon:I,prependAvatar:String,prependIcon:I,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...S(),...ae(),...g()},"VCardItem"),In=L()({name:"VCardItem",props:Tn(),setup(e,t){let{slots:n}=t;return N(()=>{const a=!!(e.prependAvatar||e.prependIcon),s=!!(a||n.prepend),i=!!(e.appendAvatar||e.appendIcon),c=!!(i||n.append),d=!!(e.title!=null||n.title),f=!!(e.subtitle!=null||n.subtitle);return l(e.tag,{class:V(["v-card-item",e.class]),style:O(e.style)},{default:()=>[s&&k("div",{key:"prepend",class:"v-card-item__prepend"},[n.prepend?l(j,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:e.density,image:e.prependAvatar},VIcon:{density:e.density,icon:e.prependIcon}}},n.prepend):k(Z,null,[e.prependAvatar&&l(x,{key:"prepend-avatar",density:e.density,image:e.prependAvatar},null),e.prependIcon&&l(K,{key:"prepend-icon",density:e.density,icon:e.prependIcon},null)])]),k("div",{class:"v-card-item__content"},[d&&l(Nn,{key:"title"},{default:()=>[n.title?.()??J(e.title)]}),f&&l(Rn,{key:"subtitle"},{default:()=>[n.subtitle?.()??J(e.subtitle)]}),n.default?.()]),c&&k("div",{key:"append",class:"v-card-item__append"},[n.append?l(j,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:e.density,image:e.appendAvatar},VIcon:{density:e.density,icon:e.appendIcon}}},n.append):k(Z,null,[e.appendIcon&&l(K,{key:"append-icon",density:e.density,icon:e.appendIcon},null),e.appendAvatar&&l(x,{key:"append-avatar",density:e.density,image:e.appendAvatar},null)])])]})}),{}}}),On=v({opacity:[Number,String],...S(),...g()},"VCardText"),Vn=L()({name:"VCardText",props:On(),setup(e,t){let{slots:n}=t;return N(()=>l(e.tag,{class:V(["v-card-text",e.class]),style:O([{"--v-card-text-opacity":e.opacity},e.style])},n)),{}}}),Pn=v({appendAvatar:String,appendIcon:I,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:I,ripple:{type:[Boolean,Object],default:!0},subtitle:{type:[String,Number,Boolean],default:void 0},text:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...Pe(),...S(),...ae(),...Ve(),...Oe(),...Ie(),...Te(),...Ne(),...Re(),...ke(),...g(),...Ke(),...He({variant:"elevated"})},"VCard"),h0=L()({name:"VCard",directives:{vRipple:z},props:Pn(),setup(e,t){let{attrs:n,slots:a}=t;const{themeClasses:s}=qe(e),{borderClasses:i}=we(e),{colorClasses:c,colorStyles:d,variantClasses:f}=ge(e),{densityClasses:W}=Se(e),{dimensionStyles:B}=je(e),{elevationClasses:r}=Ye(e),{loaderClasses:m}=Le(e),{locationStyles:p}=ve(e),{positionClasses:_}=Be(e),{roundedClasses:h}=Me(e),b=Ee(e,n),U=xe(void 0);return $e(()=>e.loading,(A,u)=>{U.value=!A&&typeof u=="string"?u:typeof A=="boolean"?void 0:A},{immediate:!0}),N(()=>{const A=e.link!==!1&&b.isLink.value,u=!e.disabled&&e.link!==!1&&(e.link||b.isClickable.value),T=A?"a":e.tag,M=!!(a.title||e.title!=null),E=!!(a.subtitle||e.subtitle!=null),H=M||E,w=!!(a.append||e.appendAvatar||e.appendIcon),fe=!!(a.prepend||e.prependAvatar||e.prependIcon),pe=!!(a.image||e.image),Ue=H||fe||w,Ae=!!(a.text||e.text!=null);return ze(l(T,Ze(b.linkProps,{class:["v-card",{"v-card--disabled":e.disabled,"v-card--flat":e.flat,"v-card--hover":e.hover&&!(e.disabled||e.flat),"v-card--link":u},s.value,i.value,c.value,W.value,r.value,m.value,_.value,h.value,f.value,e.class],style:[d.value,B.value,p.value,{"--v-card-height":Je(e.height)},e.style],onClick:u&&b.navigate.value,tabindex:e.disabled?-1:void 0}),{default:()=>[pe&&k("div",{key:"image",class:"v-card__image"},[a.image?l(j,{key:"image-defaults",disabled:!e.image,defaults:{VImg:{cover:!0,src:e.image}}},a.image):l(Fe,{key:"image-img",cover:!0,src:e.image},null)]),l(De,{name:"v-card",active:!!e.loading,color:U.value},{default:a.loader}),Ue&&l(In,{key:"item",prependAvatar:e.prependAvatar,prependIcon:e.prependIcon,title:e.title,subtitle:e.subtitle,appendAvatar:e.appendAvatar,appendIcon:e.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),Ae&&l(Vn,{key:"text"},{default:()=>[a.text?.()??e.text]}),a.default?.(),a.actions&&l(Hn,null,{default:a.actions}),Qe(u,"v-card")]}),[[z,u&&e.ripple]])}),{}}}),le=P.reduce((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e),{}),me=P.reduce((e,t)=>{const n="offset"+Y(t);return e[n]={type:[String,Number],default:null},e},{}),ce=P.reduce((e,t)=>{const n="order"+Y(t);return e[n]={type:[String,Number],default:null},e},{}),ne={col:Object.keys(le),offset:Object.keys(me),order:Object.keys(ce)};function Fn(e,t,n){let a=e;if(!(n==null||n===!1)){if(t){const s=t.replace(e,"");a+=`-${s}`}return e==="col"&&(a="v-"+a),e==="col"&&(n===""||n===!0)||(a+=`-${n}`),a.toLowerCase()}}const Dn=["auto","start","end","center","baseline","stretch"],Qn=v({cols:{type:[Boolean,String,Number],default:!1},...le,offset:{type:[String,Number],default:null},...me,order:{type:[String,Number],default:null},...ce,alignSelf:{type:String,default:null,validator:e=>Dn.includes(e)},...S(),...g()},"VCol"),_0=L()({name:"VCol",props:Qn(),setup(e,t){let{slots:n}=t;const a=re(()=>{const s=[];let i;for(i in ne)ne[i].forEach(d=>{const f=e[d],W=Fn(i,d,f);W&&s.push(W)});const c=s.some(d=>d.startsWith("v-col-"));return s.push({"v-col":!c||!e.cols,[`v-col-${e.cols}`]:e.cols,[`offset-${e.offset}`]:e.offset,[`order-${e.order}`]:e.order,[`align-self-${e.alignSelf}`]:e.alignSelf}),s});return()=>se(e.tag,{class:[a.value,e.class],style:e.style},n.default?.())}}),q=["start","end","center"],de=["space-between","space-around","space-evenly"];function $(e,t){return P.reduce((n,a)=>{const s=e+Y(a);return n[s]=t(),n},{})}const jn=[...q,"baseline","stretch"],he=e=>jn.includes(e),_e=$("align",()=>({type:String,default:null,validator:he})),Yn=[...q,...de],ue=e=>Yn.includes(e),Ce=$("justify",()=>({type:String,default:null,validator:ue})),Gn=[...q,...de,"stretch"],ye=e=>Gn.includes(e),be=$("alignContent",()=>({type:String,default:null,validator:ye})),te={align:Object.keys(_e),justify:Object.keys(Ce),alignContent:Object.keys(be)},qn={align:"align",justify:"justify",alignContent:"align-content"};function $n(e,t,n){let a=qn[e];if(n!=null){if(t){const s=t.replace(e,"");a+=`-${s}`}return a+=`-${n}`,a.toLowerCase()}}const xn=v({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:he},..._e,justify:{type:String,default:null,validator:ue},...Ce,alignContent:{type:String,default:null,validator:ye},...be,...S(),...g()},"VRow"),u0=L()({name:"VRow",props:xn(),setup(e,t){let{slots:n}=t;const a=re(()=>{const s=[];let i;for(i in te)te[i].forEach(c=>{const d=e[c],f=$n(i,c,d);f&&s.push(f)});return s.push({"v-row--no-gutters":e.noGutters,"v-row--dense":e.dense,[`align-${e.align}`]:e.align,[`justify-${e.justify}`]:e.justify,[`align-content-${e.alignContent}`]:e.alignContent}),s});return()=>se(e.tag,{class:["v-row",a.value,e.class],style:e.style},n.default?.())}});export{u0 as V,_0 as a,h0 as b,Vn as c,Nn as d,Rn as e,d0 as f,n0 as g,t0 as h,m0 as i,s0 as j,a0 as k,Zn as l,c0 as m,r0 as n,i0 as o,o0 as p,e0 as q,l0 as r,Jn as s,Xn as w};
