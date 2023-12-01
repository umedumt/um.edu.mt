function UoMJSOnLoad() {
 if (window.location.href == 'https://accounts.um.edu.mt/sign-in/login-accounts.php' ||
     window.location.pathname.substring(0, 6) == 'https://www.um.edu.mt/wifi/') {
   return;
 }

 var LoginInfo = document.getElementById('LoginInfo');
 if (LoginInfo === null) {
  setTimeout('UoMJSOnLoad()', 100);
  return;
 }
 LoginInfo.innerHTML = '<a href="https://accounts.um.edu.mt/sign-in/" id="tempuomsignin" target="_top">Sign&nbsp;In</a>';
}
UoMJSOnLoad();


