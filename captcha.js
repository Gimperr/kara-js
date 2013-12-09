DOMContentLoaded("DOMContentLoaded", function(){
                                $("#captchaField").before("<div style='width: 300px; height: 70px; background-color: white;'><a href='#' id='captchaClickHere' style='vertical-align: middle; align: center;'>Click here</a></div>");
                                $("#captchaClickHere").click(function (event) {
                                        event.preventDefault();
                                        d = new Date();
                                        $(this).parent().after("<a style='display: block; width: 300px; height: 70px; border: 1px solid #000000;' href='#' id='reloadCaptcha'><img id='captchaImage' src='/captcha.php?t="+d.getTime()+"' /></a>");
                                        $("#reloadCaptcha").click(function (ev) {
                                                ev.preventDefault();
                                                d = new Date();
                                                $("#captchaImage").attr("src", "/captcha.php?t="+d.getTime());
                                        });
                                        $(this).parent().hide();
                                });
}, false);
