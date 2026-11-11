async function s(n){const o=await fetch(new URL("config/options.json",n));if(!o.ok)throw new Error("設定を読み込めませんでした");return o.json()}export{s as l};
