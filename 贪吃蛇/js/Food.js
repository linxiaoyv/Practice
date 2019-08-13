//食物（宽，高，x，y，颜色）
// 1.构造
// 2.初始化（地图）
// 3.删除

(function() {
  var elements = [];

  //构造食物函数(属性)
  function Food(width, height, x, y, color) {
    this.width = width || 20;
    this.height = height || 20;
    this.x = x || 0;
    this.y = y || 0;
    this.color = color || "#666696";
  }

  //   食物样式初始化
  Food.prototype.init = function(map) {
    //   清空食物
    remove();

    var div = document.createElement("div");
    map.appendChild(div);
    div.style.width = this.width + "px";
    div.style.borderRadius = "50%";

    div.style.height = this.height + "px";
    div.style.backgroundColor = this.color;
    div.style.position = "absolute";
    this.x =
      parseInt((Math.random() * map.offsetWidth) / this.width) * this.width +
      "px";
    this.y =
      parseInt((Math.random() * map.offsetHeight) / this.height) * this.height +
      "px";
    div.style.left = this.x;
    div.style.top = this.y;

    // 食物存储进elements数组
    elements.push(div);
  };

  //   清空elements数组
  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
      elements.splice(i, 1);
    }
  }

  window.Food = Food;
})();
