<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'tcc');

/** MySQL database username */
define('DB_USER', 'root');

/** MySQL database password */
define('DB_PASSWORD', '');

/** MySQL hostname */
define('DB_HOST', 'localhost');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8mb4');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '[jM+u(@Vnye|4F Ly ^svnq+`_i[xo6YcFC?py;xo`V-@]iKP(J5r?oyomp)T^+Y');
define('SECURE_AUTH_KEY',  ']2XZTty(l9zu-A]Lljl?q*{, @tlUPpO:)SAbMw5,DQ*{S>b&><7v ;BQq3%a=]p');
define('LOGGED_IN_KEY',    '`(H<c!mk?t]MY.e[YrDh3b7,M#J_z#0rOIEU(BhOCpiDe~/s(=mo[e^I?ApY|;d=');
define('NONCE_KEY',        '5:.g0A-q7<<G[tnkjS]KNac.]fFw> 6;LBn|.K007bqws ).h8Pf`7+8AR486cA5');
define('AUTH_SALT',        '!= x~3}9}K6G-xHcer1jYe2xHC4XVBHSX.t>!BT0ghlArd5~k48$xy.oEo:7UeTX');
define('SECURE_AUTH_SALT', ']1Q#(@<G0,3}Z}<V|Q7W4izk#]v]t[VHMy-M_r}Klp2X@$u3_j1GSQA|Os,37<T%');
define('LOGGED_IN_SALT',   '+&r+}V!)z_:[<sA_ UyQQ1o:-~PFwFHF?U@x+16^w0~w7$bm4z6xu%w]8,eu)&z|');
define('NONCE_SALT',       ',X_J^]@f9@l{Wyqk(|J-M:[sE9tyOVI<$UiZLMOEtSIU3k;D:-n.`_9Vj1 zorL{');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');
