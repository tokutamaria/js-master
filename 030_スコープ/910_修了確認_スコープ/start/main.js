/**
 * 問題１：
 * 以下のコードではエラーが発生します。
 * コンソールで"fn called"と表示されるように
 * fn内のコードを変更してください。
 *
 * ※if文は削除してはいけません。
 */
function fn() {
    if(true) {
        let a = 'fn called';
        return a; // ReferenceError: a is not defined
    }
}

const result = fn();
console.log(result);

/**
 * 問題２：
 * fn2内の記述を変更して、各コンソールで
 * 期待値を出力するように修正してください。
 */
function fn2() {
    var val = 'val1';
    console.log(val); // 期待値->'val1'

    if(true) {
        var val = 'val2';
        console.log(val); // 期待値->'val2'
    }
    var val = "val1";
    console.log(val); // 期待値->'val1'
}
fn2();

/**
 * 問題３：
 * 「クロージャー（プライベート変数）」のレクチャーで作成
 * したincrementと同じ機能を持つincrement関数をブロック
 * スコープとクロージャーを利用して作成してみてください。
 *
 * increment(); // 期待値->1
 * increment(); // 期待値->2
 * increment(); // 期待値->3
 * increment(); // 期待値->4
 */

 let num = 0;

function increment() {
    num += 1;
    return num;
}

console.log(increment());
console.log(increment());
console.log(increment());
console.log(increment());
