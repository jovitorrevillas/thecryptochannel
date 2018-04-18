<?php
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

if ( ! class_exists( 'Penci_Custom_VC' ) ):
	class Penci_Custom_VC {
		public function __construct() {
			if ( ! defined( 'WPB_VC_VERSION' ) ) {
				return;
			}
			$this->load_files();
			$this->hooks();
		}

		public function load_files() {
			require_once PENCI_ADDONS_DIR . '/inc/custom-vc/default-templates.php';
		}

		public function hooks() {
			add_filter( 'vc_shortcodes_css_class', array( $this, 'shortcodes_css_class' ), 10, 2 );
			add_action('admin_init', array( $this, 'help_pointers' ) );
			add_action( 'wp_enqueue_scripts', array( $this, 'vc_page_editable_enqueue_pointer_scripts' ) );
		}

		function shortcodes_css_class( $class, $tag ) {
			if ( $tag == 'vc_row' || $tag == 'vc_row_inner' ) {
				$class = str_replace( 'vc_row-fluid', 'vc_row-fluid penci-pb-row', $class );
			}
			if ( $tag == 'vc_column' || $tag == 'vc_column_inner' ) {
				$class = preg_replace( '/vc_col-sm-(\d{1,2})/', 'vc_col-sm-$1 penci-col-$1', $class );
			}

			return $class;
		}

		public function help_pointers() {
			if ( is_admin() ) {
				foreach ( vc_editor_post_types() as $post_type ) {
					add_filter( 'vc_ui-pointers-' . $post_type, array( $this, 'add_pointer' ) );
				}
			}
		}
		public function add_pointer( $pointers ) {
			$screen = get_current_screen();


			if ( 'add' === $screen->action ) {
				$pointers['vc_pointers_backend_editor'] = array(
					'name' => 'vcPointerController',
					'messages' => array(
						array(
							'target' => '.composer-switch',
							'options' => array(
								'content' => sprintf( '<h3> %s </h3> <p> %s </p>',
									__( 'Welcome to WPBakery Page Builder', 'penci-framework' ),
									__( 'Choose Backend or Frontend editor.', 'penci-framework' )
								),
								'position' => array(
									'edge' => 'left',
									'align' => 'center',
								),
								'buttonsEvent' => 'vcPointersEditorsTourEvents',
							),
						),
						array(
							'target' => '#vc_templates-editor-button, #vc-templatera-editor-button',
							'options' => array(
								'content' => sprintf( '<h3> %s </h3> <p> %s </p>',
									__( 'Add Elements', 'penci-framework' ),
									__( 'Add new element or start with a template.', 'penci-framework' )
								),
								'position' => array(
									'edge' => 'left',
									'align' => 'center',
								),
								'buttonsEvent' => 'vcPointersEditorsTourEvents',
							),
							'closeEvent' => 'shortcodes:vc_row:add',
							'showEvent' => 'backendEditor.show',
						),
						array(
							'target' => '[data-vc-control="add"]:first',
							'options' => array(
								'content' => sprintf( '<h3> %s </h3> <p> %s </p>',
									__( 'Rows and Columns', 'penci-framework' ),
									__( 'This is a row container. Divide it into columns and style it. You can add elements into columns.', 'penci-framework' )
								),
								'position' => array(
									'edge' => 'left',
									'align' => 'center',
								),
								'buttonsEvent' => 'vcPointersEditorsTourEvents',
							),
							'closeEvent' => 'click #wpb_visual_composer',
							'showEvent' => 'shortcodeView:ready',
						),
						array(
							'target' => '.wpb_column_container:first .wpb_content_element:first .vc_controls-cc',
							'options' => array(
								'content' => sprintf( '<h3> %s </h3> <p> %s <br/><br/> %s</p>',
									__( 'Control Elements', 'penci-framework' ),
									__( 'You can edit your element at any time and drag it around your layout.', 'penci-framework' ),
									sprintf( __( 'P.S. Learn more at our <a href="%s" target="_blank">Knowledge Base</a>.', 'penci-framework' ), 'http://kb.wpbakery.com' )
								),
								'position' => array(
									'edge' => 'left',
									'align' => 'center',
								),
								'buttonsEvent' => 'vcPointersEditorsTourEvents',
							),
							'showCallback' => 'vcPointersShowOnContentElementControls',
							'closeEvent' => 'click #wpb_visual_composer',
						),
					),
				);
			}

			return $pointers;
		}

		function vc_page_editable_enqueue_pointer_scripts() {
			if ( vc_is_page_editable() ) {
				wp_enqueue_style( 'wp-pointer' );
				wp_enqueue_script( 'wp-pointer' );
				// Add pointers script to queue. Add custom script.
				wp_enqueue_script( 'vc_pointer-message', vc_asset_url( 'js/lib/vc-pointers/vc-pointer-message.js' ),
					array(
						'jquery',
						'underscore',
						'wp-pointer'
					),
					WPB_VC_VERSION,
					true );
			}
		}
	}
endif;


