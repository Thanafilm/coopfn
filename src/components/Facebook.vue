<template>
  <div id="fb-root" class="fb_reset">
      <div style="position: absolute; top: -10000px; width: 0px; height: 0px;">
        <div></div>
      </div>
      <div
        class="fb-customerchat fb_invisible_flow fb_iframe_widget"
        attribution="setup_tool"
        page_id="112287778886023"
        theme_color="#0084ff"
        greeting_dialog_display="hide"
        fb-xfbml-state="rendered"
        fb-iframe-plugin-query="app_id=202968681034321
        &amp;attribution=setup_tool
        &amp;container_width=0
        &amp;greeting_dialog_display=hide
        &amp;local_state=%7B%22v%22%3A0%2C%22path%22%3A5%2C%22chatState%22%3A1%2C%22visibility%22%3A%22not-hidden%22%2C%22showUpgradePrompt%22%3A%22not_shown%22%7D
        &amp;locale=th_TH
        &amp;page_id=102491928768795
        &amp;request_time=1622190378504
        &amp;sdk=joey
        &amp;theme_color=%230084ff"
      >
        <span style="vertical-align: bottom; width: 1000px; height: 0px;"
          ><iframe
            name="f34a7ae376ff78"
            width="1000px"
            height="1000px"
            data-testid="dialog_iframe"
            title=""
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            scrolling="no"
            allow="encrypted-media"
            src="https://www.facebook.com/v3.0/plugins/customerchat.php?app_id=202968681034321&amp;attribution=setup_tool&amp;channel=https%3A%2F%2Fstaticxx.facebook.com%2Fx%2Fconnect%2Fxd_arbiter%2F%3Fversion%3D46%23cb%3Df35a9977ea1b27c%26domain%3Dreg.up.ac.th%26origin%3Dhttps%253A%252F%252Freg.up.ac.th%252Ff10409e377b1c54%26relation%3Dparent.parent&amp;container_width=0&amp;greeting_dialog_display=hide&amp;local_state=%7B%22v%22%3A0%2C%22path%22%3A5%2C%22chatState%22%3A1%2C%22visibility%22%3A%22not-hidden%22%2C%22showUpgradePrompt%22%3A%22not_shown%22%7D&amp;locale=th_TH&amp;page_id=112287778886023&amp;request_time=1622190378504&amp;sdk=joey&amp;theme_color=%230084ff"
            style="
              padding: 0px;
              position: fixed;
              z-index: 2147483646;
              border-radius: 16px;
              top: auto;
              width: 247px;
              max-height: calc(100% - 80px);
              background: none;
              bottom: 95px;
              right: 4px;
              margin-right: 12px;
              animation: 6s ease-out 0s 1 normal none running
                slideInFromBottomDelay;
              height: 72px;
            "
            class="fb_customer_chat_bounce_in_v2 anchor_right"
          ></iframe
        ></span>
      </div>
      <div
        class="fb_dialog fb_dialog_advanced"
        style="overflow: visible; z-index: 2147483644;"
      >
        <div class="fb_dialog_content">
          <iframe
            name="blank_f34a7ae376ff78"
            width="60px"
            tabindex="-1"
            data-testid="bubble_iframe"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            scrolling="no"
            allow="encrypted-media"
            src="https://www.facebook.com/v3.0/plugins/customer_chat/bubble"
            class="fb_customer_chat_icon"
            style="
              margin: 0px 12px;
              padding: 0px;
              position: fixed;
              z-index: 2147483644;
              bottom: 24px;
              top: auto;
              height: 60px;
              width: 60px;
              border-radius: 29px;
              box-shadow: rgba(0, 0, 0, 0.15) 0px 4px 12px 0px;
              background: none;
              display: block;
              animation: 3s ease-out 0s 1 normal none running
                slideInFromBottomDelay;
              right: 12px;
            "
          ></iframe
          ><iframe
            name="unread_f34a7ae376ff78"
            tabindex="-1"
            data-testid="unread_iframe"
            frameborder="0"
            allowtransparency="true"
            allowfullscreen="true"
            scrolling="no"
            allow="encrypted-media"
            src="https://www.facebook.com/v3.0/plugins/customer_chat/bubble"
            style="
              bottom: 68px;
              position: fixed;
              width: 20px;
              height: 24px;
              z-index: 2147483645;
              border-radius: 4pt;
              background: none;
              right: 22px;
            "
          ></iframe>
        </div>
      </div>
    </div>
</template>

<script>
export default {
  name: "facebook",
};
</script>

<style>
</style>
