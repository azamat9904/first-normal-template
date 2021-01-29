const bannerSwiper = new Swiper('.banner-container', {
    slidesPerView: 1,
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    }
});


const categoriesSwiper = new Swiper('.categories-container', {
    slidesPerView: 5,
    spaceBetween: 95,
     navigation: {
        nextEl: '.swiper-button-next',
      },
})

$('#play-video').on('click', function(){
    $('.video-content .embed-responsive-item').attr('src', 'https://www.youtube.com/embed/zpOULjyy-n8?rel=0&autoplay=1').attr('allow', 'autoplay');
    $('.video-content').removeClass('video-content-bg');
    $('.video-content button').hide();
});