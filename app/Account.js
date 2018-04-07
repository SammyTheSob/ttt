/*
 * JS for Account generated by Appery.io
 */

Apperyio.getProjectGUID = function() {
    return '3f7f842c-ce23-458a-bb70-b956c5482179';
};

function navigateTo(outcome, useAjax) {
    Apperyio.navigateTo(outcome, useAjax);
}

function adjustContentHeight() {
    Apperyio.adjustContentHeightWithPadding();
}

function adjustContentHeightWithPadding(_page) {
    Apperyio.adjustContentHeightWithPadding(_page);
}

function setDetailContent(pageUrl) {
    Apperyio.setDetailContent(pageUrl);
}

Apperyio.AppPages = [{
    "name": "Mapa",
    "location": "Mapa.html"
}, {
    "name": "Products",
    "location": "Products.html"
}, {
    "name": "Account",
    "location": "Account.html"
}];

function Account_js() {

    /* Object & array with components "name-to-id" mapping */
    var n2id_buf = {
        'mobilebutton_11': 'Account_mobilebutton_11',
        'mobileworkarea_10': 'Account_mobileworkarea_10',
        'mobiletextinput_25': 'Account_mobiletextinput_25',
        'mobiletextinput_27': 'Account_mobiletextinput_27',
        'mobiletextinput_26': 'Account_mobiletextinput_26',
        'mobileselectmenu_30': 'Account_mobileselectmenu_30',
        'mobileselectmenu_30-0': 'Account_mobileselectmenu_30-0',
        'mobilecheckboxgroup_20': 'Account_mobilecheckboxgroup_20',
        'mobilecheckbox_21': 'Account_mobilecheckbox_21',
        'mobilebutton_33': 'Account_mobilebutton_33',
        'mobilelist_3': 'Account_mobilelist_3',
        'mobilelistitem_4': 'Account_mobilelistitem_4',
        'mobilelistitembutton_5': 'Account_mobilelistitembutton_5',
        'mobilelistitem_6': 'Account_mobilelistitem_6',
        'mobilelistitembutton_7': 'Account_mobilelistitembutton_7',
        'mobilelistitem_8': 'Account_mobilelistitem_8',
        'mobilelistitembutton_9': 'Account_mobilelistitembutton_9'
    };

    if ("n2id" in window && window.n2id !== undefined) {
        $.extend(n2id, n2id_buf);
    } else {
        window.n2id = n2id_buf;
    }

    /*
     * Nonvisual components
     */

    Apperyio.mappings = Apperyio.mappings || {};

    Apperyio.datasources = Apperyio.datasources || {};

    Apperyio.CurrentScreen = 'Account';
    _.chain(Apperyio.mappings).filter(function(m) {
        return m.homeScreen === Apperyio.CurrentScreen;
    }).each(Apperyio.UIHandler.hideTemplateComponents);

    /*
     * Events and handlers
     */

    // On Load
    var Account_onLoad = function() {
            Account_elementsExtraJS();

            Account_deviceEvents();
            Account_windowEvents();
            Account_elementsEvents();
        };

    // screen window events


    function Account_windowEvents() {

        $('#Account').bind('pageshow orientationchange', function() {
            var _page = this;
            adjustContentHeightWithPadding(_page);
        });

    };

    // device events


    function Account_deviceEvents() {
        document.addEventListener("deviceready", function() {

        });
    };

    // screen elements extra js


    function Account_elementsExtraJS() {
        // screen (Account) extra code

        /* mobileselectmenu_30 */

        $("#Account_mobileselectmenu_30").parent().find("a.ui-btn").attr("tabindex", "10");

        /* mobilelist_3 */

        listView = $("#Account_mobilelist_3");
        theme = listView.attr("data-theme");
        if (typeof theme !== 'undefined') {
            var themeClass = "ui-btn-up-" + theme;
            listItem = $("#Account_mobilelist_3 .ui-li-static");
            $.each(listItem, function(index, value) {
                $(this).addClass(themeClass);
            });
        }

        /* mobilelistitem_4 */

        /* mobilelistitem_6 */

        /* mobilelistitem_8 */

    };

    // screen elements handler


    function Account_elementsEvents() {
        $(document).on("click", "a :input,a a,a fieldset label", function(event) {
            event.stopPropagation();
        });

        $(document).off("click", '#Account_mobileheader1 [name="mobilebutton_11"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    $('[id="Account_panel_menu"]').panel("open");

                }
            },
        }, '#Account_mobileheader1 [name="mobilebutton_11"]');

        $(document).off("click", '#Account_panel_menu [name="mobilelistitem_4"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Mapa', {
                        reverse: false
                    });

                }
            },
        }, '#Account_panel_menu [name="mobilelistitem_4"]');

        $(document).off("click", '#Account_panel_menu [name="mobilelistitem_6"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Products', {
                        reverse: false
                    });

                }
            },
        }, '#Account_panel_menu [name="mobilelistitem_6"]');

        $(document).off("click", '#Account_panel_menu [name="mobilelistitem_8"]').on({
            click: function(event) {
                if (!$(this).attr('disabled')) {
                    Apperyio.navigateTo('Account', {
                        reverse: false
                    });

                }
            },
        }, '#Account_panel_menu [name="mobilelistitem_8"]');

    };

    $(document).off("pagebeforeshow", "#Account").on("pagebeforeshow", "#Account", function(event, ui) {
        Apperyio.CurrentScreen = "Account";
        _.chain(Apperyio.mappings).filter(function(m) {
            return m.homeScreen === Apperyio.CurrentScreen;
        }).each(Apperyio.UIHandler.hideTemplateComponents);
    });

    Account_onLoad();
};

$(document).off("pagecreate", "#Account").on("pagecreate", "#Account", function(event, ui) {
    Apperyio.processSelectMenu($(this));
    Account_js();
});