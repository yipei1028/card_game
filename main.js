var pai = [1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8];
var flag = false;
var oneid = -1;
function fanpai(id) {
    if (pai[id] == -1) {
        return;
    }
    document.getElementById("img" + id).src = "img/image" + pai[id] + ".jpg";
    if (flag) {//翻第2张  
        if (pai[id] == pai[oneid]) {
            pai[id] = -1;
            pai[oneid] = -1;
        }
        else {
            setTimeout("koupai(" + id + "," + oneid + ")", 600);
        }
        oneid = -1;
        flag = false;
    }
    else {//翻第1张  
        oneid = id;
        flag = true;
    }
    checkSuccess();
}

//每次载入页面进行重新洗牌  
function xipai() {
    var a, b, temp;
    for (i = 0; i < 16; i++) {
        var a = Math.floor(Math.random() * 16);
        var b = Math.floor(Math.random() * 16);
        temp = pai[a];
        pai[a] = pai[b];
        pai[b] = temp;
    }
}
//第一次与第二次不相同，扣住两张牌  
function koupai(id, oneid) {
    document.getElementById("img" + id).src = "img/image0.jpg";
    document.getElementById("img" + oneid).src = "img/image0.jpg";
}
//每次翻完两张相同的后，检验是否全部成功翻开  
function checkSuccess() {
    for (var i = 0; i < 16; i++) {
        if (pai[i] != -1)
            return;
    }
    alert("恭喜，OK了");
    location.reload();
}




function success() { //成功的話就結束遊戲，這個遊戲不會有失敗

}

//判斷是不是第一次翻牌
//記住牌的花色
//翻第二次牌
//判斷是不是跟第一張牌花色相同
//如果不同就兩張都翻回去(寫一個覆蓋牌的function)
//如果相同就保留那兩張牌
//然後回到第一個步驟