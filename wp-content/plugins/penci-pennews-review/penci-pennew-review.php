<?php
/*
Plugin Name: Penci Pennew Review
Plugin URI: http://pencidesign.com/
Description: Review Shortcode Plugin for PenNews theme.
Version: 1.1
Author: PenciDesign
Author URI: http://themeforest.net/user/pencidesign?ref=pencidesign
*/

if ( ! defined( 'ABSPATH' ) ) { exit; }

/**
 * Include files
 */
require_once( dirname(__FILE__) . '/inc/functions.php' );
require_once( dirname(__FILE__) . '/inc/shortcodes.php' );
require_once( dirname(__FILE__) . '/inc/customize.php' );

/**
 * Add admin meta box style
 */
if( ! function_exists( 'penci_load_admin_metabox_review_style' ) ) {
	function penci_load_admin_metabox_review_style() {
		$screen = get_current_screen();
		if ( $screen->id == 'post' ) {
			wp_enqueue_style( 'penci_meta_box_review_styles', plugin_dir_url( __FILE__ ) . 'css/admin-css.css' );
		}
	}
}

add_action( 'admin_enqueue_scripts', 'penci_load_admin_metabox_review_style' );

/**
 * Add javascript for review plugin
 */
add_action( 'wp_enqueue_scripts', 'penci_register_review_scripts' );

if( ! function_exists( 'penci_register_review_scripts' ) ) {
	function penci_register_review_scripts(){
		wp_enqueue_script( 'jquery-penci-piechart', plugin_dir_url( __FILE__ ) . 'js/jquery.easypiechart.min.js', array('jquery'), '1.0', true );
		wp_enqueue_style('penci-oswald', '//fonts.googleapis.com/css?family=Oswald:400', array(), false, 'all');
	}
}

/**
 * Adds Penci review meta box to the post editing screen
 */
if( ! function_exists( 'Penci_Review_Add_Custom_Metabox' ) ) {
	function Penci_Review_Add_Custom_Metabox() {
		new Penci_Review_Add_Custom_Metabox_Class();
	}
}

if ( is_admin() ) {
	add_action( 'load-post.php', 'Penci_Review_Add_Custom_Metabox' );
	add_action( 'load-post-new.php', 'Penci_Review_Add_Custom_Metabox' );
}

/**
 * The Class.
 */
if( ! class_exists( 'Penci_Review_Add_Custom_Metabox_Class' ) ) {
	class Penci_Review_Add_Custom_Metabox_Class {

		/**
		 * Hook into the appropriate actions when the class is constructed.
		 */
		public function __construct() {
			add_action( 'add_meta_boxes', array( $this, 'add_meta_box' ) );
			add_action( 'save_post', array( $this, 'save' ) );
		}

		/**
		 * Adds the meta box container.
		 */
		public function add_meta_box( $post_type ) {
			$post_types = array('post');     //limit meta box to certain post types
			if ( in_array( $post_type, $post_types )) {
				add_meta_box(
					'penci_review_meta'
					,esc_html__( 'Add A Review For This Posts', 'soledad' )
					,array( $this, 'render_meta_box_content' )
					,$post_type
					,'advanced'
					,'default'
				);
			}
		}

		/**
		 * Save the meta when the post is saved.
		 *
		 * @param int $post_id The ID of the post being saved.
		 */
		public function save( $post_id ) {

			/*
			 * We need to verify this came from the our screen and with proper authorization,
			 * because save_post can be triggered at other times.
			 */

			// Check if our nonce is set.
			if ( ! isset( $_POST['penci_review_custom_box_nonce'] ) )
				return $post_id;

			$nonce = $_POST['penci_review_custom_box_nonce'];

			// Verify that the nonce is valid.
			if ( ! wp_verify_nonce( $nonce, 'penci_review_custom_box' ) )
				return $post_id;

			// If this is an autosave, our form has not been submitted,
			//     so we don't want to do anything.
			if ( defined( 'DOING_AUTOSAVE' ) && DOING_AUTOSAVE )
				return $post_id;

			// Check the user's permissions.
			if ( ! current_user_can( 'edit_post', $post_id ) )
				return $post_id;

			$review_1    = isset( $_POST['penci_review_1'] ) ? $_POST['penci_review_1'] : '';
			$review_1num = isset( $_POST['penci_review_1_num'] ) ? $_POST['penci_review_1_num'] : '';
			$review_2    = isset( $_POST['penci_review_2'] ) ? $_POST['penci_review_2'] : '';
			$review_2num = isset( $_POST['penci_review_2_num'] ) ? $_POST['penci_review_2_num'] : '';
			$review_3    = isset( $_POST['penci_review_3'] ) ? $_POST['penci_review_3'] : '';
			$review_3num = isset( $_POST['penci_review_3_num'] ) ? $_POST['penci_review_3_num'] : '';
			$review_4    = isset( $_POST['penci_review_4'] ) ? $_POST['penci_review_4'] : '';
			$review_4num = isset( $_POST['penci_review_4_num'] ) ? $_POST['penci_review_4_num'] : '';
			$review_5    = isset( $_POST['penci_review_5'] ) ? $_POST['penci_review_5'] : '';
			$review_5num = isset( $_POST['penci_review_5_num'] ) ? $_POST['penci_review_5_num'] : '';

			$penci_review = array(
				'penci_review_style' => isset( $_POST['penci_review_style'] ) ? $_POST['penci_review_style'] : '',
				'penci_review_title' => isset( $_POST['penci_review_title'] ) ? $_POST['penci_review_title'] : '',
				'penci_review_des'   => isset( $_POST['penci_review_des'] ) ? $_POST['penci_review_des'] : '',
				'penci_review_1'     => $review_1,
				'penci_review_1_num' => $review_1num,
				'penci_review_2'     => $review_2,
				'penci_review_2_num' => $review_2num,
				'penci_review_3'     => $review_3,
				'penci_review_3_num' => $review_3num,
				'penci_review_4'     => $review_4,
				'penci_review_4_num' => $review_4num,
				'penci_review_5'     => $review_5,
				'penci_review_5_num' => $review_5num,
				'penci_review_good'  => isset( $_POST['penci_review_good'] ) ? $_POST['penci_review_good'] : '',
				'penci_review_bad'   => isset( $_POST['penci_review_bad'] ) ? $_POST['penci_review_bad'] : '',
			);

			update_post_meta( $post_id, 'penci_review', $penci_review );

			$total_score = 0;
			$total_num   = 0;

			if ( $review_1 && $review_1num ):
				$total_score = $total_score + $review_1num;
				$total_num   = $total_num + 1;
			endif;
			if ( $review_2 && $review_2num ):
				$total_score = $total_score + $review_2num;
				$total_num   = $total_num + 1;
			endif;
			if ( $review_3 && $review_3num ):
				$total_score = $total_score + $review_3num;
				$total_num   = $total_num + 1;
			endif;
			if ( $review_4 && $review_4num ):
				$total_score = $total_score + $review_4num;
				$total_num   = $total_num + 1;
			endif;
			if ( $review_5 && $review_5num ):
				$total_score = $total_score + $review_5num;
				$total_num   = $total_num + 1;
			endif;

			if ( $total_score && $total_num ) {
				update_post_meta( $post_id, 'penci_total_review', ( $total_score / $total_num ) );
			}
		}


		/**
		 * Render Meta Box content.
		 *
		 * @param WP_Post $post The post object.
		 */
		public function render_meta_box_content( $post ) {

			// Add an nonce field so we can check for it later.
			wp_nonce_field( 'penci_review_custom_box', 'penci_review_custom_box_nonce' );

			// Use get_post_meta to retrieve an existing value from the database.
			$penci_review = get_post_meta( $post->ID, 'penci_review', true );

			$review_style = isset( $penci_review['penci_review_style'] ) ? $penci_review['penci_review_style'] : '';
			$review_title = isset( $penci_review['penci_review_title'] ) ? $penci_review['penci_review_title'] : '';
			$review_des   = isset( $penci_review['penci_review_des'] ) ? $penci_review['penci_review_des'] : '';
			$review_1     = isset( $penci_review['penci_review_1'] ) ? $penci_review['penci_review_1'] : '';
			$review_1num  = isset( $penci_review['penci_review_1_num'] ) ? $penci_review['penci_review_1_num'] : '';
			$review_2     = isset( $penci_review['penci_review_2'] ) ? $penci_review['penci_review_2'] : '';
			$review_2num  = isset( $penci_review['penci_review_2_num'] ) ? $penci_review['penci_review_2_num'] : '';
			$review_3     = isset( $penci_review['penci_review_3'] ) ? $penci_review['penci_review_3'] : '';
			$review_3num  = isset( $penci_review['penci_review_3_num'] ) ? $penci_review['penci_review_3_num'] : '';
			$review_4     = isset( $penci_review['penci_review_4'] ) ? $penci_review['penci_review_4'] : '';
			$review_4num  = isset( $penci_review['penci_review_4_num'] ) ? $penci_review['penci_review_4_num'] : '';
			$review_5     = isset( $penci_review['penci_review_5'] ) ? $penci_review['penci_review_5'] : '';
			$review_5num  = isset( $penci_review['penci_review_5_num'] ) ? $penci_review['penci_review_5_num'] : '';
			$review_good  = isset( $penci_review['penci_review_good'] ) ? $penci_review['penci_review_good'] : '';
			$review_bad   = isset( $penci_review['penci_review_bad'] ) ? $penci_review['penci_review_bad'] : '';

			// Display the form, using the current value.
			?>

			<div class="penci-table-meta">
				<h3>Review settings</h3>
				<p>You can display your review for this post by using the following shortcode: <span class="penci-review-shortcode">[penci_review id="<?php echo $post->ID; ?>"]</span><br>If you do not need this feature, you should go to <strong>Plugins > Installed Plugins > and deactivate plugin
						"Penci
						Review"</strong></p>
				<p>
					<label for="penci_review_style" class="penci-format-row">Review Style:</label>
					<select name="penci_review_style" id="penci_review_style">
						<option value="<?php echo esc_attr( 'style_1' ) ?>" <?php selected( $review_style,'style_1'  ) ?>><?php esc_html_e( 'Points Review' ) ?></option>
						<option value="<?php echo esc_attr( 'style_2' ) ?>" <?php selected( $review_style,'style_2'  ) ?>><?php esc_html_e( 'Percent Review' ) ?></option>
						<option value="<?php echo esc_attr( 'style_3' ) ?>" <?php selected( $review_style,'style_3'  ) ?>><?php esc_html_e( 'Stars Review' ) ?></option>
					</select>
				</p>
				<p>
					<label for="penci_review_title" class="penci-format-row">Review Title:</label>
					<input style="width:100%;" type="text" name="penci_review_title" id="penci_review_title" value="<?php echo $review_title; ?>">
				</p>
				<p>
					<label for="penci_review_des" class="penci-format-row">Description:</label>
					<textarea style="width:100%; height:120px;" name="penci_review_des" id="penci_review_des"><?php  echo $review_des; ?></textarea>
					<span class="penci-recipe-description">You can write some description for your review here.</span>
				</p>
				<p class="review-odd">
					<label for="penci_review_1" class="penci-format-row">Review Title for Point 1:</label>
					<input style="width:100px;" type="text" name="penci_review_1" id="penci_review_1" value="<?php echo $review_1; ?>">
					<span class="penci-recipe-description">Example: Design</span>
				</p>
				<p>
					<label for="penci_review_1_num" class="penci-format-row">Review Number for Point 1:</label>
					<input style="width:100px;" type="number" name="penci_review_1_num" id="penci_review_1_num" value="<?php echo $review_1num; ?>">
					<span class="penci-recipe-description">Minimum is 1, Maximum is 10. Example: 8</span>
				</p>
				<p class="review-odd">
					<label for="penci_review_2" class="penci-format-row">Review Title for Point 2:</label>
					<input style="width:100px;" type="text" name="penci_review_2" id="penci_review_2" value="<?php echo $review_2; ?>">
				</p>
				<p>
					<label for="penci_review_2_num" class="penci-format-row">Review Number for Point 2:</label>
					<input style="width:100px;" type="number" name="penci_review_2_num" id="penci_review_2_num" value="<?php echo $review_2num; ?>">
					<span class="penci-recipe-description">Minimum is 1, Maximum is 10. Example: 8</span>
				</p>
				<p class="review-odd">
					<label for="penci_review_3" class="penci-format-row">Review Title for Point 3:</label>
					<input style="width:100px;" type="text" name="penci_review_3" id="penci_review_3" value="<?php echo $review_3;  ?>">
				</p>
				<p>
					<label for="penci_review_3_num" class="penci-format-row">Review Number for Point 3:</label>
					<input style="width:100px;" type="number" name="penci_review_3_num" id="penci_review_3_num" value="<?php echo $review_3num; ?>">
					<span class="penci-recipe-description">Minimum is 1, Maximum is 10. Example: 8</span>
				</p>
				<p class="review-odd">
					<label for="penci_review_4" class="penci-format-row">Review Title for Point 4:</label>
					<input style="width:100px;" type="text" name="penci_review_4" id="penci_review_4" value="<?php echo $review_4; ?>">
				</p>
				<p>
					<label for="penci_review_4_num" class="penci-format-row">Review Number for Point 4:</label>
					<input style="width:100px;" type="number" name="penci_review_4_num" id="penci_review_4_num" value="<?php  echo $review_4num; ?>">
					<span class="penci-recipe-description">Minimum is 1, Maximum is 10. Example: 8</span>
				</p>
				<p class="review-odd">
					<label for="penci_review_5" class="penci-format-row">Review Title for Point 5:</label>
					<input style="width:100px;" type="text" name="penci_review_5" id="penci_review_5" value="<?php echo $review_5; ?>">
				</p>
				<p>
					<label for="penci_review_5_num" class="penci-format-row">Review Number for Point 5:</label>
					<input style="width:100px;" type="number" name="penci_review_5_num" id="penci_review_5_num" value="<?php echo $review_5num; ?>">
					<span class="penci-recipe-description">Minimum is 1, Maximum is 10. Example: 8</span>
				</p>
				<p>
					<label for="penci_review_good" class="penci-format-row">The Goods:</label>
					<textarea style="width:100%; height:120px;" name="penci_review_good" id="penci_review_good"><?php echo $review_good; ?></textarea>
					<span class="penci-recipe-description">Type each the good on a new line.</span>
				</p>
				<p>
					<label for="penci_review_bad" class="penci-format-row">The Bads:</label>
					<textarea style="width:100%; height:120px;" name="penci_review_bad" id="penci_review_bad"><?php echo $review_bad; ?></textarea>
					<span class="penci-recipe-description">Type each the bad on a new line.</span>
				</p>
			</div>
			<?php
		}
	}
}
