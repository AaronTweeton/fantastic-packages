<?php

/**
 * Plugin Name: Fantastic Packages
 * Description: A plugin solely written to show how @wordpress packages can be used.
 * Version:     0.1.0
 * Author:      Aaron Tweeton
 * Author URI:  https://aarontweeton.com
 * License:     GPL v2 or later
 * License URI: https://www.gnu.org/licenses/gpl-2.0.html
 */

/*
WordPress Packages Demo is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 2 of the License, or
any later version.

WordPress Packages Demo is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with WordPress Packages Demo. If not, see https://www.gnu.org/licenses/gpl-2.0.html.
*/

namespace Fantastic_Packages;

if (!defined('ABSPATH')) {
    return;
}


if (!class_exists('FantasticPackages_Plugin')) {
    class FantasticPackages_Plugin {
        static $instance = false;
        private $handle = 'fantastic-packages';

        private function __construct() {
            add_action('admin_menu', array($this, 'create_admin_page'));
            add_action('admin_enqueue_scripts', array($this, 'enqueue_assets'));
        }

        public static function get_instance(): FantasticPackages_Plugin {
            if (!self::$instance)
                self::$instance = new self;
            return self::$instance;
        }

        /**
         * Composes the admin page content.
         */
        public function compose_menu_page(): void {
            require_once plugin_dir_path(__FILE__) . 'includes/admin-page.php';
        }

        /**
         * Creates an admin page for the plugin.
         */
        public function create_admin_page(): void {
            add_menu_page(
                'Fantastic Packages Demo',
                'Fantastic Packages',
                'manage_options',
                $this->handle,
                array($this, 'compose_menu_page'),
                'dashicons-drumstick',
            );
        }

        /**
         * Enqueues assets for the plugin, if user is on the plugin's admin page.
         */
        public function enqueue_assets(string $hook): void {
            if ('toplevel_page_' . $this->handle !== $hook) {
                return;
            }

            $filename = plugin_dir_path(__FILE__) . 'build/index.asset.php';

            /**
             * Ff webpack-generated asset files exists, enqueue the assets. Otherwise, send an error to the console. 
             */
            if (file_exists($filename)) {
                $asset_file = require_once $filename;

                wp_enqueue_script(
                    $this->handle,
                    plugins_url('build/index.js', __FILE__),
                    $asset_file['dependencies'],
                    $asset_file['version'],
                    true
                );
            } else {
                wp_register_script($this->handle, '',);
                wp_enqueue_script($this->handle);
                wp_add_inline_script($this->handle, "console.error('" . __("Required asset files could not be loaded, which will prevent some content from loading. If you have downloaded this plugin from a repository, please make sure the build task has been run to generate the required asset files.", $this->handle) . "');");
            }
        }
    }
}

$fantastic_packages_plugin = FantasticPackages_Plugin::get_instance();
