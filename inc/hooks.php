<?php
  add_action( 'init', function() {
    register_block_style(
        'core/button',
        [
            'name'  => 'align-left',
            'label' => __( 'Align Left', 'c-codez-countdown-timer' ),
        ]
    );

    register_block_style(
        'core/button',
        [
            'name'  => 'align-center',
            'label' => __( 'Align Center', 'c-codez-countdown-timer' ),
        ]
    );

    register_block_style(
        'core/button',
        [
            'name'  => 'align-right',
            'label' => __( 'Align Right', 'c-codez-countdown-timer' ),
        ]
    );
  });