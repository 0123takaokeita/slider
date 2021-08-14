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

function slideJump(steps) {
  let index = parseInt(main.getAttribute('data-index')); //現在のインデックス
  let currentElement = sliderItems[index]; //現在のitem
  index += steps; //　stepsを加算
  let len = sliderItems.length; //要素の数を取得

  if (index < 0) index = len + index; // indexが-1のときは末尾に移動。
  else if (index >= len) index = 0; //indexが最後のitemの場合は0にもどす。

  let nextElement = sliderItems[index]; //次のitemを表示
  main.setAttribute('data-index', index.toString());// mainのindexを上書き。

}

// 現在の要素、次の要素、rightかleftを受け取って、スライダーを実現します。
function animateMain(currentElement, nextElement, animationType) {
  // extraに今の要素を入れます。extraはスライドのエフェクトなので消滅する今の要素を入れます。
  extra.innerHTML = "";
  extra.append(currentElement);

  // mainに次の要素を入れます。
  main.innerHTML = "";
  main.append(nextElement);

  // mainが出てくるようにexpandのanimationをつけます。
  // もう一度、上のCSSのアニメーションのコードを確認してみましょう。
  main.classList.add("expand-animation");
  extra.classList.add("deplete-animation");
  
  if(animationType === "right"){
      sliderShow.innerHTML = "";
      // 次のmainを後に入れます。
      // extraが消えて、mainが登場するアニメーション
      sliderShow.append(extra);
      sliderShow.append(main);
  }
}
// 関数の呼び出し
animateMain(sliderItems[0], sliderItems[1], "right");