$(function () {

    $('.header__menu').on('click', function () {
        $('.header__nav').toggleClass('--active')
        $('.header__buttons').toggleClass('--active')
    })

    const nums = document.querySelectorAll('.build__bottom-item__num')
    for (let i = 0; i < (nums.length + 1); i++) {
        nums[i].innerHTML = i + 1
    }
});