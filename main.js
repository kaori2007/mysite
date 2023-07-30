let fadeInTarget = document.querySelectorAll(".fade-in"); //".fade-in"セレクタの要素をすべて取得、その要素を変数fadeInTargetに代入、リスト
window.addEventListener("scroll", () => { //スクロールイベントを監視、スクロールが発生した場合は{}内の処理実行
  for (let i = 0; i < fadeInTarget.length; i++){ //リストの要素を一つずつ処理
    const rect = fadeInTarget[i].getBoundingClientRect().top; //要素の表示位置を取得
    const scroll = window.scrollY || document.documentElement.scrollTop; //現在のスクロール位置を取得
    const offset = rect + scroll; //要素の表示位置とスクロール位置の合計
    const windowHeight = window.innerHeight; //現在のブラウザの高さ
    if (scroll > offset - windowHeight + 150) { //要素が画面内に表示されたかを判定
      fadeInTarget[i].classList.add("scroll-in"); //画面内に表示された場合は、"scroll-in"クラスを追加
    }
    else {
      fadeInTarget[i].classList.remove("scroll-in"); //画面内に表示されていない場合は、"scroll-in"クラスを削除
    }
  }
});

console.clear()

const CARD = document.querySelector('.card-wrapper')

const UPDATE = ({ x, y }) => {
  const BOUNDS = CARD.getBoundingClientRect()
  const pointerX = x - BOUNDS.x
  const pointerY = y - BOUNDS.y
  const ratioX = pointerX / BOUNDS.width
  const ratioY = pointerY / BOUNDS.height
  CARD.style.setProperty('--ratiox', ratioX)
  CARD.style.setProperty('--ratioy', ratioY)
  
  const mX = ratioX * 100
  const mY = ratioY * 100
  CARD.style.setProperty('--mx', `${mX}%`)
  CARD.style.setProperty('--my', `${mY}%`)
  
  const rX = (ratioX - 0.5) * -30
  const rY = (ratioY - 0.5) * 50
  CARD.style.setProperty('--rx', `${rX}deg`)
  CARD.style.setProperty('--ry', `${rY}deg`)
  
  const posX = 50 + (ratioX - 0.5) * 28
  const posY = 50 + (ratioY - 0.5) * 28
  CARD.style.setProperty('--pos', `${posX}% ${posY}%`)
  CARD.style.setProperty('--posx', `${posX}%`)
  CARD.style.setProperty('--posy', `${posY}%`)
  
  const hyp = Math.sqrt( Math.pow( ratioX - 0.5, 2 ) + Math.pow( ratioY - 0.5, 2 )) * 10 / 7;
  CARD.style.setProperty('--hyp', hyp) 
}

document.body.addEventListener('pointermove', UPDATE)