// window.onload = function(){
//     // alert("hi");
// }

// let imageURL_Array = [
//     "https://photo.518.com.tw/selfmedia/articles/1822/166184376108829.jpeg",
//     "https://lordcat.tw/wp-content/uploads/2021/09/1631538408-378fce845ce05de4c29be3e870b50e13.jpg",
//     "https://pic03.eapple.com.tw/siangnong/xn_i_img02.png",
//     "https://tokyo-kitchen.icook.network/uploads/recipe/cover/372073/60ad2eda9638fa38.jpg"
// ]

$(function () {
    $("input").on("click", function () {
        // alert("Hi");
        // $("h1").text("Hello");
        var numberOfListItem = $("li").length;
        var randomChildNumber = Math.floor(Math.random() * numberOfListItem);
        console.log(randomChildNumber);
        $("h1").text($("li").eq(randomChildNumber).text());
        // $("img").attr("src", imageURL_Array[randomChildNumber]).show();

        if ($("h1").text() == "炸串") {
            $("img").attr("src", "fried.jpeg").show();
        } else if ($("h1").text() == "缽缽雞") {
            $("img").attr("src", "chicken.jpg").show();
        } else if ($("h1").text() == "涼拌折耳根") {
            $("img").attr("src", "fishwort.jpg").show();
        } else if ($("h1").text() == "魚香肉絲") {
            $("img").attr("src", "meat.jpg").show();
        }

    });
});
