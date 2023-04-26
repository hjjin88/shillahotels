                    // map
                    $(function() {
                        $('.tab_wrap ul.tab li').click(function() {
                            var activeTab = $(this).attr('data-tab');
                            $('.tab_wrap ul.tab li').removeClass('on');
                            $('.map-tab').removeClass('on');
                            $(this).addClass('on');
                            $('#' + activeTab).addClass('on');
                        })
                    });
                    // swiper
                    $(function() {
                        $('.intro_wrap ul.intro li').click(function() {
                            var activeTab = $(this).attr('data-tab');
                            $('.intro_wrap ul.intro li').removeClass('on');
                            $('.intro-tab').removeClass('on');
                            $(this).addClass('on');
                            $('#' + activeTab).addClass('on');
                        })
                    });


                    var swiper = new Swiper(".mySwiper", {
                        slidesPerView : 1,
                        spaceBetween : 0, 
                        loop: true,
                        pagination: {
                        el: ".swiper-pagination",
                        type: "fraction",
                        },
                        navigation: {
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                        },
                    });