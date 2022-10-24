// $(document).ready(function() {
//     $('body').html('<h1>Hello jQuery!</h1>');
// });

// $( セレクタ ).メソッド ( パラメータ );

// $(function() {
//     $('.box1').css({
//         'background-color' : '#0000ff',
//         'height' : '100px'
//     });
// });
// $('セレクタ').css('background-color','#0000FF');

// $(function() {
//     $('.box1').slideUp();
// });

// $
// 
// $(function() {
//     $('.box1').slideDown(function() {
//         $('.box1').css({
//             'background-color' : '0000ff',
//             'width' : '200px',
//             'height' : '100px'
//         }).slideUp('4000');
//     });
// });

// ブラウザ上でユーザーが実行する動作のことをイベントといいます

// $(function() {
//     $('.box1').mouseover(function() {
//         $('.box1').css({
//             'background-color' : '#0000ff'
//         });
//     });
//     $('.box1').mouseout(function() {
//         $('.box1').css({
//             'background-color' : '#ff0000'
//         });
//     });
// });

// $('.セレクタ名').イベント名(function(){
//     イベント発生時に行われる処理
//   });

// $(function() {
//     $('.box1').mouseover(function() {
//         $('.box1').addClass('box1-ext');
//     });
//     $('.box1').mouseout(function() {
//         $('.box1').removeClass('box1-ext');
//     });
// });

// $('.セレクタ名').on('click', function() {
//     イベント発生時に行われる処理
//   });


// マウスクリックのイベントには、.click( )もあります。しかし、clickの場合は、クリックされた時点でイベントが終わってしまいます。

// $(function() {
//     $('.box1').on('click',function() {
//         $('.box1').addClass('box1-ext');
//     });
//     $('.box1').mouseout(function() {
//         $('.box1').removeClass('box1-ext');
//     });
// });

// $(function(){
//     $('.box1').on('click', function(){
//       $('.box1').addClass('box1-ext');
//     });
//     $('.box1').mouseout(function(){
//       $('.box1').removeClass('box1-ext');
//     });
//   });

// $(function() {
//     $('.bg1').on('click', function() {
//         $('.bg1').slideUp();
//     });
//     $('.bg2').on('click', function() {
//         $('.bg2').slideUp();
//     });
//     $('.bg3').on('click', function() {
//         $('.bg3').slideUp();
//     });
//     $('.bg4').on('click', function() {
//         $('.bg4').slideUp();
//     });
// });
// 「this」は、イベントが発生した要素のみ変化させたいときに使います。

// $(function() {
//     $('box1').on('click', function() {
//         $(this).slideUp();
//     });
// });

$(function() {
    $('button').on('click', function() {
        $('ul').children().css('color', 'red');
    });
});