ƒùÍZ<?php exit; ?>a:6:{s:10:"last_error";s:0:"";s:10:"last_query";s:97:"SELECT post_id, meta_key, meta_value FROM wp_postmeta WHERE post_id IN (481) ORDER BY meta_id ASC";s:11:"last_result";a:7:{i:0;O:8:"stdClass":3:{s:7:"post_id";s:3:"481";s:8:"meta_key";s:17:"_vc_post_settings";s:10:"meta_value";s:30:"a:1:{s:10:"vc_grid_id";a:0:{}}";}i:1;O:8:"stdClass":3:{s:7:"post_id";s:3:"481";s:8:"meta_key";s:5:"_form";s:10:"meta_value";s:4938:"<div id="press-release-form">
    [vc_row el_id="price-lockup" equal_height="yes"]
       [vc_column width="1/4"]
           [vc_column_text]The price per release is:[/vc_column_text]
       [/vc_column]
       [vc_column width="1/4"]
           <h4>1 <span>BTC</span> 
           [tcbd-popover-link url="" text="Your press release will be published on thecryptonetwork.com" place="right"]<i class="fa fa-question-circle fa-lg"></i>[/tcbd-popover-link]
           </h4>
           <label>
               [radio price default:0 "Press Release Publication"]
           </label>
       [/vc_column]
       [vc_column width="1/4"]
           <h4>2 <span>BTC</span> 
           [tcbd-popover-link url="" text="Your press release will be published on Cointelegraph.com, as well as on its local versions (Arabic, German, Italian, Japanese, Spanish, Portuguese)" place="right"]<i class="fa fa-question-circle fa-lg"></i>[/tcbd-popover-link]
           </h4>
           <label>
               [radio price default:1 "Press Release Publication on regional versions"]
           </label>
       [/vc_column]
       [vc_column width="1/4"][/vc_column]
    [/vc_row]

    <div class="form-lockup">
        [vc_row]    
        [vc_column width="1/3"]<label for="title">Title:</label>[/vc_column]
        [vc_column width="2/3"][text* title placeholder "Title"][/vc_column]
        [/vc_row]

        [vc_row]    
        [vc_column width="1/3"]<label for="content">Content:</label>[/vc_column]
        [vc_column width="2/3"][textarea* content id:submit-press-release-content][/vc_column]
        [/vc_row]

        [vc_row]    
        [vc_column width="1/3"]<label for="company_name">Company name:</label>[/vc_column]
        [vc_column width="2/3"][text* company_name placeholder "Company name"][/vc_column]
        [/vc_row]

        [vc_row]    
        [vc_column width="1/3"]<label for="company_site">Company site:</label>[/vc_column]
        [vc_column width="2/3"][text* company_site placeholder "Company site"][/vc_column]
        [/vc_row]

        [vc_row]    
        [vc_column width="1/3"]<label for="company_contacts">Company contacts:</label>[/vc_column]
        [vc_column width="2/3"][text* company_contacts placeholder "Company contacts"][/vc_column]
        [/vc_row]

        [vc_row]    
            [vc_column width="1/3"]
            <label for="attachments">File Upload Image/logo Upload (min 720x480, max 1mb):</label>
            [/vc_column]
            [vc_column width="2/3"]
            [file attachments class:attachment limit:1mb filetypes:png|jpg|jpeg]
            [/vc_column]
        [/vc_row]

        [vc_row]    
            [vc_column width="1/3"]
            <label for="post_date">Publication time (BST, London time):</label>
            [/vc_column]
            [vc_column width="2/3"]
                [text* post_date id:post_date placeholder "Publication time (BST, London time)"]
            [/vc_column]
        [/vc_row]

        [vc_row]    
            [vc_column width="1/3"]
                 <label for="email">Your Email (we will answer to you shortly):</label>
            [/vc_column]
            [vc_column width="2/3"]
                 [email* email placeholder "Your Email (we will answer to you shortly)"]
            [/vc_column]
        [/vc_row]

         <p>The Crypto Channel will act to publish all Press Release as soon as possible once the content has been reviewed and the payment received. The content review may take up to 24 hours after the payment was received.</p>
         <small>By submitting your email, you agree to subscribe to The Crypto Channel's newsletter. 
    If you have any questions or troubles with submission of press release, feel free to contact us via <a href="#">support@cryptochannel.frb.io</a> and we will answer as soon as possible.</small>
         <div class="btn-lockup">
             <input type="submit" value="Submit" class="btn">
             <input type="button" value="Support" class="btn" data-toggle="modal" data-target="#myModal">
             [smntcs-modal]
         </div>
    </div>
</div>



<script>
    CKEDITOR.replace('submit-press-release-content', {
        uiColor: "#ffffff",
        toolbar: 'Basic'
    });
    jQuery('.btn-primary').remove();
    var popover = jQuery('#press-release-form a');
    jQuery('#post_date').datetimepicker({
        showMeridian: true,
        autoclose: true,
        weekStart: 1
    });
    popover.click(function(ev){ev.preventDefault();});
    popover.mouseleave(function() { jQuery(this).popover('hide');jQuery(this).attr('data-html', false); });
    function setRadioActive() {
        jQuery('.vc_column-inner.active').removeClass('active');
        var $el = jQuery('input[name=price]:checked').parentsUntil('.wpb_column');
        jQuery($el[$el.length - 1]).addClass('active');
    }
    setRadioActive();
    jQuery('input[name=price]').click(function() { setRadioActive(); });
</script>";}i:2;O:8:"stdClass":3:{s:7:"post_id";s:3:"481";s:8:"meta_key";s:5:"_mail";s:10:"meta_value";s:540:"a:9:{s:6:"active";b:1;s:7:"subject";s:46:"The Crypto Currency "Press Release Submission"";s:6:"sender";s:51:"The Crypto channel <wordpress@cryptochannel.frb.io>";s:9:"recipient";s:18:"awdawd16@gmail.com";s:4:"body";s:171:"From: [company_name] <[email]>
Subject: [title]

Message Body:
[content]

-- 
This e-mail was sent from a contact form on The Crypto channel (https://cryptochannel.frb.io)";s:18:"additional_headers";s:40:"Reply-To: wordpress@cryptochannel.frb.io";s:11:"attachments";s:0:"";s:8:"use_html";b:0;s:13:"exclude_blank";b:0;}";}i:3;O:8:"stdClass":3:{s:7:"post_id";s:3:"481";s:8:"meta_key";s:7:"_mail_2";s:10:"meta_value";s:464:"a:9:{s:6:"active";b:0;s:7:"subject";s:34:"TheCryptoCurrency "[your-subject]"";s:6:"sender";s:50:"TheCryptoCurrency <wordpress@thecryptobeta.frb.io>";s:9:"recipient";s:12:"[your-email]";s:4:"body";s:126:"Message Body:
[your-message]

-- 
This e-mail was sent from a contact form on TheCryptoCurrency (https://thecryptobeta.frb.io)";s:18:"additional_headers";s:28:"Reply-To: awdawd16@gmail.com";s:11:"attachments";s:0:"";s:8:"use_html";b:0;s:13:"exclude_blank";b:0;}";}i:4;O:8:"stdClass":3:{s:7:"post_id";s:3:"481";s:8:"meta_key";s:9:"_messages";s:10:"meta_value";s:1649:"a:23:{s:12:"mail_sent_ok";s:45:"Thank you for your message. It has been sent.";s:12:"mail_sent_ng";s:71:"There was an error trying to send your message. Please try again later.";s:16:"validation_error";s:61:"One or more fields have an error. Please check and try again.";s:4:"spam";s:71:"There was an error trying to send your message. Please try again later.";s:12:"accept_terms";s:69:"You must accept the terms and conditions before sending your message.";s:16:"invalid_required";s:22:"The field is required.";s:16:"invalid_too_long";s:22:"The field is too long.";s:17:"invalid_too_short";s:23:"The field is too short.";s:12:"invalid_date";s:29:"The date format is incorrect.";s:14:"date_too_early";s:44:"The date is before the earliest one allowed.";s:13:"date_too_late";s:41:"The date is after the latest one allowed.";s:13:"upload_failed";s:46:"There was an unknown error uploading the file.";s:24:"upload_file_type_invalid";s:49:"You are not allowed to upload files of this type.";s:21:"upload_file_too_large";s:20:"The file is too big.";s:23:"upload_failed_php_error";s:38:"There was an error uploading the file.";s:14:"invalid_number";s:29:"The number format is invalid.";s:16:"number_too_small";s:47:"The number is smaller than the minimum allowed.";s:16:"number_too_large";s:46:"The number is larger than the maximum allowed.";s:23:"quiz_answer_not_correct";s:36:"The answer to the quiz is incorrect.";s:17:"captcha_not_match";s:31:"Your entered code is incorrect.";s:13:"invalid_email";s:38:"The e-mail address entered is invalid.";s:11:"invalid_url";s:19:"The URL is invalid.";s:11:"invalid_tel";s:32:"The telephone number is invalid.";}";}i:5;O:8:"stdClass":3:{s:7:"post_id";s:3:"481";s:8:"meta_key";s:20:"_additional_settings";s:10:"meta_value";s:0:"";}i:6;O:8:"stdClass":3:{s:7:"post_id";s:3:"481";s:8:"meta_key";s:7:"_locale";s:10:"meta_value";s:5:"en_US";}}s:8:"col_info";a:3:{i:0;O:8:"stdClass":13:{s:4:"name";s:7:"post_id";s:7:"orgname";s:7:"post_id";s:5:"table";s:11:"wp_postmeta";s:8:"orgtable";s:11:"wp_postmeta";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:3;s:6:"length";i:20;s:9:"charsetnr";i:63;s:5:"flags";i:49193;s:4:"type";i:8;s:8:"decimals";i:0;}i:1;O:8:"stdClass":13:{s:4:"name";s:8:"meta_key";s:7:"orgname";s:8:"meta_key";s:5:"table";s:11:"wp_postmeta";s:8:"orgtable";s:11:"wp_postmeta";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:20;s:6:"length";i:1020;s:9:"charsetnr";i:246;s:5:"flags";i:16392;s:4:"type";i:253;s:8:"decimals";i:0;}i:2;O:8:"stdClass":13:{s:4:"name";s:10:"meta_value";s:7:"orgname";s:10:"meta_value";s:5:"table";s:11:"wp_postmeta";s:8:"orgtable";s:11:"wp_postmeta";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:4938;s:6:"length";i:4294967295;s:9:"charsetnr";i:246;s:5:"flags";i:16;s:4:"type";i:252;s:8:"decimals";i:0;}}s:8:"num_rows";i:7;s:10:"return_val";i:7;}