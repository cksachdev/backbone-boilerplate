import $ from "jquery";
import HeaderView from "./views/global/header";
import FooterView from "./views/global/footer";
import Backbone from "backbone";
import "./sass/styles.scss";

$(function () {
  // $("#header").remove();
  // $("#footer").remove();
  Backbone.history.stop();
  let header = new HeaderView();
  let footer = new FooterView();
  $("#header").html(header.render().$el);
  $("#footer").html(footer.render().$el);
});
if (module.hot) {
  module.hot.accept()
}