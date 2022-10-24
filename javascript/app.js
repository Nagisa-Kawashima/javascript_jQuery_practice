// alert('Hello World');

// let hello = "Hello world";
// alert(hello);

// let int1 = 1;

// let int2 = -10;

// let float1 = 3.14;

// let str1 = 'JavaScriptを覚えよう';


// alert(4 + 3);
// alert(4 - 3);
// alert(4 * 3);
// alert(4 / 3);

// alert('Hello' + 'World');


// let str1 = 'Hello';
// let str2 = 'World!';
// alert(str1 + str2);

let orange = 100;
let apple = 120;

// if(orange < apple) {
//     alert('みかんの値段がリンゴより安い');
// } else if(orange == apple) {
//     alert('みかんとリンゴは同じ値段');
// } else {
//     alert('みかんの値段がリンゴより高い');
// }

// let max = 100;
// let num = 1;
// let count = 0;

// while(num < max) {
//     num = num * 2;
//     count = count + 1;
// }

// alert('2をかけ続けて' + max + 'を超えるのに必要だった回数は' + count + '回です');

// let i;
// let num = 0;

// for(i = 1; i < 11; i++) {
//     num = num + i;
// }

// alert('1から10まで足した結果は' + num + 'です');


// letやconstでは変数なのに再宣言することはできない

// var nickname = "taro";
//     console.log(nickname);
// var nickname = 'ichiro';
//     console.log(nickname);

// 変数に別の値を代入することを再代入という　varとletで可能 しかし同じ変数の値で　var とletを共存させることはできない

// var nickname = 'hana';
//  console.log(nickname);
//  nickname = 'jiro';
//  console.log(nickname);

// let nickname = 'hana';
//  console.log(nickname);
//  nickname = 'jiro';
//  console.log(nickname);


//  constでは再宣言と再代入ができない

// varのスコープ範囲　関数スコープ(ローカルスコープ)とグローバルスコープの変数を宣言することができる

// var str = "webcamp"
// // グローバルスコープ

// function foo() {
//     console.log(str);
//     var y = "hello"   
//     // 関数スコープ
// }

// foo();
// console.log(y);
// 関数の外からyを参照しようとしても有効範囲外となりエラーとなる


// letのスコープ範囲　ブロックスコープ（ローカルスコープ）の変数を宣言することができる
// function foo() {
//     let x = "webcamp"
//     {
//         let y = 'hello webcamp'
//     }
//     console.log(x);
//     console.log(y);
// }

// foo();
// ｙをブロック外から参照したためえらーとなる


// for (let i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log(i);
// iという変数はforの（）ブロック内でletによって宣言されたもの　console.logによってブロック外から参照することはできない


// constのスコープはletと同じブロックスコープになる



// 変数の巻き上げ(ホイスティング)
var str = "webcamp"

function foo() { 
  console.log(str)
//   宣言されたのみの変数で値は代入されていない
// varによって宣言された変数に初期値を入れなければ自動的にundifinedを初期値として代入する
  var str = "dmm webcamp"
  console.log(str)
}

foo()

var str = "webcamp"

function foo() { 
  var str
  console.log(str)
  str = "dmm webcamp"
  console.log(str)
}

foo()
// 変数の巻き上げとは関数内のどの部分で変数を宣言したとしても関数冒頭で変数を宣言したことになる
// console.log(str)が関数内で使用されている為、関数スコープのstrが参照される

// letやconstも同様に変数の巻き上げが起こる
// しかしletやconstのは変数の初期化を行わずに宣言のみをした場合それを参照するとエラーになる

// letは再代入が可能であり、constは再代入が不可能
// ループ処理はループするたびに変数に再代入を行うためletを使う

let alertString;
alertString = addString('WebCamp');

alert(alertString);


function addString(strA) {
    let addStr = "Hello" + strA;
    return addStr;
}

// let promptStr = prompt('何か好きな文字を入力してください');

// alert(promptStr);

let user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
while((user_hand != "グー") && (user_hand != "チョキ") && (user_hand != "パー") && (user_hand !== null)) {
    alert('グー、チョキ、パーのいずれかを入力してください');
    user_hand = prompt('じゃんけんの手をグー、チョキ、パーから選んでください');
}

let js_hand = getJShand();
let judge = winLose(user_hand, js_hand);

if (user_hand !== null) {
alert('あなたの選んだ手は' + user_hand + 'です　\nJavaScriptの選んだ手は' + js_hand + 'です　\n結果は' + judge + 'です');
} else {
    alert('またチャレンジしてね')
}

// ランダムでじゃんけんの手を作成する関数
function getJShand() {
    let js_hand_num = Math.floor(Math.random() * 3);
    let hand_name;

    if(js_hand_num == 0) {
        hand_name = "グー";
    } else if(js_hand_num == 1) {
        hand_name = "チョキ";
    } else if(js_hand_num == 2) {
        hand_name = "パー";
    }

    return hand_name;
}
// ユーザの手とJavaScriptのじゃんけんの手を比べる関数
function winLose(user, js) {
    let winLoseStr;

    if (user == "グー") {
        if(js == "グー") {
            winLoseStr = "あいこ";
        } else if(js == "チョキ") {
            winLoseStr = "勝ち";
        } else if(is == "パー") {
            winLoseStr = "負け";
        }
    } else if(user == "チョキ") {
        if(js == "グー") {
            winLoseStr = "負け";
        } else if(js == "チョキ") {
            winLoseStr = "あいこ";
        } else if(js == "パー") {
            winLoseStr = "勝ち";
        } 
    
    } else if(user == "パー") {
        if(js == "グー") {
            winLoseStr = "勝ち";
        } else if(js == "チョキ") {
            winLoseStr = "負け";
        } else if(is == "パー") {
            winLoseStr = "あいこ";
        } 
    }
    return winLoseStr;
 }

//  キャンセルじゃなかったら（user_hand != null）