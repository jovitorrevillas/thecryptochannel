<?php

class Penci_Weather {

	private static $caching_time = 14400;  // 3 hours

	public static function weather_data( $atts ) {

		$atts = wp_parse_args( $atts, array(
			'w_type'   => 'today',
			'locale'   => 'en',
			'location' => '',
			'forecast_days' => '5',
			'units'    => 'metric', // metric or imperial
		) );

		if ( empty( $atts['location'] ) ) {
			return self::mess_error();
		}

		$weather_data = array(
			'api_location'     => $atts['location'],
			'api_locale'       => $atts['locale'],
			'today_icon'       => '',
			'today_icon_text'  => '',
			'today_temp'       => array( 0, 0 ),
			'today_humidity'   => '',
			'today_wind_speed' => array( 0, 0 ),
			'today_min'        => array( 0, 0 ),
			'today_max'        => array( 0, 0 ),
			'today_clouds'     => 0,
			'current_unit'     => 'metric' == $atts['units'] ? '0' : '1',
			'temp_label'       => 'metric' == $atts['units'] ? 'C' : 'F',
			'speed_label'      => 'metric' == $atts['units'] ? 'km/h' : 'mp/h',
			'forecast'         => array()
		);

		$weather_data_status = self::get_weather_data( $atts, $weather_data );

		return $weather_data_status;

	}

	public static function get_weather_data( $atts, $weather_data ) {

		$sytem_locale      = get_locale();
		$available_locales = self::available_locales();

		// Check for locale
		if ( in_array( $sytem_locale, $available_locales ) ) {
			$atts['locale'] = $sytem_locale;
		}

		// Check for locale by first two digits
		if ( in_array( substr( $sytem_locale, 0, 2 ), $available_locales ) ) {
			$atts['locale'] = substr( $sytem_locale, 0, 2 );
		}

		// TRANSIENT NAME
		$weather_transient_name = 'penci_' . sanitize_title( $atts['location'] ) . strtolower( $atts['units'] ) . '_' . $atts['locale'];

		if ( isset( $_GET['penci_clear_weather_data'] ) ) {
			delete_transient( $weather_transient_name );
		}

		if ( get_transient( $weather_transient_name ) ) {
			$weather_data = get_transient( $weather_transient_name );


		} else {
			$weather_data = self::get_today_data( $atts, $weather_data );

			if ( 'forecast' == $atts['w_type'] ) {
				$weather_data = self::get_forecast_data( $atts, $weather_data );
			}

			set_transient( $weather_transient_name, $weather_data, self::$caching_time );
		}

		return $weather_data;


	}

	public static function get_today_data( $atts, $weather_data ) {

		$now_ping     = "http://api.openweathermap.org/data/2.5/weather?q=" . urlencode( $atts['location'] ) . "&lang=" . $atts['locale'] . "&units=" . $atts['units'] . '&APPID=' . self::get_appid();
		$now_ping_get = wp_remote_get( $now_ping );

		if ( is_wp_error( $now_ping_get ) ) {
			return $now_ping_get->get_error_message();
		}


		// get api response
		$api_response = json_decode( $now_ping_get['body'], true );

		if ( isset( $api_response['cod'] ) && $api_response['cod'] == 404 ) {
			return self::mess_error( $api_response['message'] );
		} else {
			// Current location
			if ( isset( $api_response['name'] ) ) {
				$weather_data['api_location'] = $api_response['name'];
			}

			// min max current temperature
			if ( isset( $api_response['main']['temp'] ) ) {
				$weather_data['today_temp'][0] = round( $api_response['main']['temp'], 1 );
				$weather_data['today_temp'][1] = self::convert_c_to_f( $api_response['main']['temp'] );
			}
			if ( isset( $api_response['main']['temp_min'] ) ) {
				$weather_data['today_min'][0] = round( $api_response['main']['temp_min'], 1 );
				$weather_data['today_min'][1] = self::convert_c_to_f( $api_response['main']['temp_min'] );
			}
			if ( isset( $api_response['main']['temp_max'] ) ) {
				$weather_data['today_max'][0] = round( $api_response['main']['temp_max'], 1 );
				$weather_data['today_max'][1] = self::convert_c_to_f( $api_response['main']['temp_max'] );
			}

			// humidity
			if ( isset( $api_response['main']['humidity'] ) ) {
				$weather_data['today_humidity'] = round( $api_response['main']['humidity'] );
			}

			// wind speed and direction
			if ( isset( $api_response['wind']['speed'] ) ) {
				$weather_data['today_wind_speed'][0] = round( $api_response['wind']['speed'], 1 );
				$weather_data['today_wind_speed'][1] = self::convert_kmph_to_mph( $api_response['wind']['speed'] );
			}

			// forecast description
			if ( isset( $api_response['weather'][0]['description'] ) ) {
				$weather_data['today_icon_text'] = $api_response['weather'][0]['description'];
			}

			// clouds
			if ( isset( $api_response['clouds']['all'] ) ) {
				$weather_data['today_clouds'] = round( $api_response['clouds']['all'] );
			}

			// forecast description
			if ( isset( $api_response['weather'][0]['description'] ) ) {
				$weather_data['today_icon_text'] = $api_response['weather'][0]['description'];
			}

			// clouds
			if ( isset( $api_response['clouds']['all'] ) ) {
				$weather_data['today_clouds'] = round( $api_response['clouds']['all'] );
			}

			// icon
			if ( isset( $api_response['weather'][0]['icon'] ) ) {
				$icons = array(
					// day
					'01d' => 'wi-day-sunny',
					'02d' => 'wi-day-cloudy-high',
					'03d' => 'wi-cloudy',
					'04d' => 'wi-cloudy',
					'09d' => 'wi-day-showers',
					'10d' => 'wi-day-rain',
					'11d' => 'wi-day-thunderstorm',
					'13d' => 'wi-day-showers',
					'50d' => 'wi-day-cloudy-high',

					//night
					'01n' => 'wi-night-clear',
					'02n' => 'wi-night-alt-cloudy',
					'03n' => 'wi-night-alt-cloudy-high',
					'04n' => 'wi-night-cloudy',
					'09n' => 'wi-night-showers',
					'10n' => 'wi-night-rain',
					'11n' => 'wi-night-thunderstorm',
					'13n' => 'wi-night-snow-wind',
					'50n' => 'wi-night-alt-cloudy',
				);

				$weather_data['today_icon'] = 'wi-day-sunny';
				if ( isset( $icons[ $api_response['weather'][0]['icon'] ] ) ) {
					$weather_data['today_icon'] = $icons[ $api_response['weather'][0]['icon'] ];
				}
			}
		}

		return $weather_data;
	}

	public static function get_forecast_data( $atts, $weather_data ) {

		$forecast_ping     = "http://api.openweathermap.org/data/2.5/forecast/daily?q=" . urlencode( $atts['location'] ) . "&lang=" . $atts['locale'] . "&units=" . $atts['units'] . "&cnt=7&APPID=" . self::get_appid();
		$forecast_ping_get = wp_remote_get( $forecast_ping );

		if ( is_wp_error( $forecast_ping_get ) ) {
			return $forecast_ping_get->get_error_message();
		}

		$forecast_data = json_decode( $forecast_ping_get['body'] );

		if ( isset( $forecast_data->cod ) AND $forecast_data->cod == 404 ) {
			return self::mess_error( $forecast_data->message );
		} else {
			$weather_data['forecast'] = $forecast_data;
		}

		return $weather_data;
	}

	public static function available_locales() {
		return array(
			'en', 'es', 'sp', 'fr', 'it', 'de',
			'pt', 'ro', 'pl', 'ru', 'uk', 'ua',
			'fi', 'nl', 'bg', 'sv', 'se', 'sk',
			'ca', 'tr', 'hr', 'zh', 'zh_tw',
			'zh_cn', 'hu'
		);

	}

	public static function mess_error( $msg = false ) {
		$msg = $msg ? $msg : esc_html__( 'No weather information available', 'penci-framework' );

		if ( ! current_user_can( 'manage_options' ) ) {
			return;
		}

		return "<div class='penci-weather-error'>" . $msg . "</div>";
	}

	public static function get_appid() {
		return get_theme_mod( 'penci_api_weather', '65537b80b9ae748958a48d3e624adb6b' );
	}

	/**
	 * convert celsius to fahrenheit + rounding (no decimals if result > 100 or one decimal if result < 100)
	 *
	 * @param $celsius_degrees
	 *
	 * @return float
	 */
	private static function convert_c_to_f( $celsius_degrees ) {
		$f_degrees = $celsius_degrees * 9 / 5 + 32;

		$rounded_val = round( $f_degrees, 1 );
		if ( $rounded_val > 99.9 ) {
			return round( $f_degrees );
		}

		return $rounded_val;
	}

	/**
	 * Convert kmph to mph
	 *
	 * @param $kmph
	 *
	 * @return float
	 */
	private static function convert_kmph_to_mph( $kmph ) {
		return round( $kmph * 0.621371192, 1 );
	}

	public static function get_top_bar_template( $atts ) {
		$weather_data = self::weather_data( $atts );

		if ( empty( $weather_data ) ) {
			return;
		}

		$current_unit = isset( $weather_data['current_unit'] ) ? $weather_data['current_unit'] : '';
		$today_temp   = isset( $weather_data['today_temp'][ $current_unit ] ) ? $weather_data['today_temp'][ $current_unit ] : '';
		$temp_label   = isset( $weather_data['temp_label'] ) ? $weather_data['temp_label'] : '';
		$api_location = isset( $weather_data['api_location'] ) ? $weather_data['api_location'] : '';
		$today_icon   = isset( $weather_data['today_icon'] ) ? $weather_data['today_icon'] : '';
		?>
		<div class="topbar_item topbar_weather">
			<i class="penci-weather-icons wi <?php echo $today_icon; ?>"></i>
			<div class="penci-weather-now">
				<span class="penci-weather-degrees"><?php echo $today_temp; ?></span>
				<span class="penci-weather-unit"><?php echo $temp_label; ?></span>
			</div>
			<div class="penci-weather-location">
				<div class="penci-weather-city"><?php echo $api_location; ?></div>
			</div>
		</div>
		<?php
	}


	public static function show_forecats( $atts ) {
		$weather_data = self::weather_data( array(
			'w_type'   		=> 'forecast',
			'locale'   		=> 'en',
			'location' 		=> $atts['location'],
			'forecast_days' => $atts['forecast_days'],
			'units'    		=> $atts['units'],
		) );

		$forecast 		= isset( $weather_data['forecast'] ) ? $weather_data['forecast'] : array();
		$forecast_list  = isset( $forecast->list ) ? $forecast->list : array();

		if( ! $forecast_list ) {
			return;
		}


		$current_unit = $weather_data['current_unit'];
		$days_to_show = (int) $atts['forecast_days'];
		$dt_today = date( 'Ymd', current_time( 'timestamp', 0 ) );
		$days_of_week =  array(
			__('Sun' ,'penci-framework'),
			__('Mon' ,'penci-framework'),
			__('Tue' ,'penci-framework'),
			__('Wed' ,'penci-framework'),
			__('Thu' ,'penci-framework'),
			__('Fri' ,'penci-framework'),
			__('Sat' ,'penci-framework')
		);

		$wind_speed = isset($weather_data['today_wind_speed'][ $current_unit ]) ? $weather_data['today_wind_speed'][ $current_unit ] : '';
		$wind_speed_text = isset($weather_data['speed_label']) ? $weather_data['speed_label'] : '';
		$today_icon_text = isset($weather_data['today_icon_text']) ? $weather_data['today_icon_text'] : '';
		$today_high = isset($weather_data['today_max'][ $current_unit ]) ? round($weather_data['today_max'][ $current_unit ]) : '';
		$today_low 	= isset($weather_data['today_min'][ $current_unit ]) ? round($weather_data['today_min'][ $current_unit ]) : '';
		$today_temp = isset(  $weather_data['today_temp'][ $current_unit ] ) ? round( $weather_data['today_temp'][ $current_unit ] ) : '';
		$today_temp_label = isset(  $weather_data['temp_label'] ) ?  $weather_data['temp_label'] : '';
		$today_clouds = isset(  $weather_data['today_clouds'] ) ?  $weather_data['today_clouds'] . '%' : '';

		$units_display_symbol = '&deg;';

		$output = '<div class="penci-weather-widget">';


		if ( isset ( $weather_data['api_location'] ) ) {
			$output .= '<div class="penci-weather-header">';
			$output .= '<div class="penci-weather-city">' . $weather_data['api_location'] . '</div>';

			if( isset($weather_data['today_icon_text']) ) {
				$output .= '<div class="penci-weather-condition">' . $weather_data['today_icon_text'] . '</div>';
			}

			$output .= '</div>';
		}

		$output.= '<div class="penci-weather-information">';


		if( isset($weather_data['today_humidity']) ) {
			$output .= '<div class="penci-weather-section penci_humidty"><i class="wi wi-humidity"></i>' . $weather_data['today_humidity'] . '%</div>';
		}
		if( $wind_speed && $wind_speed_text ) {
			$output .= '<div class="penci-weather-section penci_wind"><i class="wi wi-windy"></i>' . $wind_speed . $wind_speed_text. '</div>';
		}

		if( $today_clouds ) {
			$output .= '<div class="penci-weather-section penci_clouds"><i class="fa fa-cloud"></i>' . $today_clouds. '</div>';
		}


		$output .= '</div>';


		$output .= '<div class="penci-weather-degrees-wrap">';

		if( isset( $weather_data['today_icon'] ) ) {
			$output .= '<div class="penci-weather-animated-icon"><i class="wi ' . $weather_data['today_icon'] . '"></i></div>';
		}


		$output .= '<div class="penci-weather-now">';
		$output .= '<span class="penci-big-degrees">' . $today_temp . '</span>';
		$output .= '<span class="penci-circle">' . $units_display_symbol .'</span>';
		$output .= '<span class="penci-weather-unit">' . $today_temp_label . '</span>';
		$output .= '</div>';

		$output .= '<div class="penci-weather-lo-hi">';
		$output .= '<div class="penci-weather-lo-hi__content">';
		$output .= '<i class="fa fa-angle-double-up"></i>';
		$output .= '<span class="penci-small-degrees penci-w-high-temp">' . $today_high . '</span>';
		$output .= '<span class="penci-circle">' . $units_display_symbol .'</span>';
		$output .= '</div>';
		$output .= '<div class="penci-weather-lo-hi__content">';
		$output .= '<i class="fa fa-angle-double-down"></i>';
		$output .= '<span class="penci-small-degrees penci-w-low-temp">' . $today_low . '</span>';
		$output .= '<span class="penci-circle">' . $units_display_symbol .'</span>';
		$output .= '</div>';
		$output .= '</div>';
		$output .= '</div>';


		$output .= "<div class=\"penci-weather-week penci_days_{$days_to_show} \">";
		$day = 1;



		foreach( (array) $forecast->list as $forecast )
		{
			if( $dt_today >= date('Ymd', $forecast->dt)) continue;
			$forecast->temp = (int) $forecast->temp->day;
			$day_of_week = $days_of_week[ date('w', $forecast->dt) ];

			$output .="
				<div class='penci-weather-days'>
					<div class='penci-day-degrees'><span class='penci-degrees'>{$forecast->temp}</span><span class='circle'>{$units_display_symbol}</span></div>
					<div class='penci-day'>{$day_of_week}</div>
				</div>";
			if( $day == $days_to_show){
				break;
			}

			$day ++;
		}
		$output .= '</div>';

		$output .= '</div>';

		echo $output;
	}
}