//小蛇
//构造函数（方向，宽高）
// 初始化（地图）
// 移动（吃食物）（食物，地图）
// 删除

(function() {
  var elements = [];

  // 构造小蛇函数
  function Snake(width, height, direction) {
    this.width = width || 20;
    this.height = height || 20;
    this.direction = direction || "right";
    this.body = [
      { x: 6, y: 2, color: "black" },
      { x: 5, y: 2, color: "black" },
      { x: 4, y: 2, color: "black" }
    ];
  }

  // 小蛇初始化
  Snake.prototype.init = function(map) {
    // 清空小蛇数组
    remove();


    // 画小蛇样式
    for (var i = this.body.length - 1; i >= 0; i--) {
      var div = document.createElement("div");
      map.appendChild(div);
      div.style.width = this.width + "px";
      div.style.height = this.height + "px";
      div.style.backgroundColor = this.body[i].color;
      div.style.borderRadius = "50%";
      div.style.position = "absolute";
      div.style.left = this.body[i].x * this.width + "px";
      div.style.top = this.body[i].y * this.height + "px";
      
    // 小蛇储存进elements数组
    elements.push(div);
    }


  };


  // 小蛇移动
  Snake.prototype.move = function(food,map) {
    //身体
    for (var i = this.body.length - 1; i > 0; i--) {
      this.body[i].x = this.body[i - 1].x;
      this.body[i].y = this.body[i - 1].y;
      // this.body[i].color = this.body[i - 1].color;
    }
    //头
    switch (this.direction) {
      case "left":
        this.body[0].x -= 1;
        break;
      case "top":
        this.body[0].y -= 1;
        break;
      case "right":
        this.body[0].x += 1;
        break;
      case "bottom":
        this.body[0].y += 1;
        break;
    }

    // 吃食物
    // 小蛇横纵坐标
    snakeX = this.body[0].x*this.width + "px";
    snakeY = this.body[0].y*this.height + "px";

    // 吃到了
    if(snakeX==food.x&&snakeY==food.y){
        food.init(map);
        var last = this.body[this.body.length-1];
        this.body.push(
            {
                x:last.x,
                y:last.y,
                color:last.color
            }
        )
    }
  };

  // 清空小蛇数组
  function remove() {
    for (var i = elements.length - 1; i >= 0; i--) {
      elements[i].parentNode.removeChild(elements[i]);
      elements.splice(i,1);
    }
  }

  window.Snake = Snake;
})();
