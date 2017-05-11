/* Theme Name: The Project - Responsive Website Template
 * Author:HtmlCoder
 * Author URI:http://www.htmlcoder.me
 * Author e-mail:htmlcoder.me@gmail.com
 * Version:1.4.0
 * Created:March 2015
 * License URI:http://support.wrapbootstrap.com/
 * File Description: Place here your custom scripts
 */

(function ($) {
	$(document).ready(function () {

		// Notify Plugin - The below code (until line 42) is used for demonstration purposes only
		//-----------------------------------------------
		if (($(".main-navigation.onclick").length > 0) && !Modernizr.touch) {
			$.notify({
				// options
				message: 'The Dropdowns of the Main Menu, are now open with click on Parent Items. Click "Home" to checkout this behavior.'
			}, {
					// settings
					type: 'info',
					delay: 10000,
					offset: {
						y: 150,
						x: 20
					}
				});
		};
		if (!($(".main-navigation.animated").length > 0) && !Modernizr.touch && $(".main-navigation").length > 0) {
			$.notify({
				// options
				message: 'The animations of main menu are disabled.'
			}, {
					// settings
					type: 'info',
					delay: 10000,
					offset: {
						y: 150,
						x: 20
					}
				}); // End Notify Plugin - The above code (from line 14) is used for demonstration purposes only

		};

		$('#submitButton').click(function (e) {
			e.preventDefault();
			window.location.href = "/";
		});


		$("#contact_us").on("submit", function () {
			var data = {
				name: $("#contact_form_name").val(),
				phone: $("#contact_form_phone").val(),
				email: $("#contact_form_email").val(),
				company: $("#contact_form_company").val(),
				department: $("#contact_form_department").val(),
				message: $("#contact_form_message").val(),
			};
			$.ajax({
				url: "http://uinnova.com:9009/form",
				method: "POST",
				timeout: "5000",
				async: true,
				data: JSON.stringify(data),
				contentType: "application/json",
				success: function (ret) {
					$('#contactModalSuccess').modal('show');
				},
				error: function (ret) {
					$('#contactModalFail').modal('show');
				}
			});
			return false;
		})
	}); // End document ready

})(this.jQuery);
