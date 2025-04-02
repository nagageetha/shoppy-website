document.addEventListener("DOMContentLoaded", function () {
    var search = document.getElementById("search");
    var productList = document.getElementsByClassName("products-box"); 

    search.addEventListener("keyup", function (event) {
        var enteredValue = event.target.value.trim().toUpperCase(); // Trim spaces & convert to uppercase

        for (let count = 0; count < productList.length; count++) {
            var productNameElement = productList[count].querySelector("p");

            if (productNameElement) {
                var productName = productNameElement.textContent.trim().toUpperCase(); 

                if (productName.includes(enteredValue)) { 
                    productList[count].style.display = ""; // Restore default display
                } else {
                    productList[count].style.display = "none"; // Hide non-matching items
                }
            }
        }
    });
});
