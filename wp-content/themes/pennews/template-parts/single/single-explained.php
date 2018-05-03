<?php

$single_style    = penci_get_setting( 'penci_single_template' );
$single_hide_img = penci_get_setting( 'penci_hide_single_featured_img' );
$align_title     = 'penci-title-' . penci_get_setting( 'penci_single_align_post_title' );
$single_loadmore = penci_get_setting( 'penci_auto_load_prev_post' );
?>

<style>
	
	
	.text-header{
		font: 700 38px/38px 'Open Sans';
 
    font-size: 30px;
    font-weight: bold;
    color: #010101;
	}
	
	.side-links ul li{
		margin-bottom:20px;
	}
	
	.adjust-sidebar{

		
	}
	
	.side-links ul li a {
	font-family: 'Open Sans',sans-serif;
    color: #263238;
		font-size:17.5px;
		
    text-decoration: none;

	}
	.side-links-active{
		transition:1s;
		color:#d0d7db !important;
	}
	
	.side-links-nums{
		font: 700 22px 'Open Sans';
    color: #78909c;
		padding-right:10px;
		
	}
	
	.sticky {
      position: fixed;
    top: 0;
 	
	
}
	

	
	#sticky-block{
		z-index:100;
		 overflow: hidden;
	
		
		width:1024px;
	}
	
	
	.block_info{
		padding: 50px;
    box-sizing: border-box;
    border-radius: 3px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0px 0px 18px 0px rgba(38, 50, 56, 0.1);
		    margin-bottom: 40px;
	}
	.content{
	    margin-left: 60px;
    word-wrap: break-word;
    padding-top: 10px;
    position: relative;
    font-size: 16px;
    color: #27282d;
    background: #fff;
    text-align: justify;
    line-height: 1.42857143;
	}
	
	.name{
	    margin-left: 58px;
    padding-bottom: 30px;
    margin-top: 0;
    margin-bottom: 0;
	}
	
	.num{
		display: inline-block;
    width: 48px;
    height: 65px;
    text-align: center;
    float: left;
    font: 700 26px 'Open Sans';
    color: #78909c;
    position: relative;
    top: 2px;
	}
	
	.share-block{
		    height: 90px;
    width:100%;
	
    background-color: rgba(255, 255, 255, 0.8);
    margin-bottom: 40px;
    box-shadow: 0px 5px 10px -3px rgba(38, 50, 56, 0.1);
   
    
	}
	
	.partnership {
    display: inline-block;
    text-decoration: none;
    vertical-align: top;
    height: 90px;
    font: 400 28px/90px 'Open Sans';
    color: #2e353a;
    margin-left: 32px;
    box-sizing: border-box;
    position: relative;
    padding-left: 218px;
}
	.partnership img {
    position: absolute;
    top: 22px;
    left: 0;
}
	.partnership p {
    display: inline-block;
}
	.sv_wrap {
    display: block;
    height: 40px;
    margin-top: -104px;
}
	
	ul li {
    list-style-type:none;
}
	
	
	.share {
    display: block;
    list-style: none !important;
    width: auto;
    padding-left: 0;
    float: right;
    position: relative;
    /* transition: 0.3s ease-in-out; */
}
	.share li {
    float: left;
    height: 60px;
		margin-left:0px;
   
    line-height: 26px;
	
}

	#page-content-list>li:hover>a>div{
		background:transparent;
			font-weight:normal;
	}
	
	 #page-content-list>li.active>a>div{
		background:transparent;
		    color: #d0d7db;
	
	}
	h4.penci-block__title{
		display:none;
	}
	.post-title-sidebar{
	display:none;
	}
	
	#page-content-list{
		list-style:none;
	}
	
	.share .icon {
    display: inline-block;
    vertical-align: top;
    width: 40px;
    height: 40px;
    margin-right: 13px;
    border-radius: 50%;
    transform: scale(1);
    transition: 0.3s ease-in-out;
    /* background-color: #cfd8dc; */
}

.share .icon.tw {
    background: #cfd8dc url(https://cointelegraph.com/explained-assets/img/svg/twitter.svg) no-repeat center;
    background-size: 17px;
}
	.share .icon.tw:hover {
    background: #55acee url(https://cointelegraph.com/explained-assets/img/svg/twitter.svg) no-repeat center;
    background-size: 17px;
    transform: scale(1.2);
}
	.share .icon.fb {
    background: #cfd8dc url(https://cointelegraph.com/explained-assets/img/svg/facebook.svg) no-repeat center;
    background-size: 17px;
}
	.share .icon.fb:hover {
    background: #3d5a98 url(https://cointelegraph.com/explained-assets/img/svg/facebook.svg) no-repeat center;
    background-size: 17px;
    transform: scale(1.2);
}
	
	.share .icon.tg {
    background: #cfd8dc url(https://cointelegraph.com/explained-assets/img/svg/telegram.svg) no-repeat center;
    background-size: 17px;
}
	.share .icon.tg:hover {
    background: #0088cc url(https://cointelegraph.com/explained-assets/img/svg/telegram.svg) no-repeat center;
    background-size: 17px;
    transform: scale(1.2);
}
	.share .icon.wu {
    background: #cfd8dc url(https://cointelegraph.com/explained-assets/img/svg/whatsapp.svg) no-repeat center;
    background-size: 17px;
}
	.share .icon.wu:hover {
    background: #25d366 url(https://cointelegraph.com/explained-assets/img/svg/whatsapp.svg) no-repeat center;
    background-size: 17px;
    transform: scale(1.2);
}
	.share .icon.gplus {
    background: #cfd8dc url(https://cointelegraph.com/explained-assets/img/svg/google-plus.svg) no-repeat center;
    background-size: 17px;
    display: none;
}
	.share .icon.gplus:hover {
    background: #dc4e41 url(https://cointelegraph.com/explained-assets/img/svg/google-plus.svg) no-repeat center;
    background-size: 17px;
    transform: scale(1.2);
}
	.share .icon.reddit {
    background: #cfd8dc url(https://cointelegraph.com/explained-assets/img/svg/reddit.svg) no-repeat center;
    background-size: 17px;
    display: none;
}
	.share .icon.reddit:hover {
    background: #ff5700 url(https://cointelegraph.com/explained-assets/img/svg/reddit.svg) no-repeat center;
    background-size: 17px;
    transform: scale(1.2);
}
	.share .icon.linkedin {
    background: #cfd8dc url(https://cointelegraph.com/explained-assets/img/svg/linkedin.svg) no-repeat center;
    background-size: 17px;
}
	.share .icon.linkedin:hover {
    background: #0077B5 url(https://cointelegraph.com/explained-assets/img/svg/linkedin.svg) no-repeat center;
    background-size: 17px;
    transform: scale(1.2);
}
	
</style>

	


	<div class="penci-container<?php echo ( 'style-5' == $single_style && ( $single_hide_img || ! has_post_thumbnail()  ) ? ' penci-single-s5-nofimg' : '' ) ?>">
		<div class="penci-container__content">
			
			<header class="entry-header penci-entry-header <?php echo esc_attr( $align_title ); ?>">
									<?php
									if ( ! penci_get_setting( 'penci_hide_single_category' ) ) {
										echo '<div class="penci-entry-categories">';
										penci_get_categories();
										echo '</div>';
									}
									the_title( '<h3 class="entry-title penci-entry-title text-header' . $align_title . '">', '</h3>' );
									?>
				
									<h1>
										<?php 
										$author_id=$post->post_author; 
										
										?>
				</h1>

									<div class="entry-meta penci-entry-meta">
										<?php penci_posted_on(); ?>
									</div><!-- .entry-meta -->
									<?php
									if ( ! penci_get_setting( 'penci_hide_single_social_share_top' ) ) {
										get_template_part( 'template-parts/social-share' );
									}
									?>
								</header><!-- .entry-header -->

	<div class="banner">
		
		
	
		<!-- Featured Image  -->
<?php while ( have_posts() ) : the_post(); ?>
	<div class="entry-media penci-entry-media" style="margin:0 !important;">
		<?php if ( penci_post_formats() && ! $single_hide_img ): ?>
			<?php penci_post_formats( 'penci-thumb-1920-auto', true,false ); ?>
		<?php endif; ?>
	</div>
		
			
			<?php endwhile;  ?>
<!-- End of Featured Image  -->
	
			<div id="sticky-block">
				
					<div class="share-block ">
			
			
			<div class="partnership">
				
				<?php
			$link = rwmb_meta( "sponsor_link" );

			$images = rwmb_meta( 'image_advanced_2', array( 'size' => 'large' ) );
			foreach ( $images as $image ) {
				echo '<a target="_blank" href="', $link, '"><img src="', $image['url'], '" style="max-width:100%;"></a>';
			}
		?>
			
				
				<p style="font-family: 'Open Sans',sans-serif;">
					<?php
					
					$value = rwmb_meta( 'sponsor_label' );
					echo $value;
						
					?>
				</p>
		
				
			</div>
		</div>
				
				
	
				<div class="sv_wrap">
					<div class="views show hidden"> 80 </div>
					<ul class="share">
						<li><a target="_blank" href="http://twitter.com/intent/tweet?text=Sharing Economy, Explained https%3A%2F%2Fcointelegraph.com%2Fexplained%2Fthe-sharing-economy-explained via @Cointelegraph" class="icon tw show" data-count="134"></a></li>
						<li><a target="_blank" href="https://www.facebook.com/sharer/sharer.php?u=https%3A%2F%2Fcointelegraph.com%2Fexplained%2Fthe-sharing-economy-explained" class="icon fb show" data-count="77"></a></li> 
						<li><a target="_blank" href="https://t.me/share/url?url=https://cointelegraph.com/explained/the-sharing-economy-explained&amp;text=Sharing Economy, Explained" class="icon tg show" data-url="https://cointelegraph.com/explained/the-sharing-economy-explained" data-count="0"></a></li>
						<li><a target="_blank" href="whatsapp://send?text=Sharing Economy, Explained&amp;href=https://cointelegraph.com/explained/the-sharing-economy-explained" class="icon wu show" data-count="0"></a></li> 
						<li><a target="_blank" href="https://plus.google.com/share?url=https%3A%2F%2Fcointelegraph.com%2Fexplained%2Fthe-sharing-economy-explained" class="icon gplus show" data-count="0"></a></li>
						<li><a target="_blank" href="https://www.reddit.com/submit?url=https%3A%2F%2Fcointelegraph.com%2Fexplained%2Fthe-sharing-economy-explained&amp;title=Sharing+Economy%2C+Explained" class="icon reddit show" data-count="3"></a></li> 
						<li><a target="_blank" href="https://www.linkedin.com/shareArticle?mini=true&amp;url=https%3A%2F%2Fcointelegraph.com%2Fexplained%2Fthe-sharing-economy-explained&amp;title=Sharing+Economy%2C+Explained"><span data-count="0" class="icon linkedin show"></span> </a> </li>
					</ul>
		</div>
		
		</div>
		
</div>



			
			<aside id="sidebar-links" class="widget-area widget-area-2 penci-sticky-sidebar penci-sidebar-widgets " 				style="margin-top:40px;">
				
				
				<div class="side-links">	
					<ul></ul>
				</div>
					
				
			</aside>
			
			
			<div class="penci-wide-content penci-sticky-content penci-content-single-inner" >
				<div style="background:none;" class="penci-content-post <?php echo esc_attr( ! $single_hide_img && penci_post_formats() ? '' : 'hide_featured_image' ); ?>">
					<?php
					while ( have_posts() ) : the_post();

						if ( ! penci_get_setting( 'penci_hide_single_breadcrumb' ) && 'style-5' != $single_style ) : penci_breadcrumbs( ); endif;
						?>
						<article   id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
							<?php if ( 'style-5' != $single_style || ( 'style-5' == $single_style && ( $single_hide_img || ! has_post_thumbnail()  ) ) ): ?>
							
							<?php else:
								if ( ! penci_get_setting( 'penci_hide_single_social_share_top' ) ) {
									get_template_part( 'template-parts/social-share' );
								}
							endif;
							?>
							<div class="penci-entry-content entry-content right-content" >
								<?php
								the_content( sprintf(
									wp_kses( __( 'Continue reading %s <span class="meta-nav">&rarr;</span>', 'pennews' ), array( 'span' => array( 'class' => array() ) ) ),
									the_title( '<span class="screen-reader-text">"', '"</span>', false )
								) );

								wp_link_pages( array( 'before' => '<div class="page-links">' . esc_html__( 'Pages:', 'pennews' ), 'after' => '</div>', ) );
								?>
							</div><!-- .entry-content -->

						
						</article>
						<?php

						get_template_part( 'template-parts/post_pagination' );
						get_template_part( 'template-parts/author-box' );
						get_template_part( 'template-parts/related_posts' );
						get_template_part( 'template-parts/comment-box' );

					endwhile; // End of the loop.
					?>
				</div>

				<?php //get_template_part( 'template-parts/animation-loadpost' ); ?>
			</div>
			
		</div>

	</div>

<script>

	jQuery(document).ready(function($){
	
		$(".name").each(function(index,element){
			var block_id="#block-"+(index+1);
			var title=$(this).text();		
			$(".side-links ul").append("<li><p><a href="+block_id+"><span class='side-links-nums'>"+(index+1)+".</span> "+title+"</a></p></li>");
	
		})
		
					 $(".side-links ul li a").on("click", function(){
        
					 		$(".side-links ul li a").removeClass("side-links-active");
						  // add class to the one we clicked
						  $(this).addClass("side-links-active");
					 
    					});
		
	
	
	
});

	

</script>

<script>
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("sticky-block");
	var sidebar=document.getElementById("sidebar-links");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
	  
   		 navbar.classList.add("sticky");
	  jQuery("#sidebar-links").addClass("adjust-sidebar");
	  
  } else {
	  jQuery("#sidebar-links").removeClass("adjust-sidebar");
    navbar.classList.remove("sticky");
	  
  }
}
</script>

<?php
