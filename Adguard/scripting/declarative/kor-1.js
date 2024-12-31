/*******************************************************************************

    uBlock Origin Lite - a comprehensive, MV3-compliant content blocker
    Copyright (C) 2014-present Raymond Hill

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see {http://www.gnu.org/licenses/}.

    Home: https://github.com/gorhill/uBlock
*/

/* jshint esversion:11 */

'use strict';

// ruleset: kor-1

/******************************************************************************/

// Important!
// Isolate from global scope
(function uBOL_cssDeclarativeImport() {

/******************************************************************************/

const argsList = [["{\"selector\":\"aside#mAside > div[disp-attr]:has(> .content_sponsor) + div[disp-attr]\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"body.nate aside#mAside > div[disp-attr]:has(> .wing_nate) + div[disp-attr]\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".main-content > .content-article:not(:has(+ .content-aside > div[data-tiara-layer][class=\\\"box_side\\\"]))\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#content div[class^=\\\"basicList_list_\\\"] div:has(div[class^=\\\"adProduct_item_\\\"]):has(~ div)\",\"action\":[\"style\",\"height: 1px !important; visibility: hidden !important;\"]}","{\"selector\":\".seller_filter_area ~ div[class*=\\\"_list_\\\"] div[class^=\\\"adProduct_item\\\"]\",\"action\":[\"style\",\"visibility: hidden !important; height: 1px !important; padding: 0 !important;\"]}"],["{\"selector\":\"#board_read .board_main_top .member_reward_wrapper\",\"action\":[\"style\",\"margin-top: 20px !important; float: right !important; margin-right: 20px !important;\"]}","{\"selector\":\"#board_top .best_list\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#board_top > div > .top_best.best_list:has(+ .col div[id^=\\\"ad_\\\"])\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".container:has(~ div[style]#toTop) article.content\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}","{\"selector\":\".headding-news:has(~ div:not([style])#toTop) .col-md-8\",\"action\":[\"style\",\"margin-left: calc(50% - 384px) !important;\"]}"],["{\"selector\":\"div[data-mesh-id][data-testid] > div[id^=\\\"comp-\\\"]:has(form[id][class])\",\"action\":[\"style\",\"margin-top: -600px !important;\"]}"],["{\"selector\":\".body > .content.xe_content:not(:has(article))\",\"action\":[\"style\",\"width: auto !important;\"]}"],["{\"selector\":\".section-lefttop-center:has(> .mule-today)\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"div.section-leftmiddle-topmiddle.cf\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".xe_content\",\"action\":[\"style\",\"opacity: 1 !important;\"]}"],["{\"selector\":\".la\",\"action\":[\"style\",\"height: 75px !important; width: 75px !important; visibility: hidden !important;\"]}"],["{\"selector\":\".tabad\",\"action\":[\"style\",\"top: -100px !important;\"]}"],["{\"selector\":\"#top-sponsor\",\"action\":[\"style\",\"height: 60px !important; top: -60px !important; position: absolute !important; visibility: hidden !important;\"]}"],["{\"selector\":\"body.modal-open:has(> #academyMainModal a[href^=\\\"https://academy.prompie.com/banners/\\\"])\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"#shortcutArea\",\"action\":[\"style\",\"padding-left: 64px !important;\"]}","{\"selector\":\"#topSearchWrap\",\"action\":[\"style\",\"padding-bottom: 50px !important;\"]}","{\"selector\":\"div[class^=\\\"Layout-module_\\\"] #newsstand\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"#inner-content-body.hided\",\"action\":[\"style\",\"max-height: fit-content !important;\"]}"],["{\"selector\":\"#content-container\",\"action\":[\"style\",\"padding-top: 10px !important;\"]}"],["{\"selector\":\"#top-area > div[class*=\\\" \\\"] > div[class*=\\\" \\\"]:has(div:not([class]) ~ button)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[style^=\\\"display:\\\"] > div[style^=\\\"flex-basis\\\"]:has(~ .fvideo) .news_box\",\"action\":[\"style\",\"width: revert-layer !important;\"]}","{\"selector\":\"div[style^=\\\"display:\\\"] > div[style^=\\\"flex-basis\\\"]:has(~ .fvideo) .news_top\",\"action\":[\"style\",\"width: revert-layer !important;\"]}","{\"selector\":\"div[style^=\\\"display:\\\"] > div[style^=\\\"flex-basis\\\"]:has(~ .fvideo)\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".post-contents > div[style]\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".container-content > section[class*=\\\" \\\"] ~ main[class*=\\\" \\\"]\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\"#map_area\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".inner-body.hided\",\"action\":[\"style\",\"overflow-y: auto !important; max-height: none !important;\"]}"],["{\"selector\":\"#mw_mobile > .mw_icon_box\",\"action\":[\"style\",\"margin-top: 25px !important;\"]}","{\"selector\":\".main-top-banner + .box\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".banner_slot_top + #container .article_cover\",\"action\":[\"style\",\"top: 100px !important;\"]}"],["{\"selector\":\".news-view-wrap\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\"#zzbang_img\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#wrap > div[style*=\\\"height:\\\"][style^=\\\"position:\\\"] + header\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"article > div[class^=\\\"sc-\\\"]\",\"action\":[\"style\",\"grid-template-columns: none !important;\"]}","{\"selector\":\"body[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"html[style]\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".bodyHide\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".topBannerWrapper *\",\"action\":[\"style\",\"height: 1px !important;\"]}"],["{\"selector\":\".depthContentsWrap .productListWrap .searchList\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\"#allKillItemList > .item_list_wrap\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_1\",\"action\":[\"style\",\"width: 239px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_2\",\"action\":[\"style\",\"width: 239px !important; left: 239px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_3\",\"action\":[\"style\",\"width: 239px !important; left: 478px !important;\"]}","{\"selector\":\"#mbnRoll_001 > .mbnRollUnit > .pagen_4\",\"action\":[\"style\",\"width: 240px !important; left: 717px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_1\",\"action\":[\"style\",\"width: 363px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_2\",\"action\":[\"style\",\"width: 363px !important; left: 363px !important;\"]}","{\"selector\":\"#mbnRoll_yNow > .mbnRollUnit > .pagen_3\",\"action\":[\"style\",\"width: 363px !important; left: 726px !important;\"]}","{\"selector\":\"#yHeader .yesSearch .key_latest .lastest_word\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#ySContent .loginCont\",\"action\":[\"style\",\"margin-left: 200px !important;\"]}","{\"selector\":\"#yWelMid .yWelNowBook ul\",\"action\":[\"style\",\"margin-left: calc(50% - 436px) !important;\"]}","{\"selector\":\"#yWelMid .yWelNowBook\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#yWelTopMid .yWelTodayBook .tBCont .tBInfo .tb_readCon\",\"action\":[\"style\",\"width: calc(100% - 30px) !important;\"]}","{\"selector\":\"#yWelTopMid .yWelTodayBook\",\"action\":[\"style\",\"width: calc(100% - 240px) !important;\"]}","{\"selector\":\".mContRT .mbnZone\",\"action\":[\"style\",\"left: 94.5px !important;\"]}"],["{\"selector\":\"#entFlick\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\".article-adCover-div\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".content.partners-wrap\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\".social-after-title\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#SirenDiv\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".body.mwcphide\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\"#contentBody.bodyHide\",\"action\":[\"style\",\"height: 100% !important;\"]}"],["{\"selector\":\".content-full\",\"action\":[\"style\",\"height: auto !important;\"]}","{\"selector\":\"body\",\"action\":[\"style\",\"overflow-x: auto !important; overflow-y: auto !important;\"]}"],["{\"selector\":\".content_body > div[class^=\\\"lotto_\\\"]\",\"action\":[\"style\",\"filter: none !important; -webkit-filter: none !important;\"]}","{\"selector\":\".wrap.blocked .content_more_div\",\"action\":[\"style\",\"max-height: 100% !important;\"]}"],["{\"selector\":\".result_wrap\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\".column_content\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\"#content .ad_parent\",\"action\":[\"style\",\"height: 100% !important; overflow: auto !important;\"]}"],["{\"selector\":\".respons-edit > div[style].float-left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".grid-body.g-body\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"header > .header-body\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#journalist_card li\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".article_area .article_left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".container .contents > .subcontents:nth-child(1)\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}","{\"selector\":\"html:not([data-n-head]) .contents > .headline\",\"action\":[\"style\",\"margin-top: 0px !important; height: 70px !important;\"]}"],["{\"selector\":\".article_area > .article_left\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".ask_hamburger_wrapper\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".ask_wrapper .ask_title_zone\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".ask_wrapper.not_host\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\"html\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\".expanded > #user-container\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\".mo-new-header .header .show-ads\",\"action\":[\"style\",\"max-height: 54px !important;\"]}"],["{\"selector\":\".bch-main-wrapper > .right-cont\",\"action\":[\"style\",\"margin-right: calc(50% - 180px) !important; width: 100% !important;\"]}"],["{\"selector\":\".content\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".article-ad ~ p[style][class^=\\\"title\\\"]\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\"#id_my_menu_area ~ #main_sky_banner_area\",\"action\":[\"style\",\"margin-left: 685px !important;\"]}","{\"selector\":\"div[class^=\\\"main\\\"]#middle_area .academy.fleft:not(.iyua)\",\"action\":[\"style\",\"margin-left: calc(11.5%) !important;\"]}"],["{\"selector\":\".go_top.go_button\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".productDetailWrap > .contentsWrap\",\"action\":[\"style\",\"padding-bottom: 0px !important;\"]}"],["{\"selector\":\"#hotPlace.myBox\",\"action\":[\"style\",\"margin-left: calc(50% - 65px) !important;\"]}"],["{\"selector\":\".board_view .related_area\",\"action\":[\"style\",\"height: 300px !important;\"]}"],["{\"selector\":\"div[data-tiara-layer]:not([id])\",\"action\":[\"style\",\"margin-top: 0px !important; position: relative !important;\"]}"],["{\"selector\":\".td-pb-span8\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".site-footer\",\"action\":[\"style\",\"padding-bottom: 0px !important;\"]}","{\"selector\":\"body .td-header-wrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"div[style].clearfix > .nd-by-line\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".news_synthesis_sec .col.col_4\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".box__login #login_tab\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".box__login .box__login-member\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".mod-top > .main-promo\",\"action\":[\"style\",\"margin-left: calc(50% - 205px) !important;\"]}"],["{\"selector\":\".global-top\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".layout-main .main-menu\",\"action\":[\"style\",\"top: 0px !important;\"]}","{\"selector\":\".layout-main .panel.no-margin\",\"action\":[\"style\",\"padding-top: 50px !important;\"]}"],["{\"selector\":\"#wrap_cnts td[valign=\\\"top\\\"] #wrap_ctgr_new > div[id]\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#wrap_cnts td[valign=\\\"top\\\"] #wrap_ctgr_new\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"body[data-elementor-device-mode=\\\"desktop\\\"] div[itemprop=\\\"mainContentOfPage\\\"]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".news_doc #footer\",\"action\":[\"style\",\"position: static !important;\"]}"],["{\"selector\":\".td-is-sticky > .wpb_wrapper\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\"#newsBody\",\"action\":[\"style\",\"height: auto !important;\"]}"],["{\"selector\":\"#hidden1\",\"action\":[\"style\",\"display: block !important;\"]}"],["{\"selector\":\"#popupBody #nonmember_all .button_login2\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#popupBody #nonmember_all .left1\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"#welcomeMainBanner_welcome_tab\",\"action\":[\"style\",\"left: calc(50% - 186px) !important;\"]}"],["{\"selector\":\"div[class*=\\\"inner\\\"].column > div\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".inner-main [data-cloud*=\\\"_ad_\\\"] + div\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"div[class^=\\\"premium-lawyer\\\"] ~ a.goto-all-lawyers\",\"action\":[\"style\",\"margin-top: 40px !important;\"]}","{\"selector\":\"div[ng-if] > .lawyers-section.has-border-bottom\",\"action\":[\"style\",\"height: 250px !important;\"]}"],["{\"selector\":\"header .artc_ad\",\"action\":[\"style\",\"height: 130px !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"height: 100px !important;\"]}"],["{\"selector\":\".cs_news_area .cs_area\",\"action\":[\"style\",\"width: calc(100% - 2px) !important;\"]}","{\"selector\":\"li.area_guide\",\"action\":[\"style\",\"width: 96% !important;\"]}"],["{\"selector\":\".contentBox > .topNews .icon-list\",\"action\":[\"style\",\"border-top: none !important;\"]}","{\"selector\":\".contentBox > .topNews > .con-L\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\"[class][itemtype*=\\\"//schema.org/\\\"] .markdown\",\"action\":[\"style\",\"max-width: 100% !important; flex-basis: 100% !important;\"]}","{\"selector\":\"[class][itemtype*=\\\"//schema.org/\\\"] > .center\",\"action\":[\"style\",\"width: 100% !important; flex-basis: 100% !important;\"]}"],["{\"selector\":\".box-skin .mobile-popular\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\".thisTimeNews > ul\",\"action\":[\"style\",\"border-right: none !important; width: 100% !important;\"]}"],["{\"selector\":\"#contentsBox #login_box\",\"action\":[\"style\",\"width: 350px !important; float: right !important; border-bottom: solid 2px #da3b40 !important; border-left: solid 2px #da3b40 !important;\"]}"],["{\"selector\":\".feature_index .box_user\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".wide_layout .wrap_srch_res .wrap_sort\",\"action\":[\"style\",\"width: auto !important;\"]}","{\"selector\":\".wide_layout .wrap_srch_res .wrap_tab\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".wide_layout .wrap_srch_res [class*=\\\"prod_type2\\\"]\",\"action\":[\"style\",\"width: 1275px !important; border-left: 1px solid #e4e4e4 !important; background-image: none !important;\"]}"],["{\"selector\":\".MapMain > #map\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"form[name=\\\"loginForm\\\"][action*=\\\"login.yp\\\"] > table\",\"action\":[\"style\",\"margin-left: calc(25% - 27px) !important;\"]}"],["{\"selector\":\"#index > div[id^=\\\"index_box\\\"][class]:not(.index_row_full)\",\"action\":[\"style\",\"margin-left: calc(50% - 145.5px) !important;\"]}"],["{\"selector\":\"#loginFormWrite\",\"action\":[\"style\",\"margin-left: 25% !important;\"]}","{\"selector\":\".byWd .matchingContWrap\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\"header ~ header\",\"action\":[\"style\",\"margin-top: 50px !important;\"]}"],["{\"selector\":\".articleView + .aside .smallbox + .smallbox\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\".content_area .todayBox\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".inner_contents\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}"],["{\"selector\":\".top-keyword\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\"div[class^=\\\"ppom_newSub\\\"] .top_newSub .left_wt\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#main_sec\",\"action\":[\"style\",\"margin-top: 100px !important;\"]}"],["{\"selector\":\".sect-movie-chart > ol:nth-child(2) > li\",\"action\":[\"style\",\"margin-left: 130px !important;\"]}","{\"selector\":\".wrap-login > .sect-login\",\"action\":[\"style\",\"margin-left: calc(50% - 270px) !important;\"]}"],["{\"selector\":\"html[class*=\\\"pc-size\\\"] .m-contents > .side-area > .analysis-ranking1\",\"action\":[\"style\",\"top: 475px !important; left: auto !important; width: 100% !important;\"]}","{\"selector\":\"html[class*=\\\"pc-size\\\"] .m-contents > .side-area > div:nth-child(-1n+4)\",\"action\":[\"style\",\"top: auto !important; left: auto !important;\"]}","{\"selector\":\"html[class*=\\\"pc-size\\\"] .side-area + .m-guide\",\"action\":[\"style\",\"margin-bottom: 150px !important;\"]}"],["{\"selector\":\".news-cate + .news-box\",\"action\":[\"style\",\"padding-right: 0px !important;\"]}"],["{\"selector\":\"div[class~=\\\"hospital-images-box\\\"] ~ .row > .col-8\",\"action\":[\"style\",\"max-width: 100% !important; flex: none !important;\"]}"],["{\"selector\":\"table[style][width][cellspacing][cellpadding] tr[valign] > td[style] > div[style]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".gdl-page-item\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"div[style].row.no-gutters > .col-6\",\"action\":[\"style\",\"max-width: 75% !important; flex-basis: 75% !important;\"]}"],["{\"selector\":\"#primary\",\"action\":[\"style\",\"width: 100% !important\"]}"],["{\"selector\":\".ebs_item .inner > div[class]\",\"action\":[\"style\",\"width: 50% !important;\"]}"],["{\"selector\":\"header.main-header\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\".bot-content-area .mid-util-wrap > div\",\"action\":[\"style\",\"width: calc(50% - 5px) !important;\"]}"],["{\"selector\":\".errorlay .new-login-warp\",\"action\":[\"style\",\"padding-top: 20px !important; margin-left: calc(50% - 232.5px) !important;\"]}"],["{\"selector\":\"#pnlContainer .con_b > .reply_b\",\"action\":[\"style\",\"margin: 0px auto !important;\"]}"],["{\"selector\":\".wrap_home .section_spot .best_qna_wrap\",\"action\":[\"style\",\"width: 100% !important;\"]}","{\"selector\":\".wrap_home .section_spot\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#contentmemo ~ .adsbygoogle > div[style^=\\\"font-size:\\\"]\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#section_body\",\"action\":[\"style\",\"border-top: none !important;\"]}"],["{\"selector\":\".content_join\",\"action\":[\"style\",\"margin-left: calc(50% - 200px) !important;\"]}"],["{\"selector\":\"#body_wrap > #body_main > div[style]:nth-child(1), #body_wrap > #body_main > div[style]:nth-child(3)\",\"action\":[\"style\",\"width: calc(50% - 5px) !important;\"]}"],["{\"selector\":\"#header\",\"action\":[\"style\",\"margin-bottom: 0px !important;\"]}","{\"selector\":\".area_ranking\",\"action\":[\"style\",\"top: 400px !important;\"]}"],["{\"selector\":\".login_inputbox .inner\",\"action\":[\"style\",\"width: calc(100% - 115px) !important;\"]}","{\"selector\":\".login_inputbox\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"#searchArea .title_wrap\",\"action\":[\"style\",\"width: calc(100% - 50px) !important;\"]}","{\"selector\":\"#searchArea .viewType_L .product_list li .prd_info\",\"action\":[\"style\",\"width: 700px !important;\"]}","{\"selector\":\".wrap_list .standard\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".banner-open .contents\",\"action\":[\"style\",\"padding-top: 68px !important;\"]}"],["{\"selector\":\".content\",\"action\":[\"style\",\"margin-top: 0px !important;\"]}"],["{\"selector\":\".goods_list_tit\",\"action\":[\"style\",\"padding-top: 0px !important;\"]}"],["{\"selector\":\"div.sc-64vosk-0.jIkGEl\",\"action\":[\"style\",\"margin-bottom: 10px !important;\"]}"],["{\"selector\":\".user_view\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\".erd-container\",\"action\":[\"style\",\"width: 100% !important;\"]}"],["{\"selector\":\"header\",\"action\":[\"style\",\"top: 0px !important;\"]}"],["{\"selector\":\"body\",\"action\":[\"style\",\"overflow: auto !important;\"]}"],["{\"selector\":\"header .row[style]\",\"action\":[\"style\",\"margin-bottom: 35px !important;\"]}"]];

const hostnamesMap = new Map([["search.daum.net",0],["news.daum.net",1],["search.shopping.naver.com",2],["bbs.ruliweb.com",3],["koreatimes.net",4],["ponh.info",5],["5donews.co.kr",6],["mule.co.kr",7],["meeco.kr",8],["aagag.com",9],["t.hi098123.com",10],["boardlife.co.kr",11],["academy.prompie.com",12],["www.naver.com",13],["ggulzam.zal.kr",14],["economist.co.kr",15],["tftps.gg",16],["fow.kr",17],["3277532532.reviewtoday.net",18],["maple.gg",19],["courtauctionmap.com",20],["jovelys.ulog.kr",21],["coolfun.zal.kr",21],["etoland.co.kr",22],["m.hub.zum.com",23],["enterdiary.com",24],["hotplacehunter.co.kr",24],["mystylezip.com",24],["carandmore.co.kr",24],["maxmovieen.com",24],["tenbizt.com",24],["mobilitytv.co.kr",24],["thehousemagazine.kr",24],["tminews.co.kr",24],["capress.kr",24],["youtu.co",24],["dfast.kr",24],["mememedia.co.kr",24],["newautopost.co.kr",24],["gall.dcinside.com",25],["m.sports.chosun.com",26],["m.sportschosun.com",26],["atlantachosun.com",27],["issueclick.kr",[28,29]],["curiosityblog.co.kr",29],["m.shop.interpark.com",30],["shopping.interpark.com",31],["ygosunews.com",[32,65]],["www.auction.co.kr",33],["yes24.com",34],["m.ytn.co.kr",35],["ktestone.com",36],["chchclub.com",37],["thepumpkin.io",38],["withcast.co.kr",39],["3.37.104.109",40],["donthellgo.com",41],["marupost.mycafe24.com",42],["lottoen.com",43],["simcong.com",44],["gorani.kr",45],["dodot.cafe24.com",46],["loapost.cafe24.com",46],["jiavr.xyz",46],["ohohz.cafe24.com",46],["bloter.net",47],["news.unn.net",48],["www.donga.com",49],["heraldpop.com",50],["chaoscube.co.kr",51],["news.heraldcorp.com",52],["heraldcorp.com",52],["pushoong.com",53],["topstarnews.net",54],["m.inven.co.kr",55],["blockchainhub.kr",56],["ppss.kr",57],["wowtv.co.kr",58],["kidkids.net",59],["m.ruliweb.com",60],["lotteon.com",61],["evape.kr",62],["fomos.kr",63],["focus.daum.net",64],["autopostkorea.com",[65,66]],["newdaily.co.kr",67],["mk.co.kr",68],["memberssl.auction.co.kr",69],["auction.co.kr",70],["orbi.kr",71],["web.humoruniv.com",72],["haninvegas.com",73],["news.jtbc.co.kr",74],["sundaynewsusa.com",75],["instructivehumility.com",76],["news.oasisfeed.com",76],["ydailynewsis.blogspot.com",77],["aladin.co.kr",78],["kharn.kr",79],["v.daum.net",80],["lawtalk.co.kr",81],["medipana.com",82],["m.dailypharm.com",83],["dailypharm.com",83],["drapt.com",84],["koreadaily.com",85],["hashcode.co.kr",86],["pinpointnews.co.kr",87],["news.nate.com",88],["uwayapply.com",89],["encar.com",90],["shoppinghow.kakao.com",91],["diningcode.com",92],["ypbooks.co.kr",93],["serieamania.com",94],["jobkorea.co.kr",95],["m.joynews24.com",96],["joynews24.com",96],["m.inews24.com",96],["inews24.com",96],["newsis.com",97],["unsin.co.kr",98],["fnnews.com",99],["ppomppu.co.kr",100],["all-mice.co.kr",101],["cgv.co.kr",102],["paxnet.co.kr",103],["bigkinds.or.kr",104],["modoodoc.com",105],["noteforum.co.kr",106],["miraetv.net",107],["sports.chosun.com",108],["funnyissue.com",109],["googlewph.com",109],["gyeomipang.co.kr",109],["www.ebs.co.kr",110],["megabox.co.kr",111],["quasarzone.com",112],["edit.incruit.com",113],["m.nocutnews.co.kr",114],["kin.naver.com",115],["te31.com",116],["news.naver.com",117],["sso.pping.kr",118],["edufindkorea.com",119],["www.nate.com",120],["sign.dcinside.com",121],["compuzone.co.kr",122],["toomics.com",123],["windowsforum.kr",124],["berryjam.co.kr",125],["community.rememberapp.co.kr",126],["ruliweb.com",127],["www.erdcloud.com",128],["spotv120.com",129],["spotv121.com",129],["spotv122.com",129],["spotv123.com",129],["spotv124.com",129],["spotv125.com",129],["spotv126.com",129],["spotv127.com",129],["spotv128.com",129],["spotv129.com",129],["spotv130.com",129],["spotv131.com",129],["spotv132.com",129],["spotv133.com",129],["spotv134.com",129],["spotv135.com",129],["spotv136.com",129],["spotv137.com",129],["spotv138.com",129],["newtoki466.com",130],["newtoki467.com",130],["newtoki468.com",130],["newtoki489.com",130],["newtoki490.com",130],["newtoki491.com",130],["newtoki492.com",130],["newtoki493.com",130],["newtoki494.com",130],["newtoki495.com",130],["newtoki496.com",130],["newtoki497.com",130],["newtoki498.com",130],["2cpu.co.kr",131]]);

const entitiesMap = new Map(undefined);

const exceptionsMap = new Map(undefined);

self.declarativeImports = self.declarativeImports || [];
self.declarativeImports.push({ argsList, hostnamesMap, entitiesMap, exceptionsMap });

/******************************************************************************/

})();

/******************************************************************************/
