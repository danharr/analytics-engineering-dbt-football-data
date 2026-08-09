import{a as w,m as R,c as O,d as N0,e as z,V as q,f as Q,b as a0,R as x,g as u0,h as R0,u as O0,i as V0,j as I0,k as E0,l as y0,n as B0,o as p0,p as v0,q as b0,r as w0,s as g0,t as f0,v as _0,w as k0,x as P0,y as F0,L as D0,z as G0,A as Y0,B as Q0}from"./BcPi21GX.js";import{j as V,s as J0,b as l,n as _,k,l as I,a as v,F as $,t as Z,I as f,p as K0,v as j0,x as z0,m as q0,y as x0,z as $0,q as Z0,A as r0,i as o0,B as P,C as J}from"./BDOH9n4k.js";var X={},D={},G=34,b=10,Y=13;function s0(n){return new Function("d","return {"+n.map(function(t,e){return JSON.stringify(t)+": d["+e+'] || ""'}).join(",")+"}")}function X0(n,t){var e=s0(n);return function(a,o){return t(e(a),o,n)}}function n0(n){var t=Object.create(null),e=[];return n.forEach(function(a){for(var o in a)o in t||e.push(t[o]=o)}),e}function m(n,t){var e=n+"",a=e.length;return a<t?new Array(t-a+1).join(0)+e:e}function n1(n){return n<0?"-"+m(-n,6):n>9999?"+"+m(n,6):m(n,4)}function e1(n){var t=n.getUTCHours(),e=n.getUTCMinutes(),a=n.getUTCSeconds(),o=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":n1(n.getUTCFullYear())+"-"+m(n.getUTCMonth()+1,2)+"-"+m(n.getUTCDate(),2)+(o?"T"+m(t,2)+":"+m(e,2)+":"+m(a,2)+"."+m(o,3)+"Z":a?"T"+m(t,2)+":"+m(e,2)+":"+m(a,2)+"Z":e||t?"T"+m(t,2)+":"+m(e,2)+"Z":"")}function t1(n){var t=new RegExp('["'+n+`
\r]`),e=n.charCodeAt(0);function a(s,U){var C,T,A=o(s,function(S,M){if(C)return C(S,M-1);T=S,C=U?X0(S,U):s0(S)});return A.columns=T||[],A}function o(s,U){var C=[],T=s.length,A=0,S=0,M,H=T<=0,W=!1;s.charCodeAt(T-1)===b&&--T,s.charCodeAt(T-1)===Y&&--T;function g(){if(H)return D;if(W)return W=!1,X;var B,p=A,u;if(s.charCodeAt(p)===G){for(;A++<T&&s.charCodeAt(A)!==G||s.charCodeAt(++A)===G;);return(B=A)>=T?H=!0:(u=s.charCodeAt(A++))===b?W=!0:u===Y&&(W=!0,s.charCodeAt(A)===b&&++A),s.slice(p+1,B-1).replace(/""/g,'"')}for(;A<T;){if((u=s.charCodeAt(B=A++))===b)W=!0;else if(u===Y)W=!0,s.charCodeAt(A)===b&&++A;else if(u!==e)continue;return s.slice(p,B)}return H=!0,s.slice(p,T)}for(;(M=g())!==D;){for(var y=[];M!==X&&M!==D;)y.push(M),M=g();U&&(y=U(y,S++))==null||C.push(y)}return C}function i(s,U){return s.map(function(C){return U.map(function(T){return E(C[T])}).join(n)})}function d(s,U){return U==null&&(U=n0(s)),[U.map(E).join(n)].concat(i(s,U)).join(`
`)}function h(s,U){return U==null&&(U=n0(s)),i(s,U).join(`
`)}function c(s){return s.map(N).join(`
`)}function N(s){return s.map(E).join(n)}function E(s){return s==null?"":s instanceof Date?e1(s):t.test(s+="")?'"'+s.replace(/"/g,'""')+'"':s}return{parse:a,parseRows:o,format:d,formatBody:h,formatRows:c,formatRow:N,formatValue:E}}var a1=t1(","),i0=a1.parse;const r1=`total_matches,total_unique_teams,total_goals,last_updated
13166,51,35478,2026-08-09
`,o1=`team_abbr,team_name,home_wins,away_wins,total_wins
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
`,s1=`season_label,team_count,matches_played,avg_matches_per_team
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
`,i1=`season_label,team_abbr,team_name,avg_home_attendance
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
2021-22,ARS,Arsenal,59776.0
2021-22,AVL,Aston Villa,41681.0
2021-22,BHA,Brighton and Hove Albion,30943.0
2021-22,BRE,Brentford,16912.0
2021-22,BUR,Burnley,19353.0
2021-22,CHE,Chelsea,37812.0
2021-22,CRY,Crystal Palace,24282.0
2021-22,EVE,Everton,38886.0
2021-22,LEE,Leeds United,36308.0
2021-22,LEI,Leicester City,31941.0
2021-22,LIV,Liverpool,53023.0
2021-22,MCI,Manchester City,52774.0
2021-22,MUN,Manchester United,73150.0
2021-22,NEW,Newcastle United,51487.0
2021-22,NOR,Norwich City,26810.0
2021-22,SOU,Southampton,30055.0
2021-22,TOT,Tottenham Hotspur,56523.0
2021-22,WAT,Watford,20598.0
2021-22,WHU,West Ham United,58367.0
2021-22,WOL,Wolverhampton Wanderers,30756.0
2022-23,ARS,Arsenal,60186.0
2022-23,AVL,Aston Villa,41707.0
2022-23,BHA,Brighton and Hove Albion,31477.0
2022-23,BOU,Bournemouth,10309.0
2022-23,BRE,Brentford,17077.0
2022-23,CHE,Chelsea,40002.0
2022-23,CRY,Crystal Palace,24951.0
2022-23,EVE,Everton,39237.0
2022-23,FUL,Fulham,23913.0
2022-23,LEE,Leeds United,36566.0
2022-23,LEI,Leicester City,31887.0
2022-23,LIV,Liverpool,53179.0
2022-23,MCI,Manchester City,53249.0
2022-23,MUN,Manchester United,73645.0
2022-23,NEW,Newcastle United,52127.0
2022-23,NFO,Nottingham Forest,29188.0
2022-23,SOU,Southampton,30379.0
2022-23,TOT,Tottenham Hotspur,61585.0
2022-23,WHU,West Ham United,62462.0
2022-23,WOL,Wolverhampton Wanderers,31508.0
2023-24,ARS,Arsenal,60236.0
2023-24,AVL,Aston Villa,41862.0
2023-24,BHA,Brighton and Hove Albion,31543.0
2023-24,BOU,Bournemouth,11104.0
2023-24,BRE,Brentford,17082.0
2023-24,BUR,Burnley,21153.0
2023-24,CHE,Chelsea,39576.0
2023-24,CRY,Crystal Palace,24941.0
2023-24,EVE,Everton,39042.0
2023-24,FUL,Fulham,24301.0
2023-24,LIV,Liverpool,55809.0
2023-24,LUT,Luton Town,11278.0
2023-24,MCI,Manchester City,53399.0
2023-24,MUN,Manchester United,73534.0
2023-24,NEW,Newcastle United,52153.0
2023-24,NFO,Nottingham Forest,29386.0
2023-24,SHU,Sheffield United,30016.0
2023-24,TOT,Tottenham Hotspur,61459.0
2023-24,WHU,West Ham United,62575.0
2023-24,WOL,Wolverhampton Wanderers,31007.0
2024-25,ARS,Arsenal,60251.0
2024-25,AVL,Aston Villa,41854.0
2024-25,BHA,Brighton and Hove Albion,31999.0
2024-25,BOU,Bournemouth,11213.0
2024-25,BRE,Brentford,17094.0
2024-25,CHE,Chelsea,39620.0
2024-25,CRY,Crystal Palace,25067.0
2024-25,EVE,Everton,39189.0
2024-25,FUL,Fulham,26826.0
2024-25,IPS,Ipswich Town,29742.0
2024-25,LEI,Leicester City,31448.0
2024-25,LIV,Liverpool,60330.0
2024-25,MCI,Manchester City,52575.0
2024-25,MUN,Manchester United,73747.0
2024-25,NEW,Newcastle United,52187.0
2024-25,NFO,Nottingham Forest,30059.0
2024-25,SOU,Southampton,30865.0
2024-25,TOT,Tottenham Hotspur,61127.0
2024-25,WHU,West Ham United,62464.0
2024-25,WOL,Wolverhampton Wanderers,30660.0
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
`,l1=`team_abbr,team_name,matches_played,wins,draws,losses,points
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
`,U1=`team_name,season_label,streak_start,streak_length,opponents
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
`,d1=`streak_id,team_name,season_label,streak_length,match_date,opponent_abbr,opponent_name,score
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
`,h1=`team_name,team_abbr,start_date,end_date,gap_days,matches_between
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
`,A1=`match_id,kickoff_date,season_label,home_team_name,home_team_abbr,home_score,home_red_cards,away_team_name,away_team_abbr,away_score,away_red_cards,total_goals,total_red_cards,goals_points,red_points,chaos_score
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
`,T1=`team_name,team_abbr,total_wins,home_1_0_wins,away_1_0_wins,one_nil_wins,pct_one_nil
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
`,L1=`team_name,team_abbr,run_length,seasons,start_date,end_date,opponents
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
`,W1=`team_name,team_abbr,run_length,seasons,start_date,end_date,opponents
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
`,m1=`team_name,team_abbr,season_label,comeback_count
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
`,S1=`rank,manager_name,wins,games,draws,losses,win_pct,points,goals_for,goals_against
1,Alex Ferguson,528,810,168,114,65.2,1752,1627,703
2,Arsène Wenger,476,828,199,153,57.5,1627,1561,807
3,David Moyes,290,754,199,265,38.5,1069,1016,983
4,Pep Guardiola,269,380,58,53,70.8,865,904,328
5,Harry Redknapp,236,642,167,239,36.8,875,819,849
6,José Mourinho,217,363,84,62,59.8,735,625,305
7,Jürgen Klopp,209,334,78,47,62.6,705,714,331
8,Sam Allardyce,178,541,146,217,32.9,680,636,759
9,Rafael Benítez,173,359,86,100,48.2,605,543,350
10,Mark Hughes,157,465,127,181,33.8,598,568,640
11,Mauricio Pochettino,150,294,70,74,51.0,520,522,335
12,Mikel Arteta,149,248,48,51,60.1,495,467,241
13,Eddie Howe,140,369,81,148,37.9,501,547,565
14,Brendan Rodgers,139,312,71,102,44.6,488,529,410
15,Roy Hodgson,136,416,102,178,32.7,510,481,586
16,Steve Bruce,133,476,132,211,27.9,531,496,654
17,Martin O'Neill,130,360,115,115,36.1,505,475,449
18,Kevin Keegan,116,267,65,86,43.4,413,409,317
19,Kenny Dalglish,115,238,60,63,48.3,405,362,239
20,David O'Leary,112,259,68,79,43.2,404,364,304
21,Claudio Ranieri,109,238,59,70,45.8,386,385,283
22,Alan Pardew,109,321,69,143,34.0,396,391,481
23,Alan Curbishley,108,328,85,135,32.9,409,381,472
24,Gérard Houllier,106,234,61,67,45.3,379,370,256
25,George Graham,102,288,92,94,35.4,398,341,300
26,Tony Pulis,99,324,94,131,30.6,391,321,416
27,Sean Dyche,99,351,95,157,28.2,392,343,492
28,Unai Emery,98,190,42,50,51.6,336,321,257
29,Joe Kinnear,97,302,92,113,32.1,383,369,436
30,Graeme Souness,94,280,78,108,33.6,360,376,380
31,Manuel Pellegrini,90,171,32,49,52.6,302,329,203
32,Marco Silva,90,247,50,107,36.4,320,334,372
33,Glenn Hoddle,88,256,70,98,34.4,334,314,352
34,Antonio Conte,83,132,19,30,62.9,268,259,135
35,Roberto Mancini,83,134,27,24,61.9,276,259,114
36,Roy Evans,83,172,46,43,48.3,295,280,173
37,Bobby Robson,83,188,51,54,44.1,300,294,235
38,Nuno Espírito Santo,83,219,54,82,37.9,303,278,294
39,Gordon Strachan,82,271,80,109,30.3,326,308,360
40,Roberto Martínez,81,265,77,107,30.6,320,331,419
41,Gerry Francis,79,217,64,74,36.4,301,295,283
42,Martin Jol,75,202,51,76,37.1,276,277,281
43,Peter Reid,74,227,60,93,32.6,282,260,316
44,Carlo Ancelotti,73,134,27,34,54.5,246,243,140
45,Steve McClaren,70,218,56,92,32.1,266,256,300
46,Howard Wilkinson,66,189,57,66,34.9,255,241,238
47,Ron Atkinson,66,203,58,79,32.5,256,228,267
48,Joe Royle,66,219,64,89,30.1,262,282,323
49,John Gregory,64,162,48,50,39.5,240,211,183
50,Thomas Frank,61,178,46,71,34.3,229,264,261
51,Bryan Robson,61,232,71,100,26.3,254,255,340
52,Jim Smith,60,197,58,79,30.5,238,223,280
53,Ole Gunnar Solskjær,59,127,32,36,46.5,209,212,168
54,Ronald Koeman,55,123,27,41,44.7,192,182,136
55,Brian Little,53,144,39,52,36.8,198,173,162
56,Chris Coleman,50,152,39,63,32.9,189,192,220
57,Ralph Hasenhüttl,47,151,36,68,31.1,177,185,255
58,Graham Potter,47,165,56,62,28.5,197,180,206
59,Gianluca Vialli,45,94,29,20,47.9,164,136,87
60,Erik ten Hag,44,85,14,27,51.8,146,123,112
61,Glenn Roeder,44,126,30,52,34.9,162,151,176
61,Trevor Francis,44,126,42,40,34.9,174,180,162
63,Arne Slot,42,76,18,16,55.3,144,149,94
64,André Villas-Boas,42,81,19,20,51.9,145,128,99
65,Steve Coppell,42,146,37,67,28.8,163,164,221
66,Chris Hughton,42,170,50,78,24.7,176,169,264
67,Ruud Gullit,41,104,26,37,39.4,149,164,148
68,Andoni Iraola,41,114,38,35,36.0,161,170,167
69,Walter Smith,41,143,42,60,28.7,165,173,190
70,David Pleat,40,124,33,51,32.3,153,162,194
71,Louis van Gaal,39,76,19,18,51.3,136,111,72
72,Paul Lambert,39,155,44,72,25.2,161,162,251
73,Frank Clark,38,97,31,28,39.2,145,136,126
74,Frank Lampard,38,104,21,45,36.5,135,145,153
75,Dave Jones,38,136,31,67,27.9,145,151,233
76,Mike Walker,37,96,25,34,38.5,136,126,143
77,Thomas Tuchel,35,63,17,11,55.6,122,109,55
78,Avram Grant,34,93,26,33,36.6,128,123,131
79,Dean Smith,34,122,24,64,27.9,126,139,207
80,Paul Jewell,34,138,28,76,24.6,130,135,235
81,George Burley,33,98,17,48,33.7,116,114,159
82,Stuart Pearce,33,104,26,45,31.7,125,101,122
83,Owen Coyle,33,116,24,59,28.4,123,136,204
84,Alex McLeish,33,138,52,53,23.9,151,145,198
85,Ange Postecoglou,31,81,12,38,38.3,105,139,136
86,Oliver Glasner,31,90,30,29,34.4,123,122,117
87,Claude Puel,31,94,23,40,33.0,116,117,132
88,Slaven Bilić,31,100,30,39,31.0,123,133,164
89,Fabian Hürzeler,30,76,24,22,39.5,114,118,105
90,Howard Kendall,30,97,24,43,30.9,114,113,134
91,Gary Megson,30,134,37,67,22.4,127,134,211
92,Roberto De Zerbi,29,77,21,27,37.7,108,124,117
93,Gareth Southgate,29,114,33,52,25.4,120,115,159
94,Enzo Maresca,28,57,15,14,49.1,99,96,64
95,Danny Wilson,28,105,18,59,26.7,102,105,180
96,Alan Ball,27,97,33,37,27.8,114,119,151
97,Neil Warnock,27,112,23,62,24.1,104,103,184
98,Dave Bassett,27,131,43,61,20.6,124,133,196
99,Mick McCarthy,27,138,28,83,19.6,109,127,241
100,Gary O'Neil,25,88,16,47,28.4,91,109,160
101,Garry Monk,24,67,16,27,35.8,88,85,90
102,John Lyall,24,101,34,43,23.8,106,101,146
103,Marcelo Bielsa,23,64,13,28,35.9,82,91,114
104,Ray Wilkins,23,67,11,33,34.3,80,79,93
105,Maurizio Sarri,21,38,9,8,55.3,72,63,39
106,Javi Gracia,21,67,14,32,31.3,77,80,115
107,Brian Horton,21,79,29,29,26.6,92,89,107
108,Graham Taylor,21,89,19,49,23.6,82,92,143
109,Jean Tigana,20,71,22,29,28.2,82,71,90
110,Gianfranco Zola,20,72,20,32,27.8,80,81,103
111,Chris Wilder,20,90,19,51,22.2,79,79,149
112,Guus Hiddink,19,35,12,4,54.3,69,65,36
113,Tim Sherwood,19,45,5,21,42.2,62,68,70
114,Roberto Di Matteo,19,48,11,18,39.6,68,73,75
115,Colin Todd,19,69,16,34,27.5,73,70,114
116,Ray Harford,18,48,11,19,37.5,65,67,61
117,Phil Neal,18,59,18,23,30.5,72,57,79
118,Nigel Pearson,18,60,13,29,30.0,67,72,89
119,Ian Branfoot,18,66,14,34,27.3,68,77,97
120,Bruce Rioch,17,38,12,9,44.7,63,49,32
121,Terry Venables,17,52,14,21,32.7,65,62,59
122,Steve Clarke,17,54,13,24,31.5,64,71,83
123,Michael Laudrup,17,62,19,26,27.4,70,76,86
124,Patrick Vieira,17,65,24,24,26.2,75,71,80
125,Daniel Farke,17,87,22,48,19.5,73,80,157
126,Doug Livermore,16,42,11,15,38.1,59,60,66
127,Bruno Lage,16,46,9,21,34.8,57,41,52
128,Bobby Gould,16,53,19,18,30.2,67,65,68
129,Ossie Ardiles,16,54,14,24,29.6,62,75,83
130,Sven-Göran Eriksson,15,38,10,13,39.5,55,45,53
131,Julen Lopetegui,15,43,9,19,34.9,54,47,73
132,Peter Taylor,15,46,8,23,32.6,53,44,68
133,Ruben Amorim,15,47,13,19,31.9,58,66,72
134,Roy Keane,15,53,9,29,28.3,54,49,83
135,Phil Thompson,14,24,7,3,58.3,49,41,18
136,Luiz Felipe Scolari,14,25,7,4,56.0,49,44,15
137,Keith Andrews,14,38,11,13,36.8,53,55,52
137,Régis Le Bris,14,38,12,12,36.8,54,42,48
139,Vítor Pereira,14,44,10,20,31.8,52,60,64
140,Gus Poyet,14,60,21,25,23.3,63,59,87
141,Steve Cooper,14,67,20,33,20.9,62,70,121
142,Michael Carrick,13,19,4,2,68.4,43,37,21
143,Billy Bonds,13,42,13,16,31.0,52,47,58
144,Quique Sánchez Flores,13,48,13,22,27.1,52,47,70
145,Steve Kean,13,59,14,32,22.0,53,72,110
146,Phil Brown,13,67,20,34,19.4,59,66,125
147,Scott Parker,13,86,21,52,15.1,60,71,155
148,Paul Clement,12,37,5,20,32.4,41,34,51
149,Steven Gerrard,12,38,8,18,31.6,44,45,50
150,John Deehan,12,61,23,26,19.7,59,66,89
151,Walter Mazzarri,11,38,7,20,28.9,40,40,68
152,Alan Smith,11,42,12,19,26.2,45,34,49
152,Lennie Lawrence,11,42,11,20,26.2,44,54,75
154,Ian Holloway,11,46,9,26,23.9,42,61,95
155,David Wagner,11,60,15,34,18.3,48,41,95
156,Ralf Rangnick,10,24,7,7,41.7,37,33,33
157,Juande Ramos,10,36,11,15,27.8,41,54,52
158,Brian Clough,10,42,10,22,23.8,40,41,62
159,Iain Dowie,10,59,17,32,16.9,47,57,94
160,Francesco Guidolin,9,24,5,10,37.5,32,29,34
161,Christian Gross,9,26,7,10,34.6,34,35,40
162,Tony Parkes,9,28,11,8,32.1,38,36,29
163,Ian Porterfield,9,29,10,10,31.0,37,32,36
164,Alex Neil,9,38,7,22,23.7,34,39,67
164,Dave Merrington,9,38,11,18,23.7,38,34,52
166,Rob Edwards,9,65,17,39,13.8,44,72,128
167,Craig Shakespeare,8,21,5,8,38.1,29,34,33
168,Jesse Marsch,8,32,9,15,25.0,33,39,53
169,Tony Mowbray,8,38,8,22,21.1,32,36,67
170,Egil Olsen,7,36,11,18,19.4,32,44,70
171,Nigel Worthington,7,38,12,19,18.4,33,42,77
172,Micky Adams,7,43,18,18,16.3,39,54,74
173,Ryan Mason,6,12,1,5,50.0,19,26,20
174,Stewart Houston,6,18,4,8,33.3,22,29,24
175,Brian Kidd,6,25,11,8,24.0,29,28,31
176,Eddie Gray,6,26,7,13,23.1,25,29,48
177,Paul Hart,6,27,6,15,22.2,24,23,35
178,Nigel Adkins,6,30,9,15,20.0,27,38,56
179,David Webb,5,13,4,4,38.5,19,19,18
179,Liam Rosenior,5,13,2,6,38.5,17,19,21
179,Paul Sturrock,5,13,2,6,38.5,17,20,22
182,Carlos Carvalhal,5,18,5,8,27.8,20,17,25
183,Ricky Sbragia,5,23,6,12,21.7,21,21,30
184,Ruud van Nistelrooy,5,27,4,18,18.5,19,21,54
185,Brian McDermott,5,29,8,16,17.2,23,35,56
186,Mauricio Pellegrino,5,30,13,12,16.7,28,29,44
187,Aidy Boothroyd,5,38,13,20,13.2,28,29,59
187,Vincent Kompany,5,38,9,24,13.2,24,41,78
189,John Gorman,5,42,15,22,11.9,30,47,100
190,Peter Shreeves,4,10,1,5,40.0,13,16,14
191,Malky Mackay,4,18,5,9,22.2,17,13,28
192,Alan Irvine,4,19,5,10,21.1,17,18,28
192,John Carver,4,19,3,12,21.1,15,18,32
192,Stuart Gray,4,19,4,11,21.1,16,11,28
195,Alain Perrin,4,20,6,10,20.0,18,21,28
196,Jim Jefferies,4,24,7,13,16.7,19,25,48
196,Paul Heckingbottom,4,24,2,18,16.7,14,15,57
198,Aitor Karanka,4,27,10,13,14.8,22,19,30
199,Kieran McKenna,4,38,10,24,10.5,22,36,82
200,Pat Rice,3,3,0,0,100.0,9,8,1
201,Darren Moore,3,6,2,1,50.0,11,6,5
201,David Unsworth,3,6,1,2,50.0,10,13,10
203,Kevin MacDonald,3,7,1,3,42.9,10,9,13
204,Jacques Santini,3,11,4,4,27.3,13,6,8
205,Felix Magath,3,12,3,6,25.0,12,14,27
205,Mike Jackson,3,12,4,5,25.0,13,13,16
207,René Meulensteen,3,13,1,9,23.1,10,15,34
208,Chris Ramsey,3,15,2,10,20.0,11,18,31
209,Dick Advocaat,3,17,6,8,17.6,15,16,28
209,Paul Ince,3,17,4,10,17.6,13,17,34
211,Brian Laws,3,18,1,14,16.7,10,20,42
211,Pepe Mel,3,18,6,9,16.7,15,20,32
213,Mike Phelan,3,20,4,13,15.0,13,17,44
214,Lawrie Sanchez,3,22,8,11,13.6,17,22,36
215,Chris Hutchings,3,24,6,15,12.5,15,15,38
215,Mark McGhee,3,24,7,14,12.5,16,26,47
217,Trevor Brooking,2,3,1,0,66.7,7,4,2
218,Ryan Giggs,2,4,1,1,50.0,7,8,3
219,Gary McAllister,2,5,2,1,40.0,8,6,5
220,Tomas Brolin,2,7,0,5,28.6,6,8,16
220,Xisco Muñoz,2,7,1,4,28.6,7,7,10
222,Bob Bradley,2,11,2,7,18.2,8,15,29
223,Paolo Di Canio,2,12,3,7,16.7,9,11,22
224,Velimir Zajec,2,13,2,9,15.4,8,10,24
225,Rubén Sellés,2,16,4,10,12.5,10,18,33
225,Tony Adams,2,16,5,9,12.5,11,16,28
227,Rémi Garde,2,21,6,13,9.5,12,13,41
228,Roy McFarland,2,22,4,16,9.1,10,21,44
229,Jim Barron,1,1,0,0,100.0,3,4,3
230,Aaron Danks,1,2,0,1,50.0,3,4,4
230,Michael Appleton,1,2,1,0,50.0,4,5,4
232,Mike Stowell,1,3,0,2,33.3,3,3,4
233,Cristian Stellini,1,4,1,2,25.0,4,6,11
233,Duncan Ferguson,1,4,2,1,25.0,5,4,3
235,Freddie Ljungberg,1,5,2,2,20.0,5,6,8
235,Keith Downing,1,5,3,1,20.0,6,6,6
237,Calum McFarlane,1,6,2,3,16.7,5,7,10
237,Ray Lewington,1,6,3,2,16.7,6,9,15
239,Alan Curtis,1,7,2,4,14.3,5,5,11
239,Dave Watson,1,7,3,3,14.3,6,7,12
239,Les Reed,1,7,1,5,14.3,4,4,15
239,Steve Davis,1,7,1,5,14.3,4,5,15
243,Alan Shearer,1,8,2,5,12.5,5,4,10
243,Jimmy Gabriel,1,8,1,6,12.5,4,3,12
243,Nathan Jones,1,8,0,7,12.5,3,6,16
246,Sammy Lee,1,11,3,7,9.1,6,12,19
246,Steve Agnew,1,11,3,7,9.1,6,8,23
248,Kevin Ball,1,12,2,9,8.3,5,9,23
248,Slaviša Jokanović,1,12,2,9,8.3,5,11,31
250,Billy Davies,1,14,3,10,7.1,6,5,33
250,Ivan Jurić,1,14,1,12,7.1,4,12,38
252,Jan Siewert,1,15,2,12,6.7,5,9,36
252,Russell Martin,1,15,2,12,6.7,5,11,31
254,Steve Wigley,1,16,8,7,6.3,11,16,24
255,Terry Connor,0,13,4,9,0.0,4,12,33
256,Simon Rusk,0,9,3,6,0.0,3,3,17
257,Eric Black,0,8,1,7,0.0,1,5,20
258,Keith Millen,0,7,3,4,0.0,3,2,9
259,Igor Tudor,0,5,1,4,0.0,1,4,13
259,Neil Adams,0,5,1,4,0.0,1,2,10
261,Frank de Boer,0,4,0,4,0.0,0,0,7
261,Hayden Mullins,0,4,1,3,0.0,1,2,9
263,Graeme Jones,0,3,2,1,0.0,2,2,5
263,John Wark,0,3,2,1,0.0,2,4,7
263,Kevin Keen,0,3,0,3,0.0,0,4,9
263,Michael Skubala,0,3,1,2,0.0,1,2,5
267,Billy McEwan,0,2,0,2,0.0,0,1,4
267,David Kerslake,0,2,1,1,0.0,1,2,4
267,Frank Barlow,0,2,0,2,0.0,0,0,6
267,Frank Burrows,0,2,1,1,0.0,1,3,6
267,Joe Jordan,0,2,0,2,0.0,0,0,5
267,Leon Britton,0,2,1,1,0.0,1,1,6
267,Stuart McCall,0,2,0,2,0.0,0,0,3
267,Terry Burton,0,2,1,1,0.0,1,2,4
275,Archie Knox,0,1,0,1,0.0,0,0,2
275,Ben Dawson,0,1,0,1,0.0,0,1,4
275,Bruno Saltor,0,1,1,0,0.0,1,0,0
275,Darren Fletcher,0,1,1,0,0.0,1,2,2
275,James Collins,0,1,0,1,0.0,0,0,3
275,Kelvin Davis,0,1,0,1,0.0,0,1,3
275,Mark Hudson,0,1,0,1,0.0,0,0,3
275,Paddy McCarthy,0,1,0,1,0.0,0,1,4
275,Steve Perryman,0,1,0,1,0.0,0,0,2
275,Terry McDermott,0,1,1,0,0.0,1,2,2
275,Tony Book,0,1,1,0,0.0,1,1,1
`,c1=`team_name,manager_name,from_date,until_date,present,role
Arsenal,George Graham,1986-05-14,1995-02-21,0,permanent
Arsenal,Stewart Houston,1995-02-22,1995-06-08,0,caretaker
Arsenal,Bruce Rioch,1995-06-08,1996-08-12,0,permanent
Arsenal,Stewart Houston,1996-08-12,1996-09-13,0,caretaker
Arsenal,Pat Rice,1996-09-13,1996-09-30,0,caretaker
Arsenal,Arsène Wenger,1996-10-01,2018-05-13,0,permanent
Arsenal,Unai Emery,2018-05-23,2019-11-29,0,permanent
Arsenal,Freddie Ljungberg,2019-11-29,2019-12-21,0,caretaker
Arsenal,Mikel Arteta,2019-12-22,2026-08-09,1,incumbent
Aston Villa,Ron Atkinson,1991-06-07,1994-11-10,0,permanent
Aston Villa,Jim Barron,1994-11-11,1994-11-24,0,caretaker
Aston Villa,Brian Little,1994-11-25,1998-02-24,0,permanent
Aston Villa,John Gregory,1998-02-25,2002-01-24,0,permanent
Aston Villa,John Deehan,2002-01-24,2002-02-05,0,caretaker
Aston Villa,Stuart Gray,2002-01-24,2002-02-05,0,caretaker
Aston Villa,Graham Taylor,2002-02-05,2003-05-14,0,permanent
Aston Villa,David O'Leary,2003-05-20,2006-07-19,0,permanent
Aston Villa,Martin O'Neill,2006-08-05,2010-08-09,0,permanent
Aston Villa,Kevin MacDonald,2010-08-09,2010-09-08,0,caretaker
Aston Villa,Gérard Houllier,2010-09-08,2011-06-01,0,permanent
Aston Villa,Gary McAllister,2011-04-23,2011-05-22,0,caretaker
Aston Villa,Alex McLeish,2011-06-17,2012-05-14,0,permanent
Aston Villa,Paul Lambert,2012-06-02,2015-02-11,0,permanent
Aston Villa,Scott Marshall,2015-02-11,2015-02-14,0,caretaker
Aston Villa,Tim Sherwood,2015-02-14,2015-10-25,0,permanent
Aston Villa,Kevin MacDonald,2015-10-25,2015-11-02,0,caretaker
Aston Villa,Rémi Garde,2015-11-02,2016-03-29,0,permanent
Aston Villa,Eric Black,2016-03-29,2016-06-02,0,caretaker
Aston Villa,Dean Smith,2018-10-10,2021-11-07,0,permanent
Aston Villa,Steven Gerrard,2021-11-11,2022-10-20,0,permanent
Aston Villa,Aaron Danks,2022-10-21,2022-10-31,0,caretaker
Aston Villa,Unai Emery,2022-11-01,2026-08-09,1,incumbent
Barnsley,Danny Wilson,1994-06-02,1998-07-07,0,permanent
Birmingham City,Steve Bruce,2001-12-12,2007-11-23,0,permanent
Birmingham City,Eric Black,2007-11-23,2007-11-27,0,caretaker
Birmingham City,Alex McLeish,2007-11-28,2011-06-12,0,permanent
Blackburn Rovers,Kenny Dalglish,1991-10-12,1995-06-21,0,permanent
Blackburn Rovers,Ray Harford,1995-06-25,1996-10-25,0,permanent
Blackburn Rovers,Tony Parkes,1996-10-25,1997-06-01,0,permanent
Blackburn Rovers,Roy Hodgson,1997-06-01,1998-11-21,0,permanent
Blackburn Rovers,Brian Kidd,1998-12-04,1999-11-03,0,permanent
Blackburn Rovers,Graeme Souness,2000-03-14,2004-09-06,0,permanent
Blackburn Rovers,Mark Hughes,2004-09-15,2008-06-03,0,permanent
Blackburn Rovers,Paul Ince,2008-06-22,2008-12-16,0,permanent
Blackburn Rovers,Sam Allardyce,2008-12-17,2010-12-13,0,permanent
Blackburn Rovers,Steve Kean,2010-12-13,2012-09-28,0,permanent
Blackpool,Ian Holloway,2009-05-21,2012-11-03,0,permanent
Bolton Wanderers,Roy McFarland,1995-06-20,1996-01-02,0,permanent
Bolton Wanderers,Colin Todd,1996-01-02,1999-09-22,0,permanent
Bolton Wanderers,Sam Allardyce,1999-10-19,2007-04-29,0,permanent
Bolton Wanderers,Sammy Lee,2007-04-30,2007-10-07,0,permanent
Bolton Wanderers,Archie Knox,2007-10-17,2007-10-25,0,caretaker
Bolton Wanderers,Gary Megson,2007-10-25,2009-12-30,0,permanent
Bolton Wanderers,Owen Coyle,2010-01-08,2012-10-09,0,permanent
Bournemouth,Eddie Howe,2012-10-12,2020-08-01,0,permanent
Bournemouth,Scott Parker,2021-06-28,2022-08-30,0,permanent
Bournemouth,Gary O'Neil,2022-08-30,2023-06-19,0,permanent
Bournemouth,Andoni Iraola,2023-06-19,2026-05-24,0,permanent
Bournemouth,Marco Rose,2026-06-01,2026-08-09,1,incumbent
Bradford City,Paul Jewell,1998-01-06,2000-06-18,0,permanent
Bradford City,Chris Hutchings,2000-06-18,2000-11-06,0,permanent
Bradford City,Stuart McCall,2000-11-06,2000-11-20,0,caretaker
Bradford City,Jim Jefferies,2000-11-20,2001-12-24,0,permanent
Brentford,Thomas Frank,2018-10-16,2025-06-12,0,permanent
Brentford,Keith Andrews,2025-06-27,2026-08-09,1,incumbent
Brighton and Hove Albion,Chris Hughton,2014-12-31,2019-05-13,0,permanent
Brighton and Hove Albion,Graham Potter,2019-05-20,2022-09-08,0,permanent
Brighton and Hove Albion,Roberto De Zerbi,2022-09-18,2024-05-19,0,permanent
Brighton and Hove Albion,Fabian Hürzeler,2024-07-02,2026-08-09,1,incumbent
Burnley,Owen Coyle,2007-11-27,2010-01-05,0,permanent
Burnley,Brian Laws,2010-01-13,2010-12-29,0,permanent
Burnley,Sean Dyche,2012-10-30,2022-04-15,0,permanent
Burnley,Mike Jackson,2022-04-15,2022-05-22,0,caretaker
Burnley,Vincent Kompany,2022-06-14,2024-05-29,0,permanent
Burnley,Scott Parker,2024-07-05,2026-04-30,0,permanent
Burnley,Mike Jackson,2026-04-30,2026-05-24,0,caretaker
Cardiff City,Malky Mackay,2011-06-17,2013-12-27,0,permanent
Cardiff City,David Kerslake,2013-12-27,2014-01-02,0,caretaker
Cardiff City,Ole Gunnar Solskjær,2014-01-02,2014-09-18,0,permanent
Cardiff City,Neil Warnock,2016-10-05,2019-11-11,0,permanent
Charlton Athletic,Alan Curbishley,1991-07-24,2006-05-08,0,permanent
Charlton Athletic,Iain Dowie,2006-05-30,2006-11-13,0,permanent
Charlton Athletic,Les Reed,2006-11-14,2006-12-24,0,permanent
Charlton Athletic,Alan Pardew,2006-12-24,2008-11-22,0,permanent
Chelsea,Ian Porterfield,1991-06-11,1993-02-15,0,permanent
Chelsea,David Webb,1993-02-15,1993-05-11,0,caretaker
Chelsea,Glenn Hoddle,1993-06-04,1996-05-10,0,permanent
Chelsea,Ruud Gullit,1996-05-10,1998-02-12,0,permanent
Chelsea,Gianluca Vialli,1998-02-12,2000-09-12,0,permanent
Chelsea,Graham Rix,2000-09-13,2000-09-17,0,caretaker
Chelsea,Ray Wilkins,2000-09-13,2000-09-17,0,caretaker
Chelsea,Claudio Ranieri,2000-09-18,2004-05-31,0,permanent
Chelsea,José Mourinho,2004-06-02,2007-09-20,0,permanent
Chelsea,Avram Grant,2007-09-20,2008-05-24,0,permanent
Chelsea,Luiz Felipe Scolari,2008-07-01,2009-02-09,0,permanent
Chelsea,Ray Wilkins,2009-02-09,2009-02-16,0,caretaker
Chelsea,Guus Hiddink,2009-02-16,2009-05-31,0,caretaker
Chelsea,Carlo Ancelotti,2009-07-01,2011-05-22,0,permanent
Chelsea,André Villas-Boas,2011-06-22,2012-03-04,0,permanent
Chelsea,Roberto Di Matteo,2012-03-04,2012-11-21,0,permanent
Chelsea,Rafael Benítez,2012-11-21,2013-05-27,0,caretaker
Chelsea,José Mourinho,2013-06-03,2015-12-17,0,permanent
Chelsea,Steve Holland,2015-12-17,2015-12-19,0,caretaker
Chelsea,Guus Hiddink,2015-12-19,2016-05-15,0,caretaker
Chelsea,Antonio Conte,2016-07-03,2018-07-13,0,permanent
Chelsea,Maurizio Sarri,2018-07-14,2019-06-16,0,permanent
Chelsea,Frank Lampard,2019-07-04,2021-01-25,0,permanent
Chelsea,Thomas Tuchel,2021-01-26,2022-09-07,0,permanent
Chelsea,Graham Potter,2022-09-08,2023-04-02,0,permanent
Chelsea,Bruno Saltor,2023-04-02,2023-04-06,0,caretaker
Chelsea,Frank Lampard,2023-04-06,2023-05-28,0,caretaker
Chelsea,Mauricio Pochettino,2023-07-01,2024-05-21,0,permanent
Chelsea,Enzo Maresca,2024-07-01,2026-01-01,0,permanent
Chelsea,Calum McFarlane,2026-01-01,2026-01-08,0,caretaker
Chelsea,Liam Rosenior,2026-01-08,2026-04-22,0,permanent
Chelsea,Calum McFarlane,2026-04-22,2026-06-01,0,caretaker
Chelsea,Xabi Alonso,2026-07-01,2026-08-09,1,incumbent
Coventry City,Bobby Gould,1992-06-24,1993-10-23,0,permanent
Coventry City,Phil Neal,1993-10-23,1995-02-14,0,permanent
Coventry City,Ron Atkinson,1995-02-15,1996-11-05,0,permanent
Coventry City,Gordon Strachan,1996-11-05,2001-09-10,0,permanent
Coventry City,Frank Lampard,2024-11-28,2026-08-09,1,incumbent
Crystal Palace,Steve Coppell,1984-06-03,1993-05-17,0,permanent
Crystal Palace,Alan Smith,1993-06-03,1995-05-15,0,permanent
Crystal Palace,Steve Coppell,1997-02-27,1998-03-13,0,permanent
Crystal Palace,Attilio Lombardo,1998-03-13,1998-04-29,0,caretaker
Crystal Palace,Tomas Brolin,1998-03-13,1998-04-29,0,caretaker
Crystal Palace,Ron Noades,1998-04-29,1998-05-10,0,caretaker
Crystal Palace,Ray Lewington,1998-04-29,1998-05-10,0,caretaker
Crystal Palace,Iain Dowie,2003-12-22,2006-05-22,0,permanent
Crystal Palace,Ian Holloway,2012-11-03,2013-10-23,0,permanent
Crystal Palace,Keith Millen,2013-10-23,2013-11-23,0,caretaker
Crystal Palace,Tony Pulis,2013-11-23,2014-08-14,0,permanent
Crystal Palace,Keith Millen,2014-08-14,2014-08-27,0,caretaker
Crystal Palace,Neil Warnock,2014-08-27,2014-12-27,0,permanent
Crystal Palace,Keith Millen,2014-12-27,2015-01-02,0,caretaker
Crystal Palace,Alan Pardew,2015-01-02,2016-12-22,0,permanent
Crystal Palace,Sam Allardyce,2016-12-23,2017-05-23,0,permanent
Crystal Palace,Frank de Boer,2017-06-26,2017-09-11,0,permanent
Crystal Palace,Roy Hodgson,2017-09-12,2021-05-24,0,permanent
Crystal Palace,Patrick Vieira,2021-07-04,2023-03-17,0,permanent
Crystal Palace,Paddy McCarthy,2023-03-17,2023-03-21,0,caretaker
Crystal Palace,Roy Hodgson,2023-03-21,2024-02-19,0,permanent
Crystal Palace,Paddy McCarthy,2024-02-19,2024-02-19,0,caretaker
Crystal Palace,Oliver Glasner,2024-02-19,2026-05-27,0,permanent
Crystal Palace,Pierre Sage,2026-06-15,2026-08-09,1,incumbent
Derby County,Jim Smith,1995-06-15,2001-10-07,0,permanent
Derby County,Colin Todd,2001-10-08,2002-01-14,0,permanent
Derby County,Billy McEwan,2002-01-14,2002-01-30,0,caretaker
Derby County,John Gregory,2002-01-30,2003-03-21,0,permanent
Derby County,Billy Davies,2006-06-02,2007-11-26,0,permanent
Derby County,Paul Jewell,2007-11-28,2008-12-29,0,permanent
Everton,Howard Kendall,1990-11-05,1993-12-04,0,permanent
Everton,Jimmy Gabriel,1993-12-04,1994-01-07,0,caretaker
Everton,Mike Walker,1994-01-07,1994-11-08,0,permanent
Everton,Joe Royle,1994-11-10,1997-03-27,0,permanent
Everton,Dave Watson,1997-04-01,1997-05-31,0,caretaker
Everton,Howard Kendall,1997-06-27,1998-06-25,0,permanent
Everton,Walter Smith,1998-07-01,2002-03-13,0,permanent
Everton,David Moyes,2002-03-15,2013-06-01,0,permanent
Everton,Roberto Martínez,2013-06-05,2016-05-12,0,permanent
Everton,David Unsworth,2016-05-12,2016-06-14,0,caretaker
Everton,Ronald Koeman,2016-06-14,2017-10-23,0,permanent
Everton,David Unsworth,2017-10-23,2017-11-30,0,caretaker
Everton,Sam Allardyce,2017-11-30,2018-05-16,0,permanent
Everton,Marco Silva,2018-05-31,2019-12-05,0,permanent
Everton,Duncan Ferguson,2019-12-05,2019-12-21,0,caretaker
Everton,Carlo Ancelotti,2019-12-22,2021-06-01,0,permanent
Everton,Rafael Benítez,2021-06-30,2022-01-16,0,permanent
Everton,Duncan Ferguson,2022-01-18,2022-01-31,0,caretaker
Everton,Frank Lampard,2022-01-31,2023-01-23,0,permanent
Everton,Sean Dyche,2023-01-30,2025-01-09,0,permanent
Everton,Leighton Baines,2025-01-09,2025-01-11,0,caretaker
Everton,David Moyes,2025-01-11,2026-08-09,1,incumbent
Fulham,Jean Tigana,2000-07-01,2003-04-17,0,permanent
Fulham,Chris Coleman,2003-04-17,2007-04-11,0,permanent
Fulham,Lawrie Sanchez,2007-04-11,2007-12-21,0,permanent
Fulham,Ray Lewington,2007-12-21,2007-12-30,0,caretaker
Fulham,Roy Hodgson,2007-12-30,2010-06-30,0,permanent
Fulham,Ray Lewington,2010-07-01,2010-07-29,0,caretaker
Fulham,Mark Hughes,2010-07-29,2011-06-01,0,permanent
Fulham,Martin Jol,2011-06-07,2013-12-01,0,permanent
Fulham,René Meulensteen,2013-12-01,2014-02-14,0,permanent
Fulham,Felix Magath,2014-02-14,2014-09-18,0,permanent
Fulham,Slaviša Jokanović,2015-12-27,2018-11-14,0,permanent
Fulham,Claudio Ranieri,2018-11-14,2019-02-28,0,permanent
Fulham,Scott Parker,2019-02-28,2021-06-28,0,permanent
Fulham,Marco Silva,2021-07-01,2026-06-02,0,permanent
Fulham,Álvaro Arbeloa,2026-07-07,2026-08-09,1,incumbent
Huddersfield Town,David Wagner,2015-11-09,2019-01-14,0,permanent
Huddersfield Town,Mark Hudson,2019-01-14,2019-01-21,0,caretaker
Huddersfield Town,Jan Siewert,2019-01-21,2019-08-16,0,permanent
Hull City,Phil Brown,2006-12-04,2010-03-15,0,permanent
Hull City,Iain Dowie,2010-03-17,2010-05-09,0,permanent
Hull City,Steve Bruce,2012-06-08,2016-07-22,0,permanent
Hull City,Mike Phelan,2016-07-22,2017-01-03,0,permanent
Hull City,Marco Silva,2017-01-05,2017-05-25,0,permanent
Hull City,Sergej Jakirović,2025-06-11,2026-08-09,1,incumbent
Ipswich Town,John Lyall,1990-05-11,1994-12-05,0,permanent
Ipswich Town,Paul Goddard,1994-12-06,1994-12-27,0,caretaker
Ipswich Town,John Wark,1994-12-06,1994-12-27,0,caretaker
Ipswich Town,George Burley,1994-12-28,2002-10-11,0,permanent
Ipswich Town,Kieran McKenna,2021-12-16,2026-06-10,0,permanent
Ipswich Town,Gary O'Neil,2026-06-23,2026-08-09,1,incumbent
Leeds United,Howard Wilkinson,1988-10-10,1996-09-10,0,permanent
Leeds United,George Graham,1996-09-10,1998-10-01,0,permanent
Leeds United,David O'Leary,1998-10-01,2002-06-27,0,permanent
Leeds United,Terry Venables,2002-07-08,2003-03-21,0,permanent
Leeds United,Peter Reid,2003-03-21,2003-11-10,0,permanent
Leeds United,Eddie Gray,2003-11-10,2004-05-21,0,caretaker
Leeds United,Marcelo Bielsa,2018-06-15,2022-02-27,0,permanent
Leeds United,Jesse Marsch,2022-02-28,2023-02-06,0,permanent
Leeds United,Michael Skubala,2023-02-06,2023-02-21,0,caretaker
Leeds United,Javi Gracia,2023-02-21,2023-05-03,0,permanent
Leeds United,Sam Allardyce,2023-05-03,2023-06-02,0,permanent
Leeds United,Daniel Farke,2023-07-04,2026-08-09,1,incumbent
Leicester City,Brian Little,1991-05-30,1994-11-22,0,permanent
Leicester City,Kevin MacDonald,1994-11-22,1994-12-14,0,caretaker
Leicester City,Mark McGhee,1994-12-14,1995-12-07,0,permanent
Leicester City,Martin O'Neill,1995-12-21,2000-06-01,0,permanent
Leicester City,Peter Taylor,2000-06-12,2001-09-30,0,permanent
Leicester City,Dave Bassett,2001-10-10,2002-04-06,0,permanent
Leicester City,Micky Adams,2002-04-07,2004-10-11,0,permanent
Leicester City,Nigel Pearson,2011-11-15,2015-06-30,0,permanent
Leicester City,Claudio Ranieri,2015-07-13,2017-02-23,0,permanent
Leicester City,Craig Shakespeare,2017-02-23,2017-10-17,0,permanent
Leicester City,Michael Appleton,2017-10-17,2017-10-25,0,caretaker
Leicester City,Claude Puel,2017-10-25,2019-02-24,0,permanent
Leicester City,Adam Sadler,2019-02-24,2019-02-26,0,caretaker
Leicester City,Mike Stowell,2019-02-24,2019-02-26,0,caretaker
Leicester City,Brendan Rodgers,2019-02-27,2023-04-02,0,permanent
Leicester City,Adam Sadler,2023-04-02,2023-04-10,0,caretaker
Leicester City,Mike Stowell,2023-04-02,2023-04-10,0,caretaker
Leicester City,Dean Smith,2023-04-10,2023-06-16,0,permanent
Leicester City,Steve Cooper,2024-06-20,2024-11-24,0,permanent
Leicester City,Ben Dawson,2024-11-24,2024-12-01,0,caretaker
Leicester City,Ruud van Nistelrooy,2024-12-01,2025-06-27,0,permanent
Liverpool,Graeme Souness,1991-04-16,1994-01-28,0,permanent
Liverpool,Roy Evans,1994-01-28,1998-11-12,0,permanent
Liverpool,Gérard Houllier,1998-07-01,2001-10-14,0,permanent
Liverpool,Phil Thompson,2001-10-14,2002-03-16,0,caretaker
Liverpool,Gérard Houllier,2002-03-17,2004-05-24,0,permanent
Liverpool,Rafael Benítez,2004-06-16,2010-06-03,0,permanent
Liverpool,Roy Hodgson,2010-07-01,2011-01-08,0,permanent
Liverpool,Kenny Dalglish,2011-01-08,2012-05-16,0,permanent
Liverpool,Brendan Rodgers,2012-06-01,2015-10-04,0,permanent
Liverpool,Jürgen Klopp,2015-10-08,2024-05-19,0,permanent
Liverpool,Arne Slot,2024-06-01,2026-05-30,0,permanent
Liverpool,Andoni Iraola,2026-06-04,2026-08-09,1,incumbent
Luton Town,Rob Edwards,2022-11-17,2025-01-09,0,permanent
Manchester City,Peter Reid,1990-11-11,1993-08-26,0,permanent
Manchester City,Tony Book,1993-08-26,1993-08-28,0,caretaker
Manchester City,Brian Horton,1993-08-28,1995-05-16,0,permanent
Manchester City,Alan Ball,1995-06-30,1996-08-26,0,permanent
Manchester City,Joe Royle,1998-02-18,2001-05-21,0,permanent
Manchester City,Kevin Keegan,2001-05-24,2005-03-11,0,permanent
Manchester City,Stuart Pearce,2005-03-21,2007-05-14,0,permanent
Manchester City,Sven-Göran Eriksson,2007-07-06,2008-06-02,0,permanent
Manchester City,Mark Hughes,2008-06-04,2009-12-19,0,permanent
Manchester City,Roberto Mancini,2009-12-19,2013-05-13,0,permanent
Manchester City,Brian Kidd,2013-05-13,2013-06-14,0,caretaker
Manchester City,Manuel Pellegrini,2013-06-14,2016-06-30,0,permanent
Manchester City,Pep Guardiola,2016-07-01,2026-05-24,0,permanent
Manchester City,Enzo Maresca,2026-06-29,2026-08-09,1,incumbent
Manchester United,Alex Ferguson,1986-11-06,2013-06-01,0,permanent
Manchester United,David Moyes,2013-07-01,2014-04-22,0,permanent
Manchester United,Ryan Giggs,2014-04-22,2014-05-11,0,caretaker
Manchester United,Louis van Gaal,2014-07-14,2016-05-23,0,permanent
Manchester United,José Mourinho,2016-05-27,2018-12-18,0,permanent
Manchester United,Ole Gunnar Solskjær,2018-12-19,2021-11-21,0,permanent
Manchester United,Michael Carrick,2021-11-21,2021-12-02,0,caretaker
Manchester United,Ralf Rangnick,2021-12-03,2022-05-22,0,caretaker
Manchester United,Erik ten Hag,2022-06-01,2024-10-28,0,permanent
Manchester United,Ruud van Nistelrooy,2024-10-28,2024-11-11,0,caretaker
Manchester United,Ruben Amorim,2024-11-11,2026-01-05,0,permanent
Manchester United,Darren Fletcher,2026-01-05,2026-01-13,0,caretaker
Manchester United,Michael Carrick,2026-01-13,2026-08-09,1,incumbent
Middlesbrough,Lennie Lawrence,1991-07-10,1994-05-19,0,permanent
Middlesbrough,Bryan Robson,1994-05-31,2000-12-06,0,permanent
Middlesbrough,Terry Venables,2000-12-06,2001-06-12,0,permanent
Middlesbrough,Steve McClaren,2001-06-12,2006-05-11,0,permanent
Middlesbrough,Gareth Southgate,2006-06-07,2009-10-20,0,permanent
Middlesbrough,Aitor Karanka,2013-11-13,2017-03-16,0,permanent
Middlesbrough,Steve Agnew,2017-03-16,2017-06-09,0,caretaker
Newcastle United,Kevin Keegan,1992-02-05,1997-01-08,0,permanent
Newcastle United,Terry McDermott,1997-01-08,1997-01-14,0,caretaker
Newcastle United,Kenny Dalglish,1997-01-14,1998-08-27,0,permanent
Newcastle United,Ruud Gullit,1998-08-28,1999-08-28,0,permanent
Newcastle United,Steve Clarke,1999-08-28,1999-09-02,0,caretaker
Newcastle United,Bobby Robson,1999-09-02,2004-08-30,0,permanent
Newcastle United,John Carver,2004-09-11,2004-09-13,0,caretaker
Newcastle United,Graeme Souness,2004-09-13,2006-02-02,0,permanent
Newcastle United,Glenn Roeder,2006-02-02,2007-05-06,0,permanent
Newcastle United,Nigel Pearson,2007-05-06,2007-05-15,0,caretaker
Newcastle United,Sam Allardyce,2007-05-15,2008-01-09,0,permanent
Newcastle United,Nigel Pearson,2008-01-09,2008-01-16,0,caretaker
Newcastle United,Kevin Keegan,2008-01-16,2008-09-04,0,permanent
Newcastle United,Chris Hughton,2008-09-08,2008-09-28,0,caretaker
Newcastle United,Joe Kinnear,2008-09-29,2009-04-01,0,permanent
Newcastle United,Alan Shearer,2009-04-01,2009-05-24,0,permanent
Newcastle United,Chris Hughton,2009-06-01,2010-12-06,0,permanent
Newcastle United,Alan Pardew,2010-12-09,2015-01-02,0,permanent
Newcastle United,John Carver,2015-01-02,2015-06-10,0,permanent
Newcastle United,Steve McClaren,2015-06-10,2016-03-11,0,permanent
Newcastle United,Rafael Benítez,2016-03-11,2019-06-30,0,permanent
Newcastle United,Steve Bruce,2019-07-17,2021-10-20,0,permanent
Newcastle United,Graeme Jones,2021-10-20,2021-11-08,0,caretaker
Newcastle United,Eddie Howe,2021-11-08,2026-07-30,0,permanent
Newcastle United,Matthias Jaissle,2026-08-05,2026-08-09,1,incumbent
Norwich City,Mike Walker,1992-06-01,1994-01-06,0,permanent
Norwich City,John Deehan,1994-01-12,1995-07-31,0,permanent
Norwich City,Nigel Worthington,2000-12-04,2006-10-02,0,permanent
Norwich City,Paul Lambert,2009-08-18,2012-06-02,0,permanent
Norwich City,Chris Hughton,2012-06-07,2014-04-06,0,permanent
Norwich City,Neil Adams,2014-04-06,2015-01-05,0,permanent
Norwich City,Alex Neil,2015-01-09,2017-03-10,0,permanent
Norwich City,Daniel Farke,2017-05-25,2021-11-06,0,permanent
Norwich City,Dean Smith,2021-11-15,2022-12-27,0,permanent
Nottingham Forest,Brian Clough,1975-01-06,1993-05-08,0,permanent
Nottingham Forest,Frank Clark,1993-05-12,1996-12-19,0,permanent
Nottingham Forest,Stuart Pearce,1996-12-20,1997-05-08,0,caretaker
Nottingham Forest,Dave Bassett,1997-05-08,1999-01-05,0,permanent
Nottingham Forest,Micky Adams,1999-01-05,1999-01-11,0,caretaker
Nottingham Forest,Ron Atkinson,1999-01-11,1999-05-16,0,permanent
Nottingham Forest,Steve Cooper,2021-09-21,2023-12-19,0,permanent
Nottingham Forest,Nuno Espírito Santo,2023-12-20,2025-09-09,0,permanent
Nottingham Forest,Ange Postecoglou,2025-09-09,2025-10-18,0,permanent
Nottingham Forest,Sean Dyche,2025-10-21,2026-02-12,0,permanent
Nottingham Forest,Vítor Pereira,2026-02-15,2026-07-02,0,permanent
Nottingham Forest,Oliver Glasner,2026-07-06,2026-08-09,1,incumbent
Oldham Athletic,Joe Royle,1982-07-14,1994-11-10,0,permanent
Portsmouth,Harry Redknapp,2002-03-25,2004-11-24,0,permanent
Portsmouth,Velimir Zajec,2004-12-24,2005-04-07,0,permanent
Portsmouth,Alain Perrin,2005-04-07,2005-11-24,0,permanent
Portsmouth,Joe Jordan,2005-11-24,2005-12-07,0,caretaker
Portsmouth,Harry Redknapp,2005-12-07,2008-10-25,0,permanent
Portsmouth,Joe Jordan,2008-10-25,2008-10-28,0,caretaker
Portsmouth,Tony Adams,2008-10-25,2009-02-09,0,permanent
Portsmouth,Paul Hart,2009-02-09,2009-11-24,0,permanent
Portsmouth,Avram Grant,2009-11-26,2010-05-21,0,permanent
Queens Park Rangers,Gerry Francis,1991-06-01,1994-11-11,0,permanent
Queens Park Rangers,Ray Wilkins,1994-11-15,1996-09-04,0,permanent
Queens Park Rangers,Neil Warnock,2010-03-01,2012-01-08,0,permanent
Queens Park Rangers,Mark Hughes,2012-01-10,2012-11-23,0,permanent
Queens Park Rangers,Mark Bowen,2012-11-23,2012-11-24,0,caretaker
Queens Park Rangers,Harry Redknapp,2012-11-24,2015-02-03,0,permanent
Queens Park Rangers,Kevin Bond,2015-02-03,2015-02-12,0,caretaker
Queens Park Rangers,Chris Ramsey,2015-02-03,2015-11-04,0,permanent
Reading,Steve Coppell,2003-10-09,2009-05-12,0,permanent
Reading,Brian McDermott,2009-12-17,2013-03-11,0,permanent
Reading,Nigel Adkins,2013-03-26,2014-12-15,0,permanent
Sheffield United,Dave Bassett,1988-01-02,1995-12-12,0,permanent
Sheffield United,Neil Warnock,1999-12-02,2007-05-16,0,permanent
Sheffield United,Chris Wilder,2016-05-12,2021-03-13,0,permanent
Sheffield United,Paul Heckingbottom,2021-03-13,2021-05-27,0,caretaker
Sheffield United,Paul Heckingbottom,2021-11-25,2023-12-05,0,permanent
Sheffield United,Chris Wilder,2023-12-05,2025-06-18,0,permanent
Sheffield Wednesday,Trevor Francis,1991-06-07,1995-05-20,0,permanent
Sheffield Wednesday,David Pleat,1995-06-14,1997-11-03,0,permanent
Sheffield Wednesday,Peter Shreeves,1997-11-03,1997-11-14,0,caretaker
Sheffield Wednesday,Ron Atkinson,1997-11-14,1998-05-17,0,permanent
Sheffield Wednesday,Danny Wilson,1998-07-06,2000-03-21,0,permanent
Sheffield Wednesday,Peter Shreeves,2000-03-21,2000-06-21,0,caretaker
Southampton,Ian Branfoot,1991-06-11,1994-01-10,0,permanent
Southampton,Alan Ball,1994-01-20,1995-07-02,0,permanent
Southampton,Dave Merrington,1995-07-14,1996-06-14,0,permanent
Southampton,Graeme Souness,1996-07-03,1997-06-01,0,permanent
Southampton,Dave Jones,1997-06-23,2000-01-27,0,permanent
Southampton,Glenn Hoddle,2000-01-28,2001-03-28,0,permanent
Southampton,Stuart Gray,2001-03-30,2001-10-21,0,permanent
Southampton,Gordon Strachan,2001-10-22,2004-02-13,0,permanent
Southampton,Steve Wigley,2004-02-13,2004-03-04,0,caretaker
Southampton,Paul Sturrock,2004-03-04,2004-08-23,0,permanent
Southampton,Steve Wigley,2004-08-23,2004-12-10,0,permanent
Southampton,Harry Redknapp,2004-12-08,2005-12-02,0,permanent
Southampton,Nigel Adkins,2010-09-12,2013-01-18,0,permanent
Southampton,Mauricio Pochettino,2013-01-18,2014-05-27,0,permanent
Southampton,Ronald Koeman,2014-06-16,2016-06-14,0,permanent
Southampton,Claude Puel,2016-06-30,2017-06-14,0,permanent
Southampton,Mauricio Pellegrino,2017-06-23,2018-03-12,0,permanent
Southampton,Mark Hughes,2018-03-14,2018-12-03,0,permanent
Southampton,Kelvin Davis,2018-12-03,2018-12-05,0,caretaker
Southampton,Ralph Hasenhüttl,2018-12-06,2022-11-07,0,permanent
Southampton,Rubén Sellés,2022-11-07,2022-11-10,0,caretaker
Southampton,Nathan Jones,2022-11-10,2023-02-12,0,permanent
Southampton,Rubén Sellés,2023-02-12,2023-05-28,0,permanent
Southampton,Russell Martin,2023-06-21,2024-12-15,0,permanent
Southampton,Simon Rusk,2024-12-15,2024-12-23,0,caretaker
Southampton,Ivan Jurić,2024-12-23,2025-04-07,0,permanent
Southampton,Simon Rusk,2025-04-07,2025-05-25,0,caretaker
Stoke City,Tony Pulis,2006-06-15,2013-05-21,0,permanent
Stoke City,Mark Hughes,2013-05-30,2018-01-06,0,permanent
Stoke City,Eddie Niedzwiecki,2018-01-08,2018-01-15,0,caretaker
Stoke City,Paul Lambert,2018-01-15,2018-05-18,0,permanent
Sunderland,Peter Reid,1995-03-29,2002-10-07,0,permanent
Sunderland,Howard Wilkinson,2002-10-10,2003-03-10,0,permanent
Sunderland,Mick McCarthy,2003-03-12,2006-03-06,0,permanent
Sunderland,Kevin Ball,2006-03-07,2006-05-31,0,caretaker
Sunderland,Roy Keane,2006-08-30,2008-12-04,0,permanent
Sunderland,Ricky Sbragia,2008-12-04,2009-05-24,0,permanent
Sunderland,Steve Bruce,2009-06-03,2011-11-30,0,permanent
Sunderland,Martin O'Neill,2011-12-03,2013-03-30,0,permanent
Sunderland,Paolo Di Canio,2013-03-31,2013-09-22,0,permanent
Sunderland,Kevin Ball,2013-09-22,2013-10-08,0,caretaker
Sunderland,Gus Poyet,2013-10-08,2015-03-16,0,permanent
Sunderland,Dick Advocaat,2015-03-17,2015-10-04,0,permanent
Sunderland,Sam Allardyce,2015-10-09,2016-07-22,0,permanent
Sunderland,David Moyes,2016-07-23,2017-05-22,0,permanent
Sunderland,Régis Le Bris,2024-07-01,2026-08-09,1,incumbent
Swansea City,Brendan Rodgers,2010-07-16,2012-06-01,0,permanent
Swansea City,Michael Laudrup,2012-06-15,2014-02-04,0,permanent
Swansea City,Garry Monk,2014-02-04,2015-12-09,0,permanent
Swansea City,Alan Curtis,2015-12-09,2016-01-18,0,caretaker
Swansea City,Francesco Guidolin,2016-01-18,2016-10-03,0,permanent
Swansea City,Bob Bradley,2016-10-03,2016-12-27,0,permanent
Swansea City,Alan Curtis,2016-12-27,2017-01-03,0,caretaker
Swansea City,Paul Clement,2017-01-03,2017-12-20,0,permanent
Swansea City,Leon Britton,2017-12-20,2017-12-28,0,caretaker
Swansea City,Carlos Carvalhal,2017-12-28,2018-05-18,0,permanent
Swindon Town,John Gorman,1993-06-04,1994-11-21,0,permanent
Tottenham Hotspur,Doug Livermore,1992-05-27,1993-06-19,0,permanent
Tottenham Hotspur,Ossie Ardiles,1993-06-19,1994-11-01,0,permanent
Tottenham Hotspur,Steve Perryman,1994-11-01,1994-11-15,0,caretaker
Tottenham Hotspur,Gerry Francis,1994-11-15,1997-11-19,0,permanent
Tottenham Hotspur,Christian Gross,1997-11-25,1998-09-05,0,permanent
Tottenham Hotspur,David Pleat,1998-08-30,1998-10-03,0,caretaker
Tottenham Hotspur,Chris Hughton,1998-09-07,1998-10-01,0,caretaker
Tottenham Hotspur,George Graham,1998-10-05,2001-03-16,0,permanent
Tottenham Hotspur,David Pleat,2001-03-16,2001-04-02,0,caretaker
Tottenham Hotspur,Glenn Hoddle,2001-04-02,2003-09-21,0,permanent
Tottenham Hotspur,David Pleat,2003-09-21,2004-06-03,0,caretaker
Tottenham Hotspur,Jacques Santini,2004-06-03,2004-11-05,0,permanent
Tottenham Hotspur,Martin Jol,2004-11-05,2007-10-25,0,permanent
Tottenham Hotspur,Clive Allen,2007-10-25,2007-10-29,0,caretaker
Tottenham Hotspur,Alex Inglethorpe,2007-10-25,2007-10-29,0,caretaker
Tottenham Hotspur,Juande Ramos,2007-10-27,2008-10-25,0,permanent
Tottenham Hotspur,Clive Allen,2008-10-25,2008-10-26,0,caretaker
Tottenham Hotspur,Harry Redknapp,2008-10-26,2012-06-13,0,permanent
Tottenham Hotspur,André Villas-Boas,2012-07-06,2013-12-16,0,permanent
Tottenham Hotspur,Tim Sherwood,2013-12-16,2014-05-13,0,permanent
Tottenham Hotspur,Mauricio Pochettino,2014-05-27,2019-11-19,0,permanent
Tottenham Hotspur,José Mourinho,2019-11-20,2021-04-19,0,permanent
Tottenham Hotspur,Ryan Mason,2021-04-19,2021-06-30,0,caretaker
Tottenham Hotspur,Nuno Espírito Santo,2021-06-30,2021-11-01,0,permanent
Tottenham Hotspur,Antonio Conte,2021-11-02,2023-03-26,0,permanent
Tottenham Hotspur,Cristian Stellini,2023-03-26,2023-04-24,0,caretaker
Tottenham Hotspur,Ryan Mason,2023-04-24,2023-05-28,0,caretaker
Tottenham Hotspur,Ange Postecoglou,2023-06-06,2025-06-06,0,permanent
Tottenham Hotspur,Thomas Frank,2025-06-12,2026-02-11,0,permanent
Tottenham Hotspur,Igor Tudor,2026-02-14,2026-03-29,0,permanent
Tottenham Hotspur,Roberto De Zerbi,2026-03-31,2026-08-09,1,incumbent
Watford,Graham Taylor,1996-02-21,2001-06-01,0,permanent
Watford,Aidy Boothroyd,2005-03-29,2008-11-03,0,permanent
Watford,Quique Sánchez Flores,2015-06-05,2016-05-15,0,permanent
Watford,Walter Mazzarri,2016-07-01,2017-05-21,0,permanent
Watford,Marco Silva,2017-05-27,2018-01-21,0,permanent
Watford,Javi Gracia,2018-01-21,2019-09-07,0,permanent
Watford,Quique Sánchez Flores,2019-09-07,2019-12-01,0,permanent
Watford,Hayden Mullins,2019-12-02,2019-12-07,0,caretaker
Watford,Nigel Pearson,2019-12-08,2020-07-19,0,permanent
Watford,Hayden Mullins,2020-07-19,2020-08-15,0,caretaker
Watford,Xisco Muñoz,2020-12-20,2021-10-03,0,permanent
Watford,Claudio Ranieri,2021-10-04,2022-01-24,0,permanent
Watford,Roy Hodgson,2022-01-25,2022-05-22,0,permanent
West Bromwich Albion,Gary Megson,2000-03-09,2004-10-26,0,permanent
West Bromwich Albion,Frank Burrows,2004-10-27,2004-11-08,0,caretaker
West Bromwich Albion,Bryan Robson,2004-11-09,2006-09-18,0,permanent
West Bromwich Albion,Tony Mowbray,2006-10-18,2009-06-16,0,permanent
West Bromwich Albion,Roberto Di Matteo,2009-06-30,2011-02-06,0,permanent
West Bromwich Albion,Michael Appleton,2011-02-06,2011-02-14,0,caretaker
West Bromwich Albion,Roy Hodgson,2011-02-14,2012-05-13,0,permanent
West Bromwich Albion,Steve Clarke,2012-06-08,2013-12-14,0,permanent
West Bromwich Albion,Keith Downing,2013-12-14,2014-01-09,0,caretaker
West Bromwich Albion,Pepe Mel,2014-01-09,2014-05-12,0,permanent
West Bromwich Albion,Alan Irvine,2014-06-14,2014-12-29,0,permanent
West Bromwich Albion,Rob Kelly,2014-12-29,2015-01-01,0,caretaker
West Bromwich Albion,Tony Pulis,2015-01-01,2017-11-20,0,permanent
West Bromwich Albion,Gary Megson,2017-11-20,2017-11-29,0,caretaker
West Bromwich Albion,Alan Pardew,2017-11-29,2018-04-02,0,permanent
West Bromwich Albion,Darren Moore,2018-04-02,2019-03-09,0,permanent
West Bromwich Albion,Slaven Bilić,2019-06-13,2020-12-16,0,permanent
West Bromwich Albion,Sam Allardyce,2020-12-16,2021-05-23,0,permanent
West Ham United,Billy Bonds,1990-02-23,1994-08-10,0,permanent
West Ham United,Harry Redknapp,1994-08-10,2001-05-09,0,permanent
West Ham United,Glenn Roeder,2001-05-09,2003-04-24,0,permanent
West Ham United,Trevor Brooking,2003-04-24,2003-05-12,0,caretaker
West Ham United,Alan Pardew,2003-10-20,2006-12-11,0,permanent
West Ham United,Alan Curbishley,2006-12-13,2008-09-03,0,permanent
West Ham United,Kevin Keen,2008-09-03,2008-09-15,0,caretaker
West Ham United,Gianfranco Zola,2008-09-15,2010-05-11,0,permanent
West Ham United,Avram Grant,2010-06-03,2011-05-15,0,permanent
West Ham United,Kevin Keen,2011-05-15,2011-06-01,0,caretaker
West Ham United,Sam Allardyce,2011-06-01,2015-05-24,0,permanent
West Ham United,Slaven Bilić,2015-06-09,2017-11-06,0,permanent
West Ham United,David Moyes,2017-11-07,2018-05-16,0,permanent
West Ham United,Manuel Pellegrini,2018-05-22,2019-12-28,0,permanent
West Ham United,David Moyes,2019-12-29,2024-05-19,0,permanent
West Ham United,Julen Lopetegui,2024-07-01,2025-01-08,0,permanent
West Ham United,Graham Potter,2025-01-09,2025-09-27,0,permanent
West Ham United,Nuno Espírito Santo,2025-09-27,2026-08-09,1,incumbent
Wigan Athletic,Paul Jewell,2001-06-12,2007-05-14,0,permanent
Wigan Athletic,Chris Hutchings,2007-05-14,2007-11-05,0,permanent
Wigan Athletic,Frank Barlow,2007-11-05,2007-11-26,0,caretaker
Wigan Athletic,Steve Bruce,2007-11-26,2009-06-03,0,permanent
Wigan Athletic,Roberto Martínez,2009-06-15,2013-05-28,0,permanent
Wimbledon,Joe Kinnear,1992-01-19,1999-06-09,0,permanent
Wimbledon,Egil Olsen,1999-06-09,2000-05-01,0,permanent
Wimbledon,Terry Burton,2000-05-01,2002-04-25,0,permanent
Wolverhampton Wanderers,Dave Jones,2001-01-03,2004-11-11,0,permanent
Wolverhampton Wanderers,Mick McCarthy,2006-08-05,2012-02-14,0,permanent
Wolverhampton Wanderers,Terry Connor,2012-02-24,2012-06-30,0,permanent
Wolverhampton Wanderers,Nuno Espírito Santo,2017-05-31,2021-05-23,0,permanent
Wolverhampton Wanderers,Bruno Lage,2021-06-09,2022-10-02,0,permanent
Wolverhampton Wanderers,Steve Davis,2022-10-03,2022-11-13,0,caretaker
Wolverhampton Wanderers,Julen Lopetegui,2022-11-14,2023-08-08,0,permanent
Wolverhampton Wanderers,Gary O'Neil,2023-08-09,2024-12-15,0,permanent
Wolverhampton Wanderers,Vítor Pereira,2024-12-19,2025-11-02,0,permanent
Wolverhampton Wanderers,James Collins,2025-11-02,2025-11-12,0,caretaker
Wolverhampton Wanderers,Rob Edwards,2025-11-12,2026-06-11,0,permanent
`,C1=`team_abbr,kickoff_date,season_label,is_home,opponent_abbr,opponent_name,goals_for,goals_against,goal_diff,red_cards,attendance
ARS,1992-08-15,1992-93,1,NOR,Norwich City,2,4,-2,0,24030
ARS,1992-08-18,1992-93,0,BLA,Blackburn Rovers,0,1,-1,0,16454
ARS,1992-08-23,1992-93,0,LIV,Liverpool,2,0,2,0,34961
ARS,1992-08-26,1992-93,1,OLD,Oldham Athletic,2,0,2,0,20796
ARS,1992-08-29,1992-93,1,SHW,Sheffield Wednesday,2,1,1,0,23389
ARS,1992-09-02,1992-93,0,QPR,Queens Park Rangers,0,0,0,0,20868
ARS,1992-09-05,1992-93,0,WIM,Wimbledon,2,3,-1,0,12906
ARS,1992-09-12,1992-93,1,BLA,Blackburn Rovers,0,1,-1,0,28643
ARS,1992-09-19,1992-93,0,SHU,Sheffield United,1,1,0,0,19105
ARS,1992-09-28,1992-93,1,MCI,Manchester City,1,0,1,0,21504
ARS,1992-10-03,1992-93,1,CHE,Chelsea,2,1,1,0,27780
ARS,1992-10-17,1992-93,0,NFO,Nottingham Forest,1,0,1,0,24862
ARS,1992-10-24,1992-93,1,EVE,Everton,2,0,2,0,28052
ARS,1992-11-02,1992-93,0,CRY,Crystal Palace,2,1,1,0,20287
ARS,1992-11-07,1992-93,1,COV,Coventry City,3,0,3,0,27693
ARS,1992-11-21,1992-93,0,LEE,Leeds United,0,3,-3,0,30516
ARS,1992-11-28,1992-93,1,MUN,Manchester United,0,1,-1,0,29739
ARS,1992-12-05,1992-93,0,SOU,Southampton,0,2,-2,0,17286
ARS,1992-12-12,1992-93,0,TOT,Tottenham Hotspur,0,1,-1,0,33707
ARS,1992-12-19,1992-93,1,MID,Middlesbrough,1,1,0,0,23197
ARS,1992-12-26,1992-93,1,IPS,Ipswich Town,0,0,0,0,26198
ARS,1992-12-28,1992-93,0,AVL,Aston Villa,0,1,-1,0,35170
ARS,1993-01-09,1992-93,1,SHU,Sheffield United,1,1,0,0,23818
ARS,1993-01-16,1992-93,0,MCI,Manchester City,1,0,1,0,25041
ARS,1993-01-31,1992-93,1,LIV,Liverpool,0,1,-1,0,27580
ARS,1993-02-10,1992-93,1,WIM,Wimbledon,0,1,-1,0,18253
ARS,1993-02-20,1992-93,0,OLD,Oldham Athletic,1,0,1,0,12311
ARS,1993-02-24,1992-93,1,LEE,Leeds United,0,0,0,0,21061
ARS,1993-03-01,1992-93,0,CHE,Chelsea,0,1,-1,0,17725
ARS,1993-03-03,1992-93,0,NOR,Norwich City,1,1,0,0,14802
ARS,1993-03-13,1992-93,0,COV,Coventry City,2,0,2,0,15437
ARS,1993-03-20,1992-93,1,SOU,Southampton,4,3,1,0,24149
ARS,1993-03-24,1992-93,0,MUN,Manchester United,0,0,0,0,37301
ARS,1993-04-06,1992-93,0,MID,Middlesbrough,0,1,-1,0,12726
ARS,1993-04-10,1992-93,0,IPS,Ipswich Town,2,1,1,0,20358
ARS,1993-04-12,1992-93,1,AVL,Aston Villa,0,1,-1,0,27123
ARS,1993-04-21,1992-93,1,NFO,Nottingham Forest,1,1,0,0,19024
ARS,1993-05-01,1992-93,0,EVE,Everton,0,0,0,0,19044
ARS,1993-05-04,1992-93,1,QPR,Queens Park Rangers,0,0,0,0,18817
ARS,1993-05-06,1992-93,0,SHW,Sheffield Wednesday,0,1,-1,0,23645
ARS,1993-05-08,1992-93,1,CRY,Crystal Palace,3,0,3,0,25225
ARS,1993-05-11,1992-93,1,TOT,Tottenham Hotspur,1,3,-2,0,26393
ARS,1993-08-14,1993-94,1,COV,Coventry City,0,3,-3,0,24897
ARS,1993-08-16,1993-94,0,TOT,Tottenham Hotspur,1,0,1,0,28355
ARS,1993-08-21,1993-94,0,SHW,Sheffield Wednesday,1,0,1,0,26023
ARS,1993-08-24,1993-94,1,LEE,Leeds United,2,1,1,0,29042
ARS,1993-08-28,1993-94,1,EVE,Everton,2,0,2,0,29063
ARS,1993-09-01,1993-94,0,BLA,Blackburn Rovers,1,1,0,0,14051
ARS,1993-09-11,1993-94,1,IPS,Ipswich Town,4,0,4,0,28563
ARS,1993-09-19,1993-94,0,MUN,Manchester United,0,1,-1,0,44009
ARS,1993-09-25,1993-94,1,SOU,Southampton,1,0,1,0,26902
ARS,1993-10-02,1993-94,0,LIV,Liverpool,0,0,0,0,42750
ARS,1993-10-16,1993-94,1,MCI,Manchester City,0,0,0,0,29567
ARS,1993-10-23,1993-94,0,OLD,Oldham Athletic,0,0,0,0,12105
ARS,1993-10-30,1993-94,1,NOR,Norwich City,0,0,0,0,30516
ARS,1993-11-06,1993-94,1,AVL,Aston Villa,1,2,-1,0,31773
ARS,1993-11-20,1993-94,0,CHE,Chelsea,2,0,2,0,26839
ARS,1993-11-24,1993-94,0,WHU,West Ham United,0,0,0,0,20279
ARS,1993-11-27,1993-94,1,NEW,Newcastle United,2,1,1,0,36091
ARS,1993-12-04,1993-94,0,COV,Coventry City,0,1,-1,0,12722
ARS,1993-12-06,1993-94,1,TOT,Tottenham Hotspur,1,1,0,0,35669
ARS,1993-12-12,1993-94,1,SHW,Sheffield Wednesday,1,0,1,0,22026
ARS,1993-12-18,1993-94,0,LEE,Leeds United,1,2,-1,0,37515
ARS,1993-12-27,1993-94,0,SWI,Swindon Town,4,0,4,0,17651
ARS,1993-12-29,1993-94,1,SHU,Sheffield United,3,0,3,0,27035
ARS,1994-01-01,1993-94,0,WIM,Wimbledon,3,0,3,0,16584
ARS,1994-01-03,1993-94,1,QPR,Queens Park Rangers,0,0,0,0,34935
ARS,1994-01-15,1993-94,0,MCI,Manchester City,0,0,0,0,25642
ARS,1994-01-22,1993-94,1,OLD,Oldham Athletic,1,1,0,0,26524
ARS,1994-02-13,1993-94,0,NOR,Norwich City,1,1,0,0,17667
ARS,1994-02-19,1993-94,0,EVE,Everton,1,1,0,0,19891
ARS,1994-02-26,1993-94,1,BLA,Blackburn Rovers,1,0,1,0,35030
ARS,1994-03-05,1993-94,0,IPS,Ipswich Town,5,1,4,0,18656
ARS,1994-03-19,1993-94,0,SOU,Southampton,4,0,4,0,16790
ARS,1994-03-22,1993-94,1,MUN,Manchester United,2,2,0,0,36203
ARS,1994-03-26,1993-94,1,LIV,Liverpool,1,0,1,0,35556
ARS,1994-04-02,1993-94,1,SWI,Swindon Town,1,1,0,0,31634
ARS,1994-04-04,1993-94,0,SHU,Sheffield United,1,1,0,0,20019
ARS,1994-04-16,1993-94,1,CHE,Chelsea,1,0,1,0,34314
ARS,1994-04-19,1993-94,1,WIM,Wimbledon,1,1,0,0,21292
ARS,1994-04-23,1993-94,0,AVL,Aston Villa,2,1,1,0,32590
ARS,1994-04-27,1993-94,0,QPR,Queens Park Rangers,1,1,0,0,11442
ARS,1994-04-30,1993-94,1,WHU,West Ham United,0,2,-2,0,33701
ARS,1994-05-07,1993-94,0,NEW,Newcastle United,0,2,-2,0,32216
ARS,1994-08-20,1994-95,1,MCI,Manchester City,3,0,3,0,38368
ARS,1994-08-23,1994-95,0,LEE,Leeds United,0,1,-1,0,34218
ARS,1994-08-28,1994-95,0,LIV,Liverpool,0,3,-3,0,30017
ARS,1994-08-31,1994-95,1,BLA,Blackburn Rovers,0,0,0,0,37639
ARS,1994-09-10,1994-95,0,NOR,Norwich City,0,0,0,0,17768
ARS,1994-09-18,1994-95,1,NEW,Newcastle United,2,3,-1,0,36819
ARS,1994-09-25,1994-95,0,WHU,West Ham United,2,0,2,0,18498
ARS,1994-10-01,1994-95,1,CRY,Crystal Palace,1,2,-1,0,34136
ARS,1994-10-08,1994-95,0,WIM,Wimbledon,3,1,2,0,10842
ARS,1994-10-15,1994-95,1,CHE,Chelsea,3,1,2,0,38234
ARS,1994-10-23,1994-95,1,COV,Coventry City,2,1,1,0,31725
ARS,1994-10-29,1994-95,0,EVE,Everton,1,1,0,0,32003
ARS,1994-11-06,1994-95,1,SHW,Sheffield Wednesday,0,0,0,0,33705
ARS,1994-11-19,1994-95,0,SOU,Southampton,0,1,-1,0,15201
ARS,1994-11-23,1994-95,0,LEI,Leicester City,1,2,-1,0,20774
ARS,1994-11-26,1994-95,1,MUN,Manchester United,0,0,0,0,38301
ARS,1994-12-03,1994-95,0,NFO,Nottingham Forest,2,2,0,0,21662
ARS,1994-12-12,1994-95,0,MCI,Manchester City,2,1,1,0,20500
ARS,1994-12-17,1994-95,1,LEE,Leeds United,1,3,-2,0,38098
ARS,1994-12-26,1994-95,1,AVL,Aston Villa,0,0,0,0,34452
ARS,1994-12-28,1994-95,0,IPS,Ipswich Town,2,0,2,0,22054
ARS,1994-12-31,1994-95,1,QPR,Queens Park Rangers,1,3,-2,0,32393
ARS,1995-01-02,1994-95,0,TOT,Tottenham Hotspur,0,1,-1,0,28747
ARS,1995-01-14,1994-95,1,EVE,Everton,1,1,0,0,34743
ARS,1995-01-21,1994-95,0,COV,Coventry City,1,0,1,0,14468
ARS,1995-01-24,1994-95,1,SOU,Southampton,1,1,0,0,27213
ARS,1995-02-04,1994-95,0,SHW,Sheffield Wednesday,1,3,-2,0,23468
ARS,1995-02-11,1994-95,1,LEI,Leicester City,1,1,0,0,31373
ARS,1995-02-21,1994-95,1,NFO,Nottingham Forest,1,0,1,0,35441
ARS,1995-02-25,1994-95,0,CRY,Crystal Palace,3,0,3,0,17092
ARS,1995-03-05,1994-95,1,WHU,West Ham United,0,1,-1,0,36295
ARS,1995-03-08,1994-95,0,BLA,Blackburn Rovers,1,3,-2,0,23452
ARS,1995-03-19,1994-95,0,NEW,Newcastle United,0,1,-1,0,35611
ARS,1995-03-22,1994-95,0,MUN,Manchester United,0,3,-3,0,43623
ARS,1995-04-01,1994-95,1,NOR,Norwich City,5,1,4,0,36942
ARS,1995-04-08,1994-95,0,QPR,Queens Park Rangers,1,3,-2,0,16341
ARS,1995-04-12,1994-95,1,LIV,Liverpool,0,1,-1,0,38036
ARS,1995-04-15,1994-95,1,IPS,Ipswich Town,4,1,3,0,36818
ARS,1995-04-17,1994-95,0,AVL,Aston Villa,4,0,4,0,32005
ARS,1995-04-29,1994-95,1,TOT,Tottenham Hotspur,1,1,0,0,38377
ARS,1995-05-04,1994-95,1,WIM,Wimbledon,0,0,0,0,32822
ARS,1995-05-14,1994-95,0,CHE,Chelsea,1,2,-1,0,29542
ARS,1995-08-20,1995-96,1,MID,Middlesbrough,1,1,0,0,37308
ARS,1995-08-23,1995-96,0,EVE,Everton,2,0,2,0,35775
ARS,1995-08-26,1995-96,0,COV,Coventry City,0,0,0,0,20065
ARS,1995-08-29,1995-96,1,NFO,Nottingham Forest,1,1,0,0,38248
ARS,1995-09-10,1995-96,0,MCI,Manchester City,1,0,1,0,23994
ARS,1995-09-16,1995-96,1,WHU,West Ham United,1,0,1,0,38065
ARS,1995-09-23,1995-96,1,SOU,Southampton,4,2,2,0,38136
ARS,1995-09-30,1995-96,0,CHE,Chelsea,0,1,-1,0,31048
ARS,1995-10-14,1995-96,0,LEE,Leeds United,3,0,3,0,38552
ARS,1995-10-21,1995-96,1,AVL,Aston Villa,2,0,2,0,38271
ARS,1995-10-30,1995-96,0,BOL,Bolton Wanderers,0,1,-1,0,18682
ARS,1995-11-04,1995-96,1,MUN,Manchester United,1,0,1,0,38317
ARS,1995-11-18,1995-96,0,TOT,Tottenham Hotspur,1,2,-1,0,32894
ARS,1995-11-21,1995-96,1,SHW,Sheffield Wednesday,4,2,2,0,34556
ARS,1995-11-26,1995-96,1,BLA,Blackburn Rovers,0,0,0,0,37695
ARS,1995-12-02,1995-96,0,AVL,Aston Villa,1,1,0,0,37770
ARS,1995-12-09,1995-96,0,SOU,Southampton,0,0,0,0,15238
ARS,1995-12-16,1995-96,1,CHE,Chelsea,1,1,0,0,38295
ARS,1995-12-23,1995-96,0,LIV,Liverpool,1,3,-2,0,39806
ARS,1995-12-26,1995-96,1,QPR,Queens Park Rangers,3,0,3,0,38259
ARS,1995-12-30,1995-96,1,WIM,Wimbledon,1,3,-2,0,37640
ARS,1996-01-02,1995-96,0,NEW,Newcastle United,0,2,-2,0,36530
ARS,1996-01-13,1995-96,0,MID,Middlesbrough,3,2,1,0,29359
ARS,1996-01-20,1995-96,1,EVE,Everton,1,2,-1,0,38275
ARS,1996-02-03,1995-96,1,COV,Coventry City,1,1,0,0,35623
ARS,1996-02-10,1995-96,0,NFO,Nottingham Forest,1,0,1,0,27222
ARS,1996-02-24,1995-96,0,WHU,West Ham United,1,0,1,0,24217
ARS,1996-03-02,1995-96,0,QPR,Queens Park Rangers,1,1,0,0,17970
ARS,1996-03-05,1995-96,1,MCI,Manchester City,3,1,2,0,34519
ARS,1996-03-16,1995-96,0,WIM,Wimbledon,3,0,3,0,18335
ARS,1996-03-20,1995-96,0,MUN,Manchester United,0,1,-1,0,50028
ARS,1996-03-23,1995-96,1,NEW,Newcastle United,2,0,2,0,38271
ARS,1996-04-06,1995-96,1,LEE,Leeds United,2,1,1,0,37619
ARS,1996-04-08,1995-96,0,SHW,Sheffield Wednesday,0,1,-1,0,24349
ARS,1996-04-15,1995-96,1,TOT,Tottenham Hotspur,0,0,0,0,38273
ARS,1996-04-27,1995-96,0,BLA,Blackburn Rovers,1,1,0,0,29834
ARS,1996-05-01,1995-96,1,LIV,Liverpool,0,0,0,0,38323
ARS,1996-05-05,1995-96,1,BOL,Bolton Wanderers,2,1,1,0,38104
ARS,1996-08-17,1996-97,1,WHU,West Ham United,2,0,2,0,38056
ARS,1996-08-19,1996-97,0,LIV,Liverpool,0,2,-2,0,38103
ARS,1996-08-24,1996-97,0,LEI,Leicester City,2,0,2,0,20429
ARS,1996-09-04,1996-97,1,CHE,Chelsea,3,3,0,0,38132
ARS,1996-09-07,1996-97,0,AVL,Aston Villa,2,2,0,0,37944
ARS,1996-09-16,1996-97,1,SHW,Sheffield Wednesday,4,1,3,0,33461
ARS,1996-09-21,1996-97,0,MID,Middlesbrough,2,0,2,0,29629
ARS,1996-09-28,1996-97,1,SUN,Sunderland,2,0,2,0,38106
ARS,1996-10-12,1996-97,0,BLA,Blackburn Rovers,2,0,2,0,24303
ARS,1996-10-19,1996-97,1,COV,Coventry City,0,0,0,0,38140
ARS,1996-10-26,1996-97,1,LEE,Leeds United,3,0,3,0,38076
ARS,1996-11-02,1996-97,0,WIM,Wimbledon,2,2,0,0,25521
ARS,1996-11-16,1996-97,0,MUN,Manchester United,0,1,-1,0,55210
ARS,1996-11-24,1996-97,1,TOT,Tottenham Hotspur,3,1,2,0,38264
ARS,1996-11-30,1996-97,0,NEW,Newcastle United,2,1,1,0,36565
ARS,1996-12-04,1996-97,1,SOU,Southampton,3,1,2,0,38033
ARS,1996-12-07,1996-97,1,DER,Derby County,2,2,0,0,38018
ARS,1996-12-21,1996-97,0,NFO,Nottingham Forest,1,2,-1,0,27384
ARS,1996-12-26,1996-97,0,SHW,Sheffield Wednesday,0,0,0,0,23245
ARS,1996-12-28,1996-97,1,AVL,Aston Villa,2,2,0,0,38130
ARS,1997-01-01,1996-97,1,MID,Middlesbrough,2,0,2,0,37573
ARS,1997-01-11,1996-97,0,SUN,Sunderland,0,1,-1,0,21154
ARS,1997-01-19,1996-97,1,EVE,Everton,3,1,2,0,38095
ARS,1997-01-29,1996-97,0,WHU,West Ham United,2,1,1,0,24382
ARS,1997-02-01,1996-97,0,LEE,Leeds United,0,0,0,0,35502
ARS,1997-02-15,1996-97,0,TOT,Tottenham Hotspur,0,0,0,0,33039
ARS,1997-02-19,1996-97,1,MUN,Manchester United,1,2,-1,0,38172
ARS,1997-02-23,1996-97,1,WIM,Wimbledon,0,1,-1,0,37854
ARS,1997-03-01,1996-97,0,EVE,Everton,2,0,2,0,36980
ARS,1997-03-08,1996-97,1,NFO,Nottingham Forest,2,0,2,0,38206
ARS,1997-03-15,1996-97,0,SOU,Southampton,2,0,2,0,15144
ARS,1997-03-24,1996-97,1,LIV,Liverpool,1,2,-1,0,38068
ARS,1997-04-05,1996-97,0,CHE,Chelsea,3,0,3,0,28182
ARS,1997-04-12,1996-97,1,LEI,Leicester City,2,0,2,0,38044
ARS,1997-04-19,1996-97,1,BLA,Blackburn Rovers,1,1,0,0,38086
ARS,1997-04-21,1996-97,0,COV,Coventry City,1,1,0,0,19998
ARS,1997-05-03,1996-97,1,NEW,Newcastle United,0,1,-1,0,38179
ARS,1997-05-11,1996-97,0,DER,Derby County,3,1,2,0,18287
ARS,1997-08-09,1997-98,0,LEE,Leeds United,1,1,0,0,37993
ARS,1997-08-11,1997-98,1,COV,Coventry City,2,0,2,0,37324
ARS,1997-08-23,1997-98,0,SOU,Southampton,3,1,2,0,15246
ARS,1997-08-27,1997-98,0,LEI,Leicester City,3,3,0,0,21089
ARS,1997-08-30,1997-98,1,TOT,Tottenham Hotspur,0,0,0,0,38102
ARS,1997-09-13,1997-98,1,BOL,Bolton Wanderers,4,1,3,0,38138
ARS,1997-09-21,1997-98,0,CHE,Chelsea,3,2,1,0,33012
ARS,1997-09-24,1997-98,1,WHU,West Ham United,4,0,4,0,38012
ARS,1997-09-27,1997-98,0,EVE,Everton,2,2,0,0,35457
ARS,1997-10-04,1997-98,1,BAR,Barnsley,5,0,5,0,38049
ARS,1997-10-18,1997-98,0,CRY,Crystal Palace,0,0,0,0,26180
ARS,1997-10-26,1997-98,1,AVL,Aston Villa,0,0,0,0,38061
ARS,1997-11-01,1997-98,0,DER,Derby County,0,3,-3,0,30004
ARS,1997-11-09,1997-98,1,MUN,Manchester United,3,2,1,0,38205
ARS,1997-11-22,1997-98,0,SHW,Sheffield Wednesday,0,2,-2,0,34373
ARS,1997-11-30,1997-98,1,LIV,Liverpool,0,1,-1,0,38094
ARS,1997-12-06,1997-98,0,NEW,Newcastle United,1,0,1,0,36751
ARS,1997-12-13,1997-98,1,BLA,Blackburn Rovers,1,3,-2,0,38147
ARS,1997-12-26,1997-98,1,LEI,Leicester City,2,1,1,0,38023
ARS,1997-12-28,1997-98,0,TOT,Tottenham Hotspur,1,1,0,0,29610
ARS,1998-01-10,1997-98,1,LEE,Leeds United,2,1,1,0,38018
ARS,1998-01-17,1997-98,0,COV,Coventry City,2,2,0,0,22864
ARS,1998-01-31,1997-98,1,SOU,Southampton,3,0,3,0,38056
ARS,1998-02-08,1997-98,1,CHE,Chelsea,2,0,2,0,38083
ARS,1998-02-21,1997-98,1,CRY,Crystal Palace,1,0,1,0,38094
ARS,1998-03-02,1997-98,0,WHU,West Ham United,0,0,0,0,25717
ARS,1998-03-11,1997-98,0,WIM,Wimbledon,1,0,1,0,22291
ARS,1998-03-14,1997-98,0,MUN,Manchester United,1,0,1,0,55174
ARS,1998-03-28,1997-98,1,SHW,Sheffield Wednesday,1,0,1,0,38087
ARS,1998-03-31,1997-98,0,BOL,Bolton Wanderers,1,0,1,0,25000
ARS,1998-04-11,1997-98,1,NEW,Newcastle United,3,1,2,0,38102
ARS,1998-04-13,1997-98,0,BLA,Blackburn Rovers,4,1,3,0,28212
ARS,1998-04-18,1997-98,1,WIM,Wimbledon,5,0,5,0,38024
ARS,1998-04-25,1997-98,0,BAR,Barnsley,2,0,2,0,18691
ARS,1998-04-29,1997-98,1,DER,Derby County,1,0,1,0,38121
ARS,1998-05-03,1997-98,1,EVE,Everton,4,0,4,0,38269
ARS,1998-05-06,1997-98,0,LIV,Liverpool,0,4,-4,0,44417
ARS,1998-05-10,1997-98,0,AVL,Aston Villa,0,1,-1,0,37372
ARS,1998-08-17,1998-99,1,NFO,Nottingham Forest,2,1,1,0,38064
ARS,1998-08-22,1998-99,0,LIV,Liverpool,0,0,0,0,44429
ARS,1998-08-29,1998-99,1,CHA,Charlton Athletic,0,0,0,0,38014
ARS,1998-09-09,1998-99,0,CHE,Chelsea,0,0,0,0,34647
ARS,1998-09-12,1998-99,0,LEI,Leicester City,1,1,0,0,21628
ARS,1998-09-20,1998-99,1,MUN,Manchester United,3,0,3,0,38142
ARS,1998-09-26,1998-99,0,SHW,Sheffield Wednesday,0,1,-1,0,27949
ARS,1998-10-04,1998-99,1,NEW,Newcastle United,3,0,3,0,38102
ARS,1998-10-17,1998-99,1,SOU,Southampton,1,1,0,0,38027
ARS,1998-10-25,1998-99,0,BLA,Blackburn Rovers,2,1,1,0,27012
ARS,1998-10-31,1998-99,0,COV,Coventry City,1,0,1,0,23039
ARS,1998-11-08,1998-99,1,EVE,Everton,1,0,1,0,38088
ARS,1998-11-14,1998-99,1,TOT,Tottenham Hotspur,0,0,0,0,38278
ARS,1998-11-21,1998-99,0,WIM,Wimbledon,0,1,-1,0,26003
ARS,1998-11-29,1998-99,1,MID,Middlesbrough,1,1,0,0,38075
ARS,1998-12-05,1998-99,0,DER,Derby County,0,0,0,0,29018
ARS,1998-12-13,1998-99,0,AVL,Aston Villa,2,3,-1,0,39217
ARS,1998-12-20,1998-99,1,LEE,Leeds United,3,1,2,0,38025
ARS,1998-12-26,1998-99,1,WHU,West Ham United,1,0,1,0,38098
ARS,1998-12-28,1998-99,0,CHA,Charlton Athletic,1,0,1,0,20043
ARS,1999-01-09,1998-99,1,LIV,Liverpool,0,0,0,0,38107
ARS,1999-01-16,1998-99,0,NFO,Nottingham Forest,1,0,1,0,26021
ARS,1999-01-31,1998-99,1,CHE,Chelsea,1,0,1,0,38121
ARS,1999-02-06,1998-99,0,WHU,West Ham United,4,0,4,0,26042
ARS,1999-02-17,1998-99,0,MUN,Manchester United,1,1,0,0,55171
ARS,1999-02-20,1998-99,1,LEI,Leicester City,5,0,5,0,38069
ARS,1999-02-28,1998-99,0,NEW,Newcastle United,1,1,0,0,36708
ARS,1999-03-09,1998-99,1,SHW,Sheffield Wednesday,3,0,3,0,37792
ARS,1999-03-13,1998-99,0,EVE,Everton,2,0,2,0,38049
ARS,1999-03-20,1998-99,1,COV,Coventry City,2,0,2,0,38074
ARS,1999-04-03,1998-99,0,SOU,Southampton,0,0,0,0,15255
ARS,1999-04-06,1998-99,1,BLA,Blackburn Rovers,1,0,1,0,37762
ARS,1999-04-19,1998-99,1,WIM,Wimbledon,5,1,4,0,37982
ARS,1999-04-24,1998-99,0,MID,Middlesbrough,6,1,5,0,34630
ARS,1999-05-02,1998-99,1,DER,Derby County,1,0,1,0,37323
ARS,1999-05-05,1998-99,0,TOT,Tottenham Hotspur,3,1,2,0,36019
ARS,1999-05-11,1998-99,0,LEE,Leeds United,0,1,-1,0,40124
ARS,1999-05-16,1998-99,1,AVL,Aston Villa,1,0,1,0,38308
ARS,1999-08-07,1999-00,1,LEI,Leicester City,2,1,1,0,38026
ARS,1999-08-10,1999-00,0,DER,Derby County,2,1,1,0,25901
ARS,1999-08-14,1999-00,0,SUN,Sunderland,0,0,0,0,41680
ARS,1999-08-22,1999-00,1,MUN,Manchester United,1,2,-1,0,38147
ARS,1999-08-25,1999-00,1,BRA,Bradford City,2,0,2,0,38073
ARS,1999-08-28,1999-00,0,LIV,Liverpool,0,2,-2,0,44886
ARS,1999-09-11,1999-00,1,AVL,Aston Villa,3,1,2,0,38093
ARS,1999-09-18,1999-00,0,SOU,Southampton,1,0,1,0,15242
ARS,1999-09-25,1999-00,1,WAT,Watford,1,0,1,0,38127
ARS,1999-10-03,1999-00,0,WHU,West Ham United,1,2,-1,0,26009
ARS,1999-10-16,1999-00,1,EVE,Everton,4,1,3,0,38042
ARS,1999-10-23,1999-00,0,CHE,Chelsea,3,2,1,0,34958
ARS,1999-10-30,1999-00,1,NEW,Newcastle United,0,0,0,0,38106
ARS,1999-11-07,1999-00,0,TOT,Tottenham Hotspur,1,2,-1,0,36085
ARS,1999-11-20,1999-00,1,MID,Middlesbrough,5,1,4,0,38082
ARS,1999-11-28,1999-00,1,DER,Derby County,2,1,1,0,37964
ARS,1999-12-04,1999-00,0,LEI,Leicester City,3,0,3,0,20495
ARS,1999-12-18,1999-00,1,WIM,Wimbledon,1,1,0,0,38052
ARS,1999-12-26,1999-00,0,COV,Coventry City,2,3,-1,0,22757
ARS,1999-12-28,1999-00,1,LEE,Leeds United,2,0,2,0,38096
ARS,2000-01-03,1999-00,0,SHW,Sheffield Wednesday,1,1,0,0,26155
ARS,2000-01-15,1999-00,1,SUN,Sunderland,4,1,3,0,38039
ARS,2000-01-24,1999-00,0,MUN,Manchester United,1,1,0,0,58293
ARS,2000-02-05,1999-00,0,BRA,Bradford City,1,2,-1,0,18276
ARS,2000-02-13,1999-00,1,LIV,Liverpool,0,1,-1,0,38098
ARS,2000-02-26,1999-00,1,SOU,Southampton,3,1,2,0,38044
ARS,2000-03-05,1999-00,0,AVL,Aston Villa,1,1,0,0,36930
ARS,2000-03-12,1999-00,0,MID,Middlesbrough,1,2,-1,0,34244
ARS,2000-03-19,1999-00,1,TOT,Tottenham Hotspur,2,1,1,0,38131
ARS,2000-03-26,1999-00,1,COV,Coventry City,3,0,3,0,38027
ARS,2000-04-01,1999-00,0,WIM,Wimbledon,3,1,2,0,25858
ARS,2000-04-16,1999-00,0,LEE,Leeds United,4,0,4,0,39307
ARS,2000-04-23,1999-00,0,WAT,Watford,3,2,1,0,19670
ARS,2000-04-29,1999-00,0,EVE,Everton,1,0,1,0,35919
ARS,2000-05-02,1999-00,1,WHU,West Ham United,2,1,1,0,38092
ARS,2000-05-06,1999-00,1,CHE,Chelsea,2,1,1,0,38119
ARS,2000-05-09,1999-00,1,SHW,Sheffield Wednesday,3,3,0,0,37271
ARS,2000-05-14,1999-00,0,NEW,Newcastle United,2,4,-2,0,36450
ARS,2000-08-19,2000-01,0,SUN,Sunderland,0,1,-1,0,47121
ARS,2000-08-21,2000-01,1,LIV,Liverpool,2,0,2,0,38014
ARS,2000-08-26,2000-01,1,CHA,Charlton Athletic,5,3,2,0,38025
ARS,2000-09-06,2000-01,0,CHE,Chelsea,2,2,0,0,34923
ARS,2000-09-09,2000-01,0,BRA,Bradford City,1,1,0,0,17160
ARS,2000-09-16,2000-01,1,COV,Coventry City,2,1,1,0,37794
ARS,2000-09-23,2000-01,0,IPS,Ipswich Town,1,1,0,0,22030
ARS,2000-10-01,2000-01,1,MUN,Manchester United,1,0,1,0,38146
ARS,2000-10-14,2000-01,1,AVL,Aston Villa,1,0,1,0,38042
ARS,2000-10-21,2000-01,0,WHU,West Ham United,2,1,1,0,26034
ARS,2000-10-28,2000-01,1,MCI,Manchester City,5,0,5,0,38049
ARS,2000-11-04,2000-01,0,MID,Middlesbrough,1,0,1,0,29541
ARS,2000-11-11,2000-01,1,DER,Derby County,0,0,0,0,37679
ARS,2000-11-18,2000-01,0,EVE,Everton,0,2,-2,0,33106
ARS,2000-11-26,2000-01,0,LEE,Leeds United,0,1,-1,0,38084
ARS,2000-12-02,2000-01,1,SOU,Southampton,1,0,1,0,38036
ARS,2000-12-09,2000-01,1,NEW,Newcastle United,5,0,5,0,38052
ARS,2000-12-18,2000-01,0,TOT,Tottenham Hotspur,1,1,0,0,36062
ARS,2000-12-23,2000-01,0,LIV,Liverpool,0,4,-4,0,44144
ARS,2000-12-26,2000-01,1,LEI,Leicester City,6,1,5,0,38007
ARS,2000-12-30,2000-01,1,SUN,Sunderland,2,2,0,0,38026
ARS,2001-01-01,2000-01,0,CHA,Charlton Athletic,0,1,-1,0,20043
ARS,2001-01-13,2000-01,1,CHE,Chelsea,1,1,0,0,38071
ARS,2001-01-20,2000-01,0,LEI,Leicester City,0,0,0,0,21872
ARS,2001-01-30,2000-01,1,BRA,Bradford City,2,0,2,0,37318
ARS,2001-02-03,2000-01,0,COV,Coventry City,1,0,1,0,22035
ARS,2001-02-10,2000-01,1,IPS,Ipswich Town,1,0,1,0,38011
ARS,2001-02-25,2000-01,0,MUN,Manchester United,1,6,-5,0,67535
ARS,2001-03-03,2000-01,1,WHU,West Ham United,3,0,3,0,38071
ARS,2001-03-18,2000-01,0,AVL,Aston Villa,0,0,0,0,36111
ARS,2001-03-31,2000-01,1,TOT,Tottenham Hotspur,2,0,2,0,38121
ARS,2001-04-11,2000-01,0,MCI,Manchester City,4,0,4,0,33444
ARS,2001-04-14,2000-01,1,MID,Middlesbrough,0,3,-3,0,37879
ARS,2001-04-21,2000-01,1,EVE,Everton,4,1,3,0,38029
ARS,2001-04-28,2000-01,0,DER,Derby County,2,1,1,0,29567
ARS,2001-05-05,2000-01,1,LEE,Leeds United,2,1,1,0,38142
ARS,2001-05-15,2000-01,0,NEW,Newcastle United,0,0,0,0,50729
ARS,2001-05-19,2000-01,0,SOU,Southampton,2,3,-1,0,15252
ARS,2001-08-18,2001-02,0,MID,Middlesbrough,4,0,4,0,31557
ARS,2001-08-21,2001-02,1,LEE,Leeds United,1,2,-1,0,38062
ARS,2001-08-25,2001-02,1,LEI,Leicester City,4,0,4,0,37909
ARS,2001-09-08,2001-02,0,CHE,Chelsea,1,1,0,0,40855
ARS,2001-09-15,2001-02,0,FUL,Fulham,3,1,2,0,20805
ARS,2001-09-22,2001-02,1,BOL,Bolton Wanderers,1,1,0,0,38014
ARS,2001-09-29,2001-02,0,DER,Derby County,2,0,2,0,29200
ARS,2001-10-13,2001-02,0,SOU,Southampton,2,0,2,0,29759
ARS,2001-10-20,2001-02,1,BLA,Blackburn Rovers,3,3,0,0,38108
ARS,2001-10-27,2001-02,0,SUN,Sunderland,1,1,0,0,48029
ARS,2001-11-04,2001-02,1,CHA,Charlton Athletic,2,4,-2,0,38010
ARS,2001-11-17,2001-02,0,TOT,Tottenham Hotspur,1,1,0,0,36049
ARS,2001-11-25,2001-02,1,MUN,Manchester United,3,1,2,0,38174
ARS,2001-12-01,2001-02,0,IPS,Ipswich Town,2,0,2,0,24666
ARS,2001-12-09,2001-02,1,AVL,Aston Villa,3,2,1,0,38074
ARS,2001-12-15,2001-02,0,WHU,West Ham United,1,1,0,0,34523
ARS,2001-12-18,2001-02,1,NEW,Newcastle United,1,3,-2,0,38012
ARS,2001-12-23,2001-02,0,LIV,Liverpool,2,1,1,0,44297
ARS,2001-12-26,2001-02,1,CHE,Chelsea,2,1,1,0,38079
ARS,2001-12-29,2001-02,1,MID,Middlesbrough,2,1,1,0,37948
ARS,2002-01-13,2001-02,1,LIV,Liverpool,1,1,0,0,38132
ARS,2002-01-20,2001-02,0,LEE,Leeds United,1,1,0,0,40143
ARS,2002-01-23,2001-02,0,LEI,Leicester City,3,1,2,0,21344
ARS,2002-01-30,2001-02,0,BLA,Blackburn Rovers,3,2,1,0,25893
ARS,2002-02-02,2001-02,1,SOU,Southampton,1,1,0,0,38024
ARS,2002-02-10,2001-02,0,EVE,Everton,1,0,1,0,30859
ARS,2002-02-23,2001-02,1,FUL,Fulham,4,1,3,0,38029
ARS,2002-03-02,2001-02,0,NEW,Newcastle United,2,0,2,0,52067
ARS,2002-03-05,2001-02,1,DER,Derby County,1,0,1,0,37878
ARS,2002-03-17,2001-02,0,AVL,Aston Villa,2,1,1,0,41520
ARS,2002-03-30,2001-02,1,SUN,Sunderland,3,0,3,0,38047
ARS,2002-04-01,2001-02,0,CHA,Charlton Athletic,3,0,3,0,26339
ARS,2002-04-06,2001-02,1,TOT,Tottenham Hotspur,2,1,1,0,38186
ARS,2002-04-21,2001-02,1,IPS,Ipswich Town,2,0,2,0,38058
ARS,2002-04-24,2001-02,1,WHU,West Ham United,2,0,2,0,38038
ARS,2002-04-29,2001-02,0,BOL,Bolton Wanderers,2,0,2,0,27351
ARS,2002-05-08,2001-02,0,MUN,Manchester United,1,0,1,0,67580
ARS,2002-05-11,2001-02,1,EVE,Everton,4,3,1,0,38254
ARS,2002-08-18,2002-03,1,BIR,Birmingham City,2,0,2,0,38018
ARS,2002-08-24,2002-03,0,WHU,West Ham United,2,2,0,0,35048
ARS,2002-08-27,2002-03,1,WBA,West Bromwich Albion,5,2,3,0,37920
ARS,2002-09-01,2002-03,0,CHE,Chelsea,1,1,0,0,40037
ARS,2002-09-10,2002-03,1,MCI,Manchester City,2,1,1,0,37878
ARS,2002-09-14,2002-03,0,CHA,Charlton Athletic,3,0,3,0,26080
ARS,2002-09-21,2002-03,1,BOL,Bolton Wanderers,2,1,1,0,37974
ARS,2002-09-28,2002-03,0,LEE,Leeds United,4,1,3,0,40199
ARS,2002-10-06,2002-03,1,SUN,Sunderland,3,1,2,0,37902
ARS,2002-10-19,2002-03,0,EVE,Everton,1,2,-1,0,39038
ARS,2002-10-26,2002-03,1,BLA,Blackburn Rovers,1,2,-1,0,38064
ARS,2002-11-03,2002-03,0,FUL,Fulham,1,0,1,0,18800
ARS,2002-11-09,2002-03,1,NEW,Newcastle United,1,0,1,0,38121
ARS,2002-11-16,2002-03,1,TOT,Tottenham Hotspur,3,0,3,0,38152
ARS,2002-11-23,2002-03,0,SOU,Southampton,2,3,-1,0,31797
ARS,2002-11-30,2002-03,1,AVL,Aston Villa,3,1,2,0,38090
ARS,2002-12-07,2002-03,0,MUN,Manchester United,0,2,-2,0,67650
ARS,2002-12-15,2002-03,0,TOT,Tottenham Hotspur,1,1,0,0,36076
ARS,2002-12-21,2002-03,1,MID,Middlesbrough,2,0,2,0,38003
ARS,2002-12-26,2002-03,0,WBA,West Bromwich Albion,2,1,1,0,27025
ARS,2002-12-29,2002-03,1,LIV,Liverpool,1,1,0,0,38074
ARS,2003-01-01,2002-03,1,CHE,Chelsea,3,2,1,0,38096
ARS,2003-01-12,2002-03,0,BIR,Birmingham City,4,0,4,0,29505
ARS,2003-01-19,2002-03,1,WHU,West Ham United,3,1,2,0,38053
ARS,2003-01-29,2002-03,0,LIV,Liverpool,2,2,0,0,43668
ARS,2003-02-01,2002-03,1,FUL,Fulham,2,1,1,0,38050
ARS,2003-02-09,2002-03,0,NEW,Newcastle United,1,1,0,0,52157
ARS,2003-02-22,2002-03,0,MCI,Manchester City,5,1,4,0,34960
ARS,2003-03-02,2002-03,1,CHA,Charlton Athletic,2,0,2,0,38015
ARS,2003-03-15,2002-03,0,BLA,Blackburn Rovers,0,2,-2,0,29840
ARS,2003-03-23,2002-03,1,EVE,Everton,2,1,1,0,38042
ARS,2003-04-05,2002-03,0,AVL,Aston Villa,1,1,0,0,42602
ARS,2003-04-16,2002-03,1,MUN,Manchester United,2,2,0,0,38164
ARS,2003-04-19,2002-03,0,MID,Middlesbrough,2,0,2,0,34724
ARS,2003-04-26,2002-03,0,BOL,Bolton Wanderers,2,2,0,0,27253
ARS,2003-05-04,2002-03,1,LEE,Leeds United,2,3,-1,0,38127
ARS,2003-05-07,2002-03,1,SOU,Southampton,6,1,5,0,38052
ARS,2003-05-11,2002-03,0,SUN,Sunderland,4,0,4,0,40188
ARS,2003-08-16,2003-04,1,EVE,Everton,2,1,1,0,38014
ARS,2003-08-24,2003-04,0,MID,Middlesbrough,4,0,4,0,29450
ARS,2003-08-27,2003-04,1,AVL,Aston Villa,2,0,2,0,38010
ARS,2003-08-31,2003-04,0,MCI,Manchester City,2,1,1,0,46436
ARS,2003-09-13,2003-04,1,POR,Portsmouth,1,1,0,0,38052
ARS,2003-09-21,2003-04,0,MUN,Manchester United,0,0,0,0,67639
ARS,2003-09-26,2003-04,1,NEW,Newcastle United,3,2,1,0,38112
ARS,2003-10-04,2003-04,0,LIV,Liverpool,2,1,1,0,44374
ARS,2003-10-18,2003-04,1,CHE,Chelsea,2,1,1,0,38172
ARS,2003-10-26,2003-04,0,CHA,Charlton Athletic,1,1,0,0,26639
ARS,2003-11-01,2003-04,0,LEE,Leeds United,4,1,3,0,36491
ARS,2003-11-08,2003-04,1,TOT,Tottenham Hotspur,2,1,1,0,38101
ARS,2003-11-22,2003-04,0,BIR,Birmingham City,3,0,3,0,29588
ARS,2003-11-30,2003-04,1,FUL,Fulham,0,0,0,0,38063
ARS,2003-12-06,2003-04,0,LEI,Leicester City,1,1,0,0,32108
ARS,2003-12-14,2003-04,1,BLA,Blackburn Rovers,1,0,1,0,37677
ARS,2003-12-20,2003-04,0,BOL,Bolton Wanderers,1,1,0,0,27492
ARS,2003-12-26,2003-04,1,WOL,Wolverhampton Wanderers,3,0,3,0,38003
ARS,2003-12-29,2003-04,0,SOU,Southampton,1,0,1,0,32151
ARS,2004-01-07,2003-04,0,EVE,Everton,1,1,0,0,38726
ARS,2004-01-10,2003-04,1,MID,Middlesbrough,4,1,3,0,38117
ARS,2004-01-18,2003-04,0,AVL,Aston Villa,2,0,2,0,39380
ARS,2004-02-01,2003-04,1,MCI,Manchester City,2,1,1,0,38103
ARS,2004-02-07,2003-04,0,WOL,Wolverhampton Wanderers,3,1,2,0,29392
ARS,2004-02-10,2003-04,1,SOU,Southampton,2,0,2,0,38007
ARS,2004-02-21,2003-04,0,CHE,Chelsea,2,1,1,0,41926
ARS,2004-02-28,2003-04,1,CHA,Charlton Athletic,2,1,1,0,38137
ARS,2004-03-13,2003-04,0,BLA,Blackburn Rovers,2,0,2,0,28627
ARS,2004-03-20,2003-04,1,BOL,Bolton Wanderers,2,1,1,0,38053
ARS,2004-03-28,2003-04,1,MUN,Manchester United,1,1,0,0,38184
ARS,2004-04-09,2003-04,1,LIV,Liverpool,4,2,2,0,38119
ARS,2004-04-11,2003-04,0,NEW,Newcastle United,0,0,0,0,52141
ARS,2004-04-16,2003-04,1,LEE,Leeds United,5,0,5,0,38094
ARS,2004-04-25,2003-04,0,TOT,Tottenham Hotspur,2,2,0,0,36097
ARS,2004-05-01,2003-04,1,BIR,Birmingham City,0,0,0,0,38061
ARS,2004-05-04,2003-04,0,POR,Portsmouth,1,1,0,0,20140
ARS,2004-05-09,2003-04,0,FUL,Fulham,1,0,1,0,18102
ARS,2004-05-15,2003-04,1,LEI,Leicester City,2,1,1,0,38419
ARS,2004-08-15,2004-05,0,EVE,Everton,4,1,3,0,35241
ARS,2004-08-22,2004-05,1,MID,Middlesbrough,5,3,2,0,37415
ARS,2004-08-25,2004-05,1,BLA,Blackburn Rovers,3,0,3,0,37496
ARS,2004-08-28,2004-05,0,NOR,Norwich City,4,1,3,0,23944
ARS,2004-09-11,2004-05,0,FUL,Fulham,3,0,3,0,21681
ARS,2004-09-18,2004-05,1,BOL,Bolton Wanderers,2,2,0,0,37010
ARS,2004-09-25,2004-05,0,MCI,Manchester City,1,0,1,0,47015
ARS,2004-10-02,2004-05,1,CHA,Charlton Athletic,4,0,4,0,38103
ARS,2004-10-16,2004-05,1,AVL,Aston Villa,3,1,2,0,38137
ARS,2004-10-24,2004-05,0,MUN,Manchester United,0,2,-2,0,67862
ARS,2004-10-30,2004-05,1,SOU,Southampton,2,2,0,0,38141
ARS,2004-11-06,2004-05,0,CRY,Crystal Palace,1,1,0,0,26193
ARS,2004-11-13,2004-05,0,TOT,Tottenham Hotspur,5,4,1,0,36096
ARS,2004-11-20,2004-05,1,WBA,West Bromwich Albion,1,1,0,0,38109
ARS,2004-11-28,2004-05,0,LIV,Liverpool,1,2,-1,0,43730
ARS,2004-12-04,2004-05,1,BIR,Birmingham City,3,0,3,0,38064
ARS,2004-12-12,2004-05,1,CHE,Chelsea,2,2,0,0,38153
ARS,2004-12-19,2004-05,0,POR,Portsmouth,1,0,1,0,20170
ARS,2004-12-26,2004-05,1,FUL,Fulham,2,0,2,0,38047
ARS,2004-12-29,2004-05,0,NEW,Newcastle United,1,0,1,0,52320
ARS,2005-01-01,2004-05,0,CHA,Charlton Athletic,3,1,2,0,26694
ARS,2005-01-04,2004-05,1,MCI,Manchester City,1,1,0,0,38086
ARS,2005-01-15,2004-05,0,BOL,Bolton Wanderers,0,1,-1,0,27514
ARS,2005-01-23,2004-05,1,NEW,Newcastle United,1,0,1,0,38137
ARS,2005-02-01,2004-05,1,MUN,Manchester United,2,4,-2,0,38154
ARS,2005-02-05,2004-05,0,AVL,Aston Villa,3,1,2,0,42593
ARS,2005-02-14,2004-05,1,CRY,Crystal Palace,5,1,4,0,38056
ARS,2005-02-26,2004-05,0,SOU,Southampton,1,1,0,0,31815
ARS,2005-03-05,2004-05,1,POR,Portsmouth,3,0,3,0,38079
ARS,2005-03-19,2004-05,0,BLA,Blackburn Rovers,1,0,1,0,22992
ARS,2005-04-02,2004-05,1,NOR,Norwich City,4,1,3,0,38066
ARS,2005-04-09,2004-05,0,MID,Middlesbrough,1,0,1,0,33874
ARS,2005-04-20,2004-05,0,CHE,Chelsea,0,0,0,0,41621
ARS,2005-04-25,2004-05,1,TOT,Tottenham Hotspur,1,0,1,0,38147
ARS,2005-05-02,2004-05,0,WBA,West Bromwich Albion,2,0,2,0,27249
ARS,2005-05-08,2004-05,1,LIV,Liverpool,3,1,2,0,38119
ARS,2005-05-11,2004-05,1,EVE,Everton,7,0,7,0,38073
ARS,2005-05-15,2004-05,0,BIR,Birmingham City,1,2,-1,0,29302
ARS,2005-08-14,2005-06,1,NEW,Newcastle United,2,0,2,0,38072
ARS,2005-08-21,2005-06,0,CHE,Chelsea,0,1,-1,0,42135
ARS,2005-08-24,2005-06,1,FUL,Fulham,4,1,3,0,37867
ARS,2005-09-10,2005-06,0,MID,Middlesbrough,1,2,-1,0,28075
ARS,2005-09-19,2005-06,1,EVE,Everton,2,0,2,0,38121
ARS,2005-09-24,2005-06,0,WHU,West Ham United,0,0,0,0,34281
ARS,2005-10-02,2005-06,1,BIR,Birmingham City,1,0,1,0,37898
ARS,2005-10-15,2005-06,0,WBA,West Bromwich Albion,1,2,-1,0,26443
ARS,2005-10-22,2005-06,1,MCI,Manchester City,1,0,1,0,38189
ARS,2005-10-29,2005-06,0,TOT,Tottenham Hotspur,1,1,0,0,36154
ARS,2005-11-05,2005-06,1,SUN,Sunderland,3,1,2,0,38210
ARS,2005-11-19,2005-06,0,WIG,Wigan Athletic,3,2,1,0,25004
ARS,2005-11-26,2005-06,1,BLA,Blackburn Rovers,3,0,3,0,38192
ARS,2005-12-03,2005-06,0,BOL,Bolton Wanderers,0,2,-2,0,26792
ARS,2005-12-10,2005-06,0,NEW,Newcastle United,0,1,-1,0,52303
ARS,2005-12-18,2005-06,1,CHE,Chelsea,0,2,-2,0,38347
ARS,2005-12-26,2005-06,0,CHA,Charlton Athletic,1,0,1,0,26944
ARS,2005-12-28,2005-06,1,POR,Portsmouth,4,0,4,0,38223
ARS,2005-12-31,2005-06,0,AVL,Aston Villa,0,0,0,0,37114
ARS,2006-01-03,2005-06,1,MUN,Manchester United,0,0,0,0,38313
ARS,2006-01-14,2005-06,1,MID,Middlesbrough,7,0,7,0,38186
ARS,2006-01-21,2005-06,0,EVE,Everton,0,1,-1,0,36920
ARS,2006-02-01,2005-06,1,WHU,West Ham United,2,3,-1,0,38216
ARS,2006-02-04,2005-06,0,BIR,Birmingham City,2,0,2,0,27075
ARS,2006-02-11,2005-06,1,BOL,Bolton Wanderers,1,1,0,0,38193
ARS,2006-02-14,2005-06,0,LIV,Liverpool,0,1,-1,0,45012
ARS,2006-02-25,2005-06,0,BLA,Blackburn Rovers,0,1,-1,0,22504
ARS,2006-03-04,2005-06,0,FUL,Fulham,4,0,4,0,22397
ARS,2006-03-12,2005-06,1,LIV,Liverpool,2,1,1,0,38221
ARS,2006-03-18,2005-06,1,CHA,Charlton Athletic,3,0,3,0,38223
ARS,2006-04-01,2005-06,1,AVL,Aston Villa,5,0,5,0,38188
ARS,2006-04-09,2005-06,0,MUN,Manchester United,0,2,-2,0,70908
ARS,2006-04-12,2005-06,0,POR,Portsmouth,1,1,0,0,20230
ARS,2006-04-15,2005-06,1,WBA,West Bromwich Albion,3,1,2,0,38167
ARS,2006-04-22,2005-06,1,TOT,Tottenham Hotspur,1,1,0,0,38326
ARS,2006-05-01,2005-06,0,SUN,Sunderland,3,0,3,0,44003
ARS,2006-05-04,2005-06,0,MCI,Manchester City,3,1,2,0,41875
ARS,2006-05-07,2005-06,1,WIG,Wigan Athletic,4,2,2,0,38349
ARS,2006-08-19,2006-07,1,AVL,Aston Villa,1,1,0,0,60023
ARS,2006-08-26,2006-07,0,MCI,Manchester City,0,1,-1,0,40699
ARS,2006-09-09,2006-07,1,MID,Middlesbrough,1,1,0,0,60007
ARS,2006-09-17,2006-07,0,MUN,Manchester United,1,0,1,0,75595
ARS,2006-09-23,2006-07,1,SHU,Sheffield United,3,0,3,0,59912
ARS,2006-09-30,2006-07,0,CHA,Charlton Athletic,2,1,1,0,26720
ARS,2006-10-14,2006-07,1,WAT,Watford,3,0,3,0,60018
ARS,2006-10-22,2006-07,0,REA,Reading,4,0,4,0,24004
ARS,2006-10-28,2006-07,1,EVE,Everton,1,1,0,0,60047
ARS,2006-11-05,2006-07,0,WHU,West Ham United,0,1,-1,0,34912
ARS,2006-11-12,2006-07,1,LIV,Liverpool,3,0,3,0,60110
ARS,2006-11-18,2006-07,1,NEW,Newcastle United,1,1,0,0,60058
ARS,2006-11-25,2006-07,0,BOL,Bolton Wanderers,1,3,-2,0,24409
ARS,2006-11-29,2006-07,0,FUL,Fulham,1,2,-1,1,24510
ARS,2006-12-02,2006-07,1,TOT,Tottenham Hotspur,3,0,3,0,60119
ARS,2006-12-10,2006-07,0,CHE,Chelsea,1,1,0,0,41945
ARS,2006-12-13,2006-07,0,WIG,Wigan Athletic,1,0,1,0,15506
ARS,2006-12-16,2006-07,1,POR,Portsmouth,2,2,0,0,60037
ARS,2006-12-23,2006-07,1,BLA,Blackburn Rovers,6,2,4,0,59913
ARS,2006-12-26,2006-07,0,WAT,Watford,2,1,1,0,19750
ARS,2006-12-30,2006-07,0,SHU,Sheffield United,0,1,-1,0,32086
ARS,2007-01-02,2006-07,1,CHA,Charlton Athletic,4,0,4,0,60057
ARS,2007-01-13,2006-07,0,BLA,Blackburn Rovers,2,0,2,1,21852
ARS,2007-01-21,2006-07,1,MUN,Manchester United,2,1,1,0,60128
ARS,2007-02-03,2006-07,0,MID,Middlesbrough,1,1,0,1,31122
ARS,2007-02-11,2006-07,1,WIG,Wigan Athletic,2,1,1,0,60049
ARS,2007-03-03,2006-07,1,REA,Reading,2,1,1,0,60132
ARS,2007-03-14,2006-07,0,AVL,Aston Villa,1,0,1,0,39968
ARS,2007-03-18,2006-07,0,EVE,Everton,0,1,-1,0,37162
ARS,2007-03-31,2006-07,0,LIV,Liverpool,1,4,-3,0,44845
ARS,2007-04-07,2006-07,1,WHU,West Ham United,0,1,-1,0,60098
ARS,2007-04-09,2006-07,0,NEW,Newcastle United,0,0,0,0,52299
ARS,2007-04-14,2006-07,1,BOL,Bolton Wanderers,2,1,1,0,60101
ARS,2007-04-17,2006-07,1,MCI,Manchester City,3,1,2,0,59913
ARS,2007-04-21,2006-07,0,TOT,Tottenham Hotspur,2,2,0,0,36054
ARS,2007-04-29,2006-07,1,FUL,Fulham,3,1,2,0,60043
ARS,2007-05-06,2006-07,1,CHE,Chelsea,1,1,0,0,60102
ARS,2007-05-13,2006-07,0,POR,Portsmouth,0,0,0,0,20188
ARS,2007-08-12,2007-08,1,FUL,Fulham,2,1,1,0,
ARS,2007-08-19,2007-08,0,BLA,Blackburn Rovers,1,1,0,0,
ARS,2007-08-25,2007-08,1,MCI,Manchester City,1,0,1,0,60114
ARS,2007-09-02,2007-08,1,POR,Portsmouth,3,1,2,1,
ARS,2007-09-15,2007-08,0,TOT,Tottenham Hotspur,3,1,2,0,
ARS,2007-09-22,2007-08,1,DER,Derby County,5,0,5,0,
ARS,2007-09-29,2007-08,0,WHU,West Ham United,1,0,1,0,
ARS,2007-10-07,2007-08,1,SUN,Sunderland,3,2,1,0,
ARS,2007-10-20,2007-08,1,BOL,Bolton Wanderers,2,0,2,0,
ARS,2007-10-28,2007-08,0,LIV,Liverpool,1,1,0,0,
ARS,2007-11-03,2007-08,1,MUN,Manchester United,2,2,0,0,
ARS,2007-11-12,2007-08,0,REA,Reading,3,1,2,0,
ARS,2007-11-24,2007-08,1,WIG,Wigan Athletic,2,0,2,0,
ARS,2007-12-01,2007-08,0,AVL,Aston Villa,2,1,1,0,
ARS,2007-12-05,2007-08,0,NEW,Newcastle United,1,1,0,0,
ARS,2007-12-09,2007-08,0,MID,Middlesbrough,1,2,-1,0,
ARS,2007-12-16,2007-08,1,CHE,Chelsea,1,0,1,0,
ARS,2007-12-22,2007-08,1,TOT,Tottenham Hotspur,2,1,1,0,
ARS,2007-12-26,2007-08,0,POR,Portsmouth,0,0,0,0,
ARS,2007-12-29,2007-08,0,EVE,Everton,4,1,3,1,
ARS,2008-01-01,2007-08,1,WHU,West Ham United,2,0,2,0,
ARS,2008-01-12,2007-08,1,BIR,Birmingham City,1,1,0,0,
ARS,2008-01-19,2007-08,0,FUL,Fulham,3,0,3,0,
ARS,2008-01-29,2007-08,1,NEW,Newcastle United,3,0,3,0,
ARS,2008-02-02,2007-08,0,MCI,Manchester City,3,1,2,0,
ARS,2008-02-11,2007-08,1,BLA,Blackburn Rovers,2,0,2,0,
ARS,2008-02-23,2007-08,0,BIR,Birmingham City,2,2,0,0,
ARS,2008-03-01,2007-08,1,AVL,Aston Villa,1,1,0,0,
ARS,2008-03-09,2007-08,0,WIG,Wigan Athletic,0,0,0,0,
ARS,2008-03-15,2007-08,1,MID,Middlesbrough,1,1,0,0,
ARS,2008-03-23,2007-08,0,CHE,Chelsea,1,2,-1,0,
ARS,2008-03-29,2007-08,0,BOL,Bolton Wanderers,3,2,1,1,
ARS,2008-04-05,2007-08,1,LIV,Liverpool,1,1,0,0,
ARS,2008-04-13,2007-08,0,MUN,Manchester United,1,2,-1,0,
ARS,2008-04-19,2007-08,1,REA,Reading,2,0,2,0,
ARS,2008-04-28,2007-08,0,DER,Derby County,6,2,4,0,
ARS,2008-05-04,2007-08,1,EVE,Everton,1,0,1,0,
ARS,2008-05-11,2007-08,0,SUN,Sunderland,1,0,1,0,
ARS,2008-08-16,2008-09,1,WBA,West Bromwich Albion,1,0,1,0,
ARS,2008-08-23,2008-09,0,FUL,Fulham,0,1,-1,0,
ARS,2008-08-30,2008-09,1,NEW,Newcastle United,3,0,3,0,
ARS,2008-09-13,2008-09,0,BLA,Blackburn Rovers,4,0,4,0,
ARS,2008-09-20,2008-09,0,BOL,Bolton Wanderers,3,1,2,0,
ARS,2008-09-27,2008-09,1,HUL,Hull City,1,2,-1,0,
ARS,2008-10-04,2008-09,0,SUN,Sunderland,1,1,0,0,
ARS,2008-10-18,2008-09,1,EVE,Everton,3,1,2,0,
ARS,2008-10-26,2008-09,0,WHU,West Ham United,2,0,2,0,
ARS,2008-10-29,2008-09,1,TOT,Tottenham Hotspur,4,4,0,0,
ARS,2008-11-01,2008-09,0,STO,Stoke City,1,2,-1,1,26731
ARS,2008-11-08,2008-09,1,MUN,Manchester United,2,1,1,0,
ARS,2008-11-15,2008-09,1,AVL,Aston Villa,0,2,-2,0,
ARS,2008-11-22,2008-09,0,MCI,Manchester City,0,3,-3,0,
ARS,2008-11-30,2008-09,0,CHE,Chelsea,2,1,1,0,41775
ARS,2008-12-06,2008-09,1,WIG,Wigan Athletic,1,0,1,0,59317
ARS,2008-12-13,2008-09,0,MID,Middlesbrough,1,1,0,0,27320
ARS,2008-12-21,2008-09,1,LIV,Liverpool,1,1,0,1,60094
ARS,2008-12-26,2008-09,0,AVL,Aston Villa,2,2,0,0,42585
ARS,2008-12-28,2008-09,1,POR,Portsmouth,1,0,1,0,60092
ARS,2009-01-10,2008-09,1,BOL,Bolton Wanderers,1,0,1,0,60068
ARS,2009-01-17,2008-09,0,HUL,Hull City,3,1,2,0,24924
ARS,2009-01-28,2008-09,0,EVE,Everton,1,1,0,0,37097
ARS,2009-01-31,2008-09,1,WHU,West Ham United,0,0,0,0,60109
ARS,2009-02-08,2008-09,0,TOT,Tottenham Hotspur,0,0,0,1,36021
ARS,2009-02-21,2008-09,1,SUN,Sunderland,0,0,0,0,60104
ARS,2009-02-28,2008-09,1,FUL,Fulham,0,0,0,0,60102
ARS,2009-03-03,2008-09,0,WBA,West Bromwich Albion,3,1,2,0,
ARS,2009-03-14,2008-09,1,BLA,Blackburn Rovers,4,0,4,0,60091
ARS,2009-03-21,2008-09,0,NEW,Newcastle United,3,1,2,0,49972
ARS,2009-04-04,2008-09,1,MCI,Manchester City,2,0,2,0,60097
ARS,2009-04-11,2008-09,0,WIG,Wigan Athletic,4,1,3,0,22954
ARS,2009-04-21,2008-09,0,LIV,Liverpool,4,4,0,0,44424
ARS,2009-04-26,2008-09,1,MID,Middlesbrough,2,0,2,0,60089
ARS,2009-05-02,2008-09,0,POR,Portsmouth,3,0,3,0,20418
ARS,2009-05-10,2008-09,1,CHE,Chelsea,1,4,-3,0,60075
ARS,2009-05-16,2008-09,0,MUN,Manchester United,0,0,0,0,75468
ARS,2009-05-24,2008-09,1,STO,Stoke City,4,1,3,0,60082
ARS,2009-08-15,2009-10,0,EVE,Everton,6,1,5,0,39309
ARS,2009-08-22,2009-10,1,POR,Portsmouth,4,1,3,0,60049
ARS,2009-08-29,2009-10,0,MUN,Manchester United,1,2,-1,0,75095
ARS,2009-09-12,2009-10,0,MCI,Manchester City,2,4,-2,0,47339
ARS,2009-09-19,2009-10,1,WIG,Wigan Athletic,4,0,4,0,59103
ARS,2009-09-26,2009-10,0,FUL,Fulham,1,0,1,0,25700
ARS,2009-10-04,2009-10,1,BLA,Blackburn Rovers,6,2,4,0,59431
ARS,2009-10-17,2009-10,1,BIR,Birmingham City,3,1,2,0,
ARS,2009-10-25,2009-10,0,WHU,West Ham United,2,2,0,0,34442
ARS,2009-10-31,2009-10,1,TOT,Tottenham Hotspur,3,0,3,0,60103
ARS,2009-11-07,2009-10,0,WOL,Wolverhampton Wanderers,4,1,3,0,28937
ARS,2009-11-21,2009-10,0,SUN,Sunderland,0,1,-1,0,44918
ARS,2009-11-29,2009-10,1,CHE,Chelsea,0,3,-3,0,60067
ARS,2009-12-05,2009-10,1,STO,Stoke City,2,0,2,0,60048
ARS,2009-12-13,2009-10,0,LIV,Liverpool,2,1,1,0,43853
ARS,2009-12-16,2009-10,0,BUR,Burnley,1,1,0,0,21309
ARS,2009-12-19,2009-10,1,HUL,Hull City,3,0,3,0,60006
ARS,2009-12-27,2009-10,1,AVL,Aston Villa,3,0,3,0,60056
ARS,2009-12-30,2009-10,0,POR,Portsmouth,4,1,3,0,20404
ARS,2010-01-09,2009-10,1,EVE,Everton,2,2,0,0,60053
ARS,2010-01-17,2009-10,0,BOL,Bolton Wanderers,2,0,2,0,23893
ARS,2010-01-20,2009-10,1,BOL,Bolton Wanderers,4,2,2,0,59084
ARS,2010-01-27,2009-10,0,AVL,Aston Villa,0,0,0,0,39601
ARS,2010-01-31,2009-10,1,MUN,Manchester United,1,3,-2,0,60091
ARS,2010-02-07,2009-10,0,CHE,Chelsea,0,2,-2,0,41794
ARS,2010-02-10,2009-10,1,LIV,Liverpool,1,0,1,0,60045
ARS,2010-02-20,2009-10,1,SUN,Sunderland,2,0,2,0,60083
ARS,2010-02-27,2009-10,0,STO,Stoke City,3,1,2,0,27011
ARS,2010-03-06,2009-10,1,BUR,Burnley,3,1,2,0,60043
ARS,2010-03-13,2009-10,0,HUL,Hull City,2,1,1,0,25023
ARS,2010-03-20,2009-10,1,WHU,West Ham United,2,0,2,1,60077
ARS,2010-03-27,2009-10,0,BIR,Birmingham City,1,1,0,0,27039
ARS,2010-04-03,2009-10,1,WOL,Wolverhampton Wanderers,1,0,1,0,60067
ARS,2010-04-14,2009-10,0,TOT,Tottenham Hotspur,1,2,-1,0,36041
ARS,2010-04-18,2009-10,0,WIG,Wigan Athletic,2,3,-1,0,22113
ARS,2010-04-24,2009-10,1,MCI,Manchester City,0,0,0,0,60086
ARS,2010-05-03,2009-10,0,BLA,Blackburn Rovers,1,2,-1,0,26138
ARS,2010-05-09,2009-10,1,FUL,Fulham,4,0,4,0,60039
ARS,2010-08-15,2010-11,0,LIV,Liverpool,1,1,0,1,44722
ARS,2010-08-21,2010-11,1,BPL,Blackpool,6,0,6,0,60032
ARS,2010-08-28,2010-11,0,BLA,Blackburn Rovers,2,1,1,0,25059
ARS,2010-09-11,2010-11,1,BOL,Bolton Wanderers,4,1,3,0,59876
ARS,2010-09-18,2010-11,0,SUN,Sunderland,1,1,0,1,38950
ARS,2010-09-25,2010-11,1,WBA,West Bromwich Albion,2,3,-1,0,60025
ARS,2010-10-03,2010-11,0,CHE,Chelsea,0,2,-2,0,41828
ARS,2010-10-16,2010-11,1,BIR,Birmingham City,2,1,1,1,60070
ARS,2010-10-24,2010-11,0,MCI,Manchester City,3,0,3,0,47393
ARS,2010-10-30,2010-11,1,WHU,West Ham United,1,0,1,0,60086
ARS,2010-11-07,2010-11,1,NEW,Newcastle United,0,1,-1,1,60059
ARS,2010-11-10,2010-11,0,WOL,Wolverhampton Wanderers,2,0,2,0,27329
ARS,2010-11-14,2010-11,0,EVE,Everton,2,1,1,0,36279
ARS,2010-11-20,2010-11,1,TOT,Tottenham Hotspur,2,3,-1,0,60102
ARS,2010-11-27,2010-11,0,AVL,Aston Villa,4,2,2,0,38544
ARS,2010-12-04,2010-11,1,FUL,Fulham,2,1,1,0,60049
ARS,2010-12-13,2010-11,0,MUN,Manchester United,0,1,-1,0,75227
ARS,2010-12-27,2010-11,1,CHE,Chelsea,3,1,2,0,60112
ARS,2010-12-29,2010-11,0,WIG,Wigan Athletic,2,2,0,0,17014
ARS,2011-01-01,2010-11,0,BIR,Birmingham City,3,0,3,0,24341
ARS,2011-01-05,2010-11,1,MCI,Manchester City,0,0,0,1,60085
ARS,2011-01-15,2010-11,0,WHU,West Ham United,3,0,3,0,32682
ARS,2011-01-22,2010-11,1,WIG,Wigan Athletic,3,0,3,0,59552
ARS,2011-02-01,2010-11,1,EVE,Everton,2,1,1,0,60014
ARS,2011-02-05,2010-11,0,NEW,Newcastle United,4,4,0,1,51561
ARS,2011-02-12,2010-11,1,WOL,Wolverhampton Wanderers,2,0,2,0,60050
ARS,2011-02-23,2010-11,1,STO,Stoke City,1,0,1,0,60041
ARS,2011-03-05,2010-11,1,SUN,Sunderland,0,0,0,0,60081
ARS,2011-03-19,2010-11,0,WBA,West Bromwich Albion,2,2,0,0,25729
ARS,2011-04-02,2010-11,1,BLA,Blackburn Rovers,0,0,0,0,60087
ARS,2011-04-10,2010-11,0,BPL,Blackpool,3,1,2,0,16030
ARS,2011-04-17,2010-11,1,LIV,Liverpool,1,1,0,0,60029
ARS,2011-04-20,2010-11,0,TOT,Tottenham Hotspur,3,3,0,0,36138
ARS,2011-04-24,2010-11,0,BOL,Bolton Wanderers,1,2,-1,0,26881
ARS,2011-05-01,2010-11,1,MUN,Manchester United,1,0,1,0,60107
ARS,2011-05-08,2010-11,0,STO,Stoke City,1,3,-2,0,27478
ARS,2011-05-15,2010-11,1,AVL,Aston Villa,1,2,-1,0,60023
ARS,2011-05-22,2010-11,0,FUL,Fulham,2,2,0,0,25674
ARS,2011-08-13,2011-12,0,NEW,Newcastle United,0,0,0,1,46894
ARS,2011-08-20,2011-12,1,LIV,Liverpool,0,2,-2,1,60090
ARS,2011-08-28,2011-12,0,MUN,Manchester United,2,8,-6,1,75448
ARS,2011-09-10,2011-12,1,SWA,Swansea City,1,0,1,0,60087
ARS,2011-09-17,2011-12,0,BLA,Blackburn Rovers,3,4,-1,0,22637
ARS,2011-09-24,2011-12,1,BOL,Bolton Wanderers,3,0,3,0,59727
ARS,2011-10-02,2011-12,0,TOT,Tottenham Hotspur,1,2,-1,0,36274
ARS,2011-10-16,2011-12,1,SUN,Sunderland,2,1,1,0,60078
ARS,2011-10-23,2011-12,1,STO,Stoke City,3,1,2,0,59671
ARS,2011-10-29,2011-12,0,CHE,Chelsea,5,3,2,0,41801
ARS,2011-11-05,2011-12,1,WBA,West Bromwich Albion,3,0,3,0,60091
ARS,2011-11-19,2011-12,0,NOR,Norwich City,2,1,1,0,26801
ARS,2011-11-26,2011-12,1,FUL,Fulham,1,1,0,0,60043
ARS,2011-12-03,2011-12,0,WIG,Wigan Athletic,4,0,4,0,19280
ARS,2011-12-10,2011-12,1,EVE,Everton,1,0,1,0,60062
ARS,2011-12-18,2011-12,0,MCI,Manchester City,0,1,-1,0,47303
ARS,2011-12-21,2011-12,0,AVL,Aston Villa,2,1,1,0,35818
ARS,2011-12-27,2011-12,1,WOL,Wolverhampton Wanderers,1,1,0,0,59686
ARS,2011-12-31,2011-12,1,QPR,Queens Park Rangers,1,0,1,0,60067
ARS,2012-01-02,2011-12,0,FUL,Fulham,1,2,-1,1,25700
ARS,2012-01-15,2011-12,0,SWA,Swansea City,2,3,-1,0,20409
ARS,2012-01-22,2011-12,1,MUN,Manchester United,1,2,-1,0,60093
ARS,2012-02-01,2011-12,0,BOL,Bolton Wanderers,0,0,0,0,24371
ARS,2012-02-04,2011-12,1,BLA,Blackburn Rovers,7,1,6,0,59643
ARS,2012-02-11,2011-12,0,SUN,Sunderland,2,1,1,0,40312
ARS,2012-02-26,2011-12,1,TOT,Tottenham Hotspur,5,2,3,0,60106
ARS,2012-03-03,2011-12,0,LIV,Liverpool,2,1,1,0,44922
ARS,2012-03-12,2011-12,1,NEW,Newcastle United,2,1,1,0,60095
ARS,2012-03-21,2011-12,0,EVE,Everton,1,0,1,0,30330
ARS,2012-03-24,2011-12,1,AVL,Aston Villa,3,0,3,0,60108
ARS,2012-03-31,2011-12,0,QPR,Queens Park Rangers,1,2,-1,0,18033
ARS,2012-04-08,2011-12,1,MCI,Manchester City,1,0,1,0,60096
ARS,2012-04-11,2011-12,0,WOL,Wolverhampton Wanderers,3,0,3,0,25815
ARS,2012-04-16,2011-12,1,WIG,Wigan Athletic,1,2,-1,0,60060
ARS,2012-04-21,2011-12,1,CHE,Chelsea,0,0,0,0,60111
ARS,2012-04-28,2011-12,0,STO,Stoke City,1,1,0,0,27502
ARS,2012-05-05,2011-12,1,NOR,Norwich City,3,3,0,0,60092
ARS,2012-05-13,2011-12,0,WBA,West Bromwich Albion,3,2,1,0,26358
ARS,2012-08-18,2012-13,1,SUN,Sunderland,0,0,0,0,60078
ARS,2012-08-26,2012-13,0,STO,Stoke City,0,0,0,0,27072
ARS,2012-09-02,2012-13,0,LIV,Liverpool,2,0,2,0,44932
ARS,2012-09-15,2012-13,1,SOU,Southampton,6,1,5,0,60097
ARS,2012-09-23,2012-13,0,MCI,Manchester City,1,1,0,0,47318
ARS,2012-09-29,2012-13,1,CHE,Chelsea,1,2,-1,0,60101
ARS,2012-10-06,2012-13,0,WHU,West Ham United,3,1,2,0,34974
ARS,2012-10-20,2012-13,0,NOR,Norwich City,0,1,-1,0,26825
ARS,2012-10-27,2012-13,1,QPR,Queens Park Rangers,1,0,1,0,60103
ARS,2012-11-03,2012-13,0,MUN,Manchester United,1,2,-1,1,75492
ARS,2012-11-10,2012-13,1,FUL,Fulham,3,3,0,0,60093
ARS,2012-11-17,2012-13,1,TOT,Tottenham Hotspur,5,2,3,0,60111
ARS,2012-11-24,2012-13,0,AVL,Aston Villa,0,0,0,0,34607
ARS,2012-11-28,2012-13,0,EVE,Everton,1,1,0,0,37141
ARS,2012-12-01,2012-13,1,SWA,Swansea City,0,2,-2,0,60098
ARS,2012-12-08,2012-13,1,WBA,West Bromwich Albion,2,0,2,0,60083
ARS,2012-12-17,2012-13,0,REA,Reading,5,2,3,0,24125
ARS,2012-12-22,2012-13,0,WIG,Wigan Athletic,1,0,1,0,21754
ARS,2012-12-29,2012-13,1,NEW,Newcastle United,7,3,4,0,60087
ARS,2013-01-01,2012-13,0,SOU,Southampton,1,1,0,0,31743
ARS,2013-01-13,2012-13,1,MCI,Manchester City,0,2,-2,1,60107
ARS,2013-01-20,2012-13,0,CHE,Chelsea,1,2,-1,0,41784
ARS,2013-01-23,2012-13,1,WHU,West Ham United,5,1,4,0,60081
ARS,2013-01-30,2012-13,1,LIV,Liverpool,2,2,0,0,60089
ARS,2013-02-02,2012-13,1,STO,Stoke City,1,0,1,0,59872
ARS,2013-02-09,2012-13,0,SUN,Sunderland,1,0,1,1,46402
ARS,2013-02-23,2012-13,1,AVL,Aston Villa,2,1,1,0,60079
ARS,2013-03-03,2012-13,0,TOT,Tottenham Hotspur,1,2,-1,0,36170
ARS,2013-03-16,2012-13,0,SWA,Swansea City,2,0,2,0,20583
ARS,2013-03-30,2012-13,1,REA,Reading,4,1,3,0,60082
ARS,2013-04-06,2012-13,0,WBA,West Bromwich Albion,2,1,1,1,26144
ARS,2013-04-13,2012-13,1,NOR,Norwich City,3,1,2,0,60095
ARS,2013-04-16,2012-13,1,EVE,Everton,0,0,0,0,60071
ARS,2013-04-20,2012-13,0,FUL,Fulham,1,0,1,1,25700
ARS,2013-04-28,2012-13,1,MUN,Manchester United,1,1,0,0,60112
ARS,2013-05-04,2012-13,0,QPR,Queens Park Rangers,1,0,1,0,18178
ARS,2013-05-14,2012-13,1,WIG,Wigan Athletic,4,1,3,0,60068
ARS,2013-05-19,2012-13,0,NEW,Newcastle United,1,0,1,0,52354
ARS,2013-08-17,2013-14,1,AVL,Aston Villa,1,3,-2,1,60003
ARS,2013-08-24,2013-14,0,FUL,Fulham,3,1,2,0,25622
ARS,2013-09-01,2013-14,1,TOT,Tottenham Hotspur,1,0,1,0,60071
ARS,2013-09-14,2013-14,0,SUN,Sunderland,3,1,2,0,39055
ARS,2013-09-22,2013-14,1,STO,Stoke City,3,1,2,0,60002
ARS,2013-09-28,2013-14,0,SWA,Swansea City,2,1,1,0,20712
ARS,2013-10-06,2013-14,0,WBA,West Bromwich Albion,1,1,0,0,24839
ARS,2013-10-19,2013-14,1,NOR,Norwich City,4,1,3,0,60009
ARS,2013-10-26,2013-14,0,CRY,Crystal Palace,2,0,2,1,20050
ARS,2013-11-02,2013-14,1,LIV,Liverpool,2,0,2,0,60042
ARS,2013-11-10,2013-14,0,MUN,Manchester United,0,1,-1,0,75138
ARS,2013-11-23,2013-14,1,SOU,Southampton,2,0,2,0,60007
ARS,2013-11-30,2013-14,0,CAR,Cardiff City,3,0,3,0,27948
ARS,2013-12-04,2013-14,1,HUL,Hull City,2,0,2,0,60017
ARS,2013-12-08,2013-14,1,EVE,Everton,1,1,0,0,60001
ARS,2013-12-14,2013-14,0,MCI,Manchester City,3,6,-3,0,47229
ARS,2013-12-23,2013-14,1,CHE,Chelsea,0,0,0,0,60039
ARS,2013-12-26,2013-14,0,WHU,West Ham United,3,1,2,0,34977
ARS,2013-12-29,2013-14,0,NEW,Newcastle United,1,0,1,0,52161
ARS,2014-01-01,2013-14,1,CAR,Cardiff City,2,0,2,0,60004
ARS,2014-01-13,2013-14,0,AVL,Aston Villa,2,1,1,0,36097
ARS,2014-01-18,2013-14,1,FUL,Fulham,2,0,2,0,60000
ARS,2014-01-28,2013-14,0,SOU,Southampton,2,2,0,1,31284
ARS,2014-02-02,2013-14,1,CRY,Crystal Palace,2,0,2,0,60005
ARS,2014-02-08,2013-14,0,LIV,Liverpool,1,5,-4,0,44701
ARS,2014-02-12,2013-14,1,MUN,Manchester United,0,0,0,0,60021
ARS,2014-02-22,2013-14,1,SUN,Sunderland,4,1,3,0,60012
ARS,2014-03-01,2013-14,0,STO,Stoke City,0,1,-1,0,26711
ARS,2014-03-16,2013-14,0,TOT,Tottenham Hotspur,1,0,1,0,35711
ARS,2014-03-22,2013-14,0,CHE,Chelsea,0,6,-6,1,41614
ARS,2014-03-25,2013-14,1,SWA,Swansea City,2,2,0,0,59937
ARS,2014-03-29,2013-14,1,MCI,Manchester City,1,1,0,0,60060
ARS,2014-04-06,2013-14,0,EVE,Everton,0,3,-3,0,39504
ARS,2014-04-15,2013-14,1,WHU,West Ham United,3,1,2,0,59977
ARS,2014-04-20,2013-14,0,HUL,Hull City,3,0,3,0,24762
ARS,2014-04-28,2013-14,1,NEW,Newcastle United,3,0,3,0,60023
ARS,2014-05-04,2013-14,1,WBA,West Bromwich Albion,1,0,1,0,60021
ARS,2014-05-11,2013-14,0,NOR,Norwich City,2,0,2,0,26848
ARS,2014-08-16,2014-15,1,CRY,Crystal Palace,2,1,1,0,59962
ARS,2014-08-23,2014-15,0,EVE,Everton,2,2,0,0,39490
ARS,2014-08-31,2014-15,0,LEI,Leicester City,1,1,0,0,31535
ARS,2014-09-13,2014-15,1,MCI,Manchester City,2,2,0,0,60003
ARS,2014-09-20,2014-15,0,AVL,Aston Villa,3,0,3,0,40013
ARS,2014-09-27,2014-15,1,TOT,Tottenham Hotspur,1,1,0,0,59900
ARS,2014-10-05,2014-15,0,CHE,Chelsea,0,2,-2,0,41607
ARS,2014-10-18,2014-15,1,HUL,Hull City,2,2,0,0,60004
ARS,2014-10-25,2014-15,0,SUN,Sunderland,2,0,2,0,44449
ARS,2014-11-01,2014-15,1,BUR,Burnley,3,0,3,0,60012
ARS,2014-11-09,2014-15,0,SWA,Swansea City,1,2,-1,0,20812
ARS,2014-11-22,2014-15,1,MUN,Manchester United,1,2,-1,0,60074
ARS,2014-11-29,2014-15,0,WBA,West Bromwich Albion,1,0,1,0,24228
ARS,2014-12-03,2014-15,1,SOU,Southampton,1,0,1,0,60025
ARS,2014-12-06,2014-15,0,STO,Stoke City,2,3,-1,1,27367
ARS,2014-12-13,2014-15,1,NEW,Newcastle United,4,1,3,0,59949
ARS,2014-12-21,2014-15,0,LIV,Liverpool,2,2,0,0,44703
ARS,2014-12-26,2014-15,1,QPR,Queens Park Rangers,2,1,1,1,59947
ARS,2014-12-28,2014-15,0,WHU,West Ham United,2,1,1,0,34977
ARS,2015-01-01,2014-15,0,SOU,Southampton,0,2,-2,0,31492
ARS,2015-01-11,2014-15,1,STO,Stoke City,3,0,3,0,59956
ARS,2015-01-18,2014-15,0,MCI,Manchester City,2,0,2,0,45596
ARS,2015-02-01,2014-15,1,AVL,Aston Villa,5,0,5,0,59958
ARS,2015-02-07,2014-15,0,TOT,Tottenham Hotspur,1,2,-1,0,35659
ARS,2015-02-10,2014-15,1,LEI,Leicester City,2,1,1,0,60032
ARS,2015-02-21,2014-15,0,CRY,Crystal Palace,2,1,1,0,24721
ARS,2015-03-01,2014-15,1,EVE,Everton,2,0,2,0,59925
ARS,2015-03-04,2014-15,0,QPR,Queens Park Rangers,2,1,1,0,17977
ARS,2015-03-14,2014-15,1,WHU,West Ham United,3,0,3,0,60002
ARS,2015-03-21,2014-15,0,NEW,Newcastle United,2,1,1,0,50544
ARS,2015-04-04,2014-15,1,LIV,Liverpool,4,1,3,0,60081
ARS,2015-04-11,2014-15,0,BUR,Burnley,1,0,1,0,20615
ARS,2015-04-26,2014-15,1,CHE,Chelsea,0,0,0,0,60066
ARS,2015-05-04,2014-15,0,HUL,Hull City,3,1,2,0,23628
ARS,2015-05-11,2014-15,1,SWA,Swansea City,0,1,-1,0,59989
ARS,2015-05-17,2014-15,0,MUN,Manchester United,1,1,0,0,75323
ARS,2015-05-20,2014-15,1,SUN,Sunderland,0,0,0,0,59987
ARS,2015-05-24,2014-15,1,WBA,West Bromwich Albion,4,1,3,0,59971
ARS,2015-08-09,2015-16,1,WHU,West Ham United,0,2,-2,0,59996
ARS,2015-08-16,2015-16,0,CRY,Crystal Palace,2,1,1,0,24732
ARS,2015-08-24,2015-16,1,LIV,Liverpool,0,0,0,0,60080
ARS,2015-08-29,2015-16,0,NEW,Newcastle United,1,0,1,0,50388
ARS,2015-09-12,2015-16,1,STO,Stoke City,2,0,2,0,59963
ARS,2015-09-19,2015-16,0,CHE,Chelsea,0,2,-2,2,41584
ARS,2015-09-26,2015-16,0,LEI,Leicester City,5,2,3,0,32047
ARS,2015-10-04,2015-16,1,MUN,Manchester United,3,0,3,0,60084
ARS,2015-10-17,2015-16,0,WAT,Watford,3,0,3,0,20721
ARS,2015-10-24,2015-16,1,EVE,Everton,2,1,1,0,59985
ARS,2015-10-31,2015-16,0,SWA,Swansea City,3,0,3,0,20937
ARS,2015-11-08,2015-16,1,TOT,Tottenham Hotspur,1,1,0,0,60060
ARS,2015-11-21,2015-16,0,WBA,West Bromwich Albion,1,2,-1,0,24343
ARS,2015-11-29,2015-16,0,NOR,Norwich City,1,1,0,0,27091
ARS,2015-12-05,2015-16,1,SUN,Sunderland,3,1,2,0,59937
ARS,2015-12-13,2015-16,0,AVL,Aston Villa,2,0,2,0,33285
ARS,2015-12-21,2015-16,1,MCI,Manchester City,2,1,1,0,60053
ARS,2015-12-26,2015-16,0,SOU,Southampton,0,4,-4,0,31669
ARS,2015-12-28,2015-16,1,BOU,Bournemouth,2,0,2,0,59983
ARS,2016-01-02,2015-16,1,NEW,Newcastle United,1,0,1,0,59257
ARS,2016-01-13,2015-16,0,LIV,Liverpool,3,3,0,0,44109
ARS,2016-01-17,2015-16,0,STO,Stoke City,0,0,0,0,27683
ARS,2016-01-24,2015-16,1,CHE,Chelsea,0,1,-1,1,60072
ARS,2016-02-02,2015-16,1,SOU,Southampton,0,0,0,0,60044
ARS,2016-02-07,2015-16,0,BOU,Bournemouth,2,0,2,0,11357
ARS,2016-02-14,2015-16,1,LEI,Leicester City,2,1,1,0,60009
ARS,2016-02-28,2015-16,0,MUN,Manchester United,2,3,-1,0,75329
ARS,2016-03-02,2015-16,1,SWA,Swansea City,1,2,-1,0,59905
ARS,2016-03-05,2015-16,0,TOT,Tottenham Hotspur,2,2,0,1,35762
ARS,2016-03-19,2015-16,0,EVE,Everton,2,0,2,0,39270
ARS,2016-04-02,2015-16,1,WAT,Watford,4,0,4,0,59981
ARS,2016-04-09,2015-16,0,WHU,West Ham United,3,3,0,0,34977
ARS,2016-04-17,2015-16,1,CRY,Crystal Palace,1,1,0,0,59961
ARS,2016-04-21,2015-16,1,WBA,West Bromwich Albion,2,0,2,0,59568
ARS,2016-04-24,2015-16,0,SUN,Sunderland,0,0,0,0,45420
ARS,2016-04-30,2015-16,1,NOR,Norwich City,1,0,1,0,59989
ARS,2016-05-08,2015-16,0,MCI,Manchester City,2,2,0,0,54425
ARS,2016-05-15,2015-16,1,AVL,Aston Villa,4,0,4,0,60007
ARS,2016-08-14,2016-17,1,LIV,Liverpool,3,4,-1,0,60033
ARS,2016-08-20,2016-17,0,LEI,Leicester City,0,0,0,0,32008
ARS,2016-08-27,2016-17,0,WAT,Watford,3,1,2,0,20545
ARS,2016-09-10,2016-17,1,SOU,Southampton,2,1,1,0,59962
ARS,2016-09-17,2016-17,0,HUL,Hull City,4,1,3,0,22536
ARS,2016-09-24,2016-17,1,CHE,Chelsea,3,0,3,0,60028
ARS,2016-10-02,2016-17,0,BUR,Burnley,1,0,1,0,20982
ARS,2016-10-15,2016-17,1,SWA,Swansea City,3,2,1,1,60007
ARS,2016-10-22,2016-17,1,MID,Middlesbrough,0,0,0,0,59982
ARS,2016-10-29,2016-17,0,SUN,Sunderland,4,1,3,0,44322
ARS,2016-11-06,2016-17,1,TOT,Tottenham Hotspur,1,1,0,0,60039
ARS,2016-11-19,2016-17,0,MUN,Manchester United,1,1,0,0,75264
ARS,2016-11-27,2016-17,1,BOU,Bournemouth,3,1,2,0,59978
ARS,2016-12-03,2016-17,0,WHU,West Ham United,5,1,4,0,56980
ARS,2016-12-10,2016-17,1,STO,Stoke City,3,1,2,0,59964
ARS,2016-12-13,2016-17,0,EVE,Everton,1,2,-1,0,39510
ARS,2016-12-18,2016-17,0,MCI,Manchester City,1,2,-1,0,54409
ARS,2016-12-26,2016-17,1,WBA,West Bromwich Albion,1,0,1,0,59925
ARS,2017-01-01,2016-17,1,CRY,Crystal Palace,2,0,2,0,59975
ARS,2017-01-03,2016-17,0,BOU,Bournemouth,3,3,0,0,11202
ARS,2017-01-14,2016-17,0,SWA,Swansea City,4,0,4,0,20875
ARS,2017-01-22,2016-17,1,BUR,Burnley,2,1,1,1,59955
ARS,2017-01-31,2016-17,1,WAT,Watford,1,2,-1,0,60035
ARS,2017-02-04,2016-17,0,CHE,Chelsea,1,3,-2,0,41490
ARS,2017-02-11,2016-17,1,HUL,Hull City,2,0,2,0,59962
ARS,2017-03-04,2016-17,0,LIV,Liverpool,1,3,-2,0,53146
ARS,2017-03-18,2016-17,0,WBA,West Bromwich Albion,1,3,-2,0,24065
ARS,2017-04-02,2016-17,1,MCI,Manchester City,2,2,0,0,60001
ARS,2017-04-05,2016-17,1,WHU,West Ham United,3,0,3,0,59961
ARS,2017-04-10,2016-17,0,CRY,Crystal Palace,0,3,-3,0,25648
ARS,2017-04-17,2016-17,0,MID,Middlesbrough,2,1,1,0,31298
ARS,2017-04-26,2016-17,1,LEI,Leicester City,1,0,1,0,59829
ARS,2017-04-30,2016-17,0,TOT,Tottenham Hotspur,0,2,-2,0,31811
ARS,2017-05-07,2016-17,1,MUN,Manchester United,2,0,2,0,60055
ARS,2017-05-10,2016-17,0,SOU,Southampton,2,0,2,0,31474
ARS,2017-05-13,2016-17,0,STO,Stoke City,4,1,3,0,27535
ARS,2017-05-16,2016-17,1,SUN,Sunderland,2,0,2,0,59510
ARS,2017-05-21,2016-17,1,EVE,Everton,3,1,2,1,59976
ARS,2017-08-11,2017-18,1,LEI,Leicester City,4,3,1,0,59387
ARS,2017-08-19,2017-18,0,STO,Stoke City,0,1,-1,0,29459
ARS,2017-08-27,2017-18,0,LIV,Liverpool,0,4,-4,0,53206
ARS,2017-09-09,2017-18,1,BOU,Bournemouth,3,0,3,0,59262
ARS,2017-09-17,2017-18,0,CHE,Chelsea,0,0,0,0,41478
ARS,2017-09-25,2017-18,1,WBA,West Bromwich Albion,2,0,2,0,59134
ARS,2017-10-01,2017-18,1,BHA,Brighton and Hove Albion,2,0,2,0,59378
ARS,2017-10-14,2017-18,0,WAT,Watford,1,2,-1,0,20384
ARS,2017-10-22,2017-18,0,EVE,Everton,5,2,3,0,39189
ARS,2017-10-28,2017-18,1,SWA,Swansea City,2,1,1,0,59493
ARS,2017-11-05,2017-18,0,MCI,Manchester City,1,3,-2,0,54286
ARS,2017-11-18,2017-18,1,TOT,Tottenham Hotspur,2,0,2,0,59530
ARS,2017-11-26,2017-18,0,BUR,Burnley,1,0,1,0,21722
ARS,2017-11-29,2017-18,1,HUD,Huddersfield Town,5,0,5,0,59285
ARS,2017-12-02,2017-18,1,MUN,Manchester United,1,3,-2,0,59547
ARS,2017-12-10,2017-18,0,SOU,Southampton,1,1,0,0,31643
ARS,2017-12-13,2017-18,0,WHU,West Ham United,0,0,0,0,56921
ARS,2017-12-16,2017-18,1,NEW,Newcastle United,1,0,1,0,59379
ARS,2017-12-22,2017-18,1,LIV,Liverpool,3,3,0,0,59409
ARS,2017-12-28,2017-18,0,CRY,Crystal Palace,3,2,1,0,25762
ARS,2017-12-31,2017-18,0,WBA,West Bromwich Albion,1,1,0,0,26223
ARS,2018-01-03,2017-18,1,CHE,Chelsea,2,2,0,0,59379
ARS,2018-01-14,2017-18,0,BOU,Bournemouth,1,2,-1,0,10836
ARS,2018-01-20,2017-18,1,CRY,Crystal Palace,4,1,3,0,59386
ARS,2018-01-30,2017-18,0,SWA,Swansea City,1,3,-2,0,20819
ARS,2018-02-03,2017-18,1,EVE,Everton,5,1,4,0,59306
ARS,2018-02-10,2017-18,0,TOT,Tottenham Hotspur,0,1,-1,0,83222
ARS,2018-03-01,2017-18,1,MCI,Manchester City,0,3,-3,0,58420
ARS,2018-03-04,2017-18,0,BHA,Brighton and Hove Albion,1,2,-1,0,30620
ARS,2018-03-11,2017-18,1,WAT,Watford,3,0,3,0,59131
ARS,2018-04-01,2017-18,1,STO,Stoke City,3,0,3,0,59371
ARS,2018-04-08,2017-18,1,SOU,Southampton,3,2,1,1,59374
ARS,2018-04-15,2017-18,0,NEW,Newcastle United,1,2,-1,0,52210
ARS,2018-04-22,2017-18,1,WHU,West Ham United,4,1,3,0,59422
ARS,2018-04-29,2017-18,0,MUN,Manchester United,1,2,-1,0,75035
ARS,2018-05-06,2017-18,1,BUR,Burnley,5,0,5,0,59540
ARS,2018-05-09,2017-18,0,LEI,Leicester City,1,3,-2,1,32095
ARS,2018-05-13,2017-18,0,HUD,Huddersfield Town,1,0,1,0,24122
ARS,2018-08-12,2018-19,1,MCI,Manchester City,0,2,-2,0,59934
ARS,2018-08-18,2018-19,0,CHE,Chelsea,2,3,-1,0,40491
ARS,2018-08-25,2018-19,1,WHU,West Ham United,3,1,2,0,59830
ARS,2018-09-02,2018-19,0,CAR,Cardiff City,3,2,1,0,32316
ARS,2018-09-15,2018-19,0,NEW,Newcastle United,2,1,1,0,52165
ARS,2018-09-23,2018-19,1,EVE,Everton,2,0,2,0,59964
ARS,2018-09-29,2018-19,1,WAT,Watford,2,0,2,0,60019
ARS,2018-10-07,2018-19,0,FUL,Fulham,5,1,4,0,25401
ARS,2018-10-22,2018-19,1,LEI,Leicester City,3,1,2,0,59886
ARS,2018-10-28,2018-19,0,CRY,Crystal Palace,2,2,0,0,25718
ARS,2018-11-03,2018-19,1,LIV,Liverpool,1,1,0,0,59993
ARS,2018-11-11,2018-19,1,WOL,Wolverhampton Wanderers,1,1,0,0,60030
ARS,2018-11-25,2018-19,0,BOU,Bournemouth,2,1,1,0,10792
ARS,2018-12-02,2018-19,1,TOT,Tottenham Hotspur,4,2,2,0,59973
ARS,2018-12-05,2018-19,0,MUN,Manchester United,2,2,0,0,74507
ARS,2018-12-08,2018-19,1,HUD,Huddersfield Town,1,0,1,0,59893
ARS,2018-12-16,2018-19,0,SOU,Southampton,2,3,-1,0,29497
ARS,2018-12-22,2018-19,1,BUR,Burnley,3,1,2,0,59493
ARS,2018-12-26,2018-19,0,BHA,Brighton and Hove Albion,1,1,0,0,30608
ARS,2018-12-29,2018-19,0,LIV,Liverpool,1,5,-4,0,53326
ARS,2019-01-01,2018-19,1,FUL,Fulham,4,1,3,0,59887
ARS,2019-01-12,2018-19,0,WHU,West Ham United,0,1,-1,0,59946
ARS,2019-01-19,2018-19,1,CHE,Chelsea,2,0,2,0,59979
ARS,2019-01-29,2018-19,1,CAR,Cardiff City,2,1,1,0,59933
ARS,2019-02-03,2018-19,0,MCI,Manchester City,1,3,-2,0,54483
ARS,2019-02-09,2018-19,0,HUD,Huddersfield Town,2,1,1,0,24182
ARS,2019-02-24,2018-19,1,SOU,Southampton,2,0,2,0,59877
ARS,2019-02-27,2018-19,1,BOU,Bournemouth,5,1,4,0,59618
ARS,2019-03-02,2018-19,0,TOT,Tottenham Hotspur,1,1,0,1,81332
ARS,2019-03-10,2018-19,1,MUN,Manchester United,2,0,2,0,60000
ARS,2019-04-01,2018-19,1,NEW,Newcastle United,2,0,2,0,59869
ARS,2019-04-07,2018-19,0,EVE,Everton,0,1,-1,0,39400
ARS,2019-04-15,2018-19,0,WAT,Watford,1,0,1,0,20480
ARS,2019-04-21,2018-19,1,CRY,Crystal Palace,2,3,-1,0,59929
ARS,2019-04-24,2018-19,0,WOL,Wolverhampton Wanderers,1,3,-2,0,31436
ARS,2019-04-28,2018-19,0,LEI,Leicester City,0,3,-3,1,32037
ARS,2019-05-05,2018-19,1,BHA,Brighton and Hove Albion,1,1,0,0,59965
ARS,2019-05-12,2018-19,0,BUR,Burnley,3,1,2,0,21461
ARS,2019-08-11,2019-20,0,NEW,Newcastle United,1,0,1,0,47635
ARS,2019-08-17,2019-20,1,BUR,Burnley,2,1,1,0,60214
ARS,2019-08-24,2019-20,0,LIV,Liverpool,1,3,-2,0,53298
ARS,2019-09-01,2019-20,1,TOT,Tottenham Hotspur,2,2,0,0,60333
ARS,2019-09-15,2019-20,0,WAT,Watford,2,2,0,0,21360
ARS,2019-09-22,2019-20,1,AVL,Aston Villa,3,2,1,1,60331
ARS,2019-09-30,2019-20,0,MUN,Manchester United,1,1,0,0,73201
ARS,2019-10-06,2019-20,1,BOU,Bournemouth,1,0,1,0,60326
ARS,2019-10-21,2019-20,0,SHU,Sheffield United,0,1,-1,0,30775
ARS,2019-10-27,2019-20,1,CRY,Crystal Palace,2,2,0,0,60345
ARS,2019-11-02,2019-20,1,WOL,Wolverhampton Wanderers,1,1,0,0,60383
ARS,2019-11-09,2019-20,0,LEI,Leicester City,0,2,-2,0,32209
ARS,2019-11-23,2019-20,1,SOU,Southampton,2,2,0,0,60295
ARS,2019-12-01,2019-20,0,NOR,Norwich City,2,2,0,0,27067
ARS,2019-12-05,2019-20,1,BHA,Brighton and Hove Albion,1,2,-1,0,60164
ARS,2019-12-09,2019-20,0,WHU,West Ham United,3,1,2,0,59936
ARS,2019-12-15,2019-20,1,MCI,Manchester City,0,3,-3,0,60031
ARS,2019-12-21,2019-20,0,EVE,Everton,0,0,0,0,39336
ARS,2019-12-26,2019-20,0,BOU,Bournemouth,1,1,0,0,10234
ARS,2019-12-29,2019-20,1,CHE,Chelsea,1,2,-1,0,60309
ARS,2020-01-01,2019-20,1,MUN,Manchester United,2,0,2,0,60328
ARS,2020-01-11,2019-20,0,CRY,Crystal Palace,1,1,0,1,25468
ARS,2020-01-18,2019-20,1,SHU,Sheffield United,1,1,0,0,60310
ARS,2020-01-21,2019-20,0,CHE,Chelsea,2,2,0,1,40577
ARS,2020-02-02,2019-20,0,BUR,Burnley,0,0,0,0,21048
ARS,2020-02-16,2019-20,1,NEW,Newcastle United,4,0,4,0,60188
ARS,2020-02-23,2019-20,1,EVE,Everton,3,2,1,0,60296
ARS,2020-03-07,2019-20,1,WHU,West Ham United,1,0,1,0,60335
ARS,2020-06-17,2019-20,0,MCI,Manchester City,0,3,-3,1,
ARS,2020-06-20,2019-20,0,BHA,Brighton and Hove Albion,1,2,-1,0,
ARS,2020-06-25,2019-20,0,SOU,Southampton,2,0,2,0,
ARS,2020-07-01,2019-20,1,NOR,Norwich City,4,0,4,0,
ARS,2020-07-04,2019-20,0,WOL,Wolverhampton Wanderers,2,0,2,0,
ARS,2020-07-07,2019-20,1,LEI,Leicester City,1,1,0,1,
ARS,2020-07-12,2019-20,0,TOT,Tottenham Hotspur,1,2,-1,0,
ARS,2020-07-15,2019-20,1,LIV,Liverpool,2,1,1,0,
ARS,2020-07-21,2019-20,0,AVL,Aston Villa,0,1,-1,0,
ARS,2020-07-26,2019-20,1,WAT,Watford,3,2,1,0,
ARS,2020-09-12,2020-21,0,FUL,Fulham,3,0,3,0,
ARS,2020-09-19,2020-21,1,WHU,West Ham United,2,1,1,0,
ARS,2020-09-28,2020-21,0,LIV,Liverpool,1,3,-2,0,
ARS,2020-10-04,2020-21,1,SHU,Sheffield United,2,1,1,0,
ARS,2020-10-17,2020-21,0,MCI,Manchester City,0,1,-1,0,
ARS,2020-10-25,2020-21,1,LEI,Leicester City,0,1,-1,0,
ARS,2020-11-01,2020-21,0,MUN,Manchester United,1,0,1,0,
ARS,2020-11-08,2020-21,1,AVL,Aston Villa,0,3,-3,0,
ARS,2020-11-22,2020-21,0,LEE,Leeds United,0,0,0,1,
ARS,2020-11-29,2020-21,1,WOL,Wolverhampton Wanderers,1,2,-1,0,
ARS,2020-12-06,2020-21,0,TOT,Tottenham Hotspur,0,2,-2,0,
ARS,2020-12-13,2020-21,1,BUR,Burnley,0,1,-1,1,
ARS,2020-12-16,2020-21,1,SOU,Southampton,1,1,0,1,
ARS,2020-12-19,2020-21,0,EVE,Everton,1,2,-1,0,
ARS,2020-12-26,2020-21,1,CHE,Chelsea,3,1,2,0,
ARS,2020-12-29,2020-21,0,BHA,Brighton and Hove Albion,1,0,1,0,
ARS,2021-01-02,2020-21,0,WBA,West Bromwich Albion,4,0,4,0,
ARS,2021-01-14,2020-21,1,CRY,Crystal Palace,0,0,0,0,
ARS,2021-01-18,2020-21,1,NEW,Newcastle United,3,0,3,0,
ARS,2021-01-26,2020-21,0,SOU,Southampton,3,1,2,0,
ARS,2021-01-30,2020-21,1,MUN,Manchester United,0,0,0,0,
ARS,2021-02-02,2020-21,0,WOL,Wolverhampton Wanderers,1,2,-1,2,
ARS,2021-02-06,2020-21,0,AVL,Aston Villa,0,1,-1,0,
ARS,2021-02-14,2020-21,1,LEE,Leeds United,4,2,2,0,
ARS,2021-02-21,2020-21,1,MCI,Manchester City,0,1,-1,0,
ARS,2021-02-28,2020-21,0,LEI,Leicester City,3,1,2,0,
ARS,2021-03-06,2020-21,0,BUR,Burnley,1,1,0,0,
ARS,2021-03-14,2020-21,1,TOT,Tottenham Hotspur,2,1,1,0,
ARS,2021-03-21,2020-21,0,WHU,West Ham United,3,3,0,0,
ARS,2021-04-03,2020-21,1,LIV,Liverpool,0,3,-3,0,
ARS,2021-04-11,2020-21,0,SHU,Sheffield United,3,0,3,0,
ARS,2021-04-18,2020-21,1,FUL,Fulham,1,1,0,0,
ARS,2021-04-23,2020-21,1,EVE,Everton,0,1,-1,0,
ARS,2021-05-02,2020-21,0,NEW,Newcastle United,2,0,2,0,
ARS,2021-05-09,2020-21,1,WBA,West Bromwich Albion,3,1,2,0,
ARS,2021-05-12,2020-21,0,CHE,Chelsea,1,0,1,0,
ARS,2021-05-19,2020-21,0,CRY,Crystal Palace,3,1,2,0,
ARS,2021-05-23,2020-21,1,BHA,Brighton and Hove Albion,2,0,2,0,
ARS,2021-08-13,2021-22,0,BRE,Brentford,0,2,-2,0,16479
ARS,2021-08-22,2021-22,1,CHE,Chelsea,0,2,-2,0,58729
ARS,2021-08-28,2021-22,0,MCI,Manchester City,0,5,-5,1,52276
ARS,2021-09-11,2021-22,1,NOR,Norwich City,1,0,1,0,59337
ARS,2021-09-18,2021-22,0,BUR,Burnley,1,0,1,0,21944
ARS,2021-09-26,2021-22,1,TOT,Tottenham Hotspur,3,1,2,0,59919
ARS,2021-10-02,2021-22,0,BHA,Brighton and Hove Albion,0,0,0,0,31266
ARS,2021-10-18,2021-22,1,CRY,Crystal Palace,2,2,0,0,59475
ARS,2021-10-22,2021-22,1,AVL,Aston Villa,3,1,2,0,59496
ARS,2021-10-30,2021-22,0,LEI,Leicester City,2,0,2,0,32209
ARS,2021-11-07,2021-22,1,WAT,Watford,1,0,1,0,59833
ARS,2021-11-20,2021-22,0,LIV,Liverpool,0,4,-4,0,53092
ARS,2021-11-27,2021-22,1,NEW,Newcastle United,2,0,2,0,59886
ARS,2021-12-02,2021-22,0,MUN,Manchester United,2,3,-1,0,73123
ARS,2021-12-06,2021-22,0,EVE,Everton,1,2,-1,0,38906
ARS,2021-12-11,2021-22,1,SOU,Southampton,3,0,3,0,59653
ARS,2021-12-15,2021-22,1,WHU,West Ham United,2,0,2,0,59777
ARS,2021-12-18,2021-22,0,LEE,Leeds United,4,1,3,0,36166
ARS,2021-12-26,2021-22,0,NOR,Norwich City,5,0,5,0,26940
ARS,2022-01-01,2021-22,1,MCI,Manchester City,1,2,-1,1,59757
ARS,2022-01-23,2021-22,1,BUR,Burnley,0,0,0,0,59255
ARS,2022-02-10,2021-22,0,WOL,Wolverhampton Wanderers,1,0,1,1,31523
ARS,2022-02-19,2021-22,1,BRE,Brentford,2,1,1,0,60015
ARS,2022-02-24,2021-22,1,WOL,Wolverhampton Wanderers,2,1,1,0,59888
ARS,2022-03-06,2021-22,0,WAT,Watford,3,2,1,0,21142
ARS,2022-03-13,2021-22,1,LEI,Leicester City,2,0,2,0,60111
ARS,2022-03-16,2021-22,1,LIV,Liverpool,0,2,-2,0,59968
ARS,2022-03-19,2021-22,0,AVL,Aston Villa,1,0,1,0,41956
ARS,2022-04-04,2021-22,0,CRY,Crystal Palace,0,3,-3,0,25149
ARS,2022-04-09,2021-22,1,BHA,Brighton and Hove Albion,1,2,-1,0,60112
ARS,2022-04-16,2021-22,0,SOU,Southampton,0,1,-1,0,31465
ARS,2022-04-20,2021-22,0,CHE,Chelsea,4,2,2,0,32249
ARS,2022-04-23,2021-22,1,MUN,Manchester United,3,1,2,0,60223
ARS,2022-05-01,2021-22,0,WHU,West Ham United,2,1,1,0,59959
ARS,2022-05-08,2021-22,1,LEE,Leeds United,2,1,1,0,60108
ARS,2022-05-12,2021-22,0,TOT,Tottenham Hotspur,0,3,-3,1,62027
ARS,2022-05-16,2021-22,0,NEW,Newcastle United,0,2,-2,0,52274
ARS,2022-05-22,2021-22,1,EVE,Everton,5,1,4,0,60201
ARS,2022-08-05,2022-23,0,CRY,Crystal Palace,2,0,2,0,25286
ARS,2022-08-13,2022-23,1,LEI,Leicester City,4,2,2,0,60033
ARS,2022-08-20,2022-23,0,BOU,Bournemouth,3,0,3,0,10423
ARS,2022-08-27,2022-23,1,FUL,Fulham,2,1,1,0,60164
ARS,2022-08-31,2022-23,1,AVL,Aston Villa,2,1,1,0,60012
ARS,2022-09-04,2022-23,0,MUN,Manchester United,1,3,-2,0,73431
ARS,2022-09-18,2022-23,0,BRE,Brentford,3,0,3,0,17122
ARS,2022-10-01,2022-23,1,TOT,Tottenham Hotspur,3,1,2,0,60278
ARS,2022-10-09,2022-23,1,LIV,Liverpool,3,2,1,0,59968
ARS,2022-10-16,2022-23,0,LEE,Leeds United,1,0,1,0,36700
ARS,2022-10-23,2022-23,0,SOU,Southampton,1,1,0,0,31145
ARS,2022-10-30,2022-23,1,NFO,Nottingham Forest,5,0,5,0,60263
ARS,2022-11-06,2022-23,0,CHE,Chelsea,1,0,1,0,40142
ARS,2022-11-12,2022-23,0,WOL,Wolverhampton Wanderers,2,0,2,0,34624
ARS,2022-12-26,2022-23,1,WHU,West Ham United,3,1,2,0,60125
ARS,2022-12-31,2022-23,0,BHA,Brighton and Hove Albion,4,2,2,0,31647
ARS,2023-01-03,2022-23,1,NEW,Newcastle United,0,0,0,0,60319
ARS,2023-01-15,2022-23,0,TOT,Tottenham Hotspur,2,0,2,0,61870
ARS,2023-01-22,2022-23,1,MUN,Manchester United,3,2,1,0,60325
ARS,2023-02-04,2022-23,0,EVE,Everton,0,1,-1,0,39314
ARS,2023-02-11,2022-23,1,BRE,Brentford,1,1,0,0,60254
ARS,2023-02-15,2022-23,1,MCI,Manchester City,1,3,-2,0,60276
ARS,2023-02-18,2022-23,0,AVL,Aston Villa,4,2,2,0,42066
ARS,2023-02-25,2022-23,0,LEI,Leicester City,1,0,1,0,32227
ARS,2023-03-01,2022-23,1,EVE,Everton,4,0,4,0,60213
ARS,2023-03-04,2022-23,1,BOU,Bournemouth,3,2,1,0,60222
ARS,2023-03-12,2022-23,0,FUL,Fulham,3,0,3,0,24426
ARS,2023-03-19,2022-23,1,CRY,Crystal Palace,4,1,3,0,60247
ARS,2023-04-01,2022-23,1,LEE,Leeds United,4,1,3,0,60283
ARS,2023-04-09,2022-23,0,LIV,Liverpool,2,2,0,0,53267
ARS,2023-04-16,2022-23,0,WHU,West Ham United,2,2,0,0,62475
ARS,2023-04-21,2022-23,1,SOU,Southampton,3,3,0,0,60175
ARS,2023-04-26,2022-23,0,MCI,Manchester City,1,4,-3,0,53482
ARS,2023-05-02,2022-23,1,CHE,Chelsea,3,1,2,0,60144
ARS,2023-05-07,2022-23,0,NEW,Newcastle United,2,0,2,0,50267
ARS,2023-05-14,2022-23,1,BHA,Brighton and Hove Albion,0,3,-3,0,60139
ARS,2023-05-20,2022-23,0,NFO,Nottingham Forest,0,1,-1,0,29514
ARS,2023-05-28,2022-23,1,WOL,Wolverhampton Wanderers,5,0,5,0,60095
ARS,2023-08-12,2023-24,1,NFO,Nottingham Forest,2,1,1,0,59984
ARS,2023-08-21,2023-24,0,CRY,Crystal Palace,1,0,1,1,24189
ARS,2023-08-26,2023-24,1,FUL,Fulham,2,2,0,0,59961
ARS,2023-09-03,2023-24,1,MUN,Manchester United,3,1,2,0,60192
ARS,2023-09-17,2023-24,0,EVE,Everton,1,0,1,0,39217
ARS,2023-09-24,2023-24,1,TOT,Tottenham Hotspur,2,2,0,0,60156
ARS,2023-09-30,2023-24,0,BOU,Bournemouth,4,0,4,0,11193
ARS,2023-10-08,2023-24,1,MCI,Manchester City,1,0,1,0,60233
ARS,2023-10-21,2023-24,0,CHE,Chelsea,2,2,0,0,39723
ARS,2023-10-28,2023-24,1,SHU,Sheffield United,5,0,5,0,60153
ARS,2023-11-04,2023-24,0,NEW,Newcastle United,0,1,-1,0,52194
ARS,2023-11-11,2023-24,1,BUR,Burnley,3,1,2,1,60232
ARS,2023-11-25,2023-24,0,BRE,Brentford,1,0,1,0,17201
ARS,2023-12-02,2023-24,1,WOL,Wolverhampton Wanderers,2,1,1,0,60262
ARS,2023-12-05,2023-24,0,LUT,Luton Town,4,3,1,0,11112
ARS,2023-12-09,2023-24,0,AVL,Aston Villa,0,1,-1,0,42000
ARS,2023-12-17,2023-24,1,BHA,Brighton and Hove Albion,2,0,2,0,60257
ARS,2023-12-23,2023-24,0,LIV,Liverpool,1,1,0,0,57548
ARS,2023-12-28,2023-24,1,WHU,West Ham United,0,2,-2,0,60261
ARS,2023-12-31,2023-24,0,FUL,Fulham,1,2,-1,0,24444
ARS,2024-01-20,2023-24,1,CRY,Crystal Palace,5,0,5,0,60284
ARS,2024-01-30,2023-24,0,NFO,Nottingham Forest,2,1,1,0,29387
ARS,2024-02-04,2023-24,1,LIV,Liverpool,3,1,2,0,60374
ARS,2024-02-11,2023-24,0,WHU,West Ham United,6,0,6,0,62474
ARS,2024-02-17,2023-24,0,BUR,Burnley,5,0,5,0,21311
ARS,2024-02-24,2023-24,1,NEW,Newcastle United,4,1,3,0,60298
ARS,2024-03-04,2023-24,0,SHU,Sheffield United,6,0,6,0,29980
ARS,2024-03-09,2023-24,1,BRE,Brentford,2,1,1,0,60331
ARS,2024-03-31,2023-24,0,MCI,Manchester City,0,0,0,0,53422
ARS,2024-04-03,2023-24,1,LUT,Luton Town,2,0,2,0,60262
ARS,2024-04-06,2023-24,0,BHA,Brighton and Hove Albion,3,0,3,0,31677
ARS,2024-04-14,2023-24,1,AVL,Aston Villa,0,2,-2,0,60350
ARS,2024-04-20,2023-24,0,WOL,Wolverhampton Wanderers,2,0,2,0,31621
ARS,2024-04-23,2023-24,1,CHE,Chelsea,5,0,5,0,60238
ARS,2024-04-28,2023-24,0,TOT,Tottenham Hotspur,3,2,1,0,61554
ARS,2024-05-04,2023-24,1,BOU,Bournemouth,3,0,3,0,60348
ARS,2024-05-12,2023-24,0,MUN,Manchester United,1,0,1,0,73600
ARS,2024-05-19,2023-24,1,EVE,Everton,2,1,1,0,60312
ARS,2024-08-17,2024-25,1,WOL,Wolverhampton Wanderers,2,0,2,0,60261
ARS,2024-08-24,2024-25,0,AVL,Aston Villa,2,0,2,0,41587
ARS,2024-08-31,2024-25,1,BHA,Brighton and Hove Albion,1,1,0,1,60326
ARS,2024-09-15,2024-25,0,TOT,Tottenham Hotspur,1,0,1,0,61645
ARS,2024-09-22,2024-25,0,MCI,Manchester City,2,2,0,1,52846
ARS,2024-09-28,2024-25,1,LEI,Leicester City,4,2,2,0,60323
ARS,2024-10-05,2024-25,1,SOU,Southampton,3,1,2,0,60307
ARS,2024-10-19,2024-25,0,BOU,Bournemouth,0,2,-2,1,11235
ARS,2024-10-27,2024-25,1,LIV,Liverpool,2,2,0,0,60383
ARS,2024-11-02,2024-25,0,NEW,Newcastle United,0,1,-1,0,52249
ARS,2024-11-10,2024-25,0,CHE,Chelsea,1,1,0,0,39780
ARS,2024-11-23,2024-25,1,NFO,Nottingham Forest,3,0,3,0,60298
ARS,2024-11-30,2024-25,0,WHU,West Ham United,5,2,3,0,62475
ARS,2024-12-04,2024-25,1,MUN,Manchester United,2,0,2,0,60256
ARS,2024-12-08,2024-25,0,FUL,Fulham,1,1,0,0,26954
ARS,2024-12-14,2024-25,1,EVE,Everton,0,0,0,0,60176
ARS,2024-12-21,2024-25,0,CRY,Crystal Palace,5,1,4,0,25167
ARS,2024-12-27,2024-25,1,IPS,Ipswich Town,1,0,1,0,60271
ARS,2025-01-01,2024-25,0,BRE,Brentford,3,1,2,0,17190
ARS,2025-01-04,2024-25,0,BHA,Brighton and Hove Albion,1,1,0,0,31714
ARS,2025-01-15,2024-25,1,TOT,Tottenham Hotspur,2,1,1,0,60287
ARS,2025-01-18,2024-25,1,AVL,Aston Villa,2,2,0,0,60067
ARS,2025-01-25,2024-25,0,WOL,Wolverhampton Wanderers,1,0,1,1,31503
ARS,2025-02-02,2024-25,1,MCI,Manchester City,5,1,4,0,60355
ARS,2025-02-15,2024-25,0,LEI,Leicester City,2,0,2,0,31968
ARS,2025-02-22,2024-25,1,WHU,West Ham United,0,1,-1,1,60262
ARS,2025-02-26,2024-25,0,NFO,Nottingham Forest,0,0,0,0,30200
ARS,2025-03-09,2024-25,0,MUN,Manchester United,1,1,0,0,73812
ARS,2025-03-16,2024-25,1,CHE,Chelsea,1,0,1,0,60311
ARS,2025-04-01,2024-25,1,FUL,Fulham,2,1,1,0,60256
ARS,2025-04-05,2024-25,0,EVE,Everton,1,1,0,0,39316
ARS,2025-04-12,2024-25,1,BRE,Brentford,1,1,0,0,60184
ARS,2025-04-20,2024-25,0,IPS,Ipswich Town,4,0,4,0,29549
ARS,2025-04-23,2024-25,1,CRY,Crystal Palace,2,2,0,0,60167
ARS,2025-05-03,2024-25,1,BOU,Bournemouth,1,2,-1,0,60110
ARS,2025-05-11,2024-25,0,LIV,Liverpool,2,2,0,1,60324
ARS,2025-05-18,2024-25,1,NEW,Newcastle United,1,0,1,0,60160
ARS,2025-05-25,2024-25,0,SOU,Southampton,2,1,1,0,31289
ARS,2025-08-17,2025-26,0,MUN,Manchester United,1,0,1,0,73475
ARS,2025-08-23,2025-26,1,LEE,Leeds United,5,0,5,0,60110
ARS,2025-08-31,2025-26,0,LIV,Liverpool,0,1,-1,0,60455
ARS,2025-09-13,2025-26,1,NFO,Nottingham Forest,3,0,3,0,60167
ARS,2025-09-21,2025-26,1,MCI,Manchester City,1,1,0,0,60161
ARS,2025-09-28,2025-26,0,NEW,Newcastle United,2,1,1,0,52199
ARS,2025-10-04,2025-26,1,WHU,West Ham United,2,0,2,0,60181
ARS,2025-10-18,2025-26,0,FUL,Fulham,1,0,1,0,27736
ARS,2025-10-26,2025-26,1,CRY,Crystal Palace,1,0,1,0,60103
ARS,2025-11-01,2025-26,0,BUR,Burnley,2,0,2,0,21538
ARS,2025-11-08,2025-26,0,SUN,Sunderland,2,2,0,0,46799
ARS,2025-11-23,2025-26,1,TOT,Tottenham Hotspur,4,1,3,0,60345
ARS,2025-11-30,2025-26,0,CHE,Chelsea,1,1,0,0,39820
ARS,2025-12-03,2025-26,1,BRE,Brentford,2,0,2,0,60110
ARS,2025-12-06,2025-26,0,AVL,Aston Villa,1,2,-1,0,42888
ARS,2025-12-13,2025-26,1,WOL,Wolverhampton Wanderers,2,1,1,0,60242
ARS,2025-12-20,2025-26,0,EVE,Everton,1,0,1,0,52513
ARS,2025-12-27,2025-26,1,BHA,Brighton and Hove Albion,2,1,1,0,60209
ARS,2025-12-30,2025-26,1,AVL,Aston Villa,4,1,3,0,60279
ARS,2026-01-03,2025-26,0,BOU,Bournemouth,3,2,1,0,11240
ARS,2026-01-08,2025-26,1,LIV,Liverpool,0,0,0,0,60258
ARS,2026-01-17,2025-26,0,NFO,Nottingham Forest,0,0,0,0,30729
ARS,2026-01-25,2025-26,1,MUN,Manchester United,2,3,-1,0,60296
ARS,2026-01-31,2025-26,0,LEE,Leeds United,4,0,4,0,36858
ARS,2026-02-07,2025-26,1,SUN,Sunderland,3,0,3,0,60312
ARS,2026-02-12,2025-26,0,BRE,Brentford,1,1,0,0,17224
ARS,2026-02-18,2025-26,0,WOL,Wolverhampton Wanderers,2,2,0,0,29843
ARS,2026-02-22,2025-26,0,TOT,Tottenham Hotspur,4,1,3,0,61439
ARS,2026-03-01,2025-26,1,CHE,Chelsea,2,1,1,0,60296
ARS,2026-03-04,2025-26,0,BHA,Brighton and Hove Albion,1,0,1,0,31575
ARS,2026-03-14,2025-26,1,EVE,Everton,2,0,2,0,60176
ARS,2026-04-11,2025-26,1,BOU,Bournemouth,1,2,-1,0,60210
ARS,2026-04-19,2025-26,0,MCI,Manchester City,1,2,-1,0,52523
ARS,2026-04-25,2025-26,1,NEW,Newcastle United,1,0,1,0,60204
ARS,2026-05-02,2025-26,1,FUL,Fulham,3,0,3,0,60196
ARS,2026-05-10,2025-26,0,WHU,West Ham United,1,0,1,0,60429
ARS,2026-05-18,2025-26,1,BUR,Burnley,1,0,1,0,60274
ARS,2026-05-24,2025-26,0,CRY,Crystal Palace,2,1,1,0,25192
LIV,1992-08-16,1992-93,0,NFO,Nottingham Forest,0,1,-1,0,20038
LIV,1992-08-19,1992-93,1,SHU,Sheffield United,2,1,1,0,33107
LIV,1992-08-23,1992-93,1,ARS,Arsenal,0,2,-2,0,34961
LIV,1992-08-25,1992-93,0,IPS,Ipswich Town,2,2,0,0,20109
LIV,1992-08-29,1992-93,0,LEE,Leeds United,2,2,0,0,29597
LIV,1992-09-01,1992-93,1,SOU,Southampton,1,1,0,0,30024
LIV,1992-09-05,1992-93,1,CHE,Chelsea,2,1,1,0,34199
LIV,1992-09-12,1992-93,0,SHU,Sheffield United,0,1,-1,0,20632
LIV,1992-09-19,1992-93,0,AVL,Aston Villa,2,4,-2,0,37863
LIV,1992-09-26,1992-93,1,WIM,Wimbledon,2,3,-1,0,29574
LIV,1992-10-03,1992-93,1,SHW,Sheffield Wednesday,1,0,1,0,35785
LIV,1992-10-18,1992-93,0,MUN,Manchester United,2,2,0,0,33243
LIV,1992-10-25,1992-93,1,NOR,Norwich City,4,1,3,0,36318
LIV,1992-10-31,1992-93,0,TOT,Tottenham Hotspur,0,2,-2,0,32917
LIV,1992-11-07,1992-93,1,MID,Middlesbrough,4,1,3,0,34974
LIV,1992-11-23,1992-93,0,QPR,Queens Park Rangers,1,0,1,0,21056
LIV,1992-11-28,1992-93,1,CRY,Crystal Palace,5,0,5,0,36380
LIV,1992-12-07,1992-93,0,EVE,Everton,1,2,-1,0,35826
LIV,1992-12-13,1992-93,1,BLA,Blackburn Rovers,2,1,1,0,43668
LIV,1992-12-19,1992-93,0,COV,Coventry City,1,5,-4,0,19779
LIV,1992-12-28,1992-93,1,MCI,Manchester City,1,1,0,0,43037
LIV,1993-01-09,1992-93,1,AVL,Aston Villa,1,2,-1,0,40826
LIV,1993-01-16,1992-93,0,WIM,Wimbledon,0,2,-2,0,11294
LIV,1993-01-31,1992-93,0,ARS,Arsenal,1,0,1,0,27580
LIV,1993-02-06,1992-93,1,NFO,Nottingham Forest,0,0,0,0,40463
LIV,1993-02-10,1992-93,0,CHE,Chelsea,0,0,0,0,20981
LIV,1993-02-13,1992-93,0,SOU,Southampton,1,2,-1,0,17216
LIV,1993-02-20,1992-93,1,IPS,Ipswich Town,0,0,0,0,36680
LIV,1993-02-27,1992-93,0,SHW,Sheffield Wednesday,1,1,0,0,33964
LIV,1993-03-06,1992-93,1,MUN,Manchester United,1,2,-1,0,44374
LIV,1993-03-10,1992-93,1,QPR,Queens Park Rangers,1,0,1,0,30370
LIV,1993-03-13,1992-93,0,MID,Middlesbrough,2,1,1,0,22463
LIV,1993-03-20,1992-93,1,EVE,Everton,1,0,1,0,44619
LIV,1993-03-23,1992-93,0,CRY,Crystal Palace,1,1,0,0,18688
LIV,1993-04-03,1992-93,0,BLA,Blackburn Rovers,1,4,-3,0,15032
LIV,1993-04-10,1992-93,1,OLD,Oldham Athletic,1,0,1,0,36129
LIV,1993-04-12,1992-93,0,MCI,Manchester City,1,1,0,0,28098
LIV,1993-04-17,1992-93,1,COV,Coventry City,4,0,4,0,33328
LIV,1993-04-21,1992-93,1,LEE,Leeds United,2,0,2,0,34992
LIV,1993-05-01,1992-93,0,NOR,Norwich City,0,1,-1,0,20610
LIV,1993-05-05,1992-93,0,OLD,Oldham Athletic,2,3,-1,0,15381
LIV,1993-05-08,1992-93,1,TOT,Tottenham Hotspur,6,2,4,0,43385
LIV,1993-08-14,1993-94,1,SHW,Sheffield Wednesday,2,0,2,0,44004
LIV,1993-08-18,1993-94,0,QPR,Queens Park Rangers,3,1,2,0,19635
LIV,1993-08-22,1993-94,0,SWI,Swindon Town,5,0,5,0,17017
LIV,1993-08-25,1993-94,1,TOT,Tottenham Hotspur,1,2,-1,0,42456
LIV,1993-08-28,1993-94,1,LEE,Leeds United,2,0,2,0,44068
LIV,1993-09-01,1993-94,0,COV,Coventry City,0,1,-1,0,16740
LIV,1993-09-12,1993-94,1,BLA,Blackburn Rovers,0,1,-1,0,37355
LIV,1993-09-18,1993-94,0,EVE,Everton,0,2,-2,0,38157
LIV,1993-09-25,1993-94,0,CHE,Chelsea,0,1,-1,0,31271
LIV,1993-10-02,1993-94,1,ARS,Arsenal,0,0,0,0,42750
LIV,1993-10-16,1993-94,1,OLD,Oldham Athletic,2,1,1,0,32661
LIV,1993-10-23,1993-94,0,MCI,Manchester City,1,1,0,0,30403
LIV,1993-10-30,1993-94,1,SOU,Southampton,4,2,2,0,32818
LIV,1993-11-06,1993-94,1,WHU,West Ham United,2,0,2,0,42254
LIV,1993-11-21,1993-94,0,NEW,Newcastle United,0,3,-3,0,36374
LIV,1993-11-28,1993-94,1,AVL,Aston Villa,2,1,1,0,38484
LIV,1993-12-04,1993-94,0,SHW,Sheffield Wednesday,1,3,-2,0,32177
LIV,1993-12-08,1993-94,1,QPR,Queens Park Rangers,3,2,1,0,24561
LIV,1993-12-11,1993-94,1,SWI,Swindon Town,2,2,0,0,32739
LIV,1993-12-18,1993-94,0,TOT,Tottenham Hotspur,3,3,0,0,31394
LIV,1993-12-26,1993-94,0,SHU,Sheffield United,0,0,0,0,22932
LIV,1993-12-28,1993-94,1,WIM,Wimbledon,1,1,0,0,32323
LIV,1994-01-01,1993-94,0,IPS,Ipswich Town,2,1,1,0,22355
LIV,1994-01-04,1993-94,1,MUN,Manchester United,3,3,0,0,42795
LIV,1994-01-15,1993-94,0,OLD,Oldham Athletic,3,0,3,0,14573
LIV,1994-01-22,1993-94,1,MCI,Manchester City,2,1,1,0,41872
LIV,1994-02-05,1993-94,0,NOR,Norwich City,2,2,0,0,19746
LIV,1994-02-14,1993-94,0,SOU,Southampton,2,4,-2,0,18306
LIV,1994-02-19,1993-94,0,LEE,Leeds United,0,2,-2,0,40053
LIV,1994-02-26,1993-94,1,COV,Coventry City,1,0,1,0,38547
LIV,1994-03-05,1993-94,0,BLA,Blackburn Rovers,0,2,-2,0,20831
LIV,1994-03-13,1993-94,1,EVE,Everton,2,1,1,0,44281
LIV,1994-03-19,1993-94,1,CHE,Chelsea,2,1,1,0,38629
LIV,1994-03-26,1993-94,0,ARS,Arsenal,0,1,-1,0,35556
LIV,1994-03-30,1993-94,0,MUN,Manchester United,0,1,-1,0,44751
LIV,1994-04-02,1993-94,1,SHU,Sheffield United,1,2,-1,0,36642
LIV,1994-04-04,1993-94,0,WIM,Wimbledon,1,1,0,0,13819
LIV,1994-04-09,1993-94,1,IPS,Ipswich Town,1,0,1,0,30485
LIV,1994-04-16,1993-94,1,NEW,Newcastle United,0,2,-2,0,44601
LIV,1994-04-23,1993-94,0,WHU,West Ham United,2,1,1,0,26096
LIV,1994-04-30,1993-94,1,NOR,Norwich City,0,1,-1,0,44339
LIV,1994-05-07,1993-94,0,AVL,Aston Villa,1,2,-1,0,45347
LIV,1994-08-20,1994-95,0,CRY,Crystal Palace,6,1,5,0,18084
LIV,1994-08-28,1994-95,1,ARS,Arsenal,3,0,3,0,30017
LIV,1994-08-31,1994-95,0,SOU,Southampton,2,0,2,0,30907
LIV,1994-09-10,1994-95,1,WHU,West Ham United,0,0,0,0,43740
LIV,1994-09-17,1994-95,0,MUN,Manchester United,0,2,-2,0,34435
LIV,1994-09-24,1994-95,0,NEW,Newcastle United,1,1,0,0,31493
LIV,1994-10-01,1994-95,1,SHW,Sheffield Wednesday,4,1,3,0,32158
LIV,1994-10-08,1994-95,1,AVL,Aston Villa,3,2,1,0,32158
LIV,1994-10-15,1994-95,0,BLA,Blackburn Rovers,2,3,-1,0,30263
LIV,1994-10-22,1994-95,1,WIM,Wimbledon,3,0,3,0,22519
LIV,1994-10-29,1994-95,0,IPS,Ipswich Town,3,1,2,0,22519
LIV,1994-10-31,1994-95,0,QPR,Queens Park Rangers,1,2,-1,0,33329
LIV,1994-11-05,1994-95,1,NFO,Nottingham Forest,1,0,1,0,32885
LIV,1994-11-09,1994-95,1,CHE,Chelsea,3,1,2,0,32855
LIV,1994-11-21,1994-95,0,EVE,Everton,0,2,-2,0,39866
LIV,1994-11-26,1994-95,1,TOT,Tottenham Hotspur,1,1,0,0,35007
LIV,1994-12-03,1994-95,0,COV,Coventry City,1,1,0,0,21029
LIV,1994-12-11,1994-95,1,CRY,Crystal Palace,0,0,0,0,30972
LIV,1994-12-18,1994-95,0,CHE,Chelsea,0,0,0,0,27050
LIV,1994-12-26,1994-95,0,LEI,Leicester City,2,1,1,0,21393
LIV,1994-12-28,1994-95,1,MCI,Manchester City,2,0,2,0,38122
LIV,1994-12-31,1994-95,0,LEE,Leeds United,2,0,2,0,38563
LIV,1995-01-02,1994-95,1,NOR,Norwich City,4,0,4,0,34709
LIV,1995-01-14,1994-95,1,IPS,Ipswich Town,0,1,-1,0,32733
LIV,1995-01-24,1994-95,1,EVE,Everton,0,0,0,0,39505
LIV,1995-02-04,1994-95,0,NFO,Nottingham Forest,1,1,0,0,35996
LIV,1995-02-11,1994-95,1,QPR,Queens Park Rangers,1,1,0,0,31964
LIV,1995-02-25,1994-95,0,SHW,Sheffield Wednesday,2,1,1,0,38906
LIV,1995-03-04,1994-95,1,NEW,Newcastle United,2,0,2,0,31988
LIV,1995-03-14,1994-95,1,COV,Coventry City,2,3,-1,0,27183
LIV,1995-03-19,1994-95,1,MUN,Manchester United,2,0,2,0,38036
LIV,1995-03-22,1994-95,0,TOT,Tottenham Hotspur,0,0,0,0,39300
LIV,1995-04-05,1994-95,1,SOU,Southampton,3,1,2,0,29881
LIV,1995-04-09,1994-95,1,LEE,Leeds United,0,1,-1,0,37454
LIV,1995-04-12,1994-95,0,ARS,Arsenal,1,0,1,0,38036
LIV,1995-04-14,1994-95,0,MCI,Manchester City,1,2,-1,0,21843
LIV,1995-04-17,1994-95,1,LEI,Leicester City,2,0,2,0,36012
LIV,1995-04-29,1994-95,0,NOR,Norwich City,2,1,1,0,40154
LIV,1995-05-02,1994-95,0,WIM,Wimbledon,0,0,0,0,39505
LIV,1995-05-06,1994-95,0,AVL,Aston Villa,0,2,-2,0,40154
LIV,1995-05-10,1994-95,0,WHU,West Ham United,0,3,-3,0,27055
LIV,1995-05-14,1994-95,1,BLA,Blackburn Rovers,2,1,1,0,40014
LIV,1995-08-19,1995-96,1,SHW,Sheffield Wednesday,1,0,1,0,40535
LIV,1995-08-21,1995-96,0,LEE,Leeds United,0,1,-1,0,35852
LIV,1995-08-26,1995-96,0,TOT,Tottenham Hotspur,3,1,2,0,31254
LIV,1995-08-30,1995-96,1,QPR,Queens Park Rangers,1,0,1,0,37548
LIV,1995-09-09,1995-96,0,WIM,Wimbledon,0,1,-1,0,19530
LIV,1995-09-16,1995-96,1,BLA,Blackburn Rovers,3,0,3,0,39502
LIV,1995-09-23,1995-96,1,BOL,Bolton Wanderers,5,2,3,0,40104
LIV,1995-10-01,1995-96,0,MUN,Manchester United,2,2,0,0,34934
LIV,1995-10-14,1995-96,1,COV,Coventry City,0,0,0,0,39079
LIV,1995-10-22,1995-96,0,SOU,Southampton,3,1,2,0,15245
LIV,1995-10-28,1995-96,1,MCI,Manchester City,6,0,6,0,39267
LIV,1995-11-04,1995-96,0,NEW,Newcastle United,1,2,-1,0,36547
LIV,1995-11-18,1995-96,1,EVE,Everton,1,2,-1,0,40818
LIV,1995-11-22,1995-96,0,WHU,West Ham United,0,0,0,0,24324
LIV,1995-11-25,1995-96,0,MID,Middlesbrough,1,2,-1,0,29390
LIV,1995-12-02,1995-96,1,SOU,Southampton,1,1,0,0,38007
LIV,1995-12-09,1995-96,0,BOL,Bolton Wanderers,1,0,1,0,21042
LIV,1995-12-17,1995-96,1,MUN,Manchester United,2,0,2,0,40546
LIV,1995-12-23,1995-96,1,ARS,Arsenal,3,1,2,0,39806
LIV,1995-12-30,1995-96,0,CHE,Chelsea,2,2,0,0,31137
LIV,1996-01-01,1995-96,1,NFO,Nottingham Forest,4,2,2,0,39206
LIV,1996-01-13,1995-96,0,SHW,Sheffield Wednesday,1,1,0,0,32747
LIV,1996-01-20,1995-96,1,LEE,Leeds United,5,0,5,0,40254
LIV,1996-01-31,1995-96,0,AVL,Aston Villa,2,0,2,0,39332
LIV,1996-02-03,1995-96,1,TOT,Tottenham Hotspur,0,0,0,0,40628
LIV,1996-02-11,1995-96,0,QPR,Queens Park Rangers,2,1,1,0,18405
LIV,1996-02-24,1995-96,0,BLA,Blackburn Rovers,3,2,1,0,30895
LIV,1996-03-03,1995-96,1,AVL,Aston Villa,3,0,3,0,39508
LIV,1996-03-13,1995-96,1,WIM,Wimbledon,2,2,0,0,34063
LIV,1996-03-16,1995-96,1,CHE,Chelsea,2,0,2,0,40820
LIV,1996-03-23,1995-96,0,NFO,Nottingham Forest,0,1,-1,0,29058
LIV,1996-04-03,1995-96,1,NEW,Newcastle United,4,3,1,0,40702
LIV,1996-04-06,1995-96,0,COV,Coventry City,0,1,-1,0,23137
LIV,1996-04-08,1995-96,1,WHU,West Ham United,2,0,2,0,40326
LIV,1996-04-16,1995-96,0,EVE,Everton,1,1,0,0,40120
LIV,1996-04-27,1995-96,1,MID,Middlesbrough,1,0,1,0,40782
LIV,1996-05-01,1995-96,0,ARS,Arsenal,0,0,0,0,38323
LIV,1996-05-05,1995-96,0,MCI,Manchester City,2,2,0,0,31436
LIV,1996-08-17,1996-97,0,MID,Middlesbrough,3,3,0,0,30039
LIV,1996-08-19,1996-97,1,ARS,Arsenal,2,0,2,0,38103
LIV,1996-08-24,1996-97,1,SUN,Sunderland,0,0,0,0,40503
LIV,1996-09-04,1996-97,0,COV,Coventry City,1,0,1,0,23021
LIV,1996-09-07,1996-97,1,SOU,Southampton,2,1,1,0,39189
LIV,1996-09-15,1996-97,0,LEI,Leicester City,3,0,3,0,20987
LIV,1996-09-21,1996-97,1,CHE,Chelsea,5,1,4,0,40739
LIV,1996-09-29,1996-97,0,WHU,West Ham United,2,1,1,0,25064
LIV,1996-10-12,1996-97,0,MUN,Manchester United,0,1,-1,0,55128
LIV,1996-10-27,1996-97,1,DER,Derby County,2,1,1,0,39515
LIV,1996-11-03,1996-97,0,BLA,Blackburn Rovers,0,3,-3,0,29958
LIV,1996-11-16,1996-97,0,LEE,Leeds United,2,0,2,0,39981
LIV,1996-11-20,1996-97,1,EVE,Everton,1,1,0,0,40751
LIV,1996-11-23,1996-97,1,WIM,Wimbledon,1,1,0,0,39027
LIV,1996-12-02,1996-97,0,TOT,Tottenham Hotspur,2,0,2,0,32899
LIV,1996-12-07,1996-97,1,SHW,Sheffield Wednesday,0,1,-1,0,39507
LIV,1996-12-14,1996-97,1,MID,Middlesbrough,5,1,4,0,39441
LIV,1996-12-17,1996-97,1,NFO,Nottingham Forest,4,2,2,0,36126
LIV,1996-12-23,1996-97,0,NEW,Newcastle United,1,1,0,0,36570
LIV,1996-12-26,1996-97,1,LEI,Leicester City,1,1,0,0,40786
LIV,1996-12-29,1996-97,0,SOU,Southampton,1,0,1,0,15222
LIV,1997-01-01,1996-97,0,CHE,Chelsea,0,1,-1,0,28329
LIV,1997-01-11,1996-97,1,WHU,West Ham United,0,0,0,0,40102
LIV,1997-01-18,1996-97,1,AVL,Aston Villa,3,0,3,0,40489
LIV,1997-02-01,1996-97,0,DER,Derby County,1,0,1,0,18102
LIV,1997-02-19,1996-97,1,LEE,Leeds United,4,0,4,0,38957
LIV,1997-02-22,1996-97,1,BLA,Blackburn Rovers,0,0,0,0,40747
LIV,1997-03-02,1996-97,0,AVL,Aston Villa,0,1,-1,0,39339
LIV,1997-03-10,1996-97,1,NEW,Newcastle United,4,3,1,0,40751
LIV,1997-03-15,1996-97,0,NFO,Nottingham Forest,1,1,0,0,29181
LIV,1997-03-24,1996-97,0,ARS,Arsenal,2,1,1,0,38068
LIV,1997-04-06,1996-97,1,COV,Coventry City,1,2,-1,0,40079
LIV,1997-04-13,1996-97,0,SUN,Sunderland,2,1,1,0,21938
LIV,1997-04-16,1996-97,0,EVE,Everton,1,1,0,0,40177
LIV,1997-04-19,1996-97,1,MUN,Manchester United,1,3,-2,0,40892
LIV,1997-05-03,1996-97,1,TOT,Tottenham Hotspur,2,1,1,0,40003
LIV,1997-05-06,1996-97,0,WIM,Wimbledon,1,2,-1,0,20016
LIV,1997-05-11,1996-97,0,SHW,Sheffield Wednesday,1,1,0,0,38943
LIV,1997-08-09,1997-98,0,WIM,Wimbledon,1,1,0,0,26106
LIV,1997-08-13,1997-98,1,LEI,Leicester City,1,2,-1,0,35007
LIV,1997-08-23,1997-98,0,BLA,Blackburn Rovers,1,1,0,0,30187
LIV,1997-08-26,1997-98,0,LEE,Leeds United,2,0,2,0,39775
LIV,1997-09-13,1997-98,1,SHW,Sheffield Wednesday,2,1,1,0,34705
LIV,1997-09-20,1997-98,0,SOU,Southampton,1,1,0,0,15252
LIV,1997-09-22,1997-98,1,AVL,Aston Villa,3,0,3,0,34843
LIV,1997-09-27,1997-98,0,WHU,West Ham United,1,2,-1,0,25908
LIV,1997-10-05,1997-98,1,CHE,Chelsea,4,2,2,0,36647
LIV,1997-10-18,1997-98,0,EVE,Everton,0,2,-2,0,40112
LIV,1997-10-25,1997-98,1,DER,Derby County,4,0,4,0,38017
LIV,1997-11-01,1997-98,0,BOL,Bolton Wanderers,1,1,0,0,25000
LIV,1997-11-08,1997-98,1,TOT,Tottenham Hotspur,4,0,4,0,38006
LIV,1997-11-22,1997-98,1,BAR,Barnsley,0,1,-1,0,41011
LIV,1997-11-30,1997-98,0,ARS,Arsenal,1,0,1,0,38094
LIV,1997-12-06,1997-98,1,MUN,Manchester United,1,3,-2,0,41027
LIV,1997-12-13,1997-98,0,CRY,Crystal Palace,3,0,3,0,25790
LIV,1997-12-20,1997-98,1,COV,Coventry City,1,0,1,0,39707
LIV,1997-12-26,1997-98,1,LEE,Leeds United,3,1,2,0,43854
LIV,1997-12-28,1997-98,0,NEW,Newcastle United,2,1,1,0,36702
LIV,1998-01-10,1997-98,1,WIM,Wimbledon,2,0,2,0,38011
LIV,1998-01-17,1997-98,0,LEI,Leicester City,0,0,0,0,21633
LIV,1998-01-20,1997-98,1,NEW,Newcastle United,1,0,1,0,42791
LIV,1998-01-31,1997-98,1,BLA,Blackburn Rovers,0,0,0,0,43890
LIV,1998-02-07,1997-98,1,SOU,Southampton,2,3,-1,0,43550
LIV,1998-02-14,1997-98,0,SHW,Sheffield Wednesday,3,3,0,0,35405
LIV,1998-02-23,1997-98,1,EVE,Everton,1,1,0,0,44501
LIV,1998-02-28,1997-98,0,AVL,Aston Villa,1,2,-1,0,39377
LIV,1998-03-07,1997-98,1,BOL,Bolton Wanderers,2,1,1,0,44532
LIV,1998-03-14,1997-98,0,TOT,Tottenham Hotspur,3,3,0,0,30245
LIV,1998-03-28,1997-98,0,BAR,Barnsley,3,2,1,0,18684
LIV,1998-04-10,1997-98,0,MUN,Manchester United,1,1,0,0,55171
LIV,1998-04-13,1997-98,1,CRY,Crystal Palace,2,1,1,0,43007
LIV,1998-04-19,1997-98,0,COV,Coventry City,1,1,0,0,22721
LIV,1998-04-25,1997-98,0,CHE,Chelsea,1,4,-3,0,34639
LIV,1998-05-02,1997-98,1,WHU,West Ham United,5,0,5,0,44414
LIV,1998-05-06,1997-98,1,ARS,Arsenal,4,0,4,0,44417
LIV,1998-05-10,1997-98,0,DER,Derby County,0,1,-1,0,30492
LIV,1998-08-16,1998-99,0,SOU,Southampton,2,1,1,0,15202
LIV,1998-08-22,1998-99,1,ARS,Arsenal,0,0,0,0,44429
LIV,1998-08-30,1998-99,0,NEW,Newcastle United,4,1,3,0,36740
LIV,1998-09-09,1998-99,1,COV,Coventry City,2,0,2,0,41771
LIV,1998-09-12,1998-99,0,WHU,West Ham United,1,2,-1,0,26010
LIV,1998-09-19,1998-99,1,CHA,Charlton Athletic,3,3,0,0,44526
LIV,1998-09-24,1998-99,0,MUN,Manchester United,0,2,-2,0,55181
LIV,1998-10-04,1998-99,1,CHE,Chelsea,1,1,0,0,44404
LIV,1998-10-17,1998-99,0,EVE,Everton,0,0,0,0,40185
LIV,1998-10-24,1998-99,1,NFO,Nottingham Forest,5,1,4,0,44595
LIV,1998-10-31,1998-99,0,LEI,Leicester City,0,1,-1,0,21837
LIV,1998-11-07,1998-99,1,DER,Derby County,1,2,-1,0,44020
LIV,1998-11-14,1998-99,1,LEE,Leeds United,1,3,-2,0,44305
LIV,1998-11-21,1998-99,0,AVL,Aston Villa,4,2,2,0,39241
LIV,1998-11-29,1998-99,1,BLA,Blackburn Rovers,2,0,2,0,41753
LIV,1998-12-05,1998-99,0,TOT,Tottenham Hotspur,1,2,-1,0,36125
LIV,1998-12-13,1998-99,0,WIM,Wimbledon,0,1,-1,0,26080
LIV,1998-12-19,1998-99,1,SHW,Sheffield Wednesday,2,0,2,0,40003
LIV,1998-12-26,1998-99,0,MID,Middlesbrough,3,1,2,0,34626
LIV,1998-12-28,1998-99,1,NEW,Newcastle United,4,2,2,0,44605
LIV,1999-01-09,1998-99,0,ARS,Arsenal,0,0,0,0,38107
LIV,1999-01-16,1998-99,1,SOU,Southampton,7,1,6,0,44011
LIV,1999-01-30,1998-99,0,COV,Coventry City,1,2,-1,0,23057
LIV,1999-02-06,1998-99,1,MID,Middlesbrough,3,1,2,0,44384
LIV,1999-02-13,1998-99,0,CHA,Charlton Athletic,0,1,-1,0,20043
LIV,1999-02-20,1998-99,1,WHU,West Ham United,2,2,0,0,44511
LIV,1999-02-27,1998-99,0,CHE,Chelsea,1,2,-1,0,34822
LIV,1999-03-13,1998-99,0,DER,Derby County,2,3,-1,0,32913
LIV,1999-04-03,1998-99,1,EVE,Everton,3,2,1,0,44852
LIV,1999-04-05,1998-99,0,NFO,Nottingham Forest,2,2,0,0,28374
LIV,1999-04-12,1998-99,0,LEE,Leeds United,0,0,0,0,39451
LIV,1999-04-17,1998-99,1,AVL,Aston Villa,0,1,-1,0,44306
LIV,1999-04-21,1998-99,1,LEI,Leicester City,0,1,-1,0,36019
LIV,1999-04-24,1998-99,0,BLA,Blackburn Rovers,3,1,2,0,29944
LIV,1999-05-01,1998-99,1,TOT,Tottenham Hotspur,3,2,1,0,44007
LIV,1999-05-05,1998-99,1,MUN,Manchester United,2,2,0,0,44702
LIV,1999-05-08,1998-99,0,SHW,Sheffield Wednesday,0,1,-1,0,27383
LIV,1999-05-16,1998-99,1,WIM,Wimbledon,3,0,3,0,41902
LIV,1999-08-07,1999-00,0,SHW,Sheffield Wednesday,2,1,1,0,34853
LIV,1999-08-14,1999-00,1,WAT,Watford,0,1,-1,0,44174
LIV,1999-08-21,1999-00,0,MID,Middlesbrough,0,1,-1,0,34783
LIV,1999-08-23,1999-00,0,LEE,Leeds United,2,1,1,0,39703
LIV,1999-08-28,1999-00,1,ARS,Arsenal,2,0,2,0,44886
LIV,1999-09-11,1999-00,1,MUN,Manchester United,2,3,-1,0,44929
LIV,1999-09-18,1999-00,0,LEI,Leicester City,2,2,0,0,21623
LIV,1999-09-27,1999-00,1,EVE,Everton,0,1,-1,0,29491
LIV,1999-10-02,1999-00,0,AVL,Aston Villa,0,0,0,0,39217
LIV,1999-10-16,1999-00,1,CHE,Chelsea,1,0,1,0,44826
LIV,1999-10-23,1999-00,0,SOU,Southampton,1,1,0,0,15241
LIV,1999-10-27,1999-00,1,WHU,West Ham United,1,0,1,0,44012
LIV,1999-11-01,1999-00,1,BRA,Bradford City,3,1,2,0,40483
LIV,1999-11-06,1999-00,1,DER,Derby County,2,0,2,0,44467
LIV,1999-11-20,1999-00,0,SUN,Sunderland,2,0,2,0,42015
LIV,1999-11-27,1999-00,0,WHU,West Ham United,0,1,-1,0,26043
LIV,1999-12-05,1999-00,1,SHW,Sheffield Wednesday,4,1,3,0,42517
LIV,1999-12-18,1999-00,1,COV,Coventry City,2,0,2,0,44024
LIV,1999-12-26,1999-00,0,NEW,Newcastle United,2,2,0,0,36445
LIV,1999-12-28,1999-00,1,WIM,Wimbledon,3,1,2,0,44107
LIV,2000-01-03,1999-00,0,TOT,Tottenham Hotspur,0,1,-1,0,36044
LIV,2000-01-15,1999-00,0,WAT,Watford,3,2,1,0,21367
LIV,2000-01-22,1999-00,1,MID,Middlesbrough,0,0,0,0,44324
LIV,2000-02-05,1999-00,1,LEE,Leeds United,3,1,2,0,44793
LIV,2000-02-13,1999-00,0,ARS,Arsenal,1,0,1,0,38098
LIV,2000-03-04,1999-00,0,MUN,Manchester United,1,1,0,0,61592
LIV,2000-03-11,1999-00,1,SUN,Sunderland,1,1,0,0,44693
LIV,2000-03-15,1999-00,1,AVL,Aston Villa,0,0,0,0,43615
LIV,2000-03-18,1999-00,0,DER,Derby County,2,0,2,0,33378
LIV,2000-03-25,1999-00,1,NEW,Newcastle United,2,1,1,0,44743
LIV,2000-04-01,1999-00,0,COV,Coventry City,3,0,3,0,23098
LIV,2000-04-09,1999-00,1,TOT,Tottenham Hotspur,2,0,2,0,44536
LIV,2000-04-16,1999-00,0,WIM,Wimbledon,2,1,1,0,26102
LIV,2000-04-21,1999-00,0,EVE,Everton,0,0,0,0,38029
LIV,2000-04-29,1999-00,0,CHE,Chelsea,0,2,-2,0,34957
LIV,2000-05-03,1999-00,1,LEI,Leicester City,0,2,-2,0,43456
LIV,2000-05-07,1999-00,1,SOU,Southampton,0,0,0,0,44015
LIV,2000-05-14,1999-00,0,BRA,Bradford City,0,1,-1,0,18276
LIV,2000-08-19,2000-01,1,BRA,Bradford City,1,0,1,0,44183
LIV,2000-08-21,2000-01,0,ARS,Arsenal,0,2,-2,0,38014
LIV,2000-08-26,2000-01,0,SOU,Southampton,3,3,0,0,15202
LIV,2000-09-06,2000-01,1,AVL,Aston Villa,3,1,2,0,43360
LIV,2000-09-09,2000-01,1,MCI,Manchester City,3,2,1,0,44692
LIV,2000-09-17,2000-01,0,WHU,West Ham United,1,1,0,0,25998
LIV,2000-09-23,2000-01,1,SUN,Sunderland,1,1,0,0,44713
LIV,2000-10-01,2000-01,0,CHE,Chelsea,0,3,-3,0,34966
LIV,2000-10-15,2000-01,0,DER,Derby County,4,0,4,0,30532
LIV,2000-10-21,2000-01,1,LEI,Leicester City,1,0,1,0,44395
LIV,2000-10-29,2000-01,1,EVE,Everton,3,1,2,0,44718
LIV,2000-11-04,2000-01,0,LEE,Leeds United,3,4,-1,0,40055
LIV,2000-11-12,2000-01,1,COV,Coventry City,4,1,3,0,43701
LIV,2000-11-19,2000-01,0,TOT,Tottenham Hotspur,1,2,-1,0,36036
LIV,2000-11-26,2000-01,0,NEW,Newcastle United,1,2,-1,0,51949
LIV,2000-12-02,2000-01,1,CHA,Charlton Athletic,3,0,3,0,43515
LIV,2000-12-10,2000-01,1,IPS,Ipswich Town,0,1,-1,0,43509
LIV,2000-12-17,2000-01,0,MUN,Manchester United,1,0,1,0,67533
LIV,2000-12-23,2000-01,1,ARS,Arsenal,4,0,4,0,44144
LIV,2000-12-26,2000-01,0,MID,Middlesbrough,0,1,-1,0,34696
LIV,2001-01-01,2000-01,1,SOU,Southampton,2,1,1,0,38474
LIV,2001-01-13,2000-01,0,AVL,Aston Villa,3,0,3,0,41366
LIV,2001-01-20,2000-01,1,MID,Middlesbrough,0,0,0,0,43042
LIV,2001-01-31,2000-01,0,MCI,Manchester City,1,1,0,0,34629
LIV,2001-02-03,2000-01,1,WHU,West Ham United,3,0,3,0,44045
LIV,2001-02-10,2000-01,0,SUN,Sunderland,1,1,0,0,47533
LIV,2001-03-03,2000-01,0,LEI,Leicester City,0,2,-2,0,21924
LIV,2001-03-18,2000-01,1,DER,Derby County,1,1,0,0,43362
LIV,2001-03-31,2000-01,1,MUN,Manchester United,2,0,2,0,44806
LIV,2001-04-10,2000-01,0,IPS,Ipswich Town,1,1,0,0,23504
LIV,2001-04-13,2000-01,1,LEE,Leeds United,1,2,-1,0,44116
LIV,2001-04-16,2000-01,0,EVE,Everton,3,2,1,1,40260
LIV,2001-04-22,2000-01,1,TOT,Tottenham Hotspur,3,1,2,0,43547
LIV,2001-04-28,2000-01,0,COV,Coventry City,2,0,2,0,23063
LIV,2001-05-01,2000-01,0,BRA,Bradford City,2,0,2,0,22057
LIV,2001-05-05,2000-01,1,NEW,Newcastle United,3,0,3,0,44363
LIV,2001-05-08,2000-01,1,CHE,Chelsea,2,2,0,0,43588
LIV,2001-05-19,2000-01,0,CHA,Charlton Athletic,4,0,4,0,20043
LIV,2001-08-18,2001-02,1,WHU,West Ham United,2,1,1,0,43935
LIV,2001-08-27,2001-02,0,BOL,Bolton Wanderers,1,2,-1,0,27205
LIV,2001-09-08,2001-02,1,AVL,Aston Villa,1,3,-2,0,44102
LIV,2001-09-15,2001-02,0,EVE,Everton,3,1,2,0,39554
LIV,2001-09-22,2001-02,1,TOT,Tottenham Hotspur,1,0,1,0,44116
LIV,2001-09-30,2001-02,0,NEW,Newcastle United,2,0,2,0,52095
LIV,2001-10-13,2001-02,1,LEE,Leeds United,1,1,0,0,44352
LIV,2001-10-20,2001-02,0,LEI,Leicester City,4,1,3,0,21886
LIV,2001-10-27,2001-02,0,CHA,Charlton Athletic,2,0,2,0,22887
LIV,2001-11-04,2001-02,1,MUN,Manchester United,3,1,2,0,44361
LIV,2001-11-17,2001-02,0,BLA,Blackburn Rovers,1,1,0,0,28859
LIV,2001-11-25,2001-02,1,SUN,Sunderland,1,0,1,0,43537
LIV,2001-12-01,2001-02,0,DER,Derby County,1,0,1,0,33289
LIV,2001-12-08,2001-02,1,MID,Middlesbrough,2,0,2,0,43674
LIV,2001-12-12,2001-02,1,FUL,Fulham,0,0,0,0,37163
LIV,2001-12-16,2001-02,0,CHE,Chelsea,0,4,-4,0,41174
LIV,2001-12-23,2001-02,1,ARS,Arsenal,1,2,-1,0,44297
LIV,2001-12-26,2001-02,0,AVL,Aston Villa,2,1,1,0,42602
LIV,2001-12-29,2001-02,0,WHU,West Ham United,1,1,0,0,35103
LIV,2002-01-01,2001-02,1,BOL,Bolton Wanderers,1,1,0,0,43710
LIV,2002-01-09,2001-02,0,SOU,Southampton,0,2,-2,0,31527
LIV,2002-01-13,2001-02,0,ARS,Arsenal,1,1,0,0,38132
LIV,2002-01-19,2001-02,1,SOU,Southampton,1,1,0,0,43710
LIV,2002-01-22,2001-02,0,MUN,Manchester United,1,0,1,0,67599
LIV,2002-01-30,2001-02,1,LEI,Leicester City,1,0,1,0,42305
LIV,2002-02-03,2001-02,0,LEE,Leeds United,4,0,4,0,40216
LIV,2002-02-09,2001-02,0,IPS,Ipswich Town,6,0,6,0,25608
LIV,2002-02-23,2001-02,1,EVE,Everton,1,1,0,0,44371
LIV,2002-03-02,2001-02,0,FUL,Fulham,2,0,2,0,21103
LIV,2002-03-06,2001-02,1,NEW,Newcastle United,3,0,3,0,44204
LIV,2002-03-16,2001-02,0,MID,Middlesbrough,2,1,1,0,31253
LIV,2002-03-24,2001-02,1,CHE,Chelsea,1,0,1,0,44203
LIV,2002-03-30,2001-02,1,CHA,Charlton Athletic,2,0,2,0,44094
LIV,2002-04-13,2001-02,0,SUN,Sunderland,1,0,1,0,48335
LIV,2002-04-20,2001-02,1,DER,Derby County,2,0,2,0,43510
LIV,2002-04-27,2001-02,0,TOT,Tottenham Hotspur,0,1,-1,0,36017
LIV,2002-05-08,2001-02,1,BLA,Blackburn Rovers,4,3,1,0,40663
LIV,2002-05-11,2001-02,1,IPS,Ipswich Town,5,0,5,0,44088
LIV,2002-08-18,2002-03,0,AVL,Aston Villa,1,0,1,0,41183
LIV,2002-08-24,2002-03,1,SOU,Southampton,3,0,3,0,43058
LIV,2002-08-28,2002-03,0,BLA,Blackburn Rovers,2,2,0,0,29207
LIV,2002-09-02,2002-03,1,NEW,Newcastle United,2,2,0,0,43241
LIV,2002-09-11,2002-03,1,BIR,Birmingham City,2,2,0,0,43113
LIV,2002-09-14,2002-03,0,BOL,Bolton Wanderers,3,2,1,0,27238
LIV,2002-09-21,2002-03,1,WBA,West Bromwich Albion,2,0,2,0,43830
LIV,2002-09-28,2002-03,0,MCI,Manchester City,3,0,3,0,35131
LIV,2002-10-06,2002-03,1,CHE,Chelsea,1,0,1,0,43856
LIV,2002-10-19,2002-03,0,LEE,Leeds United,1,0,1,0,40187
LIV,2002-10-26,2002-03,1,TOT,Tottenham Hotspur,2,1,1,0,44084
LIV,2002-11-02,2002-03,1,WHU,West Ham United,2,0,2,0,44048
LIV,2002-11-09,2002-03,0,MID,Middlesbrough,0,1,-1,0,34747
LIV,2002-11-17,2002-03,1,SUN,Sunderland,0,0,0,0,43074
LIV,2002-11-23,2002-03,0,FUL,Fulham,2,3,-1,0,18144
LIV,2002-12-01,2002-03,1,MUN,Manchester United,1,2,-1,0,44250
LIV,2002-12-07,2002-03,0,CHA,Charlton Athletic,0,2,-2,0,26694
LIV,2002-12-15,2002-03,0,SUN,Sunderland,1,2,-1,0,37118
LIV,2002-12-22,2002-03,1,EVE,Everton,0,0,0,0,44025
LIV,2002-12-26,2002-03,1,BLA,Blackburn Rovers,1,1,0,0,43075
LIV,2002-12-29,2002-03,0,ARS,Arsenal,1,1,0,0,38074
LIV,2003-01-01,2002-03,0,NEW,Newcastle United,0,1,-1,0,52147
LIV,2003-01-11,2002-03,1,AVL,Aston Villa,1,1,0,0,43210
LIV,2003-01-18,2002-03,0,SOU,Southampton,1,0,1,0,32104
LIV,2003-01-29,2002-03,1,ARS,Arsenal,2,2,0,0,43668
LIV,2003-02-02,2002-03,0,WHU,West Ham United,3,0,3,0,35033
LIV,2003-02-08,2002-03,1,MID,Middlesbrough,1,1,0,0,42247
LIV,2003-02-23,2002-03,0,BIR,Birmingham City,1,2,-1,0,29449
LIV,2003-03-08,2002-03,1,BOL,Bolton Wanderers,2,0,2,0,41462
LIV,2003-03-16,2002-03,0,TOT,Tottenham Hotspur,3,2,1,0,36077
LIV,2003-03-23,2002-03,1,LEE,Leeds United,3,1,2,0,43021
LIV,2003-04-05,2002-03,0,MUN,Manchester United,0,4,-4,0,67639
LIV,2003-04-12,2002-03,1,FUL,Fulham,2,0,2,0,42120
LIV,2003-04-19,2002-03,0,EVE,Everton,2,1,1,0,40162
LIV,2003-04-21,2002-03,1,CHA,Charlton Athletic,2,1,1,0,42010
LIV,2003-04-26,2002-03,0,WBA,West Bromwich Albion,6,0,6,0,27128
LIV,2003-05-03,2002-03,1,MCI,Manchester City,1,2,-1,0,44220
LIV,2003-05-11,2002-03,0,CHE,Chelsea,1,2,-1,0,41911
LIV,2003-08-17,2003-04,1,CHE,Chelsea,1,2,-1,0,44080
LIV,2003-08-24,2003-04,0,AVL,Aston Villa,0,0,0,0,42573
LIV,2003-08-27,2003-04,1,TOT,Tottenham Hotspur,0,0,0,0,43778
LIV,2003-08-30,2003-04,0,EVE,Everton,3,0,3,0,40200
LIV,2003-09-13,2003-04,0,BLA,Blackburn Rovers,3,1,2,0,30074
LIV,2003-09-20,2003-04,1,LEI,Leicester City,2,1,1,0,44094
LIV,2003-09-28,2003-04,0,CHA,Charlton Athletic,2,3,-1,0,26530
LIV,2003-10-04,2003-04,1,ARS,Arsenal,1,2,-1,0,44374
LIV,2003-10-18,2003-04,0,POR,Portsmouth,0,1,-1,0,19126
LIV,2003-10-25,2003-04,1,LEE,Leeds United,3,1,2,0,43599
LIV,2003-11-02,2003-04,0,FUL,Fulham,2,1,1,0,17682
LIV,2003-11-09,2003-04,1,MUN,Manchester United,1,2,-1,0,44159
LIV,2003-11-22,2003-04,0,MID,Middlesbrough,0,0,0,0,34268
LIV,2003-11-30,2003-04,1,BIR,Birmingham City,3,1,2,0,42683
LIV,2003-12-06,2003-04,0,NEW,Newcastle United,1,1,0,0,52151
LIV,2003-12-13,2003-04,1,SOU,Southampton,1,2,-1,0,41762
LIV,2003-12-26,2003-04,1,BOL,Bolton Wanderers,3,1,2,0,42987
LIV,2003-12-28,2003-04,0,MCI,Manchester City,2,2,0,0,47201
LIV,2004-01-07,2003-04,0,CHE,Chelsea,1,0,1,0,41533
LIV,2004-01-10,2003-04,1,AVL,Aston Villa,1,0,1,0,43771
LIV,2004-01-17,2003-04,0,TOT,Tottenham Hotspur,1,2,-1,0,36104
LIV,2004-01-21,2003-04,0,WOL,Wolverhampton Wanderers,1,1,0,0,29380
LIV,2004-01-31,2003-04,1,EVE,Everton,0,0,0,0,44056
LIV,2004-02-07,2003-04,0,BOL,Bolton Wanderers,2,2,0,0,27552
LIV,2004-02-11,2003-04,1,MCI,Manchester City,2,1,1,0,43257
LIV,2004-02-29,2003-04,0,LEE,Leeds United,2,2,0,0,39932
LIV,2004-03-14,2003-04,0,SOU,Southampton,0,2,-2,0,32056
LIV,2004-03-17,2003-04,1,POR,Portsmouth,3,0,3,0,34663
LIV,2004-03-20,2003-04,1,WOL,Wolverhampton Wanderers,1,0,1,0,43795
LIV,2004-03-28,2003-04,0,LEI,Leicester City,0,0,0,0,32013
LIV,2004-04-04,2003-04,1,BLA,Blackburn Rovers,4,0,4,0,41559
LIV,2004-04-09,2003-04,0,ARS,Arsenal,2,4,-2,0,38119
LIV,2004-04-12,2003-04,1,CHA,Charlton Athletic,0,1,-1,0,40003
LIV,2004-04-17,2003-04,1,FUL,Fulham,0,0,0,0,42042
LIV,2004-04-24,2003-04,0,MUN,Manchester United,1,0,1,0,67647
LIV,2004-05-02,2003-04,1,MID,Middlesbrough,2,0,2,0,42031
LIV,2004-05-08,2003-04,0,BIR,Birmingham City,3,0,3,0,29553
LIV,2004-05-15,2003-04,1,NEW,Newcastle United,1,1,0,0,44172
LIV,2004-08-14,2004-05,0,TOT,Tottenham Hotspur,1,1,0,0,36104
LIV,2004-08-21,2004-05,1,MCI,Manchester City,2,1,1,0,42042
LIV,2004-08-29,2004-05,0,BOL,Bolton Wanderers,0,1,-1,0,26880
LIV,2004-09-11,2004-05,1,WBA,West Bromwich Albion,3,0,3,0,42947
LIV,2004-09-20,2004-05,0,MUN,Manchester United,1,2,-1,0,67857
LIV,2004-09-25,2004-05,1,NOR,Norwich City,3,0,3,0,43152
LIV,2004-10-03,2004-05,0,CHE,Chelsea,0,1,-1,0,42028
LIV,2004-10-16,2004-05,0,FUL,Fulham,4,2,2,0,21884
LIV,2004-10-23,2004-05,1,CHA,Charlton Athletic,2,0,2,0,41625
LIV,2004-10-30,2004-05,0,BLA,Blackburn Rovers,2,2,0,0,26314
LIV,2004-11-06,2004-05,1,BIR,Birmingham City,0,1,-1,0,42669
LIV,2004-11-13,2004-05,1,CRY,Crystal Palace,3,2,1,0,42862
LIV,2004-11-20,2004-05,0,MID,Middlesbrough,0,2,-2,0,34751
LIV,2004-11-28,2004-05,1,ARS,Arsenal,2,1,1,0,43730
LIV,2004-12-04,2004-05,0,AVL,Aston Villa,1,1,0,0,42593
LIV,2004-12-11,2004-05,0,EVE,Everton,0,1,-1,0,40552
LIV,2004-12-14,2004-05,1,POR,Portsmouth,1,1,0,0,35064
LIV,2004-12-19,2004-05,1,NEW,Newcastle United,3,1,2,0,43856
LIV,2004-12-26,2004-05,0,WBA,West Bromwich Albion,5,0,5,0,27533
LIV,2004-12-28,2004-05,1,SOU,Southampton,1,0,1,0,42382
LIV,2005-01-01,2004-05,1,CHE,Chelsea,0,1,-1,0,43976
LIV,2005-01-03,2004-05,0,NOR,Norwich City,2,1,1,0,24503
LIV,2005-01-15,2004-05,1,MUN,Manchester United,0,1,-1,0,44183
LIV,2005-01-22,2004-05,0,SOU,Southampton,0,2,-2,0,32017
LIV,2005-02-01,2004-05,0,CHA,Charlton Athletic,2,1,1,0,27102
LIV,2005-02-05,2004-05,1,FUL,Fulham,3,1,2,0,43534
LIV,2005-02-12,2004-05,0,BIR,Birmingham City,0,2,-2,0,29318
LIV,2005-03-05,2004-05,0,NEW,Newcastle United,0,1,-1,0,52323
LIV,2005-03-16,2004-05,1,BLA,Blackburn Rovers,0,0,0,0,37763
LIV,2005-03-20,2004-05,1,EVE,Everton,2,1,1,0,44224
LIV,2005-04-02,2004-05,1,BOL,Bolton Wanderers,1,0,1,0,43755
LIV,2005-04-09,2004-05,0,MCI,Manchester City,0,1,-1,0,47203
LIV,2005-04-16,2004-05,1,TOT,Tottenham Hotspur,2,2,0,0,44029
LIV,2005-04-20,2004-05,0,POR,Portsmouth,2,1,1,0,20205
LIV,2005-04-23,2004-05,0,CRY,Crystal Palace,0,1,-1,0,26043
LIV,2005-04-30,2004-05,1,MID,Middlesbrough,1,1,0,0,43250
LIV,2005-05-08,2004-05,0,ARS,Arsenal,1,3,-2,0,38119
LIV,2005-05-15,2004-05,1,AVL,Aston Villa,2,1,1,0,43406
LIV,2005-08-13,2005-06,0,MID,Middlesbrough,0,0,0,0,31908
LIV,2005-08-20,2005-06,1,SUN,Sunderland,1,0,1,0,45251
LIV,2005-09-10,2005-06,0,TOT,Tottenham Hotspur,0,0,0,0,36148
LIV,2005-09-18,2005-06,1,MUN,Manchester United,0,0,0,0,44961
LIV,2005-09-24,2005-06,0,BIR,Birmingham City,2,2,0,0,27733
LIV,2005-10-02,2005-06,1,CHE,Chelsea,1,4,-3,0,45022
LIV,2005-10-15,2005-06,1,BLA,Blackburn Rovers,1,0,1,0,44900
LIV,2005-10-22,2005-06,0,FUL,Fulham,0,2,-2,0,22480
LIV,2005-10-29,2005-06,1,WHU,West Ham United,2,0,2,0,45140
LIV,2005-11-05,2005-06,0,AVL,Aston Villa,2,0,2,0,42551
LIV,2005-11-19,2005-06,1,POR,Portsmouth,3,0,3,0,45012
LIV,2005-11-26,2005-06,0,MCI,Manchester City,1,0,1,0,47105
LIV,2005-11-30,2005-06,0,SUN,Sunderland,2,0,2,0,32697
LIV,2005-12-03,2005-06,1,WIG,Wigan Athletic,3,0,3,0,44898
LIV,2005-12-10,2005-06,1,MID,Middlesbrough,2,0,2,0,43982
LIV,2005-12-26,2005-06,1,NEW,Newcastle United,2,0,2,0,45103
LIV,2005-12-28,2005-06,0,EVE,Everton,3,1,2,0,40158
LIV,2005-12-31,2005-06,1,WBA,West Bromwich Albion,1,0,1,0,44989
LIV,2006-01-02,2005-06,0,BOL,Bolton Wanderers,2,2,0,0,27604
LIV,2006-01-14,2005-06,1,TOT,Tottenham Hotspur,1,0,1,0,45075
LIV,2006-01-22,2005-06,0,MUN,Manchester United,0,1,-1,0,67874
LIV,2006-02-01,2005-06,1,BIR,Birmingham City,1,1,0,0,44314
LIV,2006-02-05,2005-06,0,CHE,Chelsea,0,2,-2,0,42185
LIV,2006-02-08,2005-06,0,CHA,Charlton Athletic,0,2,-2,0,27003
LIV,2006-02-11,2005-06,0,WIG,Wigan Athletic,1,0,1,0,25078
LIV,2006-02-14,2005-06,1,ARS,Arsenal,1,0,1,0,45012
LIV,2006-02-26,2005-06,1,MCI,Manchester City,1,0,1,0,45061
LIV,2006-03-04,2005-06,1,CHA,Charlton Athletic,0,0,0,0,44923
LIV,2006-03-12,2005-06,0,ARS,Arsenal,1,2,-1,0,38221
LIV,2006-03-15,2005-06,1,FUL,Fulham,5,1,4,0,44329
LIV,2006-03-19,2005-06,0,NEW,Newcastle United,3,1,2,0,52306
LIV,2006-03-25,2005-06,1,EVE,Everton,3,1,2,0,45070
LIV,2006-04-01,2005-06,0,WBA,West Bromwich Albion,2,0,2,0,27371
LIV,2006-04-09,2005-06,1,BOL,Bolton Wanderers,1,0,1,0,44938
LIV,2006-04-16,2005-06,0,BLA,Blackburn Rovers,1,0,1,0,29142
LIV,2006-04-26,2005-06,0,WHU,West Ham United,2,1,1,0,34838
LIV,2006-04-29,2005-06,1,AVL,Aston Villa,3,1,2,0,45064
LIV,2006-05-07,2005-06,0,POR,Portsmouth,3,1,2,0,20240
LIV,2006-08-19,2006-07,0,SHU,Sheffield United,1,1,0,0,31726
LIV,2006-08-26,2006-07,1,WHU,West Ham United,2,1,1,0,45262
LIV,2006-09-09,2006-07,0,EVE,Everton,0,3,-3,0,40004
LIV,2006-09-17,2006-07,0,CHE,Chelsea,0,1,-1,0,41882
LIV,2006-09-20,2006-07,1,NEW,Newcastle United,2,0,2,0,45114
LIV,2006-09-23,2006-07,1,TOT,Tottenham Hotspur,3,0,3,0,45121
LIV,2006-09-30,2006-07,0,BOL,Bolton Wanderers,0,2,-2,0,25061
LIV,2006-10-14,2006-07,1,BLA,Blackburn Rovers,1,1,0,0,44900
LIV,2006-10-22,2006-07,0,MUN,Manchester United,0,2,-2,0,75828
LIV,2006-10-28,2006-07,1,AVL,Aston Villa,3,1,2,0,45018
LIV,2006-11-04,2006-07,1,REA,Reading,2,0,2,0,45070
LIV,2006-11-12,2006-07,0,ARS,Arsenal,0,3,-3,0,60110
LIV,2006-11-18,2006-07,0,MID,Middlesbrough,0,0,0,0,31424
LIV,2006-11-25,2006-07,1,MCI,Manchester City,1,0,1,0,45071
LIV,2006-11-29,2006-07,1,POR,Portsmouth,0,0,0,0,44141
LIV,2006-12-02,2006-07,0,WIG,Wigan Athletic,4,0,4,0,22326
LIV,2006-12-09,2006-07,1,FUL,Fulham,4,0,4,0,44907
LIV,2006-12-16,2006-07,0,CHA,Charlton Athletic,3,0,3,0,27111
LIV,2006-12-23,2006-07,1,WAT,Watford,2,0,2,0,44639
LIV,2006-12-26,2006-07,0,BLA,Blackburn Rovers,0,1,-1,0,29342
LIV,2006-12-30,2006-07,0,TOT,Tottenham Hotspur,1,0,1,0,36170
LIV,2007-01-01,2006-07,1,BOL,Bolton Wanderers,3,0,3,0,44290
LIV,2007-01-13,2006-07,0,WAT,Watford,3,0,3,0,19740
LIV,2007-01-20,2006-07,1,CHE,Chelsea,2,0,2,0,44969
LIV,2007-01-30,2006-07,0,WHU,West Ham United,2,1,1,0,35278
LIV,2007-02-03,2006-07,1,EVE,Everton,0,0,0,0,44957
LIV,2007-02-10,2006-07,0,NEW,Newcastle United,1,2,-1,0,52305
LIV,2007-02-24,2006-07,1,SHU,Sheffield United,4,0,4,0,45072
LIV,2007-03-03,2006-07,1,MUN,Manchester United,0,1,-1,0,44887
LIV,2007-03-18,2006-07,0,AVL,Aston Villa,0,0,0,0,42551
LIV,2007-03-31,2006-07,1,ARS,Arsenal,4,1,3,0,44845
LIV,2007-04-07,2006-07,0,REA,Reading,2,1,1,0,24121
LIV,2007-04-14,2006-07,0,MCI,Manchester City,0,0,0,0,45883
LIV,2007-04-18,2006-07,1,MID,Middlesbrough,2,0,2,0,43247
LIV,2007-04-21,2006-07,1,WIG,Wigan Athletic,2,0,2,0,45047
LIV,2007-04-28,2006-07,0,POR,Portsmouth,1,2,-1,0,20218
LIV,2007-05-05,2006-07,0,FUL,Fulham,0,1,-1,0,24554
LIV,2007-05-13,2006-07,1,CHA,Charlton Athletic,2,2,0,0,44657
LIV,2007-08-11,2007-08,0,AVL,Aston Villa,2,1,1,0,
LIV,2007-08-19,2007-08,1,CHE,Chelsea,1,1,0,0,
LIV,2007-08-25,2007-08,0,SUN,Sunderland,2,0,2,0,
LIV,2007-09-01,2007-08,1,DER,Derby County,6,0,6,0,
LIV,2007-09-15,2007-08,0,POR,Portsmouth,0,0,0,0,
LIV,2007-09-22,2007-08,1,BIR,Birmingham City,0,0,0,0,
LIV,2007-09-29,2007-08,0,WIG,Wigan Athletic,1,0,1,0,
LIV,2007-10-07,2007-08,1,TOT,Tottenham Hotspur,2,2,0,0,
LIV,2007-10-20,2007-08,0,EVE,Everton,2,1,1,0,
LIV,2007-10-28,2007-08,1,ARS,Arsenal,1,1,0,0,
LIV,2007-11-03,2007-08,0,BLA,Blackburn Rovers,0,0,0,0,
LIV,2007-11-10,2007-08,1,FUL,Fulham,2,0,2,0,
LIV,2007-11-24,2007-08,0,NEW,Newcastle United,3,0,3,0,
LIV,2007-12-02,2007-08,1,BOL,Bolton Wanderers,4,0,4,0,
LIV,2007-12-08,2007-08,0,REA,Reading,1,3,-2,0,
LIV,2007-12-16,2007-08,1,MUN,Manchester United,0,1,-1,0,
LIV,2007-12-22,2007-08,1,POR,Portsmouth,4,1,3,0,
LIV,2007-12-26,2007-08,0,DER,Derby County,2,1,1,0,
LIV,2007-12-30,2007-08,0,MCI,Manchester City,0,0,0,0,
LIV,2008-01-02,2007-08,1,WIG,Wigan Athletic,1,1,0,0,
LIV,2008-01-12,2007-08,0,MID,Middlesbrough,1,1,0,0,
LIV,2008-01-21,2007-08,1,AVL,Aston Villa,2,2,0,0,
LIV,2008-01-30,2007-08,0,WHU,West Ham United,0,1,-1,0,
LIV,2008-02-02,2007-08,1,SUN,Sunderland,3,0,3,0,
LIV,2008-02-10,2007-08,0,CHE,Chelsea,0,0,0,0,
LIV,2008-02-23,2007-08,1,MID,Middlesbrough,3,2,1,0,
LIV,2008-03-02,2007-08,0,BOL,Bolton Wanderers,3,1,2,0,
LIV,2008-03-05,2007-08,1,WHU,West Ham United,4,0,4,0,
LIV,2008-03-08,2007-08,1,NEW,Newcastle United,3,0,3,0,
LIV,2008-03-15,2007-08,1,REA,Reading,2,1,1,0,
LIV,2008-03-23,2007-08,0,MUN,Manchester United,0,3,-3,1,
LIV,2008-03-30,2007-08,1,EVE,Everton,1,0,1,0,
LIV,2008-04-05,2007-08,0,ARS,Arsenal,1,1,0,0,
LIV,2008-04-13,2007-08,1,BLA,Blackburn Rovers,3,1,2,0,
LIV,2008-04-19,2007-08,0,FUL,Fulham,2,0,2,0,
LIV,2008-04-26,2007-08,0,BIR,Birmingham City,2,2,0,0,
LIV,2008-05-04,2007-08,1,MCI,Manchester City,1,0,1,0,
LIV,2008-05-11,2007-08,0,TOT,Tottenham Hotspur,2,0,2,0,
LIV,2008-08-16,2008-09,0,SUN,Sunderland,1,0,1,0,
LIV,2008-08-23,2008-09,1,MID,Middlesbrough,2,1,1,0,
LIV,2008-08-31,2008-09,0,AVL,Aston Villa,0,0,0,0,
LIV,2008-09-13,2008-09,1,MUN,Manchester United,2,1,1,0,
LIV,2008-09-20,2008-09,1,STO,Stoke City,0,0,0,0,
LIV,2008-09-27,2008-09,0,EVE,Everton,2,0,2,0,
LIV,2008-10-05,2008-09,0,MCI,Manchester City,3,2,1,0,
LIV,2008-10-18,2008-09,1,WIG,Wigan Athletic,3,2,1,0,
LIV,2008-10-26,2008-09,0,CHE,Chelsea,1,0,1,0,
LIV,2008-10-29,2008-09,1,POR,Portsmouth,1,0,1,0,
LIV,2008-11-01,2008-09,0,TOT,Tottenham Hotspur,1,2,-1,0,
LIV,2008-11-08,2008-09,1,WBA,West Bromwich Albion,3,0,3,0,
LIV,2008-11-15,2008-09,0,BOL,Bolton Wanderers,2,0,2,0,
LIV,2008-11-22,2008-09,1,FUL,Fulham,0,0,0,0,44066
LIV,2008-12-01,2008-09,1,WHU,West Ham United,0,0,0,0,
LIV,2008-12-06,2008-09,0,BLA,Blackburn Rovers,3,1,2,0,26920
LIV,2008-12-13,2008-09,1,HUL,Hull City,2,2,0,0,43835
LIV,2008-12-21,2008-09,0,ARS,Arsenal,1,1,0,0,60094
LIV,2008-12-26,2008-09,1,BOL,Bolton Wanderers,3,0,3,0,43548
LIV,2008-12-28,2008-09,0,NEW,Newcastle United,5,1,4,0,52114
LIV,2009-01-10,2008-09,0,STO,Stoke City,0,0,0,0,27500
LIV,2009-01-19,2008-09,1,EVE,Everton,1,1,0,0,44382
LIV,2009-01-28,2008-09,0,WIG,Wigan Athletic,1,1,0,0,21237
LIV,2009-02-01,2008-09,1,CHE,Chelsea,2,0,2,0,44174
LIV,2009-02-07,2008-09,0,POR,Portsmouth,3,2,1,0,20524
LIV,2009-02-22,2008-09,1,MCI,Manchester City,1,1,0,0,44259
LIV,2009-02-28,2008-09,0,MID,Middlesbrough,0,2,-2,0,33724
LIV,2009-03-03,2008-09,1,SUN,Sunderland,2,0,2,0,
LIV,2009-03-14,2008-09,0,MUN,Manchester United,4,1,3,0,75569
LIV,2009-03-22,2008-09,1,AVL,Aston Villa,5,0,5,0,44131
LIV,2009-04-04,2008-09,0,FUL,Fulham,1,0,1,0,25661
LIV,2009-04-11,2008-09,1,BLA,Blackburn Rovers,4,0,4,0,43466
LIV,2009-04-21,2008-09,1,ARS,Arsenal,4,4,0,0,44424
LIV,2009-04-25,2008-09,0,HUL,Hull City,3,1,2,0,24942
LIV,2009-05-03,2008-09,1,NEW,Newcastle United,3,0,3,0,44121
LIV,2009-05-09,2008-09,0,WHU,West Ham United,3,0,3,0,34951
LIV,2009-05-17,2008-09,0,WBA,West Bromwich Albion,2,0,2,0,26138
LIV,2009-05-24,2008-09,1,TOT,Tottenham Hotspur,3,1,2,0,43937
LIV,2009-08-16,2009-10,0,TOT,Tottenham Hotspur,1,2,-1,0,35935
LIV,2009-08-19,2009-10,1,STO,Stoke City,4,0,4,0,44318
LIV,2009-08-24,2009-10,1,AVL,Aston Villa,1,3,-2,0,43667
LIV,2009-08-29,2009-10,0,BOL,Bolton Wanderers,3,2,1,0,23284
LIV,2009-09-12,2009-10,1,BUR,Burnley,4,0,4,0,43817
LIV,2009-09-19,2009-10,0,WHU,West Ham United,3,2,1,0,34658
LIV,2009-09-26,2009-10,1,HUL,Hull City,6,1,5,0,44392
LIV,2009-10-04,2009-10,0,CHE,Chelsea,0,2,-2,0,41732
LIV,2009-10-17,2009-10,0,SUN,Sunderland,0,1,-1,0,47327
LIV,2009-10-25,2009-10,1,MUN,Manchester United,2,0,2,1,44188
LIV,2009-10-31,2009-10,0,FUL,Fulham,1,3,-2,2,25700
LIV,2009-11-09,2009-10,1,BIR,Birmingham City,2,2,0,0,42560
LIV,2009-11-21,2009-10,1,MCI,Manchester City,2,2,0,0,44164
LIV,2009-11-29,2009-10,0,EVE,Everton,2,0,2,0,39652
LIV,2009-12-05,2009-10,0,BLA,Blackburn Rovers,0,0,0,0,29660
LIV,2009-12-13,2009-10,1,ARS,Arsenal,1,2,-1,0,43853
LIV,2009-12-16,2009-10,1,WIG,Wigan Athletic,2,1,1,0,41116
LIV,2009-12-19,2009-10,0,POR,Portsmouth,0,2,-2,1,20534
LIV,2009-12-26,2009-10,1,WOL,Wolverhampton Wanderers,2,0,2,0,41956
LIV,2009-12-29,2009-10,0,AVL,Aston Villa,1,0,1,0,42788
LIV,2010-01-16,2009-10,0,STO,Stoke City,1,1,0,0,27247
LIV,2010-01-20,2009-10,1,TOT,Tottenham Hotspur,2,0,2,0,42016
LIV,2010-01-26,2009-10,0,WOL,Wolverhampton Wanderers,0,0,0,0,28763
LIV,2010-01-30,2009-10,1,BOL,Bolton Wanderers,2,0,2,0,43413
LIV,2010-02-06,2009-10,1,EVE,Everton,1,0,1,1,44316
LIV,2010-02-10,2009-10,0,ARS,Arsenal,0,1,-1,0,60045
LIV,2010-02-21,2009-10,0,MCI,Manchester City,0,0,0,0,47203
LIV,2010-02-28,2009-10,1,BLA,Blackburn Rovers,2,1,1,0,42795
LIV,2010-03-08,2009-10,0,WIG,Wigan Athletic,0,1,-1,0,17427
LIV,2010-03-15,2009-10,1,POR,Portsmouth,4,1,3,0,40316
LIV,2010-03-21,2009-10,0,MUN,Manchester United,1,2,-1,0,75216
LIV,2010-03-28,2009-10,1,SUN,Sunderland,3,0,3,0,43121
LIV,2010-04-04,2009-10,0,BIR,Birmingham City,1,1,0,0,27909
LIV,2010-04-11,2009-10,1,FUL,Fulham,0,0,0,0,42331
LIV,2010-04-19,2009-10,1,WHU,West Ham United,3,0,3,0,37697
LIV,2010-04-25,2009-10,0,BUR,Burnley,4,0,4,0,21553
LIV,2010-05-02,2009-10,1,CHE,Chelsea,0,2,-2,0,44375
LIV,2010-05-09,2009-10,0,HUL,Hull City,0,0,0,0,25030
LIV,2010-08-15,2010-11,1,ARS,Arsenal,1,1,0,1,44722
LIV,2010-08-23,2010-11,0,MCI,Manchester City,0,3,-3,0,47087
LIV,2010-08-29,2010-11,1,WBA,West Bromwich Albion,1,0,1,0,41194
LIV,2010-09-12,2010-11,0,BIR,Birmingham City,0,0,0,0,27333
LIV,2010-09-19,2010-11,0,MUN,Manchester United,2,3,-1,0,75213
LIV,2010-09-25,2010-11,1,SUN,Sunderland,2,2,0,0,43626
LIV,2010-10-03,2010-11,1,BPL,Blackpool,1,2,-1,0,43156
LIV,2010-10-17,2010-11,0,EVE,Everton,0,2,-2,0,39673
LIV,2010-10-24,2010-11,1,BLA,Blackburn Rovers,2,1,1,0,43328
LIV,2010-10-31,2010-11,0,BOL,Bolton Wanderers,1,0,1,0,25171
LIV,2010-11-07,2010-11,1,CHE,Chelsea,2,0,2,0,44238
LIV,2010-11-10,2010-11,0,WIG,Wigan Athletic,1,1,0,0,16754
LIV,2010-11-13,2010-11,0,STO,Stoke City,0,2,-2,1,27286
LIV,2010-11-20,2010-11,1,WHU,West Ham United,3,0,3,0,43024
LIV,2010-11-28,2010-11,0,TOT,Tottenham Hotspur,1,2,-1,0,35962
LIV,2010-12-06,2010-11,1,AVL,Aston Villa,3,0,3,0,39079
LIV,2010-12-11,2010-11,0,NEW,Newcastle United,1,3,-2,0,50137
LIV,2010-12-29,2010-11,1,WOL,Wolverhampton Wanderers,0,1,-1,0,41614
LIV,2011-01-01,2010-11,1,BOL,Bolton Wanderers,2,1,1,0,35400
LIV,2011-01-05,2010-11,0,BLA,Blackburn Rovers,1,3,-2,0,24522
LIV,2011-01-12,2010-11,0,BPL,Blackpool,1,2,-1,0,16089
LIV,2011-01-16,2010-11,1,EVE,Everton,2,2,0,0,44795
LIV,2011-01-22,2010-11,0,WOL,Wolverhampton Wanderers,3,0,3,0,28869
LIV,2011-01-26,2010-11,1,FUL,Fulham,1,0,1,0,40466
LIV,2011-02-02,2010-11,1,STO,Stoke City,2,0,2,0,40254
LIV,2011-02-06,2010-11,0,CHE,Chelsea,1,0,1,0,41829
LIV,2011-02-12,2010-11,1,WIG,Wigan Athletic,1,1,0,0,44609
LIV,2011-02-27,2010-11,0,WHU,West Ham United,1,3,-2,0,34941
LIV,2011-03-06,2010-11,1,MUN,Manchester United,3,1,2,0,44753
LIV,2011-03-20,2010-11,0,SUN,Sunderland,2,0,2,0,47207
LIV,2011-04-02,2010-11,0,WBA,West Bromwich Albion,1,2,-1,0,26196
LIV,2011-04-11,2010-11,1,MCI,Manchester City,3,0,3,0,44776
LIV,2011-04-17,2010-11,0,ARS,Arsenal,1,1,0,0,60029
LIV,2011-04-23,2010-11,1,BIR,Birmingham City,5,0,5,0,44734
LIV,2011-05-01,2010-11,1,NEW,Newcastle United,3,0,3,0,44923
LIV,2011-05-09,2010-11,0,FUL,Fulham,5,2,3,0,25693
LIV,2011-05-15,2010-11,1,TOT,Tottenham Hotspur,0,2,-2,0,44893
LIV,2011-05-22,2010-11,0,AVL,Aston Villa,0,1,-1,0,42785
LIV,2011-08-13,2011-12,1,SUN,Sunderland,1,1,0,0,45018
LIV,2011-08-20,2011-12,0,ARS,Arsenal,2,0,2,0,60090
LIV,2011-08-27,2011-12,1,BOL,Bolton Wanderers,3,1,2,0,44725
LIV,2011-09-10,2011-12,0,STO,Stoke City,0,1,-1,0,27592
LIV,2011-09-18,2011-12,0,TOT,Tottenham Hotspur,0,4,-4,2,36129
LIV,2011-09-24,2011-12,1,WOL,Wolverhampton Wanderers,2,1,1,0,44922
LIV,2011-10-01,2011-12,0,EVE,Everton,2,0,2,0,39510
LIV,2011-10-15,2011-12,1,MUN,Manchester United,1,1,0,0,45065
LIV,2011-10-22,2011-12,1,NOR,Norwich City,1,1,0,0,44931
LIV,2011-10-29,2011-12,0,WBA,West Bromwich Albion,2,0,2,0,25522
LIV,2011-11-05,2011-12,1,SWA,Swansea City,0,0,0,0,45013
LIV,2011-11-20,2011-12,0,CHE,Chelsea,2,1,1,0,41820
LIV,2011-11-27,2011-12,1,MCI,Manchester City,1,1,0,0,45071
LIV,2011-12-05,2011-12,0,FUL,Fulham,0,1,-1,1,25688
LIV,2011-12-10,2011-12,1,QPR,Queens Park Rangers,1,0,1,0,45016
LIV,2011-12-18,2011-12,0,AVL,Aston Villa,2,0,2,0,37460
LIV,2011-12-21,2011-12,0,WIG,Wigan Athletic,0,0,0,0,19230
LIV,2011-12-26,2011-12,1,BLA,Blackburn Rovers,1,1,0,0,44441
LIV,2011-12-30,2011-12,1,NEW,Newcastle United,3,1,2,0,44372
LIV,2012-01-03,2011-12,0,MCI,Manchester City,0,3,-3,0,47131
LIV,2012-01-14,2011-12,1,STO,Stoke City,0,0,0,0,44691
LIV,2012-01-21,2011-12,0,BOL,Bolton Wanderers,1,3,-2,0,26854
LIV,2012-01-31,2011-12,0,WOL,Wolverhampton Wanderers,3,0,3,0,27447
LIV,2012-02-06,2011-12,1,TOT,Tottenham Hotspur,0,0,0,0,44461
LIV,2012-02-11,2011-12,0,MUN,Manchester United,1,2,-1,0,74844
LIV,2012-03-03,2011-12,1,ARS,Arsenal,1,2,-1,0,44922
LIV,2012-03-10,2011-12,0,SUN,Sunderland,0,1,-1,0,41661
LIV,2012-03-13,2011-12,1,EVE,Everton,3,0,3,0,44921
LIV,2012-03-21,2011-12,0,QPR,Queens Park Rangers,2,3,-1,0,18033
LIV,2012-03-24,2011-12,1,WIG,Wigan Athletic,1,2,-1,0,44431
LIV,2012-04-01,2011-12,0,NEW,Newcastle United,0,2,-2,1,52363
LIV,2012-04-07,2011-12,1,AVL,Aston Villa,1,1,0,0,44321
LIV,2012-04-10,2011-12,0,BLA,Blackburn Rovers,3,2,1,1,23571
LIV,2012-04-22,2011-12,1,WBA,West Bromwich Albion,0,1,-1,0,43660
LIV,2012-04-28,2011-12,0,NOR,Norwich City,3,0,3,0,26819
LIV,2012-05-01,2011-12,1,FUL,Fulham,0,1,-1,0,40106
LIV,2012-05-08,2011-12,1,CHE,Chelsea,4,1,3,0,40721
LIV,2012-05-13,2011-12,0,SWA,Swansea City,0,1,-1,0,20605
LIV,2012-08-18,2012-13,0,WBA,West Bromwich Albion,0,3,-3,1,26039
LIV,2012-08-26,2012-13,1,MCI,Manchester City,2,2,0,0,44942
LIV,2012-09-02,2012-13,1,ARS,Arsenal,0,2,-2,0,44932
LIV,2012-09-15,2012-13,0,SUN,Sunderland,1,1,0,0,41997
LIV,2012-09-23,2012-13,1,MUN,Manchester United,1,2,-1,1,44263
LIV,2012-09-29,2012-13,0,NOR,Norwich City,5,2,3,0,26831
LIV,2012-10-07,2012-13,1,STO,Stoke City,0,0,0,0,44531
LIV,2012-10-20,2012-13,1,REA,Reading,1,0,1,0,44874
LIV,2012-10-28,2012-13,0,EVE,Everton,2,2,0,0,39613
LIV,2012-11-04,2012-13,1,NEW,Newcastle United,1,1,0,0,44803
LIV,2012-11-11,2012-13,0,CHE,Chelsea,1,1,0,0,41627
LIV,2012-11-17,2012-13,1,WIG,Wigan Athletic,3,0,3,0,44913
LIV,2012-11-25,2012-13,0,SWA,Swansea City,0,0,0,0,20621
LIV,2012-11-28,2012-13,0,TOT,Tottenham Hotspur,1,2,-1,0,36162
LIV,2012-12-01,2012-13,1,SOU,Southampton,1,0,1,0,44525
LIV,2012-12-09,2012-13,0,WHU,West Ham United,3,2,1,0,35005
LIV,2012-12-15,2012-13,1,AVL,Aston Villa,1,3,-2,0,44607
LIV,2012-12-22,2012-13,1,FUL,Fulham,4,0,4,0,44570
LIV,2012-12-26,2012-13,0,STO,Stoke City,1,3,-2,0,27490
LIV,2012-12-30,2012-13,0,QPR,Queens Park Rangers,3,0,3,0,18304
LIV,2013-01-02,2012-13,1,SUN,Sunderland,3,0,3,0,44228
LIV,2013-01-13,2012-13,0,MUN,Manchester United,1,2,-1,0,75501
LIV,2013-01-19,2012-13,1,NOR,Norwich City,5,0,5,0,44901
LIV,2013-01-30,2012-13,0,ARS,Arsenal,2,2,0,0,60089
LIV,2013-02-03,2012-13,0,MCI,Manchester City,2,2,0,0,47301
LIV,2013-02-11,2012-13,1,WBA,West Bromwich Albion,0,2,-2,0,44752
LIV,2013-02-17,2012-13,1,SWA,Swansea City,5,0,5,0,44832
LIV,2013-03-02,2012-13,0,WIG,Wigan Athletic,4,0,4,0,20804
LIV,2013-03-10,2012-13,1,TOT,Tottenham Hotspur,3,2,1,0,44752
LIV,2013-03-16,2012-13,0,SOU,Southampton,1,3,-2,0,32070
LIV,2013-03-31,2012-13,0,AVL,Aston Villa,2,1,1,0,42037
LIV,2013-04-07,2012-13,1,WHU,West Ham United,0,0,0,0,45007
LIV,2013-04-13,2012-13,0,REA,Reading,0,0,0,0,24139
LIV,2013-04-21,2012-13,1,CHE,Chelsea,2,2,0,0,45009
LIV,2013-04-27,2012-13,0,NEW,Newcastle United,6,0,6,0,52351
LIV,2013-05-05,2012-13,1,EVE,Everton,0,0,0,0,44991
LIV,2013-05-12,2012-13,0,FUL,Fulham,3,1,2,0,25640
LIV,2013-05-19,2012-13,1,QPR,Queens Park Rangers,1,0,1,0,44792
LIV,2013-08-17,2013-14,1,STO,Stoke City,1,0,1,0,44822
LIV,2013-08-24,2013-14,0,AVL,Aston Villa,1,0,1,0,42098
LIV,2013-09-01,2013-14,1,MUN,Manchester United,1,0,1,0,44411
LIV,2013-09-16,2013-14,0,SWA,Swansea City,2,2,0,0,20752
LIV,2013-09-21,2013-14,1,SOU,Southampton,0,1,-1,0,44755
LIV,2013-09-29,2013-14,0,SUN,Sunderland,3,1,2,0,41415
LIV,2013-10-05,2013-14,1,CRY,Crystal Palace,3,1,2,0,44721
LIV,2013-10-19,2013-14,0,NEW,Newcastle United,2,2,0,0,51703
LIV,2013-10-26,2013-14,1,WBA,West Bromwich Albion,4,1,3,0,44747
LIV,2013-11-02,2013-14,0,ARS,Arsenal,0,2,-2,0,60042
LIV,2013-11-09,2013-14,1,FUL,Fulham,4,0,4,0,44768
LIV,2013-11-23,2013-14,0,EVE,Everton,3,3,0,0,39576
LIV,2013-12-01,2013-14,0,HUL,Hull City,1,3,-2,0,24940
LIV,2013-12-04,2013-14,1,NOR,Norwich City,5,1,4,0,44541
LIV,2013-12-07,2013-14,1,WHU,West Ham United,4,1,3,0,44781
LIV,2013-12-15,2013-14,0,TOT,Tottenham Hotspur,5,0,5,0,36069
LIV,2013-12-21,2013-14,1,CAR,Cardiff City,3,1,2,0,44621
LIV,2013-12-26,2013-14,0,MCI,Manchester City,1,2,-1,0,47351
LIV,2013-12-29,2013-14,0,CHE,Chelsea,1,2,-1,0,41614
LIV,2014-01-01,2013-14,1,HUL,Hull City,2,0,2,0,44627
LIV,2014-01-12,2013-14,0,STO,Stoke City,5,3,2,0,27160
LIV,2014-01-18,2013-14,1,AVL,Aston Villa,2,2,0,0,44737
LIV,2014-01-28,2013-14,1,EVE,Everton,4,0,4,0,44450
LIV,2014-02-02,2013-14,0,WBA,West Bromwich Albion,1,1,0,0,26132
LIV,2014-02-08,2013-14,1,ARS,Arsenal,5,1,4,0,44701
LIV,2014-02-12,2013-14,0,FUL,Fulham,3,2,1,0,25375
LIV,2014-02-23,2013-14,1,SWA,Swansea City,4,3,1,0,44731
LIV,2014-03-01,2013-14,0,SOU,Southampton,3,0,3,0,31659
LIV,2014-03-16,2013-14,0,MUN,Manchester United,3,0,3,0,75225
LIV,2014-03-22,2013-14,0,CAR,Cardiff City,6,3,3,0,28018
LIV,2014-03-26,2013-14,1,SUN,Sunderland,2,1,1,0,44524
LIV,2014-03-30,2013-14,1,TOT,Tottenham Hotspur,4,0,4,0,44762
LIV,2014-04-06,2013-14,0,WHU,West Ham United,2,1,1,0,34977
LIV,2014-04-13,2013-14,1,MCI,Manchester City,3,2,1,1,44601
LIV,2014-04-20,2013-14,0,NOR,Norwich City,3,2,1,0,26857
LIV,2014-04-27,2013-14,1,CHE,Chelsea,0,2,-2,0,44726
LIV,2014-05-05,2013-14,0,CRY,Crystal Palace,3,3,0,0,25261
LIV,2014-05-11,2013-14,1,NEW,Newcastle United,2,1,1,0,44724
LIV,2014-08-17,2014-15,1,SOU,Southampton,2,1,1,0,44736
LIV,2014-08-25,2014-15,0,MCI,Manchester City,1,3,-2,0,45471
LIV,2014-08-31,2014-15,0,TOT,Tottenham Hotspur,3,0,3,0,36130
LIV,2014-09-13,2014-15,1,AVL,Aston Villa,0,1,-1,0,44689
LIV,2014-09-20,2014-15,0,WHU,West Ham United,1,3,-2,0,34977
LIV,2014-09-27,2014-15,1,EVE,Everton,1,1,0,0,44511
LIV,2014-10-04,2014-15,1,WBA,West Bromwich Albion,2,1,1,0,44708
LIV,2014-10-19,2014-15,0,QPR,Queens Park Rangers,3,2,1,0,18069
LIV,2014-10-25,2014-15,1,HUL,Hull City,0,0,0,0,44591
LIV,2014-11-01,2014-15,0,NEW,Newcastle United,0,1,-1,0,52166
LIV,2014-11-08,2014-15,1,CHE,Chelsea,1,2,-1,0,44698
LIV,2014-11-23,2014-15,0,CRY,Crystal Palace,1,3,-2,0,24862
LIV,2014-11-29,2014-15,1,STO,Stoke City,1,0,1,0,44735
LIV,2014-12-02,2014-15,0,LEI,Leicester City,3,1,2,0,32000
LIV,2014-12-06,2014-15,1,SUN,Sunderland,0,0,0,0,44716
LIV,2014-12-14,2014-15,0,MUN,Manchester United,0,3,-3,0,75331
LIV,2014-12-21,2014-15,1,ARS,Arsenal,2,2,0,1,44703
LIV,2014-12-26,2014-15,0,BUR,Burnley,1,0,1,0,21335
LIV,2014-12-29,2014-15,1,SWA,Swansea City,4,1,3,0,44714
LIV,2015-01-01,2014-15,1,LEI,Leicester City,2,2,0,0,44720
LIV,2015-01-10,2014-15,0,SUN,Sunderland,1,0,1,0,45369
LIV,2015-01-17,2014-15,0,AVL,Aston Villa,2,0,2,0,39758
LIV,2015-01-31,2014-15,1,WHU,West Ham United,2,0,2,0,44718
LIV,2015-02-07,2014-15,0,EVE,Everton,0,0,0,0,39621
LIV,2015-02-10,2014-15,1,TOT,Tottenham Hotspur,3,2,1,0,44577
LIV,2015-02-22,2014-15,0,SOU,Southampton,2,0,2,0,31723
LIV,2015-03-01,2014-15,1,MCI,Manchester City,2,1,1,0,44590
LIV,2015-03-04,2014-15,1,BUR,Burnley,2,0,2,0,44717
LIV,2015-03-16,2014-15,0,SWA,Swansea City,1,0,1,0,20828
LIV,2015-03-22,2014-15,1,MUN,Manchester United,1,2,-1,1,44405
LIV,2015-04-04,2014-15,0,ARS,Arsenal,1,4,-3,1,60081
LIV,2015-04-13,2014-15,1,NEW,Newcastle United,2,0,2,0,44611
LIV,2015-04-25,2014-15,0,WBA,West Bromwich Albion,0,0,0,0,26663
LIV,2015-04-28,2014-15,0,HUL,Hull City,0,1,-1,0,24843
LIV,2015-05-02,2014-15,1,QPR,Queens Park Rangers,2,1,1,0,44707
LIV,2015-05-10,2014-15,0,CHE,Chelsea,1,1,0,0,41547
LIV,2015-05-16,2014-15,1,CRY,Crystal Palace,1,3,-2,0,44673
LIV,2015-05-24,2014-15,0,STO,Stoke City,1,6,-5,0,27602
LIV,2015-08-09,2015-16,0,STO,Stoke City,1,0,1,0,27654
LIV,2015-08-17,2015-16,1,BOU,Bournemouth,1,0,1,0,44102
LIV,2015-08-24,2015-16,0,ARS,Arsenal,0,0,0,0,60080
LIV,2015-08-29,2015-16,1,WHU,West Ham United,0,3,-3,1,43680
LIV,2015-09-12,2015-16,0,MUN,Manchester United,1,3,-2,0,75347
LIV,2015-09-20,2015-16,1,NOR,Norwich City,1,1,0,0,44072
LIV,2015-09-26,2015-16,1,AVL,Aston Villa,3,2,1,0,44228
LIV,2015-10-04,2015-16,0,EVE,Everton,1,1,0,0,39598
LIV,2015-10-17,2015-16,0,TOT,Tottenham Hotspur,0,0,0,0,35926
LIV,2015-10-25,2015-16,1,SOU,Southampton,1,1,0,0,44171
LIV,2015-10-31,2015-16,0,CHE,Chelsea,3,1,2,0,41577
LIV,2015-11-08,2015-16,1,CRY,Crystal Palace,1,2,-1,0,44115
LIV,2015-11-21,2015-16,0,MCI,Manchester City,4,1,3,0,54444
LIV,2015-11-29,2015-16,1,SWA,Swansea City,1,0,1,0,43905
LIV,2015-12-06,2015-16,0,NEW,Newcastle United,0,2,-2,0,51273
LIV,2015-12-13,2015-16,1,WBA,West Bromwich Albion,2,2,0,0,44147
LIV,2015-12-20,2015-16,0,WAT,Watford,0,3,-3,0,20707
LIV,2015-12-26,2015-16,1,LEI,Leicester City,1,0,1,0,44123
LIV,2015-12-30,2015-16,0,SUN,Sunderland,1,0,1,0,45765
LIV,2016-01-02,2015-16,0,WHU,West Ham United,0,2,-2,0,34977
LIV,2016-01-13,2015-16,1,ARS,Arsenal,3,3,0,0,44109
LIV,2016-01-17,2015-16,1,MUN,Manchester United,0,1,-1,0,43865
LIV,2016-01-23,2015-16,0,NOR,Norwich City,5,4,1,0,27108
LIV,2016-02-02,2015-16,0,LEI,Leicester City,0,2,-2,0,32121
LIV,2016-02-06,2015-16,1,SUN,Sunderland,2,2,0,0,44179
LIV,2016-02-14,2015-16,0,AVL,Aston Villa,6,0,6,0,35798
LIV,2016-03-02,2015-16,1,MCI,Manchester City,3,0,3,0,43597
LIV,2016-03-06,2015-16,0,CRY,Crystal Palace,2,1,1,1,24709
LIV,2016-03-20,2015-16,0,SOU,Southampton,2,3,-1,0,31596
LIV,2016-04-02,2015-16,1,TOT,Tottenham Hotspur,1,1,0,0,44062
LIV,2016-04-10,2015-16,1,STO,Stoke City,4,1,3,0,43688
LIV,2016-04-17,2015-16,0,BOU,Bournemouth,2,1,1,0,11386
LIV,2016-04-20,2015-16,1,EVE,Everton,4,0,4,0,43854
LIV,2016-04-23,2015-16,1,NEW,Newcastle United,2,2,0,0,43837
LIV,2016-05-01,2015-16,0,SWA,Swansea City,1,3,-2,1,20972
LIV,2016-05-08,2015-16,1,WAT,Watford,2,0,2,0,43341
LIV,2016-05-11,2015-16,1,CHE,Chelsea,1,1,0,0,43210
LIV,2016-05-15,2015-16,0,WBA,West Bromwich Albion,1,1,0,0,26196
LIV,2016-08-14,2016-17,0,ARS,Arsenal,4,3,1,0,60033
LIV,2016-08-20,2016-17,0,BUR,Burnley,0,2,-2,0,21313
LIV,2016-08-27,2016-17,0,TOT,Tottenham Hotspur,1,1,0,0,31211
LIV,2016-09-10,2016-17,1,LEI,Leicester City,4,1,3,0,51232
LIV,2016-09-16,2016-17,0,CHE,Chelsea,2,1,1,0,41514
LIV,2016-09-24,2016-17,1,HUL,Hull City,5,1,4,0,53109
LIV,2016-10-01,2016-17,0,SWA,Swansea City,2,1,1,0,20862
LIV,2016-10-17,2016-17,1,MUN,Manchester United,0,0,0,0,52769
LIV,2016-10-22,2016-17,1,WBA,West Bromwich Albion,2,1,1,0,53218
LIV,2016-10-29,2016-17,0,CRY,Crystal Palace,4,2,2,0,25628
LIV,2016-11-06,2016-17,1,WAT,Watford,6,1,5,0,53163
LIV,2016-11-19,2016-17,0,SOU,Southampton,0,0,0,0,31848
LIV,2016-11-26,2016-17,1,SUN,Sunderland,2,0,2,0,53114
LIV,2016-12-04,2016-17,0,BOU,Bournemouth,3,4,-1,0,11183
LIV,2016-12-11,2016-17,1,WHU,West Ham United,2,2,0,0,53068
LIV,2016-12-14,2016-17,0,MID,Middlesbrough,3,0,3,0,32704
LIV,2016-12-19,2016-17,0,EVE,Everton,1,0,1,0,39590
LIV,2016-12-27,2016-17,1,STO,Stoke City,4,1,3,0,53094
LIV,2016-12-31,2016-17,1,MCI,Manchester City,1,0,1,0,53120
LIV,2017-01-02,2016-17,0,SUN,Sunderland,2,2,0,0,46494
LIV,2017-01-15,2016-17,0,MUN,Manchester United,1,1,0,0,75276
LIV,2017-01-21,2016-17,1,SWA,Swansea City,2,3,-1,0,53169
LIV,2017-01-31,2016-17,1,CHE,Chelsea,1,1,0,0,53157
LIV,2017-02-04,2016-17,0,HUL,Hull City,0,2,-2,0,24822
LIV,2017-02-11,2016-17,1,TOT,Tottenham Hotspur,2,0,2,0,53159
LIV,2017-02-27,2016-17,0,LEI,Leicester City,1,3,-2,0,32034
LIV,2017-03-04,2016-17,1,ARS,Arsenal,3,1,2,0,53146
LIV,2017-03-12,2016-17,1,BUR,Burnley,2,1,1,0,53145
LIV,2017-03-19,2016-17,0,MCI,Manchester City,1,1,0,0,54449
LIV,2017-04-01,2016-17,1,EVE,Everton,3,1,2,0,52920
LIV,2017-04-05,2016-17,1,BOU,Bournemouth,2,2,0,0,53292
LIV,2017-04-08,2016-17,0,STO,Stoke City,2,1,1,0,27568
LIV,2017-04-16,2016-17,0,WBA,West Bromwich Albion,1,0,1,0,25669
LIV,2017-04-23,2016-17,1,CRY,Crystal Palace,1,2,-1,0,53086
LIV,2017-05-01,2016-17,0,WAT,Watford,1,0,1,0,20959
LIV,2017-05-07,2016-17,1,SOU,Southampton,0,0,0,0,53159
LIV,2017-05-14,2016-17,0,WHU,West Ham United,4,0,4,0,56985
LIV,2017-05-21,2016-17,1,MID,Middlesbrough,3,0,3,0,53191
LIV,2017-08-12,2017-18,0,WAT,Watford,3,3,0,0,20407
LIV,2017-08-19,2017-18,1,CRY,Crystal Palace,1,0,1,0,53138
LIV,2017-08-27,2017-18,1,ARS,Arsenal,4,0,4,0,53206
LIV,2017-09-09,2017-18,0,MCI,Manchester City,0,5,-5,1,54172
LIV,2017-09-16,2017-18,1,BUR,Burnley,1,1,0,0,53231
LIV,2017-09-23,2017-18,0,LEI,Leicester City,3,2,1,0,32004
LIV,2017-10-01,2017-18,0,NEW,Newcastle United,1,1,0,0,52303
LIV,2017-10-14,2017-18,1,MUN,Manchester United,0,0,0,0,52912
LIV,2017-10-22,2017-18,0,TOT,Tottenham Hotspur,1,4,-3,0,80827
LIV,2017-10-28,2017-18,1,HUD,Huddersfield Town,3,0,3,0,53268
LIV,2017-11-04,2017-18,0,WHU,West Ham United,4,1,3,0,56961
LIV,2017-11-18,2017-18,1,SOU,Southampton,3,0,3,0,53256
LIV,2017-11-25,2017-18,1,CHE,Chelsea,1,1,0,0,53225
LIV,2017-11-29,2017-18,0,STO,Stoke City,3,0,3,0,29423
LIV,2017-12-02,2017-18,0,BHA,Brighton and Hove Albion,5,1,4,0,30634
LIV,2017-12-10,2017-18,1,EVE,Everton,1,1,0,0,53082
LIV,2017-12-13,2017-18,1,WBA,West Bromwich Albion,0,0,0,0,53243
LIV,2017-12-17,2017-18,0,BOU,Bournemouth,4,0,4,0,10780
LIV,2017-12-22,2017-18,0,ARS,Arsenal,3,3,0,0,59409
LIV,2017-12-26,2017-18,1,SWA,Swansea City,5,0,5,0,52850
LIV,2017-12-30,2017-18,1,LEI,Leicester City,2,1,1,0,53226
LIV,2018-01-01,2017-18,0,BUR,Burnley,2,1,1,0,21756
LIV,2018-01-14,2017-18,1,MCI,Manchester City,4,3,1,0,53285
LIV,2018-01-22,2017-18,0,SWA,Swansea City,0,1,-1,0,20886
LIV,2018-01-30,2017-18,0,HUD,Huddersfield Town,3,0,3,0,24121
LIV,2018-02-04,2017-18,1,TOT,Tottenham Hotspur,2,2,0,0,53213
LIV,2018-02-11,2017-18,0,SOU,Southampton,2,0,2,0,31915
LIV,2018-02-24,2017-18,1,WHU,West Ham United,4,1,3,0,53256
LIV,2018-03-03,2017-18,1,NEW,Newcastle United,2,0,2,0,53287
LIV,2018-03-10,2017-18,0,MUN,Manchester United,1,2,-1,0,74855
LIV,2018-03-17,2017-18,1,WAT,Watford,5,0,5,0,53287
LIV,2018-03-31,2017-18,0,CRY,Crystal Palace,2,1,1,0,25807
LIV,2018-04-07,2017-18,0,EVE,Everton,0,0,0,0,39220
LIV,2018-04-14,2017-18,1,BOU,Bournemouth,3,0,3,0,52959
LIV,2018-04-21,2017-18,0,WBA,West Bromwich Albion,2,2,0,0,24520
LIV,2018-04-28,2017-18,1,STO,Stoke City,0,0,0,0,53255
LIV,2018-05-06,2017-18,0,CHE,Chelsea,0,1,-1,0,41314
LIV,2018-05-13,2017-18,1,BHA,Brighton and Hove Albion,4,0,4,0,50752
LIV,2018-08-12,2018-19,1,WHU,West Ham United,4,0,4,0,53235
LIV,2018-08-20,2018-19,0,CRY,Crystal Palace,2,0,2,0,25750
LIV,2018-08-25,2018-19,1,BHA,Brighton and Hove Albion,1,0,1,0,53294
LIV,2018-09-01,2018-19,0,LEI,Leicester City,2,1,1,0,32149
LIV,2018-09-15,2018-19,0,TOT,Tottenham Hotspur,2,1,1,0,80188
LIV,2018-09-22,2018-19,1,SOU,Southampton,3,0,3,0,50965
LIV,2018-09-29,2018-19,0,CHE,Chelsea,1,1,0,0,40625
LIV,2018-10-07,2018-19,1,MCI,Manchester City,0,0,0,0,52117
LIV,2018-10-20,2018-19,0,HUD,Huddersfield Town,1,0,1,0,24263
LIV,2018-10-27,2018-19,1,CAR,Cardiff City,4,1,3,0,53373
LIV,2018-11-03,2018-19,0,ARS,Arsenal,1,1,0,0,59993
LIV,2018-11-11,2018-19,1,FUL,Fulham,2,0,2,0,53128
LIV,2018-11-24,2018-19,0,WAT,Watford,3,0,3,1,20540
LIV,2018-12-02,2018-19,1,EVE,Everton,1,0,1,0,51756
LIV,2018-12-05,2018-19,0,BUR,Burnley,3,1,2,0,21741
LIV,2018-12-08,2018-19,0,BOU,Bournemouth,4,0,4,0,10752
LIV,2018-12-16,2018-19,1,MUN,Manchester United,3,1,2,0,52908
LIV,2018-12-21,2018-19,0,WOL,Wolverhampton Wanderers,2,0,2,0,31358
LIV,2018-12-26,2018-19,1,NEW,Newcastle United,4,0,4,0,53318
LIV,2018-12-29,2018-19,1,ARS,Arsenal,5,1,4,0,53326
LIV,2019-01-03,2018-19,0,MCI,Manchester City,1,2,-1,0,54511
LIV,2019-01-12,2018-19,0,BHA,Brighton and Hove Albion,1,0,1,0,30682
LIV,2019-01-19,2018-19,1,CRY,Crystal Palace,4,3,1,1,53171
LIV,2019-01-30,2018-19,1,LEI,Leicester City,1,1,0,0,53092
LIV,2019-02-04,2018-19,0,WHU,West Ham United,1,1,0,0,59903
LIV,2019-02-09,2018-19,1,BOU,Bournemouth,3,0,3,0,53178
LIV,2019-02-24,2018-19,0,MUN,Manchester United,0,0,0,0,74519
LIV,2019-02-27,2018-19,1,WAT,Watford,5,0,5,0,53316
LIV,2019-03-03,2018-19,0,EVE,Everton,0,0,0,0,39335
LIV,2019-03-10,2018-19,1,BUR,Burnley,4,2,2,0,53310
LIV,2019-03-17,2018-19,0,FUL,Fulham,2,1,1,0,25043
LIV,2019-03-31,2018-19,1,TOT,Tottenham Hotspur,2,1,1,0,53322
LIV,2019-04-05,2018-19,0,SOU,Southampton,3,1,2,0,31797
LIV,2019-04-14,2018-19,1,CHE,Chelsea,2,0,2,0,53279
LIV,2019-04-21,2018-19,0,CAR,Cardiff City,2,0,2,0,33082
LIV,2019-04-26,2018-19,1,HUD,Huddersfield Town,5,0,5,0,53249
LIV,2019-05-04,2018-19,0,NEW,Newcastle United,3,2,1,0,52206
LIV,2019-05-12,2018-19,1,WOL,Wolverhampton Wanderers,2,0,2,0,53331
LIV,2019-08-09,2019-20,1,NOR,Norwich City,4,1,3,0,53333
LIV,2019-08-17,2019-20,0,SOU,Southampton,2,1,1,0,31712
LIV,2019-08-24,2019-20,1,ARS,Arsenal,3,1,2,0,53298
LIV,2019-08-31,2019-20,0,BUR,Burnley,3,0,3,0,21762
LIV,2019-09-14,2019-20,1,NEW,Newcastle United,3,1,2,0,51430
LIV,2019-09-22,2019-20,0,CHE,Chelsea,2,1,1,0,40638
LIV,2019-09-28,2019-20,0,SHU,Sheffield United,1,0,1,0,31774
LIV,2019-10-05,2019-20,1,LEI,Leicester City,2,1,1,0,53322
LIV,2019-10-20,2019-20,0,MUN,Manchester United,1,1,0,0,73737
LIV,2019-10-27,2019-20,1,TOT,Tottenham Hotspur,2,1,1,0,53222
LIV,2019-11-02,2019-20,0,AVL,Aston Villa,2,1,1,0,41878
LIV,2019-11-10,2019-20,1,MCI,Manchester City,3,1,2,0,53324
LIV,2019-11-23,2019-20,0,CRY,Crystal Palace,2,1,1,0,25486
LIV,2019-11-30,2019-20,1,BHA,Brighton and Hove Albion,2,1,1,1,53319
LIV,2019-12-04,2019-20,1,EVE,Everton,5,2,3,0,53094
LIV,2019-12-07,2019-20,0,BOU,Bournemouth,3,0,3,0,10832
LIV,2019-12-14,2019-20,1,WAT,Watford,2,0,2,0,53311
LIV,2019-12-26,2019-20,0,LEI,Leicester City,4,0,4,0,32211
LIV,2019-12-29,2019-20,1,WOL,Wolverhampton Wanderers,1,0,1,0,53326
LIV,2020-01-02,2019-20,1,SHU,Sheffield United,2,0,2,0,53321
LIV,2020-01-11,2019-20,0,TOT,Tottenham Hotspur,1,0,1,0,61023
LIV,2020-01-19,2019-20,1,MUN,Manchester United,2,0,2,0,52916
LIV,2020-01-23,2019-20,0,WOL,Wolverhampton Wanderers,2,1,1,0,31746
LIV,2020-01-29,2019-20,0,WHU,West Ham United,2,0,2,0,59959
LIV,2020-02-01,2019-20,1,SOU,Southampton,4,0,4,0,53291
LIV,2020-02-15,2019-20,0,NOR,Norwich City,1,0,1,0,27110
LIV,2020-02-24,2019-20,1,WHU,West Ham United,3,2,1,0,53313
LIV,2020-02-29,2019-20,0,WAT,Watford,0,3,-3,0,21634
LIV,2020-03-07,2019-20,1,BOU,Bournemouth,2,1,1,0,53323
LIV,2020-06-21,2019-20,0,EVE,Everton,0,0,0,0,
LIV,2020-06-24,2019-20,1,CRY,Crystal Palace,4,0,4,0,
LIV,2020-07-02,2019-20,0,MCI,Manchester City,0,4,-4,0,
LIV,2020-07-05,2019-20,1,AVL,Aston Villa,2,0,2,0,
LIV,2020-07-08,2019-20,0,BHA,Brighton and Hove Albion,3,1,2,0,
LIV,2020-07-11,2019-20,1,BUR,Burnley,1,1,0,0,
LIV,2020-07-15,2019-20,0,ARS,Arsenal,1,2,-1,0,
LIV,2020-07-22,2019-20,1,CHE,Chelsea,5,3,2,0,
LIV,2020-07-26,2019-20,0,NEW,Newcastle United,3,1,2,0,
LIV,2020-09-12,2020-21,1,LEE,Leeds United,4,3,1,0,
LIV,2020-09-20,2020-21,0,CHE,Chelsea,2,0,2,0,
LIV,2020-09-28,2020-21,1,ARS,Arsenal,3,1,2,0,
LIV,2020-10-04,2020-21,0,AVL,Aston Villa,2,7,-5,0,
LIV,2020-10-17,2020-21,0,EVE,Everton,2,2,0,0,
LIV,2020-10-24,2020-21,1,SHU,Sheffield United,2,1,1,0,
LIV,2020-10-31,2020-21,1,WHU,West Ham United,2,1,1,0,
LIV,2020-11-08,2020-21,0,MCI,Manchester City,1,1,0,0,
LIV,2020-11-22,2020-21,1,LEI,Leicester City,3,0,3,0,
LIV,2020-11-28,2020-21,0,BHA,Brighton and Hove Albion,1,1,0,0,
LIV,2020-12-06,2020-21,1,WOL,Wolverhampton Wanderers,4,0,4,0,
LIV,2020-12-13,2020-21,0,FUL,Fulham,1,1,0,0,
LIV,2020-12-16,2020-21,1,TOT,Tottenham Hotspur,2,1,1,0,
LIV,2020-12-19,2020-21,0,CRY,Crystal Palace,7,0,7,0,
LIV,2020-12-27,2020-21,1,WBA,West Bromwich Albion,1,1,0,0,
LIV,2020-12-30,2020-21,0,NEW,Newcastle United,0,0,0,0,
LIV,2021-01-04,2020-21,0,SOU,Southampton,0,1,-1,0,
LIV,2021-01-17,2020-21,1,MUN,Manchester United,0,0,0,0,
LIV,2021-01-21,2020-21,1,BUR,Burnley,0,1,-1,0,
LIV,2021-01-28,2020-21,0,TOT,Tottenham Hotspur,3,1,2,0,
LIV,2021-01-31,2020-21,0,WHU,West Ham United,3,1,2,0,
LIV,2021-02-03,2020-21,1,BHA,Brighton and Hove Albion,0,1,-1,0,
LIV,2021-02-07,2020-21,1,MCI,Manchester City,1,4,-3,0,
LIV,2021-02-13,2020-21,0,LEI,Leicester City,1,3,-2,0,
LIV,2021-02-20,2020-21,1,EVE,Everton,0,2,-2,0,
LIV,2021-02-28,2020-21,0,SHU,Sheffield United,2,0,2,0,
LIV,2021-03-04,2020-21,1,CHE,Chelsea,0,1,-1,0,
LIV,2021-03-07,2020-21,1,FUL,Fulham,0,1,-1,0,
LIV,2021-03-15,2020-21,0,WOL,Wolverhampton Wanderers,1,0,1,0,
LIV,2021-04-03,2020-21,0,ARS,Arsenal,3,0,3,0,
LIV,2021-04-10,2020-21,1,AVL,Aston Villa,2,1,1,0,
LIV,2021-04-19,2020-21,0,LEE,Leeds United,1,1,0,0,
LIV,2021-04-24,2020-21,1,NEW,Newcastle United,1,1,0,0,
LIV,2021-05-08,2020-21,1,SOU,Southampton,2,0,2,0,
LIV,2021-05-13,2020-21,0,MUN,Manchester United,4,2,2,0,
LIV,2021-05-16,2020-21,0,WBA,West Bromwich Albion,2,1,1,0,
LIV,2021-05-19,2020-21,0,BUR,Burnley,3,0,3,0,
LIV,2021-05-23,2020-21,1,CRY,Crystal Palace,2,0,2,0,
LIV,2021-08-14,2021-22,0,NOR,Norwich City,3,0,3,0,27023
LIV,2021-08-21,2021-22,1,BUR,Burnley,2,0,2,0,52591
LIV,2021-08-28,2021-22,1,CHE,Chelsea,1,1,0,0,
LIV,2021-09-12,2021-22,0,LEE,Leeds United,3,0,3,0,36507
LIV,2021-09-18,2021-22,1,CRY,Crystal Palace,3,0,3,0,52985
LIV,2021-09-25,2021-22,0,BRE,Brentford,3,3,0,0,16876
LIV,2021-10-03,2021-22,1,MCI,Manchester City,2,2,0,0,53102
LIV,2021-10-16,2021-22,0,WAT,Watford,5,0,5,0,21085
LIV,2021-10-24,2021-22,0,MUN,Manchester United,5,0,5,0,73088
LIV,2021-10-30,2021-22,1,BHA,Brighton and Hove Albion,2,2,0,0,53197
LIV,2021-11-07,2021-22,0,WHU,West Ham United,2,3,-1,0,59909
LIV,2021-11-20,2021-22,1,ARS,Arsenal,4,0,4,0,53092
LIV,2021-11-27,2021-22,1,SOU,Southampton,4,0,4,0,53040
LIV,2021-12-01,2021-22,0,EVE,Everton,4,1,3,0,39641
LIV,2021-12-04,2021-22,0,WOL,Wolverhampton Wanderers,1,0,1,0,30729
LIV,2021-12-11,2021-22,1,AVL,Aston Villa,1,0,1,0,53093
LIV,2021-12-16,2021-22,1,NEW,Newcastle United,3,1,2,0,52951
LIV,2021-12-19,2021-22,0,TOT,Tottenham Hotspur,2,2,0,1,45421
LIV,2021-12-28,2021-22,0,LEI,Leicester City,0,1,-1,0,32230
LIV,2022-01-02,2021-22,0,CHE,Chelsea,2,2,0,0,40072
LIV,2022-01-16,2021-22,1,BRE,Brentford,3,0,3,0,52824
LIV,2022-01-23,2021-22,0,CRY,Crystal Palace,3,1,2,0,25002
LIV,2022-02-10,2021-22,1,LEI,Leicester City,2,0,2,0,53050
LIV,2022-02-13,2021-22,0,BUR,Burnley,1,0,1,0,21239
LIV,2022-02-19,2021-22,1,NOR,Norwich City,3,1,2,0,53135
LIV,2022-02-23,2021-22,1,LEE,Leeds United,6,0,6,0,53018
LIV,2022-03-05,2021-22,1,WHU,West Ham United,1,0,1,0,53059
LIV,2022-03-12,2021-22,0,BHA,Brighton and Hove Albion,2,0,2,0,31474
LIV,2022-03-16,2021-22,0,ARS,Arsenal,2,0,2,0,59968
LIV,2022-04-02,2021-22,1,WAT,Watford,2,0,2,0,53104
LIV,2022-04-10,2021-22,0,MCI,Manchester City,2,2,0,0,53197
LIV,2022-04-19,2021-22,1,MUN,Manchester United,4,0,4,0,52686
LIV,2022-04-24,2021-22,1,EVE,Everton,2,0,2,0,53213
LIV,2022-04-30,2021-22,0,NEW,Newcastle United,1,0,1,0,52281
LIV,2022-05-07,2021-22,1,TOT,Tottenham Hotspur,1,1,0,0,53177
LIV,2022-05-10,2021-22,0,AVL,Aston Villa,2,1,1,0,41919
LIV,2022-05-17,2021-22,0,SOU,Southampton,2,1,1,0,31588
LIV,2022-05-22,2021-22,1,WOL,Wolverhampton Wanderers,3,1,2,0,53097
LIV,2022-08-06,2022-23,0,FUL,Fulham,2,2,0,0,25000
LIV,2022-08-15,2022-23,1,CRY,Crystal Palace,1,1,0,1,52970
LIV,2022-08-22,2022-23,0,MUN,Manchester United,1,2,-1,0,
LIV,2022-08-27,2022-23,1,BOU,Bournemouth,9,0,9,0,53328
LIV,2022-08-31,2022-23,1,NEW,Newcastle United,2,1,1,0,53316
LIV,2022-09-03,2022-23,0,EVE,Everton,0,0,0,0,39240
LIV,2022-10-01,2022-23,1,BHA,Brighton and Hove Albion,3,3,0,0,53320
LIV,2022-10-09,2022-23,0,ARS,Arsenal,2,3,-1,0,59968
LIV,2022-10-16,2022-23,1,MCI,Manchester City,1,0,1,0,53286
LIV,2022-10-19,2022-23,1,WHU,West Ham United,1,0,1,0,53346
LIV,2022-10-22,2022-23,0,NFO,Nottingham Forest,0,1,-1,0,29245
LIV,2022-10-29,2022-23,1,LEE,Leeds United,1,2,-1,0,53274
LIV,2022-11-06,2022-23,0,TOT,Tottenham Hotspur,2,1,1,0,62008
LIV,2022-11-12,2022-23,1,SOU,Southampton,3,1,2,0,53331
LIV,2022-12-26,2022-23,0,AVL,Aston Villa,3,1,2,0,42085
LIV,2022-12-30,2022-23,1,LEI,Leicester City,2,1,1,0,53343
LIV,2023-01-02,2022-23,0,BRE,Brentford,1,3,-2,0,17163
LIV,2023-01-14,2022-23,0,BHA,Brighton and Hove Albion,0,3,-3,0,31645
LIV,2023-01-21,2022-23,1,CHE,Chelsea,0,0,0,0,53126
LIV,2023-02-04,2022-23,0,WOL,Wolverhampton Wanderers,0,3,-3,0,31664
LIV,2023-02-13,2022-23,1,EVE,Everton,2,0,2,0,53027
LIV,2023-02-18,2022-23,0,NEW,Newcastle United,2,0,2,0,52758
LIV,2023-02-25,2022-23,0,CRY,Crystal Palace,0,0,0,0,25842
LIV,2023-03-01,2022-23,1,WOL,Wolverhampton Wanderers,2,0,2,0,53259
LIV,2023-03-05,2022-23,1,MUN,Manchester United,7,0,7,0,53001
LIV,2023-03-11,2022-23,0,BOU,Bournemouth,0,1,-1,0,10536
LIV,2023-04-01,2022-23,0,MCI,Manchester City,1,4,-3,0,52877
LIV,2023-04-04,2022-23,0,CHE,Chelsea,0,0,0,0,40093
LIV,2023-04-09,2022-23,1,ARS,Arsenal,2,2,0,0,53267
LIV,2023-04-17,2022-23,0,LEE,Leeds United,6,1,5,0,36657
LIV,2023-04-22,2022-23,1,NFO,Nottingham Forest,3,2,1,0,
LIV,2023-04-26,2022-23,0,WHU,West Ham United,2,1,1,0,62473
LIV,2023-04-30,2022-23,1,TOT,Tottenham Hotspur,4,3,1,0,53275
LIV,2023-05-03,2022-23,1,FUL,Fulham,1,0,1,0,52602
LIV,2023-05-06,2022-23,1,BRE,Brentford,1,0,1,0,52838
LIV,2023-05-15,2022-23,0,LEI,Leicester City,3,0,3,0,32225
LIV,2023-05-20,2022-23,1,AVL,Aston Villa,1,1,0,0,53306
LIV,2023-05-28,2022-23,0,SOU,Southampton,4,4,0,0,31129
LIV,2023-08-13,2023-24,0,CHE,Chelsea,1,1,0,0,40096
LIV,2023-08-19,2023-24,1,BOU,Bournemouth,3,1,2,1,49699
LIV,2023-08-27,2023-24,0,NEW,Newcastle United,2,1,1,1,52214
LIV,2023-09-03,2023-24,1,AVL,Aston Villa,3,0,3,0,50109
LIV,2023-09-16,2023-24,0,WOL,Wolverhampton Wanderers,3,1,2,0,31257
LIV,2023-09-24,2023-24,1,WHU,West Ham United,3,1,2,0,50136
LIV,2023-09-30,2023-24,0,TOT,Tottenham Hotspur,1,2,-1,2,62001
LIV,2023-10-08,2023-24,0,BHA,Brighton and Hove Albion,2,2,0,0,31752
LIV,2023-10-21,2023-24,1,EVE,Everton,2,0,2,0,50201
LIV,2023-10-29,2023-24,1,NFO,Nottingham Forest,3,0,3,0,50143
LIV,2023-11-05,2023-24,0,LUT,Luton Town,1,1,0,0,11049
LIV,2023-11-12,2023-24,1,BRE,Brentford,3,0,3,0,50151
LIV,2023-11-25,2023-24,0,MCI,Manchester City,1,1,0,0,53289
LIV,2023-12-03,2023-24,1,FUL,Fulham,4,3,1,0,50143
LIV,2023-12-06,2023-24,0,SHU,Sheffield United,2,0,2,0,31406
LIV,2023-12-09,2023-24,0,CRY,Crystal Palace,2,1,1,0,25103
LIV,2023-12-17,2023-24,1,MUN,Manchester United,0,0,0,0,57158
LIV,2023-12-23,2023-24,1,ARS,Arsenal,1,1,0,0,57548
LIV,2023-12-26,2023-24,0,BUR,Burnley,2,0,2,0,21624
LIV,2024-01-01,2023-24,1,NEW,Newcastle United,4,2,2,0,57471
LIV,2024-01-21,2023-24,0,BOU,Bournemouth,4,0,4,0,11228
LIV,2024-01-31,2023-24,1,CHE,Chelsea,4,1,3,0,57524
LIV,2024-02-04,2023-24,0,ARS,Arsenal,1,3,-2,1,60374
LIV,2024-02-10,2023-24,1,BUR,Burnley,3,1,2,0,59896
LIV,2024-02-17,2023-24,0,BRE,Brentford,4,1,3,0,17193
LIV,2024-02-21,2023-24,1,LUT,Luton Town,4,1,3,0,59896
LIV,2024-03-02,2023-24,0,NFO,Nottingham Forest,1,0,1,0,29603
LIV,2024-03-10,2023-24,1,MCI,Manchester City,1,1,0,0,59947
LIV,2024-03-31,2023-24,1,BHA,Brighton and Hove Albion,2,1,1,0,60061
LIV,2024-04-04,2023-24,1,SHU,Sheffield United,3,1,2,0,60055
LIV,2024-04-07,2023-24,0,MUN,Manchester United,2,2,0,0,73522
LIV,2024-04-14,2023-24,1,CRY,Crystal Palace,0,1,-1,0,60090
LIV,2024-04-21,2023-24,0,FUL,Fulham,3,1,2,0,24401
LIV,2024-04-24,2023-24,0,EVE,Everton,0,2,-2,0,38222
LIV,2024-04-27,2023-24,0,WHU,West Ham United,2,2,0,0,62474
LIV,2024-05-05,2023-24,1,TOT,Tottenham Hotspur,4,2,2,0,60075
LIV,2024-05-13,2023-24,0,AVL,Aston Villa,3,3,0,0,42241
LIV,2024-05-19,2023-24,1,WOL,Wolverhampton Wanderers,2,0,2,0,60059
LIV,2024-08-17,2024-25,0,IPS,Ipswich Town,2,0,2,0,30014
LIV,2024-08-25,2024-25,1,BRE,Brentford,2,0,2,0,60107
LIV,2024-09-01,2024-25,0,MUN,Manchester United,3,0,3,0,73738
LIV,2024-09-14,2024-25,1,NFO,Nottingham Forest,0,1,-1,0,60344
LIV,2024-09-21,2024-25,1,BOU,Bournemouth,3,0,3,0,60347
LIV,2024-09-28,2024-25,0,WOL,Wolverhampton Wanderers,2,1,1,0,31413
LIV,2024-10-05,2024-25,0,CRY,Crystal Palace,1,0,1,0,25185
LIV,2024-10-20,2024-25,1,CHE,Chelsea,2,1,1,0,60277
LIV,2024-10-27,2024-25,0,ARS,Arsenal,2,2,0,0,60383
LIV,2024-11-02,2024-25,1,BHA,Brighton and Hove Albion,2,1,1,0,60331
LIV,2024-11-09,2024-25,1,AVL,Aston Villa,2,0,2,0,60292
LIV,2024-11-24,2024-25,0,SOU,Southampton,3,2,1,0,31278
LIV,2024-12-01,2024-25,1,MCI,Manchester City,2,0,2,0,60248
LIV,2024-12-04,2024-25,0,NEW,Newcastle United,3,3,0,0,52237
LIV,2024-12-14,2024-25,1,FUL,Fulham,2,2,0,1,60333
LIV,2024-12-22,2024-25,0,TOT,Tottenham Hotspur,6,3,3,0,61439
LIV,2024-12-26,2024-25,1,LEI,Leicester City,3,1,2,0,60300
LIV,2024-12-29,2024-25,0,WHU,West Ham United,5,0,5,0,62476
LIV,2025-01-05,2024-25,1,MUN,Manchester United,2,2,0,0,60275
LIV,2025-01-14,2024-25,0,NFO,Nottingham Forest,1,1,0,0,30249
LIV,2025-01-18,2024-25,0,BRE,Brentford,2,0,2,0,17215
LIV,2025-01-25,2024-25,1,IPS,Ipswich Town,4,1,3,0,60420
LIV,2025-02-01,2024-25,0,BOU,Bournemouth,2,0,2,0,11239
LIV,2025-02-12,2024-25,0,EVE,Everton,2,2,0,1,39280
LIV,2025-02-16,2024-25,1,WOL,Wolverhampton Wanderers,2,1,1,0,60401
LIV,2025-02-19,2024-25,0,AVL,Aston Villa,2,2,0,0,41910
LIV,2025-02-23,2024-25,0,MCI,Manchester City,2,0,2,0,52803
LIV,2025-02-26,2024-25,1,NEW,Newcastle United,2,0,2,0,60374
LIV,2025-03-08,2024-25,1,SOU,Southampton,3,1,2,0,60399
LIV,2025-04-02,2024-25,1,EVE,Everton,1,0,1,0,60331
LIV,2025-04-06,2024-25,0,FUL,Fulham,2,3,-1,0,27770
LIV,2025-04-13,2024-25,1,WHU,West Ham United,2,1,1,0,60376
LIV,2025-04-20,2024-25,0,LEI,Leicester City,1,0,1,0,30402
LIV,2025-04-27,2024-25,1,TOT,Tottenham Hotspur,5,1,4,0,60415
LIV,2025-05-04,2024-25,0,CHE,Chelsea,1,3,-2,0,39829
LIV,2025-05-11,2024-25,1,ARS,Arsenal,2,2,0,0,60324
LIV,2025-05-19,2024-25,0,BHA,Brighton and Hove Albion,2,3,-1,0,31611
LIV,2025-05-25,2024-25,1,CRY,Crystal Palace,1,1,0,1,60382
LIV,2025-08-15,2025-26,1,BOU,Bournemouth,4,2,2,0,60315
LIV,2025-08-25,2025-26,0,NEW,Newcastle United,3,2,1,0,52230
LIV,2025-08-31,2025-26,1,ARS,Arsenal,1,0,1,0,60455
LIV,2025-09-14,2025-26,0,BUR,Burnley,1,0,1,0,21678
LIV,2025-09-20,2025-26,1,EVE,Everton,2,1,1,0,60342
LIV,2025-09-27,2025-26,0,CRY,Crystal Palace,1,2,-1,0,25118
LIV,2025-10-04,2025-26,0,CHE,Chelsea,1,2,-1,0,39767
LIV,2025-10-19,2025-26,1,MUN,Manchester United,1,2,-1,0,60337
LIV,2025-10-25,2025-26,0,BRE,Brentford,2,3,-1,0,17214
LIV,2025-11-01,2025-26,1,AVL,Aston Villa,2,0,2,0,60407
LIV,2025-11-09,2025-26,0,MCI,Manchester City,0,3,-3,0,52511
LIV,2025-11-22,2025-26,1,NFO,Nottingham Forest,0,3,-3,0,60419
LIV,2025-11-30,2025-26,0,WHU,West Ham United,2,0,2,0,62469
LIV,2025-12-03,2025-26,1,SUN,Sunderland,1,1,0,0,60414
LIV,2025-12-06,2025-26,0,LEE,Leeds United,3,3,0,0,36842
LIV,2025-12-13,2025-26,1,BHA,Brighton and Hove Albion,2,0,2,0,60429
LIV,2025-12-20,2025-26,0,TOT,Tottenham Hotspur,2,1,1,0,61138
LIV,2025-12-27,2025-26,1,WOL,Wolverhampton Wanderers,2,1,1,0,60466
LIV,2026-01-01,2025-26,1,LEE,Leeds United,0,0,0,0,60343
LIV,2026-01-04,2025-26,0,FUL,Fulham,2,2,0,0,27547
LIV,2026-01-08,2025-26,0,ARS,Arsenal,0,0,0,0,60258
LIV,2026-01-17,2025-26,1,BUR,Burnley,1,1,0,0,60431
LIV,2026-01-24,2025-26,0,BOU,Bournemouth,2,3,-1,0,11260
LIV,2026-01-31,2025-26,1,NEW,Newcastle United,4,1,3,0,60416
LIV,2026-02-08,2025-26,1,MCI,Manchester City,1,2,-1,1,60336
LIV,2026-02-11,2025-26,0,SUN,Sunderland,1,0,1,0,
LIV,2026-02-22,2025-26,0,NFO,Nottingham Forest,1,0,1,0,30737
LIV,2026-02-28,2025-26,1,WHU,West Ham United,5,2,3,0,60425
LIV,2026-03-03,2025-26,0,WOL,Wolverhampton Wanderers,1,2,-1,0,30247
LIV,2026-03-15,2025-26,1,TOT,Tottenham Hotspur,1,1,0,0,60386
LIV,2026-03-21,2025-26,0,BHA,Brighton and Hove Albion,1,2,-1,0,31680
LIV,2026-04-11,2025-26,1,FUL,Fulham,2,0,2,0,60401
LIV,2026-04-19,2025-26,0,EVE,Everton,2,1,1,0,52585
LIV,2026-04-25,2025-26,1,CRY,Crystal Palace,3,1,2,0,60314
LIV,2026-05-03,2025-26,0,MUN,Manchester United,2,3,-1,0,74027
LIV,2026-05-09,2025-26,1,CHE,Chelsea,1,1,0,0,60429
LIV,2026-05-15,2025-26,0,AVL,Aston Villa,2,4,-2,0,43033
LIV,2026-05-24,2025-26,1,BRE,Brentford,1,1,0,0,60325
MUN,1992-08-15,1992-93,0,SHU,Sheffield United,1,2,-1,0,28070
MUN,1992-08-19,1992-93,1,EVE,Everton,0,3,-3,0,31901
MUN,1992-08-22,1992-93,1,IPS,Ipswich Town,1,1,0,0,31704
MUN,1992-08-24,1992-93,0,SOU,Southampton,1,0,1,0,15623
MUN,1992-08-29,1992-93,0,NFO,Nottingham Forest,2,0,2,0,19694
MUN,1992-09-02,1992-93,1,CRY,Crystal Palace,1,0,1,0,29736
MUN,1992-09-06,1992-93,1,LEE,Leeds United,2,0,2,0,31296
MUN,1992-09-12,1992-93,0,EVE,Everton,2,0,2,0,30002
MUN,1992-09-19,1992-93,0,TOT,Tottenham Hotspur,1,1,0,0,33296
MUN,1992-09-26,1992-93,1,QPR,Queens Park Rangers,0,0,0,0,33287
MUN,1992-10-03,1992-93,0,MID,Middlesbrough,1,1,0,0,24172
MUN,1992-10-18,1992-93,1,LIV,Liverpool,2,2,0,0,33243
MUN,1992-10-24,1992-93,0,BLA,Blackburn Rovers,0,0,0,0,20305
MUN,1992-10-31,1992-93,1,WIM,Wimbledon,0,1,-1,0,32622
MUN,1992-11-07,1992-93,0,AVL,Aston Villa,0,1,-1,0,39063
MUN,1992-11-21,1992-93,1,OLD,Oldham Athletic,3,0,3,0,33497
MUN,1992-11-28,1992-93,0,ARS,Arsenal,1,0,1,0,29739
MUN,1992-12-06,1992-93,1,MCI,Manchester City,2,1,1,0,35408
MUN,1992-12-12,1992-93,1,NOR,Norwich City,1,0,1,0,34500
MUN,1992-12-19,1992-93,0,CHE,Chelsea,1,1,0,0,34464
MUN,1992-12-26,1992-93,0,SHW,Sheffield Wednesday,3,3,0,0,37708
MUN,1992-12-28,1992-93,1,COV,Coventry City,5,0,5,0,36025
MUN,1993-01-09,1992-93,1,TOT,Tottenham Hotspur,4,1,3,0,35648
MUN,1993-01-18,1992-93,0,QPR,Queens Park Rangers,3,1,2,0,21117
MUN,1993-01-27,1992-93,1,NFO,Nottingham Forest,2,0,2,0,36085
MUN,1993-01-30,1992-93,0,IPS,Ipswich Town,1,2,-1,0,22068
MUN,1993-02-06,1992-93,1,SHU,Sheffield United,2,1,1,0,36156
MUN,1993-02-08,1992-93,0,LEE,Leeds United,0,0,0,0,34166
MUN,1993-02-20,1992-93,1,SOU,Southampton,2,1,1,0,36257
MUN,1993-02-27,1992-93,1,MID,Middlesbrough,3,0,3,0,36251
MUN,1993-03-06,1992-93,0,LIV,Liverpool,2,1,1,0,44374
MUN,1993-03-09,1992-93,0,OLD,Oldham Athletic,0,1,-1,0,17106
MUN,1993-03-14,1992-93,1,AVL,Aston Villa,1,1,0,0,36163
MUN,1993-03-20,1992-93,0,MCI,Manchester City,1,1,0,0,37136
MUN,1993-03-24,1992-93,1,ARS,Arsenal,0,0,0,0,37301
MUN,1993-04-05,1992-93,0,NOR,Norwich City,3,1,2,0,20582
MUN,1993-04-10,1992-93,1,SHW,Sheffield Wednesday,2,1,1,0,40102
MUN,1993-04-12,1992-93,0,COV,Coventry City,1,0,1,0,24429
MUN,1993-04-17,1992-93,1,CHE,Chelsea,3,0,3,0,40139
MUN,1993-04-21,1992-93,0,CRY,Crystal Palace,2,0,2,0,30115
MUN,1993-05-03,1992-93,1,BLA,Blackburn Rovers,3,1,2,0,40447
MUN,1993-05-09,1992-93,0,WIM,Wimbledon,2,1,1,0,30115
MUN,1993-08-15,1993-94,0,NOR,Norwich City,2,0,2,0,19705
MUN,1993-08-18,1993-94,1,SHU,Sheffield United,3,0,3,0,41949
MUN,1993-08-21,1993-94,1,NEW,Newcastle United,1,1,0,0,41829
MUN,1993-08-23,1993-94,0,AVL,Aston Villa,2,1,1,0,39624
MUN,1993-08-28,1993-94,0,SOU,Southampton,3,1,2,0,16189
MUN,1993-09-01,1993-94,1,WHU,West Ham United,3,0,3,0,44613
MUN,1993-09-11,1993-94,0,CHE,Chelsea,0,1,-1,0,37064
MUN,1993-09-19,1993-94,1,ARS,Arsenal,1,0,1,0,44009
MUN,1993-09-25,1993-94,1,SWI,Swindon Town,4,2,2,0,44583
MUN,1993-10-02,1993-94,0,SHW,Sheffield Wednesday,3,2,1,0,34548
MUN,1993-10-16,1993-94,1,TOT,Tottenham Hotspur,2,1,1,0,44655
MUN,1993-10-23,1993-94,0,EVE,Everton,1,0,1,0,35430
MUN,1993-10-30,1993-94,1,QPR,Queens Park Rangers,2,1,1,0,44663
MUN,1993-11-07,1993-94,0,MCI,Manchester City,3,2,1,0,35155
MUN,1993-11-20,1993-94,1,WIM,Wimbledon,3,1,2,0,44748
MUN,1993-11-24,1993-94,1,IPS,Ipswich Town,0,0,0,0,43300
MUN,1993-11-27,1993-94,0,COV,Coventry City,1,0,1,0,17020
MUN,1993-12-04,1993-94,1,NOR,Norwich City,2,2,0,0,44694
MUN,1993-12-07,1993-94,0,SHU,Sheffield United,3,0,3,0,26744
MUN,1993-12-11,1993-94,0,NEW,Newcastle United,1,1,0,0,36388
MUN,1993-12-19,1993-94,1,AVL,Aston Villa,3,1,2,0,44499
MUN,1993-12-26,1993-94,1,BLA,Blackburn Rovers,1,1,0,0,44511
MUN,1993-12-29,1993-94,0,OLD,Oldham Athletic,5,2,3,0,16708
MUN,1994-01-01,1993-94,1,LEE,Leeds United,0,0,0,0,44724
MUN,1994-01-04,1993-94,0,LIV,Liverpool,3,3,0,0,42795
MUN,1994-01-15,1993-94,0,TOT,Tottenham Hotspur,1,0,1,0,31343
MUN,1994-01-22,1993-94,1,EVE,Everton,1,0,1,0,44750
MUN,1994-02-05,1993-94,0,QPR,Queens Park Rangers,3,2,1,0,21267
MUN,1994-02-26,1993-94,0,WHU,West Ham United,2,2,0,0,28832
MUN,1994-03-05,1993-94,1,CHE,Chelsea,0,1,-1,0,44745
MUN,1994-03-16,1993-94,1,SHW,Sheffield Wednesday,5,0,5,0,43669
MUN,1994-03-19,1993-94,0,SWI,Swindon Town,2,2,0,0,18102
MUN,1994-03-22,1993-94,0,ARS,Arsenal,2,2,0,0,36203
MUN,1994-03-30,1993-94,1,LIV,Liverpool,1,0,1,0,44751
MUN,1994-04-02,1993-94,0,BLA,Blackburn Rovers,0,2,-2,0,20866
MUN,1994-04-04,1993-94,1,OLD,Oldham Athletic,3,2,1,0,44686
MUN,1994-04-16,1993-94,0,WIM,Wimbledon,0,1,-1,0,28553
MUN,1994-04-23,1993-94,1,MCI,Manchester City,2,0,2,0,44333
MUN,1994-04-27,1993-94,0,LEE,Leeds United,2,0,2,0,41125
MUN,1994-05-01,1993-94,0,IPS,Ipswich Town,2,1,1,0,22559
MUN,1994-05-04,1993-94,1,SOU,Southampton,2,0,2,0,44705
MUN,1994-05-08,1993-94,1,COV,Coventry City,0,0,0,0,44717
MUN,1994-08-20,1994-95,1,QPR,Queens Park Rangers,2,0,2,0,43214
MUN,1994-08-22,1994-95,0,NFO,Nottingham Forest,1,1,0,0,22072
MUN,1994-08-27,1994-95,0,TOT,Tottenham Hotspur,1,0,1,0,24502
MUN,1994-08-31,1994-95,1,WIM,Wimbledon,3,0,3,0,43440
MUN,1994-09-11,1994-95,0,LEE,Leeds United,1,2,-1,0,39396
MUN,1994-09-17,1994-95,1,LIV,Liverpool,2,0,2,0,34435
MUN,1994-09-24,1994-95,0,IPS,Ipswich Town,2,3,-1,0,22559
MUN,1994-10-01,1994-95,1,EVE,Everton,2,0,2,0,43803
MUN,1994-10-08,1994-95,0,SHW,Sheffield Wednesday,0,1,-1,0,33441
MUN,1994-10-15,1994-95,1,WHU,West Ham United,1,0,1,0,43795
MUN,1994-10-23,1994-95,0,BLA,Blackburn Rovers,4,2,2,0,30260
MUN,1994-10-29,1994-95,1,NEW,Newcastle United,2,0,2,0,33795
MUN,1994-11-06,1994-95,0,AVL,Aston Villa,2,1,1,0,32136
MUN,1994-11-10,1994-95,1,MCI,Manchester City,5,0,5,0,43738
MUN,1994-11-19,1994-95,1,CRY,Crystal Palace,3,0,3,0,43788
MUN,1994-11-26,1994-95,0,ARS,Arsenal,0,0,0,0,38301
MUN,1994-12-03,1994-95,1,NOR,Norwich City,1,0,1,0,43789
MUN,1994-12-10,1994-95,0,QPR,Queens Park Rangers,3,2,1,0,18948
MUN,1994-12-17,1994-95,1,NFO,Nottingham Forest,1,2,-1,0,43744
MUN,1994-12-26,1994-95,0,CHE,Chelsea,3,2,1,0,31161
MUN,1994-12-28,1994-95,1,LEI,Leicester City,1,1,0,0,43789
MUN,1994-12-31,1994-95,0,SOU,Southampton,2,2,0,0,15204
MUN,1995-01-03,1994-95,1,COV,Coventry City,2,0,2,0,43130
MUN,1995-01-15,1994-95,0,NEW,Newcastle United,1,1,0,0,34471
MUN,1995-01-22,1994-95,1,BLA,Blackburn Rovers,1,0,1,0,43742
MUN,1995-01-25,1994-95,0,CRY,Crystal Palace,1,1,0,0,18224
MUN,1995-02-04,1994-95,1,AVL,Aston Villa,1,0,1,0,43795
MUN,1995-02-11,1994-95,0,MCI,Manchester City,3,0,3,0,21430
MUN,1995-02-22,1994-95,0,NOR,Norwich City,2,0,2,0,21824
MUN,1995-02-25,1994-95,0,EVE,Everton,0,1,-1,0,40011
MUN,1995-03-04,1994-95,1,IPS,Ipswich Town,9,0,9,0,43804
MUN,1995-03-07,1994-95,0,WIM,Wimbledon,1,0,1,0,18224
MUN,1995-03-15,1994-95,1,TOT,Tottenham Hotspur,0,0,0,0,43802
MUN,1995-03-19,1994-95,0,LIV,Liverpool,0,2,-2,0,38036
MUN,1995-03-22,1994-95,1,ARS,Arsenal,3,0,3,0,43623
MUN,1995-04-02,1994-95,1,LEE,Leeds United,0,0,0,0,43712
MUN,1995-04-15,1994-95,0,LEI,Leicester City,4,0,4,0,21281
MUN,1995-04-17,1994-95,1,CHE,Chelsea,0,0,0,0,43728
MUN,1995-05-01,1994-95,0,COV,Coventry City,3,2,1,0,21885
MUN,1995-05-07,1994-95,1,SHW,Sheffield Wednesday,1,0,1,0,43868
MUN,1995-05-10,1994-95,1,SOU,Southampton,2,1,1,0,43479
MUN,1995-05-14,1994-95,0,WHU,West Ham United,1,1,0,0,24785
MUN,1995-08-19,1995-96,0,AVL,Aston Villa,1,3,-2,0,34655
MUN,1995-08-23,1995-96,1,WHU,West Ham United,2,1,1,0,31966
MUN,1995-08-26,1995-96,1,WIM,Wimbledon,3,1,2,0,32226
MUN,1995-08-28,1995-96,0,BLA,Blackburn Rovers,2,1,1,0,29843
MUN,1995-09-09,1995-96,0,EVE,Everton,3,2,1,0,39496
MUN,1995-09-16,1995-96,1,BOL,Bolton Wanderers,3,0,3,0,32812
MUN,1995-09-23,1995-96,0,SHW,Sheffield Wednesday,0,0,0,0,34101
MUN,1995-10-01,1995-96,1,LIV,Liverpool,2,2,0,0,34934
MUN,1995-10-14,1995-96,1,MCI,Manchester City,1,0,1,0,35707
MUN,1995-10-21,1995-96,0,CHE,Chelsea,4,1,3,0,31019
MUN,1995-10-28,1995-96,1,MID,Middlesbrough,2,0,2,0,36580
MUN,1995-11-04,1995-96,0,ARS,Arsenal,0,1,-1,0,38317
MUN,1995-11-18,1995-96,1,SOU,Southampton,4,1,3,0,39301
MUN,1995-11-22,1995-96,0,COV,Coventry City,4,0,4,0,23400
MUN,1995-11-27,1995-96,0,NFO,Nottingham Forest,1,1,0,0,29263
MUN,1995-12-02,1995-96,1,CHE,Chelsea,1,1,0,0,42019
MUN,1995-12-09,1995-96,1,SHW,Sheffield Wednesday,2,2,0,0,41849
MUN,1995-12-17,1995-96,0,LIV,Liverpool,0,2,-2,0,40546
MUN,1995-12-24,1995-96,0,LEE,Leeds United,1,3,-2,0,39801
MUN,1995-12-27,1995-96,1,NEW,Newcastle United,2,0,2,0,42024
MUN,1995-12-30,1995-96,1,QPR,Queens Park Rangers,2,1,1,0,41890
MUN,1996-01-01,1995-96,0,TOT,Tottenham Hotspur,1,4,-3,0,32852
MUN,1996-01-13,1995-96,1,AVL,Aston Villa,0,0,0,0,42667
MUN,1996-01-22,1995-96,0,WHU,West Ham United,1,0,1,0,24197
MUN,1996-02-03,1995-96,0,WIM,Wimbledon,4,2,2,0,25380
MUN,1996-02-10,1995-96,1,BLA,Blackburn Rovers,1,0,1,0,42681
MUN,1996-02-21,1995-96,1,EVE,Everton,2,0,2,0,42459
MUN,1996-02-25,1995-96,0,BOL,Bolton Wanderers,6,0,6,0,21381
MUN,1996-03-04,1995-96,0,NEW,Newcastle United,1,0,1,0,36584
MUN,1996-03-16,1995-96,0,QPR,Queens Park Rangers,1,1,0,0,18817
MUN,1996-03-20,1995-96,1,ARS,Arsenal,1,0,1,0,50028
MUN,1996-03-24,1995-96,1,TOT,Tottenham Hotspur,1,0,1,0,50157
MUN,1996-04-06,1995-96,0,MCI,Manchester City,3,2,1,0,29688
MUN,1996-04-08,1995-96,1,COV,Coventry City,1,0,1,0,50332
MUN,1996-04-13,1995-96,0,SOU,Southampton,1,3,-2,0,15262
MUN,1996-04-17,1995-96,1,LEE,Leeds United,1,0,1,0,48382
MUN,1996-04-28,1995-96,1,NFO,Nottingham Forest,5,0,5,0,53926
MUN,1996-05-05,1995-96,0,MID,Middlesbrough,3,0,3,0,29921
MUN,1996-08-17,1996-97,0,WIM,Wimbledon,3,0,3,0,25786
MUN,1996-08-21,1996-97,1,EVE,Everton,2,2,0,0,54943
MUN,1996-08-25,1996-97,1,BLA,Blackburn Rovers,2,2,0,0,54178
MUN,1996-09-04,1996-97,0,DER,Derby County,1,1,0,0,18026
MUN,1996-09-07,1996-97,0,LEE,Leeds United,4,0,4,0,39694
MUN,1996-09-14,1996-97,1,NFO,Nottingham Forest,4,1,3,0,54984
MUN,1996-09-21,1996-97,0,AVL,Aston Villa,0,0,0,0,39339
MUN,1996-09-29,1996-97,1,TOT,Tottenham Hotspur,2,0,2,0,54943
MUN,1996-10-12,1996-97,1,LIV,Liverpool,1,0,1,0,55128
MUN,1996-10-20,1996-97,0,NEW,Newcastle United,0,5,-5,0,36579
MUN,1996-10-26,1996-97,0,SOU,Southampton,3,6,-3,0,15253
MUN,1996-11-02,1996-97,1,CHE,Chelsea,1,2,-1,0,55198
MUN,1996-11-16,1996-97,1,ARS,Arsenal,1,0,1,0,55210
MUN,1996-11-23,1996-97,0,MID,Middlesbrough,2,2,0,0,30063
MUN,1996-11-30,1996-97,1,LEI,Leicester City,3,1,2,0,55196
MUN,1996-12-08,1996-97,0,WHU,West Ham United,2,2,0,0,25045
MUN,1996-12-18,1996-97,0,SHW,Sheffield Wednesday,1,1,0,0,37671
MUN,1996-12-21,1996-97,1,SUN,Sunderland,5,0,5,0,55081
MUN,1996-12-26,1996-97,0,NFO,Nottingham Forest,4,0,4,0,29032
MUN,1996-12-28,1996-97,1,LEE,Leeds United,1,0,1,0,55256
MUN,1997-01-01,1996-97,1,AVL,Aston Villa,0,0,0,0,55133
MUN,1997-01-12,1996-97,0,TOT,Tottenham Hotspur,2,1,1,0,33026
MUN,1997-01-18,1996-97,0,COV,Coventry City,2,0,2,0,23085
MUN,1997-01-29,1996-97,1,WIM,Wimbledon,2,1,1,0,55314
MUN,1997-02-01,1996-97,1,SOU,Southampton,2,1,1,0,55269
MUN,1997-02-19,1996-97,0,ARS,Arsenal,2,1,1,0,38172
MUN,1997-02-22,1996-97,0,CHE,Chelsea,1,1,0,0,28336
MUN,1997-03-01,1996-97,1,COV,Coventry City,3,1,2,0,55230
MUN,1997-03-08,1996-97,0,SUN,Sunderland,1,2,-1,0,22225
MUN,1997-03-15,1996-97,1,SHW,Sheffield Wednesday,2,0,2,0,55267
MUN,1997-03-22,1996-97,0,EVE,Everton,2,0,2,0,40079
MUN,1997-04-05,1996-97,1,DER,Derby County,2,3,-1,0,55243
MUN,1997-04-12,1996-97,0,BLA,Blackburn Rovers,3,2,1,0,30476
MUN,1997-04-19,1996-97,0,LIV,Liverpool,3,1,2,0,40892
MUN,1997-05-03,1996-97,0,LEI,Leicester City,2,2,0,0,21068
MUN,1997-05-05,1996-97,1,MID,Middlesbrough,3,3,0,0,54489
MUN,1997-05-08,1996-97,1,NEW,Newcastle United,0,0,0,0,55236
MUN,1997-05-11,1996-97,1,WHU,West Ham United,2,0,2,0,55249
MUN,1997-08-10,1997-98,0,TOT,Tottenham Hotspur,2,0,2,0,26359
MUN,1997-08-13,1997-98,1,SOU,Southampton,1,0,1,0,55008
MUN,1997-08-23,1997-98,0,LEI,Leicester City,0,0,0,0,21221
MUN,1997-08-27,1997-98,0,EVE,Everton,2,0,2,0,40079
MUN,1997-08-30,1997-98,1,COV,Coventry City,3,0,3,0,55074
MUN,1997-09-13,1997-98,1,WHU,West Ham United,2,1,1,0,55068
MUN,1997-09-20,1997-98,0,BOL,Bolton Wanderers,0,0,0,0,25000
MUN,1997-09-24,1997-98,1,CHE,Chelsea,2,2,0,0,55163
MUN,1997-09-27,1997-98,0,LEE,Leeds United,0,1,-1,0,39952
MUN,1997-10-04,1997-98,1,CRY,Crystal Palace,2,0,2,0,55143
MUN,1997-10-18,1997-98,0,DER,Derby County,2,2,0,0,30014
MUN,1997-10-25,1997-98,1,BAR,Barnsley,7,0,7,0,55142
MUN,1997-11-01,1997-98,1,SHW,Sheffield Wednesday,6,1,5,0,55295
MUN,1997-11-09,1997-98,0,ARS,Arsenal,2,3,-1,0,38205
MUN,1997-11-22,1997-98,0,WIM,Wimbledon,5,2,3,0,26309
MUN,1997-11-30,1997-98,1,BLA,Blackburn Rovers,4,0,4,0,55175
MUN,1997-12-06,1997-98,0,LIV,Liverpool,3,1,2,0,41027
MUN,1997-12-15,1997-98,1,AVL,Aston Villa,1,0,1,0,55151
MUN,1997-12-21,1997-98,0,NEW,Newcastle United,1,0,1,0,36763
MUN,1997-12-26,1997-98,1,EVE,Everton,2,0,2,0,55167
MUN,1997-12-28,1997-98,0,COV,Coventry City,2,3,-1,0,23054
MUN,1998-01-10,1997-98,1,TOT,Tottenham Hotspur,2,0,2,0,55281
MUN,1998-01-19,1997-98,0,SOU,Southampton,0,1,-1,0,15241
MUN,1998-01-31,1997-98,1,LEI,Leicester City,0,1,-1,0,55156
MUN,1998-02-07,1997-98,1,BOL,Bolton Wanderers,1,1,0,0,55156
MUN,1998-02-18,1997-98,0,AVL,Aston Villa,2,0,2,0,39372
MUN,1998-02-21,1997-98,1,DER,Derby County,2,0,2,0,55170
MUN,1998-02-28,1997-98,0,CHE,Chelsea,1,0,1,0,34511
MUN,1998-03-07,1997-98,0,SHW,Sheffield Wednesday,0,2,-2,0,39427
MUN,1998-03-11,1997-98,0,WHU,West Ham United,1,1,0,0,25892
MUN,1998-03-14,1997-98,1,ARS,Arsenal,0,1,-1,0,55174
MUN,1998-03-28,1997-98,1,WIM,Wimbledon,2,0,2,0,55306
MUN,1998-04-06,1997-98,0,BLA,Blackburn Rovers,3,1,2,0,30547
MUN,1998-04-10,1997-98,1,LIV,Liverpool,1,1,0,0,55171
MUN,1998-04-18,1997-98,1,NEW,Newcastle United,1,1,0,0,55194
MUN,1998-04-27,1997-98,0,CRY,Crystal Palace,3,0,3,0,26180
MUN,1998-05-04,1997-98,1,LEE,Leeds United,3,0,3,0,55167
MUN,1998-05-10,1997-98,0,BAR,Barnsley,2,0,2,0,18694
MUN,1998-08-15,1998-99,1,LEI,Leicester City,2,2,0,0,55052
MUN,1998-08-22,1998-99,0,WHU,West Ham United,0,0,0,0,25912
MUN,1998-09-09,1998-99,1,CHA,Charlton Athletic,4,1,3,0,55147
MUN,1998-09-12,1998-99,1,COV,Coventry City,2,0,2,0,55193
MUN,1998-09-20,1998-99,0,ARS,Arsenal,0,3,-3,0,38142
MUN,1998-09-24,1998-99,1,LIV,Liverpool,2,0,2,0,55181
MUN,1998-10-03,1998-99,0,SOU,Southampton,3,0,3,0,15251
MUN,1998-10-17,1998-99,1,WIM,Wimbledon,5,1,4,0,55265
MUN,1998-10-24,1998-99,0,DER,Derby County,1,1,0,0,30867
MUN,1998-10-31,1998-99,0,EVE,Everton,4,1,3,0,40087
MUN,1998-11-08,1998-99,1,NEW,Newcastle United,0,0,0,0,55174
MUN,1998-11-14,1998-99,1,BLA,Blackburn Rovers,3,2,1,0,55198
MUN,1998-11-21,1998-99,0,SHW,Sheffield Wednesday,1,3,-2,0,39475
MUN,1998-11-29,1998-99,1,LEE,Leeds United,3,2,1,0,55172
MUN,1998-12-05,1998-99,0,AVL,Aston Villa,1,1,0,0,39241
MUN,1998-12-12,1998-99,0,TOT,Tottenham Hotspur,2,2,0,0,36058
MUN,1998-12-16,1998-99,1,CHE,Chelsea,1,1,0,0,55159
MUN,1998-12-19,1998-99,1,MID,Middlesbrough,2,3,-1,0,55152
MUN,1998-12-26,1998-99,1,NFO,Nottingham Forest,3,0,3,0,55216
MUN,1998-12-29,1998-99,0,CHE,Chelsea,0,0,0,0,34741
MUN,1999-01-10,1998-99,1,WHU,West Ham United,4,1,3,0,55180
MUN,1999-01-16,1998-99,0,LEI,Leicester City,6,2,4,0,22091
MUN,1999-01-31,1998-99,0,CHA,Charlton Athletic,1,0,1,0,20043
MUN,1999-02-03,1998-99,1,DER,Derby County,1,0,1,0,55174
MUN,1999-02-06,1998-99,0,NFO,Nottingham Forest,8,1,7,0,30025
MUN,1999-02-17,1998-99,1,ARS,Arsenal,1,1,0,0,55171
MUN,1999-02-20,1998-99,0,COV,Coventry City,1,0,1,0,22594
MUN,1999-02-27,1998-99,1,SOU,Southampton,2,1,1,0,55316
MUN,1999-03-13,1998-99,0,NEW,Newcastle United,2,1,1,0,36776
MUN,1999-03-21,1998-99,1,EVE,Everton,3,1,2,0,55182
MUN,1999-04-03,1998-99,0,WIM,Wimbledon,1,1,0,0,26121
MUN,1999-04-17,1998-99,1,SHW,Sheffield Wednesday,3,0,3,0,55270
MUN,1999-04-25,1998-99,0,LEE,Leeds United,1,1,0,0,40255
MUN,1999-05-01,1998-99,1,AVL,Aston Villa,2,1,1,0,55189
MUN,1999-05-05,1998-99,0,LIV,Liverpool,2,2,0,0,44702
MUN,1999-05-09,1998-99,0,MID,Middlesbrough,1,0,1,0,34655
MUN,1999-05-12,1998-99,0,BLA,Blackburn Rovers,0,0,0,0,30436
MUN,1999-05-16,1998-99,1,TOT,Tottenham Hotspur,2,1,1,0,55189
MUN,1999-08-08,1999-00,0,EVE,Everton,1,1,0,0,40010
MUN,1999-08-11,1999-00,1,SHW,Sheffield Wednesday,4,0,4,0,54941
MUN,1999-08-14,1999-00,1,LEE,Leeds United,2,0,2,0,55187
MUN,1999-08-22,1999-00,0,ARS,Arsenal,2,1,1,0,38147
MUN,1999-08-25,1999-00,0,COV,Coventry City,2,1,1,0,22024
MUN,1999-08-30,1999-00,1,NEW,Newcastle United,5,1,4,0,55190
MUN,1999-09-11,1999-00,0,LIV,Liverpool,3,2,1,0,44929
MUN,1999-09-18,1999-00,1,WIM,Wimbledon,1,1,0,0,55189
MUN,1999-09-25,1999-00,1,SOU,Southampton,3,3,0,0,55249
MUN,1999-10-03,1999-00,0,CHE,Chelsea,0,5,-5,0,34909
MUN,1999-10-16,1999-00,1,WAT,Watford,4,1,3,0,55188
MUN,1999-10-23,1999-00,0,TOT,Tottenham Hotspur,1,3,-2,0,36072
MUN,1999-10-30,1999-00,1,AVL,Aston Villa,3,0,3,0,55211
MUN,1999-11-06,1999-00,1,LEI,Leicester City,2,0,2,0,55191
MUN,1999-11-20,1999-00,0,DER,Derby County,2,1,1,0,33370
MUN,1999-12-04,1999-00,1,EVE,Everton,5,1,4,0,34516
MUN,1999-12-18,1999-00,0,WHU,West Ham United,4,2,2,0,26037
MUN,1999-12-26,1999-00,1,BRA,Bradford City,4,0,4,0,55188
MUN,1999-12-28,1999-00,0,SUN,Sunderland,2,2,0,0,42026
MUN,2000-01-24,1999-00,1,ARS,Arsenal,1,1,0,0,58293
MUN,2000-01-29,1999-00,1,MID,Middlesbrough,1,0,1,0,61267
MUN,2000-02-02,1999-00,0,SHW,Sheffield Wednesday,1,0,1,0,39640
MUN,2000-02-05,1999-00,1,COV,Coventry City,3,2,1,0,61380
MUN,2000-02-12,1999-00,0,NEW,Newcastle United,0,3,-3,0,36470
MUN,2000-02-20,1999-00,0,LEE,Leeds United,1,0,1,0,40160
MUN,2000-02-26,1999-00,0,WIM,Wimbledon,2,2,0,0,26129
MUN,2000-03-04,1999-00,1,LIV,Liverpool,1,1,0,0,61592
MUN,2000-03-11,1999-00,1,DER,Derby County,3,1,2,0,61
MUN,2000-03-18,1999-00,0,LEI,Leicester City,2,0,2,0,22170
MUN,2000-03-25,1999-00,0,BRA,Bradford City,4,0,4,0,18276
MUN,2000-04-01,1999-00,1,WHU,West Ham United,7,1,6,0,61611
MUN,2000-04-10,1999-00,0,MID,Middlesbrough,4,3,1,0,34775
MUN,2000-04-15,1999-00,1,SUN,Sunderland,4,0,4,0,61612
MUN,2000-04-22,1999-00,0,SOU,Southampton,3,1,2,0,15245
MUN,2000-04-24,1999-00,1,CHE,Chelsea,3,2,1,0,61593
MUN,2000-04-29,1999-00,0,WAT,Watford,3,2,1,0,20250
MUN,2000-05-06,1999-00,1,TOT,Tottenham Hotspur,3,1,2,0,61629
MUN,2000-05-14,1999-00,0,AVL,Aston Villa,1,0,1,0,39217
MUN,2000-08-20,2000-01,1,NEW,Newcastle United,2,0,2,0,67477
MUN,2000-08-22,2000-01,0,IPS,Ipswich Town,1,1,0,0,22007
MUN,2000-08-26,2000-01,0,WHU,West Ham United,2,2,0,0,25988
MUN,2000-09-05,2000-01,1,BRA,Bradford City,6,0,6,0,66447
MUN,2000-09-09,2000-01,1,SUN,Sunderland,3,0,3,0,67503
MUN,2000-09-16,2000-01,0,EVE,Everton,3,1,2,0,38541
MUN,2000-09-23,2000-01,1,CHE,Chelsea,3,3,0,0,67568
MUN,2000-10-01,2000-01,0,ARS,Arsenal,0,1,-1,0,38146
MUN,2000-10-14,2000-01,0,LEI,Leicester City,3,0,3,0,22132
MUN,2000-10-21,2000-01,1,LEE,Leeds United,3,0,3,0,67525
MUN,2000-10-28,2000-01,1,SOU,Southampton,5,0,5,0,67581
MUN,2000-11-04,2000-01,0,COV,Coventry City,2,1,1,0,21079
MUN,2000-11-11,2000-01,1,MID,Middlesbrough,2,1,1,0,67576
MUN,2000-11-18,2000-01,0,MCI,Manchester City,1,0,1,0,34429
MUN,2000-11-25,2000-01,0,DER,Derby County,3,0,3,0,32910
MUN,2000-12-02,2000-01,1,TOT,Tottenham Hotspur,2,0,2,0,67583
MUN,2000-12-09,2000-01,0,CHA,Charlton Athletic,3,3,0,0,20043
MUN,2000-12-17,2000-01,1,LIV,Liverpool,0,1,-1,0,67533
MUN,2000-12-23,2000-01,1,IPS,Ipswich Town,2,0,2,0,67597
MUN,2000-12-26,2000-01,0,AVL,Aston Villa,1,0,1,0,40889
MUN,2000-12-30,2000-01,0,NEW,Newcastle United,1,1,0,0,52134
MUN,2001-01-01,2000-01,1,WHU,West Ham United,3,1,2,0,67603
MUN,2001-01-13,2000-01,0,BRA,Bradford City,3,0,3,0,20551
MUN,2001-01-20,2000-01,1,AVL,Aston Villa,2,0,2,0,67533
MUN,2001-01-31,2000-01,0,SUN,Sunderland,1,0,1,0,48260
MUN,2001-02-03,2000-01,1,EVE,Everton,1,0,1,0,67528
MUN,2001-02-10,2000-01,0,CHE,Chelsea,1,1,0,0,34960
MUN,2001-02-25,2000-01,1,ARS,Arsenal,6,1,5,0,67535
MUN,2001-03-03,2000-01,0,LEE,Leeds United,1,1,0,0,40055
MUN,2001-03-17,2000-01,1,LEI,Leicester City,2,0,2,0,67516
MUN,2001-03-31,2000-01,0,LIV,Liverpool,0,2,-2,0,44806
MUN,2001-04-10,2000-01,1,CHA,Charlton Athletic,2,1,1,0,67505
MUN,2001-04-14,2000-01,1,COV,Coventry City,4,2,2,0,67637
MUN,2001-04-21,2000-01,1,MCI,Manchester City,1,1,0,0,67535
MUN,2001-04-28,2000-01,0,MID,Middlesbrough,2,0,2,0,34417
MUN,2001-05-05,2000-01,1,DER,Derby County,0,1,-1,0,67526
MUN,2001-05-13,2000-01,0,SOU,Southampton,1,2,-1,0,15246
MUN,2001-05-19,2000-01,0,TOT,Tottenham Hotspur,1,3,-2,0,36072
MUN,2001-08-19,2001-02,1,FUL,Fulham,3,2,1,0,67534
MUN,2001-08-22,2001-02,0,BLA,Blackburn Rovers,2,2,0,0,29836
MUN,2001-08-26,2001-02,0,AVL,Aston Villa,1,1,0,0,42632
MUN,2001-09-08,2001-02,1,EVE,Everton,4,1,3,0,67534
MUN,2001-09-15,2001-02,0,NEW,Newcastle United,3,4,-1,0,52056
MUN,2001-09-22,2001-02,1,IPS,Ipswich Town,4,0,4,0,67551
MUN,2001-09-29,2001-02,0,TOT,Tottenham Hotspur,5,3,2,0,36038
MUN,2001-10-13,2001-02,0,SUN,Sunderland,3,1,2,0,48305
MUN,2001-10-20,2001-02,1,BOL,Bolton Wanderers,1,2,-1,0,67559
MUN,2001-10-27,2001-02,1,LEE,Leeds United,1,1,0,0,67555
MUN,2001-11-04,2001-02,0,LIV,Liverpool,1,3,-2,0,44361
MUN,2001-11-17,2001-02,1,LEI,Leicester City,2,0,2,0,67651
MUN,2001-11-25,2001-02,0,ARS,Arsenal,1,3,-2,0,38174
MUN,2001-12-01,2001-02,1,CHE,Chelsea,0,3,-3,0,67544
MUN,2001-12-08,2001-02,1,WHU,West Ham United,0,1,-1,0,67582
MUN,2001-12-12,2001-02,1,DER,Derby County,5,0,5,0,67577
MUN,2001-12-15,2001-02,0,MID,Middlesbrough,1,0,1,0,34358
MUN,2001-12-22,2001-02,1,SOU,Southampton,6,1,5,0,67638
MUN,2001-12-26,2001-02,0,EVE,Everton,2,0,2,0,39948
MUN,2001-12-30,2001-02,0,FUL,Fulham,3,2,1,0,21159
MUN,2002-01-02,2001-02,1,NEW,Newcastle United,3,1,2,0,67646
MUN,2002-01-13,2001-02,0,SOU,Southampton,3,1,2,0,31858
MUN,2002-01-19,2001-02,1,BLA,Blackburn Rovers,2,1,1,0,67552
MUN,2002-01-22,2001-02,1,LIV,Liverpool,0,1,-1,0,67599
MUN,2002-01-29,2001-02,0,BOL,Bolton Wanderers,4,0,4,0,27350
MUN,2002-02-02,2001-02,1,SUN,Sunderland,4,1,3,0,67587
MUN,2002-02-10,2001-02,0,CHA,Charlton Athletic,2,0,2,0,26475
MUN,2002-02-23,2001-02,1,AVL,Aston Villa,1,0,1,0,67592
MUN,2002-03-03,2001-02,0,DER,Derby County,2,2,0,0,33041
MUN,2002-03-06,2001-02,1,TOT,Tottenham Hotspur,4,0,4,0,67059
MUN,2002-03-16,2001-02,0,WHU,West Ham United,5,3,2,0,35281
MUN,2002-03-23,2001-02,1,MID,Middlesbrough,0,1,-1,0,67683
MUN,2002-03-30,2001-02,0,LEE,Leeds United,4,3,1,0,40058
MUN,2002-04-06,2001-02,0,LEI,Leicester City,1,0,1,0,21447
MUN,2002-04-20,2001-02,0,CHE,Chelsea,3,0,3,0,41725
MUN,2002-04-27,2001-02,0,IPS,Ipswich Town,1,0,1,0,28433
MUN,2002-05-08,2001-02,1,ARS,Arsenal,0,1,-1,0,67580
MUN,2002-05-11,2001-02,1,CHA,Charlton Athletic,0,0,0,0,67571
MUN,2002-08-17,2002-03,1,WBA,West Bromwich Albion,1,0,1,0,67645
MUN,2002-08-23,2002-03,0,CHE,Chelsea,2,2,0,0,41541
MUN,2002-08-31,2002-03,0,SUN,Sunderland,1,1,0,0,47586
MUN,2002-09-03,2002-03,1,MID,Middlesbrough,1,0,1,0,67464
MUN,2002-09-11,2002-03,1,BOL,Bolton Wanderers,0,1,-1,0,67623
MUN,2002-09-14,2002-03,0,LEE,Leeds United,0,1,-1,0,39622
MUN,2002-09-21,2002-03,1,TOT,Tottenham Hotspur,1,0,1,0,67611
MUN,2002-09-28,2002-03,0,CHA,Charlton Athletic,3,1,2,0,26630
MUN,2002-10-07,2002-03,1,EVE,Everton,3,0,3,0,67629
MUN,2002-10-19,2002-03,0,FUL,Fulham,1,1,0,0,18103
MUN,2002-10-26,2002-03,1,AVL,Aston Villa,1,1,0,0,67619
MUN,2002-11-02,2002-03,1,SOU,Southampton,2,1,1,0,67691
MUN,2002-11-09,2002-03,0,MCI,Manchester City,1,3,-2,0,34649
MUN,2002-11-17,2002-03,0,WHU,West Ham United,1,1,0,0,35049
MUN,2002-11-23,2002-03,1,NEW,Newcastle United,5,3,2,0,67619
MUN,2002-12-01,2002-03,0,LIV,Liverpool,2,1,1,0,44250
MUN,2002-12-07,2002-03,1,ARS,Arsenal,2,0,2,0,67650
MUN,2002-12-14,2002-03,1,WHU,West Ham United,3,0,3,0,67555
MUN,2002-12-22,2002-03,0,BLA,Blackburn Rovers,0,1,-1,0,30475
MUN,2002-12-26,2002-03,0,MID,Middlesbrough,1,3,-2,0,34673
MUN,2002-12-28,2002-03,1,BIR,Birmingham City,2,0,2,0,67640
MUN,2003-01-01,2002-03,1,SUN,Sunderland,2,1,1,0,67609
MUN,2003-01-11,2002-03,0,WBA,West Bromwich Albion,3,1,2,0,27129
MUN,2003-01-18,2002-03,1,CHE,Chelsea,2,1,1,0,67606
MUN,2003-02-01,2002-03,0,SOU,Southampton,2,0,2,0,32085
MUN,2003-02-04,2002-03,0,BIR,Birmingham City,1,0,1,0,29475
MUN,2003-02-09,2002-03,1,MCI,Manchester City,1,1,0,0,67646
MUN,2003-02-22,2002-03,0,BOL,Bolton Wanderers,1,1,0,0,27409
MUN,2003-03-05,2002-03,1,LEE,Leeds United,2,1,1,0,67135
MUN,2003-03-15,2002-03,0,AVL,Aston Villa,1,0,1,0,42602
MUN,2003-03-22,2002-03,1,FUL,Fulham,3,0,3,0,67706
MUN,2003-04-05,2002-03,1,LIV,Liverpool,4,0,4,0,67639
MUN,2003-04-12,2002-03,0,NEW,Newcastle United,6,2,4,0,52164
MUN,2003-04-16,2002-03,0,ARS,Arsenal,2,2,0,0,38164
MUN,2003-04-19,2002-03,1,BLA,Blackburn Rovers,3,1,2,0,67626
MUN,2003-04-27,2002-03,0,TOT,Tottenham Hotspur,2,0,2,0,36073
MUN,2003-05-03,2002-03,1,CHA,Charlton Athletic,4,1,3,0,67721
MUN,2003-05-11,2002-03,0,EVE,Everton,2,1,1,0,40618
MUN,2003-08-16,2003-04,1,BOL,Bolton Wanderers,4,0,4,0,67647
MUN,2003-08-23,2003-04,0,NEW,Newcastle United,2,1,1,0,52165
MUN,2003-08-27,2003-04,1,WOL,Wolverhampton Wanderers,1,0,1,0,67648
MUN,2003-08-31,2003-04,0,SOU,Southampton,0,1,-1,0,32066
MUN,2003-09-13,2003-04,0,CHA,Charlton Athletic,2,0,2,0,26046
MUN,2003-09-21,2003-04,1,ARS,Arsenal,0,0,0,0,67639
MUN,2003-09-27,2003-04,0,LEI,Leicester City,4,1,3,0,32044
MUN,2003-10-04,2003-04,1,BIR,Birmingham City,3,0,3,0,67633
MUN,2003-10-18,2003-04,0,LEE,Leeds United,1,0,1,0,40153
MUN,2003-10-25,2003-04,1,FUL,Fulham,1,3,-2,0,67727
MUN,2003-11-01,2003-04,1,POR,Portsmouth,3,0,3,0,67639
MUN,2003-11-09,2003-04,0,LIV,Liverpool,2,1,1,0,44159
MUN,2003-11-22,2003-04,1,BLA,Blackburn Rovers,2,1,1,0,67748
MUN,2003-11-30,2003-04,0,CHE,Chelsea,0,1,-1,0,41932
MUN,2003-12-06,2003-04,1,AVL,Aston Villa,4,0,4,0,67621
MUN,2003-12-13,2003-04,1,MCI,Manchester City,3,1,2,0,67643
MUN,2003-12-21,2003-04,0,TOT,Tottenham Hotspur,2,1,1,0,35910
MUN,2003-12-26,2003-04,1,EVE,Everton,3,2,1,0,67642
MUN,2003-12-28,2003-04,0,MID,Middlesbrough,1,0,1,0,34738
MUN,2004-01-07,2003-04,0,BOL,Bolton Wanderers,2,1,1,0,27668
MUN,2004-01-11,2003-04,1,NEW,Newcastle United,0,0,0,0,67622
MUN,2004-01-17,2003-04,0,WOL,Wolverhampton Wanderers,0,1,-1,0,29396
MUN,2004-01-31,2003-04,1,SOU,Southampton,3,2,1,0,67758
MUN,2004-02-07,2003-04,0,EVE,Everton,4,3,1,0,40190
MUN,2004-02-11,2003-04,1,MID,Middlesbrough,2,3,-1,0,67346
MUN,2004-02-21,2003-04,1,LEE,Leeds United,1,1,0,0,67744
MUN,2004-02-28,2003-04,0,FUL,Fulham,1,1,0,0,18306
MUN,2004-03-14,2003-04,0,MCI,Manchester City,1,4,-3,0,47284
MUN,2004-03-20,2003-04,1,TOT,Tottenham Hotspur,3,0,3,0,67644
MUN,2004-03-28,2003-04,0,ARS,Arsenal,1,1,0,0,38184
MUN,2004-04-10,2003-04,0,BIR,Birmingham City,2,1,1,0,29548
MUN,2004-04-13,2003-04,1,LEI,Leicester City,1,0,1,0,67749
MUN,2004-04-17,2003-04,0,POR,Portsmouth,0,1,-1,0,20125
MUN,2004-04-20,2003-04,1,CHA,Charlton Athletic,2,0,2,0,67477
MUN,2004-04-24,2003-04,1,LIV,Liverpool,0,1,-1,0,67647
MUN,2004-05-01,2003-04,0,BLA,Blackburn Rovers,0,1,-1,0,29616
MUN,2004-05-08,2003-04,1,CHE,Chelsea,1,1,0,0,67609
MUN,2004-05-15,2003-04,0,AVL,Aston Villa,2,0,2,0,42573
MUN,2004-08-15,2004-05,0,CHE,Chelsea,0,1,-1,0,42267
MUN,2004-08-21,2004-05,1,NOR,Norwich City,2,1,1,0,67812
MUN,2004-08-28,2004-05,0,BLA,Blackburn Rovers,1,1,0,0,26155
MUN,2004-08-30,2004-05,1,EVE,Everton,0,0,0,0,67803
MUN,2004-09-11,2004-05,0,BOL,Bolton Wanderers,2,2,0,0,27766
MUN,2004-09-20,2004-05,1,LIV,Liverpool,2,1,1,0,67857
MUN,2004-09-25,2004-05,0,TOT,Tottenham Hotspur,1,0,1,0,36103
MUN,2004-10-03,2004-05,1,MID,Middlesbrough,1,1,0,0,67988
MUN,2004-10-16,2004-05,0,BIR,Birmingham City,0,0,0,0,29221
MUN,2004-10-24,2004-05,1,ARS,Arsenal,2,0,2,0,67862
MUN,2004-10-30,2004-05,0,POR,Portsmouth,0,2,-2,0,20190
MUN,2004-11-07,2004-05,1,MCI,Manchester City,0,0,0,0,67863
MUN,2004-11-14,2004-05,0,NEW,Newcastle United,3,1,2,0,52320
MUN,2004-11-20,2004-05,1,CHA,Charlton Athletic,2,0,2,0,67704
MUN,2004-11-27,2004-05,0,WBA,West Bromwich Albion,3,0,3,0,27402
MUN,2004-12-04,2004-05,1,SOU,Southampton,3,0,3,0,67921
MUN,2004-12-13,2004-05,0,FUL,Fulham,1,1,0,0,21940
MUN,2004-12-18,2004-05,1,CRY,Crystal Palace,5,2,3,0,67814
MUN,2004-12-26,2004-05,1,BOL,Bolton Wanderers,2,0,2,0,67867
MUN,2004-12-28,2004-05,0,AVL,Aston Villa,1,0,1,0,42593
MUN,2005-01-01,2004-05,0,MID,Middlesbrough,2,0,2,0,34199
MUN,2005-01-04,2004-05,1,TOT,Tottenham Hotspur,0,0,0,0,67962
MUN,2005-01-15,2004-05,0,LIV,Liverpool,1,0,1,0,44183
MUN,2005-01-22,2004-05,1,AVL,Aston Villa,3,1,2,0,67859
MUN,2005-02-01,2004-05,0,ARS,Arsenal,4,2,2,0,38154
MUN,2005-02-05,2004-05,1,BIR,Birmingham City,2,0,2,0,67838
MUN,2005-02-13,2004-05,0,MCI,Manchester City,2,0,2,0,47111
MUN,2005-02-26,2004-05,1,POR,Portsmouth,2,1,1,0,67989
MUN,2005-03-05,2004-05,0,CRY,Crystal Palace,0,0,0,0,26021
MUN,2005-03-19,2004-05,1,FUL,Fulham,1,0,1,0,67959
MUN,2005-04-02,2004-05,1,BLA,Blackburn Rovers,0,0,0,0,67939
MUN,2005-04-09,2004-05,0,NOR,Norwich City,0,2,-2,0,25522
MUN,2005-04-20,2004-05,0,EVE,Everton,0,1,-1,0,37160
MUN,2005-04-24,2004-05,1,NEW,Newcastle United,2,1,1,0,67845
MUN,2005-05-01,2004-05,0,CHA,Charlton Athletic,4,0,4,0,26768
MUN,2005-05-07,2004-05,1,WBA,West Bromwich Albion,1,1,0,0,67827
MUN,2005-05-10,2004-05,1,CHE,Chelsea,1,3,-2,0,67832
MUN,2005-05-15,2004-05,0,SOU,Southampton,2,1,1,0,32066
MUN,2005-08-13,2005-06,0,EVE,Everton,2,0,2,0,38607
MUN,2005-08-20,2005-06,1,AVL,Aston Villa,1,0,1,0,67934
MUN,2005-08-28,2005-06,0,NEW,Newcastle United,2,0,2,0,52327
MUN,2005-09-10,2005-06,1,MCI,Manchester City,1,1,0,0,67839
MUN,2005-09-18,2005-06,0,LIV,Liverpool,0,0,0,0,44961
MUN,2005-09-24,2005-06,1,BLA,Blackburn Rovers,1,2,-1,0,67765
MUN,2005-10-01,2005-06,0,FUL,Fulham,3,2,1,0,21862
MUN,2005-10-15,2005-06,0,SUN,Sunderland,3,1,2,0,39085
MUN,2005-10-22,2005-06,1,TOT,Tottenham Hotspur,1,1,0,0,67856
MUN,2005-10-29,2005-06,0,MID,Middlesbrough,1,4,-3,0,30579
MUN,2005-11-06,2005-06,1,CHE,Chelsea,1,0,1,0,67864
MUN,2005-11-19,2005-06,0,CHA,Charlton Athletic,3,1,2,0,26705
MUN,2005-11-27,2005-06,0,WHU,West Ham United,2,1,1,0,34260
MUN,2005-12-03,2005-06,1,POR,Portsmouth,3,0,3,0,67684
MUN,2005-12-11,2005-06,1,EVE,Everton,1,1,0,0,67831
MUN,2005-12-14,2005-06,1,WIG,Wigan Athletic,4,0,4,0,67793
MUN,2005-12-17,2005-06,0,AVL,Aston Villa,2,0,2,0,37128
MUN,2005-12-26,2005-06,1,WBA,West Bromwich Albion,3,0,3,0,67972
MUN,2005-12-28,2005-06,0,BIR,Birmingham City,2,2,0,0,28459
MUN,2005-12-31,2005-06,1,BOL,Bolton Wanderers,4,1,3,0,67861
MUN,2006-01-03,2005-06,0,ARS,Arsenal,0,0,0,0,38313
MUN,2006-01-14,2005-06,0,MCI,Manchester City,1,3,-2,0,47192
MUN,2006-01-22,2005-06,1,LIV,Liverpool,1,0,1,0,67874
MUN,2006-02-01,2005-06,0,BLA,Blackburn Rovers,3,4,-1,0,25484
MUN,2006-02-04,2005-06,1,FUL,Fulham,4,2,2,0,67841
MUN,2006-02-11,2005-06,0,POR,Portsmouth,3,1,2,0,20268
MUN,2006-03-06,2005-06,0,WIG,Wigan Athletic,2,1,1,0,23798
MUN,2006-03-12,2005-06,1,NEW,Newcastle United,2,0,2,0,67858
MUN,2006-03-18,2005-06,0,WBA,West Bromwich Albion,2,1,1,0,27410
MUN,2006-03-26,2005-06,1,BIR,Birmingham City,3,0,3,0,69070
MUN,2006-03-29,2005-06,1,WHU,West Ham United,1,0,1,0,69522
MUN,2006-04-01,2005-06,0,BOL,Bolton Wanderers,2,1,1,0,27718
MUN,2006-04-09,2005-06,1,ARS,Arsenal,2,0,2,0,70908
MUN,2006-04-14,2005-06,1,SUN,Sunderland,0,0,0,0,72519
MUN,2006-04-17,2005-06,0,TOT,Tottenham Hotspur,2,1,1,0,36141
MUN,2006-04-29,2005-06,0,CHE,Chelsea,0,3,-3,0,42182
MUN,2006-05-01,2005-06,1,MID,Middlesbrough,0,0,0,0,69531
MUN,2006-05-07,2005-06,1,CHA,Charlton Athletic,4,0,4,0,73006
MUN,2006-08-20,2006-07,1,FUL,Fulham,5,1,4,0,75115
MUN,2006-08-23,2006-07,0,CHA,Charlton Athletic,3,0,3,0,25412
MUN,2006-08-26,2006-07,0,WAT,Watford,2,1,1,0,19453
MUN,2006-09-09,2006-07,1,TOT,Tottenham Hotspur,1,0,1,0,75453
MUN,2006-09-17,2006-07,1,ARS,Arsenal,0,1,-1,0,75595
MUN,2006-09-23,2006-07,0,REA,Reading,1,1,0,0,24152
MUN,2006-10-01,2006-07,1,NEW,Newcastle United,2,0,2,0,75664
MUN,2006-10-14,2006-07,0,WIG,Wigan Athletic,3,1,2,0,20726
MUN,2006-10-22,2006-07,1,LIV,Liverpool,2,0,2,0,75828
MUN,2006-10-28,2006-07,0,BOL,Bolton Wanderers,4,0,4,0,27229
MUN,2006-11-04,2006-07,1,POR,Portsmouth,3,0,3,0,76004
MUN,2006-11-11,2006-07,0,BLA,Blackburn Rovers,1,0,1,0,25898
MUN,2006-11-18,2006-07,0,SHU,Sheffield United,2,1,1,0,32584
MUN,2006-11-26,2006-07,1,CHE,Chelsea,1,1,0,0,75948
MUN,2006-11-29,2006-07,1,EVE,Everton,3,0,3,0,75723
MUN,2006-12-02,2006-07,0,MID,Middlesbrough,2,1,1,0,31238
MUN,2006-12-09,2006-07,1,MCI,Manchester City,3,1,2,0,75858
MUN,2006-12-17,2006-07,0,WHU,West Ham United,0,1,-1,0,34989
MUN,2006-12-23,2006-07,0,AVL,Aston Villa,3,0,3,0,42551
MUN,2006-12-26,2006-07,1,WIG,Wigan Athletic,3,1,2,0,76018
MUN,2006-12-30,2006-07,1,REA,Reading,3,2,1,0,75910
MUN,2007-01-01,2006-07,0,NEW,Newcastle United,2,2,0,0,52302
MUN,2007-01-13,2006-07,1,AVL,Aston Villa,3,1,2,0,76073
MUN,2007-01-21,2006-07,0,ARS,Arsenal,1,2,-1,0,60128
MUN,2007-01-31,2006-07,1,WAT,Watford,4,0,4,0,76032
MUN,2007-02-04,2006-07,0,TOT,Tottenham Hotspur,4,0,4,0,36146
MUN,2007-02-10,2006-07,1,CHA,Charlton Athletic,2,0,2,0,75883
MUN,2007-02-24,2006-07,0,FUL,Fulham,2,1,1,0,24459
MUN,2007-03-03,2006-07,0,LIV,Liverpool,1,0,1,1,44887
MUN,2007-03-17,2006-07,1,BOL,Bolton Wanderers,4,1,3,0,76058
MUN,2007-03-31,2006-07,1,BLA,Blackburn Rovers,4,1,3,0,76004
MUN,2007-04-07,2006-07,0,POR,Portsmouth,1,2,-1,0,20223
MUN,2007-04-17,2006-07,1,SHU,Sheffield United,2,0,2,0,75540
MUN,2007-04-21,2006-07,1,MID,Middlesbrough,1,1,0,0,75967
MUN,2007-04-28,2006-07,0,EVE,Everton,4,2,2,0,39682
MUN,2007-05-05,2006-07,0,MCI,Manchester City,1,0,1,0,47244
MUN,2007-05-09,2006-07,0,CHE,Chelsea,0,0,0,0,41868
MUN,2007-05-13,2006-07,1,WHU,West Ham United,0,1,-1,0,75927
MUN,2007-08-12,2007-08,1,REA,Reading,0,0,0,0,
MUN,2007-08-15,2007-08,0,POR,Portsmouth,1,1,0,1,
MUN,2007-08-19,2007-08,0,MCI,Manchester City,0,1,-1,0,
MUN,2007-08-26,2007-08,1,TOT,Tottenham Hotspur,1,0,1,0,
MUN,2007-09-01,2007-08,1,SUN,Sunderland,1,0,1,0,
MUN,2007-09-15,2007-08,0,EVE,Everton,1,0,1,0,
MUN,2007-09-23,2007-08,1,CHE,Chelsea,2,0,2,0,
MUN,2007-09-29,2007-08,0,BIR,Birmingham City,1,0,1,0,
MUN,2007-10-06,2007-08,1,WIG,Wigan Athletic,4,0,4,0,75300
MUN,2007-10-20,2007-08,0,AVL,Aston Villa,4,1,3,0,
MUN,2007-10-27,2007-08,1,MID,Middlesbrough,4,1,3,0,
MUN,2007-11-03,2007-08,0,ARS,Arsenal,2,2,0,0,
MUN,2007-11-11,2007-08,1,BLA,Blackburn Rovers,2,0,2,0,
MUN,2007-11-24,2007-08,0,BOL,Bolton Wanderers,0,1,-1,0,
MUN,2007-12-03,2007-08,1,FUL,Fulham,2,0,2,0,
MUN,2007-12-08,2007-08,1,DER,Derby County,4,1,3,0,
MUN,2007-12-16,2007-08,0,LIV,Liverpool,1,0,1,0,
MUN,2007-12-23,2007-08,1,EVE,Everton,2,1,1,0,
MUN,2007-12-26,2007-08,0,SUN,Sunderland,4,0,4,0,
MUN,2007-12-29,2007-08,0,WHU,West Ham United,1,2,-1,0,
MUN,2008-01-01,2007-08,1,BIR,Birmingham City,1,0,1,0,
MUN,2008-01-12,2007-08,1,NEW,Newcastle United,6,0,6,0,75965
MUN,2008-01-19,2007-08,0,REA,Reading,2,0,2,0,
MUN,2008-01-30,2007-08,1,POR,Portsmouth,2,0,2,0,
MUN,2008-02-02,2007-08,0,TOT,Tottenham Hotspur,1,1,0,0,
MUN,2008-02-10,2007-08,1,MCI,Manchester City,1,2,-1,0,
MUN,2008-02-23,2007-08,0,NEW,Newcastle United,5,1,4,0,
MUN,2008-03-01,2007-08,0,FUL,Fulham,3,0,3,0,
MUN,2008-03-15,2007-08,0,DER,Derby County,1,0,1,0,
MUN,2008-03-19,2007-08,1,BOL,Bolton Wanderers,2,0,2,0,
MUN,2008-03-23,2007-08,1,LIV,Liverpool,3,0,3,0,
MUN,2008-03-29,2007-08,1,AVL,Aston Villa,4,0,4,0,
MUN,2008-04-06,2007-08,0,MID,Middlesbrough,2,2,0,0,
MUN,2008-04-13,2007-08,1,ARS,Arsenal,2,1,1,0,
MUN,2008-04-19,2007-08,0,BLA,Blackburn Rovers,1,1,0,0,
MUN,2008-04-26,2007-08,0,CHE,Chelsea,1,2,-1,0,
MUN,2008-05-03,2007-08,1,WHU,West Ham United,4,1,3,1,
MUN,2008-05-11,2007-08,0,WIG,Wigan Athletic,2,0,2,0,
MUN,2008-08-17,2008-09,1,NEW,Newcastle United,1,1,0,0,
MUN,2008-08-25,2008-09,0,POR,Portsmouth,1,0,1,0,
MUN,2008-09-13,2008-09,0,LIV,Liverpool,1,2,-1,1,
MUN,2008-09-21,2008-09,0,CHE,Chelsea,1,1,0,0,
MUN,2008-09-27,2008-09,1,BOL,Bolton Wanderers,2,0,2,0,
MUN,2008-10-04,2008-09,0,BLA,Blackburn Rovers,2,0,2,0,
MUN,2008-10-18,2008-09,1,WBA,West Bromwich Albion,4,0,4,0,75451
MUN,2008-10-25,2008-09,0,EVE,Everton,1,1,0,0,
MUN,2008-10-29,2008-09,1,WHU,West Ham United,2,0,2,0,75397
MUN,2008-11-01,2008-09,1,HUL,Hull City,4,3,1,0,
MUN,2008-11-08,2008-09,0,ARS,Arsenal,1,2,-1,0,
MUN,2008-11-15,2008-09,1,STO,Stoke City,5,0,5,0,
MUN,2008-11-22,2008-09,0,AVL,Aston Villa,0,0,0,0,
MUN,2008-11-30,2008-09,0,MCI,Manchester City,1,0,1,1,47320
MUN,2008-12-06,2008-09,1,SUN,Sunderland,1,0,1,0,75400
MUN,2008-12-13,2008-09,0,TOT,Tottenham Hotspur,0,0,0,0,35882
MUN,2008-12-26,2008-09,0,STO,Stoke City,1,0,1,0,27500
MUN,2008-12-29,2008-09,1,MID,Middlesbrough,1,0,1,0,75294
MUN,2009-01-11,2008-09,1,CHE,Chelsea,3,0,3,0,75455
MUN,2009-01-14,2008-09,1,WIG,Wigan Athletic,1,0,1,0,73917
MUN,2009-01-17,2008-09,0,BOL,Bolton Wanderers,1,0,1,0,26021
MUN,2009-01-27,2008-09,0,WBA,West Bromwich Albion,5,0,5,0,26105
MUN,2009-01-31,2008-09,1,EVE,Everton,1,0,1,0,75399
MUN,2009-02-08,2008-09,0,WHU,West Ham United,1,0,1,0,34958
MUN,2009-02-18,2008-09,1,FUL,Fulham,3,0,3,0,75437
MUN,2009-02-21,2008-09,1,BLA,Blackburn Rovers,2,1,1,0,75000
MUN,2009-03-04,2008-09,0,NEW,Newcastle United,2,1,1,0,51636
MUN,2009-03-14,2008-09,1,LIV,Liverpool,1,4,-3,1,75569
MUN,2009-03-21,2008-09,0,FUL,Fulham,0,2,-2,2,25652
MUN,2009-04-05,2008-09,1,AVL,Aston Villa,3,2,1,0,75409
MUN,2009-04-11,2008-09,0,SUN,Sunderland,2,1,1,0,45408
MUN,2009-04-22,2008-09,1,POR,Portsmouth,2,0,2,0,74895
MUN,2009-04-25,2008-09,1,TOT,Tottenham Hotspur,5,2,3,0,75458
MUN,2009-05-02,2008-09,0,MID,Middlesbrough,2,0,2,0,33767
MUN,2009-05-10,2008-09,1,MCI,Manchester City,2,0,2,0,75464
MUN,2009-05-13,2008-09,0,WIG,Wigan Athletic,2,1,1,0,21286
MUN,2009-05-16,2008-09,1,ARS,Arsenal,0,0,0,0,75468
MUN,2009-05-24,2008-09,0,HUL,Hull City,1,0,1,0,24945
MUN,2009-08-16,2009-10,1,BIR,Birmingham City,1,0,1,0,75062
MUN,2009-08-19,2009-10,0,BUR,Burnley,0,1,-1,0,20872
MUN,2009-08-22,2009-10,0,WIG,Wigan Athletic,5,0,5,0,18164
MUN,2009-08-29,2009-10,1,ARS,Arsenal,2,1,1,0,75095
MUN,2009-09-12,2009-10,0,TOT,Tottenham Hotspur,3,1,2,1,35785
MUN,2009-09-20,2009-10,1,MCI,Manchester City,4,3,1,0,75066
MUN,2009-09-26,2009-10,0,STO,Stoke City,2,0,2,0,27500
MUN,2009-10-03,2009-10,1,SUN,Sunderland,2,2,0,0,75114
MUN,2009-10-17,2009-10,1,BOL,Bolton Wanderers,2,1,1,0,75103
MUN,2009-10-25,2009-10,0,LIV,Liverpool,0,2,-2,1,44188
MUN,2009-10-31,2009-10,1,BLA,Blackburn Rovers,2,0,2,0,74658
MUN,2009-11-08,2009-10,0,CHE,Chelsea,0,1,-1,0,41836
MUN,2009-11-21,2009-10,1,EVE,Everton,3,0,3,0,75169
MUN,2009-11-28,2009-10,0,POR,Portsmouth,4,1,3,0,20482
MUN,2009-12-05,2009-10,0,WHU,West Ham United,4,0,4,0,34980
MUN,2009-12-12,2009-10,1,AVL,Aston Villa,0,1,-1,0,75130
MUN,2009-12-15,2009-10,1,WOL,Wolverhampton Wanderers,3,0,3,0,73709
MUN,2009-12-19,2009-10,0,FUL,Fulham,0,3,-3,0,25700
MUN,2009-12-27,2009-10,0,HUL,Hull City,3,1,2,0,24627
MUN,2009-12-30,2009-10,1,WIG,Wigan Athletic,5,0,5,0,74560
MUN,2010-01-09,2009-10,0,BIR,Birmingham City,1,1,0,1,28907
MUN,2010-01-16,2009-10,1,BUR,Burnley,3,0,3,0,75120
MUN,2010-01-23,2009-10,1,HUL,Hull City,4,0,4,0,73933
MUN,2010-01-31,2009-10,0,ARS,Arsenal,3,1,2,0,60091
MUN,2010-02-06,2009-10,1,POR,Portsmouth,5,0,5,0,74684
MUN,2010-02-10,2009-10,0,AVL,Aston Villa,1,1,0,1,42788
MUN,2010-02-20,2009-10,0,EVE,Everton,1,3,-2,0,39448
MUN,2010-02-23,2009-10,1,WHU,West Ham United,3,0,3,0,73797
MUN,2010-03-06,2009-10,0,WOL,Wolverhampton Wanderers,1,0,1,0,28883
MUN,2010-03-14,2009-10,1,FUL,Fulham,3,0,3,0,75207
MUN,2010-03-21,2009-10,1,LIV,Liverpool,2,1,1,0,75216
MUN,2010-03-27,2009-10,0,BOL,Bolton Wanderers,4,0,4,0,25370
MUN,2010-04-03,2009-10,1,CHE,Chelsea,1,2,-1,0,75217
MUN,2010-04-11,2009-10,0,BLA,Blackburn Rovers,0,0,0,0,29912
MUN,2010-04-17,2009-10,0,MCI,Manchester City,1,0,1,0,47019
MUN,2010-04-24,2009-10,1,TOT,Tottenham Hotspur,3,1,2,0,75268
MUN,2010-05-02,2009-10,0,SUN,Sunderland,1,0,1,0,47641
MUN,2010-05-09,2009-10,1,STO,Stoke City,4,0,4,0,75316
MUN,2010-08-16,2010-11,1,NEW,Newcastle United,3,0,3,0,75221
MUN,2010-08-22,2010-11,0,FUL,Fulham,2,2,0,0,25643
MUN,2010-08-28,2010-11,1,WHU,West Ham United,3,0,3,0,75061
MUN,2010-09-11,2010-11,0,EVE,Everton,3,3,0,0,36556
MUN,2010-09-19,2010-11,1,LIV,Liverpool,3,2,1,0,75213
MUN,2010-09-26,2010-11,0,BOL,Bolton Wanderers,2,2,0,0,23926
MUN,2010-10-02,2010-11,0,SUN,Sunderland,0,0,0,0,41709
MUN,2010-10-16,2010-11,1,WBA,West Bromwich Albion,2,2,0,0,75272
MUN,2010-10-24,2010-11,0,STO,Stoke City,2,1,1,0,27372
MUN,2010-10-30,2010-11,1,TOT,Tottenham Hotspur,2,0,2,0,75223
MUN,2010-11-06,2010-11,1,WOL,Wolverhampton Wanderers,2,1,1,0,75285
MUN,2010-11-10,2010-11,0,MCI,Manchester City,0,0,0,0,47210
MUN,2010-11-13,2010-11,0,AVL,Aston Villa,2,2,0,0,40073
MUN,2010-11-20,2010-11,1,WIG,Wigan Athletic,2,0,2,0,74181
MUN,2010-11-27,2010-11,1,BLA,Blackburn Rovers,7,1,6,0,74850
MUN,2010-12-13,2010-11,1,ARS,Arsenal,1,0,1,0,75227
MUN,2010-12-26,2010-11,1,SUN,Sunderland,2,0,2,0,75269
MUN,2010-12-28,2010-11,0,BIR,Birmingham City,1,1,0,0,28242
MUN,2011-01-01,2010-11,0,WBA,West Bromwich Albion,2,1,1,0,25499
MUN,2011-01-04,2010-11,1,STO,Stoke City,2,1,1,0,73401
MUN,2011-01-16,2010-11,0,TOT,Tottenham Hotspur,0,0,0,1,35828
MUN,2011-01-22,2010-11,1,BIR,Birmingham City,5,0,5,0,75326
MUN,2011-01-25,2010-11,0,BPL,Blackpool,3,2,1,0,15574
MUN,2011-02-01,2010-11,1,AVL,Aston Villa,3,1,2,0,75256
MUN,2011-02-05,2010-11,0,WOL,Wolverhampton Wanderers,1,2,-1,0,28811
MUN,2011-02-12,2010-11,1,MCI,Manchester City,2,1,1,0,75322
MUN,2011-02-26,2010-11,0,WIG,Wigan Athletic,4,0,4,0,18140
MUN,2011-03-01,2010-11,0,CHE,Chelsea,1,2,-1,1,41825
MUN,2011-03-06,2010-11,0,LIV,Liverpool,1,3,-2,0,44753
MUN,2011-03-19,2010-11,1,BOL,Bolton Wanderers,1,0,1,1,75486
MUN,2011-04-02,2010-11,0,WHU,West Ham United,4,2,2,0,34546
MUN,2011-04-09,2010-11,1,FUL,Fulham,2,0,2,0,75339
MUN,2011-04-19,2010-11,0,NEW,Newcastle United,0,0,0,0,49025
MUN,2011-04-23,2010-11,1,EVE,Everton,1,0,1,0,75300
MUN,2011-05-01,2010-11,0,ARS,Arsenal,0,1,-1,0,60107
MUN,2011-05-08,2010-11,1,CHE,Chelsea,2,1,1,0,75445
MUN,2011-05-14,2010-11,0,BLA,Blackburn Rovers,1,1,0,0,29867
MUN,2011-05-22,2010-11,1,BPL,Blackpool,4,2,2,0,75400
MUN,2011-08-14,2011-12,0,WBA,West Bromwich Albion,2,1,1,0,25360
MUN,2011-08-22,2011-12,1,TOT,Tottenham Hotspur,3,0,3,0,75498
MUN,2011-08-28,2011-12,1,ARS,Arsenal,8,2,6,0,75448
MUN,2011-09-10,2011-12,0,BOL,Bolton Wanderers,5,0,5,0,25944
MUN,2011-09-18,2011-12,1,CHE,Chelsea,3,1,2,0,75455
MUN,2011-09-24,2011-12,0,STO,Stoke City,1,1,0,0,27582
MUN,2011-10-01,2011-12,1,NOR,Norwich City,2,0,2,0,75514
MUN,2011-10-15,2011-12,0,LIV,Liverpool,1,1,0,0,45065
MUN,2011-10-23,2011-12,1,MCI,Manchester City,1,6,-5,1,75487
MUN,2011-10-29,2011-12,0,EVE,Everton,1,0,1,0,35494
MUN,2011-11-05,2011-12,1,SUN,Sunderland,1,0,1,0,75570
MUN,2011-11-19,2011-12,0,SWA,Swansea City,1,0,1,0,20295
MUN,2011-11-26,2011-12,1,NEW,Newcastle United,1,1,0,0,75594
MUN,2011-12-03,2011-12,0,AVL,Aston Villa,1,0,1,0,40053
MUN,2011-12-10,2011-12,1,WOL,Wolverhampton Wanderers,4,1,3,0,75627
MUN,2011-12-18,2011-12,0,QPR,Queens Park Rangers,2,0,2,0,18033
MUN,2011-12-21,2011-12,0,FUL,Fulham,5,0,5,0,25700
MUN,2011-12-26,2011-12,1,WIG,Wigan Athletic,5,0,5,0,75183
MUN,2011-12-31,2011-12,1,BLA,Blackburn Rovers,2,3,-1,0,75146
MUN,2012-01-04,2011-12,0,NEW,Newcastle United,0,3,-3,0,52299
MUN,2012-01-14,2011-12,1,BOL,Bolton Wanderers,3,0,3,0,75444
MUN,2012-01-22,2011-12,0,ARS,Arsenal,2,1,1,0,60093
MUN,2012-01-31,2011-12,1,STO,Stoke City,2,0,2,0,74719
MUN,2012-02-05,2011-12,0,CHE,Chelsea,3,3,0,0,41668
MUN,2012-02-11,2011-12,1,LIV,Liverpool,2,1,1,0,74844
MUN,2012-02-26,2011-12,0,NOR,Norwich City,2,1,1,0,26811
MUN,2012-03-04,2011-12,0,TOT,Tottenham Hotspur,3,1,2,0,36034
MUN,2012-03-11,2011-12,1,WBA,West Bromwich Albion,2,0,2,0,75598
MUN,2012-03-18,2011-12,0,WOL,Wolverhampton Wanderers,5,0,5,0,27494
MUN,2012-03-26,2011-12,1,FUL,Fulham,1,0,1,0,75570
MUN,2012-04-02,2011-12,0,BLA,Blackburn Rovers,2,0,2,0,26532
MUN,2012-04-08,2011-12,1,QPR,Queens Park Rangers,2,0,2,0,75505
MUN,2012-04-11,2011-12,0,WIG,Wigan Athletic,0,1,-1,0,18115
MUN,2012-04-15,2011-12,1,AVL,Aston Villa,4,0,4,0,75138
MUN,2012-04-22,2011-12,1,EVE,Everton,4,4,0,0,75522
MUN,2012-04-30,2011-12,0,MCI,Manchester City,0,1,-1,0,47259
MUN,2012-05-06,2011-12,1,SWA,Swansea City,2,0,2,0,75496
MUN,2012-05-13,2011-12,0,SUN,Sunderland,1,0,1,0,46452
MUN,2012-08-20,2012-13,0,EVE,Everton,0,1,-1,0,38415
MUN,2012-08-25,2012-13,1,FUL,Fulham,3,2,1,0,75352
MUN,2012-09-02,2012-13,0,SOU,Southampton,3,2,1,0,31609
MUN,2012-09-15,2012-13,1,WIG,Wigan Athletic,4,0,4,0,75142
MUN,2012-09-23,2012-13,0,LIV,Liverpool,2,1,1,0,44263
MUN,2012-09-29,2012-13,1,TOT,Tottenham Hotspur,2,3,-1,0,75566
MUN,2012-10-07,2012-13,0,NEW,Newcastle United,3,0,3,0,52203
MUN,2012-10-20,2012-13,1,STO,Stoke City,4,2,2,0,75585
MUN,2012-10-28,2012-13,0,CHE,Chelsea,3,2,1,0,41644
MUN,2012-11-03,2012-13,1,ARS,Arsenal,2,1,1,0,75492
MUN,2012-11-10,2012-13,0,AVL,Aston Villa,3,2,1,0,40538
MUN,2012-11-17,2012-13,0,NOR,Norwich City,0,1,-1,0,26840
MUN,2012-11-24,2012-13,1,QPR,Queens Park Rangers,3,1,2,0,75603
MUN,2012-11-28,2012-13,1,WHU,West Ham United,1,0,1,0,75572
MUN,2012-12-01,2012-13,0,REA,Reading,4,3,1,0,24095
MUN,2012-12-09,2012-13,0,MCI,Manchester City,3,2,1,0,47166
MUN,2012-12-15,2012-13,1,SUN,Sunderland,3,1,2,0,75582
MUN,2012-12-23,2012-13,0,SWA,Swansea City,1,1,0,0,20650
MUN,2012-12-26,2012-13,1,NEW,Newcastle United,4,3,1,0,75596
MUN,2012-12-29,2012-13,1,WBA,West Bromwich Albion,2,0,2,0,75595
MUN,2013-01-01,2012-13,0,WIG,Wigan Athletic,4,0,4,0,20342
MUN,2013-01-13,2012-13,1,LIV,Liverpool,2,1,1,0,75501
MUN,2013-01-20,2012-13,0,TOT,Tottenham Hotspur,1,1,0,0,35956
MUN,2013-01-30,2012-13,1,SOU,Southampton,2,1,1,0,75600
MUN,2013-02-02,2012-13,0,FUL,Fulham,1,0,1,0,25670
MUN,2013-02-10,2012-13,1,EVE,Everton,2,0,2,0,75525
MUN,2013-02-23,2012-13,0,QPR,Queens Park Rangers,2,0,2,0,18337
MUN,2013-03-02,2012-13,1,NOR,Norwich City,4,0,4,0,75586
MUN,2013-03-16,2012-13,1,REA,Reading,1,0,1,0,75605
MUN,2013-03-30,2012-13,0,SUN,Sunderland,1,0,1,0,43760
MUN,2013-04-08,2012-13,1,MCI,Manchester City,1,2,-1,0,75498
MUN,2013-04-14,2012-13,0,STO,Stoke City,2,0,2,0,27191
MUN,2013-04-17,2012-13,0,WHU,West Ham United,2,2,0,0,34692
MUN,2013-04-22,2012-13,1,AVL,Aston Villa,3,0,3,0,75591
MUN,2013-04-28,2012-13,0,ARS,Arsenal,1,1,0,0,60112
MUN,2013-05-05,2012-13,1,CHE,Chelsea,0,1,-1,1,75500
MUN,2013-05-12,2012-13,1,SWA,Swansea City,2,1,1,0,75572
MUN,2013-05-19,2012-13,0,WBA,West Bromwich Albion,5,5,0,0,26438
MUN,2013-08-17,2013-14,0,SWA,Swansea City,4,1,3,0,20733
MUN,2013-08-26,2013-14,1,CHE,Chelsea,0,0,0,0,75032
MUN,2013-09-01,2013-14,0,LIV,Liverpool,0,1,-1,0,44411
MUN,2013-09-14,2013-14,1,CRY,Crystal Palace,2,0,2,0,75170
MUN,2013-09-22,2013-14,0,MCI,Manchester City,1,4,-3,0,47156
MUN,2013-09-28,2013-14,1,WBA,West Bromwich Albion,1,2,-1,0,75042
MUN,2013-10-05,2013-14,0,SUN,Sunderland,2,1,1,0,45426
MUN,2013-10-19,2013-14,1,SOU,Southampton,1,1,0,0,75220
MUN,2013-10-26,2013-14,1,STO,Stoke City,3,2,1,0,75274
MUN,2013-11-02,2013-14,0,FUL,Fulham,3,1,2,0,25700
MUN,2013-11-10,2013-14,1,ARS,Arsenal,1,0,1,0,75138
MUN,2013-11-24,2013-14,0,CAR,Cardiff City,2,2,0,0,28016
MUN,2013-12-01,2013-14,0,TOT,Tottenham Hotspur,2,2,0,0,35884
MUN,2013-12-04,2013-14,1,EVE,Everton,0,1,-1,0,75210
MUN,2013-12-07,2013-14,1,NEW,Newcastle United,0,1,-1,0,75233
MUN,2013-12-15,2013-14,0,AVL,Aston Villa,3,0,3,0,42682
MUN,2013-12-21,2013-14,1,WHU,West Ham United,3,1,2,0,75350
MUN,2013-12-26,2013-14,0,HUL,Hull City,3,2,1,1,24826
MUN,2013-12-28,2013-14,0,NOR,Norwich City,1,0,1,0,26851
MUN,2014-01-01,2013-14,1,TOT,Tottenham Hotspur,1,2,-1,0,75265
MUN,2014-01-11,2013-14,1,SWA,Swansea City,2,0,2,0,75035
MUN,2014-01-19,2013-14,0,CHE,Chelsea,1,3,-2,1,41615
MUN,2014-01-28,2013-14,1,CAR,Cardiff City,2,0,2,0,75301
MUN,2014-02-01,2013-14,0,STO,Stoke City,1,2,-1,0,26547
MUN,2014-02-09,2013-14,1,FUL,Fulham,2,2,0,0,74966
MUN,2014-02-12,2013-14,0,ARS,Arsenal,0,0,0,0,60021
MUN,2014-02-22,2013-14,0,CRY,Crystal Palace,2,0,2,0,24571
MUN,2014-03-08,2013-14,0,WBA,West Bromwich Albion,3,0,3,0,26184
MUN,2014-03-16,2013-14,1,LIV,Liverpool,0,3,-3,1,75225
MUN,2014-03-22,2013-14,0,WHU,West Ham United,2,0,2,0,34237
MUN,2014-03-25,2013-14,1,MCI,Manchester City,0,3,-3,0,75203
MUN,2014-03-29,2013-14,1,AVL,Aston Villa,4,1,3,0,75368
MUN,2014-04-05,2013-14,0,NEW,Newcastle United,4,0,4,0,52081
MUN,2014-04-20,2013-14,0,EVE,Everton,0,2,-2,0,39436
MUN,2014-04-26,2013-14,1,NOR,Norwich City,4,0,4,0,75208
MUN,2014-05-03,2013-14,1,SUN,Sunderland,0,1,-1,0,75347
MUN,2014-05-06,2013-14,1,HUL,Hull City,3,1,2,0,75341
MUN,2014-05-11,2013-14,0,SOU,Southampton,1,1,0,0,31372
MUN,2014-08-16,2014-15,1,SWA,Swansea City,1,2,-1,0,75339
MUN,2014-08-24,2014-15,0,SUN,Sunderland,1,1,0,0,43217
MUN,2014-08-30,2014-15,0,BUR,Burnley,0,0,0,0,21099
MUN,2014-09-14,2014-15,1,QPR,Queens Park Rangers,4,0,4,0,75355
MUN,2014-09-21,2014-15,0,LEI,Leicester City,3,5,-2,1,31784
MUN,2014-09-27,2014-15,1,WHU,West Ham United,2,1,1,1,75317
MUN,2014-10-05,2014-15,1,EVE,Everton,2,1,1,0,75294
MUN,2014-10-20,2014-15,0,WBA,West Bromwich Albion,2,2,0,0,25794
MUN,2014-10-26,2014-15,1,CHE,Chelsea,1,1,0,0,75327
MUN,2014-11-02,2014-15,0,MCI,Manchester City,0,1,-1,1,45358
MUN,2014-11-08,2014-15,1,CRY,Crystal Palace,1,0,1,0,75325
MUN,2014-11-22,2014-15,0,ARS,Arsenal,2,1,1,0,60074
MUN,2014-11-29,2014-15,1,HUL,Hull City,3,0,3,0,75345
MUN,2014-12-02,2014-15,1,STO,Stoke City,2,1,1,0,75388
MUN,2014-12-08,2014-15,0,SOU,Southampton,2,1,1,0,31420
MUN,2014-12-14,2014-15,1,LIV,Liverpool,3,0,3,0,75331
MUN,2014-12-20,2014-15,0,AVL,Aston Villa,1,1,0,0,41273
MUN,2014-12-26,2014-15,1,NEW,Newcastle United,3,1,2,0,75318
MUN,2014-12-28,2014-15,0,TOT,Tottenham Hotspur,0,0,0,0,35711
MUN,2015-01-01,2014-15,0,STO,Stoke City,1,1,0,0,27203
MUN,2015-01-11,2014-15,1,SOU,Southampton,0,1,-1,0,75395
MUN,2015-01-17,2014-15,0,QPR,Queens Park Rangers,2,0,2,0,18098
MUN,2015-01-31,2014-15,1,LEI,Leicester City,3,1,2,0,75329
MUN,2015-02-08,2014-15,0,WHU,West Ham United,1,1,0,1,34499
MUN,2015-02-11,2014-15,1,BUR,Burnley,3,1,2,0,75356
MUN,2015-02-21,2014-15,0,SWA,Swansea City,1,2,-1,0,20809
MUN,2015-02-28,2014-15,1,SUN,Sunderland,2,0,2,0,75344
MUN,2015-03-04,2014-15,0,NEW,Newcastle United,1,0,1,0,49801
MUN,2015-03-15,2014-15,1,TOT,Tottenham Hotspur,3,0,3,0,75112
MUN,2015-03-22,2014-15,0,LIV,Liverpool,2,1,1,0,44405
MUN,2015-04-04,2014-15,1,AVL,Aston Villa,3,1,2,0,75397
MUN,2015-04-12,2014-15,1,MCI,Manchester City,4,2,2,0,75313
MUN,2015-04-18,2014-15,0,CHE,Chelsea,0,1,-1,0,41422
MUN,2015-04-26,2014-15,0,EVE,Everton,0,3,-3,0,39497
MUN,2015-05-02,2014-15,1,WBA,West Bromwich Albion,0,1,-1,0,75454
MUN,2015-05-09,2014-15,0,CRY,Crystal Palace,2,1,1,0,25009
MUN,2015-05-17,2014-15,1,ARS,Arsenal,1,1,0,0,75323
MUN,2015-05-24,2014-15,0,HUL,Hull City,0,0,0,1,24745
MUN,2015-08-08,2015-16,1,TOT,Tottenham Hotspur,1,0,1,0,75261
MUN,2015-08-14,2015-16,0,AVL,Aston Villa,1,0,1,0,42200
MUN,2015-08-22,2015-16,1,NEW,Newcastle United,0,0,0,0,75354
MUN,2015-08-30,2015-16,0,SWA,Swansea City,1,2,-1,0,20828
MUN,2015-09-12,2015-16,1,LIV,Liverpool,3,1,2,0,75347
MUN,2015-09-20,2015-16,0,SOU,Southampton,3,2,1,0,31588
MUN,2015-09-26,2015-16,1,SUN,Sunderland,3,0,3,0,75328
MUN,2015-10-04,2015-16,0,ARS,Arsenal,0,3,-3,0,60084
MUN,2015-10-17,2015-16,0,EVE,Everton,3,0,3,0,39553
MUN,2015-10-25,2015-16,1,MCI,Manchester City,0,0,0,0,75329
MUN,2015-10-31,2015-16,0,CRY,Crystal Palace,0,0,0,0,24854
MUN,2015-11-07,2015-16,1,WBA,West Bromwich Albion,2,0,2,0,75410
MUN,2015-11-21,2015-16,0,WAT,Watford,2,1,1,0,20702
MUN,2015-11-28,2015-16,0,LEI,Leicester City,1,1,0,0,32115
MUN,2015-12-05,2015-16,1,WHU,West Ham United,0,0,0,0,75350
MUN,2015-12-12,2015-16,0,BOU,Bournemouth,1,2,-1,0,11334
MUN,2015-12-19,2015-16,1,NOR,Norwich City,1,2,-1,0,75320
MUN,2015-12-26,2015-16,0,STO,Stoke City,0,2,-2,0,27426
MUN,2015-12-28,2015-16,1,CHE,Chelsea,0,0,0,0,75275
MUN,2016-01-02,2015-16,1,SWA,Swansea City,2,1,1,0,75415
MUN,2016-01-12,2015-16,0,NEW,Newcastle United,3,3,0,0,49673
MUN,2016-01-17,2015-16,0,LIV,Liverpool,1,0,1,0,43865
MUN,2016-01-23,2015-16,1,SOU,Southampton,0,1,-1,0,75408
MUN,2016-02-02,2015-16,1,STO,Stoke City,3,0,3,0,75234
MUN,2016-02-07,2015-16,0,CHE,Chelsea,1,1,0,0,41434
MUN,2016-02-13,2015-16,0,SUN,Sunderland,1,2,-1,0,41687
MUN,2016-02-28,2015-16,1,ARS,Arsenal,3,2,1,0,75329
MUN,2016-03-02,2015-16,1,WAT,Watford,1,0,1,0,75272
MUN,2016-03-06,2015-16,0,WBA,West Bromwich Albion,0,1,-1,1,24878
MUN,2016-03-20,2015-16,0,MCI,Manchester City,1,0,1,0,54557
MUN,2016-04-03,2015-16,1,EVE,Everton,1,0,1,0,75341
MUN,2016-04-10,2015-16,0,TOT,Tottenham Hotspur,0,3,-3,0,35761
MUN,2016-04-16,2015-16,1,AVL,Aston Villa,1,0,1,0,75411
MUN,2016-04-20,2015-16,1,CRY,Crystal Palace,2,0,2,0,75277
MUN,2016-05-01,2015-16,1,LEI,Leicester City,1,1,0,0,75275
MUN,2016-05-07,2015-16,0,NOR,Norwich City,1,0,1,0,27132
MUN,2016-05-10,2015-16,0,WHU,West Ham United,2,3,-1,0,34602
MUN,2016-05-17,2015-16,1,BOU,Bournemouth,3,1,2,0,74363
MUN,2016-08-14,2016-17,0,BOU,Bournemouth,3,1,2,0,11355
MUN,2016-08-19,2016-17,1,SOU,Southampton,2,0,2,0,75326
MUN,2016-08-27,2016-17,0,HUL,Hull City,1,0,1,0,24560
MUN,2016-09-10,2016-17,1,MCI,Manchester City,1,2,-1,0,75272
MUN,2016-09-18,2016-17,0,WAT,Watford,1,3,-2,0,21118
MUN,2016-09-24,2016-17,1,LEI,Leicester City,4,1,3,0,75256
MUN,2016-10-02,2016-17,1,STO,Stoke City,1,1,0,0,75251
MUN,2016-10-17,2016-17,0,LIV,Liverpool,0,0,0,0,52769
MUN,2016-10-23,2016-17,0,CHE,Chelsea,0,4,-4,0,41424
MUN,2016-10-29,2016-17,1,BUR,Burnley,0,0,0,1,75325
MUN,2016-11-06,2016-17,0,SWA,Swansea City,3,1,2,0,20938
MUN,2016-11-19,2016-17,1,ARS,Arsenal,1,1,0,0,75264
MUN,2016-11-27,2016-17,1,WHU,West Ham United,1,1,0,0,75313
MUN,2016-12-04,2016-17,0,EVE,Everton,1,1,0,0,39550
MUN,2016-12-11,2016-17,1,TOT,Tottenham Hotspur,1,0,1,0,75271
MUN,2016-12-14,2016-17,0,CRY,Crystal Palace,2,1,1,0,25547
MUN,2016-12-17,2016-17,0,WBA,West Bromwich Albion,2,0,2,0,26308
MUN,2016-12-26,2016-17,1,SUN,Sunderland,3,1,2,0,75325
MUN,2016-12-31,2016-17,1,MID,Middlesbrough,2,1,1,0,75314
MUN,2017-01-02,2016-17,0,WHU,West Ham United,2,0,2,0,56996
MUN,2017-01-15,2016-17,1,LIV,Liverpool,1,1,0,0,75276
MUN,2017-01-21,2016-17,0,STO,Stoke City,1,1,0,0,27423
MUN,2017-02-01,2016-17,1,HUL,Hull City,0,0,0,0,75297
MUN,2017-02-05,2016-17,0,LEI,Leicester City,3,0,3,0,32072
MUN,2017-02-11,2016-17,1,WAT,Watford,2,0,2,0,75301
MUN,2017-03-04,2016-17,1,BOU,Bournemouth,1,1,0,0,75245
MUN,2017-03-19,2016-17,0,MID,Middlesbrough,3,1,2,0,32689
MUN,2017-04-01,2016-17,1,WBA,West Bromwich Albion,0,0,0,0,75397
MUN,2017-04-04,2016-17,1,EVE,Everton,1,1,0,0,75272
MUN,2017-04-09,2016-17,0,SUN,Sunderland,3,0,3,0,43779
MUN,2017-04-16,2016-17,1,CHE,Chelsea,2,0,2,0,75272
MUN,2017-04-23,2016-17,0,BUR,Burnley,2,0,2,0,21870
MUN,2017-04-27,2016-17,0,MCI,Manchester City,0,0,0,1,54176
MUN,2017-04-30,2016-17,1,SWA,Swansea City,1,1,0,0,75271
MUN,2017-05-07,2016-17,0,ARS,Arsenal,0,2,-2,0,60055
MUN,2017-05-14,2016-17,0,TOT,Tottenham Hotspur,1,2,-1,0,31848
MUN,2017-05-17,2016-17,0,SOU,Southampton,0,0,0,0,31425
MUN,2017-05-21,2016-17,1,CRY,Crystal Palace,2,0,2,0,75254
MUN,2017-08-13,2017-18,1,WHU,West Ham United,4,0,4,0,74928
MUN,2017-08-19,2017-18,0,SWA,Swansea City,4,0,4,0,20862
MUN,2017-08-26,2017-18,1,LEI,Leicester City,2,0,2,0,75021
MUN,2017-09-09,2017-18,0,STO,Stoke City,2,2,0,0,29320
MUN,2017-09-17,2017-18,1,EVE,Everton,4,0,4,0,75042
MUN,2017-09-23,2017-18,0,SOU,Southampton,1,0,1,0,31930
MUN,2017-09-30,2017-18,1,CRY,Crystal Palace,4,0,4,0,75118
MUN,2017-10-14,2017-18,0,LIV,Liverpool,0,0,0,0,52912
MUN,2017-10-21,2017-18,0,HUD,Huddersfield Town,1,2,-1,0,24169
MUN,2017-10-28,2017-18,1,TOT,Tottenham Hotspur,1,0,1,0,75034
MUN,2017-11-05,2017-18,0,CHE,Chelsea,0,1,-1,0,41615
MUN,2017-11-18,2017-18,1,NEW,Newcastle United,4,1,3,0,75035
MUN,2017-11-25,2017-18,1,BHA,Brighton and Hove Albion,1,0,1,0,75018
MUN,2017-11-28,2017-18,0,WAT,Watford,4,2,2,0,20552
MUN,2017-12-02,2017-18,0,ARS,Arsenal,3,1,2,1,59547
MUN,2017-12-10,2017-18,1,MCI,Manchester City,1,2,-1,0,74847
MUN,2017-12-13,2017-18,1,BOU,Bournemouth,1,0,1,0,74798
MUN,2017-12-17,2017-18,0,WBA,West Bromwich Albion,2,1,1,0,24782
MUN,2017-12-23,2017-18,0,LEI,Leicester City,2,2,0,0,32202
MUN,2017-12-26,2017-18,1,BUR,Burnley,2,2,0,0,75046
MUN,2017-12-30,2017-18,1,SOU,Southampton,0,0,0,0,75051
MUN,2018-01-01,2017-18,0,EVE,Everton,2,0,2,0,39188
MUN,2018-01-15,2017-18,1,STO,Stoke City,3,0,3,0,74726
MUN,2018-01-20,2017-18,0,BUR,Burnley,1,0,1,0,21841
MUN,2018-01-31,2017-18,0,TOT,Tottenham Hotspur,0,2,-2,0,81978
MUN,2018-02-03,2017-18,1,HUD,Huddersfield Town,2,0,2,0,74742
MUN,2018-02-11,2017-18,0,NEW,Newcastle United,0,1,-1,0,52309
MUN,2018-02-25,2017-18,1,CHE,Chelsea,2,1,1,0,75060
MUN,2018-03-05,2017-18,0,CRY,Crystal Palace,3,2,1,0,25840
MUN,2018-03-10,2017-18,1,LIV,Liverpool,2,1,1,0,74855
MUN,2018-03-31,2017-18,1,SWA,Swansea City,2,0,2,0,75038
MUN,2018-04-07,2017-18,0,MCI,Manchester City,3,2,1,0,54259
MUN,2018-04-15,2017-18,1,WBA,West Bromwich Albion,0,1,-1,0,75095
MUN,2018-04-18,2017-18,0,BOU,Bournemouth,2,0,2,0,10952
MUN,2018-04-29,2017-18,1,ARS,Arsenal,2,1,1,0,75035
MUN,2018-05-04,2017-18,0,BHA,Brighton and Hove Albion,0,1,-1,0,30611
MUN,2018-05-10,2017-18,0,WHU,West Ham United,0,0,0,0,56902
MUN,2018-05-13,2017-18,1,WAT,Watford,1,0,1,0,75049
MUN,2018-08-10,2018-19,1,LEI,Leicester City,2,1,1,0,74439
MUN,2018-08-19,2018-19,0,BHA,Brighton and Hove Albion,2,3,-1,0,30592
MUN,2018-08-27,2018-19,1,TOT,Tottenham Hotspur,0,3,-3,0,74400
MUN,2018-09-02,2018-19,0,BUR,Burnley,2,0,2,1,21525
MUN,2018-09-15,2018-19,0,WAT,Watford,2,1,1,1,20537
MUN,2018-09-22,2018-19,1,WOL,Wolverhampton Wanderers,1,1,0,0,74489
MUN,2018-09-29,2018-19,0,WHU,West Ham United,1,3,-2,0,56938
MUN,2018-10-06,2018-19,1,NEW,Newcastle United,3,2,1,0,74519
MUN,2018-10-20,2018-19,0,CHE,Chelsea,2,2,0,0,40721
MUN,2018-10-28,2018-19,1,EVE,Everton,2,1,1,0,74525
MUN,2018-11-03,2018-19,0,BOU,Bournemouth,2,1,1,0,10792
MUN,2018-11-11,2018-19,0,MCI,Manchester City,1,3,-2,0,54316
MUN,2018-11-24,2018-19,1,CRY,Crystal Palace,0,0,0,0,74516
MUN,2018-12-01,2018-19,0,SOU,Southampton,2,2,0,0,30187
MUN,2018-12-05,2018-19,1,ARS,Arsenal,2,2,0,0,74507
MUN,2018-12-08,2018-19,1,FUL,Fulham,4,1,3,0,74523
MUN,2018-12-16,2018-19,0,LIV,Liverpool,1,3,-2,0,52908
MUN,2018-12-22,2018-19,0,CAR,Cardiff City,5,1,4,0,33028
MUN,2018-12-26,2018-19,1,HUD,Huddersfield Town,3,1,2,0,74523
MUN,2018-12-30,2018-19,1,BOU,Bournemouth,4,1,3,1,74556
MUN,2019-01-02,2018-19,0,NEW,Newcastle United,2,0,2,0,52217
MUN,2019-01-13,2018-19,0,TOT,Tottenham Hotspur,1,0,1,0,80062
MUN,2019-01-19,2018-19,1,BHA,Brighton and Hove Albion,2,1,1,0,74532
MUN,2019-01-29,2018-19,1,BUR,Burnley,2,2,0,0,74529
MUN,2019-02-03,2018-19,0,LEI,Leicester City,1,0,1,0,32148
MUN,2019-02-09,2018-19,0,FUL,Fulham,3,0,3,0,25001
MUN,2019-02-24,2018-19,1,LIV,Liverpool,0,0,0,0,74519
MUN,2019-02-27,2018-19,0,CRY,Crystal Palace,3,1,2,0,25754
MUN,2019-03-02,2018-19,1,SOU,Southampton,3,2,1,0,74459
MUN,2019-03-10,2018-19,0,ARS,Arsenal,0,2,-2,0,60000
MUN,2019-03-30,2018-19,1,WAT,Watford,2,1,1,0,74543
MUN,2019-04-02,2018-19,0,WOL,Wolverhampton Wanderers,1,2,-1,1,31302
MUN,2019-04-13,2018-19,1,WHU,West Ham United,2,1,1,0,74478
MUN,2019-04-21,2018-19,0,EVE,Everton,0,4,-4,0,39395
MUN,2019-04-24,2018-19,1,MCI,Manchester City,0,2,-2,0,74431
MUN,2019-04-28,2018-19,1,CHE,Chelsea,1,1,0,0,74526
MUN,2019-05-05,2018-19,0,HUD,Huddersfield Town,1,1,0,0,24263
MUN,2019-05-12,2018-19,1,CAR,Cardiff City,0,2,-2,0,74457
MUN,2019-08-11,2019-20,1,CHE,Chelsea,4,0,4,0,73620
MUN,2019-08-19,2019-20,0,WOL,Wolverhampton Wanderers,1,1,0,0,31314
MUN,2019-08-24,2019-20,1,CRY,Crystal Palace,1,2,-1,0,73454
MUN,2019-08-31,2019-20,0,SOU,Southampton,1,1,0,0,30499
MUN,2019-09-14,2019-20,1,LEI,Leicester City,1,0,1,0,73689
MUN,2019-09-22,2019-20,0,WHU,West Ham United,0,2,-2,0,59936
MUN,2019-09-30,2019-20,1,ARS,Arsenal,1,1,0,0,73201
MUN,2019-10-06,2019-20,0,NEW,Newcastle United,0,1,-1,0,51198
MUN,2019-10-20,2019-20,1,LIV,Liverpool,1,1,0,0,73737
MUN,2019-10-27,2019-20,0,NOR,Norwich City,3,1,2,0,27108
MUN,2019-11-02,2019-20,0,BOU,Bournemouth,0,1,-1,0,10669
MUN,2019-11-10,2019-20,1,BHA,Brighton and Hove Albion,3,1,2,0,73556
MUN,2019-11-24,2019-20,0,SHU,Sheffield United,3,3,0,0,32024
MUN,2019-12-01,2019-20,1,AVL,Aston Villa,2,2,0,0,73381
MUN,2019-12-04,2019-20,1,TOT,Tottenham Hotspur,2,1,1,0,73252
MUN,2019-12-07,2019-20,0,MCI,Manchester City,2,1,1,0,54403
MUN,2019-12-15,2019-20,1,EVE,Everton,1,1,0,0,63328
MUN,2019-12-22,2019-20,0,WAT,Watford,0,2,-2,0,21488
MUN,2019-12-26,2019-20,1,NEW,Newcastle United,4,1,3,0,73206
MUN,2019-12-28,2019-20,0,BUR,Burnley,2,0,2,0,21924
MUN,2020-01-01,2019-20,0,ARS,Arsenal,0,2,-2,0,60328
MUN,2020-01-11,2019-20,1,NOR,Norwich City,4,0,4,0,73271
MUN,2020-01-19,2019-20,0,LIV,Liverpool,0,2,-2,0,52916
MUN,2020-01-22,2019-20,1,BUR,Burnley,0,2,-2,0,73198
MUN,2020-02-01,2019-20,1,WOL,Wolverhampton Wanderers,0,0,0,0,73363
MUN,2020-02-17,2019-20,0,CHE,Chelsea,2,0,2,0,40504
MUN,2020-02-23,2019-20,1,WAT,Watford,3,0,3,0,73347
MUN,2020-03-01,2019-20,0,EVE,Everton,1,1,0,0,39374
MUN,2020-03-08,2019-20,1,MCI,Manchester City,2,0,2,0,73288
MUN,2020-06-19,2019-20,0,TOT,Tottenham Hotspur,1,1,0,0,
MUN,2020-06-24,2019-20,1,SHU,Sheffield United,3,0,3,0,
MUN,2020-06-30,2019-20,0,BHA,Brighton and Hove Albion,3,0,3,0,
MUN,2020-07-04,2019-20,1,BOU,Bournemouth,5,2,3,0,
MUN,2020-07-09,2019-20,0,AVL,Aston Villa,3,0,3,0,
MUN,2020-07-13,2019-20,1,SOU,Southampton,2,2,0,0,
MUN,2020-07-16,2019-20,0,CRY,Crystal Palace,2,0,2,0,
MUN,2020-07-22,2019-20,1,WHU,West Ham United,1,1,0,0,
MUN,2020-07-26,2019-20,0,LEI,Leicester City,2,0,2,0,
MUN,2020-09-19,2020-21,1,CRY,Crystal Palace,1,3,-2,0,
MUN,2020-09-26,2020-21,0,BHA,Brighton and Hove Albion,3,2,1,0,
MUN,2020-10-04,2020-21,1,TOT,Tottenham Hotspur,1,6,-5,1,
MUN,2020-10-17,2020-21,0,NEW,Newcastle United,4,1,3,0,
MUN,2020-10-24,2020-21,1,CHE,Chelsea,0,0,0,0,
MUN,2020-11-01,2020-21,1,ARS,Arsenal,0,1,-1,0,
MUN,2020-11-07,2020-21,0,EVE,Everton,3,1,2,0,
MUN,2020-11-21,2020-21,1,WBA,West Bromwich Albion,1,0,1,0,
MUN,2020-11-29,2020-21,0,SOU,Southampton,3,2,1,0,
MUN,2020-12-05,2020-21,0,WHU,West Ham United,3,1,2,0,
MUN,2020-12-12,2020-21,1,MCI,Manchester City,0,0,0,0,
MUN,2020-12-17,2020-21,0,SHU,Sheffield United,3,2,1,0,
MUN,2020-12-20,2020-21,1,LEE,Leeds United,6,2,4,0,
MUN,2020-12-26,2020-21,0,LEI,Leicester City,2,2,0,0,
MUN,2020-12-29,2020-21,1,WOL,Wolverhampton Wanderers,1,0,1,0,
MUN,2021-01-01,2020-21,1,AVL,Aston Villa,2,1,1,0,
MUN,2021-01-12,2020-21,0,BUR,Burnley,1,0,1,0,
MUN,2021-01-17,2020-21,0,LIV,Liverpool,0,0,0,0,
MUN,2021-01-20,2020-21,0,FUL,Fulham,2,1,1,0,
MUN,2021-01-27,2020-21,1,SHU,Sheffield United,1,2,-1,0,
MUN,2021-01-30,2020-21,0,ARS,Arsenal,0,0,0,0,
MUN,2021-02-02,2020-21,1,SOU,Southampton,9,0,9,0,
MUN,2021-02-06,2020-21,1,EVE,Everton,3,3,0,0,
MUN,2021-02-14,2020-21,0,WBA,West Bromwich Albion,1,1,0,0,
MUN,2021-02-21,2020-21,1,NEW,Newcastle United,3,1,2,0,
MUN,2021-02-28,2020-21,0,CHE,Chelsea,0,0,0,0,
MUN,2021-03-03,2020-21,0,CRY,Crystal Palace,0,0,0,0,
MUN,2021-03-07,2020-21,0,MCI,Manchester City,2,0,2,0,
MUN,2021-03-14,2020-21,1,WHU,West Ham United,1,0,1,0,
MUN,2021-04-04,2020-21,1,BHA,Brighton and Hove Albion,2,1,1,0,
MUN,2021-04-11,2020-21,0,TOT,Tottenham Hotspur,3,1,2,0,
MUN,2021-04-18,2020-21,1,BUR,Burnley,3,1,2,0,
MUN,2021-04-25,2020-21,0,LEE,Leeds United,0,0,0,0,
MUN,2021-05-09,2020-21,0,AVL,Aston Villa,3,1,2,0,
MUN,2021-05-11,2020-21,1,LEI,Leicester City,1,2,-1,0,
MUN,2021-05-13,2020-21,1,LIV,Liverpool,2,4,-2,0,
MUN,2021-05-18,2020-21,1,FUL,Fulham,1,1,0,0,
MUN,2021-05-23,2020-21,0,WOL,Wolverhampton Wanderers,2,1,1,0,
MUN,2021-08-14,2021-22,1,LEE,Leeds United,5,1,4,0,72732
MUN,2021-08-22,2021-22,0,SOU,Southampton,1,1,0,0,29485
MUN,2021-08-29,2021-22,0,WOL,Wolverhampton Wanderers,1,0,1,0,30621
MUN,2021-09-11,2021-22,1,NEW,Newcastle United,4,1,3,0,72732
MUN,2021-09-19,2021-22,0,WHU,West Ham United,2,1,1,0,59958
MUN,2021-09-25,2021-22,1,AVL,Aston Villa,0,1,-1,0,72922
MUN,2021-10-02,2021-22,1,EVE,Everton,1,1,0,0,73128
MUN,2021-10-16,2021-22,0,LEI,Leicester City,2,4,-2,0,32219
MUN,2021-10-24,2021-22,1,LIV,Liverpool,0,5,-5,1,73088
MUN,2021-10-30,2021-22,0,TOT,Tottenham Hotspur,3,0,3,0,60356
MUN,2021-11-06,2021-22,1,MCI,Manchester City,0,2,-2,0,73086
MUN,2021-11-20,2021-22,0,WAT,Watford,1,4,-3,1,21087
MUN,2021-11-28,2021-22,0,CHE,Chelsea,1,1,0,0,40041
MUN,2021-12-02,2021-22,1,ARS,Arsenal,3,2,1,0,73123
MUN,2021-12-05,2021-22,1,CRY,Crystal Palace,1,0,1,0,73172
MUN,2021-12-11,2021-22,0,NOR,Norwich City,1,0,1,0,27066
MUN,2021-12-27,2021-22,0,NEW,Newcastle United,1,1,0,0,52178
MUN,2021-12-30,2021-22,1,BUR,Burnley,3,1,2,0,73121
MUN,2022-01-03,2021-22,1,WOL,Wolverhampton Wanderers,0,1,-1,0,73045
MUN,2022-01-15,2021-22,0,AVL,Aston Villa,2,2,0,0,41968
MUN,2022-01-19,2021-22,0,BRE,Brentford,3,1,2,0,17094
MUN,2022-01-22,2021-22,1,WHU,West Ham United,1,0,1,0,73130
MUN,2022-02-08,2021-22,0,BUR,Burnley,1,1,0,0,21233
MUN,2022-02-12,2021-22,1,SOU,Southampton,1,1,0,0,73084
MUN,2022-02-15,2021-22,1,BHA,Brighton and Hove Albion,2,0,2,0,73012
MUN,2022-02-20,2021-22,0,LEE,Leeds United,4,2,2,0,36715
MUN,2022-02-26,2021-22,1,WAT,Watford,0,0,0,0,73152
MUN,2022-03-06,2021-22,0,MCI,Manchester City,1,4,-3,0,53165
MUN,2022-03-12,2021-22,1,TOT,Tottenham Hotspur,3,2,1,0,73458
MUN,2022-04-02,2021-22,1,LEI,Leicester City,1,1,0,0,73444
MUN,2022-04-09,2021-22,0,EVE,Everton,0,1,-1,0,39080
MUN,2022-04-16,2021-22,1,NOR,Norwich City,3,2,1,0,73381
MUN,2022-04-19,2021-22,0,LIV,Liverpool,0,4,-4,0,52686
MUN,2022-04-23,2021-22,0,ARS,Arsenal,1,3,-2,0,60223
MUN,2022-04-28,2021-22,1,CHE,Chelsea,1,1,0,0,73564
MUN,2022-05-02,2021-22,1,BRE,Brentford,3,0,3,0,73482
MUN,2022-05-07,2021-22,0,BHA,Brighton and Hove Albion,0,4,-4,0,31637
MUN,2022-05-22,2021-22,0,CRY,Crystal Palace,0,1,-1,0,25434
MUN,2022-08-07,2022-23,1,BHA,Brighton and Hove Albion,1,2,-1,0,73711
MUN,2022-08-13,2022-23,0,BRE,Brentford,0,4,-4,0,17051
MUN,2022-08-22,2022-23,1,LIV,Liverpool,2,1,1,0,
MUN,2022-08-27,2022-23,0,SOU,Southampton,1,0,1,0,31196
MUN,2022-09-01,2022-23,0,LEI,Leicester City,1,0,1,0,32226
MUN,2022-09-04,2022-23,1,ARS,Arsenal,3,1,2,0,73431
MUN,2022-10-02,2022-23,0,MCI,Manchester City,3,6,-3,0,53475
MUN,2022-10-09,2022-23,0,EVE,Everton,2,1,1,0,39258
MUN,2022-10-16,2022-23,1,NEW,Newcastle United,0,0,0,0,73726
MUN,2022-10-19,2022-23,1,TOT,Tottenham Hotspur,2,0,2,0,73677
MUN,2022-10-22,2022-23,0,CHE,Chelsea,1,1,0,0,39503
MUN,2022-10-30,2022-23,1,WHU,West Ham United,1,0,1,0,73682
MUN,2022-11-06,2022-23,0,AVL,Aston Villa,1,3,-2,0,42058
MUN,2022-11-13,2022-23,0,FUL,Fulham,2,1,1,0,24246
MUN,2022-12-27,2022-23,1,NFO,Nottingham Forest,3,0,3,0,73608
MUN,2022-12-31,2022-23,0,WOL,Wolverhampton Wanderers,1,0,1,0,31658
MUN,2023-01-03,2022-23,1,BOU,Bournemouth,3,0,3,0,73322
MUN,2023-01-14,2022-23,1,MCI,Manchester City,2,1,1,0,75546
MUN,2023-01-18,2022-23,0,CRY,Crystal Palace,1,1,0,0,23343
MUN,2023-01-22,2022-23,0,ARS,Arsenal,2,3,-1,0,60325
MUN,2023-02-04,2022-23,1,CRY,Crystal Palace,2,1,1,1,73420
MUN,2023-02-08,2022-23,1,LEE,Leeds United,2,2,0,0,73456
MUN,2023-02-12,2022-23,0,LEE,Leeds United,2,0,2,0,36919
MUN,2023-02-19,2022-23,1,LEI,Leicester City,3,0,3,0,73578
MUN,2023-03-05,2022-23,0,LIV,Liverpool,0,7,-7,0,53001
MUN,2023-03-12,2022-23,1,SOU,Southampton,0,0,0,1,73439
MUN,2023-04-02,2022-23,0,NEW,Newcastle United,0,2,-2,0,52268
MUN,2023-04-05,2022-23,1,BRE,Brentford,1,0,1,0,73309
MUN,2023-04-08,2022-23,1,EVE,Everton,2,0,2,0,73509
MUN,2023-04-16,2022-23,0,NFO,Nottingham Forest,2,0,2,0,29435
MUN,2023-04-27,2022-23,0,TOT,Tottenham Hotspur,2,2,0,0,61586
MUN,2023-04-30,2022-23,1,AVL,Aston Villa,1,0,1,0,73592
MUN,2023-05-04,2022-23,0,BHA,Brighton and Hove Albion,0,1,-1,0,31577
MUN,2023-05-07,2022-23,0,WHU,West Ham United,0,1,-1,0,62477
MUN,2023-05-13,2022-23,1,WOL,Wolverhampton Wanderers,2,0,2,0,73570
MUN,2023-05-20,2022-23,0,BOU,Bournemouth,1,0,1,0,10240
MUN,2023-05-25,2022-23,1,CHE,Chelsea,4,1,3,0,73561
MUN,2023-05-28,2022-23,1,FUL,Fulham,2,1,1,0,73465
MUN,2023-08-14,2023-24,1,WOL,Wolverhampton Wanderers,1,0,1,0,73358
MUN,2023-08-19,2023-24,0,TOT,Tottenham Hotspur,0,2,-2,0,61910
MUN,2023-08-26,2023-24,1,NFO,Nottingham Forest,3,2,1,0,73595
MUN,2023-09-03,2023-24,0,ARS,Arsenal,1,3,-2,0,60192
MUN,2023-09-16,2023-24,1,BHA,Brighton and Hove Albion,1,3,-2,0,73592
MUN,2023-09-23,2023-24,0,BUR,Burnley,1,0,1,0,21593
MUN,2023-09-30,2023-24,1,CRY,Crystal Palace,0,1,-1,0,73428
MUN,2023-10-07,2023-24,1,BRE,Brentford,2,1,1,0,73453
MUN,2023-10-21,2023-24,0,SHU,Sheffield United,2,1,1,0,31543
MUN,2023-10-29,2023-24,1,MCI,Manchester City,0,3,-3,0,73502
MUN,2023-11-04,2023-24,0,FUL,Fulham,1,0,1,0,24415
MUN,2023-11-11,2023-24,1,LUT,Luton Town,1,0,1,0,73599
MUN,2023-11-26,2023-24,0,EVE,Everton,3,0,3,0,39257
MUN,2023-12-02,2023-24,0,NEW,Newcastle United,0,1,-1,0,52214
MUN,2023-12-06,2023-24,1,CHE,Chelsea,2,1,1,0,73607
MUN,2023-12-09,2023-24,1,BOU,Bournemouth,0,3,-3,0,73427
MUN,2023-12-17,2023-24,0,LIV,Liverpool,0,0,0,1,57158
MUN,2023-12-23,2023-24,0,WHU,West Ham United,0,2,-2,0,64472
MUN,2023-12-26,2023-24,1,AVL,Aston Villa,3,2,1,0,73574
MUN,2023-12-30,2023-24,0,NFO,Nottingham Forest,1,2,-1,0,29529
MUN,2024-01-14,2023-24,1,TOT,Tottenham Hotspur,2,2,0,0,73489
MUN,2024-02-01,2023-24,0,WOL,Wolverhampton Wanderers,4,3,1,0,31641
MUN,2024-02-04,2023-24,1,WHU,West Ham United,3,0,3,0,73612
MUN,2024-02-11,2023-24,0,AVL,Aston Villa,2,1,1,0,
MUN,2024-02-18,2023-24,0,LUT,Luton Town,2,1,1,0,11483
MUN,2024-02-24,2023-24,1,FUL,Fulham,1,2,-1,0,73487
MUN,2024-03-03,2023-24,0,MCI,Manchester City,1,3,-2,0,55097
MUN,2024-03-09,2023-24,1,EVE,Everton,2,0,2,0,73601
MUN,2024-03-30,2023-24,0,BRE,Brentford,1,1,0,0,17138
MUN,2024-04-04,2023-24,0,CHE,Chelsea,3,4,-1,0,39694
MUN,2024-04-07,2023-24,1,LIV,Liverpool,2,2,0,0,73522
MUN,2024-04-13,2023-24,0,BOU,Bournemouth,2,2,0,0,11229
MUN,2024-04-24,2023-24,1,SHU,Sheffield United,4,2,2,0,73549
MUN,2024-04-27,2023-24,1,BUR,Burnley,1,1,0,0,73571
MUN,2024-05-06,2023-24,0,CRY,Crystal Palace,0,4,-4,0,25190
MUN,2024-05-12,2023-24,1,ARS,Arsenal,0,1,-1,0,73600
MUN,2024-05-15,2023-24,1,NEW,Newcastle United,3,2,1,0,73582
MUN,2024-05-19,2023-24,0,BHA,Brighton and Hove Albion,2,0,2,0,31662
MUN,2024-08-16,2024-25,1,FUL,Fulham,1,0,1,0,73297
MUN,2024-08-24,2024-25,0,BHA,Brighton and Hove Albion,1,2,-1,0,31537
MUN,2024-09-01,2024-25,1,LIV,Liverpool,0,3,-3,0,73738
MUN,2024-09-14,2024-25,0,SOU,Southampton,3,0,3,0,31144
MUN,2024-09-21,2024-25,0,CRY,Crystal Palace,0,0,0,0,25172
MUN,2024-09-29,2024-25,1,TOT,Tottenham Hotspur,0,3,-3,1,73587
MUN,2024-10-06,2024-25,0,AVL,Aston Villa,0,0,0,0,42682
MUN,2024-10-19,2024-25,1,BRE,Brentford,2,1,1,0,73738
MUN,2024-10-27,2024-25,0,WHU,West Ham United,1,2,-1,0,62474
MUN,2024-11-03,2024-25,1,CHE,Chelsea,1,1,0,0,73813
MUN,2024-11-10,2024-25,1,LEI,Leicester City,3,0,3,0,73829
MUN,2024-11-24,2024-25,0,IPS,Ipswich Town,1,1,0,0,30017
MUN,2024-12-01,2024-25,1,EVE,Everton,4,0,4,0,73817
MUN,2024-12-04,2024-25,0,ARS,Arsenal,0,2,-2,0,60256
MUN,2024-12-07,2024-25,1,NFO,Nottingham Forest,2,3,-1,0,73778
MUN,2024-12-15,2024-25,0,MCI,Manchester City,2,1,1,0,52788
MUN,2024-12-22,2024-25,1,BOU,Bournemouth,0,3,-3,0,73720
MUN,2024-12-26,2024-25,0,WOL,Wolverhampton Wanderers,0,2,-2,1,31407
MUN,2024-12-30,2024-25,1,NEW,Newcastle United,0,2,-2,0,73809
MUN,2025-01-05,2024-25,0,LIV,Liverpool,2,2,0,0,60275
MUN,2025-01-16,2024-25,1,SOU,Southampton,3,1,2,0,73722
MUN,2025-01-19,2024-25,1,BHA,Brighton and Hove Albion,1,3,-2,0,73758
MUN,2025-01-26,2024-25,0,FUL,Fulham,1,0,1,0,27288
MUN,2025-02-02,2024-25,1,CRY,Crystal Palace,0,2,-2,0,73751
MUN,2025-02-16,2024-25,0,TOT,Tottenham Hotspur,0,1,-1,0,61383
MUN,2025-02-22,2024-25,0,EVE,Everton,2,2,0,0,39290
MUN,2025-02-26,2024-25,1,IPS,Ipswich Town,3,2,1,1,73827
MUN,2025-03-09,2024-25,1,ARS,Arsenal,1,1,0,0,73812
MUN,2025-03-16,2024-25,0,LEI,Leicester City,3,0,3,0,31773
MUN,2025-04-01,2024-25,0,NFO,Nottingham Forest,0,1,-1,0,30249
MUN,2025-04-06,2024-25,1,MCI,Manchester City,0,0,0,0,73738
MUN,2025-04-13,2024-25,0,NEW,Newcastle United,1,4,-3,0,52252
MUN,2025-04-20,2024-25,1,WOL,Wolverhampton Wanderers,0,1,-1,0,73819
MUN,2025-04-27,2024-25,0,BOU,Bournemouth,1,1,0,0,11241
MUN,2025-05-04,2024-25,0,BRE,Brentford,3,4,-1,0,17190
MUN,2025-05-11,2024-25,1,WHU,West Ham United,0,2,-2,0,73804
MUN,2025-05-16,2024-25,0,CHE,Chelsea,0,1,-1,0,39849
MUN,2025-05-25,2024-25,1,AVL,Aston Villa,2,0,2,0,73839
MUN,2025-08-17,2025-26,1,ARS,Arsenal,0,1,-1,0,73475
MUN,2025-08-24,2025-26,0,FUL,Fulham,1,1,0,0,27512
MUN,2025-08-30,2025-26,1,BUR,Burnley,3,2,1,0,74257
MUN,2025-09-14,2025-26,0,MCI,Manchester City,0,3,-3,0,52534
MUN,2025-09-20,2025-26,1,CHE,Chelsea,2,1,1,1,74124
MUN,2025-09-27,2025-26,0,BRE,Brentford,1,3,-2,0,17193
MUN,2025-10-04,2025-26,1,SUN,Sunderland,2,0,2,0,74004
MUN,2025-10-19,2025-26,0,LIV,Liverpool,2,1,1,0,60337
MUN,2025-10-25,2025-26,1,BHA,Brighton and Hove Albion,4,2,2,0,73987
MUN,2025-11-01,2025-26,0,NFO,Nottingham Forest,2,2,0,0,30778
MUN,2025-11-08,2025-26,0,TOT,Tottenham Hotspur,2,2,0,0,61210
MUN,2025-11-24,2025-26,1,EVE,Everton,0,1,-1,0,74158
MUN,2025-11-30,2025-26,0,CRY,Crystal Palace,2,1,1,0,25189
MUN,2025-12-04,2025-26,1,WHU,West Ham United,1,1,0,0,73938
MUN,2025-12-08,2025-26,0,WOL,Wolverhampton Wanderers,4,1,3,0,30338
MUN,2025-12-15,2025-26,1,BOU,Bournemouth,4,4,0,0,73951
MUN,2025-12-21,2025-26,0,AVL,Aston Villa,1,2,-1,0,43157
MUN,2025-12-26,2025-26,1,NEW,Newcastle United,1,0,1,0,73996
MUN,2025-12-30,2025-26,1,WOL,Wolverhampton Wanderers,1,1,0,0,73941
MUN,2026-01-04,2025-26,0,LEE,Leeds United,1,1,0,0,36909
MUN,2026-01-07,2025-26,0,BUR,Burnley,2,2,0,0,21047
MUN,2026-01-17,2025-26,1,MCI,Manchester City,2,0,2,0,74004
MUN,2026-01-25,2025-26,0,ARS,Arsenal,3,2,1,0,60296
MUN,2026-02-01,2025-26,1,FUL,Fulham,3,2,1,0,73932
MUN,2026-02-07,2025-26,1,TOT,Tottenham Hotspur,2,0,2,0,73985
MUN,2026-02-10,2025-26,0,WHU,West Ham United,1,1,0,0,62473
MUN,2026-02-23,2025-26,0,EVE,Everton,1,0,1,0,52326
MUN,2026-03-01,2025-26,1,CRY,Crystal Palace,2,1,1,0,73934
MUN,2026-03-04,2025-26,0,NEW,Newcastle United,1,2,-1,0,52184
MUN,2026-03-15,2025-26,1,AVL,Aston Villa,3,1,2,0,73997
MUN,2026-03-20,2025-26,0,BOU,Bournemouth,2,2,0,1,11250
MUN,2026-04-13,2025-26,1,LEE,Leeds United,1,2,-1,1,74018
MUN,2026-04-18,2025-26,0,CHE,Chelsea,1,0,1,0,39733
MUN,2026-04-27,2025-26,1,BRE,Brentford,2,1,1,0,73773
MUN,2026-05-03,2025-26,1,LIV,Liverpool,3,2,1,0,74027
MUN,2026-05-09,2025-26,0,SUN,Sunderland,0,0,0,0,47233
MUN,2026-05-17,2025-26,1,NFO,Nottingham Forest,3,2,1,0,74015
MUN,2026-05-24,2025-26,0,BHA,Brighton and Hove Albion,3,0,3,0,31729
TOT,1992-08-15,1992-93,0,SOU,Southampton,0,0,0,0,19654
TOT,1992-08-19,1992-93,1,COV,Coventry City,0,2,-2,0,24388
TOT,1992-08-22,1992-93,1,CRY,Crystal Palace,2,2,0,0,25237
TOT,1992-08-25,1992-93,0,LEE,Leeds United,0,5,-5,0,28218
TOT,1992-08-30,1992-93,0,IPS,Ipswich Town,1,1,0,0,20100
TOT,1992-09-02,1992-93,1,SHU,Sheffield United,2,0,2,0,21322
TOT,1992-09-05,1992-93,1,EVE,Everton,2,1,1,0,26503
TOT,1992-09-14,1992-93,0,COV,Coventry City,0,1,-1,0,15348
TOT,1992-09-19,1992-93,1,MUN,Manchester United,1,1,0,0,33296
TOT,1992-09-27,1992-93,0,SHW,Sheffield Wednesday,0,2,-2,0,24895
TOT,1992-10-03,1992-93,0,QPR,Queens Park Rangers,1,4,-3,0,19845
TOT,1992-10-17,1992-93,1,MID,Middlesbrough,2,2,0,0,24735
TOT,1992-10-25,1992-93,0,WIM,Wimbledon,1,1,0,0,8628
TOT,1992-10-31,1992-93,1,LIV,Liverpool,2,0,2,0,32917
TOT,1992-11-07,1992-93,0,BLA,Blackburn Rovers,2,0,2,0,17305
TOT,1992-11-21,1992-93,1,AVL,Aston Villa,0,0,0,0,32852
TOT,1992-11-28,1992-93,0,MCI,Manchester City,1,0,1,0,25496
TOT,1992-12-05,1992-93,1,CHE,Chelsea,1,2,-1,0,31540
TOT,1992-12-12,1992-93,1,ARS,Arsenal,1,0,1,0,33707
TOT,1992-12-19,1992-93,0,OLD,Oldham Athletic,1,2,-1,0,11735
TOT,1992-12-26,1992-93,0,NOR,Norwich City,0,0,0,0,19413
TOT,1992-12-28,1992-93,1,NFO,Nottingham Forest,2,1,1,0,32118
TOT,1993-01-09,1992-93,0,MUN,Manchester United,1,4,-3,0,35648
TOT,1993-01-16,1992-93,1,SHW,Sheffield Wednesday,0,2,-2,0,25702
TOT,1993-01-27,1992-93,1,IPS,Ipswich Town,0,2,-2,0,23738
TOT,1993-01-30,1992-93,0,CRY,Crystal Palace,3,1,2,0,20937
TOT,1993-02-07,1992-93,1,SOU,Southampton,4,2,2,0,20089
TOT,1993-02-10,1992-93,0,EVE,Everton,2,1,1,0,16164
TOT,1993-02-20,1992-93,1,LEE,Leeds United,4,0,4,0,32040
TOT,1993-02-27,1992-93,1,QPR,Queens Park Rangers,3,2,1,0,32341
TOT,1993-03-02,1992-93,0,SHU,Sheffield United,0,6,-6,0,16654
TOT,1993-03-10,1992-93,0,AVL,Aston Villa,0,0,0,0,37727
TOT,1993-03-20,1992-93,0,CHE,Chelsea,1,1,0,0,25157
TOT,1993-03-24,1992-93,1,MCI,Manchester City,3,1,2,0,27247
TOT,1993-04-09,1992-93,1,NOR,Norwich City,5,1,4,0,31425
TOT,1993-04-12,1992-93,0,NFO,Nottingham Forest,1,2,-1,0,25682
TOT,1993-04-17,1992-93,1,OLD,Oldham Athletic,4,1,3,0,26663
TOT,1993-04-20,1992-93,0,MID,Middlesbrough,0,3,-3,0,14472
TOT,1993-05-01,1992-93,1,WIM,Wimbledon,1,1,0,0,24473
TOT,1993-05-05,1992-93,1,BLA,Blackburn Rovers,1,2,-1,0,23097
TOT,1993-05-08,1992-93,0,LIV,Liverpool,2,6,-4,0,43385
TOT,1993-05-11,1992-93,0,ARS,Arsenal,3,1,2,0,26393
TOT,1993-08-14,1993-94,0,NEW,Newcastle United,1,0,1,0,35216
TOT,1993-08-16,1993-94,1,ARS,Arsenal,0,1,-1,0,28355
TOT,1993-08-21,1993-94,1,MCI,Manchester City,1,0,1,0,24535
TOT,1993-08-25,1993-94,0,LIV,Liverpool,2,1,1,0,42456
TOT,1993-08-28,1993-94,0,AVL,Aston Villa,0,1,-1,0,32498
TOT,1993-09-01,1993-94,1,CHE,Chelsea,1,1,0,0,27567
TOT,1993-09-11,1993-94,0,SHU,Sheffield United,2,2,0,0,21325
TOT,1993-09-18,1993-94,1,OLD,Oldham Athletic,5,0,5,0,24613
TOT,1993-09-26,1993-94,0,IPS,Ipswich Town,2,2,0,0,19411
TOT,1993-10-03,1993-94,1,EVE,Everton,3,2,1,0,27487
TOT,1993-10-16,1993-94,0,MUN,Manchester United,1,2,-1,0,44655
TOT,1993-10-23,1993-94,1,SWI,Swindon Town,1,1,0,0,31304
TOT,1993-10-30,1993-94,0,BLA,Blackburn Rovers,0,1,-1,0,16849
TOT,1993-11-06,1993-94,0,SOU,Southampton,0,1,-1,0,16017
TOT,1993-11-20,1993-94,1,LEE,Leeds United,1,1,0,0,31275
TOT,1993-11-24,1993-94,1,WIM,Wimbledon,1,1,0,0,17744
TOT,1993-11-27,1993-94,0,QPR,Queens Park Rangers,1,1,0,0,17694
TOT,1993-12-04,1993-94,1,NEW,Newcastle United,1,2,-1,0,30780
TOT,1993-12-06,1993-94,0,ARS,Arsenal,1,1,0,0,35669
TOT,1993-12-11,1993-94,0,MCI,Manchester City,2,0,2,0,21566
TOT,1993-12-18,1993-94,1,LIV,Liverpool,3,3,0,0,31394
TOT,1993-12-27,1993-94,1,NOR,Norwich City,1,3,-2,0,33130
TOT,1993-12-28,1993-94,0,WHU,West Ham United,3,1,2,0,20787
TOT,1994-01-01,1993-94,1,COV,Coventry City,1,2,-1,0,26015
TOT,1994-01-03,1993-94,0,SHW,Sheffield Wednesday,0,1,-1,0,32514
TOT,1994-01-15,1993-94,1,MUN,Manchester United,0,1,-1,0,31343
TOT,1994-01-22,1993-94,0,SWI,Swindon Town,1,2,-1,0,16563
TOT,1994-02-05,1993-94,1,SHW,Sheffield Wednesday,1,3,-2,0,23078
TOT,1994-02-12,1993-94,1,BLA,Blackburn Rovers,0,2,-2,0,30236
TOT,1994-02-27,1993-94,0,CHE,Chelsea,3,4,-1,0,16807
TOT,1994-03-02,1993-94,1,AVL,Aston Villa,1,1,0,0,17452
TOT,1994-03-05,1993-94,1,SHU,Sheffield United,2,2,0,0,25741
TOT,1994-03-19,1993-94,1,IPS,Ipswich Town,1,1,0,0,26653
TOT,1994-03-26,1993-94,0,EVE,Everton,1,0,1,0,23580
TOT,1994-04-02,1993-94,0,NOR,Norwich City,2,1,1,0,21181
TOT,1994-04-04,1993-94,1,WHU,West Ham United,1,4,-3,0,31502
TOT,1994-04-09,1993-94,0,COV,Coventry City,0,1,-1,0,13391
TOT,1994-04-17,1993-94,0,LEE,Leeds United,0,2,-2,0,33658
TOT,1994-04-23,1993-94,1,SOU,Southampton,3,0,3,0,25959
TOT,1994-04-30,1993-94,0,WIM,Wimbledon,1,2,-1,0,20875
TOT,1994-05-05,1993-94,0,OLD,Oldham Athletic,2,0,2,0,14283
TOT,1994-05-07,1993-94,1,QPR,Queens Park Rangers,1,2,-1,0,26105
TOT,1994-08-20,1994-95,0,SHW,Sheffield Wednesday,4,3,1,0,34051
TOT,1994-08-24,1994-95,1,EVE,Everton,2,1,1,0,24553
TOT,1994-08-27,1994-95,1,MUN,Manchester United,0,1,-1,0,24502
TOT,1994-08-30,1994-95,0,IPS,Ipswich Town,3,1,2,0,22559
TOT,1994-09-12,1994-95,1,SOU,Southampton,1,2,-1,0,22387
TOT,1994-09-17,1994-95,0,LEI,Leicester City,1,3,-2,0,21300
TOT,1994-09-24,1994-95,1,NFO,Nottingham Forest,1,4,-3,0,24558
TOT,1994-10-01,1994-95,0,WIM,Wimbledon,2,1,1,0,16802
TOT,1994-10-08,1994-95,1,QPR,Queens Park Rangers,1,1,0,0,25799
TOT,1994-10-15,1994-95,0,LEE,Leeds United,1,1,0,0,39224
TOT,1994-10-22,1994-95,0,MCI,Manchester City,2,5,-3,0,25473
TOT,1994-10-29,1994-95,1,WHU,West Ham United,3,1,2,0,26271
TOT,1994-11-05,1994-95,0,BLA,Blackburn Rovers,0,2,-2,0,26933
TOT,1994-11-19,1994-95,1,AVL,Aston Villa,3,4,-1,0,26899
TOT,1994-11-23,1994-95,1,CHE,Chelsea,0,0,0,0,27037
TOT,1994-11-26,1994-95,0,LIV,Liverpool,1,1,0,0,35007
TOT,1994-12-03,1994-95,1,NEW,Newcastle United,4,2,2,0,21172
TOT,1994-12-10,1994-95,1,SHW,Sheffield Wednesday,3,1,2,0,25912
TOT,1994-12-17,1994-95,0,EVE,Everton,0,0,0,0,32809
TOT,1994-12-26,1994-95,0,NOR,Norwich City,2,0,2,0,21814
TOT,1994-12-27,1994-95,1,CRY,Crystal Palace,0,0,0,0,27730
TOT,1994-12-31,1994-95,0,COV,Coventry City,4,0,4,0,19951
TOT,1995-01-02,1994-95,1,ARS,Arsenal,1,0,1,0,28747
TOT,1995-01-14,1994-95,0,WHU,West Ham United,2,1,1,0,24573
TOT,1995-01-25,1994-95,0,AVL,Aston Villa,0,1,-1,0,40017
TOT,1995-02-05,1994-95,1,BLA,Blackburn Rovers,3,1,2,0,28124
TOT,1995-02-11,1994-95,0,CHE,Chelsea,1,1,0,0,30812
TOT,1995-02-25,1994-95,1,WIM,Wimbledon,1,2,-1,0,27258
TOT,1995-03-04,1994-95,0,NFO,Nottingham Forest,2,2,0,0,28711
TOT,1995-03-08,1994-95,1,IPS,Ipswich Town,3,0,3,0,24930
TOT,1995-03-15,1994-95,0,MUN,Manchester United,0,0,0,0,43802
TOT,1995-03-18,1994-95,1,LEI,Leicester City,1,0,1,0,15489
TOT,1995-03-22,1994-95,1,LIV,Liverpool,0,0,0,0,39300
TOT,1995-04-02,1994-95,0,SOU,Southampton,3,4,-1,0,15105
TOT,1995-04-11,1994-95,1,MCI,Manchester City,2,1,1,0,21007
TOT,1995-04-14,1994-95,0,CRY,Crystal Palace,1,1,0,0,18149
TOT,1995-04-17,1994-95,1,NOR,Norwich City,1,0,1,0,32304
TOT,1995-04-29,1994-95,0,ARS,Arsenal,1,1,0,0,38377
TOT,1995-05-03,1994-95,0,NEW,Newcastle United,3,3,0,0,35603
TOT,1995-05-06,1994-95,0,QPR,Queens Park Rangers,1,2,-1,0,18367
TOT,1995-05-09,1994-95,1,COV,Coventry City,1,3,-2,0,24134
TOT,1995-05-14,1994-95,1,LEE,Leeds United,1,1,0,0,33040
TOT,1995-08-19,1995-96,0,MCI,Manchester City,1,1,0,0,30827
TOT,1995-08-23,1995-96,1,AVL,Aston Villa,0,1,-1,0,26726
TOT,1995-08-26,1995-96,1,LIV,Liverpool,1,3,-2,0,31254
TOT,1995-08-30,1995-96,0,WHU,West Ham United,1,1,0,0,23516
TOT,1995-09-09,1995-96,1,LEE,Leeds United,2,1,1,0,30034
TOT,1995-09-16,1995-96,0,SHW,Sheffield Wednesday,3,1,2,0,26565
TOT,1995-09-25,1995-96,0,QPR,Queens Park Rangers,3,2,1,0,15659
TOT,1995-09-30,1995-96,1,WIM,Wimbledon,3,1,2,0,25321
TOT,1995-10-14,1995-96,1,NFO,Nottingham Forest,0,1,-1,0,32876
TOT,1995-10-22,1995-96,0,EVE,Everton,1,1,0,0,33629
TOT,1995-10-29,1995-96,1,NEW,Newcastle United,1,1,0,0,32279
TOT,1995-11-04,1995-96,0,COV,Coventry City,3,2,1,0,17545
TOT,1995-11-18,1995-96,1,ARS,Arsenal,2,1,1,0,32894
TOT,1995-11-21,1995-96,0,MID,Middlesbrough,1,0,1,0,29487
TOT,1995-11-25,1995-96,0,CHE,Chelsea,0,0,0,0,31059
TOT,1995-12-02,1995-96,1,EVE,Everton,0,0,0,0,32894
TOT,1995-12-09,1995-96,1,QPR,Queens Park Rangers,1,0,1,0,28851
TOT,1995-12-16,1995-96,0,WIM,Wimbledon,1,0,1,0,16193
TOT,1995-12-23,1995-96,1,BOL,Bolton Wanderers,2,2,0,0,30702
TOT,1995-12-26,1995-96,0,SOU,Southampton,0,0,0,0,15238
TOT,1995-12-30,1995-96,0,BLA,Blackburn Rovers,1,2,-1,0,30004
TOT,1996-01-01,1995-96,1,MUN,Manchester United,4,1,3,0,32852
TOT,1996-01-13,1995-96,1,MCI,Manchester City,1,0,1,0,31436
TOT,1996-01-21,1995-96,0,AVL,Aston Villa,1,2,-1,0,35666
TOT,1996-02-03,1995-96,0,LIV,Liverpool,0,0,0,0,40628
TOT,1996-02-12,1995-96,1,WHU,West Ham United,0,1,-1,0,29781
TOT,1996-02-24,1995-96,1,SHW,Sheffield Wednesday,1,0,1,0,32047
TOT,1996-03-02,1995-96,1,SOU,Southampton,1,0,1,0,26320
TOT,1996-03-16,1995-96,1,BLA,Blackburn Rovers,2,3,-1,0,32387
TOT,1996-03-20,1995-96,0,BOL,Bolton Wanderers,3,2,1,0,17829
TOT,1996-03-24,1995-96,0,MUN,Manchester United,0,1,-1,0,50157
TOT,1996-03-30,1995-96,1,COV,Coventry City,3,1,2,0,26808
TOT,1996-04-06,1995-96,0,NFO,Nottingham Forest,1,2,-1,0,27053
TOT,1996-04-08,1995-96,1,MID,Middlesbrough,1,1,0,0,32036
TOT,1996-04-15,1995-96,0,ARS,Arsenal,0,0,0,0,38273
TOT,1996-04-27,1995-96,1,CHE,Chelsea,1,1,0,0,32918
TOT,1996-05-02,1995-96,0,LEE,Leeds United,3,1,2,0,30061
TOT,1996-05-05,1995-96,0,NEW,Newcastle United,1,1,0,0,36589
TOT,1996-08-17,1996-97,0,BLA,Blackburn Rovers,2,0,2,0,26960
TOT,1996-08-21,1996-97,1,DER,Derby County,1,1,0,0,28219
TOT,1996-08-24,1996-97,1,EVE,Everton,0,0,0,0,29696
TOT,1996-09-04,1996-97,0,WIM,Wimbledon,0,1,-1,0,17506
TOT,1996-09-07,1996-97,1,NEW,Newcastle United,1,2,-1,0,32535
TOT,1996-09-14,1996-97,0,SOU,Southampton,1,0,1,0,15251
TOT,1996-09-22,1996-97,1,LEI,Leicester City,1,2,-1,0,24159
TOT,1996-09-29,1996-97,0,MUN,Manchester United,0,2,-2,0,54943
TOT,1996-10-12,1996-97,1,AVL,Aston Villa,1,0,1,0,32847
TOT,1996-10-19,1996-97,0,MID,Middlesbrough,3,0,3,0,30215
TOT,1996-10-26,1996-97,0,CHE,Chelsea,1,3,-2,0,28373
TOT,1996-11-02,1996-97,1,WHU,West Ham United,1,0,1,0,32999
TOT,1996-11-16,1996-97,1,SUN,Sunderland,2,0,2,0,31867
TOT,1996-11-24,1996-97,0,ARS,Arsenal,1,3,-2,0,38264
TOT,1996-12-02,1996-97,1,LIV,Liverpool,0,2,-2,0,32899
TOT,1996-12-07,1996-97,0,COV,Coventry City,2,1,1,0,19765
TOT,1996-12-14,1996-97,0,LEE,Leeds United,0,0,0,0,33783
TOT,1996-12-21,1996-97,1,SHW,Sheffield Wednesday,1,1,0,0,30996
TOT,1996-12-26,1996-97,1,SOU,Southampton,3,1,2,0,30549
TOT,1996-12-28,1996-97,0,NEW,Newcastle United,1,7,-6,0,36308
TOT,1997-01-12,1996-97,1,MUN,Manchester United,1,2,-1,0,33026
TOT,1997-01-19,1996-97,0,NFO,Nottingham Forest,1,2,-1,0,27308
TOT,1997-01-29,1996-97,1,BLA,Blackburn Rovers,2,1,1,0,22943
TOT,1997-02-01,1996-97,1,CHE,Chelsea,1,2,-1,0,33027
TOT,1997-02-15,1996-97,1,ARS,Arsenal,0,0,0,0,33039
TOT,1997-02-24,1996-97,0,WHU,West Ham United,3,4,-1,0,23998
TOT,1997-03-01,1996-97,1,NFO,Nottingham Forest,0,1,-1,0,32805
TOT,1997-03-04,1996-97,0,SUN,Sunderland,4,0,4,0,20785
TOT,1997-03-15,1996-97,1,LEE,Leeds United,1,0,1,0,33040
TOT,1997-03-19,1996-97,0,LEI,Leicester City,1,1,0,0,20593
TOT,1997-03-22,1996-97,0,DER,Derby County,2,4,-2,0,18083
TOT,1997-04-05,1996-97,1,WIM,Wimbledon,1,0,1,0,32654
TOT,1997-04-09,1996-97,0,SHW,Sheffield Wednesday,1,2,-1,0,22667
TOT,1997-04-12,1996-97,0,EVE,Everton,0,1,-1,0,36380
TOT,1997-04-19,1996-97,0,AVL,Aston Villa,1,1,0,0,39339
TOT,1997-04-24,1996-97,1,MID,Middlesbrough,1,0,1,0,29947
TOT,1997-05-03,1996-97,0,LIV,Liverpool,1,2,-1,0,40003
TOT,1997-05-11,1996-97,1,COV,Coventry City,1,2,-1,0,33029
TOT,1997-08-10,1997-98,1,MUN,Manchester United,0,2,-2,0,26359
TOT,1997-08-13,1997-98,0,WHU,West Ham United,1,2,-1,0,25354
TOT,1997-08-23,1997-98,1,DER,Derby County,1,0,1,0,25886
TOT,1997-08-27,1997-98,1,AVL,Aston Villa,3,2,1,0,26317
TOT,1997-08-30,1997-98,0,ARS,Arsenal,0,0,0,0,38102
TOT,1997-09-13,1997-98,0,LEI,Leicester City,0,3,-3,0,20683
TOT,1997-09-20,1997-98,1,BLA,Blackburn Rovers,0,0,0,0,26573
TOT,1997-09-23,1997-98,0,BOL,Bolton Wanderers,1,1,0,0,23433
TOT,1997-09-27,1997-98,1,WIM,Wimbledon,0,0,0,0,26261
TOT,1997-10-04,1997-98,0,NEW,Newcastle United,0,1,-1,0,36709
TOT,1997-10-19,1997-98,1,SHW,Sheffield Wednesday,3,2,1,0,25097
TOT,1997-10-25,1997-98,0,SOU,Southampton,2,3,-1,0,15255
TOT,1997-11-01,1997-98,1,LEE,Leeds United,0,1,-1,0,26441
TOT,1997-11-08,1997-98,0,LIV,Liverpool,0,4,-4,0,38006
TOT,1997-11-24,1997-98,1,CRY,Crystal Palace,0,1,-1,0,25634
TOT,1997-11-29,1997-98,0,EVE,Everton,2,0,2,0,36670
TOT,1997-12-06,1997-98,1,CHE,Chelsea,1,6,-5,0,28476
TOT,1997-12-13,1997-98,0,COV,Coventry City,0,4,-4,0,19499
TOT,1997-12-20,1997-98,1,BAR,Barnsley,3,0,3,0,28232
TOT,1997-12-26,1997-98,0,AVL,Aston Villa,1,4,-3,0,38644
TOT,1997-12-28,1997-98,1,ARS,Arsenal,1,1,0,0,29610
TOT,1998-01-10,1997-98,0,MUN,Manchester United,0,2,-2,0,55281
TOT,1998-01-17,1997-98,1,WHU,West Ham United,1,0,1,0,30284
TOT,1998-01-31,1997-98,0,DER,Derby County,1,2,-1,0,30187
TOT,1998-02-07,1997-98,0,BLA,Blackburn Rovers,3,0,3,0,30388
TOT,1998-02-14,1997-98,1,LEI,Leicester City,1,1,0,0,28355
TOT,1998-02-21,1997-98,0,SHW,Sheffield Wednesday,0,1,-1,0,29871
TOT,1998-03-01,1997-98,1,BOL,Bolton Wanderers,1,0,1,0,29032
TOT,1998-03-04,1997-98,0,LEE,Leeds United,0,1,-1,0,31394
TOT,1998-03-14,1997-98,1,LIV,Liverpool,3,3,0,0,30245
TOT,1998-03-28,1997-98,0,CRY,Crystal Palace,3,1,2,0,26116
TOT,1998-04-04,1997-98,1,EVE,Everton,1,1,0,0,35624
TOT,1998-04-11,1997-98,0,CHE,Chelsea,0,2,-2,0,34149
TOT,1998-04-13,1997-98,1,COV,Coventry City,1,1,0,0,33463
TOT,1998-04-18,1997-98,0,BAR,Barnsley,1,1,0,0,18692
TOT,1998-04-25,1997-98,1,NEW,Newcastle United,2,0,2,0,35847
TOT,1998-05-02,1997-98,0,WIM,Wimbledon,6,2,4,0,25820
TOT,1998-05-10,1997-98,1,SOU,Southampton,1,1,0,0,35995
TOT,1998-08-15,1998-99,0,WIM,Wimbledon,1,3,-2,0,23031
TOT,1998-08-22,1998-99,1,SHW,Sheffield Wednesday,0,3,-3,0,32129
TOT,1998-08-29,1998-99,0,EVE,Everton,1,0,1,0,39378
TOT,1998-09-09,1998-99,1,BLA,Blackburn Rovers,2,1,1,0,28338
TOT,1998-09-13,1998-99,1,MID,Middlesbrough,0,3,-3,0,30437
TOT,1998-09-19,1998-99,0,SOU,Southampton,1,1,0,0,15204
TOT,1998-09-26,1998-99,1,LEE,Leeds United,3,3,0,0,35535
TOT,1998-10-03,1998-99,0,DER,Derby County,1,0,1,0,30083
TOT,1998-10-19,1998-99,0,LEI,Leicester City,1,2,-1,0,20787
TOT,1998-10-24,1998-99,1,NEW,Newcastle United,2,0,2,0,36047
TOT,1998-11-02,1998-99,1,CHA,Charlton Athletic,2,2,0,0,32202
TOT,1998-11-07,1998-99,0,AVL,Aston Villa,2,3,-1,0,39241
TOT,1998-11-14,1998-99,0,ARS,Arsenal,0,0,0,0,38278
TOT,1998-11-21,1998-99,1,NFO,Nottingham Forest,2,0,2,0,35832
TOT,1998-11-28,1998-99,0,WHU,West Ham United,1,2,-1,0,26044
TOT,1998-12-05,1998-99,1,LIV,Liverpool,2,1,1,0,36125
TOT,1998-12-12,1998-99,1,MUN,Manchester United,2,2,0,0,36058
TOT,1998-12-19,1998-99,0,CHE,Chelsea,0,2,-2,0,34881
TOT,1998-12-26,1998-99,0,COV,Coventry City,1,1,0,0,23091
TOT,1998-12-28,1998-99,1,EVE,Everton,4,1,3,0,36053
TOT,1999-01-09,1998-99,0,SHW,Sheffield Wednesday,0,0,0,0,28204
TOT,1999-01-16,1998-99,1,WIM,Wimbledon,0,0,0,0,32422
TOT,1999-01-30,1998-99,0,BLA,Blackburn Rovers,1,1,0,0,29643
TOT,1999-02-06,1998-99,1,COV,Coventry City,0,0,0,0,34376
TOT,1999-02-20,1998-99,0,MID,Middlesbrough,0,0,0,0,34687
TOT,1999-02-27,1998-99,1,DER,Derby County,1,1,0,0,35392
TOT,1999-03-02,1998-99,1,SOU,Southampton,3,0,3,0,28580
TOT,1999-03-10,1998-99,0,LEE,Leeds United,0,2,-2,0,34521
TOT,1999-03-13,1998-99,1,AVL,Aston Villa,1,0,1,0,35963
TOT,1999-04-03,1998-99,1,LEI,Leicester City,0,2,-2,0,35415
TOT,1999-04-05,1998-99,0,NEW,Newcastle United,1,1,0,0,36655
TOT,1999-04-17,1998-99,0,NFO,Nottingham Forest,1,0,1,0,25181
TOT,1999-04-20,1998-99,0,CHA,Charlton Athletic,4,1,3,0,20043
TOT,1999-04-24,1998-99,1,WHU,West Ham United,1,2,-1,0,36089
TOT,1999-05-01,1998-99,0,LIV,Liverpool,2,3,-1,0,44007
TOT,1999-05-05,1998-99,1,ARS,Arsenal,1,3,-2,0,36019
TOT,1999-05-10,1998-99,1,CHE,Chelsea,2,2,0,0,35878
TOT,1999-05-16,1998-99,0,MUN,Manchester United,1,2,-1,0,55189
TOT,1999-08-07,1999-00,0,WHU,West Ham United,0,1,-1,0,26010
TOT,1999-08-09,1999-00,1,NEW,Newcastle United,3,1,2,0,28701
TOT,1999-08-14,1999-00,1,EVE,Everton,3,2,1,0,34840
TOT,1999-08-21,1999-00,0,SHW,Sheffield Wednesday,2,1,1,0,24027
TOT,1999-08-28,1999-00,1,LEE,Leeds United,1,2,-1,0,36012
TOT,1999-09-12,1999-00,0,BRA,Bradford City,1,1,0,0,18143
TOT,1999-09-19,1999-00,1,COV,Coventry City,3,2,1,0,35224
TOT,1999-09-26,1999-00,0,WIM,Wimbledon,1,1,0,0,17368
TOT,1999-10-03,1999-00,1,LEI,Leicester City,2,3,-1,0,35591
TOT,1999-10-16,1999-00,0,DER,Derby County,1,0,1,0,29815
TOT,1999-10-23,1999-00,1,MUN,Manchester United,3,1,2,0,36072
TOT,1999-10-31,1999-00,0,SUN,Sunderland,1,2,-1,0,41904
TOT,1999-11-07,1999-00,1,ARS,Arsenal,2,1,1,0,36085
TOT,1999-11-20,1999-00,0,SOU,Southampton,1,0,1,0,15248
TOT,1999-11-28,1999-00,0,NEW,Newcastle United,1,2,-1,0,36460
TOT,1999-12-06,1999-00,1,WHU,West Ham United,0,0,0,0,36233
TOT,1999-12-18,1999-00,0,MID,Middlesbrough,1,2,-1,0,33129
TOT,1999-12-26,1999-00,1,WAT,Watford,4,0,4,0,36089
TOT,1999-12-29,1999-00,0,AVL,Aston Villa,1,1,0,0,39217
TOT,2000-01-03,1999-00,1,LIV,Liverpool,1,0,1,0,36044
TOT,2000-01-12,1999-00,0,CHE,Chelsea,0,1,-1,0,34969
TOT,2000-01-15,1999-00,0,EVE,Everton,2,2,0,0,32290
TOT,2000-01-22,1999-00,1,SHW,Sheffield Wednesday,0,1,-1,0,35897
TOT,2000-02-05,1999-00,1,CHE,Chelsea,0,1,-1,0,36041
TOT,2000-02-12,1999-00,0,LEE,Leeds United,0,1,-1,0,40127
TOT,2000-02-26,1999-00,0,COV,Coventry City,1,0,1,0,23077
TOT,2000-03-04,1999-00,1,BRA,Bradford City,1,1,0,0,35472
TOT,2000-03-11,1999-00,1,SOU,Southampton,7,2,5,0,36024
TOT,2000-03-19,1999-00,0,ARS,Arsenal,1,2,-1,0,38131
TOT,2000-03-25,1999-00,0,WAT,Watford,1,1,0,0,20050
TOT,2000-04-03,1999-00,1,MID,Middlesbrough,2,3,-1,0,31796
TOT,2000-04-09,1999-00,0,LIV,Liverpool,0,2,-2,0,44536
TOT,2000-04-15,1999-00,1,AVL,Aston Villa,2,4,-2,0,35304
TOT,2000-04-19,1999-00,0,LEI,Leicester City,1,0,1,0,19764
TOT,2000-04-22,1999-00,1,WIM,Wimbledon,2,0,2,0,33086
TOT,2000-04-29,1999-00,1,DER,Derby County,1,1,0,0,33044
TOT,2000-05-06,1999-00,0,MUN,Manchester United,1,3,-2,0,61629
TOT,2000-05-14,1999-00,1,SUN,Sunderland,3,1,2,0,36070
TOT,2000-08-19,2000-01,1,IPS,Ipswich Town,3,1,2,0,36148
TOT,2000-08-22,2000-01,0,MID,Middlesbrough,1,1,0,0,31254
TOT,2000-08-26,2000-01,0,NEW,Newcastle United,0,2,-2,0,51573
TOT,2000-09-05,2000-01,1,EVE,Everton,3,2,1,0,35316
TOT,2000-09-11,2000-01,1,WHU,West Ham United,1,0,1,0,33282
TOT,2000-09-16,2000-01,0,CHA,Charlton Athletic,0,1,-1,0,20043
TOT,2000-09-23,2000-01,1,MCI,Manchester City,0,0,0,0,36069
TOT,2000-09-30,2000-01,0,LEE,Leeds United,3,4,-1,0,37562
TOT,2000-10-14,2000-01,0,COV,Coventry City,1,2,-1,0,21435
TOT,2000-10-21,2000-01,1,DER,Derby County,3,1,2,0,34483
TOT,2000-10-28,2000-01,0,CHE,Chelsea,0,3,-3,0,34966
TOT,2000-11-04,2000-01,1,SUN,Sunderland,2,1,1,0,36016
TOT,2000-11-11,2000-01,0,AVL,Aston Villa,0,2,-2,0,33608
TOT,2000-11-19,2000-01,1,LIV,Liverpool,2,1,1,0,36036
TOT,2000-11-25,2000-01,1,LEI,Leicester City,3,0,3,0,35636
TOT,2000-12-02,2000-01,0,MUN,Manchester United,0,2,-2,0,67583
TOT,2000-12-09,2000-01,0,BRA,Bradford City,3,3,0,0,17225
TOT,2000-12-18,2000-01,1,ARS,Arsenal,1,1,0,0,36062
TOT,2000-12-23,2000-01,1,MID,Middlesbrough,0,0,0,0,35638
TOT,2000-12-27,2000-01,0,SOU,Southampton,0,2,-2,0,15237
TOT,2000-12-30,2000-01,0,IPS,Ipswich Town,0,3,-3,0,22234
TOT,2001-01-02,2000-01,1,NEW,Newcastle United,4,2,2,0,34324
TOT,2001-01-13,2000-01,0,EVE,Everton,0,0,0,0,32290
TOT,2001-01-20,2000-01,1,SOU,Southampton,0,0,0,0,36095
TOT,2001-01-31,2000-01,0,WHU,West Ham United,0,0,0,0,26048
TOT,2001-02-03,2000-01,1,CHA,Charlton Athletic,0,0,0,0,35368
TOT,2001-02-10,2000-01,0,MCI,Manchester City,1,0,1,0,34399
TOT,2001-02-24,2000-01,1,LEE,Leeds United,1,2,-1,0,36070
TOT,2001-03-03,2000-01,0,DER,Derby County,1,2,-1,0,29410
TOT,2001-03-17,2000-01,1,COV,Coventry City,3,0,3,0,35606
TOT,2001-03-31,2000-01,0,ARS,Arsenal,0,2,-2,0,38121
TOT,2001-04-10,2000-01,1,BRA,Bradford City,2,1,1,0,28306
TOT,2001-04-14,2000-01,0,SUN,Sunderland,3,2,1,0,48029
TOT,2001-04-17,2000-01,1,CHE,Chelsea,0,3,-3,0,36074
TOT,2001-04-22,2000-01,0,LIV,Liverpool,1,3,-2,0,43547
TOT,2001-04-28,2000-01,1,AVL,Aston Villa,0,0,0,0,36096
TOT,2001-05-05,2000-01,0,LEI,Leicester City,2,4,-2,0,21056
TOT,2001-05-19,2000-01,1,MUN,Manchester United,3,1,2,0,36072
TOT,2001-08-18,2001-02,1,AVL,Aston Villa,0,0,0,0,36059
TOT,2001-08-20,2001-02,0,EVE,Everton,1,1,0,0,29503
TOT,2001-08-25,2001-02,0,BLA,Blackburn Rovers,1,2,-1,0,24992
TOT,2001-09-09,2001-02,1,SOU,Southampton,2,0,2,0,33668
TOT,2001-09-16,2001-02,1,CHE,Chelsea,2,3,-1,0,36037
TOT,2001-09-19,2001-02,0,SUN,Sunderland,2,1,1,0,47310
TOT,2001-09-22,2001-02,0,LIV,Liverpool,0,1,-1,0,44116
TOT,2001-09-29,2001-02,1,MUN,Manchester United,3,5,-2,0,36038
TOT,2001-10-15,2001-02,1,DER,Derby County,3,1,2,0,30148
TOT,2001-10-21,2001-02,0,NEW,Newcastle United,2,0,2,0,50593
TOT,2001-10-27,2001-02,1,MID,Middlesbrough,2,1,1,0,36062
TOT,2001-11-04,2001-02,0,LEE,Leeds United,1,2,-1,0,40203
TOT,2001-11-17,2001-02,1,ARS,Arsenal,1,1,0,0,36049
TOT,2001-11-24,2001-02,0,WHU,West Ham United,1,0,1,0,32780
TOT,2001-12-03,2001-02,1,BOL,Bolton Wanderers,3,2,1,0,32971
TOT,2001-12-08,2001-02,0,CHA,Charlton Athletic,1,3,-2,0,25125
TOT,2001-12-15,2001-02,1,FUL,Fulham,4,0,4,0,36054
TOT,2001-12-22,2001-02,1,IPS,Ipswich Town,1,2,-1,0,36040
TOT,2001-12-26,2001-02,0,SOU,Southampton,0,1,-1,0,31719
TOT,2001-12-29,2001-02,0,AVL,Aston Villa,1,1,0,0,41134
TOT,2002-01-01,2001-02,1,BLA,Blackburn Rovers,1,0,1,0,35131
TOT,2002-01-12,2001-02,0,IPS,Ipswich Town,1,2,-1,0,25077
TOT,2002-01-19,2001-02,1,EVE,Everton,1,1,0,0,36056
TOT,2002-01-30,2001-02,1,NEW,Newcastle United,1,3,-2,0,35798
TOT,2002-02-02,2001-02,0,DER,Derby County,0,1,-1,0,27721
TOT,2002-02-09,2001-02,1,LEI,Leicester City,2,1,1,0,35973
TOT,2002-03-02,2001-02,1,SUN,Sunderland,2,1,1,0,36062
TOT,2002-03-06,2001-02,0,MUN,Manchester United,0,4,-4,0,67059
TOT,2002-03-13,2001-02,0,CHE,Chelsea,0,4,-4,0,39652
TOT,2002-03-18,2001-02,1,CHA,Charlton Athletic,0,1,-1,0,29602
TOT,2002-03-24,2001-02,0,FUL,Fulham,2,0,2,0,15885
TOT,2002-03-30,2001-02,0,MID,Middlesbrough,1,1,0,0,31258
TOT,2002-04-01,2001-02,1,LEE,Leeds United,2,1,1,0,35167
TOT,2002-04-06,2001-02,0,ARS,Arsenal,1,2,-1,0,38186
TOT,2002-04-13,2001-02,1,WHU,West Ham United,1,1,0,0,36083
TOT,2002-04-20,2001-02,0,BOL,Bolton Wanderers,1,1,0,0,25817
TOT,2002-04-27,2001-02,1,LIV,Liverpool,1,0,1,0,36017
TOT,2002-05-11,2001-02,0,LEI,Leicester City,1,2,-1,0,21716
TOT,2002-08-17,2002-03,0,EVE,Everton,2,2,0,0,40120
TOT,2002-08-24,2002-03,1,AVL,Aston Villa,1,0,1,0,35384
TOT,2002-08-27,2002-03,0,CHA,Charlton Athletic,1,0,1,0,26461
TOT,2002-08-31,2002-03,1,SOU,Southampton,2,1,1,0,35573
TOT,2002-09-11,2002-03,0,FUL,Fulham,2,3,-1,0,16757
TOT,2002-09-15,2002-03,1,WHU,West Ham United,3,2,1,0,36005
TOT,2002-09-21,2002-03,0,MUN,Manchester United,0,1,-1,0,67611
TOT,2002-09-28,2002-03,1,MID,Middlesbrough,0,3,-3,0,36082
TOT,2002-10-06,2002-03,0,BLA,Blackburn Rovers,2,1,1,0,26203
TOT,2002-10-20,2002-03,1,BOL,Bolton Wanderers,3,1,2,0,35909
TOT,2002-10-26,2002-03,0,LIV,Liverpool,1,2,-1,0,44084
TOT,2002-11-03,2002-03,1,CHE,Chelsea,0,0,0,0,36049
TOT,2002-11-10,2002-03,0,SUN,Sunderland,0,2,-2,0,40024
TOT,2002-11-16,2002-03,0,ARS,Arsenal,0,3,-3,0,38152
TOT,2002-11-24,2002-03,1,LEE,Leeds United,2,0,2,0,35718
TOT,2002-11-30,2002-03,0,BIR,Birmingham City,1,1,0,0,29505
TOT,2002-12-08,2002-03,1,WBA,West Bromwich Albion,3,1,2,0,35958
TOT,2002-12-15,2002-03,1,ARS,Arsenal,1,1,0,0,36076
TOT,2002-12-23,2002-03,0,MCI,Manchester City,3,2,1,0,34563
TOT,2002-12-26,2002-03,1,CHA,Charlton Athletic,2,2,0,0,36043
TOT,2002-12-29,2002-03,0,NEW,Newcastle United,1,2,-1,0,52145
TOT,2003-01-01,2002-03,0,SOU,Southampton,0,1,-1,0,31890
TOT,2003-01-12,2002-03,1,EVE,Everton,4,3,1,0,36070
TOT,2003-01-18,2002-03,0,AVL,Aston Villa,1,0,1,0,38576
TOT,2003-01-29,2002-03,1,NEW,Newcastle United,0,1,-1,0,36084
TOT,2003-02-01,2002-03,0,CHE,Chelsea,1,1,0,0,41384
TOT,2003-02-08,2002-03,1,SUN,Sunderland,4,1,3,0,36075
TOT,2003-02-24,2002-03,1,FUL,Fulham,1,1,0,0,34704
TOT,2003-03-01,2002-03,0,WHU,West Ham United,0,2,-2,0,35049
TOT,2003-03-16,2002-03,1,LIV,Liverpool,2,3,-1,0,36077
TOT,2003-03-24,2002-03,0,BOL,Bolton Wanderers,0,1,-1,0,23084
TOT,2003-04-05,2002-03,1,BIR,Birmingham City,2,1,1,0,36058
TOT,2003-04-12,2002-03,0,LEE,Leeds United,2,2,0,0,39560
TOT,2003-04-18,2002-03,1,MCI,Manchester City,0,2,-2,0,36075
TOT,2003-04-21,2002-03,0,WBA,West Bromwich Albion,3,2,1,0,26899
TOT,2003-04-27,2002-03,1,MUN,Manchester United,0,2,-2,0,36073
TOT,2003-05-03,2002-03,0,MID,Middlesbrough,1,5,-4,0,30230
TOT,2003-05-11,2002-03,1,BLA,Blackburn Rovers,0,4,-4,0,36036
TOT,2003-08-16,2003-04,0,BIR,Birmingham City,0,1,-1,0,29358
TOT,2003-08-23,2003-04,1,LEE,Leeds United,2,1,1,0,34350
TOT,2003-08-27,2003-04,0,LIV,Liverpool,0,0,0,0,43778
TOT,2003-08-30,2003-04,1,FUL,Fulham,0,3,-3,0,33421
TOT,2003-09-13,2003-04,0,CHE,Chelsea,2,4,-2,0,41165
TOT,2003-09-20,2003-04,1,SOU,Southampton,1,3,-2,0,35758
TOT,2003-09-28,2003-04,0,MCI,Manchester City,0,0,0,0,46842
TOT,2003-10-04,2003-04,1,EVE,Everton,3,0,3,0,36103
TOT,2003-10-19,2003-04,0,LEI,Leicester City,2,1,1,0,31521
TOT,2003-10-26,2003-04,1,MID,Middlesbrough,0,0,0,0,32641
TOT,2003-11-01,2003-04,1,BOL,Bolton Wanderers,0,1,-1,0,35191
TOT,2003-11-08,2003-04,0,ARS,Arsenal,1,2,-1,0,38101
TOT,2003-11-23,2003-04,1,AVL,Aston Villa,2,1,1,0,33140
TOT,2003-11-29,2003-04,0,BLA,Blackburn Rovers,0,1,-1,0,22802
TOT,2003-12-06,2003-04,1,WOL,Wolverhampton Wanderers,5,2,3,0,34820
TOT,2003-12-13,2003-04,0,NEW,Newcastle United,0,4,-4,0,52138
TOT,2003-12-21,2003-04,1,MUN,Manchester United,1,2,-1,0,35910
TOT,2003-12-26,2003-04,0,POR,Portsmouth,0,2,-2,0,20010
TOT,2003-12-28,2003-04,1,CHA,Charlton Athletic,0,1,-1,0,34534
TOT,2004-01-07,2003-04,1,BIR,Birmingham City,4,1,3,0,30025
TOT,2004-01-10,2003-04,0,LEE,Leeds United,1,0,1,0,35365
TOT,2004-01-17,2003-04,1,LIV,Liverpool,2,1,1,0,36104
TOT,2004-01-31,2003-04,0,FUL,Fulham,1,2,-1,0,17024
TOT,2004-02-07,2003-04,1,POR,Portsmouth,4,3,1,0,36107
TOT,2004-02-11,2003-04,0,CHA,Charlton Athletic,4,2,2,0,26645
TOT,2004-02-22,2003-04,1,LEI,Leicester City,4,4,0,0,35218
TOT,2004-03-09,2003-04,0,MID,Middlesbrough,0,1,-1,0,31789
TOT,2004-03-14,2003-04,1,NEW,Newcastle United,1,0,1,0,36088
TOT,2004-03-20,2003-04,0,MUN,Manchester United,0,3,-3,0,67644
TOT,2004-03-27,2003-04,0,SOU,Southampton,0,1,-1,0,31973
TOT,2004-04-03,2003-04,1,CHE,Chelsea,0,1,-1,0,36101
TOT,2004-04-09,2003-04,0,EVE,Everton,1,3,-2,0,38086
TOT,2004-04-12,2003-04,1,MCI,Manchester City,1,1,0,0,35282
TOT,2004-04-17,2003-04,0,BOL,Bolton Wanderers,0,2,-2,0,26440
TOT,2004-04-25,2003-04,1,ARS,Arsenal,2,2,0,0,36097
TOT,2004-05-02,2003-04,0,AVL,Aston Villa,0,1,-1,0,42573
TOT,2004-05-08,2003-04,1,BLA,Blackburn Rovers,1,0,1,0,35687
TOT,2004-05-15,2003-04,0,WOL,Wolverhampton Wanderers,2,0,2,0,29389
TOT,2004-08-14,2004-05,1,LIV,Liverpool,1,1,0,0,36104
TOT,2004-08-21,2004-05,0,NEW,Newcastle United,1,0,1,0,52185
TOT,2004-08-25,2004-05,0,WBA,West Bromwich Albion,1,1,0,0,27048
TOT,2004-08-28,2004-05,1,BIR,Birmingham City,1,0,1,0,35284
TOT,2004-09-12,2004-05,1,NOR,Norwich City,0,0,0,0,36095
TOT,2004-09-19,2004-05,0,CHE,Chelsea,0,0,0,0,42267
TOT,2004-09-25,2004-05,1,MUN,Manchester United,0,1,-1,0,36103
TOT,2004-10-02,2004-05,0,EVE,Everton,1,0,1,0,38264
TOT,2004-10-18,2004-05,0,POR,Portsmouth,0,1,-1,0,20121
TOT,2004-10-23,2004-05,1,BOL,Bolton Wanderers,1,2,-1,0,36025
TOT,2004-10-30,2004-05,0,FUL,Fulham,0,2,-2,0,21317
TOT,2004-11-06,2004-05,1,CHA,Charlton Athletic,2,3,-1,0,35347
TOT,2004-11-13,2004-05,1,ARS,Arsenal,4,5,-1,0,36096
TOT,2004-11-22,2004-05,0,AVL,Aston Villa,0,1,-1,0,35702
TOT,2004-11-28,2004-05,1,MID,Middlesbrough,2,0,2,0,35772
TOT,2004-12-04,2004-05,0,BLA,Blackburn Rovers,1,0,1,0,22182
TOT,2004-12-11,2004-05,0,MCI,Manchester City,1,0,1,0,45805
TOT,2004-12-18,2004-05,1,SOU,Southampton,5,1,4,0,36040
TOT,2004-12-26,2004-05,0,NOR,Norwich City,2,0,2,0,24508
TOT,2004-12-28,2004-05,1,CRY,Crystal Palace,1,1,0,0,36106
TOT,2005-01-01,2004-05,1,EVE,Everton,5,2,3,0,36102
TOT,2005-01-04,2004-05,0,MUN,Manchester United,0,0,0,0,67962
TOT,2005-01-15,2004-05,1,CHE,Chelsea,0,2,-2,0,36105
TOT,2005-01-22,2004-05,0,CRY,Crystal Palace,0,3,-3,0,23723
TOT,2005-02-01,2004-05,0,BOL,Bolton Wanderers,1,3,-2,0,24780
TOT,2005-02-05,2004-05,1,POR,Portsmouth,3,1,2,0,36105
TOT,2005-02-26,2004-05,1,FUL,Fulham,2,0,2,0,35885
TOT,2005-03-05,2004-05,0,SOU,Southampton,0,1,-1,0,31903
TOT,2005-03-16,2004-05,0,CHA,Charlton Athletic,0,2,-2,0,26832
TOT,2005-03-19,2004-05,1,MCI,Manchester City,2,1,1,0,35861
TOT,2005-04-02,2004-05,0,BIR,Birmingham City,1,1,0,0,29304
TOT,2005-04-10,2004-05,1,NEW,Newcastle United,1,0,1,0,35885
TOT,2005-04-16,2004-05,0,LIV,Liverpool,2,2,0,0,44029
TOT,2005-04-20,2004-05,1,WBA,West Bromwich Albion,1,1,0,0,35885
TOT,2005-04-25,2004-05,0,ARS,Arsenal,0,1,-1,0,38147
TOT,2005-05-01,2004-05,1,AVL,Aston Villa,5,1,4,0,36101
TOT,2005-05-07,2004-05,0,MID,Middlesbrough,0,1,-1,0,34766
TOT,2005-05-15,2004-05,1,BLA,Blackburn Rovers,0,0,0,0,35797
TOT,2005-08-13,2005-06,0,POR,Portsmouth,2,0,2,0,20207
TOT,2005-08-20,2005-06,1,MID,Middlesbrough,2,0,2,0,35951
TOT,2005-08-24,2005-06,0,BLA,Blackburn Rovers,0,0,0,0,22375
TOT,2005-08-27,2005-06,1,CHE,Chelsea,0,2,-2,0,36077
TOT,2005-09-10,2005-06,1,LIV,Liverpool,0,0,0,0,36148
TOT,2005-09-17,2005-06,0,AVL,Aston Villa,1,1,0,0,33686
TOT,2005-09-26,2005-06,1,FUL,Fulham,1,0,1,0,35427
TOT,2005-10-01,2005-06,0,CHA,Charlton Athletic,3,2,1,0,27111
TOT,2005-10-15,2005-06,1,EVE,Everton,2,0,2,0,36247
TOT,2005-10-22,2005-06,0,MUN,Manchester United,1,1,0,0,67856
TOT,2005-10-29,2005-06,1,ARS,Arsenal,1,1,0,0,36154
TOT,2005-11-07,2005-06,0,BOL,Bolton Wanderers,0,1,-1,0,24634
TOT,2005-11-20,2005-06,1,WHU,West Ham United,1,1,0,0,36153
TOT,2005-11-26,2005-06,0,WIG,Wigan Athletic,2,1,1,0,22869
TOT,2005-12-03,2005-06,1,SUN,Sunderland,3,2,1,0,35427
TOT,2005-12-12,2005-06,1,POR,Portsmouth,3,1,2,0,36140
TOT,2005-12-18,2005-06,0,MID,Middlesbrough,3,3,0,0,27614
TOT,2005-12-26,2005-06,1,BIR,Birmingham City,2,0,2,0,36045
TOT,2005-12-28,2005-06,0,WBA,West Bromwich Albion,0,2,-2,0,27314
TOT,2005-12-31,2005-06,1,NEW,Newcastle United,2,0,2,0,36246
TOT,2006-01-04,2005-06,0,MCI,Manchester City,2,0,2,0,40808
TOT,2006-01-14,2005-06,0,LIV,Liverpool,0,1,-1,0,45075
TOT,2006-01-21,2005-06,1,AVL,Aston Villa,0,0,0,0,36243
TOT,2006-01-31,2005-06,0,FUL,Fulham,0,1,-1,0,21081
TOT,2006-02-05,2005-06,1,CHA,Charlton Athletic,3,1,2,0,36034
TOT,2006-02-12,2005-06,0,SUN,Sunderland,1,1,0,0,34700
TOT,2006-02-19,2005-06,1,WIG,Wigan Athletic,2,2,0,0,35676
TOT,2006-03-05,2005-06,1,BLA,Blackburn Rovers,3,2,1,0,36080
TOT,2006-03-11,2005-06,0,CHE,Chelsea,1,2,-1,0,42237
TOT,2006-03-18,2005-06,0,BIR,Birmingham City,2,0,2,0,26398
TOT,2006-03-27,2005-06,1,WBA,West Bromwich Albion,2,1,1,0,36153
TOT,2006-04-01,2005-06,0,NEW,Newcastle United,1,3,-2,0,52304
TOT,2006-04-08,2005-06,1,MCI,Manchester City,2,1,1,0,36168
TOT,2006-04-15,2005-06,0,EVE,Everton,1,0,1,0,39856
TOT,2006-04-17,2005-06,1,MUN,Manchester United,1,2,-1,0,36141
TOT,2006-04-22,2005-06,0,ARS,Arsenal,1,1,0,0,38326
TOT,2006-04-30,2005-06,1,BOL,Bolton Wanderers,1,0,1,0,36179
TOT,2006-05-07,2005-06,0,WHU,West Ham United,1,2,-1,0,34797
TOT,2006-08-19,2006-07,0,BOL,Bolton Wanderers,0,2,-2,0,22899
TOT,2006-08-22,2006-07,1,SHU,Sheffield United,2,0,2,0,35287
TOT,2006-08-26,2006-07,1,EVE,Everton,0,2,-2,0,35540
TOT,2006-09-09,2006-07,0,MUN,Manchester United,0,1,-1,0,75453
TOT,2006-09-17,2006-07,1,FUL,Fulham,0,0,0,0,36131
TOT,2006-09-23,2006-07,0,LIV,Liverpool,0,3,-3,0,45121
TOT,2006-10-01,2006-07,1,POR,Portsmouth,2,1,1,0,36063
TOT,2006-10-14,2006-07,0,AVL,Aston Villa,1,1,0,0,42551
TOT,2006-10-22,2006-07,1,WHU,West Ham United,1,0,1,0,36162
TOT,2006-10-28,2006-07,0,WAT,Watford,0,0,0,0,19660
TOT,2006-11-05,2006-07,1,CHE,Chelsea,2,1,1,0,36070
TOT,2006-11-12,2006-07,0,REA,Reading,1,3,-2,0,24042
TOT,2006-11-19,2006-07,0,BLA,Blackburn Rovers,1,1,0,1,18083
TOT,2006-11-26,2006-07,1,WIG,Wigan Athletic,3,1,2,0,35205
TOT,2006-12-02,2006-07,0,ARS,Arsenal,0,3,-3,0,60119
TOT,2006-12-05,2006-07,1,MID,Middlesbrough,2,1,1,1,34154
TOT,2006-12-09,2006-07,1,CHA,Charlton Athletic,5,1,4,0,36781
TOT,2006-12-17,2006-07,0,MCI,Manchester City,2,1,1,0,39285
TOT,2006-12-23,2006-07,0,NEW,Newcastle United,1,3,-2,0,52093
TOT,2006-12-26,2006-07,1,AVL,Aston Villa,2,1,1,0,35293
TOT,2006-12-30,2006-07,1,LIV,Liverpool,0,1,-1,0,36170
TOT,2007-01-01,2006-07,0,POR,Portsmouth,1,1,0,0,20185
TOT,2007-01-14,2006-07,1,NEW,Newcastle United,2,3,-1,0,35942
TOT,2007-01-20,2006-07,0,FUL,Fulham,1,1,0,0,23580
TOT,2007-02-04,2006-07,1,MUN,Manchester United,0,4,-4,0,36146
TOT,2007-02-10,2006-07,0,SHU,Sheffield United,1,2,-1,0,32144
TOT,2007-02-21,2006-07,0,EVE,Everton,2,1,1,0,34121
TOT,2007-02-25,2006-07,1,BOL,Bolton Wanderers,4,1,3,1,35747
TOT,2007-03-04,2006-07,0,WHU,West Ham United,4,3,1,0,34967
TOT,2007-03-17,2006-07,1,WAT,Watford,3,1,2,0,36051
TOT,2007-04-01,2006-07,1,REA,Reading,1,0,1,0,36067
TOT,2007-04-07,2006-07,0,CHE,Chelsea,0,1,-1,0,41869
TOT,2007-04-15,2006-07,0,WIG,Wigan Athletic,3,3,0,0,16654
TOT,2007-04-21,2006-07,1,ARS,Arsenal,2,2,0,0,36054
TOT,2007-04-28,2006-07,0,MID,Middlesbrough,3,2,1,0,27861
TOT,2007-05-07,2006-07,0,CHA,Charlton Athletic,2,0,2,0,26339
TOT,2007-05-10,2006-07,1,BLA,Blackburn Rovers,1,1,0,0,35974
TOT,2007-05-13,2006-07,1,MCI,Manchester City,2,1,1,0,35415
TOT,2007-08-11,2007-08,0,SUN,Sunderland,0,1,-1,0,
TOT,2007-08-14,2007-08,1,EVE,Everton,1,3,-2,0,
TOT,2007-08-18,2007-08,1,DER,Derby County,4,0,4,0,
TOT,2007-08-26,2007-08,0,MUN,Manchester United,0,1,-1,0,
TOT,2007-09-01,2007-08,0,FUL,Fulham,3,3,0,0,
TOT,2007-09-15,2007-08,1,ARS,Arsenal,1,3,-2,0,
TOT,2007-09-23,2007-08,0,BOL,Bolton Wanderers,1,1,0,0,
TOT,2007-10-01,2007-08,1,AVL,Aston Villa,4,4,0,0,
TOT,2007-10-07,2007-08,0,LIV,Liverpool,2,2,0,0,
TOT,2007-10-22,2007-08,0,NEW,Newcastle United,1,3,-2,0,
TOT,2007-10-28,2007-08,1,BLA,Blackburn Rovers,1,2,-1,0,
TOT,2007-11-03,2007-08,0,MID,Middlesbrough,1,1,0,0,
TOT,2007-11-11,2007-08,1,WIG,Wigan Athletic,4,0,4,0,
TOT,2007-11-25,2007-08,0,WHU,West Ham United,1,1,0,0,
TOT,2007-12-02,2007-08,1,BIR,Birmingham City,2,3,-1,1,
TOT,2007-12-09,2007-08,1,MCI,Manchester City,2,1,1,0,
TOT,2007-12-15,2007-08,0,POR,Portsmouth,1,0,1,0,
TOT,2007-12-22,2007-08,0,ARS,Arsenal,1,2,-1,0,
TOT,2007-12-26,2007-08,1,FUL,Fulham,5,1,4,0,
TOT,2007-12-29,2007-08,1,REA,Reading,6,4,2,0,
TOT,2008-01-01,2007-08,0,AVL,Aston Villa,1,2,-1,0,
TOT,2008-01-12,2007-08,0,CHE,Chelsea,0,2,-2,0,
TOT,2008-01-19,2007-08,1,SUN,Sunderland,2,0,2,0,
TOT,2008-01-30,2007-08,0,EVE,Everton,0,0,0,0,
TOT,2008-02-02,2007-08,1,MUN,Manchester United,1,1,0,0,
TOT,2008-02-09,2007-08,0,DER,Derby County,3,0,3,0,
TOT,2008-03-01,2007-08,0,BIR,Birmingham City,1,4,-3,0,
TOT,2008-03-09,2007-08,1,WHU,West Ham United,4,0,4,0,
TOT,2008-03-16,2007-08,0,MCI,Manchester City,1,2,-1,0,
TOT,2008-03-19,2007-08,1,CHE,Chelsea,4,4,0,0,
TOT,2008-03-22,2007-08,1,POR,Portsmouth,2,0,2,0,
TOT,2008-03-30,2007-08,1,NEW,Newcastle United,1,4,-3,0,
TOT,2008-04-05,2007-08,0,BLA,Blackburn Rovers,1,1,0,0,
TOT,2008-04-12,2007-08,1,MID,Middlesbrough,1,1,0,0,
TOT,2008-04-19,2007-08,0,WIG,Wigan Athletic,1,1,0,0,
TOT,2008-04-26,2007-08,1,BOL,Bolton Wanderers,1,1,0,0,
TOT,2008-05-03,2007-08,0,REA,Reading,1,0,1,0,
TOT,2008-05-11,2007-08,1,LIV,Liverpool,0,2,-2,0,
TOT,2008-08-16,2008-09,0,MID,Middlesbrough,1,2,-1,0,
TOT,2008-08-23,2008-09,1,SUN,Sunderland,1,2,-1,0,
TOT,2008-08-31,2008-09,0,CHE,Chelsea,1,1,0,0,
TOT,2008-09-15,2008-09,1,AVL,Aston Villa,1,2,-1,0,
TOT,2008-09-21,2008-09,1,WIG,Wigan Athletic,0,0,0,0,
TOT,2008-09-28,2008-09,0,POR,Portsmouth,0,2,-2,0,
TOT,2008-10-05,2008-09,1,HUL,Hull City,0,1,-1,0,
TOT,2008-10-19,2008-09,0,STO,Stoke City,1,2,-1,2,
TOT,2008-10-26,2008-09,1,BOL,Bolton Wanderers,2,0,2,0,
TOT,2008-10-29,2008-09,0,ARS,Arsenal,4,4,0,0,
TOT,2008-11-01,2008-09,1,LIV,Liverpool,2,1,1,0,
TOT,2008-11-09,2008-09,0,MCI,Manchester City,2,1,1,1,
TOT,2008-11-15,2008-09,0,FUL,Fulham,1,2,-1,0,
TOT,2008-11-23,2008-09,1,BLA,Blackburn Rovers,1,0,1,0,
TOT,2008-11-30,2008-09,1,EVE,Everton,0,1,-1,0,
TOT,2008-12-08,2008-09,0,WHU,West Ham United,2,0,2,0,34277
TOT,2008-12-13,2008-09,1,MUN,Manchester United,0,0,0,0,35882
TOT,2008-12-21,2008-09,0,NEW,Newcastle United,1,2,-1,0,47982
TOT,2008-12-26,2008-09,1,FUL,Fulham,0,0,0,0,35866
TOT,2008-12-28,2008-09,0,WBA,West Bromwich Albion,0,2,-2,1,26344
TOT,2009-01-11,2008-09,0,WIG,Wigan Athletic,0,1,-1,0,17500
TOT,2009-01-18,2008-09,1,POR,Portsmouth,1,1,0,0,36011
TOT,2009-01-27,2008-09,1,STO,Stoke City,3,1,2,0,36072
TOT,2009-01-31,2008-09,0,BOL,Bolton Wanderers,2,3,-1,0,21575
TOT,2009-02-08,2008-09,1,ARS,Arsenal,0,0,0,0,36021
TOT,2009-02-23,2008-09,0,HUL,Hull City,2,1,1,0,
TOT,2009-03-04,2008-09,1,MID,Middlesbrough,4,0,4,0,35761
TOT,2009-03-07,2008-09,0,SUN,Sunderland,1,1,0,0,37894
TOT,2009-03-15,2008-09,0,AVL,Aston Villa,2,1,1,0,41205
TOT,2009-03-21,2008-09,1,CHE,Chelsea,1,0,1,0,36034
TOT,2009-04-04,2008-09,0,BLA,Blackburn Rovers,1,2,-1,1,21891
TOT,2009-04-11,2008-09,1,WHU,West Ham United,1,0,1,0,35969
TOT,2009-04-19,2008-09,1,NEW,Newcastle United,1,0,1,0,
TOT,2009-04-25,2008-09,0,MUN,Manchester United,2,5,-3,0,75458
TOT,2009-05-02,2008-09,1,WBA,West Bromwich Albion,1,0,1,0,35836
TOT,2009-05-09,2008-09,0,EVE,Everton,0,0,0,0,36646
TOT,2009-05-16,2008-09,1,MCI,Manchester City,2,1,1,0,36000
TOT,2009-05-24,2008-09,0,LIV,Liverpool,1,3,-2,0,43937
TOT,2009-08-16,2009-10,1,LIV,Liverpool,2,1,1,0,35935
TOT,2009-08-19,2009-10,0,HUL,Hull City,5,1,4,0,24735
TOT,2009-08-23,2009-10,0,WHU,West Ham United,2,1,1,0,33095
TOT,2009-08-29,2009-10,1,BIR,Birmingham City,2,1,1,0,35318
TOT,2009-09-12,2009-10,1,MUN,Manchester United,1,3,-2,0,35785
TOT,2009-09-20,2009-10,0,CHE,Chelsea,0,3,-3,0,41623
TOT,2009-09-26,2009-10,1,BUR,Burnley,5,0,5,0,35462
TOT,2009-10-03,2009-10,0,BOL,Bolton Wanderers,2,2,0,0,21305
TOT,2009-10-17,2009-10,0,POR,Portsmouth,2,1,1,1,20821
TOT,2009-10-24,2009-10,1,STO,Stoke City,0,1,-1,0,36031
TOT,2009-10-31,2009-10,0,ARS,Arsenal,0,3,-3,0,60103
TOT,2009-11-07,2009-10,1,SUN,Sunderland,2,0,2,0,35955
TOT,2009-11-22,2009-10,1,WIG,Wigan Athletic,9,1,8,0,35650
TOT,2009-11-28,2009-10,0,AVL,Aston Villa,1,1,0,0,39866
TOT,2009-12-06,2009-10,0,EVE,Everton,2,2,0,0,34003
TOT,2009-12-12,2009-10,1,WOL,Wolverhampton Wanderers,0,1,-1,0,36012
TOT,2009-12-16,2009-10,1,MCI,Manchester City,3,0,3,0,35891
TOT,2009-12-19,2009-10,0,BLA,Blackburn Rovers,2,0,2,0,26490
TOT,2009-12-26,2009-10,0,FUL,Fulham,0,0,0,0,25679
TOT,2009-12-28,2009-10,1,WHU,West Ham United,2,0,2,0,35994
TOT,2010-01-16,2009-10,1,HUL,Hull City,0,0,0,0,35729
TOT,2010-01-20,2009-10,0,LIV,Liverpool,0,2,-2,0,42016
TOT,2010-01-26,2009-10,1,FUL,Fulham,2,0,2,0,35467
TOT,2010-01-30,2009-10,0,BIR,Birmingham City,1,1,0,0,27238
TOT,2010-02-06,2009-10,1,AVL,Aston Villa,0,0,0,0,35899
TOT,2010-02-10,2009-10,0,WOL,Wolverhampton Wanderers,0,1,-1,0,27992
TOT,2010-02-21,2009-10,0,WIG,Wigan Athletic,3,0,3,0,16165
TOT,2010-02-28,2009-10,1,EVE,Everton,2,1,1,0,35912
TOT,2010-03-13,2009-10,1,BLA,Blackburn Rovers,3,1,2,0,35474
TOT,2010-03-20,2009-10,0,STO,Stoke City,2,1,1,0,27575
TOT,2010-03-27,2009-10,1,POR,Portsmouth,2,0,2,0,35870
TOT,2010-04-03,2009-10,0,SUN,Sunderland,1,3,-2,0,43184
TOT,2010-04-14,2009-10,1,ARS,Arsenal,2,1,1,0,36041
TOT,2010-04-17,2009-10,1,CHE,Chelsea,2,1,1,0,35814
TOT,2010-04-24,2009-10,0,MUN,Manchester United,1,3,-2,0,75268
TOT,2010-05-01,2009-10,1,BOL,Bolton Wanderers,1,0,1,0,35852
TOT,2010-05-05,2009-10,0,MCI,Manchester City,1,0,1,0,47370
TOT,2010-05-09,2009-10,0,BUR,Burnley,2,4,-2,0,21161
TOT,2010-08-14,2010-11,1,MCI,Manchester City,0,0,0,0,35928
TOT,2010-08-21,2010-11,0,STO,Stoke City,2,1,1,0,27243
TOT,2010-08-28,2010-11,1,WIG,Wigan Athletic,0,1,-1,0,35101
TOT,2010-09-11,2010-11,0,WBA,West Bromwich Albion,1,1,0,0,23642
TOT,2010-09-18,2010-11,1,WOL,Wolverhampton Wanderers,3,1,2,0,35940
TOT,2010-09-25,2010-11,0,WHU,West Ham United,0,1,-1,0,34190
TOT,2010-10-02,2010-11,1,AVL,Aston Villa,2,1,1,0,35871
TOT,2010-10-16,2010-11,0,FUL,Fulham,2,1,1,0,25615
TOT,2010-10-23,2010-11,1,EVE,Everton,1,1,0,0,35967
TOT,2010-10-30,2010-11,0,MUN,Manchester United,0,2,-2,0,75223
TOT,2010-11-06,2010-11,0,BOL,Bolton Wanderers,2,4,-2,0,20255
TOT,2010-11-09,2010-11,1,SUN,Sunderland,1,1,0,0,35843
TOT,2010-11-13,2010-11,1,BLA,Blackburn Rovers,4,2,2,0,35700
TOT,2010-11-20,2010-11,0,ARS,Arsenal,3,2,1,0,60102
TOT,2010-11-28,2010-11,1,LIV,Liverpool,2,1,1,0,35962
TOT,2010-12-04,2010-11,0,BIR,Birmingham City,1,1,0,0,25770
TOT,2010-12-12,2010-11,1,CHE,Chelsea,1,1,0,0,35787
TOT,2010-12-26,2010-11,0,AVL,Aston Villa,2,1,1,1,39411
TOT,2010-12-28,2010-11,1,NEW,Newcastle United,2,0,2,1,35927
TOT,2011-01-01,2010-11,1,FUL,Fulham,1,0,1,0,35603
TOT,2011-01-05,2010-11,0,EVE,Everton,1,2,-1,0,34124
TOT,2011-01-16,2010-11,1,MUN,Manchester United,0,0,0,0,35828
TOT,2011-01-22,2010-11,0,NEW,Newcastle United,1,1,0,0,51010
TOT,2011-02-02,2010-11,0,BLA,Blackburn Rovers,1,0,1,0,23253
TOT,2011-02-05,2010-11,1,BOL,Bolton Wanderers,2,1,1,0,36197
TOT,2011-02-12,2010-11,0,SUN,Sunderland,2,1,1,0,40986
TOT,2011-02-22,2010-11,0,BPL,Blackpool,1,3,-2,0,16069
TOT,2011-03-06,2010-11,0,WOL,Wolverhampton Wanderers,3,3,0,0,28669
TOT,2011-03-19,2010-11,1,WHU,West Ham United,0,0,0,0,36010
TOT,2011-04-02,2010-11,0,WIG,Wigan Athletic,0,0,0,0,18578
TOT,2011-04-09,2010-11,1,STO,Stoke City,3,2,1,0,32702
TOT,2011-04-20,2010-11,1,ARS,Arsenal,3,3,0,0,36138
TOT,2011-04-23,2010-11,1,WBA,West Bromwich Albion,2,2,0,0,36160
TOT,2011-04-30,2010-11,0,CHE,Chelsea,1,2,-1,0,41681
TOT,2011-05-07,2010-11,1,BPL,Blackpool,1,1,0,0,35585
TOT,2011-05-10,2010-11,0,MCI,Manchester City,0,1,-1,0,47029
TOT,2011-05-15,2010-11,0,LIV,Liverpool,2,0,2,0,44893
TOT,2011-05-22,2010-11,1,BIR,Birmingham City,2,1,1,0,36119
TOT,2011-08-22,2011-12,0,MUN,Manchester United,0,3,-3,0,75498
TOT,2011-08-28,2011-12,1,MCI,Manchester City,1,5,-4,0,36150
TOT,2011-09-10,2011-12,0,WOL,Wolverhampton Wanderers,2,0,2,0,25274
TOT,2011-09-18,2011-12,1,LIV,Liverpool,4,0,4,0,36129
TOT,2011-09-24,2011-12,0,WIG,Wigan Athletic,2,1,1,0,18788
TOT,2011-10-02,2011-12,1,ARS,Arsenal,2,1,1,0,36274
TOT,2011-10-16,2011-12,0,NEW,Newcastle United,2,2,0,0,46420
TOT,2011-10-23,2011-12,0,BLA,Blackburn Rovers,2,1,1,0,22786
TOT,2011-10-30,2011-12,1,QPR,Queens Park Rangers,3,1,2,0,36147
TOT,2011-11-06,2011-12,0,FUL,Fulham,3,1,2,0,25698
TOT,2011-11-21,2011-12,1,AVL,Aston Villa,2,0,2,0,35818
TOT,2011-11-26,2011-12,0,WBA,West Bromwich Albion,3,1,2,0,24801
TOT,2011-12-03,2011-12,1,BOL,Bolton Wanderers,3,0,3,0,35896
TOT,2011-12-11,2011-12,0,STO,Stoke City,1,2,-1,1,27529
TOT,2011-12-18,2011-12,1,SUN,Sunderland,1,0,1,0,36021
TOT,2011-12-22,2011-12,1,CHE,Chelsea,1,1,0,0,36141
TOT,2011-12-27,2011-12,0,NOR,Norwich City,2,0,2,0,26807
TOT,2011-12-31,2011-12,0,SWA,Swansea City,1,1,0,0,20393
TOT,2012-01-03,2011-12,1,WBA,West Bromwich Albion,1,0,1,0,36062
TOT,2012-01-11,2011-12,1,EVE,Everton,2,0,2,0,36132
TOT,2012-01-14,2011-12,1,WOL,Wolverhampton Wanderers,1,1,0,0,36194
TOT,2012-01-22,2011-12,0,MCI,Manchester City,2,3,-1,0,47422
TOT,2012-01-31,2011-12,1,WIG,Wigan Athletic,3,1,2,0,35801
TOT,2012-02-06,2011-12,0,LIV,Liverpool,0,0,0,0,44461
TOT,2012-02-11,2011-12,1,NEW,Newcastle United,5,0,5,0,36176
TOT,2012-02-26,2011-12,0,ARS,Arsenal,2,5,-3,1,60106
TOT,2012-03-04,2011-12,1,MUN,Manchester United,1,3,-2,0,36034
TOT,2012-03-10,2011-12,0,EVE,Everton,0,1,-1,0,34992
TOT,2012-03-21,2011-12,1,STO,Stoke City,1,1,0,0,35172
TOT,2012-03-24,2011-12,0,CHE,Chelsea,0,0,0,0,41830
TOT,2012-04-01,2011-12,1,SWA,Swansea City,3,1,2,0,36174
TOT,2012-04-07,2011-12,0,SUN,Sunderland,0,0,0,0,39335
TOT,2012-04-09,2011-12,1,NOR,Norwich City,1,2,-1,0,36126
TOT,2012-04-21,2011-12,0,QPR,Queens Park Rangers,0,1,-1,0,18021
TOT,2012-04-29,2011-12,1,BLA,Blackburn Rovers,2,0,2,0,35798
TOT,2012-05-02,2011-12,0,BOL,Bolton Wanderers,4,1,3,0,22349
TOT,2012-05-06,2011-12,0,AVL,Aston Villa,1,1,0,1,36008
TOT,2012-05-13,2011-12,1,FUL,Fulham,2,0,2,0,36256
TOT,2012-08-18,2012-13,0,NEW,Newcastle United,1,2,-1,0,52385
TOT,2012-08-25,2012-13,1,WBA,West Bromwich Albion,1,1,0,0,36166
TOT,2012-09-01,2012-13,1,NOR,Norwich City,1,1,0,1,36142
TOT,2012-09-16,2012-13,0,REA,Reading,3,1,2,0,24160
TOT,2012-09-23,2012-13,1,QPR,Queens Park Rangers,2,1,1,0,36052
TOT,2012-09-29,2012-13,0,MUN,Manchester United,3,2,1,0,75566
TOT,2012-10-07,2012-13,1,AVL,Aston Villa,2,0,2,0,35802
TOT,2012-10-20,2012-13,1,CHE,Chelsea,2,4,-2,0,36060
TOT,2012-10-28,2012-13,0,SOU,Southampton,2,1,1,0,31944
TOT,2012-11-03,2012-13,1,WIG,Wigan Athletic,0,1,-1,0,35534
TOT,2012-11-11,2012-13,0,MCI,Manchester City,1,2,-1,0,47208
TOT,2012-11-17,2012-13,0,ARS,Arsenal,2,5,-3,1,60111
TOT,2012-11-25,2012-13,1,WHU,West Ham United,3,1,2,0,36043
TOT,2012-11-28,2012-13,1,LIV,Liverpool,2,1,1,0,36162
TOT,2012-12-01,2012-13,0,FUL,Fulham,3,0,3,0,25426
TOT,2012-12-09,2012-13,0,EVE,Everton,1,2,-1,0,36494
TOT,2012-12-16,2012-13,1,SWA,Swansea City,1,0,1,0,35783
TOT,2012-12-22,2012-13,1,STO,Stoke City,0,0,0,0,35702
TOT,2012-12-26,2012-13,0,AVL,Aston Villa,4,0,4,0,36863
TOT,2012-12-29,2012-13,0,SUN,Sunderland,2,1,1,0,41168
TOT,2013-01-01,2012-13,1,REA,Reading,3,1,2,0,36180
TOT,2013-01-12,2012-13,0,QPR,Queens Park Rangers,0,0,0,0,18018
TOT,2013-01-20,2012-13,1,MUN,Manchester United,1,1,0,0,35956
TOT,2013-01-30,2012-13,0,NOR,Norwich City,1,1,0,0,26818
TOT,2013-02-03,2012-13,0,WBA,West Bromwich Albion,1,0,1,0,24978
TOT,2013-02-09,2012-13,1,NEW,Newcastle United,2,1,1,0,36244
TOT,2013-02-25,2012-13,0,WHU,West Ham United,3,2,1,0,35005
TOT,2013-03-03,2012-13,1,ARS,Arsenal,2,1,1,0,36170
TOT,2013-03-10,2012-13,0,LIV,Liverpool,2,3,-1,0,44752
TOT,2013-03-17,2012-13,1,FUL,Fulham,0,1,-1,0,36004
TOT,2013-03-30,2012-13,0,SWA,Swansea City,2,1,1,0,20604
TOT,2013-04-07,2012-13,1,EVE,Everton,2,2,0,0,36192
TOT,2013-04-21,2012-13,1,MCI,Manchester City,3,1,2,0,36121
TOT,2013-04-27,2012-13,0,WIG,Wigan Athletic,2,2,0,0,22326
TOT,2013-05-04,2012-13,1,SOU,Southampton,1,0,1,0,36190
TOT,2013-05-08,2012-13,0,CHE,Chelsea,2,2,0,0,41581
TOT,2013-05-12,2012-13,0,STO,Stoke City,2,1,1,0,27531
TOT,2013-05-19,2012-13,1,SUN,Sunderland,1,0,1,0,36063
TOT,2013-08-18,2013-14,0,CRY,Crystal Palace,1,0,1,0,23285
TOT,2013-08-25,2013-14,1,SWA,Swansea City,1,0,1,0,36005
TOT,2013-09-01,2013-14,0,ARS,Arsenal,0,1,-1,0,60071
TOT,2013-09-14,2013-14,1,NOR,Norwich City,2,0,2,0,35952
TOT,2013-09-22,2013-14,0,CAR,Cardiff City,1,0,1,0,27815
TOT,2013-09-28,2013-14,1,CHE,Chelsea,1,1,0,0,35857
TOT,2013-10-06,2013-14,1,WHU,West Ham United,0,3,-3,0,35977
TOT,2013-10-20,2013-14,0,AVL,Aston Villa,2,0,2,0,35391
TOT,2013-10-27,2013-14,1,HUL,Hull City,1,0,1,0,36080
TOT,2013-11-03,2013-14,0,EVE,Everton,0,0,0,0,38378
TOT,2013-11-10,2013-14,1,NEW,Newcastle United,0,1,-1,0,36042
TOT,2013-11-24,2013-14,0,MCI,Manchester City,0,6,-6,0,47228
TOT,2013-12-01,2013-14,1,MUN,Manchester United,2,2,0,0,35884
TOT,2013-12-04,2013-14,0,FUL,Fulham,2,1,1,0,24128
TOT,2013-12-07,2013-14,0,SUN,Sunderland,2,1,1,0,37963
TOT,2013-12-15,2013-14,1,LIV,Liverpool,0,5,-5,1,36069
TOT,2013-12-22,2013-14,0,SOU,Southampton,3,2,1,0,31455
TOT,2013-12-26,2013-14,1,WBA,West Bromwich Albion,1,1,0,0,35545
TOT,2013-12-29,2013-14,1,STO,Stoke City,3,0,3,0,36072
TOT,2014-01-01,2013-14,0,MUN,Manchester United,2,1,1,0,75265
TOT,2014-01-11,2013-14,1,CRY,Crystal Palace,2,0,2,0,36102
TOT,2014-01-19,2013-14,0,SWA,Swansea City,3,1,2,0,20769
TOT,2014-01-29,2013-14,1,MCI,Manchester City,1,5,-4,1,36071
TOT,2014-02-01,2013-14,0,HUL,Hull City,1,1,0,0,24932
TOT,2014-02-09,2013-14,1,EVE,Everton,1,0,1,0,35944
TOT,2014-02-12,2013-14,0,NEW,Newcastle United,4,0,4,0,48264
TOT,2014-02-23,2013-14,0,NOR,Norwich City,0,1,-1,0,26834
TOT,2014-03-02,2013-14,1,CAR,Cardiff City,1,0,1,0,35512
TOT,2014-03-08,2013-14,0,CHE,Chelsea,0,4,-4,1,41598
TOT,2014-03-16,2013-14,1,ARS,Arsenal,0,1,-1,0,35711
TOT,2014-03-23,2013-14,1,SOU,Southampton,3,2,1,0,35460
TOT,2014-03-30,2013-14,0,LIV,Liverpool,0,4,-4,0,44762
TOT,2014-04-07,2013-14,1,SUN,Sunderland,5,1,4,0,34410
TOT,2014-04-12,2013-14,0,WBA,West Bromwich Albion,3,3,0,0,25398
TOT,2014-04-19,2013-14,1,FUL,Fulham,3,1,2,0,35841
TOT,2014-04-26,2013-14,0,STO,Stoke City,1,0,1,0,26021
TOT,2014-05-03,2013-14,0,WHU,West Ham United,0,2,-2,1,34977
TOT,2014-05-11,2013-14,1,AVL,Aston Villa,3,0,3,0,35826
TOT,2014-08-16,2014-15,0,WHU,West Ham United,1,0,1,1,34977
TOT,2014-08-24,2014-15,1,QPR,Queens Park Rangers,4,0,4,0,36109
TOT,2014-08-31,2014-15,1,LIV,Liverpool,0,3,-3,0,36130
TOT,2014-09-13,2014-15,0,SUN,Sunderland,2,2,0,0,40799
TOT,2014-09-21,2014-15,1,WBA,West Bromwich Albion,0,1,-1,0,35861
TOT,2014-09-27,2014-15,0,ARS,Arsenal,1,1,0,0,59900
TOT,2014-10-05,2014-15,1,SOU,Southampton,1,0,1,0,35564
TOT,2014-10-18,2014-15,0,MCI,Manchester City,1,4,-3,1,45549
TOT,2014-10-26,2014-15,1,NEW,Newcastle United,1,2,-1,0,35650
TOT,2014-11-02,2014-15,0,AVL,Aston Villa,2,1,1,0,32049
TOT,2014-11-09,2014-15,1,STO,Stoke City,1,2,-1,1,35699
TOT,2014-11-23,2014-15,0,HUL,Hull City,2,1,1,0,23561
TOT,2014-11-30,2014-15,1,EVE,Everton,2,1,1,0,35901
TOT,2014-12-03,2014-15,0,CHE,Chelsea,0,3,-3,0,41518
TOT,2014-12-06,2014-15,1,CRY,Crystal Palace,0,0,0,0,35860
TOT,2014-12-14,2014-15,0,SWA,Swansea City,2,1,1,0,20650
TOT,2014-12-20,2014-15,1,BUR,Burnley,2,1,1,0,35681
TOT,2014-12-26,2014-15,0,LEI,Leicester City,2,1,1,0,31870
TOT,2014-12-28,2014-15,1,MUN,Manchester United,0,0,0,0,35711
TOT,2015-01-01,2014-15,1,CHE,Chelsea,5,3,2,0,35903
TOT,2015-01-10,2014-15,0,CRY,Crystal Palace,1,2,-1,0,24193
TOT,2015-01-17,2014-15,1,SUN,Sunderland,2,1,1,0,35973
TOT,2015-01-31,2014-15,0,WBA,West Bromwich Albion,3,0,3,0,25079
TOT,2015-02-07,2014-15,1,ARS,Arsenal,2,1,1,0,35659
TOT,2015-02-10,2014-15,0,LIV,Liverpool,2,3,-1,0,44577
TOT,2015-02-22,2014-15,1,WHU,West Ham United,2,2,0,0,35837
TOT,2015-03-04,2014-15,1,SWA,Swansea City,3,2,1,0,34008
TOT,2015-03-07,2014-15,0,QPR,Queens Park Rangers,2,1,1,0,17992
TOT,2015-03-15,2014-15,0,MUN,Manchester United,0,3,-3,0,75112
TOT,2015-03-21,2014-15,1,LEI,Leicester City,4,3,1,0,35950
TOT,2015-04-05,2014-15,0,BUR,Burnley,0,0,0,0,18829
TOT,2015-04-11,2014-15,1,AVL,Aston Villa,0,1,-1,0,35687
TOT,2015-04-19,2014-15,0,NEW,Newcastle United,3,1,2,0,47427
TOT,2015-04-25,2014-15,0,SOU,Southampton,2,2,0,0,31622
TOT,2015-05-03,2014-15,1,MCI,Manchester City,0,1,-1,0,35784
TOT,2015-05-09,2014-15,0,STO,Stoke City,0,3,-3,1,27104
TOT,2015-05-16,2014-15,1,HUL,Hull City,2,0,2,0,35857
TOT,2015-05-24,2014-15,0,EVE,Everton,1,0,1,0,39365
TOT,2015-08-08,2015-16,0,MUN,Manchester United,0,1,-1,0,75261
TOT,2015-08-15,2015-16,1,STO,Stoke City,2,2,0,0,36004
TOT,2015-08-22,2015-16,0,LEI,Leicester City,1,1,0,0,31971
TOT,2015-08-29,2015-16,1,EVE,Everton,0,0,0,0,35865
TOT,2015-09-13,2015-16,0,SUN,Sunderland,1,0,1,0,40303
TOT,2015-09-20,2015-16,1,CRY,Crystal Palace,1,0,1,0,35723
TOT,2015-09-26,2015-16,1,MCI,Manchester City,4,1,3,0,35867
TOT,2015-10-04,2015-16,0,SWA,Swansea City,2,2,0,0,20845
TOT,2015-10-17,2015-16,1,LIV,Liverpool,0,0,0,0,35926
TOT,2015-10-25,2015-16,0,BOU,Bournemouth,5,1,4,0,11332
TOT,2015-11-02,2015-16,1,AVL,Aston Villa,3,1,2,0,34882
TOT,2015-11-08,2015-16,0,ARS,Arsenal,1,1,0,0,60060
TOT,2015-11-22,2015-16,1,WHU,West Ham United,4,1,3,0,35968
TOT,2015-11-29,2015-16,1,CHE,Chelsea,0,0,0,0,35639
TOT,2015-12-05,2015-16,0,WBA,West Bromwich Albion,1,1,0,0,23602
TOT,2015-12-13,2015-16,1,NEW,Newcastle United,1,2,-1,0,35768
TOT,2015-12-19,2015-16,0,SOU,Southampton,2,0,2,0,31636
TOT,2015-12-26,2015-16,1,NOR,Norwich City,3,0,3,0,35198
TOT,2015-12-28,2015-16,0,WAT,Watford,2,1,1,0,20730
TOT,2016-01-03,2015-16,0,EVE,Everton,1,1,0,0,38482
TOT,2016-01-13,2015-16,1,LEI,Leicester City,0,1,-1,0,35850
TOT,2016-01-16,2015-16,1,SUN,Sunderland,4,1,3,0,35854
TOT,2016-01-23,2015-16,0,CRY,Crystal Palace,3,1,2,0,24867
TOT,2016-02-02,2015-16,0,NOR,Norwich City,3,0,3,0,27067
TOT,2016-02-06,2015-16,1,WAT,Watford,1,0,1,0,35997
TOT,2016-02-14,2015-16,0,MCI,Manchester City,2,1,1,0,54551
TOT,2016-02-28,2015-16,1,SWA,Swansea City,2,1,1,0,35922
TOT,2016-03-02,2015-16,0,WHU,West Ham United,0,1,-1,0,34977
TOT,2016-03-05,2015-16,1,ARS,Arsenal,2,2,0,0,35762
TOT,2016-03-13,2015-16,0,AVL,Aston Villa,2,0,2,0,32393
TOT,2016-03-20,2015-16,1,BOU,Bournemouth,3,0,3,0,36084
TOT,2016-04-02,2015-16,0,LIV,Liverpool,1,1,0,0,44062
TOT,2016-04-10,2015-16,1,MUN,Manchester United,3,0,3,0,35761
TOT,2016-04-18,2015-16,0,STO,Stoke City,4,0,4,0,27442
TOT,2016-04-25,2015-16,1,WBA,West Bromwich Albion,1,1,0,0,35923
TOT,2016-05-02,2015-16,0,CHE,Chelsea,2,2,0,0,41545
TOT,2016-05-08,2015-16,1,SOU,Southampton,1,2,-1,0,35748
TOT,2016-05-15,2015-16,0,NEW,Newcastle United,1,5,-4,0,52183
TOT,2016-08-13,2016-17,0,EVE,Everton,1,1,0,0,39494
TOT,2016-08-20,2016-17,1,CRY,Crystal Palace,1,0,1,0,31447
TOT,2016-08-27,2016-17,1,LIV,Liverpool,1,1,0,0,31211
TOT,2016-09-10,2016-17,0,STO,Stoke City,4,0,4,0,27385
TOT,2016-09-18,2016-17,1,SUN,Sunderland,1,0,1,0,31251
TOT,2016-09-24,2016-17,0,MID,Middlesbrough,2,1,1,0,32703
TOT,2016-10-02,2016-17,1,MCI,Manchester City,2,0,2,0,31793
TOT,2016-10-15,2016-17,0,WBA,West Bromwich Albion,1,1,0,0,24263
TOT,2016-10-22,2016-17,0,BOU,Bournemouth,0,0,0,0,11201
TOT,2016-10-29,2016-17,1,LEI,Leicester City,1,1,0,0,31868
TOT,2016-11-06,2016-17,0,ARS,Arsenal,1,1,0,0,60039
TOT,2016-11-19,2016-17,1,WHU,West Ham United,3,2,1,0,31212
TOT,2016-11-26,2016-17,0,CHE,Chelsea,1,2,-1,0,41513
TOT,2016-12-03,2016-17,1,SWA,Swansea City,5,0,5,0,31663
TOT,2016-12-11,2016-17,0,MUN,Manchester United,0,1,-1,0,75271
TOT,2016-12-14,2016-17,1,HUL,Hull City,3,0,3,0,31347
TOT,2016-12-18,2016-17,1,BUR,Burnley,2,1,1,0,31467
TOT,2016-12-28,2016-17,0,SOU,Southampton,4,1,3,0,31853
TOT,2017-01-01,2016-17,0,WAT,Watford,4,1,3,0,20882
TOT,2017-01-04,2016-17,1,CHE,Chelsea,2,0,2,0,31491
TOT,2017-01-14,2016-17,1,WBA,West Bromwich Albion,4,0,4,0,31613
TOT,2017-01-21,2016-17,0,MCI,Manchester City,2,2,0,0,54402
TOT,2017-01-31,2016-17,0,SUN,Sunderland,0,0,0,0,40058
TOT,2017-02-04,2016-17,1,MID,Middlesbrough,1,0,1,0,31949
TOT,2017-02-11,2016-17,0,LIV,Liverpool,0,2,-2,0,53159
TOT,2017-02-26,2016-17,1,STO,Stoke City,4,0,4,0,31864
TOT,2017-03-05,2016-17,1,EVE,Everton,3,2,1,0,31962
TOT,2017-03-19,2016-17,1,SOU,Southampton,2,1,1,0,31697
TOT,2017-04-01,2016-17,0,BUR,Burnley,2,0,2,0,21684
TOT,2017-04-05,2016-17,0,SWA,Swansea City,3,1,2,0,20855
TOT,2017-04-08,2016-17,1,WAT,Watford,4,0,4,0,31706
TOT,2017-04-15,2016-17,1,BOU,Bournemouth,4,0,4,0,31943
TOT,2017-04-26,2016-17,0,CRY,Crystal Palace,1,0,1,0,25596
TOT,2017-04-30,2016-17,1,ARS,Arsenal,2,0,2,0,31811
TOT,2017-05-05,2016-17,0,WHU,West Ham United,0,1,-1,0,56992
TOT,2017-05-14,2016-17,1,MUN,Manchester United,2,1,1,0,31848
TOT,2017-05-18,2016-17,0,LEI,Leicester City,6,1,5,0,31351
TOT,2017-05-21,2016-17,0,HUL,Hull City,7,1,6,0,23804
TOT,2017-08-13,2017-18,0,NEW,Newcastle United,2,0,2,0,52077
TOT,2017-08-20,2017-18,1,CHE,Chelsea,1,2,-1,0,73587
TOT,2017-08-27,2017-18,1,BUR,Burnley,1,1,0,0,67862
TOT,2017-09-09,2017-18,0,EVE,Everton,3,0,3,0,38835
TOT,2017-09-16,2017-18,1,SWA,Swansea City,0,0,0,0,65366
TOT,2017-09-23,2017-18,0,WHU,West Ham United,3,2,1,1,56988
TOT,2017-09-30,2017-18,0,HUD,Huddersfield Town,4,0,4,0,24169
TOT,2017-10-14,2017-18,1,BOU,Bournemouth,1,0,1,0,73502
TOT,2017-10-22,2017-18,1,LIV,Liverpool,4,1,3,0,80827
TOT,2017-10-28,2017-18,0,MUN,Manchester United,0,1,-1,0,75034
TOT,2017-11-05,2017-18,1,CRY,Crystal Palace,1,0,1,0,65270
TOT,2017-11-18,2017-18,0,ARS,Arsenal,0,2,-2,0,59530
TOT,2017-11-25,2017-18,1,WBA,West Bromwich Albion,1,1,0,0,65905
TOT,2017-11-28,2017-18,0,LEI,Leicester City,1,2,-1,0,31950
TOT,2017-12-02,2017-18,0,WAT,Watford,1,1,0,1,20278
TOT,2017-12-09,2017-18,1,STO,Stoke City,5,1,4,0,62202
TOT,2017-12-13,2017-18,1,BHA,Brighton and Hove Albion,2,0,2,0,55124
TOT,2017-12-16,2017-18,0,MCI,Manchester City,1,4,-3,0,54214
TOT,2017-12-23,2017-18,0,BUR,Burnley,3,0,3,0,21650
TOT,2017-12-26,2017-18,1,SOU,Southampton,5,2,3,0,57297
TOT,2018-01-02,2017-18,0,SWA,Swansea City,2,0,2,0,20615
TOT,2018-01-04,2017-18,1,WHU,West Ham United,1,1,0,0,50034
TOT,2018-01-13,2017-18,1,EVE,Everton,4,0,4,0,76251
TOT,2018-01-21,2017-18,0,SOU,Southampton,1,1,0,0,31361
TOT,2018-01-31,2017-18,1,MUN,Manchester United,2,0,2,0,81978
TOT,2018-02-04,2017-18,0,LIV,Liverpool,2,2,0,0,53213
TOT,2018-02-10,2017-18,1,ARS,Arsenal,1,0,1,0,83222
TOT,2018-02-25,2017-18,0,CRY,Crystal Palace,1,0,1,0,25287
TOT,2018-03-03,2017-18,1,HUD,Huddersfield Town,2,0,2,0,68311
TOT,2018-03-11,2017-18,0,BOU,Bournemouth,4,1,3,0,10623
TOT,2018-04-01,2017-18,0,CHE,Chelsea,3,1,2,0,41364
TOT,2018-04-07,2017-18,0,STO,Stoke City,2,1,1,0,29515
TOT,2018-04-14,2017-18,1,MCI,Manchester City,1,3,-2,0,80811
TOT,2018-04-17,2017-18,0,BHA,Brighton and Hove Albion,1,1,0,0,30440
TOT,2018-04-30,2017-18,1,WAT,Watford,2,0,2,0,52675
TOT,2018-05-05,2017-18,0,WBA,West Bromwich Albion,0,1,-1,0,23685
TOT,2018-05-09,2017-18,1,NEW,Newcastle United,1,0,1,0,54923
TOT,2018-05-13,2017-18,1,LEI,Leicester City,5,4,1,0,77841
TOT,2018-08-11,2018-19,0,NEW,Newcastle United,2,1,1,0,51749
TOT,2018-08-18,2018-19,1,FUL,Fulham,3,1,2,0,58297
TOT,2018-08-27,2018-19,0,MUN,Manchester United,3,0,3,0,74400
TOT,2018-09-02,2018-19,0,WAT,Watford,1,2,-1,0,20141
TOT,2018-09-15,2018-19,1,LIV,Liverpool,1,2,-1,0,80188
TOT,2018-09-22,2018-19,0,BHA,Brighton and Hove Albion,2,1,1,0,30531
TOT,2018-09-29,2018-19,0,HUD,Huddersfield Town,2,0,2,0,23885
TOT,2018-10-06,2018-19,1,CAR,Cardiff City,1,0,1,0,43268
TOT,2018-10-20,2018-19,0,WHU,West Ham United,1,0,1,0,56921
TOT,2018-10-29,2018-19,1,MCI,Manchester City,0,1,-1,0,56854
TOT,2018-11-03,2018-19,0,WOL,Wolverhampton Wanderers,3,2,1,0,31185
TOT,2018-11-10,2018-19,0,CRY,Crystal Palace,1,0,1,0,25685
TOT,2018-11-24,2018-19,1,CHE,Chelsea,3,1,2,0,55465
TOT,2018-12-02,2018-19,0,ARS,Arsenal,2,4,-2,1,59973
TOT,2018-12-05,2018-19,1,SOU,Southampton,3,1,2,0,33012
TOT,2018-12-08,2018-19,0,LEI,Leicester City,2,0,2,0,31957
TOT,2018-12-15,2018-19,1,BUR,Burnley,1,0,1,0,41645
TOT,2018-12-23,2018-19,0,EVE,Everton,6,2,4,0,39319
TOT,2018-12-26,2018-19,1,BOU,Bournemouth,5,0,5,0,45154
TOT,2018-12-29,2018-19,1,WOL,Wolverhampton Wanderers,1,3,-2,0,46356
TOT,2019-01-01,2018-19,0,CAR,Cardiff City,3,0,3,0,32485
TOT,2019-01-13,2018-19,1,MUN,Manchester United,0,1,-1,0,80062
TOT,2019-01-20,2018-19,0,FUL,Fulham,2,1,1,0,24807
TOT,2019-01-30,2018-19,1,WAT,Watford,2,1,1,0,29164
TOT,2019-02-02,2018-19,1,NEW,Newcastle United,1,0,1,0,41219
TOT,2019-02-10,2018-19,1,LEI,Leicester City,3,1,2,0,44154
TOT,2019-02-23,2018-19,0,BUR,Burnley,1,2,-1,0,21338
TOT,2019-02-27,2018-19,0,CHE,Chelsea,0,2,-2,0,40542
TOT,2019-03-02,2018-19,1,ARS,Arsenal,1,1,0,0,81332
TOT,2019-03-09,2018-19,0,SOU,Southampton,1,2,-1,0,31890
TOT,2019-03-31,2018-19,0,LIV,Liverpool,1,2,-1,0,53322
TOT,2019-04-03,2018-19,1,CRY,Crystal Palace,2,0,2,0,59215
TOT,2019-04-13,2018-19,1,HUD,Huddersfield Town,4,0,4,0,58308
TOT,2019-04-20,2018-19,0,MCI,Manchester City,0,1,-1,0,54489
TOT,2019-04-23,2018-19,1,BHA,Brighton and Hove Albion,1,0,1,0,56251
TOT,2019-04-27,2018-19,1,WHU,West Ham United,0,1,-1,0,60043
TOT,2019-05-04,2018-19,0,BOU,Bournemouth,0,1,-1,2,10630
TOT,2019-05-12,2018-19,1,EVE,Everton,2,2,0,0,60124
TOT,2019-08-10,2019-20,1,AVL,Aston Villa,3,1,2,0,60407
TOT,2019-08-17,2019-20,0,MCI,Manchester City,2,2,0,0,54503
TOT,2019-08-25,2019-20,1,NEW,Newcastle United,0,1,-1,0,59245
TOT,2019-09-01,2019-20,0,ARS,Arsenal,2,2,0,0,60333
TOT,2019-09-14,2019-20,1,CRY,Crystal Palace,4,0,4,0,59812
TOT,2019-09-21,2019-20,0,LEI,Leicester City,1,2,-1,0,32129
TOT,2019-09-28,2019-20,1,SOU,Southampton,2,1,1,1,59645
TOT,2019-10-05,2019-20,0,BHA,Brighton and Hove Albion,0,3,-3,0,30610
TOT,2019-10-19,2019-20,1,WAT,Watford,1,1,0,0,58754
TOT,2019-10-27,2019-20,0,LIV,Liverpool,1,2,-1,0,53222
TOT,2019-11-03,2019-20,0,EVE,Everton,1,1,0,0,39001
TOT,2019-11-09,2019-20,1,SHU,Sheffield United,1,1,0,0,59781
TOT,2019-11-23,2019-20,0,WHU,West Ham United,3,2,1,0,59930
TOT,2019-11-30,2019-20,1,BOU,Bournemouth,3,2,1,0,59626
TOT,2019-12-04,2019-20,0,MUN,Manchester United,1,2,-1,0,73252
TOT,2019-12-07,2019-20,1,BUR,Burnley,5,0,5,0,58401
TOT,2019-12-15,2019-20,0,WOL,Wolverhampton Wanderers,2,1,1,0,31674
TOT,2019-12-22,2019-20,1,CHE,Chelsea,0,2,-2,1,61104
TOT,2019-12-26,2019-20,1,BHA,Brighton and Hove Albion,2,1,1,0,56308
TOT,2019-12-28,2019-20,0,NOR,Norwich City,2,2,0,0,27072
TOT,2020-01-01,2019-20,0,SOU,Southampton,0,1,-1,0,30976
TOT,2020-01-11,2019-20,1,LIV,Liverpool,0,1,-1,0,61023
TOT,2020-01-18,2019-20,0,WAT,Watford,0,0,0,0,21366
TOT,2020-01-22,2019-20,1,NOR,Norwich City,2,1,1,0,58182
TOT,2020-02-02,2019-20,1,MCI,Manchester City,2,0,2,0,61022
TOT,2020-02-16,2019-20,0,AVL,Aston Villa,3,2,1,0,41874
TOT,2020-02-22,2019-20,0,CHE,Chelsea,1,2,-1,0,40608
TOT,2020-03-01,2019-20,1,WOL,Wolverhampton Wanderers,2,3,-1,0,58064
TOT,2020-03-07,2019-20,0,BUR,Burnley,1,1,0,0,20496
TOT,2020-06-19,2019-20,1,MUN,Manchester United,1,1,0,0,
TOT,2020-06-23,2019-20,1,WHU,West Ham United,2,0,2,0,
TOT,2020-07-02,2019-20,0,SHU,Sheffield United,1,3,-2,0,
TOT,2020-07-06,2019-20,1,EVE,Everton,1,0,1,0,
TOT,2020-07-09,2019-20,0,BOU,Bournemouth,0,0,0,0,
TOT,2020-07-12,2019-20,1,ARS,Arsenal,2,1,1,0,
TOT,2020-07-15,2019-20,0,NEW,Newcastle United,3,1,2,0,
TOT,2020-07-19,2019-20,1,LEI,Leicester City,3,0,3,0,
TOT,2020-07-26,2019-20,0,CRY,Crystal Palace,1,1,0,0,
TOT,2020-09-13,2020-21,1,EVE,Everton,0,1,-1,0,
TOT,2020-09-20,2020-21,0,SOU,Southampton,5,2,3,0,
TOT,2020-09-27,2020-21,1,NEW,Newcastle United,1,1,0,0,
TOT,2020-10-04,2020-21,0,MUN,Manchester United,6,1,5,0,
TOT,2020-10-18,2020-21,1,WHU,West Ham United,3,3,0,0,
TOT,2020-10-26,2020-21,0,BUR,Burnley,1,0,1,0,
TOT,2020-11-01,2020-21,1,BHA,Brighton and Hove Albion,2,1,1,0,
TOT,2020-11-08,2020-21,0,WBA,West Bromwich Albion,1,0,1,0,
TOT,2020-11-21,2020-21,1,MCI,Manchester City,2,0,2,0,
TOT,2020-11-29,2020-21,0,CHE,Chelsea,0,0,0,0,
TOT,2020-12-06,2020-21,1,ARS,Arsenal,2,0,2,0,
TOT,2020-12-13,2020-21,0,CRY,Crystal Palace,1,1,0,0,
TOT,2020-12-16,2020-21,0,LIV,Liverpool,1,2,-1,0,
TOT,2020-12-20,2020-21,1,LEI,Leicester City,0,2,-2,0,
TOT,2020-12-27,2020-21,0,WOL,Wolverhampton Wanderers,1,1,0,0,
TOT,2021-01-02,2020-21,1,LEE,Leeds United,3,0,3,1,
TOT,2021-01-13,2020-21,1,FUL,Fulham,1,1,0,0,
TOT,2021-01-17,2020-21,0,SHU,Sheffield United,3,1,2,0,
TOT,2021-01-28,2020-21,1,LIV,Liverpool,1,3,-2,0,
TOT,2021-01-31,2020-21,0,BHA,Brighton and Hove Albion,0,1,-1,0,
TOT,2021-02-04,2020-21,1,CHE,Chelsea,0,1,-1,0,
TOT,2021-02-07,2020-21,1,WBA,West Bromwich Albion,2,0,2,0,
TOT,2021-02-13,2020-21,0,MCI,Manchester City,0,3,-3,0,
TOT,2021-02-21,2020-21,0,WHU,West Ham United,1,2,-1,0,
TOT,2021-02-28,2020-21,1,BUR,Burnley,4,0,4,0,
TOT,2021-03-04,2020-21,0,FUL,Fulham,1,0,1,0,
TOT,2021-03-07,2020-21,1,CRY,Crystal Palace,4,1,3,0,
TOT,2021-03-14,2020-21,0,ARS,Arsenal,1,2,-1,1,
TOT,2021-03-21,2020-21,0,AVL,Aston Villa,2,0,2,0,
TOT,2021-04-04,2020-21,0,NEW,Newcastle United,2,2,0,0,
TOT,2021-04-11,2020-21,1,MUN,Manchester United,1,3,-2,0,
TOT,2021-04-16,2020-21,0,EVE,Everton,2,2,0,0,
TOT,2021-04-21,2020-21,1,SOU,Southampton,2,1,1,0,
TOT,2021-05-02,2020-21,1,SHU,Sheffield United,4,0,4,0,
TOT,2021-05-08,2020-21,0,LEE,Leeds United,1,3,-2,0,
TOT,2021-05-16,2020-21,1,WOL,Wolverhampton Wanderers,2,0,2,0,
TOT,2021-05-19,2020-21,1,AVL,Aston Villa,1,2,-1,0,
TOT,2021-05-23,2020-21,0,LEI,Leicester City,4,2,2,0,
TOT,2021-08-15,2021-22,1,MCI,Manchester City,1,0,1,0,58262
TOT,2021-08-22,2021-22,0,WOL,Wolverhampton Wanderers,1,0,1,0,30368
TOT,2021-08-29,2021-22,1,WAT,Watford,1,0,1,0,57672
TOT,2021-09-11,2021-22,0,CRY,Crystal Palace,0,3,-3,1,22740
TOT,2021-09-19,2021-22,1,CHE,Chelsea,0,3,-3,0,60059
TOT,2021-09-26,2021-22,0,ARS,Arsenal,1,3,-2,0,59919
TOT,2021-10-03,2021-22,1,AVL,Aston Villa,2,1,1,0,53076
TOT,2021-10-17,2021-22,0,NEW,Newcastle United,3,2,1,0,52214
TOT,2021-10-24,2021-22,0,WHU,West Ham United,0,1,-1,0,59924
TOT,2021-10-30,2021-22,1,MUN,Manchester United,0,3,-3,0,60356
TOT,2021-11-07,2021-22,0,EVE,Everton,0,0,0,0,39059
TOT,2021-11-21,2021-22,1,LEE,Leeds United,2,1,1,0,58989
TOT,2021-12-02,2021-22,1,BRE,Brentford,2,0,2,0,54202
TOT,2021-12-05,2021-22,1,NOR,Norwich City,3,0,3,0,57088
TOT,2021-12-19,2021-22,1,LIV,Liverpool,2,2,0,0,45421
TOT,2021-12-26,2021-22,1,CRY,Crystal Palace,3,0,3,0,40539
TOT,2021-12-28,2021-22,0,SOU,Southampton,1,1,0,0,31304
TOT,2022-01-01,2021-22,0,WAT,Watford,1,0,1,0,20391
TOT,2022-01-19,2021-22,0,LEI,Leicester City,3,2,1,0,31986
TOT,2022-01-23,2021-22,0,CHE,Chelsea,0,2,-2,0,40020
TOT,2022-02-09,2021-22,1,SOU,Southampton,2,3,-1,0,54012
TOT,2022-02-13,2021-22,1,WOL,Wolverhampton Wanderers,0,2,-2,0,56452
TOT,2022-02-19,2021-22,0,MCI,Manchester City,3,2,1,0,53201
TOT,2022-02-23,2021-22,0,BUR,Burnley,0,1,-1,0,19488
TOT,2022-02-26,2021-22,0,LEE,Leeds United,4,0,4,0,36599
TOT,2022-03-07,2021-22,1,EVE,Everton,5,0,5,0,59647
TOT,2022-03-12,2021-22,0,MUN,Manchester United,2,3,-1,0,73458
TOT,2022-03-16,2021-22,0,BHA,Brighton and Hove Albion,2,0,2,0,31144
TOT,2022-03-20,2021-22,1,WHU,West Ham United,3,1,2,0,58685
TOT,2022-04-03,2021-22,1,NEW,Newcastle United,5,1,4,0,57553
TOT,2022-04-09,2021-22,0,AVL,Aston Villa,4,0,4,0,41949
TOT,2022-04-16,2021-22,1,BHA,Brighton and Hove Albion,0,1,-1,0,58685
TOT,2022-04-23,2021-22,0,BRE,Brentford,0,0,0,0,17072
TOT,2022-05-01,2021-22,1,LEI,Leicester City,3,1,2,0,59482
TOT,2022-05-07,2021-22,0,LIV,Liverpool,1,1,0,0,53177
TOT,2022-05-12,2021-22,1,ARS,Arsenal,3,0,3,0,62027
TOT,2022-05-15,2021-22,1,BUR,Burnley,1,0,1,0,61729
TOT,2022-05-22,2021-22,0,NOR,Norwich City,5,0,5,0,27022
TOT,2022-08-06,2022-23,1,SOU,Southampton,4,1,3,0,61732
TOT,2022-08-14,2022-23,0,CHE,Chelsea,2,2,0,0,39946
TOT,2022-08-20,2022-23,1,WOL,Wolverhampton Wanderers,1,0,1,0,61298
TOT,2022-08-28,2022-23,0,NFO,Nottingham Forest,2,0,2,0,29296
TOT,2022-08-31,2022-23,0,WHU,West Ham United,1,1,0,0,62450
TOT,2022-09-03,2022-23,1,FUL,Fulham,2,1,1,0,61641
TOT,2022-09-17,2022-23,1,LEI,Leicester City,6,2,4,0,61450
TOT,2022-10-01,2022-23,0,ARS,Arsenal,1,3,-2,1,60278
TOT,2022-10-08,2022-23,0,BHA,Brighton and Hove Albion,1,0,1,0,31498
TOT,2022-10-15,2022-23,1,EVE,Everton,2,0,2,0,61812
TOT,2022-10-19,2022-23,0,MUN,Manchester United,0,2,-2,0,73677
TOT,2022-10-23,2022-23,1,NEW,Newcastle United,1,2,-1,0,61726
TOT,2022-10-29,2022-23,0,BOU,Bournemouth,3,2,1,0,10430
TOT,2022-11-06,2022-23,1,LIV,Liverpool,1,2,-1,0,62008
TOT,2022-11-12,2022-23,1,LEE,Leeds United,4,3,1,0,61667
TOT,2022-12-26,2022-23,0,BRE,Brentford,2,2,0,0,17137
TOT,2023-01-01,2022-23,1,AVL,Aston Villa,0,2,-2,0,61651
TOT,2023-01-04,2022-23,0,CRY,Crystal Palace,4,0,4,0,25132
TOT,2023-01-15,2022-23,1,ARS,Arsenal,0,2,-2,0,61870
TOT,2023-01-19,2022-23,0,MCI,Manchester City,2,4,-2,0,53088
TOT,2023-01-23,2022-23,0,FUL,Fulham,1,0,1,0,24190
TOT,2023-02-05,2022-23,1,MCI,Manchester City,1,0,1,1,61747
TOT,2023-02-11,2022-23,0,LEI,Leicester City,1,4,-3,0,32184
TOT,2023-02-19,2022-23,1,WHU,West Ham United,2,0,2,0,61476
TOT,2023-02-26,2022-23,1,CHE,Chelsea,2,0,2,0,61613
TOT,2023-03-04,2022-23,0,WOL,Wolverhampton Wanderers,0,1,-1,0,31585
TOT,2023-03-11,2022-23,1,NFO,Nottingham Forest,3,1,2,0,61460
TOT,2023-03-18,2022-23,0,SOU,Southampton,3,3,0,0,30157
TOT,2023-04-03,2022-23,0,EVE,Everton,1,1,0,1,39294
TOT,2023-04-08,2022-23,1,BHA,Brighton and Hove Albion,2,1,1,0,61405
TOT,2023-04-15,2022-23,1,BOU,Bournemouth,2,3,-1,0,61369
TOT,2023-04-23,2022-23,0,NEW,Newcastle United,1,6,-5,0,52252
TOT,2023-04-27,2022-23,1,MUN,Manchester United,2,2,0,0,61586
TOT,2023-04-30,2022-23,0,LIV,Liverpool,3,4,-1,0,53275
TOT,2023-05-06,2022-23,1,CRY,Crystal Palace,1,0,1,0,61093
TOT,2023-05-13,2022-23,0,AVL,Aston Villa,1,2,-1,0,42164
TOT,2023-05-20,2022-23,1,BRE,Brentford,1,3,-2,0,61514
TOT,2023-05-28,2022-23,0,LEE,Leeds United,4,1,3,0,36871
TOT,2023-08-13,2023-24,0,BRE,Brentford,2,2,0,0,17066
TOT,2023-08-19,2023-24,1,MUN,Manchester United,2,0,2,0,61910
TOT,2023-08-26,2023-24,0,BOU,Bournemouth,2,0,2,0,10567
TOT,2023-09-02,2023-24,0,BUR,Burnley,5,2,3,0,21750
TOT,2023-09-16,2023-24,1,SHU,Sheffield United,2,1,1,0,61706
TOT,2023-09-24,2023-24,0,ARS,Arsenal,2,2,0,0,60156
TOT,2023-09-30,2023-24,1,LIV,Liverpool,2,1,1,0,62001
TOT,2023-10-07,2023-24,0,LUT,Luton Town,1,0,1,1,10929
TOT,2023-10-23,2023-24,1,FUL,Fulham,2,0,2,0,61286
TOT,2023-10-27,2023-24,0,CRY,Crystal Palace,2,1,1,0,25074
TOT,2023-11-06,2023-24,1,CHE,Chelsea,1,4,-3,2,61726
TOT,2023-11-11,2023-24,0,WOL,Wolverhampton Wanderers,1,2,-1,0,31642
TOT,2023-11-26,2023-24,1,AVL,Aston Villa,1,2,-1,0,61679
TOT,2023-12-03,2023-24,0,MCI,Manchester City,3,3,0,0,53473
TOT,2023-12-07,2023-24,1,WHU,West Ham United,1,2,-1,0,60733
TOT,2023-12-10,2023-24,1,NEW,Newcastle United,4,1,3,0,61171
TOT,2023-12-15,2023-24,0,NFO,Nottingham Forest,2,0,2,1,29296
TOT,2023-12-23,2023-24,1,EVE,Everton,2,1,1,0,61808
TOT,2023-12-28,2023-24,0,BHA,Brighton and Hove Albion,2,4,-2,0,31675
TOT,2023-12-31,2023-24,1,BOU,Bournemouth,3,1,2,0,61780
TOT,2024-01-14,2023-24,0,MUN,Manchester United,2,2,0,0,73489
TOT,2024-01-31,2023-24,1,BRE,Brentford,3,2,1,0,61210
TOT,2024-02-03,2023-24,0,EVE,Everton,2,2,0,0,39321
TOT,2024-02-10,2023-24,1,BHA,Brighton and Hove Albion,2,1,1,0,61445
TOT,2024-02-17,2023-24,1,WOL,Wolverhampton Wanderers,1,2,-1,0,61532
TOT,2024-03-02,2023-24,1,CRY,Crystal Palace,3,1,2,0,61339
TOT,2024-03-10,2023-24,0,AVL,Aston Villa,4,0,4,0,42310
TOT,2024-03-16,2023-24,0,FUL,Fulham,0,3,-3,0,24410
TOT,2024-03-30,2023-24,1,LUT,Luton Town,2,1,1,0,61534
TOT,2024-04-02,2023-24,0,WHU,West Ham United,1,1,0,0,62469
TOT,2024-04-07,2023-24,1,NFO,Nottingham Forest,3,1,2,0,61098
TOT,2024-04-13,2023-24,0,NEW,Newcastle United,0,4,-4,0,52206
TOT,2024-04-28,2023-24,1,ARS,Arsenal,2,3,-1,0,61554
TOT,2024-05-02,2023-24,0,CHE,Chelsea,0,2,-2,0,39086
TOT,2024-05-05,2023-24,0,LIV,Liverpool,2,4,-2,0,60075
TOT,2024-05-11,2023-24,1,BUR,Burnley,2,1,1,0,61148
TOT,2024-05-14,2023-24,1,MCI,Manchester City,0,2,-2,0,61065
TOT,2024-05-19,2023-24,0,SHU,Sheffield United,3,0,3,0,29116
TOT,2024-08-19,2024-25,0,LEI,Leicester City,1,1,0,0,31977
TOT,2024-08-24,2024-25,1,EVE,Everton,4,0,4,0,61357
TOT,2024-09-01,2024-25,0,NEW,Newcastle United,1,2,-1,0,52211
TOT,2024-09-15,2024-25,1,ARS,Arsenal,0,1,-1,0,61645
TOT,2024-09-21,2024-25,1,BRE,Brentford,3,1,2,0,61246
TOT,2024-09-29,2024-25,0,MUN,Manchester United,3,0,3,0,73587
TOT,2024-10-06,2024-25,0,BHA,Brighton and Hove Albion,2,3,-1,0,31487
TOT,2024-10-19,2024-25,1,WHU,West Ham United,4,1,3,0,61381
TOT,2024-10-27,2024-25,0,CRY,Crystal Palace,0,1,-1,0,25180
TOT,2024-11-03,2024-25,1,AVL,Aston Villa,4,1,3,0,61253
TOT,2024-11-10,2024-25,1,IPS,Ipswich Town,1,2,-1,0,61505
TOT,2024-11-23,2024-25,0,MCI,Manchester City,4,0,4,0,52478
TOT,2024-12-01,2024-25,1,FUL,Fulham,1,1,0,0,61141
TOT,2024-12-05,2024-25,0,BOU,Bournemouth,0,1,-1,0,11234
TOT,2024-12-08,2024-25,1,CHE,Chelsea,3,4,-1,0,61184
TOT,2024-12-15,2024-25,0,SOU,Southampton,5,0,5,0,31090
TOT,2024-12-22,2024-25,1,LIV,Liverpool,3,6,-3,0,61439
TOT,2024-12-26,2024-25,0,NFO,Nottingham Forest,0,1,-1,1,30200
TOT,2024-12-29,2024-25,1,WOL,Wolverhampton Wanderers,2,2,0,0,61284
TOT,2025-01-04,2024-25,1,NEW,Newcastle United,1,2,-1,0,61293
TOT,2025-01-15,2024-25,0,ARS,Arsenal,1,2,-1,0,60287
TOT,2025-01-19,2024-25,0,EVE,Everton,2,3,-1,0,39326
TOT,2025-01-26,2024-25,1,LEI,Leicester City,1,2,-1,0,61295
TOT,2025-02-02,2024-25,0,BRE,Brentford,2,0,2,0,17154
TOT,2025-02-16,2024-25,1,MUN,Manchester United,1,0,1,0,61383
TOT,2025-02-22,2024-25,0,IPS,Ipswich Town,4,1,3,0,30003
TOT,2025-02-26,2024-25,1,MCI,Manchester City,0,1,-1,0,60820
TOT,2025-03-09,2024-25,1,BOU,Bournemouth,2,2,0,0,61178
TOT,2025-03-16,2024-25,0,FUL,Fulham,0,2,-2,0,27182
TOT,2025-04-03,2024-25,0,CHE,Chelsea,0,1,-1,0,39852
TOT,2025-04-06,2024-25,1,SOU,Southampton,3,1,2,0,60984
TOT,2025-04-13,2024-25,0,WOL,Wolverhampton Wanderers,2,4,-2,0,31463
TOT,2025-04-21,2024-25,1,NFO,Nottingham Forest,1,2,-1,0,59314
TOT,2025-04-27,2024-25,0,LIV,Liverpool,1,5,-4,0,60415
TOT,2025-05-04,2024-25,0,WHU,West Ham United,1,1,0,0,62468
TOT,2025-05-11,2024-25,1,CRY,Crystal Palace,0,2,-2,0,60254
TOT,2025-05-16,2024-25,0,AVL,Aston Villa,0,2,-2,0,42239
TOT,2025-05-25,2024-25,1,BHA,Brighton and Hove Albion,1,4,-3,0,61449
TOT,2025-08-16,2025-26,1,BUR,Burnley,3,0,3,0,61077
TOT,2025-08-23,2025-26,0,MCI,Manchester City,2,0,2,0,52491
TOT,2025-08-30,2025-26,1,BOU,Bournemouth,0,1,-1,0,61250
TOT,2025-09-13,2025-26,0,WHU,West Ham United,3,0,3,0,62459
TOT,2025-09-20,2025-26,0,BHA,Brighton and Hove Albion,2,2,0,0,31488
TOT,2025-09-27,2025-26,1,WOL,Wolverhampton Wanderers,1,1,0,0,60537
TOT,2025-10-04,2025-26,0,LEE,Leeds United,2,1,1,0,36703
TOT,2025-10-19,2025-26,1,AVL,Aston Villa,1,2,-1,0,61291
TOT,2025-10-26,2025-26,0,EVE,Everton,3,0,3,0,52501
TOT,2025-11-01,2025-26,1,CHE,Chelsea,0,1,-1,0,61202
TOT,2025-11-08,2025-26,1,MUN,Manchester United,2,2,0,0,61210
TOT,2025-11-23,2025-26,0,ARS,Arsenal,1,4,-3,0,60345
TOT,2025-11-29,2025-26,1,FUL,Fulham,1,2,-1,0,60546
TOT,2025-12-02,2025-26,0,NEW,Newcastle United,2,2,0,0,52007
TOT,2025-12-06,2025-26,1,BRE,Brentford,2,0,2,0,60759
TOT,2025-12-14,2025-26,0,NFO,Nottingham Forest,0,3,-3,0,30579
TOT,2025-12-20,2025-26,1,LIV,Liverpool,1,2,-1,2,61138
TOT,2025-12-28,2025-26,0,CRY,Crystal Palace,1,0,1,0,25186
TOT,2026-01-01,2025-26,0,BRE,Brentford,0,0,0,0,17141
TOT,2026-01-04,2025-26,1,SUN,Sunderland,1,1,0,0,60877
TOT,2026-01-07,2025-26,0,BOU,Bournemouth,2,3,-1,0,11212
TOT,2026-01-17,2025-26,1,WHU,West Ham United,1,2,-1,0,60857
TOT,2026-01-24,2025-26,0,BUR,Burnley,2,2,0,0,21618
TOT,2026-02-01,2025-26,1,MCI,Manchester City,2,2,0,0,61337
TOT,2026-02-07,2025-26,0,MUN,Manchester United,0,2,-2,1,73985
TOT,2026-02-10,2025-26,1,NEW,Newcastle United,1,2,-1,0,59773
TOT,2026-02-22,2025-26,1,ARS,Arsenal,1,4,-3,0,61439
TOT,2026-03-01,2025-26,0,FUL,Fulham,1,2,-1,0,27439
TOT,2026-03-05,2025-26,1,CRY,Crystal Palace,1,3,-2,1,60213
TOT,2026-03-15,2025-26,0,LIV,Liverpool,1,1,0,0,60386
TOT,2026-03-22,2025-26,1,NFO,Nottingham Forest,0,3,-3,0,61519
TOT,2026-04-12,2025-26,0,SUN,Sunderland,0,1,-1,0,47010
TOT,2026-04-18,2025-26,1,BHA,Brighton and Hove Albion,2,2,0,0,61167
TOT,2026-04-25,2025-26,0,WOL,Wolverhampton Wanderers,1,0,1,0,31253
TOT,2026-05-03,2025-26,0,AVL,Aston Villa,2,1,1,0,42767
TOT,2026-05-11,2025-26,1,LEE,Leeds United,1,1,0,0,61048
TOT,2026-05-19,2025-26,0,CHE,Chelsea,1,2,-1,0,39463
TOT,2026-05-24,2025-26,1,EVE,Everton,1,0,1,0,61876
WHU,1993-08-14,1993-94,1,WIM,Wimbledon,0,2,-2,0,20363
WHU,1993-08-17,1993-94,0,LEE,Leeds United,0,1,-1,0,34588
WHU,1993-08-21,1993-94,0,COV,Coventry City,1,1,0,0,12909
WHU,1993-08-25,1993-94,1,SHW,Sheffield Wednesday,2,0,2,0,19441
WHU,1993-08-28,1993-94,1,QPR,Queens Park Rangers,0,4,-4,0,18084
WHU,1993-09-01,1993-94,0,MUN,Manchester United,0,3,-3,0,44613
WHU,1993-09-11,1993-94,1,SWI,Swindon Town,0,0,0,0,15777
WHU,1993-09-18,1993-94,0,BLA,Blackburn Rovers,2,0,2,0,13943
WHU,1993-09-25,1993-94,0,NEW,Newcastle United,0,2,-2,0,34336
WHU,1993-10-02,1993-94,1,CHE,Chelsea,1,0,1,0,18917
WHU,1993-10-16,1993-94,1,AVL,Aston Villa,0,0,0,0,20425
WHU,1993-10-23,1993-94,0,NOR,Norwich City,0,0,0,0,20211
WHU,1993-11-01,1993-94,1,MCI,Manchester City,3,1,2,0,16685
WHU,1993-11-06,1993-94,0,LIV,Liverpool,0,2,-2,0,42254
WHU,1993-11-20,1993-94,1,OLD,Oldham Athletic,2,0,2,0,17251
WHU,1993-11-24,1993-94,1,ARS,Arsenal,0,0,0,0,20279
WHU,1993-11-29,1993-94,0,SOU,Southampton,2,0,2,0,13258
WHU,1993-12-04,1993-94,0,WIM,Wimbledon,2,1,1,0,10903
WHU,1993-12-08,1993-94,1,LEE,Leeds United,0,1,-1,0,20468
WHU,1993-12-11,1993-94,1,COV,Coventry City,3,2,1,0,17243
WHU,1993-12-18,1993-94,0,SHW,Sheffield Wednesday,0,5,-5,0,26350
WHU,1993-12-27,1993-94,0,IPS,Ipswich Town,1,1,0,0,21024
WHU,1993-12-28,1993-94,1,TOT,Tottenham Hotspur,1,3,-2,0,20787
WHU,1994-01-01,1993-94,0,EVE,Everton,1,0,1,0,19579
WHU,1994-01-03,1993-94,1,SHU,Sheffield United,0,0,0,0,20365
WHU,1994-01-15,1993-94,0,AVL,Aston Villa,1,3,-2,0,28869
WHU,1994-01-24,1993-94,1,NOR,Norwich City,3,3,0,0,20735
WHU,1994-02-12,1993-94,0,MCI,Manchester City,0,0,0,0,29118
WHU,1994-02-26,1993-94,1,MUN,Manchester United,2,2,0,0,28832
WHU,1994-03-05,1993-94,0,SWI,Swindon Town,1,1,0,0,14924
WHU,1994-03-19,1993-94,1,NEW,Newcastle United,2,4,-2,0,23132
WHU,1994-03-26,1993-94,0,CHE,Chelsea,0,2,-2,0,19545
WHU,1994-03-28,1993-94,0,SHU,Sheffield United,2,3,-1,0,13646
WHU,1994-04-02,1993-94,1,IPS,Ipswich Town,2,1,1,0,18307
WHU,1994-04-04,1993-94,0,TOT,Tottenham Hotspur,4,1,3,0,31502
WHU,1994-04-09,1993-94,1,EVE,Everton,0,1,-1,0,20243
WHU,1994-04-16,1993-94,0,OLD,Oldham Athletic,2,1,1,0,11689
WHU,1994-04-23,1993-94,1,LIV,Liverpool,1,2,-1,0,26096
WHU,1994-04-27,1993-94,1,BLA,Blackburn Rovers,1,2,-1,0,22186
WHU,1994-04-30,1993-94,0,ARS,Arsenal,2,0,2,0,33701
WHU,1994-05-03,1993-94,0,QPR,Queens Park Rangers,0,0,0,0,10850
WHU,1994-05-07,1993-94,1,SOU,Southampton,3,3,0,0,26952
WHU,1994-08-20,1994-95,1,LEE,Leeds United,0,0,0,0,18610
WHU,1994-08-24,1994-95,0,MCI,Manchester City,0,3,-3,0,19150
WHU,1994-08-27,1994-95,0,NOR,Norwich City,0,1,-1,0,19110
WHU,1994-08-31,1994-95,1,NEW,Newcastle United,1,3,-2,0,18580
WHU,1994-09-10,1994-95,0,LIV,Liverpool,0,0,0,0,43740
WHU,1994-09-17,1994-95,1,AVL,Aston Villa,1,0,1,0,18326
WHU,1994-09-25,1994-95,1,ARS,Arsenal,0,2,-2,0,18498
WHU,1994-10-02,1994-95,0,CHE,Chelsea,2,1,1,0,18696
WHU,1994-10-08,1994-95,1,CRY,Crystal Palace,1,0,1,0,16959
WHU,1994-10-15,1994-95,0,MUN,Manchester United,0,1,-1,0,43795
WHU,1994-10-22,1994-95,1,SOU,Southampton,2,0,2,0,18853
WHU,1994-10-29,1994-95,0,TOT,Tottenham Hotspur,1,3,-2,0,26271
WHU,1994-11-01,1994-95,0,EVE,Everton,0,1,-1,0,28338
WHU,1994-11-05,1994-95,1,LEI,Leicester City,1,0,1,0,19006
WHU,1994-11-19,1994-95,0,SHW,Sheffield Wednesday,0,1,-1,0,25300
WHU,1994-11-26,1994-95,1,COV,Coventry City,0,1,-1,0,17251
WHU,1994-12-04,1994-95,0,QPR,Queens Park Rangers,1,2,-1,0,12780
WHU,1994-12-10,1994-95,0,LEE,Leeds United,2,2,0,0,28987
WHU,1994-12-17,1994-95,1,MCI,Manchester City,3,0,3,0,17286
WHU,1994-12-26,1994-95,1,IPS,Ipswich Town,1,1,0,0,20562
WHU,1994-12-28,1994-95,0,WIM,Wimbledon,0,1,-1,0,11212
WHU,1994-12-31,1994-95,1,NFO,Nottingham Forest,3,1,2,0,20644
WHU,1995-01-02,1994-95,0,BLA,Blackburn Rovers,2,4,-2,0,25503
WHU,1995-01-14,1994-95,1,TOT,Tottenham Hotspur,1,2,-1,0,24573
WHU,1995-01-23,1994-95,1,SHW,Sheffield Wednesday,0,2,-2,0,14554
WHU,1995-02-04,1994-95,0,LEI,Leicester City,2,1,1,0,31373
WHU,1995-02-13,1994-95,1,EVE,Everton,2,2,0,0,21081
WHU,1995-02-18,1994-95,0,COV,Coventry City,0,2,-2,0,17556
WHU,1995-02-25,1994-95,1,CHE,Chelsea,1,2,-1,0,21500
WHU,1995-03-05,1994-95,0,ARS,Arsenal,1,0,1,0,36295
WHU,1995-03-08,1994-95,0,NEW,Newcastle United,0,2,-2,0,34595
WHU,1995-03-11,1994-95,1,NOR,Norwich City,2,2,0,0,21464
WHU,1995-03-15,1994-95,0,SOU,Southampton,1,1,0,0,15178
WHU,1995-03-18,1994-95,0,AVL,Aston Villa,2,0,2,0,28682
WHU,1995-04-08,1994-95,0,NFO,Nottingham Forest,1,1,0,0,28361
WHU,1995-04-13,1994-95,1,WIM,Wimbledon,3,0,3,0,21804
WHU,1995-04-17,1994-95,0,IPS,Ipswich Town,1,1,0,0,19099
WHU,1995-04-30,1994-95,1,BLA,Blackburn Rovers,2,0,2,0,24202
WHU,1995-05-03,1994-95,1,QPR,Queens Park Rangers,0,0,0,0,22923
WHU,1995-05-06,1994-95,0,CRY,Crystal Palace,0,1,-1,0,18224
WHU,1995-05-10,1994-95,1,LIV,Liverpool,3,0,3,0,27055
WHU,1995-05-14,1994-95,1,MUN,Manchester United,1,1,0,0,24785
WHU,1995-08-19,1995-96,1,LEE,Leeds United,1,2,-1,0,22901
WHU,1995-08-23,1995-96,0,MUN,Manchester United,1,2,-1,0,31966
WHU,1995-08-26,1995-96,0,NFO,Nottingham Forest,1,1,0,0,26645
WHU,1995-08-30,1995-96,1,TOT,Tottenham Hotspur,1,1,0,0,23516
WHU,1995-09-11,1995-96,1,CHE,Chelsea,1,3,-2,0,19228
WHU,1995-09-16,1995-96,0,ARS,Arsenal,0,1,-1,0,38065
WHU,1995-09-23,1995-96,1,EVE,Everton,2,1,1,0,21085
WHU,1995-10-02,1995-96,0,SOU,Southampton,0,0,0,0,13568
WHU,1995-10-16,1995-96,0,WIM,Wimbledon,1,0,1,0,9411
WHU,1995-10-21,1995-96,1,BLA,Blackburn Rovers,1,1,0,0,21776
WHU,1995-10-28,1995-96,0,SHW,Sheffield Wednesday,1,0,1,0,23917
WHU,1995-11-04,1995-96,1,AVL,Aston Villa,1,4,-3,0,23637
WHU,1995-11-18,1995-96,0,BOL,Bolton Wanderers,3,0,3,0,19047
WHU,1995-11-22,1995-96,1,LIV,Liverpool,0,0,0,0,24324
WHU,1995-11-25,1995-96,1,QPR,Queens Park Rangers,1,0,1,0,21504
WHU,1995-12-02,1995-96,0,BLA,Blackburn Rovers,2,4,-2,0,26638
WHU,1995-12-11,1995-96,0,EVE,Everton,0,3,-3,0,31778
WHU,1995-12-16,1995-96,1,SOU,Southampton,2,1,1,0,18501
WHU,1995-12-23,1995-96,0,MID,Middlesbrough,2,4,-2,0,28640
WHU,1996-01-01,1995-96,0,MCI,Manchester City,1,2,-1,0,26024
WHU,1996-01-13,1995-96,0,LEE,Leeds United,0,2,-2,0,30658
WHU,1996-01-22,1995-96,1,MUN,Manchester United,0,1,-1,0,24197
WHU,1996-01-31,1995-96,1,COV,Coventry City,3,2,1,0,18884
WHU,1996-02-03,1995-96,1,NFO,Nottingham Forest,1,0,1,0,21257
WHU,1996-02-12,1995-96,0,TOT,Tottenham Hotspur,1,0,1,0,29781
WHU,1996-02-17,1995-96,0,CHE,Chelsea,2,1,1,0,25252
WHU,1996-02-21,1995-96,1,NEW,Newcastle United,2,0,2,0,23843
WHU,1996-02-24,1995-96,1,ARS,Arsenal,0,1,-1,0,24217
WHU,1996-03-02,1995-96,0,COV,Coventry City,2,2,0,0,17459
WHU,1996-03-09,1995-96,1,MID,Middlesbrough,2,0,2,0,23850
WHU,1996-03-18,1995-96,0,NEW,Newcastle United,0,3,-3,0,36331
WHU,1996-03-23,1995-96,1,MCI,Manchester City,4,2,2,0,24017
WHU,1996-04-06,1995-96,1,WIM,Wimbledon,1,1,0,0,20402
WHU,1996-04-08,1995-96,0,LIV,Liverpool,0,2,-2,0,40326
WHU,1996-04-13,1995-96,1,BOL,Bolton Wanderers,1,0,1,0,23086
WHU,1996-04-17,1995-96,0,AVL,Aston Villa,1,1,0,0,26768
WHU,1996-04-27,1995-96,0,QPR,Queens Park Rangers,0,3,-3,0,18828
WHU,1996-05-05,1995-96,1,SHW,Sheffield Wednesday,1,1,0,0,23790
WHU,1996-08-17,1996-97,0,ARS,Arsenal,0,2,-2,0,38056
WHU,1996-08-21,1996-97,1,COV,Coventry City,1,1,0,0,21580
WHU,1996-08-24,1996-97,1,SOU,Southampton,2,1,1,0,21227
WHU,1996-09-04,1996-97,0,MID,Middlesbrough,1,4,-3,0,30060
WHU,1996-09-08,1996-97,0,SUN,Sunderland,0,0,0,0,18642
WHU,1996-09-14,1996-97,1,WIM,Wimbledon,0,2,-2,0,21294
WHU,1996-09-21,1996-97,0,NFO,Nottingham Forest,2,0,2,0,23352
WHU,1996-09-29,1996-97,1,LIV,Liverpool,1,2,-1,0,25064
WHU,1996-10-12,1996-97,0,EVE,Everton,1,2,-1,0,36571
WHU,1996-10-19,1996-97,1,LEI,Leicester City,1,0,1,0,22285
WHU,1996-10-26,1996-97,1,BLA,Blackburn Rovers,2,1,1,0,23947
WHU,1996-11-02,1996-97,0,TOT,Tottenham Hotspur,0,1,-1,0,32999
WHU,1996-11-16,1996-97,0,NEW,Newcastle United,1,1,0,0,36552
WHU,1996-11-23,1996-97,1,DER,Derby County,1,1,0,0,24576
WHU,1996-11-30,1996-97,0,SHW,Sheffield Wednesday,0,0,0,0,22321
WHU,1996-12-04,1996-97,1,AVL,Aston Villa,0,2,-2,0,19105
WHU,1996-12-08,1996-97,1,MUN,Manchester United,2,2,0,0,25045
WHU,1996-12-21,1996-97,0,CHE,Chelsea,1,3,-2,0,28315
WHU,1996-12-28,1996-97,1,SUN,Sunderland,2,0,2,0,24077
WHU,1997-01-01,1996-97,1,NFO,Nottingham Forest,0,1,-1,0,22358
WHU,1997-01-11,1996-97,0,LIV,Liverpool,0,0,0,0,40102
WHU,1997-01-20,1996-97,1,LEE,Leeds United,0,2,-2,0,19441
WHU,1997-01-29,1996-97,1,ARS,Arsenal,1,2,-1,0,24382
WHU,1997-02-01,1996-97,0,BLA,Blackburn Rovers,1,2,-1,0,21994
WHU,1997-02-15,1996-97,0,DER,Derby County,0,1,-1,0,18057
WHU,1997-02-24,1996-97,1,TOT,Tottenham Hotspur,4,3,1,0,23998
WHU,1997-03-01,1996-97,0,LEE,Leeds United,0,1,-1,0,30575
WHU,1997-03-12,1996-97,1,CHE,Chelsea,3,2,1,0,24502
WHU,1997-03-15,1996-97,0,AVL,Aston Villa,0,0,0,0,35992
WHU,1997-03-18,1996-97,0,WIM,Wimbledon,1,1,0,0,15771
WHU,1997-03-22,1996-97,0,COV,Coventry City,3,1,2,0,22291
WHU,1997-04-09,1996-97,1,MID,Middlesbrough,0,0,0,0,23988
WHU,1997-04-12,1996-97,0,SOU,Southampton,0,2,-2,0,15244
WHU,1997-04-19,1996-97,1,EVE,Everton,2,2,0,0,24525
WHU,1997-04-23,1996-97,0,LEI,Leicester City,1,0,1,0,20327
WHU,1997-05-03,1996-97,1,SHW,Sheffield Wednesday,5,1,4,0,24960
WHU,1997-05-06,1996-97,1,NEW,Newcastle United,0,0,0,0,24617
WHU,1997-05-11,1996-97,0,MUN,Manchester United,0,2,-2,0,55249
WHU,1997-08-09,1997-98,0,BAR,Barnsley,2,1,1,0,18667
WHU,1997-08-13,1997-98,1,TOT,Tottenham Hotspur,2,1,1,0,25354
WHU,1997-08-23,1997-98,0,EVE,Everton,1,2,-1,0,34356
WHU,1997-08-27,1997-98,0,COV,Coventry City,1,1,0,0,18289
WHU,1997-08-30,1997-98,1,WIM,Wimbledon,3,1,2,0,24516
WHU,1997-09-13,1997-98,0,MUN,Manchester United,1,2,-1,0,55068
WHU,1997-09-20,1997-98,1,NEW,Newcastle United,0,1,-1,0,25884
WHU,1997-09-24,1997-98,0,ARS,Arsenal,0,4,-4,0,38012
WHU,1997-09-27,1997-98,1,LIV,Liverpool,2,1,1,0,25908
WHU,1997-10-04,1997-98,0,SOU,Southampton,0,3,-3,0,15212
WHU,1997-10-18,1997-98,1,BOL,Bolton Wanderers,3,0,3,0,24864
WHU,1997-10-27,1997-98,0,LEI,Leicester City,1,2,-1,0,20201
WHU,1997-11-09,1997-98,0,CHE,Chelsea,1,2,-1,0,34382
WHU,1997-11-23,1997-98,0,LEE,Leeds United,1,3,-2,0,30031
WHU,1997-11-29,1997-98,1,AVL,Aston Villa,2,1,1,0,24976
WHU,1997-12-03,1997-98,1,CRY,Crystal Palace,4,1,3,0,23335
WHU,1997-12-06,1997-98,0,DER,Derby County,0,2,-2,0,29300
WHU,1997-12-13,1997-98,1,SHW,Sheffield Wednesday,1,0,1,0,24344
WHU,1997-12-20,1997-98,0,BLA,Blackburn Rovers,0,3,-3,0,21653
WHU,1997-12-26,1997-98,1,COV,Coventry City,1,0,1,0,24532
WHU,1997-12-28,1997-98,0,WIM,Wimbledon,2,1,1,0,22087
WHU,1998-01-10,1997-98,1,BAR,Barnsley,6,0,6,0,23714
WHU,1998-01-17,1997-98,0,TOT,Tottenham Hotspur,0,1,-1,0,30284
WHU,1998-01-31,1997-98,1,EVE,Everton,2,2,0,0,25909
WHU,1998-02-07,1997-98,0,NEW,Newcastle United,1,0,1,0,36736
WHU,1998-02-21,1997-98,0,BOL,Bolton Wanderers,1,1,0,0,25000
WHU,1998-03-02,1997-98,1,ARS,Arsenal,0,0,0,0,25717
WHU,1998-03-11,1997-98,1,MUN,Manchester United,1,1,0,0,25892
WHU,1998-03-14,1997-98,1,CHE,Chelsea,2,1,1,0,25829
WHU,1998-03-30,1997-98,1,LEE,Leeds United,3,0,3,0,24107
WHU,1998-04-04,1997-98,0,AVL,Aston Villa,0,2,-2,0,39372
WHU,1998-04-11,1997-98,1,DER,Derby County,0,0,0,0,25155
WHU,1998-04-13,1997-98,0,SHW,Sheffield Wednesday,1,1,0,0,28036
WHU,1998-04-18,1997-98,1,BLA,Blackburn Rovers,2,1,1,0,24733
WHU,1998-04-25,1997-98,1,SOU,Southampton,2,4,-2,0,25878
WHU,1998-05-02,1997-98,0,LIV,Liverpool,0,5,-5,0,44414
WHU,1998-05-05,1997-98,0,CRY,Crystal Palace,3,3,0,0,19129
WHU,1998-05-10,1997-98,1,LEI,Leicester City,4,3,1,0,25781
WHU,1998-08-15,1998-99,0,SHW,Sheffield Wednesday,1,0,1,0,30236
WHU,1998-08-22,1998-99,1,MUN,Manchester United,0,0,0,0,25912
WHU,1998-08-29,1998-99,0,COV,Coventry City,0,0,0,0,20818
WHU,1998-09-09,1998-99,1,WIM,Wimbledon,3,4,-1,0,24601
WHU,1998-09-12,1998-99,1,LIV,Liverpool,2,1,1,0,26010
WHU,1998-09-19,1998-99,0,NFO,Nottingham Forest,0,0,0,0,26463
WHU,1998-09-28,1998-99,1,SOU,Southampton,1,0,1,0,23153
WHU,1998-10-03,1998-99,0,BLA,Blackburn Rovers,0,3,-3,0,25213
WHU,1998-10-17,1998-99,1,AVL,Aston Villa,0,0,0,0,26002
WHU,1998-10-24,1998-99,0,CHA,Charlton Athletic,2,4,-2,0,20043
WHU,1998-10-31,1998-99,0,NEW,Newcastle United,3,0,3,0,36744
WHU,1998-11-08,1998-99,1,CHE,Chelsea,1,1,0,0,26023
WHU,1998-11-14,1998-99,1,LEI,Leicester City,3,2,1,0,25642
WHU,1998-11-22,1998-99,0,DER,Derby County,2,0,2,0,31366
WHU,1998-11-28,1998-99,1,TOT,Tottenham Hotspur,2,1,1,0,26044
WHU,1998-12-05,1998-99,0,LEE,Leeds United,0,4,-4,0,36320
WHU,1998-12-12,1998-99,0,MID,Middlesbrough,0,1,-1,0,34623
WHU,1998-12-19,1998-99,1,EVE,Everton,2,1,1,0,25998
WHU,1998-12-26,1998-99,0,ARS,Arsenal,0,1,-1,0,38098
WHU,1998-12-28,1998-99,1,COV,Coventry City,2,0,2,0,25662
WHU,1999-01-10,1998-99,0,MUN,Manchester United,1,4,-3,0,55180
WHU,1999-01-16,1998-99,1,SHW,Sheffield Wednesday,0,4,-4,0,25642
WHU,1999-01-30,1998-99,0,WIM,Wimbledon,0,0,0,0,23035
WHU,1999-02-06,1998-99,1,ARS,Arsenal,0,4,-4,0,26042
WHU,1999-02-13,1998-99,1,NFO,Nottingham Forest,2,1,1,0,25458
WHU,1999-02-20,1998-99,0,LIV,Liverpool,2,2,0,0,44511
WHU,1999-02-27,1998-99,1,BLA,Blackburn Rovers,2,0,2,0,25529
WHU,1999-03-06,1998-99,0,SOU,Southampton,0,1,-1,0,15240
WHU,1999-03-13,1998-99,0,CHE,Chelsea,1,0,1,0,34765
WHU,1999-03-20,1998-99,1,NEW,Newcastle United,2,0,2,0,25997
WHU,1999-04-02,1998-99,0,AVL,Aston Villa,0,0,0,0,36813
WHU,1999-04-05,1998-99,1,CHA,Charlton Athletic,0,1,-1,0,26041
WHU,1999-04-10,1998-99,0,LEI,Leicester City,0,0,0,0,20402
WHU,1999-04-17,1998-99,1,DER,Derby County,5,1,4,0,25485
WHU,1999-04-24,1998-99,0,TOT,Tottenham Hotspur,2,1,1,0,36089
WHU,1999-05-01,1998-99,1,LEE,Leeds United,1,5,-4,0,25997
WHU,1999-05-08,1998-99,0,EVE,Everton,0,6,-6,0,40029
WHU,1999-05-16,1998-99,1,MID,Middlesbrough,4,0,4,0,25902
WHU,1999-08-07,1999-00,1,TOT,Tottenham Hotspur,1,0,1,0,26010
WHU,1999-08-16,1999-00,0,AVL,Aston Villa,2,2,0,0,26250
WHU,1999-08-21,1999-00,1,LEI,Leicester City,2,1,1,0,23361
WHU,1999-08-28,1999-00,0,BRA,Bradford City,3,0,3,0,17926
WHU,1999-09-11,1999-00,1,WAT,Watford,1,0,1,0,25310
WHU,1999-09-19,1999-00,0,EVE,Everton,0,1,-1,0,32597
WHU,1999-09-25,1999-00,0,COV,Coventry City,0,1,-1,0,19993
WHU,1999-10-03,1999-00,1,ARS,Arsenal,2,1,1,0,26009
WHU,1999-10-17,1999-00,0,MID,Middlesbrough,0,2,-2,0,31862
WHU,1999-10-24,1999-00,1,SUN,Sunderland,1,1,0,0,26022
WHU,1999-10-27,1999-00,0,LIV,Liverpool,0,1,-1,0,44012
WHU,1999-10-30,1999-00,0,LEE,Leeds United,0,1,-1,0,40190
WHU,1999-11-07,1999-00,0,CHE,Chelsea,0,0,0,0,34935
WHU,1999-11-21,1999-00,1,SHW,Sheffield Wednesday,4,3,1,0,23015
WHU,1999-11-27,1999-00,1,LIV,Liverpool,1,0,1,0,26043
WHU,1999-12-06,1999-00,0,TOT,Tottenham Hotspur,0,0,0,0,36233
WHU,1999-12-18,1999-00,1,MUN,Manchester United,2,4,-2,0,26037
WHU,1999-12-26,1999-00,0,WIM,Wimbledon,2,2,0,0,21180
WHU,1999-12-28,1999-00,1,DER,Derby County,1,1,0,0,24998
WHU,2000-01-03,1999-00,0,NEW,Newcastle United,2,2,0,0,36314
WHU,2000-01-15,1999-00,1,AVL,Aston Villa,1,1,0,0,24237
WHU,2000-01-22,1999-00,0,LEI,Leicester City,3,1,2,0,19019
WHU,2000-02-05,1999-00,0,SOU,Southampton,1,2,-1,0,15257
WHU,2000-02-12,1999-00,1,BRA,Bradford City,5,4,1,0,25417
WHU,2000-02-26,1999-00,1,EVE,Everton,0,4,-4,0,34224
WHU,2000-03-04,1999-00,0,WAT,Watford,2,1,1,0,18619
WHU,2000-03-08,1999-00,1,SOU,Southampton,2,0,2,0,23484
WHU,2000-03-11,1999-00,0,SHW,Sheffield Wednesday,1,3,-2,0,21147
WHU,2000-03-18,1999-00,1,CHE,Chelsea,0,0,0,0,26041
WHU,2000-03-26,1999-00,1,WIM,Wimbledon,2,1,1,0,22438
WHU,2000-04-01,1999-00,0,MUN,Manchester United,1,7,-6,0,61611
WHU,2000-04-12,1999-00,1,NEW,Newcastle United,2,1,1,0,25817
WHU,2000-04-15,1999-00,0,DER,Derby County,2,1,1,0,31202
WHU,2000-04-22,1999-00,1,COV,Coventry City,5,0,5,0,24719
WHU,2000-04-29,1999-00,1,MID,Middlesbrough,0,1,-1,0,25472
WHU,2000-05-02,1999-00,0,ARS,Arsenal,1,2,-1,0,38092
WHU,2000-05-06,1999-00,0,SUN,Sunderland,0,1,-1,0,41684
WHU,2000-05-14,1999-00,1,LEE,Leeds United,0,0,0,0,26044
WHU,2000-08-19,2000-01,0,CHE,Chelsea,2,4,-2,0,34914
WHU,2000-08-23,2000-01,1,LEI,Leicester City,0,1,-1,0,25195
WHU,2000-08-26,2000-01,1,MUN,Manchester United,2,2,0,0,25988
WHU,2000-09-05,2000-01,0,SUN,Sunderland,1,1,0,0,46605
WHU,2000-09-11,2000-01,0,TOT,Tottenham Hotspur,0,1,-1,0,33282
WHU,2000-09-17,2000-01,1,LIV,Liverpool,1,1,0,0,25998
WHU,2000-09-23,2000-01,0,COV,Coventry City,3,0,3,0,21020
WHU,2000-09-30,2000-01,1,BRA,Bradford City,1,1,0,0,25407
WHU,2000-10-14,2000-01,0,IPS,Ipswich Town,1,1,0,0,22243
WHU,2000-10-21,2000-01,1,ARS,Arsenal,1,2,-1,0,26034
WHU,2000-10-28,2000-01,1,NEW,Newcastle United,1,0,1,0,26044
WHU,2000-11-06,2000-01,0,DER,Derby County,0,0,0,0,24621
WHU,2000-11-11,2000-01,1,MCI,Manchester City,4,1,3,0,26022
WHU,2000-11-18,2000-01,0,LEE,Leeds United,1,0,1,0,40005
WHU,2000-11-25,2000-01,0,SOU,Southampton,3,2,1,0,15232
WHU,2000-12-02,2000-01,1,MID,Middlesbrough,1,0,1,0,25459
WHU,2000-12-09,2000-01,1,AVL,Aston Villa,1,1,0,0,25888
WHU,2000-12-16,2000-01,0,EVE,Everton,1,1,0,0,31260
WHU,2000-12-23,2000-01,0,LEI,Leicester City,1,2,-1,0,21524
WHU,2000-12-26,2000-01,1,CHA,Charlton Athletic,5,0,5,0,26046
WHU,2001-01-01,2000-01,0,MUN,Manchester United,1,3,-2,0,67603
WHU,2001-01-13,2000-01,1,SUN,Sunderland,0,2,-2,0,26014
WHU,2001-01-22,2000-01,0,CHA,Charlton Athletic,1,1,0,0,20043
WHU,2001-01-31,2000-01,1,TOT,Tottenham Hotspur,0,0,0,0,26048
WHU,2001-02-03,2000-01,0,LIV,Liverpool,0,3,-3,0,44045
WHU,2001-02-12,2000-01,1,COV,Coventry City,1,1,0,0,22586
WHU,2001-02-24,2000-01,0,BRA,Bradford City,2,1,1,0,20469
WHU,2001-03-03,2000-01,0,ARS,Arsenal,0,3,-3,0,38071
WHU,2001-03-07,2000-01,1,CHE,Chelsea,0,2,-2,0,26016
WHU,2001-03-17,2000-01,1,IPS,Ipswich Town,0,1,-1,0,26046
WHU,2001-03-31,2000-01,1,EVE,Everton,0,2,-2,0,26044
WHU,2001-04-07,2000-01,0,AVL,Aston Villa,2,2,0,0,31432
WHU,2001-04-14,2000-01,1,DER,Derby County,3,1,2,0,35319
WHU,2001-04-16,2000-01,0,NEW,Newcastle United,1,2,-1,0,51107
WHU,2001-04-21,2000-01,1,LEE,Leeds United,0,2,-2,0,26041
WHU,2001-04-28,2000-01,0,MCI,Manchester City,0,1,-1,0,33737
WHU,2001-05-05,2000-01,1,SOU,Southampton,3,0,3,0,26041
WHU,2001-05-19,2000-01,0,MID,Middlesbrough,1,2,-1,0,33057
WHU,2001-08-18,2001-02,0,LIV,Liverpool,1,2,-1,0,43935
WHU,2001-08-25,2001-02,1,LEE,Leeds United,0,0,0,0,24517
WHU,2001-09-08,2001-02,0,DER,Derby County,0,0,0,0,27802
WHU,2001-09-15,2001-02,0,MID,Middlesbrough,0,2,-2,0,25445
WHU,2001-09-23,2001-02,1,NEW,Newcastle United,3,0,3,0,28840
WHU,2001-09-29,2001-02,0,EVE,Everton,0,5,-5,0,32049
WHU,2001-10-14,2001-02,0,BLA,Blackburn Rovers,1,7,-6,0,22712
WHU,2001-10-20,2001-02,1,SOU,Southampton,2,0,2,0,25842
WHU,2001-10-24,2001-02,1,CHE,Chelsea,2,1,1,0,26520
WHU,2001-10-28,2001-02,0,IPS,Ipswich Town,3,2,1,0,22834
WHU,2001-11-03,2001-02,1,FUL,Fulham,0,2,-2,0,26217
WHU,2001-11-19,2001-02,0,CHA,Charlton Athletic,4,4,0,0,23198
WHU,2001-11-24,2001-02,1,TOT,Tottenham Hotspur,0,1,-1,0,32780
WHU,2001-12-01,2001-02,0,SUN,Sunderland,0,1,-1,0,47437
WHU,2001-12-05,2001-02,1,AVL,Aston Villa,1,1,0,0,28377
WHU,2001-12-08,2001-02,0,MUN,Manchester United,1,0,1,0,67582
WHU,2001-12-15,2001-02,1,ARS,Arsenal,1,1,0,0,34523
WHU,2001-12-22,2001-02,0,LEI,Leicester City,1,1,0,0,20131
WHU,2001-12-26,2001-02,1,DER,Derby County,4,0,4,0,31379
WHU,2001-12-29,2001-02,1,LIV,Liverpool,1,1,0,0,35103
WHU,2002-01-01,2001-02,0,LEE,Leeds United,0,3,-3,0,39320
WHU,2002-01-12,2001-02,1,LEI,Leicester City,1,0,1,0,34698
WHU,2002-01-20,2001-02,0,CHE,Chelsea,1,5,-4,0,40035
WHU,2002-01-30,2001-02,0,SOU,Southampton,0,2,-2,0,31879
WHU,2002-02-02,2001-02,1,BLA,Blackburn Rovers,2,0,2,0,35307
WHU,2002-02-09,2001-02,0,BOL,Bolton Wanderers,0,1,-1,0,24342
WHU,2002-02-23,2001-02,1,MID,Middlesbrough,1,0,1,0,35420
WHU,2002-03-02,2001-02,0,AVL,Aston Villa,1,2,-1,0,37341
WHU,2002-03-06,2001-02,1,EVE,Everton,1,0,1,0,29883
WHU,2002-03-16,2001-02,1,MUN,Manchester United,3,5,-2,0,35281
WHU,2002-03-30,2001-02,1,IPS,Ipswich Town,3,1,2,0,33871
WHU,2002-04-01,2001-02,0,FUL,Fulham,1,0,1,0,19416
WHU,2002-04-06,2001-02,1,CHA,Charlton Athletic,2,0,2,0,32389
WHU,2002-04-13,2001-02,0,TOT,Tottenham Hotspur,1,1,0,0,36083
WHU,2002-04-20,2001-02,1,SUN,Sunderland,3,0,3,0,33319
WHU,2002-04-24,2001-02,0,ARS,Arsenal,0,2,-2,0,38038
WHU,2002-04-27,2001-02,0,NEW,Newcastle United,1,3,-2,0,52127
WHU,2002-05-11,2001-02,1,BOL,Bolton Wanderers,2,1,1,0,35546
WHU,2002-08-19,2002-03,0,NEW,Newcastle United,0,4,-4,0,51072
WHU,2002-08-24,2002-03,1,ARS,Arsenal,2,2,0,0,35048
WHU,2002-08-31,2002-03,1,CHA,Charlton Athletic,0,2,-2,0,32424
WHU,2002-09-11,2002-03,1,WBA,West Bromwich Albion,0,1,-1,0,34957
WHU,2002-09-15,2002-03,0,TOT,Tottenham Hotspur,2,3,-1,0,36005
WHU,2002-09-21,2002-03,1,MCI,Manchester City,0,0,0,0,35550
WHU,2002-09-28,2002-03,0,CHE,Chelsea,3,2,1,0,38929
WHU,2002-10-05,2002-03,1,BIR,Birmingham City,1,2,-1,0,35010
WHU,2002-10-19,2002-03,0,SUN,Sunderland,1,0,1,0,44352
WHU,2002-10-23,2002-03,0,FUL,Fulham,1,0,1,0,15858
WHU,2002-10-27,2002-03,1,EVE,Everton,0,1,-1,0,34117
WHU,2002-11-02,2002-03,0,LIV,Liverpool,0,2,-2,0,44048
WHU,2002-11-10,2002-03,1,LEE,Leeds United,3,4,-1,0,33297
WHU,2002-11-17,2002-03,1,MUN,Manchester United,1,1,0,0,35049
WHU,2002-11-23,2002-03,0,AVL,Aston Villa,1,4,-3,0,33279
WHU,2002-12-02,2002-03,1,SOU,Southampton,0,1,-1,0,28844
WHU,2002-12-07,2002-03,0,MID,Middlesbrough,2,2,0,0,28283
WHU,2002-12-14,2002-03,0,MUN,Manchester United,0,3,-3,0,67555
WHU,2002-12-21,2002-03,1,BOL,Bolton Wanderers,1,1,0,0,34892
WHU,2002-12-26,2002-03,1,FUL,Fulham,1,1,0,0,35025
WHU,2002-12-28,2002-03,0,BLA,Blackburn Rovers,2,2,0,0,24998
WHU,2003-01-11,2002-03,1,NEW,Newcastle United,2,2,0,0,35048
WHU,2003-01-19,2002-03,0,ARS,Arsenal,1,3,-2,0,38053
WHU,2003-01-22,2002-03,0,CHA,Charlton Athletic,2,4,-2,0,26340
WHU,2003-01-29,2002-03,1,BLA,Blackburn Rovers,2,1,1,0,34743
WHU,2003-02-02,2002-03,1,LIV,Liverpool,0,3,-3,0,35033
WHU,2003-02-08,2002-03,0,LEE,Leeds United,0,1,-1,0,40126
WHU,2003-02-23,2002-03,0,WBA,West Bromwich Albion,2,1,1,0,27042
WHU,2003-03-01,2002-03,1,TOT,Tottenham Hotspur,2,0,2,0,35049
WHU,2003-03-15,2002-03,0,EVE,Everton,0,0,0,0,40158
WHU,2003-03-22,2002-03,1,SUN,Sunderland,2,0,2,0,35033
WHU,2003-04-05,2002-03,0,SOU,Southampton,1,1,0,0,31941
WHU,2003-04-12,2002-03,1,AVL,Aston Villa,2,2,0,0,35029
WHU,2003-04-19,2002-03,0,BOL,Bolton Wanderers,0,1,-1,0,27160
WHU,2003-04-21,2002-03,1,MID,Middlesbrough,1,0,1,0,35019
WHU,2003-04-27,2002-03,0,MCI,Manchester City,1,0,1,0,34815
WHU,2003-05-03,2002-03,1,CHE,Chelsea,1,0,1,0,35042
WHU,2003-05-11,2002-03,0,BIR,Birmingham City,2,2,0,0,29505
WHU,2005-08-13,2005-06,1,BLA,Blackburn Rovers,3,1,2,0,33133
WHU,2005-08-20,2005-06,0,NEW,Newcastle United,0,0,0,0,51644
WHU,2005-08-27,2005-06,1,BOL,Bolton Wanderers,1,2,-1,0,30288
WHU,2005-09-12,2005-06,1,AVL,Aston Villa,4,0,4,0,28849
WHU,2005-09-17,2005-06,0,FUL,Fulham,2,1,1,0,22019
WHU,2005-09-24,2005-06,1,ARS,Arsenal,0,0,0,0,34281
WHU,2005-10-01,2005-06,0,SUN,Sunderland,1,1,0,0,31212
WHU,2005-10-16,2005-06,0,MCI,Manchester City,1,2,-1,0,43647
WHU,2005-10-23,2005-06,1,MID,Middlesbrough,2,1,1,0,33428
WHU,2005-10-29,2005-06,0,LIV,Liverpool,0,2,-2,0,45140
WHU,2005-11-05,2005-06,1,WBA,West Bromwich Albion,1,0,1,0,33595
WHU,2005-11-20,2005-06,0,TOT,Tottenham Hotspur,1,1,0,0,36153
WHU,2005-11-27,2005-06,1,MUN,Manchester United,1,2,-1,0,34260
WHU,2005-12-05,2005-06,0,BIR,Birmingham City,2,1,1,0,24010
WHU,2005-12-10,2005-06,0,BLA,Blackburn Rovers,2,3,-1,0,20370
WHU,2005-12-14,2005-06,0,EVE,Everton,2,1,1,0,35074
WHU,2005-12-17,2005-06,1,NEW,Newcastle United,2,4,-2,0,34481
WHU,2005-12-26,2005-06,0,POR,Portsmouth,1,1,0,0,20140
WHU,2005-12-28,2005-06,1,WIG,Wigan Athletic,0,2,-2,0,33660
WHU,2005-12-31,2005-06,0,CHA,Charlton Athletic,0,2,-2,0,25943
WHU,2006-01-02,2005-06,1,CHE,Chelsea,1,3,-2,0,34462
WHU,2006-01-14,2005-06,0,AVL,Aston Villa,2,1,1,0,36700
WHU,2006-01-23,2005-06,1,FUL,Fulham,2,1,1,0,29395
WHU,2006-02-01,2005-06,0,ARS,Arsenal,3,2,1,0,38216
WHU,2006-02-04,2005-06,1,SUN,Sunderland,2,0,2,0,34313
WHU,2006-02-13,2005-06,1,BIR,Birmingham City,3,0,3,0,30643
WHU,2006-03-04,2005-06,1,EVE,Everton,2,2,0,0,34688
WHU,2006-03-11,2005-06,0,BOL,Bolton Wanderers,1,4,-3,0,24461
WHU,2006-03-18,2005-06,1,POR,Portsmouth,2,4,-2,0,34407
WHU,2006-03-25,2005-06,0,WIG,Wigan Athletic,2,1,1,0,18963
WHU,2006-03-29,2005-06,0,MUN,Manchester United,0,1,-1,0,69522
WHU,2006-04-02,2005-06,1,CHA,Charlton Athletic,0,0,0,0,33964
WHU,2006-04-09,2005-06,0,CHE,Chelsea,1,4,-3,0,41823
WHU,2006-04-15,2005-06,1,MCI,Manchester City,1,0,1,0,33794
WHU,2006-04-17,2005-06,0,MID,Middlesbrough,0,2,-2,0,27658
WHU,2006-04-26,2005-06,1,LIV,Liverpool,1,2,-1,0,34838
WHU,2006-05-01,2005-06,0,WBA,West Bromwich Albion,1,0,1,0,23143
WHU,2006-05-07,2005-06,1,TOT,Tottenham Hotspur,2,1,1,0,34797
WHU,2006-08-19,2006-07,1,CHA,Charlton Athletic,3,1,2,0,34704
WHU,2006-08-22,2006-07,0,WAT,Watford,1,1,0,0,18344
WHU,2006-08-26,2006-07,0,LIV,Liverpool,1,2,-1,0,45262
WHU,2006-09-10,2006-07,1,AVL,Aston Villa,1,1,0,0,34211
WHU,2006-09-17,2006-07,1,NEW,Newcastle United,0,2,-2,0,34623
WHU,2006-09-23,2006-07,0,MCI,Manchester City,0,2,-2,0,41073
WHU,2006-10-01,2006-07,1,REA,Reading,0,1,-1,0,34592
WHU,2006-10-14,2006-07,0,POR,Portsmouth,0,2,-2,0,20142
WHU,2006-10-22,2006-07,0,TOT,Tottenham Hotspur,0,1,-1,0,36162
WHU,2006-10-29,2006-07,1,BLA,Blackburn Rovers,2,1,1,0,33607
WHU,2006-11-05,2006-07,1,ARS,Arsenal,1,0,1,0,34912
WHU,2006-11-11,2006-07,0,MID,Middlesbrough,0,1,-1,0,25898
WHU,2006-11-18,2006-07,0,CHE,Chelsea,0,1,-1,0,41948
WHU,2006-11-25,2006-07,1,SHU,Sheffield United,1,0,1,0,34242
WHU,2006-12-03,2006-07,0,EVE,Everton,0,2,-2,0,32968
WHU,2006-12-06,2006-07,1,WIG,Wigan Athletic,0,2,-2,0,33468
WHU,2006-12-09,2006-07,0,BOL,Bolton Wanderers,0,4,-4,0,22283
WHU,2006-12-17,2006-07,1,MUN,Manchester United,1,0,1,0,34989
WHU,2006-12-23,2006-07,0,FUL,Fulham,0,0,0,1,22452
WHU,2006-12-26,2006-07,1,POR,Portsmouth,1,2,-1,0,34886
WHU,2006-12-30,2006-07,1,MCI,Manchester City,0,1,-1,0,34552
WHU,2007-01-01,2006-07,0,REA,Reading,0,6,-6,0,23992
WHU,2007-01-13,2006-07,1,FUL,Fulham,3,3,0,1,34552
WHU,2007-01-20,2006-07,0,NEW,Newcastle United,2,2,0,0,52096
WHU,2007-01-30,2006-07,1,LIV,Liverpool,1,2,-1,0,35278
WHU,2007-02-03,2006-07,0,AVL,Aston Villa,0,1,-1,0,41202
WHU,2007-02-10,2006-07,1,WAT,Watford,0,1,-1,0,34521
WHU,2007-02-24,2006-07,0,CHA,Charlton Athletic,0,4,-4,0,27111
WHU,2007-03-04,2006-07,1,TOT,Tottenham Hotspur,3,4,-1,0,34967
WHU,2007-03-17,2006-07,0,BLA,Blackburn Rovers,2,1,1,0,18586
WHU,2007-03-31,2006-07,1,MID,Middlesbrough,2,0,2,0,34854
WHU,2007-04-07,2006-07,0,ARS,Arsenal,1,0,1,0,60098
WHU,2007-04-14,2006-07,0,SHU,Sheffield United,0,3,-3,0,31593
WHU,2007-04-18,2006-07,1,CHE,Chelsea,1,4,-3,0,35156
WHU,2007-04-21,2006-07,1,EVE,Everton,1,0,1,0,34896
WHU,2007-04-28,2006-07,0,WIG,Wigan Athletic,3,0,3,0,24832
WHU,2007-05-05,2006-07,1,BOL,Bolton Wanderers,3,1,2,0,34125
WHU,2007-05-13,2006-07,0,MUN,Manchester United,1,0,1,0,75927
WHU,2007-08-11,2007-08,1,MCI,Manchester City,0,2,-2,0,
WHU,2007-08-18,2007-08,0,BIR,Birmingham City,1,0,1,0,
WHU,2007-08-25,2007-08,1,WIG,Wigan Athletic,1,1,0,0,
WHU,2007-09-01,2007-08,0,REA,Reading,3,0,3,0,
WHU,2007-09-15,2007-08,1,MID,Middlesbrough,3,0,3,0,
WHU,2007-09-23,2007-08,0,NEW,Newcastle United,1,3,-2,0,
WHU,2007-09-29,2007-08,1,ARS,Arsenal,0,1,-1,0,
WHU,2007-10-06,2007-08,0,AVL,Aston Villa,0,1,-1,0,
WHU,2007-10-21,2007-08,1,SUN,Sunderland,3,1,2,0,
WHU,2007-10-27,2007-08,0,POR,Portsmouth,0,0,0,0,
WHU,2007-11-04,2007-08,1,BOL,Bolton Wanderers,1,1,0,0,
WHU,2007-11-10,2007-08,0,DER,Derby County,5,0,5,0,32440
WHU,2007-11-25,2007-08,1,TOT,Tottenham Hotspur,1,1,0,0,
WHU,2007-12-01,2007-08,0,CHE,Chelsea,0,1,-1,0,
WHU,2007-12-09,2007-08,0,BLA,Blackburn Rovers,1,0,1,0,
WHU,2007-12-15,2007-08,1,EVE,Everton,0,2,-2,0,
WHU,2007-12-22,2007-08,0,MID,Middlesbrough,2,1,1,0,
WHU,2007-12-26,2007-08,1,REA,Reading,1,1,0,0,
WHU,2007-12-29,2007-08,1,MUN,Manchester United,2,1,1,0,
WHU,2008-01-01,2007-08,0,ARS,Arsenal,0,2,-2,0,
WHU,2008-01-12,2007-08,1,FUL,Fulham,2,1,1,0,
WHU,2008-01-20,2007-08,0,MCI,Manchester City,1,1,0,0,
WHU,2008-01-30,2007-08,1,LIV,Liverpool,1,0,1,0,
WHU,2008-02-02,2007-08,0,WIG,Wigan Athletic,0,1,-1,0,
WHU,2008-02-09,2007-08,1,BIR,Birmingham City,1,1,0,0,
WHU,2008-02-23,2007-08,0,FUL,Fulham,1,0,1,0,
WHU,2008-03-01,2007-08,1,CHE,Chelsea,0,4,-4,0,
WHU,2008-03-05,2007-08,0,LIV,Liverpool,0,4,-4,0,
WHU,2008-03-09,2007-08,0,TOT,Tottenham Hotspur,0,4,-4,1,
WHU,2008-03-15,2007-08,1,BLA,Blackburn Rovers,2,1,1,0,
WHU,2008-03-22,2007-08,0,EVE,Everton,1,1,0,0,
WHU,2008-03-29,2007-08,0,SUN,Sunderland,1,2,-1,0,
WHU,2008-04-08,2007-08,1,POR,Portsmouth,0,1,-1,0,
WHU,2008-04-12,2007-08,0,BOL,Bolton Wanderers,0,1,-1,0,
WHU,2008-04-19,2007-08,1,DER,Derby County,2,1,1,0,
WHU,2008-04-26,2007-08,1,NEW,Newcastle United,2,2,0,0,
WHU,2008-05-03,2007-08,0,MUN,Manchester United,1,4,-3,0,
WHU,2008-05-11,2007-08,1,AVL,Aston Villa,2,2,0,0,34909
WHU,2008-08-16,2008-09,1,WIG,Wigan Athletic,2,1,1,0,32758
WHU,2008-08-24,2008-09,0,MCI,Manchester City,0,3,-3,1,
WHU,2008-08-30,2008-09,1,BLA,Blackburn Rovers,4,1,3,0,
WHU,2008-09-13,2008-09,0,WBA,West Bromwich Albion,2,3,-1,0,
WHU,2008-09-20,2008-09,1,NEW,Newcastle United,3,1,2,0,
WHU,2008-09-27,2008-09,0,FUL,Fulham,2,1,1,0,
WHU,2008-10-05,2008-09,1,BOL,Bolton Wanderers,1,3,-2,0,
WHU,2008-10-19,2008-09,0,HUL,Hull City,0,1,-1,0,
WHU,2008-10-26,2008-09,1,ARS,Arsenal,0,2,-2,1,
WHU,2008-10-29,2008-09,0,MUN,Manchester United,0,2,-2,0,75397
WHU,2008-11-01,2008-09,0,MID,Middlesbrough,1,1,0,0,25164
WHU,2008-11-08,2008-09,1,EVE,Everton,1,3,-2,0,33961
WHU,2008-11-15,2008-09,1,POR,Portsmouth,0,0,0,0,
WHU,2008-11-23,2008-09,0,SUN,Sunderland,1,0,1,0,
WHU,2008-12-01,2008-09,0,LIV,Liverpool,0,0,0,0,
WHU,2008-12-08,2008-09,1,TOT,Tottenham Hotspur,0,2,-2,0,34277
WHU,2008-12-14,2008-09,0,CHE,Chelsea,1,1,0,0,
WHU,2008-12-20,2008-09,1,AVL,Aston Villa,0,1,-1,0,31353
WHU,2008-12-26,2008-09,0,POR,Portsmouth,4,1,3,0,20102
WHU,2008-12-28,2008-09,1,STO,Stoke City,2,1,1,0,34477
WHU,2009-01-10,2008-09,0,NEW,Newcastle United,2,2,0,0,47571
WHU,2009-01-18,2008-09,1,FUL,Fulham,3,1,2,0,31818
WHU,2009-01-28,2008-09,1,HUL,Hull City,2,0,2,0,34340
WHU,2009-01-31,2008-09,0,ARS,Arsenal,0,0,0,0,60109
WHU,2009-02-08,2008-09,1,MUN,Manchester United,0,1,-1,0,34958
WHU,2009-02-21,2008-09,0,BOL,Bolton Wanderers,1,2,-1,0,21245
WHU,2009-03-01,2008-09,1,MCI,Manchester City,1,0,1,0,34562
WHU,2009-03-04,2008-09,0,WIG,Wigan Athletic,1,0,1,1,14169
WHU,2009-03-16,2008-09,1,WBA,West Bromwich Albion,0,0,0,0,40842
WHU,2009-03-21,2008-09,0,BLA,Blackburn Rovers,1,1,0,0,21672
WHU,2009-04-04,2008-09,1,SUN,Sunderland,2,0,2,0,34761
WHU,2009-04-11,2008-09,0,TOT,Tottenham Hotspur,0,1,-1,0,35969
WHU,2009-04-18,2008-09,0,AVL,Aston Villa,1,1,0,0,39534
WHU,2009-04-25,2008-09,1,CHE,Chelsea,0,1,-1,0,34749
WHU,2009-05-02,2008-09,0,STO,Stoke City,1,0,1,0,27500
WHU,2009-05-09,2008-09,1,LIV,Liverpool,0,3,-3,0,34951
WHU,2009-05-16,2008-09,0,EVE,Everton,1,3,-2,1,38501
WHU,2009-05-24,2008-09,1,MID,Middlesbrough,2,1,1,0,34007
WHU,2009-08-15,2009-10,0,WOL,Wolverhampton Wanderers,2,0,2,0,28674
WHU,2009-08-23,2009-10,1,TOT,Tottenham Hotspur,1,2,-1,0,33095
WHU,2009-08-29,2009-10,0,BLA,Blackburn Rovers,0,0,0,0,23421
WHU,2009-09-12,2009-10,0,WIG,Wigan Athletic,0,1,-1,0,17142
WHU,2009-09-19,2009-10,1,LIV,Liverpool,2,3,-1,0,34658
WHU,2009-09-28,2009-10,0,MCI,Manchester City,1,3,-2,0,42745
WHU,2009-10-04,2009-10,1,FUL,Fulham,2,2,0,0,32612
WHU,2009-10-17,2009-10,0,STO,Stoke City,1,2,-1,0,
WHU,2009-10-25,2009-10,1,ARS,Arsenal,2,2,0,1,34442
WHU,2009-10-31,2009-10,0,SUN,Sunderland,2,2,0,1,39033
WHU,2009-11-04,2009-10,1,AVL,Aston Villa,2,1,1,0,30024
WHU,2009-11-08,2009-10,1,EVE,Everton,1,2,-1,0,32466
WHU,2009-11-21,2009-10,0,HUL,Hull City,3,3,0,0,24909
WHU,2009-11-28,2009-10,1,BUR,Burnley,5,3,2,0,34003
WHU,2009-12-05,2009-10,1,MUN,Manchester United,0,4,-4,0,34980
WHU,2009-12-12,2009-10,0,BIR,Birmingham City,0,1,-1,1,28203
WHU,2009-12-15,2009-10,0,BOL,Bolton Wanderers,1,3,-2,0,17849
WHU,2009-12-20,2009-10,1,CHE,Chelsea,1,1,0,0,33388
WHU,2009-12-26,2009-10,1,POR,Portsmouth,2,0,2,0,33686
WHU,2009-12-28,2009-10,0,TOT,Tottenham Hotspur,0,2,-2,0,35994
WHU,2010-01-17,2009-10,0,AVL,Aston Villa,0,0,0,0,35646
WHU,2010-01-26,2009-10,0,POR,Portsmouth,1,1,0,0,18322
WHU,2010-01-30,2009-10,1,BLA,Blackburn Rovers,0,0,0,0,33093
WHU,2010-02-06,2009-10,0,BUR,Burnley,1,2,-1,0,21001
WHU,2010-02-10,2009-10,1,BIR,Birmingham City,2,0,2,0,34458
WHU,2010-02-20,2009-10,1,HUL,Hull City,3,0,3,0,33971
WHU,2010-02-23,2009-10,0,MUN,Manchester United,0,3,-3,0,73797
WHU,2010-03-06,2009-10,1,BOL,Bolton Wanderers,1,2,-1,0,33824
WHU,2010-03-13,2009-10,0,CHE,Chelsea,1,4,-3,0,41755
WHU,2010-03-20,2009-10,0,ARS,Arsenal,0,2,-2,0,60077
WHU,2010-03-23,2009-10,1,WOL,Wolverhampton Wanderers,1,3,-2,0,33988
WHU,2010-03-27,2009-10,1,STO,Stoke City,0,1,-1,0,34564
WHU,2010-04-04,2009-10,0,EVE,Everton,2,2,0,0,37451
WHU,2010-04-10,2009-10,1,SUN,Sunderland,1,0,1,0,34685
WHU,2010-04-19,2009-10,0,LIV,Liverpool,0,3,-3,0,37697
WHU,2010-04-24,2009-10,1,WIG,Wigan Athletic,3,2,1,0,33057
WHU,2010-05-02,2009-10,0,FUL,Fulham,2,3,-1,0,24201
WHU,2010-05-09,2009-10,1,MCI,Manchester City,1,1,0,0,34989
WHU,2010-08-14,2010-11,0,AVL,Aston Villa,0,3,-3,0,36604
WHU,2010-08-21,2010-11,1,BOL,Bolton Wanderers,1,3,-2,0,32533
WHU,2010-08-28,2010-11,0,MUN,Manchester United,0,3,-3,0,75061
WHU,2010-09-11,2010-11,1,CHE,Chelsea,1,3,-2,0,33014
WHU,2010-09-18,2010-11,0,STO,Stoke City,1,1,0,0,27028
WHU,2010-09-25,2010-11,1,TOT,Tottenham Hotspur,1,0,1,0,34190
WHU,2010-10-02,2010-11,1,FUL,Fulham,1,1,0,0,34589
WHU,2010-10-16,2010-11,0,WOL,Wolverhampton Wanderers,1,1,0,0,28582
WHU,2010-10-23,2010-11,1,NEW,Newcastle United,1,2,-1,0,34486
WHU,2010-10-30,2010-11,0,ARS,Arsenal,0,1,-1,0,60086
WHU,2010-11-06,2010-11,0,BIR,Birmingham City,2,2,0,0,26474
WHU,2010-11-10,2010-11,1,WBA,West Bromwich Albion,2,2,0,0,33023
WHU,2010-11-13,2010-11,1,BPL,Blackpool,0,0,0,0,31194
WHU,2010-11-20,2010-11,0,LIV,Liverpool,0,3,-3,0,43024
WHU,2010-11-27,2010-11,1,WIG,Wigan Athletic,3,1,2,0,34178
WHU,2010-12-05,2010-11,0,SUN,Sunderland,0,1,-1,0,36940
WHU,2010-12-11,2010-11,1,MCI,Manchester City,1,3,-2,0,32813
WHU,2010-12-18,2010-11,0,BLA,Blackburn Rovers,1,1,0,0,21934
WHU,2010-12-26,2010-11,0,FUL,Fulham,3,1,2,0,25332
WHU,2010-12-28,2010-11,1,EVE,Everton,1,1,0,0,33422
WHU,2011-01-01,2010-11,1,WOL,Wolverhampton Wanderers,2,0,2,0,33500
WHU,2011-01-05,2010-11,0,NEW,Newcastle United,0,5,-5,0,42387
WHU,2011-01-15,2010-11,1,ARS,Arsenal,0,3,-3,0,32682
WHU,2011-01-22,2010-11,0,EVE,Everton,2,2,0,1,34179
WHU,2011-02-02,2010-11,0,BPL,Blackpool,3,1,2,0,15095
WHU,2011-02-06,2010-11,1,BIR,Birmingham City,0,1,-1,0,32927
WHU,2011-02-12,2010-11,0,WBA,West Bromwich Albion,3,3,0,0,23916
WHU,2011-02-27,2010-11,1,LIV,Liverpool,3,1,2,0,34941
WHU,2011-03-05,2010-11,1,STO,Stoke City,3,0,3,0,33066
WHU,2011-03-19,2010-11,0,TOT,Tottenham Hotspur,0,0,0,0,36010
WHU,2011-04-02,2010-11,1,MUN,Manchester United,2,4,-2,0,34546
WHU,2011-04-09,2010-11,0,BOL,Bolton Wanderers,0,3,-3,0,25857
WHU,2011-04-16,2010-11,1,AVL,Aston Villa,1,2,-1,0,
WHU,2011-04-23,2010-11,0,CHE,Chelsea,0,3,-3,0,41656
WHU,2011-05-01,2010-11,0,MCI,Manchester City,1,2,-1,0,44511
WHU,2011-05-07,2010-11,1,BLA,Blackburn Rovers,1,1,0,0,33789
WHU,2011-05-15,2010-11,0,WIG,Wigan Athletic,2,3,-1,0,22043
WHU,2011-05-22,2010-11,1,SUN,Sunderland,0,3,-3,0,32792
WHU,2012-08-18,2012-13,1,AVL,Aston Villa,1,0,1,0,34172
WHU,2012-08-25,2012-13,0,SWA,Swansea City,0,3,-3,0,20424
WHU,2012-09-01,2012-13,1,FUL,Fulham,3,0,3,0,33458
WHU,2012-09-15,2012-13,0,NOR,Norwich City,0,0,0,0,26806
WHU,2012-09-22,2012-13,1,SUN,Sunderland,1,1,0,0,33052
WHU,2012-10-01,2012-13,0,QPR,Queens Park Rangers,2,1,1,0,17363
WHU,2012-10-06,2012-13,1,ARS,Arsenal,1,3,-2,0,34974
WHU,2012-10-20,2012-13,1,SOU,Southampton,4,1,3,0,34925
WHU,2012-10-27,2012-13,0,WIG,Wigan Athletic,1,2,-1,0,19090
WHU,2012-11-03,2012-13,1,MCI,Manchester City,0,0,0,0,35005
WHU,2012-11-11,2012-13,0,NEW,Newcastle United,1,0,1,0,51855
WHU,2012-11-19,2012-13,1,STO,Stoke City,1,1,0,0,35005
WHU,2012-11-25,2012-13,0,TOT,Tottenham Hotspur,1,3,-2,0,36043
WHU,2012-11-28,2012-13,0,MUN,Manchester United,0,1,-1,0,75572
WHU,2012-12-01,2012-13,1,CHE,Chelsea,3,1,2,0,35005
WHU,2012-12-09,2012-13,1,LIV,Liverpool,2,3,-1,0,35005
WHU,2012-12-16,2012-13,0,WBA,West Bromwich Albion,0,0,0,0,24816
WHU,2012-12-22,2012-13,1,EVE,Everton,1,2,-1,1,35005
WHU,2012-12-29,2012-13,0,REA,Reading,0,1,-1,0,24183
WHU,2013-01-01,2012-13,1,NOR,Norwich City,2,1,1,0,35005
WHU,2013-01-12,2012-13,0,SUN,Sunderland,0,3,-3,0,39918
WHU,2013-01-19,2012-13,1,QPR,Queens Park Rangers,1,1,0,0,34962
WHU,2013-01-23,2012-13,0,ARS,Arsenal,1,5,-4,0,60081
WHU,2013-01-30,2012-13,0,FUL,Fulham,1,3,-2,0,24791
WHU,2013-02-02,2012-13,1,SWA,Swansea City,1,0,1,0,34962
WHU,2013-02-10,2012-13,0,AVL,Aston Villa,1,2,-1,0,30503
WHU,2013-02-25,2012-13,1,TOT,Tottenham Hotspur,2,3,-1,0,35005
WHU,2013-03-02,2012-13,0,STO,Stoke City,1,0,1,0,22690
WHU,2013-03-17,2012-13,0,CHE,Chelsea,0,2,-2,0,41639
WHU,2013-03-30,2012-13,1,WBA,West Bromwich Albion,3,1,2,0,34966
WHU,2013-04-07,2012-13,0,LIV,Liverpool,0,0,0,0,45007
WHU,2013-04-13,2012-13,0,SOU,Southampton,1,1,0,0,31984
WHU,2013-04-17,2012-13,1,MUN,Manchester United,2,2,0,0,34692
WHU,2013-04-20,2012-13,1,WIG,Wigan Athletic,2,0,2,0,34544
WHU,2013-04-27,2012-13,0,MCI,Manchester City,1,2,-1,0,47189
WHU,2013-05-04,2012-13,1,NEW,Newcastle United,0,0,0,0,34962
WHU,2013-05-12,2012-13,0,EVE,Everton,0,2,-2,0,39475
WHU,2013-05-19,2012-13,1,REA,Reading,4,2,2,0,34973
WHU,2013-08-17,2013-14,1,CAR,Cardiff City,2,0,2,0,34977
WHU,2013-08-24,2013-14,0,NEW,Newcastle United,0,0,0,0,49622
WHU,2013-08-31,2013-14,1,STO,Stoke City,0,1,-1,0,34946
WHU,2013-09-15,2013-14,0,SOU,Southampton,0,0,0,0,28794
WHU,2013-09-21,2013-14,1,EVE,Everton,2,3,-1,1,34952
WHU,2013-09-28,2013-14,0,HUL,Hull City,0,1,-1,0,24291
WHU,2013-10-06,2013-14,0,TOT,Tottenham Hotspur,3,0,3,0,35977
WHU,2013-10-19,2013-14,1,MCI,Manchester City,1,3,-2,0,34507
WHU,2013-10-27,2013-14,0,SWA,Swansea City,0,0,0,0,20455
WHU,2013-11-02,2013-14,1,AVL,Aston Villa,0,0,0,0,34977
WHU,2013-11-09,2013-14,0,NOR,Norwich City,1,3,-2,0,26824
WHU,2013-11-23,2013-14,1,CHE,Chelsea,0,3,-3,0,34977
WHU,2013-11-30,2013-14,1,FUL,Fulham,3,0,3,0,34946
WHU,2013-12-03,2013-14,0,CRY,Crystal Palace,0,1,-1,0,23891
WHU,2013-12-07,2013-14,0,LIV,Liverpool,1,4,-3,1,44781
WHU,2013-12-14,2013-14,1,SUN,Sunderland,0,0,0,0,31843
WHU,2013-12-21,2013-14,0,MUN,Manchester United,1,3,-2,0,75350
WHU,2013-12-26,2013-14,1,ARS,Arsenal,1,3,-2,0,34977
WHU,2013-12-28,2013-14,1,WBA,West Bromwich Albion,3,3,0,0,34946
WHU,2014-01-01,2013-14,0,FUL,Fulham,1,2,-1,1,25335
WHU,2014-01-11,2013-14,0,CAR,Cardiff City,2,0,2,1,27750
WHU,2014-01-18,2013-14,1,NEW,Newcastle United,1,3,-2,0,33343
WHU,2014-01-29,2013-14,0,CHE,Chelsea,0,0,0,0,41376
WHU,2014-02-01,2013-14,1,SWA,Swansea City,2,0,2,1,31848
WHU,2014-02-08,2013-14,0,AVL,Aston Villa,2,0,2,0,36261
WHU,2014-02-11,2013-14,1,NOR,Norwich City,2,0,2,0,35153
WHU,2014-02-22,2013-14,1,SOU,Southampton,3,1,2,0,33148
WHU,2014-03-01,2013-14,0,EVE,Everton,0,1,-1,0,38286
WHU,2014-03-15,2013-14,0,STO,Stoke City,1,3,-2,0,27015
WHU,2014-03-22,2013-14,1,MUN,Manchester United,0,2,-2,0,34237
WHU,2014-03-26,2013-14,1,HUL,Hull City,2,1,1,0,31033
WHU,2014-03-31,2013-14,0,SUN,Sunderland,2,1,1,0,37396
WHU,2014-04-06,2013-14,1,LIV,Liverpool,1,2,-1,0,34977
WHU,2014-04-15,2013-14,0,ARS,Arsenal,1,3,-2,0,59977
WHU,2014-04-19,2013-14,1,CRY,Crystal Palace,0,1,-1,0,34977
WHU,2014-04-26,2013-14,0,WBA,West Bromwich Albion,0,1,-1,0,26541
WHU,2014-05-03,2013-14,1,TOT,Tottenham Hotspur,2,0,2,0,34977
WHU,2014-05-11,2013-14,0,MCI,Manchester City,0,2,-2,0,47300
WHU,2014-08-16,2014-15,1,TOT,Tottenham Hotspur,0,1,-1,1,34977
WHU,2014-08-23,2014-15,0,CRY,Crystal Palace,3,1,2,0,24242
WHU,2014-08-30,2014-15,1,SOU,Southampton,1,3,-2,0,34907
WHU,2014-09-15,2014-15,0,HUL,Hull City,2,2,0,0,21275
WHU,2014-09-20,2014-15,1,LIV,Liverpool,3,1,2,0,34977
WHU,2014-09-27,2014-15,0,MUN,Manchester United,1,2,-1,0,75317
WHU,2014-10-05,2014-15,1,QPR,Queens Park Rangers,2,0,2,0,34907
WHU,2014-10-18,2014-15,0,BUR,Burnley,3,1,2,0,18936
WHU,2014-10-25,2014-15,1,MCI,Manchester City,2,1,1,0,34977
WHU,2014-11-01,2014-15,0,STO,Stoke City,2,2,0,0,27174
WHU,2014-11-08,2014-15,1,AVL,Aston Villa,0,0,0,0,34857
WHU,2014-11-22,2014-15,0,EVE,Everton,1,2,-1,0,39182
WHU,2014-11-29,2014-15,1,NEW,Newcastle United,1,0,1,0,34977
WHU,2014-12-02,2014-15,0,WBA,West Bromwich Albion,2,1,1,0,23975
WHU,2014-12-07,2014-15,1,SWA,Swansea City,3,1,2,0,34125
WHU,2014-12-13,2014-15,0,SUN,Sunderland,1,1,0,0,41694
WHU,2014-12-20,2014-15,1,LEI,Leicester City,2,0,2,0,34977
WHU,2014-12-26,2014-15,0,CHE,Chelsea,0,2,-2,0,41589
WHU,2014-12-28,2014-15,1,ARS,Arsenal,1,2,-1,0,34977
WHU,2015-01-01,2014-15,1,WBA,West Bromwich Albion,1,1,0,0,34914
WHU,2015-01-10,2014-15,0,SWA,Swansea City,1,1,0,0,20745
WHU,2015-01-18,2014-15,1,HUL,Hull City,3,0,3,0,34914
WHU,2015-01-31,2014-15,0,LIV,Liverpool,0,2,-2,0,44718
WHU,2015-02-08,2014-15,1,MUN,Manchester United,1,1,0,0,34499
WHU,2015-02-11,2014-15,0,SOU,Southampton,0,0,0,1,31241
WHU,2015-02-22,2014-15,0,TOT,Tottenham Hotspur,2,2,0,0,35837
WHU,2015-02-28,2014-15,1,CRY,Crystal Palace,1,3,-2,0,34857
WHU,2015-03-04,2014-15,1,CHE,Chelsea,0,1,-1,0,34927
WHU,2015-03-14,2014-15,0,ARS,Arsenal,0,3,-3,0,60002
WHU,2015-03-21,2014-15,1,SUN,Sunderland,1,0,1,0,34914
WHU,2015-04-04,2014-15,0,LEI,Leicester City,1,2,-1,0,31863
WHU,2015-04-11,2014-15,1,STO,Stoke City,1,1,0,0,34946
WHU,2015-04-19,2014-15,0,MCI,Manchester City,0,2,-2,0,45041
WHU,2015-04-25,2014-15,0,QPR,Queens Park Rangers,0,0,0,0,18036
WHU,2015-05-02,2014-15,1,BUR,Burnley,1,0,1,0,34946
WHU,2015-05-09,2014-15,0,AVL,Aston Villa,0,1,-1,0,39294
WHU,2015-05-16,2014-15,1,EVE,Everton,1,2,-1,0,34977
WHU,2015-05-24,2014-15,0,NEW,Newcastle United,0,2,-2,0,52094
WHU,2015-08-09,2015-16,0,ARS,Arsenal,2,0,2,0,59996
WHU,2015-08-15,2015-16,1,LEI,Leicester City,1,2,-1,1,34857
WHU,2015-08-22,2015-16,1,BOU,Bournemouth,3,4,-1,1,34977
WHU,2015-08-29,2015-16,0,LIV,Liverpool,3,0,3,1,43680
WHU,2015-09-14,2015-16,1,NEW,Newcastle United,2,0,2,0,34907
WHU,2015-09-19,2015-16,0,MCI,Manchester City,2,1,1,0,53545
WHU,2015-09-26,2015-16,1,NOR,Norwich City,2,2,0,0,34857
WHU,2015-10-03,2015-16,0,SUN,Sunderland,2,2,0,0,42932
WHU,2015-10-17,2015-16,0,CRY,Crystal Palace,3,1,2,0,24812
WHU,2015-10-24,2015-16,1,CHE,Chelsea,2,1,1,0,34977
WHU,2015-10-31,2015-16,0,WAT,Watford,0,2,-2,1,20598
WHU,2015-11-07,2015-16,1,EVE,Everton,1,1,0,0,34977
WHU,2015-11-22,2015-16,0,TOT,Tottenham Hotspur,1,4,-3,0,35968
WHU,2015-11-29,2015-16,1,WBA,West Bromwich Albion,1,1,0,0,34914
WHU,2015-12-05,2015-16,0,MUN,Manchester United,0,0,0,0,75350
WHU,2015-12-12,2015-16,1,STO,Stoke City,0,0,0,0,34857
WHU,2015-12-20,2015-16,0,SWA,Swansea City,0,0,0,0,20661
WHU,2015-12-26,2015-16,0,AVL,Aston Villa,1,1,0,0,38193
WHU,2015-12-28,2015-16,1,SOU,Southampton,2,1,1,0,34977
WHU,2016-01-02,2015-16,1,LIV,Liverpool,2,0,2,0,34977
WHU,2016-01-12,2015-16,0,BOU,Bournemouth,3,1,2,0,11071
WHU,2016-01-16,2015-16,0,NEW,Newcastle United,1,2,-1,0,50031
WHU,2016-01-23,2015-16,1,MCI,Manchester City,2,2,0,0,34977
WHU,2016-02-02,2015-16,1,AVL,Aston Villa,2,0,2,0,34914
WHU,2016-02-06,2015-16,0,SOU,Southampton,0,1,-1,0,29161
WHU,2016-02-13,2015-16,0,NOR,Norwich City,2,2,0,0,27101
WHU,2016-02-27,2015-16,1,SUN,Sunderland,1,0,1,0,34946
WHU,2016-03-02,2015-16,1,TOT,Tottenham Hotspur,1,0,1,0,34977
WHU,2016-03-05,2015-16,0,EVE,Everton,3,2,1,0,39000
WHU,2016-03-19,2015-16,0,CHE,Chelsea,2,2,0,0,41623
WHU,2016-04-02,2015-16,1,CRY,Crystal Palace,2,2,0,1,34857
WHU,2016-04-09,2015-16,1,ARS,Arsenal,3,3,0,0,34977
WHU,2016-04-17,2015-16,0,LEI,Leicester City,2,2,0,0,32104
WHU,2016-04-20,2015-16,1,WAT,Watford,3,1,2,0,34857
WHU,2016-04-30,2015-16,0,WBA,West Bromwich Albion,3,0,3,0,25031
WHU,2016-05-07,2015-16,1,SWA,Swansea City,1,4,-3,0,34907
WHU,2016-05-10,2015-16,1,MUN,Manchester United,3,2,1,0,34602
WHU,2016-05-15,2015-16,0,STO,Stoke City,1,2,-1,0,27721
WHU,2016-08-15,2016-17,0,CHE,Chelsea,1,2,-1,0,41521
WHU,2016-08-21,2016-17,1,BOU,Bournemouth,1,0,1,0,56977
WHU,2016-08-28,2016-17,0,MCI,Manchester City,1,3,-2,0,54008
WHU,2016-09-10,2016-17,1,WAT,Watford,2,4,-2,0,56974
WHU,2016-09-17,2016-17,0,WBA,West Bromwich Albion,2,4,-2,0,22209
WHU,2016-09-25,2016-17,1,SOU,Southampton,0,3,-3,0,56864
WHU,2016-10-01,2016-17,1,MID,Middlesbrough,1,1,0,0,56945
WHU,2016-10-15,2016-17,0,CRY,Crystal Palace,1,0,1,1,25643
WHU,2016-10-22,2016-17,1,SUN,Sunderland,1,0,1,0,56985
WHU,2016-10-30,2016-17,0,EVE,Everton,0,2,-2,0,39574
WHU,2016-11-05,2016-17,1,STO,Stoke City,1,1,0,0,56970
WHU,2016-11-19,2016-17,0,TOT,Tottenham Hotspur,2,3,-1,1,31212
WHU,2016-11-27,2016-17,0,MUN,Manchester United,1,1,0,0,75313
WHU,2016-12-03,2016-17,1,ARS,Arsenal,1,5,-4,0,56980
WHU,2016-12-11,2016-17,0,LIV,Liverpool,2,2,0,0,53068
WHU,2016-12-14,2016-17,1,BUR,Burnley,1,0,1,0,56990
WHU,2016-12-17,2016-17,1,HUL,Hull City,1,0,1,0,56952
WHU,2016-12-26,2016-17,0,SWA,Swansea City,4,1,3,0,20757
WHU,2016-12-31,2016-17,0,LEI,Leicester City,0,1,-1,0,32060
WHU,2017-01-02,2016-17,1,MUN,Manchester United,0,2,-2,1,56996
WHU,2017-01-14,2016-17,1,CRY,Crystal Palace,3,0,3,0,56984
WHU,2017-01-21,2016-17,0,MID,Middlesbrough,3,1,2,0,30848
WHU,2017-02-01,2016-17,1,MCI,Manchester City,0,4,-4,0,56980
WHU,2017-02-04,2016-17,0,SOU,Southampton,3,1,2,0,31891
WHU,2017-02-11,2016-17,1,WBA,West Bromwich Albion,2,2,0,0,56983
WHU,2017-02-25,2016-17,0,WAT,Watford,1,1,0,1,20702
WHU,2017-03-06,2016-17,1,CHE,Chelsea,1,2,-1,0,56984
WHU,2017-03-11,2016-17,0,BOU,Bournemouth,2,3,-1,0,11369
WHU,2017-03-18,2016-17,1,LEI,Leicester City,2,3,-1,0,56979
WHU,2017-04-01,2016-17,0,HUL,Hull City,1,2,-1,0,20820
WHU,2017-04-05,2016-17,0,ARS,Arsenal,0,3,-3,0,59961
WHU,2017-04-08,2016-17,1,SWA,Swansea City,1,0,1,0,56973
WHU,2017-04-15,2016-17,0,SUN,Sunderland,2,2,0,1,40168
WHU,2017-04-22,2016-17,1,EVE,Everton,0,0,0,0,56971
WHU,2017-04-29,2016-17,0,STO,Stoke City,0,0,0,0,27628
WHU,2017-05-05,2016-17,1,TOT,Tottenham Hotspur,1,0,1,0,56992
WHU,2017-05-14,2016-17,1,LIV,Liverpool,0,4,-4,0,56985
WHU,2017-05-21,2016-17,0,BUR,Burnley,2,1,1,0,21634
WHU,2017-08-13,2017-18,0,MUN,Manchester United,0,4,-4,0,74928
WHU,2017-08-19,2017-18,0,SOU,Southampton,2,3,-1,1,31424
WHU,2017-08-26,2017-18,0,NEW,Newcastle United,0,3,-3,0,52093
WHU,2017-09-11,2017-18,1,HUD,Huddersfield Town,2,0,2,0,56977
WHU,2017-09-16,2017-18,0,WBA,West Bromwich Albion,0,0,0,0,24942
WHU,2017-09-23,2017-18,1,TOT,Tottenham Hotspur,2,3,-1,0,56988
WHU,2017-09-30,2017-18,1,SWA,Swansea City,1,0,1,0,56922
WHU,2017-10-14,2017-18,0,BUR,Burnley,1,1,0,1,20945
WHU,2017-10-20,2017-18,1,BHA,Brighton and Hove Albion,0,3,-3,0,56977
WHU,2017-10-28,2017-18,0,CRY,Crystal Palace,2,2,0,0,25242
WHU,2017-11-04,2017-18,1,LIV,Liverpool,1,4,-3,0,56961
WHU,2017-11-19,2017-18,0,WAT,Watford,0,2,-2,0,20018
WHU,2017-11-24,2017-18,1,LEI,Leicester City,1,1,0,0,56897
WHU,2017-11-29,2017-18,0,EVE,Everton,0,4,-4,0,38242
WHU,2017-12-03,2017-18,0,MCI,Manchester City,1,2,-1,0,54203
WHU,2017-12-09,2017-18,1,CHE,Chelsea,1,0,1,0,56953
WHU,2017-12-13,2017-18,1,ARS,Arsenal,0,0,0,0,56921
WHU,2017-12-16,2017-18,0,STO,Stoke City,3,0,3,0,29265
WHU,2017-12-23,2017-18,1,NEW,Newcastle United,2,3,-1,0,56955
WHU,2017-12-26,2017-18,0,BOU,Bournemouth,3,3,0,0,10596
WHU,2018-01-02,2017-18,1,WBA,West Bromwich Albion,2,1,1,0,56888
WHU,2018-01-04,2017-18,0,TOT,Tottenham Hotspur,1,1,0,0,50034
WHU,2018-01-13,2017-18,0,HUD,Huddersfield Town,4,1,3,0,24105
WHU,2018-01-20,2017-18,1,BOU,Bournemouth,1,1,0,0,56948
WHU,2018-01-30,2017-18,1,CRY,Crystal Palace,1,1,0,0,56911
WHU,2018-02-03,2017-18,0,BHA,Brighton and Hove Albion,1,3,-2,0,30589
WHU,2018-02-10,2017-18,1,WAT,Watford,2,0,2,0,56197
WHU,2018-02-24,2017-18,0,LIV,Liverpool,1,4,-3,0,53256
WHU,2018-03-03,2017-18,0,SWA,Swansea City,1,4,-3,0,20829
WHU,2018-03-10,2017-18,1,BUR,Burnley,0,3,-3,0,56904
WHU,2018-03-31,2017-18,1,SOU,Southampton,3,0,3,0,56882
WHU,2018-04-08,2017-18,0,CHE,Chelsea,1,1,0,0,41324
WHU,2018-04-16,2017-18,1,STO,Stoke City,1,1,0,0,56795
WHU,2018-04-22,2017-18,0,ARS,Arsenal,1,4,-3,0,59422
WHU,2018-04-29,2017-18,1,MCI,Manchester City,1,4,-3,0,56904
WHU,2018-05-05,2017-18,0,LEI,Leicester City,2,0,2,0,32013
WHU,2018-05-10,2017-18,1,MUN,Manchester United,0,0,0,0,56902
WHU,2018-05-13,2017-18,1,EVE,Everton,3,1,2,0,56926
WHU,2018-08-12,2018-19,0,LIV,Liverpool,0,4,-4,0,53235
WHU,2018-08-18,2018-19,1,BOU,Bournemouth,1,2,-1,0,56888
WHU,2018-08-25,2018-19,0,ARS,Arsenal,1,3,-2,0,59830
WHU,2018-09-01,2018-19,1,WOL,Wolverhampton Wanderers,0,1,-1,0,56947
WHU,2018-09-16,2018-19,0,EVE,Everton,3,1,2,0,39161
WHU,2018-09-23,2018-19,1,CHE,Chelsea,0,0,0,0,56875
WHU,2018-09-29,2018-19,1,MUN,Manchester United,3,1,2,0,56938
WHU,2018-10-05,2018-19,0,BHA,Brighton and Hove Albion,0,1,-1,0,30544
WHU,2018-10-20,2018-19,1,TOT,Tottenham Hotspur,0,1,-1,0,56921
WHU,2018-10-27,2018-19,0,LEI,Leicester City,1,1,0,1,31848
WHU,2018-11-03,2018-19,1,BUR,Burnley,4,2,2,0,56862
WHU,2018-11-10,2018-19,0,HUD,Huddersfield Town,1,1,0,0,24069
WHU,2018-11-24,2018-19,1,MCI,Manchester City,0,4,-4,0,56886
WHU,2018-12-01,2018-19,0,NEW,Newcastle United,3,0,3,0,51853
WHU,2018-12-04,2018-19,1,CAR,Cardiff City,3,1,2,0,56811
WHU,2018-12-08,2018-19,1,CRY,Crystal Palace,3,2,1,0,56995
WHU,2018-12-15,2018-19,0,FUL,Fulham,2,0,2,0,24081
WHU,2018-12-22,2018-19,1,WAT,Watford,0,2,-2,0,56833
WHU,2018-12-27,2018-19,0,SOU,Southampton,2,1,1,0,31654
WHU,2018-12-30,2018-19,0,BUR,Burnley,0,2,-2,0,20933
WHU,2019-01-02,2018-19,1,BHA,Brighton and Hove Albion,2,2,0,0,59870
WHU,2019-01-12,2018-19,1,ARS,Arsenal,1,0,1,0,59946
WHU,2019-01-19,2018-19,0,BOU,Bournemouth,0,2,-2,0,10495
WHU,2019-01-29,2018-19,0,WOL,Wolverhampton Wanderers,0,3,-3,0,31122
WHU,2019-02-04,2018-19,1,LIV,Liverpool,1,1,0,0,59903
WHU,2019-02-09,2018-19,0,CRY,Crystal Palace,1,1,0,0,25552
WHU,2019-02-22,2018-19,1,FUL,Fulham,3,1,2,0,59950
WHU,2019-02-27,2018-19,0,MCI,Manchester City,0,1,-1,0,53528
WHU,2019-03-02,2018-19,1,NEW,Newcastle United,2,0,2,0,59910
WHU,2019-03-09,2018-19,0,CAR,Cardiff City,0,2,-2,0,32458
WHU,2019-03-16,2018-19,1,HUD,Huddersfield Town,4,3,1,0,59931
WHU,2019-03-30,2018-19,1,EVE,Everton,0,2,-2,0,59988
WHU,2019-04-08,2018-19,0,CHE,Chelsea,0,2,-2,0,40537
WHU,2019-04-13,2018-19,0,MUN,Manchester United,1,2,-1,0,74478
WHU,2019-04-20,2018-19,1,LEI,Leicester City,2,2,0,0,59960
WHU,2019-04-27,2018-19,0,TOT,Tottenham Hotspur,1,0,1,0,60043
WHU,2019-05-04,2018-19,1,SOU,Southampton,3,0,3,0,59961
WHU,2019-05-12,2018-19,0,WAT,Watford,4,1,3,0,20067
WHU,2019-08-10,2019-20,1,MCI,Manchester City,0,5,-5,0,59870
WHU,2019-08-17,2019-20,0,BHA,Brighton and Hove Albion,1,1,0,0,30459
WHU,2019-08-24,2019-20,0,WAT,Watford,3,1,2,0,20035
WHU,2019-08-31,2019-20,1,NOR,Norwich City,2,0,2,0,59950
WHU,2019-09-16,2019-20,0,AVL,Aston Villa,0,0,0,1,42010
WHU,2019-09-22,2019-20,1,MUN,Manchester United,2,0,2,0,59936
WHU,2019-09-28,2019-20,0,BOU,Bournemouth,2,2,0,0,10729
WHU,2019-10-05,2019-20,1,CRY,Crystal Palace,1,2,-1,0,59912
WHU,2019-10-19,2019-20,0,EVE,Everton,0,2,-2,0,39263
WHU,2019-10-26,2019-20,1,SHU,Sheffield United,1,1,0,0,59878
WHU,2019-11-02,2019-20,1,NEW,Newcastle United,2,3,-1,0,59907
WHU,2019-11-09,2019-20,0,BUR,Burnley,0,3,-3,0,20255
WHU,2019-11-23,2019-20,1,TOT,Tottenham Hotspur,2,3,-1,0,59930
WHU,2019-11-30,2019-20,0,CHE,Chelsea,1,0,1,0,40595
WHU,2019-12-04,2019-20,0,WOL,Wolverhampton Wanderers,0,2,-2,0,31217
WHU,2019-12-09,2019-20,1,ARS,Arsenal,1,3,-2,0,59936
WHU,2019-12-14,2019-20,0,SOU,Southampton,1,0,1,0,27701
WHU,2019-12-26,2019-20,0,CRY,Crystal Palace,1,2,-1,0,25462
WHU,2019-12-28,2019-20,1,LEI,Leicester City,1,2,-1,0,59519
WHU,2020-01-01,2019-20,1,BOU,Bournemouth,4,0,4,0,59917
WHU,2020-01-10,2019-20,0,SHU,Sheffield United,0,1,-1,0,30124
WHU,2020-01-18,2019-20,1,EVE,Everton,1,1,0,0,59915
WHU,2020-01-22,2019-20,0,LEI,Leicester City,1,4,-3,0,31968
WHU,2020-01-29,2019-20,1,LIV,Liverpool,0,2,-2,0,59959
WHU,2020-02-01,2019-20,1,BHA,Brighton and Hove Albion,3,3,0,0,59952
WHU,2020-02-19,2019-20,0,MCI,Manchester City,0,2,-2,0,52159
WHU,2020-02-24,2019-20,0,LIV,Liverpool,2,3,-1,0,53313
WHU,2020-02-29,2019-20,1,SOU,Southampton,3,1,2,0,59962
WHU,2020-03-07,2019-20,0,ARS,Arsenal,0,1,-1,0,60335
WHU,2020-06-20,2019-20,1,WOL,Wolverhampton Wanderers,0,2,-2,0,
WHU,2020-06-23,2019-20,0,TOT,Tottenham Hotspur,0,2,-2,0,
WHU,2020-07-01,2019-20,1,CHE,Chelsea,3,2,1,0,
WHU,2020-07-05,2019-20,0,NEW,Newcastle United,2,2,0,0,
WHU,2020-07-08,2019-20,1,BUR,Burnley,0,1,-1,0,
WHU,2020-07-11,2019-20,0,NOR,Norwich City,4,0,4,0,
WHU,2020-07-17,2019-20,1,WAT,Watford,3,1,2,0,
WHU,2020-07-22,2019-20,0,MUN,Manchester United,1,1,0,0,
WHU,2020-07-26,2019-20,1,AVL,Aston Villa,1,1,0,0,
WHU,2020-09-12,2020-21,1,NEW,Newcastle United,0,2,-2,0,
WHU,2020-09-19,2020-21,0,ARS,Arsenal,1,2,-1,0,
WHU,2020-09-27,2020-21,1,WOL,Wolverhampton Wanderers,4,0,4,0,
WHU,2020-10-04,2020-21,0,LEI,Leicester City,3,0,3,0,
WHU,2020-10-18,2020-21,0,TOT,Tottenham Hotspur,3,3,0,0,
WHU,2020-10-24,2020-21,1,MCI,Manchester City,1,1,0,0,
WHU,2020-10-31,2020-21,0,LIV,Liverpool,1,2,-1,0,
WHU,2020-11-07,2020-21,1,FUL,Fulham,1,0,1,0,
WHU,2020-11-22,2020-21,0,SHU,Sheffield United,1,0,1,0,
WHU,2020-11-30,2020-21,1,AVL,Aston Villa,2,1,1,0,
WHU,2020-12-05,2020-21,1,MUN,Manchester United,1,3,-2,0,
WHU,2020-12-11,2020-21,0,LEE,Leeds United,2,1,1,0,
WHU,2020-12-16,2020-21,1,CRY,Crystal Palace,1,1,0,0,
WHU,2020-12-21,2020-21,0,CHE,Chelsea,0,3,-3,0,
WHU,2020-12-27,2020-21,1,BHA,Brighton and Hove Albion,2,2,0,0,
WHU,2020-12-29,2020-21,0,SOU,Southampton,0,0,0,0,
WHU,2021-01-01,2020-21,0,EVE,Everton,1,0,1,0,
WHU,2021-01-16,2020-21,1,BUR,Burnley,1,0,1,0,
WHU,2021-01-19,2020-21,1,WBA,West Bromwich Albion,2,1,1,0,
WHU,2021-01-26,2020-21,0,CRY,Crystal Palace,3,2,1,0,
WHU,2021-01-31,2020-21,1,LIV,Liverpool,1,3,-2,0,
WHU,2021-02-03,2020-21,0,AVL,Aston Villa,3,1,2,0,
WHU,2021-02-06,2020-21,0,FUL,Fulham,0,0,0,1,
WHU,2021-02-15,2020-21,1,SHU,Sheffield United,3,0,3,0,
WHU,2021-02-21,2020-21,1,TOT,Tottenham Hotspur,2,1,1,0,
WHU,2021-02-27,2020-21,0,MCI,Manchester City,1,2,-1,0,
WHU,2021-03-08,2020-21,1,LEE,Leeds United,2,0,2,0,
WHU,2021-03-14,2020-21,0,MUN,Manchester United,0,1,-1,0,
WHU,2021-03-21,2020-21,1,ARS,Arsenal,3,3,0,0,
WHU,2021-04-05,2020-21,0,WOL,Wolverhampton Wanderers,3,2,1,0,
WHU,2021-04-11,2020-21,1,LEI,Leicester City,3,2,1,0,
WHU,2021-04-17,2020-21,0,NEW,Newcastle United,2,3,-1,1,
WHU,2021-04-24,2020-21,1,CHE,Chelsea,0,1,-1,1,
WHU,2021-05-03,2020-21,0,BUR,Burnley,2,1,1,0,
WHU,2021-05-09,2020-21,1,EVE,Everton,0,1,-1,0,
WHU,2021-05-15,2020-21,0,BHA,Brighton and Hove Albion,1,1,0,0,
WHU,2021-05-19,2020-21,0,WBA,West Bromwich Albion,3,1,2,0,
WHU,2021-05-23,2020-21,1,SOU,Southampton,3,0,3,0,
WHU,2021-08-15,2021-22,0,NEW,Newcastle United,4,2,2,0,50673
WHU,2021-08-23,2021-22,1,LEI,Leicester City,4,1,3,0,59901
WHU,2021-08-28,2021-22,1,CRY,Crystal Palace,2,2,0,0,59751
WHU,2021-09-11,2021-22,0,SOU,Southampton,0,0,0,1,
WHU,2021-09-19,2021-22,1,MUN,Manchester United,1,2,-1,0,59958
WHU,2021-09-25,2021-22,0,LEE,Leeds United,2,1,1,0,36417
WHU,2021-10-03,2021-22,1,BRE,Brentford,1,2,-1,0,49940
WHU,2021-10-17,2021-22,0,EVE,Everton,1,0,1,0,39132
WHU,2021-10-24,2021-22,1,TOT,Tottenham Hotspur,1,0,1,0,59924
WHU,2021-10-31,2021-22,0,AVL,Aston Villa,4,1,3,0,41874
WHU,2021-11-07,2021-22,1,LIV,Liverpool,3,2,1,0,59909
WHU,2021-11-20,2021-22,0,WOL,Wolverhampton Wanderers,0,1,-1,0,30667
WHU,2021-11-28,2021-22,0,MCI,Manchester City,1,2,-1,0,53245
WHU,2021-12-01,2021-22,1,BHA,Brighton and Hove Albion,1,1,0,0,59626
WHU,2021-12-04,2021-22,1,CHE,Chelsea,3,2,1,0,59942
WHU,2021-12-12,2021-22,0,BUR,Burnley,0,0,0,0,18065
WHU,2021-12-15,2021-22,0,ARS,Arsenal,0,2,-2,1,59777
WHU,2021-12-26,2021-22,1,SOU,Southampton,2,3,-1,0,41027
WHU,2021-12-28,2021-22,0,WAT,Watford,4,1,3,0,20073
WHU,2022-01-01,2021-22,0,CRY,Crystal Palace,3,2,1,0,24351
WHU,2022-01-12,2021-22,1,NOR,Norwich City,2,0,2,0,59775
WHU,2022-01-16,2021-22,1,LEE,Leeds United,2,3,-1,0,59951
WHU,2022-01-22,2021-22,0,MUN,Manchester United,0,1,-1,0,73130
WHU,2022-02-08,2021-22,1,WAT,Watford,1,0,1,0,59581
WHU,2022-02-13,2021-22,0,LEI,Leicester City,2,2,0,0,32061
WHU,2022-02-19,2021-22,1,NEW,Newcastle United,1,1,0,0,59949
WHU,2022-02-27,2021-22,1,WOL,Wolverhampton Wanderers,1,0,1,0,59946
WHU,2022-03-05,2021-22,0,LIV,Liverpool,0,1,-1,0,53059
WHU,2022-03-13,2021-22,1,AVL,Aston Villa,2,1,1,0,59957
WHU,2022-03-20,2021-22,0,TOT,Tottenham Hotspur,1,3,-2,0,58685
WHU,2022-04-03,2021-22,1,EVE,Everton,2,1,1,0,59953
WHU,2022-04-10,2021-22,0,BRE,Brentford,0,2,-2,0,17032
WHU,2022-04-17,2021-22,1,BUR,Burnley,1,1,0,0,59958
WHU,2022-04-24,2021-22,0,CHE,Chelsea,0,1,-1,1,32231
WHU,2022-05-01,2021-22,1,ARS,Arsenal,1,2,-1,0,59959
WHU,2022-05-08,2021-22,0,NOR,Norwich City,4,0,4,0,26428
WHU,2022-05-15,2021-22,1,MCI,Manchester City,2,2,0,0,59972
WHU,2022-05-22,2021-22,0,BHA,Brighton and Hove Albion,1,3,-2,0,31604
WHU,2022-08-07,2022-23,1,MCI,Manchester City,0,2,-2,0,62443
WHU,2022-08-14,2022-23,0,NFO,Nottingham Forest,0,1,-1,0,29281
WHU,2022-08-21,2022-23,1,BHA,Brighton and Hove Albion,0,2,-2,0,62449
WHU,2022-08-28,2022-23,0,AVL,Aston Villa,1,0,1,0,41796
WHU,2022-08-31,2022-23,1,TOT,Tottenham Hotspur,1,1,0,0,62450
WHU,2022-09-03,2022-23,0,CHE,Chelsea,1,2,-1,0,39923
WHU,2022-09-18,2022-23,0,EVE,Everton,0,1,-1,0,39298
WHU,2022-10-01,2022-23,1,WOL,Wolverhampton Wanderers,2,0,2,0,62444
WHU,2022-10-09,2022-23,1,FUL,Fulham,3,1,2,0,62454
WHU,2022-10-16,2022-23,0,SOU,Southampton,1,1,0,0,29159
WHU,2022-10-19,2022-23,0,LIV,Liverpool,0,1,-1,0,53346
WHU,2022-10-24,2022-23,1,BOU,Bournemouth,2,0,2,0,62447
WHU,2022-10-30,2022-23,0,MUN,Manchester United,0,1,-1,0,73682
WHU,2022-11-06,2022-23,1,CRY,Crystal Palace,1,2,-1,0,62451
WHU,2022-11-12,2022-23,1,LEI,Leicester City,0,2,-2,0,62459
WHU,2022-12-26,2022-23,0,ARS,Arsenal,1,3,-2,0,60125
WHU,2022-12-30,2022-23,1,BRE,Brentford,0,2,-2,0,62467
WHU,2023-01-04,2022-23,0,LEE,Leeds United,2,2,0,0,36173
WHU,2023-01-14,2022-23,0,WOL,Wolverhampton Wanderers,0,1,-1,0,31511
WHU,2023-01-21,2022-23,1,EVE,Everton,2,0,2,0,62470
WHU,2023-02-04,2022-23,0,NEW,Newcastle United,1,1,0,0,52256
WHU,2023-02-11,2022-23,1,CHE,Chelsea,1,1,0,0,62471
WHU,2023-02-19,2022-23,0,TOT,Tottenham Hotspur,0,2,-2,0,61476
WHU,2023-02-25,2022-23,1,NFO,Nottingham Forest,4,0,4,0,62469
WHU,2023-03-04,2022-23,0,BHA,Brighton and Hove Albion,0,4,-4,0,31523
WHU,2023-03-12,2022-23,1,AVL,Aston Villa,1,1,0,0,62472
WHU,2023-04-02,2022-23,1,SOU,Southampton,1,0,1,0,62465
WHU,2023-04-05,2022-23,1,NEW,Newcastle United,1,5,-4,0,62470
WHU,2023-04-08,2022-23,0,FUL,Fulham,1,0,1,0,24491
WHU,2023-04-16,2022-23,1,ARS,Arsenal,2,2,0,0,62475
WHU,2023-04-23,2022-23,0,BOU,Bournemouth,4,0,4,0,10465
WHU,2023-04-26,2022-23,1,LIV,Liverpool,1,2,-1,0,62473
WHU,2023-04-29,2022-23,0,CRY,Crystal Palace,3,4,-1,0,25148
WHU,2023-05-03,2022-23,0,MCI,Manchester City,0,3,-3,0,53305
WHU,2023-05-07,2022-23,1,MUN,Manchester United,1,0,1,0,62477
WHU,2023-05-14,2022-23,0,BRE,Brentford,0,2,-2,0,17075
WHU,2023-05-21,2022-23,1,LEE,Leeds United,3,1,2,0,62478
WHU,2023-05-28,2022-23,0,LEI,Leicester City,1,2,-1,0,32183
WHU,2023-08-12,2023-24,0,BOU,Bournemouth,1,1,0,0,
WHU,2023-08-20,2023-24,1,CHE,Chelsea,3,1,2,1,62470
WHU,2023-08-26,2023-24,0,BHA,Brighton and Hove Albion,3,1,2,0,31508
WHU,2023-09-01,2023-24,0,LUT,Luton Town,2,1,1,0,10802
WHU,2023-09-16,2023-24,1,MCI,Manchester City,1,3,-2,0,62475
WHU,2023-09-24,2023-24,0,LIV,Liverpool,1,3,-2,0,50136
WHU,2023-09-30,2023-24,1,SHU,Sheffield United,2,0,2,0,62459
WHU,2023-10-08,2023-24,1,NEW,Newcastle United,2,2,0,0,
WHU,2023-10-22,2023-24,0,AVL,Aston Villa,1,4,-3,0,41734
WHU,2023-10-29,2023-24,1,EVE,Everton,0,1,-1,0,62469
WHU,2023-11-04,2023-24,0,BRE,Brentford,2,3,-1,0,17103
WHU,2023-11-12,2023-24,1,NFO,Nottingham Forest,3,2,1,0,62470
WHU,2023-11-25,2023-24,0,BUR,Burnley,2,1,1,0,21319
WHU,2023-12-03,2023-24,1,CRY,Crystal Palace,1,1,0,0,62459
WHU,2023-12-07,2023-24,0,TOT,Tottenham Hotspur,2,1,1,0,60733
WHU,2023-12-10,2023-24,0,FUL,Fulham,0,5,-5,0,23988
WHU,2023-12-17,2023-24,1,WOL,Wolverhampton Wanderers,3,0,3,0,62455
WHU,2023-12-23,2023-24,1,MUN,Manchester United,2,0,2,0,64472
WHU,2023-12-28,2023-24,0,ARS,Arsenal,2,0,2,0,60261
WHU,2024-01-02,2023-24,1,BHA,Brighton and Hove Albion,0,0,0,0,62462
WHU,2024-01-21,2023-24,0,SHU,Sheffield United,2,2,0,1,29164
WHU,2024-02-01,2023-24,1,BOU,Bournemouth,1,1,0,0,62451
WHU,2024-02-04,2023-24,0,MUN,Manchester United,0,3,-3,0,73612
WHU,2024-02-11,2023-24,1,ARS,Arsenal,0,6,-6,0,62474
WHU,2024-02-17,2023-24,0,NFO,Nottingham Forest,0,2,-2,1,29490
WHU,2024-02-26,2023-24,1,BRE,Brentford,4,2,2,0,62450
WHU,2024-03-02,2023-24,0,EVE,Everton,3,1,2,0,39262
WHU,2024-03-10,2023-24,1,BUR,Burnley,2,2,0,0,62441
WHU,2024-03-17,2023-24,1,AVL,Aston Villa,1,1,0,0,62461
WHU,2024-03-30,2023-24,0,NEW,Newcastle United,3,4,-1,0,52199
WHU,2024-04-02,2023-24,1,TOT,Tottenham Hotspur,1,1,0,0,62469
WHU,2024-04-06,2023-24,0,WOL,Wolverhampton Wanderers,2,1,1,0,31504
WHU,2024-04-14,2023-24,1,FUL,Fulham,0,2,-2,0,62459
WHU,2024-04-21,2023-24,0,CRY,Crystal Palace,2,5,-3,0,25145
WHU,2024-04-27,2023-24,1,LIV,Liverpool,2,2,0,0,62474
WHU,2024-05-05,2023-24,0,CHE,Chelsea,0,5,-5,0,39295
WHU,2024-05-11,2023-24,1,LUT,Luton Town,3,1,2,0,62475
WHU,2024-05-19,2023-24,0,MCI,Manchester City,1,3,-2,0,55097
WHU,2024-08-17,2024-25,1,AVL,Aston Villa,1,2,-1,0,62463
WHU,2024-08-24,2024-25,0,CRY,Crystal Palace,2,0,2,0,25099
WHU,2024-08-31,2024-25,1,MCI,Manchester City,1,3,-2,0,62469
WHU,2024-09-14,2024-25,0,FUL,Fulham,1,1,0,0,26528
WHU,2024-09-21,2024-25,1,CHE,Chelsea,0,3,-3,0,62473
WHU,2024-09-28,2024-25,0,BRE,Brentford,1,1,0,0,17050
WHU,2024-10-05,2024-25,1,IPS,Ipswich Town,4,1,3,0,62467
WHU,2024-10-19,2024-25,0,TOT,Tottenham Hotspur,1,4,-3,1,61381
WHU,2024-10-27,2024-25,1,MUN,Manchester United,2,1,1,0,62474
WHU,2024-11-02,2024-25,0,NFO,Nottingham Forest,0,3,-3,1,30112
WHU,2024-11-09,2024-25,1,EVE,Everton,0,0,0,0,62463
WHU,2024-11-25,2024-25,0,NEW,Newcastle United,2,0,2,0,52094
WHU,2024-11-30,2024-25,1,ARS,Arsenal,2,5,-3,0,62475
WHU,2024-12-03,2024-25,0,LEI,Leicester City,1,3,-2,0,30947
WHU,2024-12-09,2024-25,1,WOL,Wolverhampton Wanderers,2,1,1,0,62435
WHU,2024-12-16,2024-25,0,BOU,Bournemouth,1,1,0,0,11204
WHU,2024-12-21,2024-25,1,BHA,Brighton and Hove Albion,1,1,0,0,62460
WHU,2024-12-26,2024-25,0,SOU,Southampton,1,0,1,0,31059
WHU,2024-12-29,2024-25,1,LIV,Liverpool,0,5,-5,0,62476
WHU,2025-01-04,2024-25,0,MCI,Manchester City,1,4,-3,0,52737
WHU,2025-01-14,2024-25,1,FUL,Fulham,3,2,1,0,62456
WHU,2025-01-18,2024-25,1,CRY,Crystal Palace,0,2,-2,1,62469
WHU,2025-01-26,2024-25,0,AVL,Aston Villa,1,1,0,0,41628
WHU,2025-02-03,2024-25,0,CHE,Chelsea,1,2,-1,0,39459
WHU,2025-02-15,2024-25,1,BRE,Brentford,0,1,-1,0,62467
WHU,2025-02-22,2024-25,0,ARS,Arsenal,1,0,1,0,60262
WHU,2025-02-27,2024-25,1,LEI,Leicester City,2,0,2,0,62455
WHU,2025-03-10,2024-25,1,NEW,Newcastle United,0,1,-1,0,62463
WHU,2025-03-15,2024-25,0,EVE,Everton,1,1,0,0,39343
WHU,2025-04-01,2024-25,0,WOL,Wolverhampton Wanderers,0,1,-1,0,30537
WHU,2025-04-05,2024-25,1,BOU,Bournemouth,2,2,0,0,62459
WHU,2025-04-13,2024-25,0,LIV,Liverpool,1,2,-1,0,60376
WHU,2025-04-19,2024-25,1,SOU,Southampton,1,1,0,0,62461
WHU,2025-04-26,2024-25,0,BHA,Brighton and Hove Albion,2,3,-1,0,31499
WHU,2025-05-04,2024-25,1,TOT,Tottenham Hotspur,1,1,0,0,62468
WHU,2025-05-11,2024-25,0,MUN,Manchester United,2,0,2,0,73804
WHU,2025-05-18,2024-25,1,NFO,Nottingham Forest,1,2,-1,0,62466
WHU,2025-05-25,2024-25,0,IPS,Ipswich Town,3,1,2,0,29771
WHU,2025-08-16,2025-26,0,SUN,Sunderland,0,3,-3,0,46233
WHU,2025-08-22,2025-26,1,CHE,Chelsea,1,5,-4,0,62462
WHU,2025-08-31,2025-26,0,NFO,Nottingham Forest,3,0,3,0,30215
WHU,2025-09-13,2025-26,1,TOT,Tottenham Hotspur,0,3,-3,1,62459
WHU,2025-09-20,2025-26,1,CRY,Crystal Palace,1,2,-1,0,62455
WHU,2025-09-29,2025-26,0,EVE,Everton,1,1,0,0,51890
WHU,2025-10-04,2025-26,0,ARS,Arsenal,0,2,-2,0,60181
WHU,2025-10-20,2025-26,1,BRE,Brentford,0,2,-2,0,62452
WHU,2025-10-24,2025-26,0,LEE,Leeds United,1,2,-1,0,36788
WHU,2025-11-02,2025-26,1,NEW,Newcastle United,3,1,2,0,62441
WHU,2025-11-08,2025-26,1,BUR,Burnley,3,2,1,0,62449
WHU,2025-11-22,2025-26,0,BOU,Bournemouth,2,2,0,0,11216
WHU,2025-11-30,2025-26,1,LIV,Liverpool,0,2,-2,1,62469
WHU,2025-12-04,2025-26,0,MUN,Manchester United,1,1,0,0,73938
WHU,2025-12-07,2025-26,0,BHA,Brighton and Hove Albion,1,1,0,0,31293
WHU,2025-12-14,2025-26,1,AVL,Aston Villa,2,3,-1,0,62447
WHU,2025-12-20,2025-26,0,MCI,Manchester City,0,3,-3,0,52454
WHU,2025-12-27,2025-26,1,FUL,Fulham,0,1,-1,0,62464
WHU,2025-12-30,2025-26,1,BHA,Brighton and Hove Albion,2,2,0,0,62438
WHU,2026-01-03,2025-26,0,WOL,Wolverhampton Wanderers,0,3,-3,0,29874
WHU,2026-01-06,2025-26,1,NFO,Nottingham Forest,1,2,-1,0,62429
WHU,2026-01-17,2025-26,0,TOT,Tottenham Hotspur,2,1,1,0,60857
WHU,2026-01-24,2025-26,1,SUN,Sunderland,3,1,2,0,62456
WHU,2026-01-31,2025-26,0,CHE,Chelsea,2,3,-1,1,39430
WHU,2026-02-07,2025-26,0,BUR,Burnley,2,0,2,0,21273
WHU,2026-02-10,2025-26,1,MUN,Manchester United,1,1,0,0,62473
WHU,2026-02-21,2025-26,1,BOU,Bournemouth,0,0,0,0,62437
WHU,2026-02-28,2025-26,0,LIV,Liverpool,2,5,-3,0,60425
WHU,2026-03-04,2025-26,0,FUL,Fulham,1,0,1,0,27191
WHU,2026-03-14,2025-26,1,MCI,Manchester City,1,1,0,0,62459
WHU,2026-03-22,2025-26,0,AVL,Aston Villa,0,2,-2,0,42130
WHU,2026-04-10,2025-26,1,WOL,Wolverhampton Wanderers,4,0,4,0,62457
WHU,2026-04-20,2025-26,0,CRY,Crystal Palace,0,0,0,0,24974
WHU,2026-04-25,2025-26,1,EVE,Everton,2,1,1,0,62454
WHU,2026-05-02,2025-26,0,BRE,Brentford,0,3,-3,0,17194
WHU,2026-05-10,2025-26,1,ARS,Arsenal,0,1,-1,0,60429
WHU,2026-05-17,2025-26,0,NEW,Newcastle United,1,3,-2,0,52206
WHU,2026-05-24,2025-26,1,LEE,Leeds United,3,0,3,0,62471
`,M1=`-- Total wins by team across all seasons (home/away split)
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
to 'assets/data/wins.csv' (header, delimiter ',')`,H1=`-- Season-by-season team counts and matches per team
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
to 'assets/data/season_quality.csv' (header, delimiter ',')`,N1=`-- Average home attendance by team per season
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
to 'assets/data/attendance.csv' (header, delimiter ',')`,u1=`-- All-time Premier League table (P/W/D/L/points)
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
to 'assets/data/all_time_table.csv' (header, delimiter ',')`,R1=`-- Most recent run of 5+ consecutive wins within a single season, per team
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
to 'assets/data/five_game_streaks.csv' (header, delimiter ',')`,O1=`-- Longest winning streaks within a single season (11+ wins), one row per win game
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
to 'assets/data/big_win_streaks.csv' (header, delimiter ',')`,V1=`-- Longest calendar gap each team went between consecutive wins, across all seasons
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
to 'assets/data/longest_winless_gaps.csv' (header, delimiter ',')`,I1=`-- Most chaotic matches: 3 points per goal + 2 points per red card, top 50
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
to 'assets/data/most_chaotic_matches.csv' (header, delimiter ',')`,E1=`-- Share of each club's Premier League wins that finished 1-0 (home or away), clubs with 30+ wins
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
to 'assets/data/one_nil_wins.csv' (header, delimiter ',')`,y1=`-- Longest consecutive run of matches where each team led at half-time but failed to win
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
to 'assets/data/ht_lead_no_win_streaks.csv' (header, delimiter ',')`,B1=`-- Longest consecutive run of matches where each team was losing at half-time but came back to win
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
to 'assets/data/comeback_kings.csv' (header, delimiter ',')`,p1=`-- Teams with the most half-time comebacks (trailing at HT, then winning) in a single season, top 10
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
to 'assets/data/most_comebacks.csv' (header, delimiter ',')`,v1=`-- Managers with the most Premier League wins, aggregated across all their spells
-- (permanent + caretaker), from the Wikipedia managers list joined to match results.
copy (
    select
        rank() over (order by wins desc, win_pct desc, games desc) as rank,
        manager_name,
        wins,
        games,
        draws,
        losses,
        win_pct,
        points,
        goals_for,
        goals_against
    from (
        select
            manager_name,
            count(*) as games,
            sum(is_win) as wins,
            sum(case when result = 'draw' then 1 else 0 end) as draws,
            sum(case when result = 'loss' then 1 else 0 end) as losses,
            round(100.0 * sum(is_win) / count(*), 1) as win_pct,
            sum(points) as points,
            sum(goals_for) as goals_for,
            sum(goals_against) as goals_against
        from "premier_league"."main"."fct_manager_matches"
        where manager_name is not null
        group by manager_name
    )
    order by wins desc, win_pct desc, games desc, manager_name
)
to 'assets/data/manager_wins.csv' (header, delimiter ',')`,b1=`-- Manager timeline by club: one row per managerial spell (from the Wikipedia managers list),
-- used to draw the Gantt chart on the "Manager Timeline" page. Open-ended spells are extended
-- to today so their bars reach the present edge of the chart.
copy (
    select
        club_name as team_name,
        manager_name,
        from_date,
        case
            when until_date = date '9999-12-31' then current_date
            else until_date
        end as until_date,
        case when until_date = date '9999-12-31' then 1 else 0 end as present,
        role
    from "premier_league"."main"."fact_manager_dates"
    order by club_name, from_date
)
to 'assets/data/manager_timeline.csv' (header, delimiter ',')`,w1=`-- Per-match results for the team pages (/arsenal, /manchester-united, /liverpool,
-- /tottenham, /west-ham): one row per match for each profiled team, used to derive the
-- top-5 biggest wins, biggest defeats, most red cards and biggest home attendances.
-- Add a team_abbr to the IN list to profile it too.
copy (
    select
        team_abbr,
        kickoff_date,
        season_label,
        case when is_home then 1 else 0 end as is_home,
        opponent_abbr,
        opponent_name,
        goals_for,
        goals_against,
        goals_for - goals_against as goal_diff,
        red_cards,
        attendance
    from "premier_league"."main"."fct_team_matches"
    where team_abbr in ('ARS', 'MUN', 'LIV', 'TOT', 'WHU')
    order by team_abbr, kickoff_date, match_id
)
to 'assets/data/team_matches.csv' (header, delimiter ',')`;function t2(n,t){const e=new Date(n+"T00:00:00Z"),a=new Date(t+"T00:00:00Z");let o=a.getUTCFullYear()-e.getUTCFullYear();const i=new Date(e);i.setUTCFullYear(e.getUTCFullYear()+o),i>a&&(o-=1,i.setUTCFullYear(i.getUTCFullYear()-1));const d=Math.round((a.getTime()-i.getTime())/864e5);let h;return o>0&&d>0?h=`${o} ${o===1?"year":"years"} and ${d} ${d===1?"day":"days"}`:o>0?h=`${o} ${o===1?"year":"years"}`:h=`${d} ${d===1?"day":"days"}`,{label:h,years:o,days:d}}function r(n,t){return+(n[t]??0)}function F(n,t){return+(n[t]??0)}function L(n,t){return i0(n,t)}const a2=(()=>{const t=i0(r1)[0];return{total_matches:+t.total_matches,total_unique_teams:+t.total_unique_teams,total_goals:+t.total_goals,last_updated:t.last_updated}})(),r2=L(o1,n=>({team_abbr:n.team_abbr,team_name:n.team_name,home_wins:r(n,"home_wins"),away_wins:r(n,"away_wins"),total_wins:r(n,"total_wins")})),o2=L(s1,n=>({season_label:n.season_label,team_count:r(n,"team_count"),matches_played:r(n,"matches_played"),avg_matches_per_team:F(n,"avg_matches_per_team")})),s2=L(i1,n=>({season_label:n.season_label,team_abbr:n.team_abbr,team_name:n.team_name,avg_home_attendance:F(n,"avg_home_attendance")})),i2=L(l1,n=>({team_abbr:n.team_abbr,team_name:n.team_name,matches_played:r(n,"matches_played"),wins:r(n,"wins"),draws:r(n,"draws"),losses:r(n,"losses"),points:r(n,"points")})),l2=L(U1,n=>({team_name:n.team_name,season_label:n.season_label,streak_start:n.streak_start,streak_length:r(n,"streak_length"),opponents:n.opponents})),U2=L(d1,n=>({streak_id:r(n,"streak_id"),team_name:n.team_name,season_label:n.season_label,streak_length:r(n,"streak_length"),match_date:n.match_date,opponent_abbr:n.opponent_abbr,opponent_name:n.opponent_name,score:n.score})),d2=L(h1,n=>({team_name:n.team_name,team_abbr:n.team_abbr,start_date:n.start_date,end_date:n.end_date,gap_days:r(n,"gap_days"),matches_between:r(n,"matches_between")})),h2=L(A1,n=>({match_id:r(n,"match_id"),kickoff_date:n.kickoff_date,season_label:n.season_label,home_team_name:n.home_team_name,home_team_abbr:n.home_team_abbr,home_score:r(n,"home_score"),home_red_cards:r(n,"home_red_cards"),away_team_name:n.away_team_name,away_team_abbr:n.away_team_abbr,away_score:r(n,"away_score"),away_red_cards:r(n,"away_red_cards"),total_goals:r(n,"total_goals"),total_red_cards:r(n,"total_red_cards"),goals_points:r(n,"goals_points"),red_points:r(n,"red_points"),chaos_score:r(n,"chaos_score")})),A2=L(T1,n=>({team_name:n.team_name,team_abbr:n.team_abbr,total_wins:r(n,"total_wins"),home_1_0_wins:r(n,"home_1_0_wins"),away_1_0_wins:r(n,"away_1_0_wins"),one_nil_wins:r(n,"one_nil_wins"),pct_one_nil:F(n,"pct_one_nil")})),T2=L(L1,n=>({team_name:n.team_name,team_abbr:n.team_abbr,run_length:r(n,"run_length"),seasons:n.seasons,start_date:n.start_date,end_date:n.end_date,opponents:n.opponents})),L2=L(W1,n=>({team_name:n.team_name,team_abbr:n.team_abbr,run_length:r(n,"run_length"),seasons:n.seasons,start_date:n.start_date,end_date:n.end_date,opponents:n.opponents})),W2=L(m1,n=>({team_name:n.team_name,team_abbr:n.team_abbr,season_label:n.season_label,comeback_count:r(n,"comeback_count")})),m2=L(S1,n=>({rank:r(n,"rank"),manager_name:n.manager_name,wins:r(n,"wins"),games:r(n,"games"),draws:r(n,"draws"),losses:r(n,"losses"),win_pct:F(n,"win_pct"),points:r(n,"points"),goals_for:r(n,"goals_for"),goals_against:r(n,"goals_against")})),S2=L(c1,n=>({team_name:n.team_name,manager_name:n.manager_name,from_date:n.from_date,until_date:n.until_date,present:r(n,"present"),role:n.role})),c2=L(C1,n=>({team_abbr:n.team_abbr,kickoff_date:n.kickoff_date,season_label:n.season_label,is_home:r(n,"is_home"),opponent_abbr:n.opponent_abbr,opponent_name:n.opponent_name,goals_for:r(n,"goals_for"),goals_against:r(n,"goals_against"),goal_diff:r(n,"goal_diff"),red_cards:r(n,"red_cards"),attendance:n.attendance===""?null:r(n,"attendance")})),C2={wins:M1,quality:H1,attendance:N1,allTimeTable:u1,fiveGameStreaks:R1,bigWinStreaks:O1,longestWinlessGaps:V1,mostChaoticMatches:I1,oneNilWins:E1,htLeadNoWinStreaks:y1,comebackKings:B1,mostComebacks:p1,managerWins:v1,managerTimeline:b1,teamMatches:w1},g1=I({...O(),...R()},"VCardActions"),f1=V()({name:"VCardActions",props:g1(),setup(n,t){let{slots:e}=t;return J0({VBtn:{slim:!0,variant:"text"}}),w(()=>l(n.tag,{class:k(["v-card-actions",n.class]),style:_(n.style)},e)),{}}}),_1=I({opacity:[Number,String],...O(),...R()},"VCardSubtitle"),k1=V()({name:"VCardSubtitle",props:_1(),setup(n,t){let{slots:e}=t;return w(()=>l(n.tag,{class:k(["v-card-subtitle",n.class]),style:_([{"--v-card-subtitle-opacity":n.opacity},n.style])},e)),{}}}),P1=N0("v-card-title"),F1=I({appendAvatar:String,appendIcon:f,prependAvatar:String,prependIcon:f,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...O(),...a0(),...R()},"VCardItem"),D1=V()({name:"VCardItem",props:F1(),setup(n,t){let{slots:e}=t;return w(()=>{const a=!!(n.prependAvatar||n.prependIcon),o=!!(a||e.prepend),i=!!(n.appendAvatar||n.appendIcon),d=!!(i||e.append),h=!!(n.title!=null||e.title),c=!!(n.subtitle!=null||e.subtitle);return l(n.tag,{class:k(["v-card-item",n.class]),style:_(n.style)},{default:()=>[o&&v("div",{key:"prepend",class:"v-card-item__prepend"},[e.prepend?l(Q,{key:"prepend-defaults",disabled:!a,defaults:{VAvatar:{density:n.density,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon}}},e.prepend):v($,null,[n.prependAvatar&&l(z,{key:"prepend-avatar",density:n.density,image:n.prependAvatar},null),n.prependIcon&&l(q,{key:"prepend-icon",density:n.density,icon:n.prependIcon},null)])]),v("div",{class:"v-card-item__content"},[h&&l(P1,{key:"title"},{default:()=>[e.title?.()??Z(n.title)]}),c&&l(k1,{key:"subtitle"},{default:()=>[e.subtitle?.()??Z(n.subtitle)]}),e.default?.()]),d&&v("div",{key:"append",class:"v-card-item__append"},[e.append?l(Q,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:n.density,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon}}},e.append):v($,null,[n.appendIcon&&l(q,{key:"append-icon",density:n.density,icon:n.appendIcon},null),n.appendAvatar&&l(z,{key:"append-avatar",density:n.density,image:n.appendAvatar},null)])])]})}),{}}}),G1=I({opacity:[Number,String],...O(),...R()},"VCardText"),Y1=V()({name:"VCardText",props:G1(),setup(n,t){let{slots:e}=t;return w(()=>l(n.tag,{class:k(["v-card-text",n.class]),style:_([{"--v-card-text-opacity":n.opacity},n.style])},e)),{}}}),Q1=I({appendAvatar:String,appendIcon:f,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:f,ripple:{type:[Boolean,Object],default:!0},subtitle:{type:[String,Number,Boolean],default:void 0},text:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...P0(),...O(),...a0(),...k0(),..._0(),...f0(),...g0(),...w0(),...b0(),...v0(),...R(),...q0(),...p0({variant:"elevated"})},"VCard"),M2=V()({name:"VCard",directives:{vRipple:x},props:Q1(),setup(n,t){let{attrs:e,slots:a}=t;const{themeClasses:o}=K0(n),{borderClasses:i}=u0(n),{colorClasses:d,colorStyles:h,variantClasses:c}=R0(n),{densityClasses:N}=O0(n),{dimensionStyles:E}=Y0(n),{elevationClasses:s}=Q0(n),{loaderClasses:U}=V0(n),{locationStyles:C}=I0(n),{positionClasses:T}=E0(n),{roundedClasses:A}=y0(n),S=B0(n,e),M=z0(void 0);return j0(()=>n.loading,(H,W)=>{M.value=!H&&typeof W=="string"?W:typeof H=="boolean"?void 0:H},{immediate:!0}),w(()=>{const H=n.link!==!1&&S.isLink.value,W=!n.disabled&&n.link!==!1&&(n.link||S.isClickable.value),g=H?"a":n.tag,y=!!(a.title||n.title!=null),B=!!(a.subtitle||n.subtitle!=null),p=y||B,u=!!(a.append||n.appendAvatar||n.appendIcon),c0=!!(a.prepend||n.prependAvatar||n.prependIcon),C0=!!(a.image||n.image),M0=p||c0||u,H0=!!(a.text||n.text!=null);return x0(l(g,$0(S.linkProps,{class:["v-card",{"v-card--disabled":n.disabled,"v-card--flat":n.flat,"v-card--hover":n.hover&&!(n.disabled||n.flat),"v-card--link":W},o.value,i.value,d.value,N.value,s.value,U.value,T.value,A.value,c.value,n.class],style:[h.value,E.value,C.value,{"--v-card-height":Z0(n.height)},n.style],onClick:W&&S.navigate.value,tabindex:n.disabled?-1:void 0}),{default:()=>[C0&&v("div",{key:"image",class:"v-card__image"},[a.image?l(Q,{key:"image-defaults",disabled:!n.image,defaults:{VImg:{cover:!0,src:n.image}}},a.image):l(F0,{key:"image-img",cover:!0,src:n.image},null)]),l(D0,{name:"v-card",active:!!n.loading,color:M.value},{default:a.loader}),M0&&l(D1,{key:"item",prependAvatar:n.prependAvatar,prependIcon:n.prependIcon,title:n.title,subtitle:n.subtitle,appendAvatar:n.appendAvatar,appendIcon:n.appendIcon},{default:a.item,prepend:a.prepend,title:a.title,subtitle:a.subtitle,append:a.append}),H0&&l(Y1,{key:"text"},{default:()=>[a.text?.()??n.text]}),a.default?.(),a.actions&&l(f1,null,{default:a.actions}),G0(W,"v-card")]}),[[x,W&&n.ripple]])}),{}}}),l0=P.reduce((n,t)=>(n[t]={type:[Boolean,String,Number],default:!1},n),{}),U0=P.reduce((n,t)=>{const e="offset"+J(t);return n[e]={type:[String,Number],default:null},n},{}),d0=P.reduce((n,t)=>{const e="order"+J(t);return n[e]={type:[String,Number],default:null},n},{}),e0={col:Object.keys(l0),offset:Object.keys(U0),order:Object.keys(d0)};function J1(n,t,e){let a=n;if(!(e==null||e===!1)){if(t){const o=t.replace(n,"");a+=`-${o}`}return n==="col"&&(a="v-"+a),n==="col"&&(e===""||e===!0)||(a+=`-${e}`),a.toLowerCase()}}const K1=["auto","start","end","center","baseline","stretch"],j1=I({cols:{type:[Boolean,String,Number],default:!1},...l0,offset:{type:[String,Number],default:null},...U0,order:{type:[String,Number],default:null},...d0,alignSelf:{type:String,default:null,validator:n=>K1.includes(n)},...O(),...R()},"VCol"),H2=V()({name:"VCol",props:j1(),setup(n,t){let{slots:e}=t;const a=o0(()=>{const o=[];let i;for(i in e0)e0[i].forEach(h=>{const c=n[h],N=J1(i,h,c);N&&o.push(N)});const d=o.some(h=>h.startsWith("v-col-"));return o.push({"v-col":!d||!n.cols,[`v-col-${n.cols}`]:n.cols,[`offset-${n.offset}`]:n.offset,[`order-${n.order}`]:n.order,[`align-self-${n.alignSelf}`]:n.alignSelf}),o});return()=>r0(n.tag,{class:[a.value,n.class],style:n.style},e.default?.())}}),K=["start","end","center"],h0=["space-between","space-around","space-evenly"];function j(n,t){return P.reduce((e,a)=>{const o=n+J(a);return e[o]=t(),e},{})}const z1=[...K,"baseline","stretch"],A0=n=>z1.includes(n),T0=j("align",()=>({type:String,default:null,validator:A0})),q1=[...K,...h0],L0=n=>q1.includes(n),W0=j("justify",()=>({type:String,default:null,validator:L0})),x1=[...K,...h0,"stretch"],m0=n=>x1.includes(n),S0=j("alignContent",()=>({type:String,default:null,validator:m0})),t0={align:Object.keys(T0),justify:Object.keys(W0),alignContent:Object.keys(S0)},$1={align:"align",justify:"justify",alignContent:"align-content"};function Z1(n,t,e){let a=$1[n];if(e!=null){if(t){const o=t.replace(n,"");a+=`-${o}`}return a+=`-${e}`,a.toLowerCase()}}const X1=I({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:A0},...T0,justify:{type:String,default:null,validator:L0},...W0,alignContent:{type:String,default:null,validator:m0},...S0,...O(),...R()},"VRow"),N2=V()({name:"VRow",props:X1(),setup(n,t){let{slots:e}=t;const a=o0(()=>{const o=[];let i;for(i in t0)t0[i].forEach(d=>{const h=n[d],c=Z1(i,d,h);c&&o.push(c)});return o.push({"v-row--no-gutters":n.noGutters,"v-row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),o});return()=>r0(n.tag,{class:["v-row",a.value,n.class],style:n.style},e.default?.())}});export{N2 as V,H2 as a,M2 as b,Y1 as c,P1 as d,k1 as e,C2 as f,s2 as g,i2 as h,L2 as i,W2 as j,U2 as k,S2 as l,m2 as m,l2 as n,A2 as o,t2 as p,o2 as q,d2 as r,a2 as s,c2 as t,h2 as u,T2 as v,r2 as w};
