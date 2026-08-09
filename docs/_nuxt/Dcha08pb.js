import{a as T,m as v,c as W,d as wn,e as z,V as q,f as K,b as tn,R as x,g as vn,h as Wn,u as kn,i as Un,j as Mn,k as Ln,l as Bn,n as Hn,o as Rn,p as En,q as Tn,r as Nn,s as Pn,t as Vn,v as In,w as On,x as Fn,y as Dn,L as Gn,z as Jn,A as Kn,B as Qn}from"./GgXvEyCq.js";import{j as k,s as jn,b as l,n as V,k as I,l as U,a as R,F as $,t as Z,I as P,p as Yn,v as zn,x as qn,m as xn,y as $n,z as Zn,q as Xn,A as rn,i as on,B as O,C as Q}from"./CpVWmnzz.js";var X={},D={},G=34,E=10,J=13;function sn(n){return new Function("d","return {"+n.map(function(a,e){return JSON.stringify(a)+": d["+e+'] || ""'}).join(",")+"}")}function ne(n,a){var e=sn(n);return function(t,o){return a(e(t),o,n)}}function nn(n){var a=Object.create(null),e=[];return n.forEach(function(t){for(var o in t)o in a||e.push(a[o]=o)}),e}function _(n,a){var e=n+"",t=e.length;return t<a?new Array(a-t+1).join(0)+e:e}function ee(n){return n<0?"-"+_(-n,6):n>9999?"+"+_(n,6):_(n,4)}function ae(n){var a=n.getUTCHours(),e=n.getUTCMinutes(),t=n.getUTCSeconds(),o=n.getUTCMilliseconds();return isNaN(n)?"Invalid Date":ee(n.getUTCFullYear())+"-"+_(n.getUTCMonth()+1,2)+"-"+_(n.getUTCDate(),2)+(o?"T"+_(a,2)+":"+_(e,2)+":"+_(t,2)+"."+_(o,3)+"Z":t?"T"+_(a,2)+":"+_(e,2)+":"+_(t,2)+"Z":e||a?"T"+_(a,2)+":"+_(e,2)+"Z":"")}function te(n){var a=new RegExp('["'+n+`
\r]`),e=n.charCodeAt(0);function t(s,m){var g,u,h=o(s,function(C,A){if(g)return g(C,A-1);u=C,g=m?ne(C,m):sn(C)});return h.columns=u||[],h}function o(s,m){var g=[],u=s.length,h=0,C=0,A,S=u<=0,p=!1;s.charCodeAt(u-1)===E&&--u,s.charCodeAt(u-1)===J&&--u;function N(){if(S)return D;if(p)return p=!1,X;var B,H=h,w;if(s.charCodeAt(H)===G){for(;h++<u&&s.charCodeAt(h)!==G||s.charCodeAt(++h)===G;);return(B=h)>=u?S=!0:(w=s.charCodeAt(h++))===E?p=!0:w===J&&(p=!0,s.charCodeAt(h)===E&&++h),s.slice(H+1,B-1).replace(/""/g,'"')}for(;h<u;){if((w=s.charCodeAt(B=h++))===E)p=!0;else if(w===J)p=!0,s.charCodeAt(h)===E&&++h;else if(w!==e)continue;return s.slice(H,B)}return S=!0,s.slice(H,u)}for(;(A=N())!==D;){for(var L=[];A!==X&&A!==D;)L.push(A),A=N();m&&(L=m(L,C++))==null||g.push(L)}return g}function i(s,m){return s.map(function(g){return m.map(function(u){return M(g[u])}).join(n)})}function c(s,m){return m==null&&(m=nn(s)),[m.map(M).join(n)].concat(i(s,m)).join(`
`)}function d(s,m){return m==null&&(m=nn(s)),i(s,m).join(`
`)}function b(s){return s.map(f).join(`
`)}function f(s){return s.map(M).join(n)}function M(s){return s==null?"":s instanceof Date?ae(s):a.test(s+="")?'"'+s.replace(/"/g,'""')+'"':s}return{parse:t,parseRows:o,format:c,formatBody:d,formatRows:b,formatRow:f,formatValue:M}}var re=te(","),ln=re.parse;const oe=`total_matches,total_unique_teams,total_goals,last_updated
13166,51,35478,2026-08-09
`,se=`team_abbr,team_name,home_wins,away_wins,total_wins
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
`,ie=`season_label,team_count,matches_played,avg_matches_per_team
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
`,le=`season_label,team_abbr,team_name,avg_home_attendance
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
`,me=`team_abbr,team_name,matches_played,wins,draws,losses,points
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
`,ce=`team_name,season_label,streak_start,streak_length,opponents
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
`,de=`streak_id,team_name,season_label,streak_length,match_date,opponent_abbr,opponent_name,score
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
`,he=`team_name,team_abbr,start_date,end_date,gap_days,matches_between
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
`,ue=`match_id,kickoff_date,season_label,home_team_name,home_team_abbr,home_score,home_red_cards,away_team_name,away_team_abbr,away_score,away_red_cards,total_goals,total_red_cards,goals_points,red_points,chaos_score
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
`,pe=`team_name,team_abbr,total_wins,home_1_0_wins,away_1_0_wins,one_nil_wins,pct_one_nil
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
`,_e=`team_name,team_abbr,run_length,seasons,start_date,end_date,opponents
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
`,ye=`team_name,team_abbr,run_length,seasons,start_date,end_date,opponents
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
`,Ce=`team_name,team_abbr,season_label,comeback_count
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
`,be=`rank,manager_name,wins,games,draws,losses,win_pct,points,goals_for,goals_against
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
`,ge=`team_name,manager_name,from_date,until_date,present,role
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
`,Ae=`-- Total wins by team across all seasons (home/away split)
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
to 'assets/data/wins.csv' (header, delimiter ',')`,Se=`-- Season-by-season team counts and matches per team
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
to 'assets/data/season_quality.csv' (header, delimiter ',')`,fe=`-- Average home attendance by team per season
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
to 'assets/data/attendance.csv' (header, delimiter ',')`,we=`-- All-time Premier League table (P/W/D/L/points)
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
to 'assets/data/all_time_table.csv' (header, delimiter ',')`,ve=`-- Most recent run of 5+ consecutive wins within a single season, per team
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
to 'assets/data/five_game_streaks.csv' (header, delimiter ',')`,We=`-- Longest winning streaks within a single season (11+ wins), one row per win game
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
to 'assets/data/big_win_streaks.csv' (header, delimiter ',')`,ke=`-- Longest calendar gap each team went between consecutive wins, across all seasons
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
to 'assets/data/longest_winless_gaps.csv' (header, delimiter ',')`,Ue=`-- Most chaotic matches: 3 points per goal + 2 points per red card, top 50
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
to 'assets/data/most_chaotic_matches.csv' (header, delimiter ',')`,Me=`-- Share of each club's Premier League wins that finished 1-0 (home or away), clubs with 30+ wins
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
to 'assets/data/one_nil_wins.csv' (header, delimiter ',')`,Le=`-- Longest consecutive run of matches where each team led at half-time but failed to win
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
to 'assets/data/ht_lead_no_win_streaks.csv' (header, delimiter ',')`,Be=`-- Longest consecutive run of matches where each team was losing at half-time but came back to win
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
to 'assets/data/comeback_kings.csv' (header, delimiter ',')`,He=`-- Teams with the most half-time comebacks (trailing at HT, then winning) in a single season, top 10
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
to 'assets/data/most_comebacks.csv' (header, delimiter ',')`,Re=`-- Managers with the most Premier League wins, aggregated across all their spells
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
to 'assets/data/manager_wins.csv' (header, delimiter ',')`,Ee=`-- Manager timeline by club: one row per managerial spell (from the Wikipedia managers list),
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
to 'assets/data/manager_timeline.csv' (header, delimiter ',')`;function e0(n,a){const e=new Date(n+"T00:00:00Z"),t=new Date(a+"T00:00:00Z");let o=t.getUTCFullYear()-e.getUTCFullYear();const i=new Date(e);i.setUTCFullYear(e.getUTCFullYear()+o),i>t&&(o-=1,i.setUTCFullYear(i.getUTCFullYear()-1));const c=Math.round((t.getTime()-i.getTime())/864e5);let d;return o>0&&c>0?d=`${o} ${o===1?"year":"years"} and ${c} ${c===1?"day":"days"}`:o>0?d=`${o} ${o===1?"year":"years"}`:d=`${c} ${c===1?"day":"days"}`,{label:d,years:o,days:c}}function r(n,a){return+(n[a]??0)}function F(n,a){return+(n[a]??0)}function y(n,a){return ln(n,a)}const a0=(()=>{const a=ln(oe)[0];return{total_matches:+a.total_matches,total_unique_teams:+a.total_unique_teams,total_goals:+a.total_goals,last_updated:a.last_updated}})(),t0=y(se,n=>({team_abbr:n.team_abbr,team_name:n.team_name,home_wins:r(n,"home_wins"),away_wins:r(n,"away_wins"),total_wins:r(n,"total_wins")})),r0=y(ie,n=>({season_label:n.season_label,team_count:r(n,"team_count"),matches_played:r(n,"matches_played"),avg_matches_per_team:F(n,"avg_matches_per_team")})),o0=y(le,n=>({season_label:n.season_label,team_abbr:n.team_abbr,team_name:n.team_name,avg_home_attendance:F(n,"avg_home_attendance")})),s0=y(me,n=>({team_abbr:n.team_abbr,team_name:n.team_name,matches_played:r(n,"matches_played"),wins:r(n,"wins"),draws:r(n,"draws"),losses:r(n,"losses"),points:r(n,"points")})),i0=y(ce,n=>({team_name:n.team_name,season_label:n.season_label,streak_start:n.streak_start,streak_length:r(n,"streak_length"),opponents:n.opponents})),l0=y(de,n=>({streak_id:r(n,"streak_id"),team_name:n.team_name,season_label:n.season_label,streak_length:r(n,"streak_length"),match_date:n.match_date,opponent_abbr:n.opponent_abbr,opponent_name:n.opponent_name,score:n.score})),m0=y(he,n=>({team_name:n.team_name,team_abbr:n.team_abbr,start_date:n.start_date,end_date:n.end_date,gap_days:r(n,"gap_days"),matches_between:r(n,"matches_between")})),c0=y(ue,n=>({match_id:r(n,"match_id"),kickoff_date:n.kickoff_date,season_label:n.season_label,home_team_name:n.home_team_name,home_team_abbr:n.home_team_abbr,home_score:r(n,"home_score"),home_red_cards:r(n,"home_red_cards"),away_team_name:n.away_team_name,away_team_abbr:n.away_team_abbr,away_score:r(n,"away_score"),away_red_cards:r(n,"away_red_cards"),total_goals:r(n,"total_goals"),total_red_cards:r(n,"total_red_cards"),goals_points:r(n,"goals_points"),red_points:r(n,"red_points"),chaos_score:r(n,"chaos_score")})),d0=y(pe,n=>({team_name:n.team_name,team_abbr:n.team_abbr,total_wins:r(n,"total_wins"),home_1_0_wins:r(n,"home_1_0_wins"),away_1_0_wins:r(n,"away_1_0_wins"),one_nil_wins:r(n,"one_nil_wins"),pct_one_nil:F(n,"pct_one_nil")})),h0=y(_e,n=>({team_name:n.team_name,team_abbr:n.team_abbr,run_length:r(n,"run_length"),seasons:n.seasons,start_date:n.start_date,end_date:n.end_date,opponents:n.opponents})),u0=y(ye,n=>({team_name:n.team_name,team_abbr:n.team_abbr,run_length:r(n,"run_length"),seasons:n.seasons,start_date:n.start_date,end_date:n.end_date,opponents:n.opponents})),p0=y(Ce,n=>({team_name:n.team_name,team_abbr:n.team_abbr,season_label:n.season_label,comeback_count:r(n,"comeback_count")})),_0=y(be,n=>({rank:r(n,"rank"),manager_name:n.manager_name,wins:r(n,"wins"),games:r(n,"games"),draws:r(n,"draws"),losses:r(n,"losses"),win_pct:F(n,"win_pct"),points:r(n,"points"),goals_for:r(n,"goals_for"),goals_against:r(n,"goals_against")})),y0=y(ge,n=>({team_name:n.team_name,manager_name:n.manager_name,from_date:n.from_date,until_date:n.until_date,present:r(n,"present"),role:n.role})),C0={wins:Ae,quality:Se,attendance:fe,allTimeTable:we,fiveGameStreaks:ve,bigWinStreaks:We,longestWinlessGaps:ke,mostChaoticMatches:Ue,oneNilWins:Me,htLeadNoWinStreaks:Le,comebackKings:Be,mostComebacks:He,managerWins:Re,managerTimeline:Ee},Te=U({...W(),...v()},"VCardActions"),Ne=k()({name:"VCardActions",props:Te(),setup(n,a){let{slots:e}=a;return jn({VBtn:{slim:!0,variant:"text"}}),T(()=>l(n.tag,{class:I(["v-card-actions",n.class]),style:V(n.style)},e)),{}}}),Pe=U({opacity:[Number,String],...W(),...v()},"VCardSubtitle"),Ve=k()({name:"VCardSubtitle",props:Pe(),setup(n,a){let{slots:e}=a;return T(()=>l(n.tag,{class:I(["v-card-subtitle",n.class]),style:V([{"--v-card-subtitle-opacity":n.opacity},n.style])},e)),{}}}),Ie=wn("v-card-title"),Oe=U({appendAvatar:String,appendIcon:P,prependAvatar:String,prependIcon:P,subtitle:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...W(),...tn(),...v()},"VCardItem"),Fe=k()({name:"VCardItem",props:Oe(),setup(n,a){let{slots:e}=a;return T(()=>{const t=!!(n.prependAvatar||n.prependIcon),o=!!(t||e.prepend),i=!!(n.appendAvatar||n.appendIcon),c=!!(i||e.append),d=!!(n.title!=null||e.title),b=!!(n.subtitle!=null||e.subtitle);return l(n.tag,{class:I(["v-card-item",n.class]),style:V(n.style)},{default:()=>[o&&R("div",{key:"prepend",class:"v-card-item__prepend"},[e.prepend?l(K,{key:"prepend-defaults",disabled:!t,defaults:{VAvatar:{density:n.density,image:n.prependAvatar},VIcon:{density:n.density,icon:n.prependIcon}}},e.prepend):R($,null,[n.prependAvatar&&l(z,{key:"prepend-avatar",density:n.density,image:n.prependAvatar},null),n.prependIcon&&l(q,{key:"prepend-icon",density:n.density,icon:n.prependIcon},null)])]),R("div",{class:"v-card-item__content"},[d&&l(Ie,{key:"title"},{default:()=>[e.title?.()??Z(n.title)]}),b&&l(Ve,{key:"subtitle"},{default:()=>[e.subtitle?.()??Z(n.subtitle)]}),e.default?.()]),c&&R("div",{key:"append",class:"v-card-item__append"},[e.append?l(K,{key:"append-defaults",disabled:!i,defaults:{VAvatar:{density:n.density,image:n.appendAvatar},VIcon:{density:n.density,icon:n.appendIcon}}},e.append):R($,null,[n.appendIcon&&l(q,{key:"append-icon",density:n.density,icon:n.appendIcon},null),n.appendAvatar&&l(z,{key:"append-avatar",density:n.density,image:n.appendAvatar},null)])])]})}),{}}}),De=U({opacity:[Number,String],...W(),...v()},"VCardText"),Ge=k()({name:"VCardText",props:De(),setup(n,a){let{slots:e}=a;return T(()=>l(n.tag,{class:I(["v-card-text",n.class]),style:V([{"--v-card-text-opacity":n.opacity},n.style])},e)),{}}}),Je=U({appendAvatar:String,appendIcon:P,disabled:Boolean,flat:Boolean,hover:Boolean,image:String,link:{type:Boolean,default:void 0},prependAvatar:String,prependIcon:P,ripple:{type:[Boolean,Object],default:!0},subtitle:{type:[String,Number,Boolean],default:void 0},text:{type:[String,Number,Boolean],default:void 0},title:{type:[String,Number,Boolean],default:void 0},...Fn(),...W(),...tn(),...On(),...In(),...Vn(),...Pn(),...Nn(),...Tn(),...En(),...v(),...xn(),...Rn({variant:"elevated"})},"VCard"),b0=k()({name:"VCard",directives:{vRipple:x},props:Je(),setup(n,a){let{attrs:e,slots:t}=a;const{themeClasses:o}=Yn(n),{borderClasses:i}=vn(n),{colorClasses:c,colorStyles:d,variantClasses:b}=Wn(n),{densityClasses:f}=kn(n),{dimensionStyles:M}=Kn(n),{elevationClasses:s}=Qn(n),{loaderClasses:m}=Un(n),{locationStyles:g}=Mn(n),{positionClasses:u}=Ln(n),{roundedClasses:h}=Bn(n),C=Hn(n,e),A=qn(void 0);return zn(()=>n.loading,(S,p)=>{A.value=!S&&typeof p=="string"?p:typeof S=="boolean"?void 0:S},{immediate:!0}),T(()=>{const S=n.link!==!1&&C.isLink.value,p=!n.disabled&&n.link!==!1&&(n.link||C.isClickable.value),N=S?"a":n.tag,L=!!(t.title||n.title!=null),B=!!(t.subtitle||n.subtitle!=null),H=L||B,w=!!(t.append||n.appendAvatar||n.appendIcon),gn=!!(t.prepend||n.prependAvatar||n.prependIcon),An=!!(t.image||n.image),Sn=H||gn||w,fn=!!(t.text||n.text!=null);return $n(l(N,Zn(C.linkProps,{class:["v-card",{"v-card--disabled":n.disabled,"v-card--flat":n.flat,"v-card--hover":n.hover&&!(n.disabled||n.flat),"v-card--link":p},o.value,i.value,c.value,f.value,s.value,m.value,u.value,h.value,b.value,n.class],style:[d.value,M.value,g.value,{"--v-card-height":Xn(n.height)},n.style],onClick:p&&C.navigate.value,tabindex:n.disabled?-1:void 0}),{default:()=>[An&&R("div",{key:"image",class:"v-card__image"},[t.image?l(K,{key:"image-defaults",disabled:!n.image,defaults:{VImg:{cover:!0,src:n.image}}},t.image):l(Dn,{key:"image-img",cover:!0,src:n.image},null)]),l(Gn,{name:"v-card",active:!!n.loading,color:A.value},{default:t.loader}),Sn&&l(Fe,{key:"item",prependAvatar:n.prependAvatar,prependIcon:n.prependIcon,title:n.title,subtitle:n.subtitle,appendAvatar:n.appendAvatar,appendIcon:n.appendIcon},{default:t.item,prepend:t.prepend,title:t.title,subtitle:t.subtitle,append:t.append}),fn&&l(Ge,{key:"text"},{default:()=>[t.text?.()??n.text]}),t.default?.(),t.actions&&l(Ne,null,{default:t.actions}),Jn(p,"v-card")]}),[[x,p&&n.ripple]])}),{}}}),mn=O.reduce((n,a)=>(n[a]={type:[Boolean,String,Number],default:!1},n),{}),cn=O.reduce((n,a)=>{const e="offset"+Q(a);return n[e]={type:[String,Number],default:null},n},{}),dn=O.reduce((n,a)=>{const e="order"+Q(a);return n[e]={type:[String,Number],default:null},n},{}),en={col:Object.keys(mn),offset:Object.keys(cn),order:Object.keys(dn)};function Ke(n,a,e){let t=n;if(!(e==null||e===!1)){if(a){const o=a.replace(n,"");t+=`-${o}`}return n==="col"&&(t="v-"+t),n==="col"&&(e===""||e===!0)||(t+=`-${e}`),t.toLowerCase()}}const Qe=["auto","start","end","center","baseline","stretch"],je=U({cols:{type:[Boolean,String,Number],default:!1},...mn,offset:{type:[String,Number],default:null},...cn,order:{type:[String,Number],default:null},...dn,alignSelf:{type:String,default:null,validator:n=>Qe.includes(n)},...W(),...v()},"VCol"),g0=k()({name:"VCol",props:je(),setup(n,a){let{slots:e}=a;const t=on(()=>{const o=[];let i;for(i in en)en[i].forEach(d=>{const b=n[d],f=Ke(i,d,b);f&&o.push(f)});const c=o.some(d=>d.startsWith("v-col-"));return o.push({"v-col":!c||!n.cols,[`v-col-${n.cols}`]:n.cols,[`offset-${n.offset}`]:n.offset,[`order-${n.order}`]:n.order,[`align-self-${n.alignSelf}`]:n.alignSelf}),o});return()=>rn(n.tag,{class:[t.value,n.class],style:n.style},e.default?.())}}),j=["start","end","center"],hn=["space-between","space-around","space-evenly"];function Y(n,a){return O.reduce((e,t)=>{const o=n+Q(t);return e[o]=a(),e},{})}const Ye=[...j,"baseline","stretch"],un=n=>Ye.includes(n),pn=Y("align",()=>({type:String,default:null,validator:un})),ze=[...j,...hn],_n=n=>ze.includes(n),yn=Y("justify",()=>({type:String,default:null,validator:_n})),qe=[...j,...hn,"stretch"],Cn=n=>qe.includes(n),bn=Y("alignContent",()=>({type:String,default:null,validator:Cn})),an={align:Object.keys(pn),justify:Object.keys(yn),alignContent:Object.keys(bn)},xe={align:"align",justify:"justify",alignContent:"align-content"};function $e(n,a,e){let t=xe[n];if(e!=null){if(a){const o=a.replace(n,"");t+=`-${o}`}return t+=`-${e}`,t.toLowerCase()}}const Ze=U({dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:un},...pn,justify:{type:String,default:null,validator:_n},...yn,alignContent:{type:String,default:null,validator:Cn},...bn,...W(),...v()},"VRow"),A0=k()({name:"VRow",props:Ze(),setup(n,a){let{slots:e}=a;const t=on(()=>{const o=[];let i;for(i in an)an[i].forEach(c=>{const d=n[c],b=$e(i,c,d);b&&o.push(b)});return o.push({"v-row--no-gutters":n.noGutters,"v-row--dense":n.dense,[`align-${n.align}`]:n.align,[`justify-${n.justify}`]:n.justify,[`align-content-${n.alignContent}`]:n.alignContent}),o});return()=>rn(n.tag,{class:["v-row",t.value,n.class],style:n.style},e.default?.())}});export{A0 as V,g0 as a,b0 as b,Ge as c,Ie as d,Ve as e,C0 as f,o0 as g,s0 as h,u0 as i,p0 as j,l0 as k,y0 as l,_0 as m,i0 as n,d0 as o,e0 as p,r0 as q,m0 as r,a0 as s,c0 as t,h0 as u,t0 as w};
