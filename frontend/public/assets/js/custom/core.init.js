/* eslint-disable */
/* global jQuery:false */
/* global DAIRY_FARM_STORAGE:false */

jQuery(document).ready(() => {
  DAIRY_FARM_STORAGE.theme_init_counter = 0;
  dairy_farm_init_actions();
});

jQuery(window).on('beforeunload', () => {
  // Show preloader
  if (jQuery.browser && !jQuery.browser.safari)
    jQuery('#page_preloader').css({ display: 'block', opacity: 0 }).animate({ opacity: 0.8 }, 300);
});

// Theme init actions
function dairy_farm_init_actions() {
  if (
    DAIRY_FARM_STORAGE.vc_edit_mode &&
    jQuery('.vc_empty-placeholder').length == 0 &&
    DAIRY_FARM_STORAGE.theme_init_counter++ < 30
  ) {
    setTimeout(dairy_farm_init_actions, 200);
    return;
  }

  // Hide preloader
  jQuery('#page_preloader').animate({ opacity: 0 }, 500, function () {
    jQuery(this).css({ display: 'none' });
  });

  // Check for Retina display
  if (dairy_farm_is_retina()) {
    dairy_farm_set_cookie('dairy_farm_retina', 1, 365);
  }

  dairy_farm_ready_actions();

  // Add resize handlers after VC row stretch handlers on('resize.vcRowBehaviour', ...)
  setTimeout(() => {
    jQuery(window)
      .on('resize.dairy_farm', () => {
        dairy_farm_resize_actions();
        dairy_farm_scroll_actions();
      })
      .trigger('resize.dairy_farm');
  }, 10);

  // Add resize on VC action vc-full-width-row
  jQuery(document).on('vc-full-width-row', () => {
    dairy_farm_resize_actions();
    dairy_farm_scroll_actions();
  });

  // Scroll handlers
  jQuery(window).on('scroll.dairy_farm', () => {
    dairy_farm_scroll_actions();
  });
}

// Theme first load actions
//= =============================================
function dairy_farm_ready_actions() {
  // Call theme specific action (if exists)
  //----------------------------------------------
  if (window.dairy_farm_theme_ready_actions) dairy_farm_theme_ready_actions();

  // Widgets decoration
  //----------------------------------------------

  // Decorate nested lists in widgets and side panels
  jQuery('.widget ul > li').each(function () {
    if (jQuery(this).find('ul').length > 0) {
      jQuery(this).addClass('has_children');
    }
  });

  // Archive widget decoration
  jQuery('.widget_archive a').each(function () {
    const val = jQuery(this).html().split(' ');
    if (val.length > 1) {
      val[val.length - 1] = `<span>${val[val.length - 1]}</span>`;
      jQuery(this).html(val.join(' '));
    }
  });

  // Navigate on category change
  jQuery('.widget_subcategories').on('change', 'select', function () {
    const dropdown = jQuery(this).get(0);
    if (dropdown.options[dropdown.selectedIndex].value > 0) {
      location.href = `${DAIRY_FARM_STORAGE.site_url}/?cat=${dropdown.options[dropdown.selectedIndex].value}`;
    }
  });

  // Calendar handlers - change months
  jQuery('.widget_calendar').on('click', '.month_prev a, .month_next a', function (e) {
    const calendar = jQuery(this).parents('.wp-calendar');
    const m = jQuery(this).data('month');
    const y = jQuery(this).data('year');
    const l = jQuery(this).data('letter');
    const pt = jQuery(this).data('type');
    jQuery
      .post(DAIRY_FARM_STORAGE.ajax_url, {
        action: 'calendar_change_month',
        nonce: DAIRY_FARM_STORAGE.ajax_nonce,
        letter: l,
        month: m,
        year: y,
        post_type: pt,
      })
      .done((response) => {
        let rez = {};
        try {
          rez = JSON.parse(response);
        } catch (e) {
          rez = { error: DAIRY_FARM_STORAGE.ajax_error };
          console.log(response);
        }
        if (rez.error === '') {
          calendar.parent().fadeOut(200, function () {
            jQuery(this).find('.wp-calendar').remove();
            jQuery(this).append(rez.data).fadeIn(200);
          });
        }
      });
    e.preventDefault();
    return false;
  });

  // Media setup
  //----------------------------------------------

  // Video background init
  jQuery('.video_bg').each(function () {
    const youtube = jQuery(this).data('youtube-code');
    if (youtube) {
      jQuery(this).tubular({ videoId: youtube });
    }
  });

  // Main slider
  //----------------------------------------------
  jQuery('.slider_over_button,.slider_over_close').on('click', function (e) {
    jQuery(this).parent().toggleClass('opened');
    e.preventDefault();
    return false;
  });

  // Menu
  //----------------------------------------------

  // Clone side menu for responsive
  if (jQuery('ul#menu_side').length > 0) {
    jQuery('ul#menu_side')
      .clone()
      .removeAttr('id')
      .removeClass('menu_side_nav')
      .addClass('menu_side_responsive')
      .insertAfter('ul#menu_side');
    dairy_farm_show_current_menu_item(jQuery('.menu_side_responsive'), jQuery('.sidebar_outer_menu_responsive_button'));
  }
  if (jQuery('.header_mobile').length > 0) {
    jQuery('.header_mobile .menu_main_nav_area ul#menu_main').removeAttr('id');
    jQuery('.header_mobile .menu_button').on('click', () => {
      jQuery('.header_mobile .side_wrap').toggleClass('open');
      jQuery('.header_mobile .mask').toggleClass('show');
      jQuery('html').toggleClass('menu_mobile_open');
      // Fix for Safari
      if (dairy_farm_browser_is_ios() && jQuery('body').hasClass('menu_mobile')) {
        jQuery('body').toggleClass('ios_fixed');
      }
    });
    jQuery('.header_mobile .mask, .header_mobile .side_wrap .close').on('click', () => {
      jQuery('.header_mobile .side_wrap').removeClass('open');
      jQuery('.header_mobile .mask').removeClass('show');
      jQuery('html').removeClass('menu_mobile_open');
      // Fix for Safari
      if (dairy_farm_browser_is_ios() && jQuery('body').hasClass('menu_mobile')) {
        jQuery('body').removeClass('ios_fixed');
      }
    });
  }

  // Push menu button
  jQuery('.menu_pushy_button').on('click', (e) => {
    jQuery('body').addClass('pushy-active').css('overflow', 'hidden');
    jQuery('.site-overlay').fadeIn('fast');
    e.preventDefault();
    return false;
  });
  jQuery('.pushy .close-pushy,.site-overlay').on('click', (e) => {
    jQuery('body').removeClass('pushy-active').css('overflow', 'visible');
    jQuery('.site-overlay').fadeOut('fast');
    e.preventDefault();
    return false;
  });

  // Side menu widgets button
  jQuery('.sidebar_outer_widgets_button').on('click', (e) => {
    jQuery('.sidebar_outer_widgets').slideToggle();
    e.preventDefault();
    return false;
  });

  // Add arrows in responsive menu
  jQuery(
    '.header_mobile .menu_main_nav .menu-item-has-children > a, .menu_side_responsive .menu-item-has-children > a, .menu_pushy_nav_area .menu-item-has-children > a, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories .has_children > a'
  ).prepend('<span class="open_child_menu"></span>');

  // Submenu click handler for the responsive menu
  jQuery(
    '.header_mobile .menu_main_nav, .menu_side_responsive, .menu_pushy_nav_area, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories'
  ).on('click', 'li a,li a .open_child_menu, ul.product-categories.plain li a .open_child_menu', function (e) {
    const is_menu_main = jQuery(this).parents('.menu_main_nav').length > 0;
    const $a = jQuery(this).hasClass('open_child_menu') ? jQuery(this).parent() : jQuery(this);
    if (
      (!is_menu_main || jQuery('body').hasClass('menu_mobile')) &&
      ($a.parent().hasClass('menu-item-has-children') || $a.parent().hasClass('has_children'))
    ) {
      if ($a.siblings('ul:visible').length > 0) $a.siblings('ul').slideUp().parent().removeClass('opened');
      else {
        jQuery(this).parents('li').siblings('li').find('ul:visible').slideUp().parent().removeClass('opened');
        $a.siblings('ul').slideDown().parent().addClass('opened');
      }
    }
    // Ignore link for parent menu items
    if (jQuery(this).hasClass('open_child_menu') || $a.attr('href') == '#') {
      e.preventDefault();
      return false;
    }
  });

  // Init superfish menus
  dairy_farm_init_sfmenu(
    '.menu_main_nav_area ul#menu_main, ul#menu_user, ul#menu_side, body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories'
  );

  // Slide effect for main menu
  if (DAIRY_FARM_STORAGE.menu_hover == 'slide_line' || DAIRY_FARM_STORAGE.menu_hover == 'slide_box') {
    setTimeout(() => {
      jQuery('#menu_main').spasticNav({
        style: DAIRY_FARM_STORAGE.menu_hover == 'slide_line' ? 'line' : 'box',
        color: DAIRY_FARM_STORAGE.accent1_hover,
        colorOverride: false,
      });
    }, 500);
  }

  // Show table of contents for the current page
  if (DAIRY_FARM_STORAGE.toc_menu != 'hide' && DAIRY_FARM_STORAGE.toc_menu != 'no') {
    dairy_farm_build_page_toc();
  }

  // One page mode for menu links (scroll to anchor)
  jQuery('#toc, ul#menu_main li, ul#menu_user li, ul#menu_side li, ul#menu_footer li, ul#menu_pushy li').on(
    'click',
    'a',
    function (e) {
      const href = jQuery(this).attr('href');
      if (href === undefined) return;
      const pos = href.indexOf('#');
      if (pos < 0 || href.length == 1) return;
      if (jQuery(href.substr(pos)).length > 0) {
        let loc = window.location.href;
        const pos2 = loc.indexOf('#');
        if (pos2 > 0) loc = loc.substring(0, pos2);
        let now = pos == 0;
        if (!now) now = loc == href.substring(0, pos);
        if (now) {
          dairy_farm_document_animate_to(href.substr(pos));
          dairy_farm_document_set_location(pos == 0 ? loc + href : href);
          e.preventDefault();
          return false;
        }
      }
    }
  );

  // Store height of the top and side panels
  DAIRY_FARM_STORAGE.top_panel_height = 0; // Math.max(0, jQuery('.top_panel_wrap').height());
  DAIRY_FARM_STORAGE.side_panel_height = 0;

  // Pagination
  //----------------------------------------------

  // Page navigation (style slider)
  jQuery('.pager_cur').on('click', (e) => {
    jQuery('.pager_slider').slideDown(300, () => {
      dairy_farm_sc_init(jQuery('.pager_slider').eq(0));
    });
    e.preventDefault();
    return false;
  });

  // View More button
  jQuery('#viewmore_link').on('click', function (e) {
    if (!DAIRY_FARM_STORAGE.viewmore_busy && !jQuery(this).hasClass('viewmore_empty')) {
      jQuery(this).parent().addClass('loading');
      DAIRY_FARM_STORAGE.viewmore_busy = true;
      jQuery
        .post(DAIRY_FARM_STORAGE.ajax_url, {
          action: 'view_more_posts',
          nonce: DAIRY_FARM_STORAGE.ajax_nonce,
          page: DAIRY_FARM_STORAGE.viewmore_page + 1,
          data: DAIRY_FARM_STORAGE.viewmore_data,
          vars: DAIRY_FARM_STORAGE.viewmore_vars,
        })
        .done((response) => {
          let rez = {};
          try {
            rez = JSON.parse(response);
          } catch (e) {
            rez = { error: DAIRY_FARM_STORAGE.ajax_error };
            console.log(response);
          }
          jQuery('#viewmore_link').parent().removeClass('loading');
          DAIRY_FARM_STORAGE.viewmore_busy = false;
          if (rez.error === '') {
            let posts_container = jQuery('.content').eq(0);
            if (posts_container.find('.isotope_wrap').length > 0)
              posts_container = posts_container.find('.isotope_wrap').eq(0);
            if (posts_container.hasClass('isotope_wrap')) {
              posts_container.data('last-width', 0).append(rez.data);
              DAIRY_FARM_STORAGE.isotope_init_counter = 0;
              dairy_farm_init_appended_isotope(posts_container, rez.filters);
            } else jQuery('#viewmore').before(rez.data);

            DAIRY_FARM_STORAGE.viewmore_page++;
            if (rez.no_more_data == 1) {
              jQuery('#viewmore_link').addClass('viewmore_empty').parent().hide();
            }

            dairy_farm_init_post_formats();
            dairy_farm_sc_init(posts_container);
            dairy_farm_scroll_actions();
          }
        });
    }
    e.preventDefault();
    return false;
  });

  // WooCommerce
  //----------------------------------------------

  // Change display mode
  jQuery('.woocommerce,.woocommerce-page').on('click', '.mode_buttons a', function (e) {
    const mode = jQuery(this).hasClass('woocommerce_thumbs') ? 'thumbs' : 'list';
    dairy_farm_set_cookie('dairy_farm_shop_mode', mode, 365);
    jQuery(this).siblings('input').val(mode).parents('form').get(0).submit();
    e.preventDefault();
    return false;
  });
  
  // Show cart
  jQuery('.top_panel_middle .top_panel_cart_button, .header_mobile .top_panel_cart_button, .top_panel_middle .top_panel_user_button, .header_mobile .top_panel_user_button').on('click', function (e) {
    jQuery(this).siblings('.sidebar_cart').slideToggle();
    e.preventDefault();
    return false;
  });

  //  Hide Cart
  jQuery(document).on('click', (e) => {
    // console.log(jQuery(e.target));
    if (
      jQuery(e.target).is('.widget_area.sidebar_cart') === false &&
      jQuery(e.target).is('.fa.fa-times.text-danger') === false &&
      jQuery(e.target).parents('.widget_area.sidebar_cart').length != 1
    ) {
      jQuery('.sidebar_cart').slideUp();
    }
  });

  // Add stretch behaviour to WooC tabs area
  jQuery('.single-product .woocommerce-tabs')
    .addClass('trx-stretch-width scheme_light')
    .after('<div class="trx-stretch-width-original"></div>');
  dairy_farm_stretch_width();

  // Other settings
  //------------------------------------

  // Scroll to top button
  jQuery('.scroll_to_top').on('click', (e) => {
    jQuery('html,body').animate(
      {
        scrollTop: 0,
      },
      'slow'
    );
    e.preventDefault();
    return false;
  });

  // AJAX views counter
  if (DAIRY_FARM_STORAGE.ajax_views_counter !== undefined) {
    setTimeout(() => {
      jQuery.post(DAIRY_FARM_STORAGE.ajax_url, {
        action: 'post_counter',
        nonce: DAIRY_FARM_STORAGE.ajax_nonce,
        post_id: DAIRY_FARM_STORAGE.ajax_views_counter.post_id,
        views: DAIRY_FARM_STORAGE.ajax_views_counter.post_views,
      });
    }, 10);
  }

  // Show system message
  dairy_farm_show_system_message();

  // Init post format specific scripts
  dairy_farm_init_post_formats();

  // Call sc init action (if exists)
  if (window.dairy_farm_sc_init_actions) dairy_farm_sc_init_actions();

  // Init hidden elements (if exists)
  if (window.dairy_farm_init_hidden_elements) dairy_farm_init_hidden_elements(jQuery('body').eq(0));
} // end ready

// Scroll actions
//= =============================================

// Do actions when page scrolled
function dairy_farm_scroll_actions() {
  // Call theme specific action (if exists)
  //----------------------------------------------
  if (window.dairy_farm_theme_scroll_actions) dairy_farm_theme_scroll_actions();

  const scroll_offset = jQuery(window).scrollTop();
  const scroll_to_top_button = jQuery('.scroll_to_top');
  const adminbar_height = Math.max(0, jQuery('#wpadminbar').height());

  if (DAIRY_FARM_STORAGE.top_panel_height < 1) {
    DAIRY_FARM_STORAGE.top_panel_height = Math.max(0, jQuery('.top_panel_wrap').height());
  }

  // Scroll to top button show/hide
  if (scroll_offset > DAIRY_FARM_STORAGE.top_panel_height) scroll_to_top_button.addClass('show');
  else scroll_to_top_button.removeClass('show');

  // Fix/unfix top panel
  if (!jQuery('body').hasClass('menu_mobile') && DAIRY_FARM_STORAGE.menu_fixed) {
    let slider_height = 0;
    if (jQuery('.top_panel_below .slider_wrap').length > 0) {
      slider_height = jQuery('.top_panel_below .slider_wrap').height();
      if (slider_height < 10) {
        slider_height = jQuery('.slider_wrap').hasClass('.slider_fullscreen')
          ? jQuery(window).height()
          : DAIRY_FARM_STORAGE.slider_height;
      }
    }
    if (scroll_offset <= slider_height + DAIRY_FARM_STORAGE.top_panel_height) {
      if (jQuery('body').hasClass('top_panel_fixed')) {
        jQuery('body').removeClass('top_panel_fixed');
      }
    } else if (scroll_offset > slider_height + DAIRY_FARM_STORAGE.top_panel_height) {
      if (!jQuery('body').hasClass('top_panel_fixed') && jQuery(document).height() > jQuery(window).height() * 1.5) {
        jQuery('.top_panel_fixed_wrap').height(DAIRY_FARM_STORAGE.top_panel_height);
        jQuery('.top_panel_wrap').css('marginTop', '-150px').animate({ marginTop: 0 }, 500);
        jQuery('body').addClass('top_panel_fixed');
      }
    }
  }

  // Fix/unfix side panel
  if (jQuery('.sidebar_outer').length > 0) {
    if (DAIRY_FARM_STORAGE.side_panel_height == 0)
      DAIRY_FARM_STORAGE.side_panel_height =
        jQuery('.sidebar_outer_logo_wrap').outerHeight() +
        jQuery('.sidebar_outer_menu').outerHeight() +
        jQuery('.sidebar_outer_widgets').outerHeight();
    if (scroll_offset + jQuery(window).height() > DAIRY_FARM_STORAGE.side_panel_height + 100) {
      if (jQuery('.sidebar_outer').css('position') !== 'fixed') {
        jQuery('.sidebar_outer').css({
          position: 'fixed',
          top: `${Math.min(0, jQuery(window).height() - DAIRY_FARM_STORAGE.side_panel_height - 100)}px`,
        });
      }
    } else if (jQuery('.sidebar_outer').css('position') == 'fixed') {
      jQuery('.sidebar_outer').css({
        position: 'absolute',
        top: 0,
      });
    }
  }

  // TOC current items
  jQuery('#toc .toc_item').each(function () {
    const id = jQuery(this).find('a').attr('href');
    const pos = id.indexOf('#');
    if (pos < 0 || id.length == 1) return;
    let loc = window.location.href;
    const pos2 = loc.indexOf('#');
    if (pos2 > 0) loc = loc.substring(0, pos2);
    let now = pos == 0;
    if (!now) now = loc == href.substring(0, pos);
    if (!now) return;
    const off = jQuery(id).offset().top;
    const id_next = jQuery(this).next().find('a').attr('href');
    const off_next = id_next ? jQuery(id_next).offset().top : 1000000;
    if (
      off < scroll_offset + jQuery(window).height() * 0.8 &&
      scroll_offset + DAIRY_FARM_STORAGE.top_panel_height < off_next
    )
      jQuery(this).addClass('current');
    else jQuery(this).removeClass('current');
  });

  // Infinite pagination
  dairy_farm_infinite_scroll();

  // Parallax scroll
  dairy_farm_parallax_scroll();

  // Call sc scroll actions (if exists)
  if (window.dairy_farm_sc_scroll_actions) dairy_farm_sc_scroll_actions();
}

// Infinite Scroll
function dairy_farm_infinite_scroll() {
  if (DAIRY_FARM_STORAGE.viewmore_busy) return;
  const infinite = jQuery('#viewmore.pagination_infinite');
  if (infinite.length > 0) {
    const viewmore = infinite.find('#viewmore_link:not(.viewmore_empty)');
    if (viewmore.length > 0) {
      if (jQuery(window).scrollTop() + jQuery(window).height() + 100 >= infinite.offset().top) {
        viewmore.eq(0).trigger('click');
      }
    }
  }
}

// Parallax scroll
function dairy_farm_parallax_scroll() {
  jQuery('.sc_parallax').each(function () {
    const windowHeight = jQuery(window).height();
    const scrollTops = jQuery(window).scrollTop();
    const offsetPrx = Math.max(jQuery(this).offset().top, windowHeight);
    if (offsetPrx <= scrollTops + windowHeight) {
      const speed = Number(jQuery(this).data('parallax-speed'));
      const xpos = jQuery(this).data('parallax-x-pos');
      const ypos = Math.round((offsetPrx - scrollTops - windowHeight) * speed + (speed < 0 ? windowHeight * speed : 0));
      jQuery(this).find('.sc_parallax_content').css('backgroundPosition', `${xpos} ${ypos}px`);
      // Uncomment next line if you want parallax video (else - video position is static)
      jQuery(this).find('div.sc_video_bg').css('top', `${ypos}px`);
    }
  });
}

// Resize actions
//= =============================================

// Do actions when page scrolled
function dairy_farm_resize_actions() {
  // Call theme specific action (if exists)
  //----------------------------------------------
  if (window.dairy_farm_theme_resize_actions) dairy_farm_theme_resize_actions();

  // Reset stored value
  if (!jQuery('body').hasClass('top_panel_fixed')) DAIRY_FARM_STORAGE.top_panel_height = 0;

  dairy_farm_responsive_menu();
  dairy_farm_vc_row_fullwidth_to_boxed();
  dairy_farm_video_dimensions();
  dairy_farm_resize_video_background();
  dairy_farm_resize_fullscreen_slider();
  dairy_farm_resize_alter_portfolio();
  dairy_farm_stretch_width();

  // Call sc resize actions (if exists)
  if (window.dairy_farm_sc_resize_actions) dairy_farm_sc_resize_actions();
}

// Stretch area to full window width
function dairy_farm_stretch_width() {
  jQuery('.trx-stretch-width').each(function () {
    const $el = jQuery(this);
    const $el_full = $el.next('.trx-stretch-width-original');
    const el_margin_left = parseInt($el.css('margin-left'), 10);
    const el_margin_right = parseInt($el.css('margin-right'), 10);
    const offset = 0 - $el_full.offset().left - el_margin_left;
    const width = jQuery(window).width();
    if (!$el.hasClass('inited')) {
      $el.addClass('inited invisible');
      $el.css({
        position: 'relative',
        'box-sizing': 'border-box',
      });
    }
    $el.css({
      left: offset,
      width: jQuery(window).width(),
    });
    if (!$el.hasClass('trx-stretch-content')) {
      const padding = Math.max(0, -1 * offset);
      const paddingRight = Math.max(0, width - padding - $el_full.width() + el_margin_left + el_margin_right);
      $el.css({ 'padding-left': `${padding}px`, 'padding-right': `${paddingRight}px` });
    }
    $el.removeClass('invisible');
  });
}

// Width vc_row when content boxed
function dairy_farm_vc_row_fullwidth_to_boxed() {
  if (jQuery('body').hasClass('body_style_boxed')) {
    const width_body = jQuery('body').width();
    const width_content = jQuery('.page_wrap').width();
    const width_content_wrap = jQuery('.page_content_wrap  .content_wrap').width();
    const indent = (width_content - width_content_wrap) / 2;
    if (width_body > width_content) {
      jQuery('.vc_row[data-vc-full-width="true"]').each(function () {
        const mrg = parseInt(jQuery(this).css('marginLeft'), 10);
        jQuery(this).css({
          width: width_content,
          left: -indent - mrg,
          'padding-left': indent + mrg,
          'padding-right': indent + mrg,
        });
        if (jQuery(this).attr('data-vc-stretch-content')) {
          jQuery(this).css({
            'padding-left': 0,
            'padding-right': 0,
          });
        }
      });
    }
  }
}

// Check window size and do responsive menu
function dairy_farm_responsive_menu() {
  if (dairy_farm_is_responsive_need(DAIRY_FARM_STORAGE.menu_mobile)) {
    if (!jQuery('body').hasClass('menu_mobile')) {
      jQuery('body').removeClass('top_panel_fixed').addClass('menu_mobile');
      jQuery('header.top_panel_wrap ').hide();
      jQuery('.header_mobile').show();

      jQuery('header #popup_login').attr('id', 'popup_login_1');
      jQuery('header #popup_registration').attr('id', 'popup_registration_1');
      jQuery('.header_mobile #popup_login_1').attr('id', 'popup_login');
      jQuery('.header_mobile #popup_registration_1').attr('id', 'popup_registration');
    }
  } else if (jQuery('body').hasClass('menu_mobile')) {
    jQuery('body').removeClass('menu_mobile');
    jQuery('header.top_panel_wrap ').show();
    jQuery('.header_mobile').hide();

    jQuery('header #popup_login_1').attr('id', 'popup_login');
    jQuery('header #popup_registration_1').attr('id', 'popup_registration');
    jQuery('.header_mobile #popup_login').attr('id', 'popup_login_1');
    jQuery('.header_mobile #popup_registration').attr('id', 'popup_registration_1');
  }

  if (jQuery(window).width() < 640) {
    var pass = jQuery('.header_mobile .popup_wrap.popup_registration .registration_form > .form_right');
    if (pass.length > 0) {
      jQuery('.header_mobile .popup_wrap.popup_registration .form_left .popup_form_field.email_field').after(pass);
    }
  } else {
    var pass = jQuery('.header_mobile .popup_wrap.popup_registration .form_left > .form_right');
    if (pass.length > 0) {
      jQuery('.header_mobile .popup_wrap.popup_registration .registration_form').append(pass);
    }
  }

  if (!jQuery('.top_panel_wrap').hasClass('menu_show')) jQuery('.top_panel_wrap').addClass('menu_show');
  // Show widgets block on the sidebar outer (if sidebar not responsive and widgets are hidden)
  if (
    jQuery('.sidebar_outer').length > 0 &&
    jQuery('.sidebar_outer').css('position') == 'absolute' &&
    jQuery('.sidebar_outer_widgets:visible').length == 0
  )
    jQuery('.sidebar_outer_widgets').show();
  // Switch popup menu / hierarchical list on product categories list placed in sidebar
  const cat_menu = jQuery(
    'body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories'
  );
  const sb = cat_menu.parents('.widget_area');
  if (sb.length > 0 && cat_menu.length > 0) {
    if (sb.width() == sb.parents('.content_wrap').width()) {
      if (cat_menu.hasClass('inited')) {
        cat_menu.removeClass('inited').addClass('plain').superfish('destroy');
        cat_menu.find('ul.animated').removeClass('animated').addClass('no_animated');
      }
    } else if (!cat_menu.hasClass('inited')) {
      cat_menu.removeClass('plain').addClass('inited');
      cat_menu.find('ul.no_animated').removeClass('no_animated').addClass('animated');
      dairy_farm_init_sfmenu(
        'body:not(.woocommerce) .widget_area:not(.footer_wrap) .widget_product_categories ul.product-categories'
      );
    }
  }
}

// Check if responsive menu need
function dairy_farm_is_responsive_need(max_width) {
  let rez = false;
  if (max_width > 0) {
    let w = window.innerWidth;
    if (w == undefined) {
      w =
        jQuery(window).width() +
        (jQuery(window).height() < jQuery(document).height() || jQuery(window).scrollTop() > 0 ? 16 : 0);
    }
    rez = max_width > w;
  }
  return rez;
}

// Fit video frames to document width
function dairy_farm_video_dimensions() {
  jQuery('.sc_video_frame').each(function () {
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
    const frame = jQuery(this).eq(0);
    const player = frame.parent();
    let ratio = frame.data('ratio')
      ? frame.data('ratio').split(':')
      : frame.find('[data-ratio]').length > 0
      ? frame.find('[data-ratio]').data('ratio').split(':')
      : [16, 9];
    ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
    let w_attr = frame.data('width');
    let h_attr = frame.data('height');
    if (!w_attr || !h_attr) return;
    const percent = `${w_attr}`.substr(-1) == '%';
    w_attr = parseInt(w_attr, 10);
    h_attr = parseInt(h_attr, 10);
    const w_real = Math.min(
      percent || frame.parents('.columns_wrap').length > 0 ? 10000 : w_attr,
      frame.parents('div,article').width()
    ); // player.width();
    const h_real = Math.round(percent ? w_real / ratio : (w_real / w_attr) * h_attr);
    if (parseInt(frame.attr('data-last-width'), 10) == w_real) return;
    if (percent) {
      frame.height(h_real);
    } else {
      frame.css({ width: `${w_real}px`, height: `${h_real}px` });
    }
    frame.attr('data-last-width', w_real);
  });
  jQuery('video.sc_video,video.wp-video-shortcode').each(function () {
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
    const video = jQuery(this).eq(0);
    let ratio = video.data('ratio') != undefined ? video.data('ratio').split(':') : [16, 9];
    ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
    const mejs_cont = video.parents('.mejs-video');
    const frame = video.parents('.sc_video_frame');
    let w_attr = frame.length > 0 ? frame.data('width') : video.data('width');
    let h_attr = frame.length > 0 ? frame.data('height') : video.data('height');
    if (!w_attr || !h_attr) {
      w_attr = video.attr('width');
      h_attr = video.attr('height');
      if (!w_attr || !h_attr) return;
      video.data({ width: w_attr, height: h_attr });
    }
    const percent = `${w_attr}`.substr(-1) == '%';
    w_attr = parseInt(w_attr, 10);
    h_attr = parseInt(h_attr, 10);
    const w_real = Math.round(
      mejs_cont.length > 0
        ? Math.min(percent ? 10000 : w_attr, mejs_cont.parents('div,article').width())
        : video.width()
    );
    const h_real = Math.round(percent ? w_real / ratio : (w_real / w_attr) * h_attr);
    if (parseInt(video.attr('data-last-width'), 10) == w_real) return;
    if (mejs_cont.length > 0 && mejs) {
      dairy_farm_set_mejs_player_dimensions(video, w_real, h_real);
    }
    if (percent) {
      video.height(h_real);
    } else {
      video.attr({ width: w_real, height: h_real }).css({ width: `${w_real}px`, height: `${h_real}px` });
    }
    video.attr('data-last-width', w_real);
  });
  jQuery('video.sc_video_bg').each(function () {
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
    const video = jQuery(this).eq(0);
    let ratio = video.data('ratio') != undefined ? video.data('ratio').split(':') : [16, 9];
    ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
    const mejs_cont = video.parents('.mejs-video');
    const container = mejs_cont.length > 0 ? mejs_cont.parent() : video.parent();
    const w = container.width();
    const h = container.height();
    let w1 = Math.ceil(h * ratio);
    let h1 = Math.ceil(w / ratio);
    if (video.parents('.sc_parallax').length > 0) {
      const windowHeight = jQuery(window).height();
      const speed = Number(video.parents('.sc_parallax').data('parallax-speed'));
      const h_add = Math.ceil(Math.abs((windowHeight - h) * speed));
      if (h1 < h + h_add) {
        h1 = h + h_add;
        w1 = Math.ceil(h1 * ratio);
      }
    }
    if (h1 < h) {
      h1 = h;
      w1 = Math.ceil(h1 * ratio);
    }
    if (w1 < w) {
      w1 = w;
      h1 = Math.ceil(w1 / ratio);
    }
    const l = Math.round((w1 - w) / 2);
    const t = Math.round((h1 - h) / 2);
    if (parseInt(video.attr('data-last-width'), 10) == w1) return;
    if (mejs_cont.length > 0) {
      dairy_farm_set_mejs_player_dimensions(video, w1, h1);
      mejs_cont.css({
        // 'left': -l+'px',
        top: `${-t}px`,
      });
    } else
      video.css({
        // 'left': -l+'px',
        top: `${-t}px`,
      });
    video.attr({ width: w1, height: h1, 'data-last-width': w1 }).css({ width: `${w1}px`, height: `${h1}px` });
    if (video.css('opacity') == 0) video.animate({ opacity: 1 }, 3000);
  });
  jQuery('iframe').each(function () {
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;
    const iframe = jQuery(this).eq(0);
    let ratio =
      iframe.data('ratio') != undefined
        ? iframe.data('ratio').split(':')
        : iframe.find('[data-ratio]').length > 0
        ? iframe.find('[data-ratio]').data('ratio').split(':')
        : [16, 9];
    ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
    let w_attr = iframe.attr('width');
    let h_attr = iframe.attr('height');
    const frame = iframe.parents('.sc_video_frame');
    if (frame.length > 0) {
      w_attr = frame.data('width');
      h_attr = frame.data('height');
    }
    if (!w_attr || !h_attr) {
      return;
    }
    const percent = `${w_attr}`.substr(-1) == '%';
    w_attr = parseInt(w_attr, 10);
    h_attr = parseInt(h_attr, 10);
    const w_real = frame.length > 0 ? frame.width() : iframe.width();
    const h_real = Math.round(percent ? w_real / ratio : (w_real / w_attr) * h_attr);
    if (parseInt(iframe.attr('data-last-width'), 10) == w_real) return;
    iframe.css({ width: `${w_real}px`, height: `${h_real}px` });
  });
}

// Resize fullscreen video background
function dairy_farm_resize_video_background() {
  const bg = jQuery('.video_bg');
  if (bg.length < 1) return;
  if (DAIRY_FARM_STORAGE.media_elements_enabled && bg.find('.mejs-video').length == 0) {
    setTimeout(dairy_farm_resize_video_background, 100);
    return;
  }
  const video = bg.find('video');
  let ratio = video.data('ratio') != undefined ? video.data('ratio').split(':') : [16, 9];
  ratio = ratio.length != 2 || ratio[0] == 0 || ratio[1] == 0 ? 16 / 9 : ratio[0] / ratio[1];
  const w = bg.width();
  const h = bg.height();
  let w1 = Math.ceil(h * ratio);
  let h1 = Math.ceil(w / ratio);
  if (h1 < h) {
    h1 = h;
    w1 = Math.ceil(h1 * ratio);
  }
  if (w1 < w) {
    w1 = w;
    h1 = Math.ceil(w1 / ratio);
  }
  const l = Math.round((w1 - w) / 2);
  const t = Math.round((h1 - h) / 2);
  if (bg.find('.mejs-container').length > 0) {
    dairy_farm_set_mejs_player_dimensions(bg.find('video'), w1, h1);
    bg.find('.mejs-container').css({ left: `${-l}px`, top: `${-t}px` });
  } else bg.find('video').css({ left: `${-l}px`, top: `${-t}px` });
  bg.find('video')
    .attr({ width: w1, height: h1 })
    .css({ width: `${w1}px`, height: `${h1}px` });
}

// Set Media Elements player dimensions
function dairy_farm_set_mejs_player_dimensions(video, w, h) {
  if (mejs) {
    for (const pl in mejs.players) {
      if (mejs.players[pl].media.src == video.attr('src')) {
        if (mejs.players[pl].media.setVideoSize) {
          mejs.players[pl].media.setVideoSize(w, h);
        }
        mejs.players[pl].setPlayerSize(w, h);
        mejs.players[pl].setControlsSize();
      }
    }
  }
}

// Resize Fullscreen Slider
function dairy_farm_resize_fullscreen_slider() {
  const slider_wrap = jQuery('.slider_wrap.slider_fullscreen');
  if (slider_wrap.length < 1) return;
  const slider = slider_wrap.find('.sc_slider_swiper');
  if (slider.length < 1) return;
  const h =
    jQuery(window).height() -
    jQuery('#wpadminbar').height() -
    (jQuery('body').hasClass('top_panel_above') && !jQuery('body').hasClass('.top_panel_fixed')
      ? jQuery('.top_panel_wrap').height()
      : 0);
  slider.height(h);
}

// Resize Alter portfolio elements
function dairy_farm_resize_alter_portfolio() {
  const wrap = jQuery('.isotope_wrap.inited');
  if (wrap.length == 0) return;
  wrap.each(function () {
    const alter = jQuery(this).find('.post_item_alter');
    if (alter.length == 0) return;
    const single = alter.find('.post_featured img[data-alter-items-w="1"]').eq(0);
    if (single.length != 1) return;
    const w_real = single.width();
    const h_real = single.height();
    const space = Number(single.data('alter-item-space'));
    let relayout = false;
    alter.find('.post_featured img').each(function () {
      const items_w = Number(jQuery(this).data('alter-items-w'));
      const items_h = Number(jQuery(this).data('alter-items-h'));
      if (items_h > 1) {
        jQuery(this).height(Math.round(items_h * h_real + (items_h - 1) * (space + 1)));
        relayout = true;
      } else if (items_w > 1) {
        jQuery(this).height(h_real);
        relayout = true;
      }
    });
    if (relayout) {
      jQuery(this).isotope('layout');
    }
  });
}

// Navigation
//= =============================================

// Init Superfish menu
function dairy_farm_init_sfmenu(selector) {
  jQuery(selector)
    .show()
    .each(function () {
      if (
        dairy_farm_is_responsive_need() &&
        (jQuery(this).attr('id') == 'menu_main' || jQuery(this).attr('id') == 'menu_side')
      )
        return;
      jQuery(this)
        .addClass('inited')
        .superfish({
          delay: 500,
          animation: {
            opacity: 'show',
          },
          animationOut: {
            opacity: 'hide',
          },
          speed: DAIRY_FARM_STORAGE.css_animation ? 500 : 200,
          speedOut: DAIRY_FARM_STORAGE.css_animation ? 500 : 200,
          autoArrows: false,
          dropShadows: false,
          onBeforeShow(ul) {
            if (jQuery(this).parents('ul').length > 1) {
              const w = jQuery(window).width();
              const par_offset = jQuery(this).parents('ul').offset().left;
              const par_width = jQuery(this).parents('ul').outerWidth();
              const ul_width = jQuery(this).outerWidth();
              if (par_offset + par_width + ul_width > w - 20 && par_offset - ul_width > 0)
                jQuery(this).addClass('submenu_left');
              else jQuery(this).removeClass('submenu_left');
            }
            if (DAIRY_FARM_STORAGE.css_animation) {
              jQuery(this).removeClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_out}`);
              jQuery(this).addClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_in}`);
            }
          },
          onBeforeHide(ul) {
            if (DAIRY_FARM_STORAGE.css_animation) {
              jQuery(this).removeClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_in}`);
              jQuery(this).addClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_out}`);
            }
          },
        });
    });
}

// Build page TOC from the tag's id
function dairy_farm_build_page_toc() {
  let toc = '';
  let toc_count = 0;
  jQuery('[id^="toc_"],.sc_anchor').each(function (idx) {
    const obj = jQuery(this);
    const id = obj.attr('id');
    const url = obj.data('url');
    let icon = obj.data('icon');
    if (!icon) icon = 'icon-circle-dot';
    const title = obj.attr('title');
    const description = obj.data('description');
    const separator = obj.data('separator');
    toc_count++;
    toc +=
      `<div class="toc_item${separator == 'yes' ? ' toc_separator' : ''}">${
        description ? `<div class="toc_description">${description}</div>` : ''
      }<a href="${url || `#${id}`}" class="toc_icon${title ? ' with_title' : ''} ${icon}">${
        title ? `<span class="toc_title">${title}</span>` : ''
      }</a>` + `</div>`;
  });
  if (toc_count > (DAIRY_FARM_STORAGE.toc_menu_home ? 1 : 0) + (DAIRY_FARM_STORAGE.toc_menu_top ? 1 : 0)) {
    if (jQuery('#toc').length > 0) jQuery('#toc .toc_inner').html(toc);
    else
      jQuery('body').append(
        `<div id="toc" class="toc_${DAIRY_FARM_STORAGE.toc_menu}"><div class="toc_inner">${toc}</div></div>`
      );
  }
}

// Show current page title on the responsive menu button
function dairy_farm_show_current_menu_item(menu, button) {
  menu.find('a').each(function () {
    const menu_link = jQuery(this);
    if (menu_link.text() == '') {
      return;
    }
    if (menu_link.attr('href') == window.location.href) button.text(menu_link.text());
  });
}

// Isotope
//= ====================================================

// First init isotope containers
function dairy_farm_init_isotope() {
  let all_images_complete = true;

  // Check if all images in isotope wrapper are loaded
  jQuery('.isotope_wrap:not(.inited)').each(function () {
    all_images_complete = all_images_complete && dairy_farm_check_images_complete(jQuery(this));
  });
  // Wait for images loading
  if (!all_images_complete && DAIRY_FARM_STORAGE.isotope_init_counter++ < 30) {
    setTimeout(dairy_farm_init_isotope, 200);
    return;
  }

  // Isotope filters handler
  jQuery('.isotope_filters:not(.inited)')
    .addClass('inited')
    .on('click', 'a', function (e) {
      jQuery(this).parents('.isotope_filters').find('a').removeClass('active');
      jQuery(this).addClass('active');

      const selector = jQuery(this).data('filter');
      jQuery(this).parents('.isotope_filters').siblings('.isotope_wrap').eq(0).isotope({
        filter: selector,
      });

      if (selector == '*') jQuery('#viewmore_link').fadeIn();
      else jQuery('#viewmore_link').fadeOut();

      e.preventDefault();
      return false;
    });

  // Init isotope script
  jQuery('.isotope_wrap:not(.inited)').each(function () {
    const isotope_container = jQuery(this);

    // Init shortcodes
    dairy_farm_sc_init(isotope_container);

    // If in scroll container - no init isotope
    if (isotope_container.parents('.sc_scroll').length > 0) {
      isotope_container
        .addClass('inited')
        .find('.isotope_item')
        .animate({ opacity: 1 }, 200, function () {
          jQuery(this).addClass('isotope_item_show');
        });
      return;
    }

    // If in hidden container (in the inactive tab) - return without init
    if (jQuery(this).parents('div:hidden,article:hidden').length > 0) return;

    // Init isotope with timeout
    setTimeout(() => {
      isotope_container.addClass('inited').isotope({
        itemSelector: '.isotope_item',
        animationOptions: {
          duration: 750,
          easing: 'linear',
          queue: false,
        },
      });

      // Show elements
      isotope_container.find('.isotope_item').animate({ opacity: 1 }, 200, function () {
        jQuery(this).addClass('isotope_item_show');
      });

      // Resize Alter portfolio elements
      dairy_farm_resize_alter_portfolio();
    }, 500);
  });
}

function dairy_farm_init_appended_isotope(posts_container, filters) {
  if (posts_container.parents('.sc_scroll_horizontal').length > 0) return;

  if (!dairy_farm_check_images_complete(posts_container) && DAIRY_FARM_STORAGE.isotope_init_counter++ < 30) {
    setTimeout(() => {
      dairy_farm_init_appended_isotope(posts_container, filters);
    }, 200);
    return;
  }
  // Add filters
  const flt = posts_container.siblings('.isotope_filter');
  for (const i in filters) {
    if (flt.find(`a[data-filter=".flt_${i}"]`).length == 0) {
      flt.append(`<a href="#" class="isotope_filters_button" data-filter=".flt_${i}">${filters[i]}</a>`);
    }
  }
  // Init shortcodes in added elements
  dairy_farm_sc_init(posts_container);
  // Get added elements
  const elems = posts_container.find('.isotope_item:not(.isotope_item_show)');
  // Notify isotope about added elements with timeout
  setTimeout(() => {
    posts_container.isotope('appended', elems);
    // Show appended elements
    elems.animate({ opacity: 1 }, 200, function () {
      jQuery(this).addClass('isotope_item_show');
    });
  }, 500);
}

// Post formats init
//= ====================================================

function dairy_farm_init_post_formats() {
  // Call theme specific action (if exists)
  if (window.dairy_farm_theme_init_post_formats) dairy_farm_theme_init_post_formats();

  // MediaElement init
  dairy_farm_init_media_elements(jQuery('body'));

  // Isotope first init
  if (jQuery('.isotope_wrap:not(.inited)').length > 0) {
    DAIRY_FARM_STORAGE.isotope_init_counter = 0;
    dairy_farm_init_isotope();
  }

  // Hover Effect 'Dir'
  if (jQuery('.isotope_wrap .isotope_item_content.square.effect_dir:not(.inited)').length > 0) {
    jQuery('.isotope_wrap .isotope_item_content.square.effect_dir:not(.inited)').each(function () {
      jQuery(this).addClass('inited').hoverdir();
    });
  }

  // Popup init
  if (DAIRY_FARM_STORAGE.popup_engine == 'pretty') {
    jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'prettyPhoto[slideshow]');
    var images = jQuery(
      "a[rel*='prettyPhoto']:not(.inited):not(.esgbox):not([data-rel*='pretty']):not([rel*='magnific']):not([data-rel*='magnific'])"
    ).addClass('inited');
    try {
      images.prettyPhoto({
        social_tools: '',
        theme: 'facebook',
        deeplinking: false,
      });
    } catch (e) {}
  } else if (DAIRY_FARM_STORAGE.popup_engine == 'magnific') {
    jQuery("a[href$='jpg'],a[href$='jpeg'],a[href$='png'],a[href$='gif']").attr('rel', 'magnific');
    var images = jQuery(
      "a[rel*='magnific']:not(.inited):not(.esgbox):not(.prettyphoto):not([rel*='pretty']):not([data-rel*='pretty'])"
    ).addClass('inited');
    try {
      images.magnificPopup({
        type: 'image',
        mainClass: 'mfp-img-mobile',
        closeOnContentClick: true,
        closeBtnInside: true,
        fixedContentPos: true,
        midClick: true,
        // removalDelay: 500,
        preloader: true,
        tLoading: DAIRY_FARM_STORAGE.strings.magnific_loading,
        gallery: {
          enabled: true,
        },
        image: {
          tError: DAIRY_FARM_STORAGE.strings.magnific_error,
          verticalFit: true,
        },
      });
    } catch (e) {}
  }

  // Add hover icon to products thumbnails
  jQuery('.post_item_product .product .images a.woocommerce-main-image:not(.hover_icon)').addClass(
    'hover_icon hover_icon_view'
  );

  // Likes counter
  if (jQuery('.post_counters_likes:not(.inited)').length > 0) {
    jQuery('.post_counters_likes:not(.inited)')
      .addClass('inited')
      .on('click', function (e) {
        const button = jQuery(this);
        const inc = button.hasClass('enabled') ? 1 : -1;
        const post_id = button.data('postid');
        const likes = Number(button.data('likes')) + inc;
        let cookie_likes = dairy_farm_get_cookie('dairy_farm_likes');
        if (cookie_likes === undefined || cookie_likes === null) cookie_likes = '';
        jQuery
          .post(DAIRY_FARM_STORAGE.ajax_url, {
            action: 'post_counter',
            nonce: DAIRY_FARM_STORAGE.ajax_nonce,
            post_id,
            likes,
          })
          .done((response) => {
            let rez = {};
            try {
              rez = JSON.parse(response);
            } catch (e) {
              rez = { error: DAIRY_FARM_STORAGE.ajax_error };
              console.log(response);
            }
            if (rez.error === '') {
              if (inc == 1) {
                var title = button.data('title-dislike');
                button.removeClass('enabled').addClass('disabled');
                cookie_likes += `${(cookie_likes.substr(-1) != ',' ? ',' : '') + post_id},`;
              } else {
                var title = button.data('title-like');
                button.removeClass('disabled').addClass('enabled');
                cookie_likes = cookie_likes.replace(`,${post_id},`, ',');
              }
              button.data('likes', likes).attr('title', title).find('.post_counters_number').html(likes);
              dairy_farm_set_cookie('dairy_farm_likes', cookie_likes, 365);
            } else {
              dairy_farm_message_warning(DAIRY_FARM_STORAGE.strings.error_like);
            }
          });
        e.preventDefault();
        return false;
      });
  }

  // Social share links
  if (jQuery('.sc_socials_share:not(.inited)').length > 0) {
    jQuery('.sc_socials_share:not(.inited)').each(function () {
      jQuery(this)
        .addClass('inited')
        .on('click', '.social_item_popup > a.social_icons', function (e) {
          const url = jQuery(this).data('link');
          window.open(
            url,
            '_blank',
            'scrollbars=0, resizable=1, menubar=0, left=100, top=100, width=480, height=400, toolbar=0, status=0'
          );
          e.preventDefault();
          return false;
        });
    });
  }

  // Add video on thumb click
  if (jQuery('.sc_video_play_button:not(.inited)').length > 0) {
    jQuery('.sc_video_play_button:not(.inited)').each(function () {
      jQuery(this)
        .addClass('inited')
        .animate({ opacity: 1 }, 1000)
        .on('click', function (e) {
          if (!jQuery(this).hasClass('sc_video_play_button')) return;
          const video = jQuery(this).removeClass('sc_video_play_button hover_icon hover_icon_play').data('video');
          if (video !== '') {
            jQuery(this).empty().html(video);
            dairy_farm_video_dimensions();
            const video_tag = jQuery(this).find('video');
            const w = video_tag.width();
            const h = video_tag.height();
            dairy_farm_init_media_elements(jQuery(this));
            // Restore WxH attributes, because Chrome broke it!
            jQuery(this).find('video').css({ width: w, height: h }).attr({ width: w, height: h });
          }
          e.preventDefault();
          return false;
        });
    });
  }
}

function dairy_farm_init_media_elements(cont) {
  if (DAIRY_FARM_STORAGE.media_elements_enabled && cont.find('audio,video').length > 0) {
    if (window.mejs) {
      window.mejs.MepDefaults.enableAutosize = false;
      window.mejs.MediaElementDefaults.enableAutosize = false;
      cont.find('audio:not(.wp-audio-shortcode),video:not(.wp-video-shortcode)').each(function () {
        if (jQuery(this).parents('.mejs-mediaelement').length == 0 && !jQuery(this).parent().hasClass('wp-playlist')) {
          const media_tag = jQuery(this);
          const settings = {
            enableAutosize: true,
            videoWidth: -1, // if set, overrides <video width>
            videoHeight: -1, // if set, overrides <video height>
            audioWidth: '100%', // width of audio player
            audioHeight: 30, // height of audio player
            success(mejs) {
              let autoplay;
              let loop;
              if (mejs.pluginType === 'flash') {
                autoplay = mejs.attributes.autoplay && mejs.attributes.autoplay !== 'false';
                loop = mejs.attributes.loop && mejs.attributes.loop !== 'false';
                autoplay &&
                  mejs.addEventListener(
                    'canplay',
                    () => {
                      mejs.play();
                    },
                    false
                  );
                loop &&
                  mejs.addEventListener(
                    'ended',
                    () => {
                      mejs.play();
                    },
                    false
                  );
              }
              media_tag.parents('.sc_audio,.sc_video').addClass('inited sc_show');
            },
          };
          jQuery(this).mediaelementplayer(settings);
        }
      });
    } else
      setTimeout(() => {
        dairy_farm_init_media_elements(cont);
      }, 400);
  }
}

// Popups and system messages
//= =============================================

// Show system message (bubble from previous page)
function dairy_farm_show_system_message() {
  if (DAIRY_FARM_STORAGE.system_message && DAIRY_FARM_STORAGE.system_message.message) {
    if (DAIRY_FARM_STORAGE.system_message.status == 'success')
      dairy_farm_message_success(DAIRY_FARM_STORAGE.system_message.message, DAIRY_FARM_STORAGE.system_message.header);
    else if (DAIRY_FARM_STORAGE.system_message.status == 'info')
      dairy_farm_message_info(DAIRY_FARM_STORAGE.system_message.message, DAIRY_FARM_STORAGE.system_message.header);
    else if (
      DAIRY_FARM_STORAGE.system_message.status == 'error' ||
      DAIRY_FARM_STORAGE.system_message.status == 'warning'
    )
      dairy_farm_message_warning(DAIRY_FARM_STORAGE.system_message.message, DAIRY_FARM_STORAGE.system_message.header);
  }
}

// Toggle popups
function dairy_farm_toggle_popup(popup) {
  if (popup.css('display') != 'none') dairy_farm_hide_popup(popup);
  else dairy_farm_show_popup(popup);
}

// Show popups
function dairy_farm_show_popup(popup) {
  if (popup.css('display') == 'none') {
    if (false && DAIRY_FARM_STORAGE.css_animation)
      popup
        .show()
        .removeClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_out}`)
        .addClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_in}`);
    else popup.slideDown();
  }
}

// Hide popups
function dairy_farm_hide_popup(popup) {
  if (popup.css('display') != 'none') {
    if (false && DAIRY_FARM_STORAGE.css_animation)
      popup
        .removeClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_in}`)
        .addClass(`animated fast ${DAIRY_FARM_STORAGE.menu_animation_out}`)
        .delay(500)
        .hide();
    else popup.fadeOut();
  }
}
