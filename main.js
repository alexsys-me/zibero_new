(function($) {
    $(function() {

        $('.tabs__caption').on('click', '.tab:not(.active)', function() {
            $(this)
                .addClass('active').siblings().removeClass('active')
                .closest('.formR').find('div.tabContent').removeClass('active').eq($(this).index()).addClass('active');
        });

    });
})(jQuery);

/*
  <ul class="tabs__caption">
  <li class="active">Первая вкладка</li>
  <li>Вторая вкладка</li>
  <li>Третья вкладка</li>
  <li>Червертая вкладка</li>
  </ul>

<div class="tabs__content  active">
  <p>Локаята принимает во вниманиение к современности амбивалентно творит интеллект, изменяя привычную реальность.</p>
  <p>Апостервательно, абстрактен. Катарсис рефлектирует трагический знак, открывая новые горизонты.</p>
</div>
*/