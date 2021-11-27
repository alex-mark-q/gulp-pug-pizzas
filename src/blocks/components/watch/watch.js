let unlock = !0;
let videoPlay = document.querySelector(".playd");

videoPlay && videoPlay.addEventListener("click", (function(e) {
  console.log("Say hello");
  let t = document.querySelector(".main-video__link"),
      l = document.querySelector(".video-main__circle");
      
  l.classList.add("_active"), l.addEventListener("transitionend", (function e() {
    t.play(), popup_open("video-main"), l.removeEventListener("transitionend", e)
  }))

}));

function popup_open(e, t = "") {
  document.querySelectorAll(".popup._active").length > 0 && popup_close("", !1);
  let l = document.querySelector(".popup_" + e);
  if (l && unlock) {
    if ("" != t && null != t) {
      document.querySelector(".popup_video").querySelector(".popup__video").innerHTML = '<iframe src="https://www.youtube.com/embed/' + t + '?autoplay=1"  allow="autoplay; encrypted-media" allowfullscreen></iframe>'
    }
    document.querySelector(".menu__body._active") || body_lock_add(500), l.classList.add("_active"), history.pushState("", "", "#" + e)
  }
}
function popup_close(e, t = !0) {
  if (unlock) {
    if (e) {
      let t = e.querySelector(".popup__video");
      t && (t.innerHTML = ""), e.classList.remove("_active")
    } else
      for (let e = 0; e < popups.length; e++) {
        const t = popups[e];
        let l = t.querySelector(".popup__video");
        l && (l.innerHTML = ""), t.classList.remove("_active")
      }
    if (!document.querySelector(".menu__body._active") && t && body_lock_remove(500), history.pushState("", "", window.location.href.split("#")[0]), e.classList.contains("popup_video-main")) {
      document.querySelector(".main-video__link").pause(), document.querySelector(".video-main__circle").classList.remove("_active")
    }
  }
}
// modules.define('watch', ['i-bem-dom'], function(provide, bemDom) {

// provide(bemDom.declBlock(this.name, {
//     onSetMod: {
//         js: {
//             inited: function() {
//               console.log("Say hello");
//             }
//         }
//     }
// }));

// });
