<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */


 echo '<pre>';
 print_r($attributes);
 echo '</pre>';
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'C Codez Countdown Timer – hello from a dynamic block!', 'c-codez-countdown-timer' ); ?>
</p>
