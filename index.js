document.addEventListener("DOMContentLoaded", function () {
    const inputNumbers = document.getElementById("inputNumbers");
    const checkButton = document.getElementById("checkButton");
    const result = document.getElementById("result");

    checkButton.addEventListener("click", function () {
        const numbers = inputNumbers.value;
        const isPalindrome = isNumericPalindrome(numbers);
        if (isPalindrome) {
            result.textContent = "The input is a palindrome";
        } else {
            result.textContent = "The input is not a palindrome";
        }
    });

    function isNumericPalindrome(str) {
        const length = str.length;
            for (let i = 0; i < length / 2; i++) {
                if (str[i] !== str[length - 1 - i]) {
                    return false;
                }
            }
            return true;
    }
});
