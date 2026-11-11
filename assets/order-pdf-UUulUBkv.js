function B(h,r,m){const $=[],l=[0];let c=0;const f=new TextEncoder;function s(i){const g=typeof i=="string"?f.encode(i):i;$.push(g),c+=g.byteLength}function a(i,g){const d=l.length;l.push(c),s(`${d} 0 obj
${i}`),g&&(s(`
stream
`),s(g),s(`
endstream`)),s(`
endobj
`)}s(`%PDF-1.4
`),a("<< /Type /Catalog /Pages 2 0 R >>"),a("<< /Type /Pages /Count 1 /Kids [3 0 R] >>"),a("<< /Type /Page /Parent 2 0 R /MediaBox [0 0 841.89 595.28] /Resources << /XObject << /Sheet 4 0 R >> >> /Contents 5 0 R >>"),a(`<< /Type /XObject /Subtype /Image /Width ${r} /Height ${m} /ColorSpace /DeviceRGB /BitsPerComponent 8 /Filter /DCTDecode /Length ${h.byteLength} >>`,h);const w=f.encode("q 841.89 0 0 595.28 0 0 cm /Sheet Do Q");a(`<< /Length ${w.length} >>`,w.buffer);const S=c;s(`xref
0 ${l.length}
0000000000 65535 f 
`);for(const i of l.slice(1))s(`${String(i).padStart(10,"0")} 00000 n 
`);return s(`trailer
<< /Size ${l.length} /Root 1 0 R >>
startxref
${S}
%%EOF
`),new Blob($,{type:"application/pdf"})}const j=["身長","体重","総丈","胴丈","股上","ウエスト丈","股下","首囲","上胸囲","胸囲","腹囲","下腹囲","尻囲","太もも最大囲","太もも中間囲","膝上囲","膝下囲","ふくらはぎ囲","足首囲","すね長","肩幅","袖丈","裄丈","脇付根囲","上腕付根囲","上腕最大囲","肘囲","前腕最大囲","手首囲"];async function F(h){const r=document.createElement("canvas");r.width=2480,r.height=1754;const m=r.getContext("2d",{alpha:!1});if(!m)throw new Error("Canvas 2D unavailable");const $="#202725",l="#edf0ee",c=m;function f(e,n,t,o=28,p=400,u){c.font=`${p} ${o}px "Yu Gothic", "Meiryo", sans-serif`,c.fillStyle=$,c.textBaseline="middle",c.fillText(e,n,t,u)}function s(e,n,t,o,p="#ffffff"){c.fillStyle=p,c.fillRect(e,n,t,o),c.strokeStyle="#68736e",c.lineWidth=2,c.strokeRect(e,n,t,o)}function a(e,n,t,o){s(n,t,o,56,l),f(e,n+18,t+28,30,700)}function w(e,n,t,o,p="",u){s(e,n,184,64,l),s(e+184,n,t-184,64),f(o,e+14,n+32,25,700,156);let P=e+202;u&&(s(P,n+16,32,32,u),P+=46),f(p,P,n+32,28,400,e+t-P-18)}m.fillStyle="#ffffff",m.fillRect(0,0,r.width,r.height),f("WetSuitsDemo",64,67,30,700),f("ウェットスーツ オーダー用紙",64,126,54,700);const S=64,i=804,g=1672,d=182,b=714,y=842,D=744;a("お客様情報",S,d,b),["受付日","販売店・担当者","フリガナ","お名前","電話番号","メールアドレス","お届け先"].forEach((e,n)=>w(S,d+56+n*64,b,e));const R=722;a("仕上がりイメージ",S,R,b);for(const[e,n]of["正面","背面"].entries()){const t=b/2,o=S+e*t;s(o,R+56,t,684),f(n,o+18,R+88,28,700),h.drawView?.(m,e*Math.PI,o+10,R+120,t-20,584)||f("3D画像を取得できませんでした",o+18,R+410,22,400,t-36)}a("オーダー内容",i,d,y);const x=[["商品","シーガル"],...h.specs,["サイズ"]];x.forEach(([e,n],t)=>w(i,d+56+t*64,y,e,n,e==="パネルの色"?h.color:void 0));const C=d+56+x.length*64;h.total&&w(i,C,y,"合計金額",h.total);const T=C+104;a("オプション・備考",i,T,y),s(i,T+56,y,1462-T-56),a("採寸表（体重 kg・その他 cm）",g,d,D);const v=[58,268,148,270];for(const[e,n]of[["No.","採寸箇所","採寸値","備考"],...j.map((t,o)=>[String(o+1),t,"",""])].entries()){let t=g;const o=d+56+e*48;n.forEach((p,u)=>{s(t,o,v[u],48,e===0?l:"#ffffff"),f(p,t+10,o+24,25,e===0?700:400,v[u]-20),t+=v[u]})}const E=await new Promise((e,n)=>{r.toBlob(t=>{t?e(t):n(new Error("Order sheet image generation failed"))},"image/jpeg",.96)});return B(await E.arrayBuffer(),r.width,r.height)}export{F as createOrderPdf};
