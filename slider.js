// 埋め込み先の取得
const target = document.getElementById("target");
// 配列でitemを取得
const sliderItems = document.querySelectorAll("#target .slider-data .slider-item");

// 子要素の作成
let sliderShow = document.createElement("div");
let main = document.createElement("div");
let extra = document.createElement("div");

// クラス指定
sliderShow.classList.add("col-12", "d-flex", "flex-nowrap", "overflow-hiddens");
main.classList.add("main", "full-width");
extra.classList.add("extra", "full-width");

// mainに１つ目のitemを埋め込む
main.append(sliderItems[0]);
sliderShow.append(main);
sliderShow.append(extra);
target.append(sliderShow);

//ボタンの親要素を作成してクラス追加
let controls = document.createElement("div");
controls.classList.add("offset-5", "mt-2");

// ボタンの作成
let leftBtn = document.createElement("button");
leftBtn.classList.add("btn", "btn-light");
leftBtn.innerHTML = "<";

let rightBtn = document.createElement("button");
rightBtn.classList.add("btn", "btn-light");
rightBtn.innerHTML = ">";

// 親要素にボタンを埋め込んでtargetに挿入。
controls.append(leftBtn);
controls.append(rightBtn);
target.append(controls);

//setAttribute(属性名, 属性値)を使ってindexの初期値を設定します。
main.setAttribute("data-index", "0");


// 以下を出力するはずです。今slideJump(1)をしたのでスライドは右にズレてます。
// したがって、現在のインデックスが0、グレーの箱が現在の要素で、青い箱が次の要素になります。
// 0
// <div class="box slider-item bg-secondary"></div>
// <div class="box slider-item bg-primary"></div>
function slideJump(steps) {
    let index = parseInt(main.getAttribute('data-index')); //現在のインデックス
    let currentElement = sliderItems[index]; //現在のitem
    index += steps; //　stepsを加算
    let len = sliderItems.length; //要素の数を取得

    if(index < 0) index = len + index; // indexが-1のときは末尾に移動。
    else if(index >= len) index = 0; //indexが最後のitemの場合は0にもどす。

    let nextElement = sliderItems[index]; //次のitemを表示
    main.setAttribute('data-index',index.toString());// mainのindexを上書き。
    
    console.log(index);
    console.log(currentElement);
    console.log(nextElement);
}

