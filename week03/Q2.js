function add(a, b, callback) {
    setTimeout(function() {
        const result = a + b;
        callback(result);
    }, 3000);
}

add(1, 1, function(result) {
    console.log("결과:", result); 
});

console.log("계산하는 중...");