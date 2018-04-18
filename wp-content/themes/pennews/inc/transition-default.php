<?php
/**
 * Get theme transition text default settings.
 *
 * @param string $name
 *
 * @return mixed
 */
function penci_tran_default_setting( $name ) {
	$defaults = array(
		// Transition Topbar

		'penci_topbar_logout'                    => esc_html__( 'Logout', 'pennews' ),
		'penci_topbar_signin'                    => esc_html__( 'Sign in / Join', 'pennews' ),

        // Transition comment

		'penci_comment_text'                     => esc_html__( 'Comments', 'pennews' ),
		'penci_comment_zero'                     => esc_html__( '0 comment', 'pennews' ),
		'penci_comment_one'                      => esc_html__( '1 comment', 'pennews' ),
		'penci_comment_more'                     => esc_html__( 'comments', 'pennews' ),
		'penci_comment_author_placeholder'       => esc_html__( 'Name*', 'pennews' ),
		'penci_comment_author_email_placeholder' => esc_html__( 'Email*', 'pennews' ),
		'penci_comment_author_url_placeholder'   => esc_html__( 'Website', 'pennews' ),
		'penci_comment_field_placeholder'        => esc_html__( 'Your Comment', 'pennews' ),
		'penci_comment_title_reply'              => esc_html__( 'Leave a Comment', 'pennews' ),
		'penci_comment_title_reply_to'           => esc_html__( 'Leave a Reply to', 'pennews' ),
		'penci_comment_cancel_reply_link'        => esc_html__( 'Cancel Reply', 'pennews' ),
		'penci_comment_label_submit'             => esc_html__( 'Submit', 'pennews' ),
		'penci_comment_awaiting_approval'        => esc_html__( 'Your comment awaiting approval', 'pennews' ),
		'penci_comment_reply_text'               => esc_html__( 'Reply', 'pennews' ),
		'penci_comment_edit_comment'             => esc_html__( 'Edit', 'pennews' ),
		'penci_comment_close'                    => esc_html__( 'Comments are closed.', 'pennews' ),

		'penci_search_title'                     => esc_html__( 'Search Results for:', 'pennews' ),
		'penci_ajaxsearch_viewmore_text'         => esc_html__( 'View More Search Results', 'pennews' ),
		'penci_ajaxsearch_no_post'               => esc_html__( 'No Post Found!', 'pennews' ),
		'penci_breadcrumb_home_label'            => esc_html__( 'Home', 'pennews' ),
		'penci_breadcrumb_page_404'              => esc_html__( 'Not Found', 'pennews' ),
		'penci_breadcrumb_author_archive'        => esc_html__( 'Author', 'pennews' ),
		'penci_breadcrumb_day_archive'           => esc_html__( 'Day Archives:', 'pennews' ),
		'penci_breadcrumb_monthly_archives'      => esc_html__( 'Monthly Archives:', 'pennews' ),
		'penci_breadcrumb_yearly_archives'       => esc_html__( 'Yearly Archives:', 'pennews' ),
		'penci_breadcrumb_archives'              => esc_html__( 'Archives:', 'pennews' ),
		'penci_plogin_wrong'                     => esc_html__( 'Wrong username or password', 'pennews' ),
		'penci_plogin_success'                   => esc_html__( 'Login successful, redirecting...', 'pennews' ),
		'penci_plogin_email_place'               => esc_html__( 'Email Address', 'pennews' ),
		'penci_plogin_pass_place'                => esc_html__( 'Password', 'pennews' ),
		'penci_plogin_label_remember'            => esc_html__( 'Keep me signed in until I sign out', 'pennews' ),
		'penci_plogin_label_log_in'              => esc_html__( 'Login to your account', 'pennews' ),
		'penci_plogin_label_lostpassword'        => esc_html__( 'Forgot your password?', 'pennews' ),
		'penci_plogin_text_has_account'          => esc_html__( 'Do not have an account ?', 'pennews' ),
		'penci_plogin_label_registration'        => esc_html__( ' Register here', 'pennews' ),

		'penci_pregister_first_name'             => esc_html__( 'First Name', 'pennews' ),
		'penci_pregister_last_name'              => esc_html__( 'Last Name', 'pennews' ),
		'penci_pregister_user_name'              => esc_html__( 'Username', 'pennews' ),
		'penci_pregister_user_email'             => esc_html__( 'Email address', 'pennews' ),
		'penci_pregister_user_pass'              => esc_html__( 'Password', 'pennews' ),
		'penci_pregister_pass_confirm'           => esc_html__( 'Confirm Password', 'pennews' ),
		'penci_pregister_button_submit'          => esc_html__( 'Sign up new account', 'pennews' ),
		'penci_pregister_has_account'            => esc_html__( 'Have an account?', 'pennews' ),
		'penci_pregister_label_registration'     => esc_html__( 'Login here', 'pennews' ),

		'penci_plogin_mess_invalid_email'        => esc_html__( 'Invalid email.', 'pennews' ),
		'penci_plogin_mess_error_email_pass'     => esc_html__( 'Password does not match the confirm password', 'pennews' ),
		'penci_plogin_mess_username_reg'         => esc_html__( 'This username is already registered.', 'pennews' ),
		'penci_plogin_mess_email_reg'            => esc_html__( 'This email address is already registered.', 'pennews' ),
		'penci_plogin_mess_wrong_email_pass'     => esc_html__( 'Wrong username or password.', 'pennews' ),
		'penci_plogin_mess_reg_succ'             => esc_html__( 'Registered successful, redirecting...', 'pennews' ),

		'penci_posts_text'                       => esc_html__( 'Posts', 'pennews' ),
		'penci_content_not_found_text'           => esc_html__( 'Not found', 'pennews' ),
		'penci_content_pre_text'                 => esc_html__( 'previous post', 'pennews' ),
		'penci_content_next_text'                => esc_html__( 'next post', 'pennews' ),
		'penci_content_no_more_post_text'        => esc_html__( 'Sorry, No more posts', 'pennews' ),
		'penci_no_results_text'                  => esc_html__( 'Sorry, we can&rsquo;t find what you&rsquo;re looking for. Please try search.', 'pennews' ),
		'penci_homepage_no_results_text'         => sprintf( __( 'Ready to publish your first post? <a href="%1$s">Get started here</a>.', 'pennews' ), esc_url( admin_url( 'post-new.php' ) ) ),
		'penci_blog_more_text'                   => esc_html__( 'Read more', 'pennews' ),
		'penci-social-share-text'                => esc_html__( 'Share', 'pennews' ),

		'penci_prefix_ar_title_archive' => esc_html__( 'Archives :', 'pennews' ),
		'penci_prefix_ar_title_cat'     => esc_html__( 'Category :', 'pennews' ),
		'penci_prefix_ar_title_tag'     => esc_html__( 'Tag :', 'pennews' ),
		'penci_prefix_ar_title_auhor'   => esc_html__( 'Author :', 'pennews' ),
		'penci_prefix_ar_title_year'    => esc_html__( 'Year :', 'pennews' ),
		'penci_prefix_ar_title_month'   => esc_html__( 'Month :', 'pennews' ),
		'penci_prefix_ar_title_day'     => esc_html__( 'Day :', 'pennews' ),

		'penci_footer_text_aboutus'              => esc_html__( "About US", 'pennews' ),
		'penci_footer_text_follow_us'            => esc_html__( "Follow us", 'pennews' ),
		'penci_click_handle_text'                => esc_html__( 'Load more posts', 'pennews' ),
		'penci_linkTitle_text'                   => esc_html__( 'View More', 'pennews' ),
		'penci_linkTextAll_text'                 => esc_html__( 'Menu', 'pennews' ),
		'penci_linkText_text'                    => esc_html__( 'More', 'pennews' ),

		'penci_translation_text_by'              => esc_html__( 'by', 'pennews' ),
		'penci_tran_text_viewallp'               => esc_html__( 'View all posts', 'pennews' ),
		'penci_login_hello'                      => esc_html__( 'Hello', 'pennews' ),
		'penci_text_profile'                     => esc_html__( 'Profile', 'pennews' ),
		'penci_text_logout'                      => esc_html__( 'Logout', 'pennews' ),
		'penci_mess_whatsapp'                    => esc_html__( 'Sharing on whatsapp will does not work on PC.', 'pennews' ),

		'penci_portfolio_related_text' => esc_html__( 'Related Projects', 'pennews' ),
		'penci_pfl_prev_text'          => esc_html__( 'Previous project', 'pennews' ),
		'penci_pfl_next_text'          => esc_html__( 'Next project', 'pennews' ),

	);


	return isset( $defaults[ $name ] ) ? $defaults[ $name ] : '';
}

/**
 * Get theme settings.
 *
 * @param string $name
 *
 * @return mixed
 */
if ( ! function_exists( 'penci_get_tran_setting' ) ):
	function penci_get_tran_setting( $name ) {
		$value = get_theme_mod( $name, penci_tran_default_setting( $name ) );

		return do_shortcode( $value );

	}
endif;