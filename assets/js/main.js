$('.icon-box-faq').on('click', function () {
  if ($(this).hasClass('active')) {
    return $(this)
      .removeClass('active')
      .css({
        border: '1px solid #c6d0e3',
        boxShadow: 'none',
      })
      .find('h4')
      .css({
        color: '#113681',
      });
  }

  $('.selectBox')
    .find('.icon-box-faq')
    .removeClass('active')
    .css({
      border: '1px solid #c6d0e3',
      boxShadow: 'none',
    })
    .find('h4')
    .css({
      color: '#113681',
    });

  $(this)
    .addClass('active')
    .css({
      border: '1px solid #dc0017',
      boxShadow: 'rgb(220 0 23) 0px 0px 1px 1px',
    })
    .find('h4')
    .css({
      color: '#dc0017',
    });
});

jQuery;
