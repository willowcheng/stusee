/**
 * Created by willowcheng on 15-09-19.
 */

$(document)
    .ready(function() {
        $('.ui.form')
            .form({
                fields: {
                    email: {
                        identifier  : 'email',
                        rules: [
                            {
                                type   : 'empty',
                                prompt : '请输入电子邮箱'
                            },
                            {
                                type   : 'email',
                                prompt : '请输入正确的邮箱地址'
                            }
                        ]
                    },
                    password: {
                        identifier  : 'password',
                        rules: [
                            {
                                type   : 'empty',
                                prompt : '请输入密码'
                            },
                            {
                                type   : 'length[6]',
                                prompt : '密码需要至少 6 个字符'
                            }
                        ]
                    }
                }
            })
        ;
    })
;