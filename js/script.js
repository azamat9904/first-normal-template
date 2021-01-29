//const bannerSwiper = new Swiper('.banner-container', {
//    slidesPerView: 1,
//    pagination: {
//        el: '.swiper-pagination',
//        clickable: true
//    }
//});
//
//
//const categoriesSwiper = new Swiper('.categories-container', {
//    slidesPerView: 5,
//    spaceBetween: 95,
//     navigation: {
//        nextEl: '.swiper-button-next',
//      },
//})

$('#play-video').on('click', function () {
    $('.video-content .embed-responsive-item').attr('src', 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0&autoplay=1').attr('allow', 'autoplay');
    $('.video-content').removeClass('video-content-bg');
    $('.video-content button').hide();
});


//Product count handler //
const increaseBtnName = "#increase-count";
const decreaseBtnName = "#decrease-count";

function handlerProductCount() {
    const id = "#" + this.getAttribute('id');
    const input = $('#product-count-input');
      let val = input.val();
    const index = val.indexOf('шт');
    
    if(index !== -1){
        val = val.slice(0, index);
    }
    
    if (isNaN(val) ) {
        input.val('1шт');
        return;
    }

    if (id == increaseBtnName) {
        input.val(++val + 'шт');
    } else if (id == decreaseBtnName && val > 1) {
        input.val(--val + 'шт');
    }
}

$(increaseBtnName).on('click', handlerProductCount);
$(decreaseBtnName).on('click', handlerProductCount);
