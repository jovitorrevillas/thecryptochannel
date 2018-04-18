<?php
//Ajax login-popup
add_action( 'wp_ajax_nopriv_penci_login_ajax', 'penci_login_ajax_callback' );
add_action( 'wp_ajax_penci_login_ajax', 'penci_login_ajax_callback' );

function penci_login_ajax_callback() {
	global $wpdb;

	//We shall SQL prepare all inputs to avoid sql injection.
	$username = isset( $_REQUEST['username'] ) ? $wpdb->prepare( $_REQUEST['username'], array() ) : '';
	$password = $_REQUEST['password'];
	$remember = isset( $_REQUEST['rememberme'] ) ? $wpdb->prepare( $_REQUEST['rememberme'], array() ) : '';

	if ( $remember ) {
		$remember = 'true';
	} else {
		$remember = 'false';
	}

	$login_data                  = array();
	$login_data['user_login']    = $username;
	$login_data['user_password'] = $password;
	$login_data['remember']      = $remember;
	$user_verify                 = wp_signon( $login_data, false );

	if ( is_wp_error( $user_verify ) ) {

		wp_send_json_error( '<p class="message message-error">' . penci_get_tran_setting( 'penci_plogin_wrong' ) . '</p>' );

	}

	wp_send_json_success( '<p class="message message-success">' . penci_get_tran_setting( 'penci_plogin_success' ) . '</p>' );
}

//Ajax widget login-popup
add_action( 'wp_ajax_nopriv_penci_register_ajax', 'penci_register_ajax_callback' );
add_action( 'wp_ajax_penci_register_ajax', 'penci_register_ajax_callback' );

function penci_register_ajax_callback() {

	$nonce =  $_POST['_wpnonce'];

	$first_name  = sanitize_text_field( $_POST['fistName'] );
	$last_name   = sanitize_text_field( $_POST['lastName'] );
	$username    = sanitize_text_field( $_POST['username'] );
	$email       = sanitize_text_field( $_POST['email'] );
	$pass        = sanitize_text_field( $_POST['password'] );
	$confirmPass = sanitize_text_field( $_POST['confirmPass'] );

	$error = array();
	if ( ! is_email( $email ) ) {
		$error[] = penci_get_tran_setting( 'penci_plogin_mess_invalid_email' );
	}

	if ( $confirmPass != $pass ) {
		$error[] = penci_get_tran_setting( 'penci_plogin_mess_error_email_pass' );

	}

	if ( ! empty( $error ) ) {


		$error = implode( '<br> ', $error );
		wp_send_json_error( '<p class="message message-error">' . $error . '</p>' );
	}

	// Register the user
	$user_register = wp_insert_user( array(
		'first_name' => $first_name,
		'last_name'  => $last_name,
		'user_login' => $username,
		'user_email' => $email,
		'user_pass'  => $pass

	) );

	if ( is_wp_error($user_register) ){
		$error  = $user_register->get_error_codes()	;

		if ( in_array( 'empty_user_login', $error ) ) {

			wp_send_json_error( '<p class="message message-error">' . $user_register->get_error_message( 'empty_user_login' ) . '</p>' );

		} elseif ( in_array( 'existing_user_login', $error ) ) {
			wp_send_json_error( '<p class="message message-error">' . penci_get_tran_setting( 'penci_plogin_mess_username_reg' ) . '</p>' );

		} elseif ( in_array( 'existing_user_email', $error ) ) {
			wp_send_json_error( '<p class="message message-error">' . penci_get_tran_setting( 'penci_plogin_mess_email_reg' ) . '</p>' );
		}
	} else {

		$user_signon = wp_signon( array(
			'user_login'    => $username,
			'user_password' => $pass,
			'remember'      => true
		), false );

		if ( is_wp_error( $user_signon ) ) {
			wp_send_json_error( '<p class="message message-error">' .  penci_get_tran_setting( 'penci_plogin_mess_wrong_email_pass' ). '</p>' );
		} else {
			wp_set_current_user( $user_signon->ID );
			wp_send_json_success( '<p class="message message-success">' . penci_get_tran_setting( 'penci_plogin_mess_reg_succ' ) . '</p>' );

		}
	}
}


function penci_login_register_popup() {
	?>
	<?php if ( ! is_user_logged_in() ): ?>
		<div id="penci-popup-login" class="penci-popup-login-register penci-popup-login">
			<div class="penci-login-container">
				<h2 class="title"><?php echo penci_get_setting( 'penci_plogin_title_login' ); ?></h2>
				<div class="penci-login">
					<?php wp_login_form( array(
						'redirect'       => ! empty( $_REQUEST['redirect_to'] ) ? esc_url( $_REQUEST['redirect_to'] ) : apply_filters( 'penci_default_login_redirect', home_url() ),
						'id_username'    => 'penci_login',
						'id_password'    => 'penci_pass',
						'label_username' => esc_html__( 'Username or email', 'pennews' ),
						'label_password' => esc_html__( 'Password', 'pennews' ),
						'label_remember' => penci_get_tran_setting( 'penci_plogin_label_remember' ),
						'label_log_in'   => penci_get_tran_setting( 'penci_plogin_label_log_in' ),
					) ); ?>
					<a class="penci-lostpassword" href="<?php echo esc_url( wp_lostpassword_url() ); ?>"><?php echo( penci_get_tran_setting( 'penci_plogin_label_lostpassword' ) ); ?></a>
				</div>
				<?php if ( get_option( 'users_can_register' ) ) : ?>
					<div class="register register-popup">
						<?php echo ( penci_get_tran_setting( 'penci_plogin_text_has_account' ) ); ?><a href="<?php echo wp_registration_url(); ?>"><?php  echo ( penci_get_tran_setting( 'penci_plogin_label_registration' ) ); ?></a>
					</div>
				<?php endif; ?>
				<a class="close-popup form" href="#"><?php  esc_html_e( 'X','pennews' ) ?></a>
				<div class="penci-load-thecube">
					<div class="penci-load-cube penci-load-c1"></div>
					<div class="penci-load-cube penci-load-c2"></div>
					<div class="penci-load-cube penci-load-c4"></div>
					<div class="penci-load-cube penci-load-c3"></div>
				</div>
			</div>
		</div>
		<div id="penci-popup-register" class="penci-popup-login-register penci-popup-register">
			<div class="penci-login-container">
				<h2 class="title"><?php echo penci_get_setting( 'penci_plogin_title_register' ); ?></h2>
				<div class="penci-login">
					<form name="form" id="registration" method="post">
						<input type="hidden" name="_wpnonce" value="<?php echo wp_create_nonce( 'register' ); ?>">
						<div class="first-last">
							<div class="register-input">
								<input class="penci_first_name" name="penci_first_name" type="text" placeholder="<?php echo penci_get_tran_setting( 'penci_pregister_first_name' ); ?>"/>
							</div>
							<div class="register-input">
								<input class="penci_last_name" name="penci_last_name" type="text" placeholder="<?php echo penci_get_tran_setting( 'penci_pregister_last_name' ); ?>"/>
							</div>
						</div>
						<div class="register-input">
							<input class="penci_user_name" name="penci_user_name" type="text" placeholder="<?php echo penci_get_tran_setting( 'penci_pregister_user_name' ); ?>"/>
						</div>
						<div class="register-input">
							<input class="penci_user_email" name="penci_user_email" type="email" placeholder="<?php echo penci_get_tran_setting( 'penci_pregister_user_email' ); ?>"/>
						</div>
						<div class="register-input">
							<input class="penci_user_pass" name="penci_user_pass" type="password" placeholder="<?php echo penci_get_tran_setting( 'penci_pregister_user_pass' ); ?>"/>
						</div>
						<div class="register-input">
							<input class="penci_user_pass_confirm" name="penci_user_pass_confirm" type="password"  placeholder="<?php echo penci_get_tran_setting( 'penci_pregister_pass_confirm' ); ?>"/>
						</div>
						<div class="register-input">
							<input type="submit" name="penci_submit" class="button" value="<?php echo penci_get_tran_setting( 'penci_pregister_button_submit' ); ?>"/>
						</div>
						<div class="register-input login login-popup">
							<?php echo penci_get_tran_setting( 'penci_pregister_has_account' ); ?><a href="#login"> <?php  echo penci_get_tran_setting( 'penci_pregister_label_registration' ); ?></a>
						</div>
						<a class="close-popup form" href="#"><?php  esc_html_e( 'X','pennews' ) ?></a>
						<div class="penci-load-thecube">
							<div class="penci-load-cube penci-load-c1"></div>
							<div class="penci-load-cube penci-load-c2"></div>
							<div class="penci-load-cube penci-load-c4"></div>
							<div class="penci-load-cube penci-load-c3"></div>
						</div>
					</form>
				</div>
			</div>
		</div>
	<?php endif;
}