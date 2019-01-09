<?php
/**
 * Основные параметры WordPress.
 *
 * Скрипт для создания wp-config.php использует этот файл в процессе
 * установки. Необязательно использовать веб-интерфейс, можно
 * скопировать файл в "wp-config.php" и заполнить значения вручную.
 *
 * Этот файл содержит следующие параметры:
 *
 * * Настройки MySQL
 * * Секретные ключи
 * * Префикс таблиц базы данных
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** Параметры MySQL: Эту информацию можно получить у вашего хостинг-провайдера ** //
/** Имя базы данных для WordPress */
define('DB_NAME', 'new-landing');

/** Имя пользователя MySQL */
define('DB_USER', 'root');

/** Пароль к базе данных MySQL */
define('DB_PASSWORD', '');

/** Имя сервера MySQL */
define('DB_HOST', 'localhost');

/** Кодировка базы данных для создания таблиц. */
define('DB_CHARSET', 'utf8mb4');

/** Схема сопоставления. Не меняйте, если не уверены. */
define('DB_COLLATE', '');

/**#@+
 * Уникальные ключи и соли для аутентификации.
 *
 * Смените значение каждой константы на уникальную фразу.
 * Можно сгенерировать их с помощью {@link https://api.wordpress.org/secret-key/1.1/salt/ сервиса ключей на WordPress.org}
 * Можно изменить их, чтобы сделать существующие файлы cookies недействительными. Пользователям потребуется авторизоваться снова.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '4nq)WC5d$-fFYxk&2c#.`TID)F,fl^Pq]Ok<bnC (O*wN#b9zbY:$;uy[u%R7.1$');
define('SECURE_AUTH_KEY',  '*;QKycmre[Ysx1:wE)UDB2sR0BO:mpY.,u.+d6FUcZR}vlzA3xo#`U}2vhI9Q^wC');
define('LOGGED_IN_KEY',    'R>S;}A/.b[#YP*wG%:[QArq}WkF%i)XUPUvg-V|{GHR_w02S(nJx5iA}lT_:}69o');
define('NONCE_KEY',        '|S:0w/d>m.~8}<$(_=xTS]skwNG4{wvbbI .%:t{3I_8ASGQe j`b:GQ^iiyr1zz');
define('AUTH_SALT',        '2gOqEm#vANd0-7/#Z/}I#dZj]#RrjW}zzqYB~wEg_Li`;{SKOERIh{hrm/FcJJ=,');
define('SECURE_AUTH_SALT', 'pi<_Z[}Bm83K99`Bv5:dBpgDmH%I{zKdvs8>}bcUSB/EemetS-A8V+6s4IkmB]M}');
define('LOGGED_IN_SALT',   'CBtl`V:9.`XvCCz<6L|^kK?4.T8{L,?vf+EllEqGCT.bZkV:Fsij3Pi)r&,>t>kH');
define('NONCE_SALT',       ']fb45, ~`K`4S[6is@1l<t}Uz9hM,><U1v!}UdBs=wJX*(}0t2G2tISijF-v-2<i');

/**#@-*/

/**
 * Префикс таблиц в базе данных WordPress.
 *
 * Можно установить несколько сайтов в одну базу данных, если использовать
 * разные префиксы. Пожалуйста, указывайте только цифры, буквы и знак подчеркивания.
 */
$table_prefix  = 'wp_';

/**
 * Для разработчиков: Режим отладки WordPress.
 *
 * Измените это значение на true, чтобы включить отображение уведомлений при разработке.
 * Разработчикам плагинов и тем настоятельно рекомендуется использовать WP_DEBUG
 * в своём рабочем окружении.
 *
 * Информацию о других отладочных константах можно найти в Кодексе.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define('WP_DEBUG', false);

/* Это всё, дальше не редактируем. Успехов! */

/** Абсолютный путь к директории WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Инициализирует переменные WordPress и подключает файлы. */
require_once(ABSPATH . 'wp-settings.php');
