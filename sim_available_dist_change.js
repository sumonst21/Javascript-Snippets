function sim_available_dist_change(elm) {
    var elmSelect = nc(elm);
//alert(elmSelect);
    elmSelect.parent('.sim-area-wrap').removeClass('has-error');
    elmSelect.parent('.sim-area-wrap').addClass('loading');
    var _district = elmSelect.val();
    var nid = elmSelect.data("node");
    if (_district == '0') {
        elmSelect.parent('.sim-area-wrap').addClass('has-error');
        elmSelect.parent('.sim-area-wrap').removeClass('loading');
        return '';
    } else {
        var url = Drupal.settings.basePath + 'sim_get_numbers/' + nid;
        nc.ajax({
            url: url,
            type: "post",
            data: {district: 'dhaka'},
            success: function (data) {
                nc('#sim-number-wrap').append(data);
                elmSelect.parent('.sim-area-wrap').removeClass('loading');
                nc('.row-number-wrap').removeClass('hidden');
                if (nc('#sim-number-wrap').find('input[name="sim_number"]').length > 0) {
                    nc('.btn-addto-cart').removeClass('disabled');
                }
            }
        });
    }

}
