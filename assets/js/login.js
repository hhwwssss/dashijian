$(function () {
  $('#go2Reg').on('click', function () {
    $('.login-wrap').hide()
    $('.reg-wrap').show()
  })
  $('#go2Login').on('click', function () {
    $('.login-wrap').show()
    $('.reg-wrap').hide()
  })
})