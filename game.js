// ============================================
// game.js — 视觉小说道具与逻辑
// ============================================
// 【术语】函数（function）：把一堆代码打包在一起，调用时执行
//   格式：function 函数名() { 要做的事 }
//   调用：函数名()
//
// 例如：
//   function sayHi() { alert('你好'); }   ← 定义
//   sayHi();                              ← 调用，会弹"你好"
//
// ============================================
// 【今日函数】startGame：点击"开始游戏"按钮时执行
// ============================================
function startGame() {
    // window.location.href = 'game.html' 的意思：
    //   window（浏览器窗口）
    //   .location（当前地址）
    //   .href（地址栏内容）
    //   = 'game.html'（赋值成 game.html）
    //   → 浏览器看到地址变了，就跳转到 game.html
    window.location.href = 'game.html';
}

// 提示：如果以后要加"退出游戏"按钮，也在这里加一个 exitGame 函数
// function exitGame() {
//     if (confirm('确定要退出游戏吗？')) {
//         window.close(); // 尝试关闭（只有这个页面打开时才能成功）
//     }
// }