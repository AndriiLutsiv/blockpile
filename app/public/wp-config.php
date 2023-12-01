<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',          '&6(Yh#NezD8e*lDWqhO^PA+s]M(lG~)BT]7F^e*Dc6Q3VEQjG0u!=ql3%,mrRO!T' );
define( 'SECURE_AUTH_KEY',   '0dsrWLGAGNL:8RitH^K/tHFj9A]@DQvzwNW%BetIVvk j8`mW;JP>GQLpb0g N!Z' );
define( 'LOGGED_IN_KEY',     'RwlP V|[OORwTqg:1f$?V+I[uPJY^WtpUe#z&x7LN,!2Q#0X-lj6!f4 Zot&&{|<' );
define( 'NONCE_KEY',         ',IIK.vSnf`F{la>qrf)Bv07JFm1D:m /$MX,Fwp[U&<qU,2u`xZHNNV_dlQ&KW7$' );
define( 'AUTH_SALT',         ':$UlS6z[dwE4?qmzZ~J{ABB_!CXU7C6%+u7LG}iwg{A|Q/SWpUT)^WxiNGK]yO:{' );
define( 'SECURE_AUTH_SALT',  '(o#u{<!|]*aCP3-^Q|(m7(#`q{B3v!@LZ[_u%6<>bG#M):345)Ny5LN|gLmkm%/:' );
define( 'LOGGED_IN_SALT',    '2&ZtBLYT3eYbC`]ebunQeVy0Lb1R=Y*SIwx.4c0&Nq+a-]cFXCA1etmtm<gh^$(i' );
define( 'NONCE_SALT',        'f$Y0TQe@W~ i`B&}4wkIh@NUO0&;!wV0Xi{P{giV2JN}D:0l@WN{B^*)fdZ]#7&_' );
define( 'WP_CACHE_KEY_SALT', 'UdnTqTuCb];vA9!bQr~M96X!|b>i$m=EdBFM8a=DsIZ6Z57-7h)1^@7/X.WjAvdw' );


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}

define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
