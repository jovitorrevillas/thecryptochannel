<?php
/**
 * The template for displaying the footer
 *
 * Contains the closing of the #content div and all content after.
 *
 * @link https://developer.wordpress.org/themes/basics/template-files/#template-partials
 *
 * @package PenNews
 */

?>
	</div><!-- #content -->
<?php

$pennews_hide_footer = false;
if ( is_page() ) {
	$pennews_hide_footer = get_post_meta( get_the_ID(), 'penci_hide_page_footer', true );
}
if( ! $pennews_hide_footer ){

if ( is_active_sidebar( 'footer-signup-form' ) ){
	dynamic_sidebar( 'footer-signup-form' );
}
?>
<?php penci_render_google_adsense( 'penci_general_ad_above_footer' );
if(!is_single()) : ?>
	<footer id="colophon" class="site-footer" itemscope itemtype="http://schema.org/WPFooter">
		<?php clean_custom_menu("menu-2"); ?>

		<div class="footer-last-widget penci-container">
			<div class="footer-one">
				<div style="display: flex; height: 52px; padding-top: 7px;">
					<!-- rss -->
					<a href="<?php echo get_theme_mod( 'rss_footer_link' , "#"); ?>">
						<div class="social-icons">
							<i class="fa fa-rss"></i>
						</div>
					</a>
					<!-- twitter -->
					<a href="<?php echo get_theme_mod( 'twitter_footer_link' , "#"); ?>">
						<div class="social-icons">
							<i class="fa fa-twitter"></i>
						</div>
					</a>
					<!-- telegram -->
					<a href="<?php echo get_theme_mod( 'telegram_footer_link' , "#"); ?>">
						<div class="social-icons">
							<i class="fa fa-paper-plane gtm-icon-tg-footer"></i>
						</div>
					</a>
					<!-- youtube -->
					<a href="<?php echo get_theme_mod( 'youtube_footer_link' , "#"); ?>">
						<div class="social-icons">
							<i class="fa fa-youtube-play gtm-icon-yt-footer"></i>
						</div>
					</a>
					<!-- fb -->
					<a href="<?php echo get_theme_mod( 'facebook_footer_link' , "#"); ?>">
						<div class="social-icons">
							<i class="fa fa-facebook"></i>
						</div>
					</a>
				</div>
				<div class="footer-text">
					<?php echo get_theme_mod( 'footer_message_social' , "#"); ?>
				</div>
			</div>
			<div class="footer-two">
				<?php echo do_shortcode('[contact-form-7 id="86" title="Footer Email"]'); ?>

				<div class="footer-text" style="margin-top: 20px;">
					<?php echo get_theme_mod( 'footer_message_email' , "#"); ?>
				</div>
			</div>
			<div class="footer-three">
				<div style="height: 52px;"></div>
				<div style="margin-top: 20px; display: flex; flex-direction: column; align-items: flex-end;">
					<a href="<?php echo get_theme_mod( 'tos_link' , "#"); ?>">
						<?php echo get_theme_mod( 'tos_message' , "#"); ?>
					</a>
					<div class="copy-message">
						&copy; TheCryptoChannel 2018
					</div>
				</div>
			</div>
		</div>

	</footer><!-- #colophon -->
<?php endif; } ?>
</div><!-- #page -->

<?php get_template_part( 'template-parts/footer/mobile-sidebar' ); ?>
<?php if ( ! get_theme_mod( 'penci_go_to_top' ) ) : ?>
	<a href="#" id="scroll-to-top"><i class="fa fa-angle-up"></i></a>
<?php endif; ?>
<?php wp_footer(); ?>
<script>
	// Adjust 
	// header div nav#site-navigation #menu-main-menu ul.sub-menu li.menu-item a
	(function($){
		let menu_len = $('header div nav#site-navigation #menu-main-menu li.menu-item-has-children').length, item_num = 1;
		for(let loop_num = 1;loop_num<menu_len+1;loop_num++){
			let check_me = $(`header div nav#site-navigation #menu-main-menu li.menu-item-has-children:nth-child(${loop_num}) ul.sub-menu li.menu-item`).length;
			if(check_me>6)
				item_num = 5;
			else if(check_me>3)
				item_num = 3;
			else
				item_num = 1.5;
			let menu_items = $(`header div nav#site-navigation #menu-main-menu li.menu-item-has-children:nth-child(${loop_num}) ul.sub-menu li.menu-item a`).width();
			$(`header div nav#site-navigation #menu-main-menu li.menu-item-has-children:nth-child(${loop_num}) ul.sub-menu`).css('width', menu_items*item_num);
			menu_items = $('header div nav#site-navigation #menu-main-menu ul.sub-menu li.menu-item a').height();
			$('header div nav#site-navigation #menu-main-menu ul.sub-menu').css('height', (menu_items*7)-5);
			console.log(loop_num, item_num);
		}
	})(jQuery);
</script>
</body>
</html>
