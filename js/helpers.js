let selectType = () => {
    let list = document.querySelector(".list");


    list.addEventListener("click", (e) => {
        let obj = e.target;

        if (obj.tagName == "LI") {
            let child = list.firstChild;

            while (child) {

                child.classList = "";

                child = child.nextElementSibling;
            }
            obj.classList.add("here");
        }

    })




}