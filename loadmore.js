window.onload = function () {
    let work = document.querySelector("#cardContainer");
    let items = Array.from(work.querySelectorAll(".card"));
    let loadMore = document.getElementById("loadMore");
    maxItems = 4;
    loadItems = 4;
    hiddenClass = "hiddenStyle";
    hiddenItems = Array.from(document.querySelectorAll(".hiddenStyle"));

    items.forEach(function (item, index) {
        if (index > maxItems - 1) {
            item.classList.add(hiddenClass);
        }
    });

    loadMore.addEventListener("click", function () {
        [].forEach.call(document.querySelectorAll("." + hiddenClass), function (
            item,
            index
        ) {
            if (index < loadItems) {
                item.classList.remove(hiddenClass);
            }

            if (document.querySelectorAll("." + hiddenClass).length === 0) {
                loadMore.style.display = "none";
            }
        });
    });

    function like() {
        let likeB = document.getElementsByClassName('like');
        let likecount = document.getElementsByClassName('likeCount');
        for (let i = 0; i < likeB.length; i++) {
            likeB[i].addEventListener('click', function () {
                if (likeB[i].classList.contains('active')) {
                    likeB[i].classList.remove('active');
                }
                likeB[i].classList.add('active');
            })
        }
        for (let i = 0; i < likeB.length; i++) {
            if (likeB[i].classList.contains('active')) {
                likecount[i].textContent=parseInt(likecount[i].textContent);
                likecount[i].innerHTML++;
            }
        }
    }
}