<?php
/**
 * Plugin Name:       Countdown Timer
 * Description:       Example block scaffolded with Create Block tool.
 * Requires at least: 6.6
 * Requires PHP:      7.2
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       c-codez-countdown-timer
 *
 * @package ChristianCodez
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * Registers the block using the metadata loaded from the `block.json` file.
 * Behind the scenes, it registers also all assets so they can be enqueued
 * through the block editor in the corresponding context.
 *
 * @see https://developer.wordpress.org/reference/functions/register_block_type/
 */
function christian_codez_c_codez_countdown_timer_block_init() {
	register_block_type( __DIR__ . '/build' );
}
add_action( 'init', 'christian_codez_c_codez_countdown_timer_block_init' );
