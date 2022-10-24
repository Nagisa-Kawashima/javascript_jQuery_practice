$(function() {
    $('.menu-trigger').on('click', function(event) {
        $('this').toggleClass('active');
        $('#sp-menu').fadeToggle();
        event.preventDefault();
    });
});

// .toggleClass()は、指定されているclass（ここではactive）をトグル処理するメソッドです。
// トグル処理では、該当のclass属性がある場合にはclassが削除され、ない場合にはclassが追加されます。

// aタグのclassにはmenu-triggerが指定され、activeは指定されていません。
// このときに.toggleClass()を設定すると、アイコンがクリックされたときにactiveクラスが追加され、もう一度クリックすると削除されます。

// .fadeToggle()は、要素のフェードイン・フェードアウトを切り替えるメソッドです。
// このメソッドを使って、ハンバーガーメニューを開いたときの状態を設定します。