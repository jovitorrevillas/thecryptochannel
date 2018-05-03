ƒùÍZ<?php exit; ?>a:6:{s:10:"last_error";s:0:"";s:10:"last_query";s:45:"SELECT * FROM wp_posts WHERE ID = 481 LIMIT 1";s:11:"last_result";a:1:{i:0;O:8:"stdClass":23:{s:2:"ID";s:3:"481";s:11:"post_author";s:1:"2";s:9:"post_date";s:19:"2018-04-20 03:31:29";s:13:"post_date_gmt";s:19:"2018-04-20 03:31:29";s:12:"post_content";s:6607:"<div id="press-release-form">
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
</script>
1
The Crypto Currency "Press Release Submission"
The Crypto channel <wordpress@cryptochannel.frb.io>
awdawd16@gmail.com
From: [company_name] <[email]>
Subject: [title]

Message Body:
[content]

-- 
This e-mail was sent from a contact form on The Crypto channel (https://cryptochannel.frb.io)
Reply-To: wordpress@cryptochannel.frb.io




TheCryptoCurrency "[your-subject]"
TheCryptoCurrency <wordpress@thecryptobeta.frb.io>
[your-email]
Message Body:
[your-message]

-- 
This e-mail was sent from a contact form on TheCryptoCurrency (https://thecryptobeta.frb.io)
Reply-To: awdawd16@gmail.com



Thank you for your message. It has been sent.
There was an error trying to send your message. Please try again later.
One or more fields have an error. Please check and try again.
There was an error trying to send your message. Please try again later.
You must accept the terms and conditions before sending your message.
The field is required.
The field is too long.
The field is too short.
The date format is incorrect.
The date is before the earliest one allowed.
The date is after the latest one allowed.
There was an unknown error uploading the file.
You are not allowed to upload files of this type.
The file is too big.
There was an error uploading the file.
The number format is invalid.
The number is smaller than the minimum allowed.
The number is larger than the maximum allowed.
The answer to the quiz is incorrect.
Your entered code is incorrect.
The e-mail address entered is invalid.
The URL is invalid.
The telephone number is invalid.";s:10:"post_title";s:13:"Press release";s:12:"post_excerpt";s:0:"";s:11:"post_status";s:7:"publish";s:14:"comment_status";s:6:"closed";s:11:"ping_status";s:6:"closed";s:13:"post_password";s:0:"";s:9:"post_name";s:13:"press-release";s:7:"to_ping";s:0:"";s:6:"pinged";s:0:"";s:13:"post_modified";s:19:"2018-04-26 07:50:21";s:17:"post_modified_gmt";s:19:"2018-04-26 07:50:21";s:21:"post_content_filtered";s:0:"";s:11:"post_parent";s:1:"0";s:4:"guid";s:69:"https://thecryptobeta.frb.io/?post_type=wpcf7_contact_form&#038;p=481";s:10:"menu_order";s:1:"0";s:9:"post_type";s:18:"wpcf7_contact_form";s:14:"post_mime_type";s:0:"";s:13:"comment_count";s:1:"0";}}s:8:"col_info";a:23:{i:0;O:8:"stdClass":13:{s:4:"name";s:2:"ID";s:7:"orgname";s:2:"ID";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:3;s:6:"length";i:20;s:9:"charsetnr";i:63;s:5:"flags";i:49699;s:4:"type";i:8;s:8:"decimals";i:0;}i:1;O:8:"stdClass":13:{s:4:"name";s:11:"post_author";s:7:"orgname";s:11:"post_author";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:1;s:6:"length";i:20;s:9:"charsetnr";i:63;s:5:"flags";i:49193;s:4:"type";i:8;s:8:"decimals";i:0;}i:2;O:8:"stdClass":13:{s:4:"name";s:9:"post_date";s:7:"orgname";s:9:"post_date";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:19;s:6:"length";i:19;s:9:"charsetnr";i:63;s:5:"flags";i:16513;s:4:"type";i:12;s:8:"decimals";i:0;}i:3;O:8:"stdClass":13:{s:4:"name";s:13:"post_date_gmt";s:7:"orgname";s:13:"post_date_gmt";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:19;s:6:"length";i:19;s:9:"charsetnr";i:63;s:5:"flags";i:129;s:4:"type";i:12;s:8:"decimals";i:0;}i:4;O:8:"stdClass":13:{s:4:"name";s:12:"post_content";s:7:"orgname";s:12:"post_content";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:6607;s:6:"length";i:4294967295;s:9:"charsetnr";i:246;s:5:"flags";i:4113;s:4:"type";i:252;s:8:"decimals";i:0;}i:5;O:8:"stdClass":13:{s:4:"name";s:10:"post_title";s:7:"orgname";s:10:"post_title";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:13;s:6:"length";i:262140;s:9:"charsetnr";i:246;s:5:"flags";i:4113;s:4:"type";i:252;s:8:"decimals";i:0;}i:6;O:8:"stdClass":13:{s:4:"name";s:12:"post_excerpt";s:7:"orgname";s:12:"post_excerpt";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:0;s:6:"length";i:262140;s:9:"charsetnr";i:246;s:5:"flags";i:4113;s:4:"type";i:252;s:8:"decimals";i:0;}i:7;O:8:"stdClass":13:{s:4:"name";s:11:"post_status";s:7:"orgname";s:11:"post_status";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:7;s:6:"length";i:80;s:9:"charsetnr";i:246;s:5:"flags";i:16385;s:4:"type";i:253;s:8:"decimals";i:0;}i:8;O:8:"stdClass":13:{s:4:"name";s:14:"comment_status";s:7:"orgname";s:14:"comment_status";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:6;s:6:"length";i:80;s:9:"charsetnr";i:246;s:5:"flags";i:1;s:4:"type";i:253;s:8:"decimals";i:0;}i:9;O:8:"stdClass":13:{s:4:"name";s:11:"ping_status";s:7:"orgname";s:11:"ping_status";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:6;s:6:"length";i:80;s:9:"charsetnr";i:246;s:5:"flags";i:1;s:4:"type";i:253;s:8:"decimals";i:0;}i:10;O:8:"stdClass":13:{s:4:"name";s:13:"post_password";s:7:"orgname";s:13:"post_password";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:0;s:6:"length";i:1020;s:9:"charsetnr";i:246;s:5:"flags";i:1;s:4:"type";i:253;s:8:"decimals";i:0;}i:11;O:8:"stdClass":13:{s:4:"name";s:9:"post_name";s:7:"orgname";s:9:"post_name";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:13;s:6:"length";i:800;s:9:"charsetnr";i:246;s:5:"flags";i:16393;s:4:"type";i:253;s:8:"decimals";i:0;}i:12;O:8:"stdClass":13:{s:4:"name";s:7:"to_ping";s:7:"orgname";s:7:"to_ping";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:0;s:6:"length";i:262140;s:9:"charsetnr";i:246;s:5:"flags";i:4113;s:4:"type";i:252;s:8:"decimals";i:0;}i:13;O:8:"stdClass":13:{s:4:"name";s:6:"pinged";s:7:"orgname";s:6:"pinged";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:0;s:6:"length";i:262140;s:9:"charsetnr";i:246;s:5:"flags";i:4113;s:4:"type";i:252;s:8:"decimals";i:0;}i:14;O:8:"stdClass":13:{s:4:"name";s:13:"post_modified";s:7:"orgname";s:13:"post_modified";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:19;s:6:"length";i:19;s:9:"charsetnr";i:63;s:5:"flags";i:129;s:4:"type";i:12;s:8:"decimals";i:0;}i:15;O:8:"stdClass":13:{s:4:"name";s:17:"post_modified_gmt";s:7:"orgname";s:17:"post_modified_gmt";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:19;s:6:"length";i:19;s:9:"charsetnr";i:63;s:5:"flags";i:129;s:4:"type";i:12;s:8:"decimals";i:0;}i:16;O:8:"stdClass":13:{s:4:"name";s:21:"post_content_filtered";s:7:"orgname";s:21:"post_content_filtered";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:0;s:6:"length";i:4294967295;s:9:"charsetnr";i:246;s:5:"flags";i:4113;s:4:"type";i:252;s:8:"decimals";i:0;}i:17;O:8:"stdClass":13:{s:4:"name";s:11:"post_parent";s:7:"orgname";s:11:"post_parent";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:1;s:6:"length";i:20;s:9:"charsetnr";i:63;s:5:"flags";i:49193;s:4:"type";i:8;s:8:"decimals";i:0;}i:18;O:8:"stdClass":13:{s:4:"name";s:4:"guid";s:7:"orgname";s:4:"guid";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:69;s:6:"length";i:1020;s:9:"charsetnr";i:246;s:5:"flags";i:1;s:4:"type";i:253;s:8:"decimals";i:0;}i:19;O:8:"stdClass":13:{s:4:"name";s:10:"menu_order";s:7:"orgname";s:10:"menu_order";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:1;s:6:"length";i:11;s:9:"charsetnr";i:63;s:5:"flags";i:32769;s:4:"type";i:3;s:8:"decimals";i:0;}i:20;O:8:"stdClass":13:{s:4:"name";s:9:"post_type";s:7:"orgname";s:9:"post_type";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:18;s:6:"length";i:80;s:9:"charsetnr";i:246;s:5:"flags";i:16393;s:4:"type";i:253;s:8:"decimals";i:0;}i:21;O:8:"stdClass":13:{s:4:"name";s:14:"post_mime_type";s:7:"orgname";s:14:"post_mime_type";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:0;s:6:"length";i:400;s:9:"charsetnr";i:246;s:5:"flags";i:1;s:4:"type";i:253;s:8:"decimals";i:0;}i:22;O:8:"stdClass":13:{s:4:"name";s:13:"comment_count";s:7:"orgname";s:13:"comment_count";s:5:"table";s:8:"wp_posts";s:8:"orgtable";s:8:"wp_posts";s:3:"def";s:0:"";s:2:"db";s:13:"cryptochannel";s:7:"catalog";s:3:"def";s:10:"max_length";i:1;s:6:"length";i:20;s:9:"charsetnr";i:63;s:5:"flags";i:32769;s:4:"type";i:8;s:8:"decimals";i:0;}}s:8:"num_rows";i:1;s:10:"return_val";i:1;}