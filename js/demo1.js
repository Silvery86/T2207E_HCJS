var x;
x = 10;
x = "xin chao cac ban"
x = 3.14;
var y;
y = 20;
var z = x + y
x = "hello";
var k = x + y;
// hello + 10 = hello10
// 10 + hello = 10hello
// hello + wprld = helloworld
console.log(k);
var t = true; //
for(var i=0;i<10;i++){
    console.log("i="+i);
}
// Mảng trong JS
// Các phẩn tử không cần giống kiểu giá trị
// Tất cả các phẩn tử của mảng sẽ được gom vào 1 ô nhớ
var ar = [];
ar[0] = 1;
ar.push(10);
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
ar.push("hello");
// .push : đưa giá trị vào cuối của mảng
// Duyệt mảng theo chỉ mục (index)
for(var i = 0;i<ar.length;i++){
    console.log(ar[i]);
}
// Duyệt mảng theo từng phần tử (foreach)
ar.map(xyz=>{
    console.log(xyz);
});
var tk = tinhtong(5,3);
var tk2= tinhtong("hello",10);
function tinhtong(a,b) {
    return a+b;
}
console.log(tk);
console.log(tk2);

function demo(){
    console.log("Hello everybody....");
    console.log("Hello everybody....");
    console.log("Hello everybody....");
}
setTimeout(demo,3000); // callback function

console.log("ABCXYZ....");
var n = 10;
function countdown() {
    var xyz = document.getElementById("head");
    xyz.innerText = n;
    console.log(n);
    n--;
    if(n<0){
        clearInterval(si);
    }
}
var si = setInterval(countdown,1000);

// viết chương trình cứ 2s in ra 1 số chẵn tăng dần theo thời gian
// in tối đa 10 số
var a = 2;
var b = 0;
function demsochan() {
    var abc = document.getElementById("bt1");
    abc.innerText += " "+a;
    a+=2;
    b++;
    if(b>10){
        clearInterval(ds);
    }

}
var ds = setInterval(demsochan,2000);




