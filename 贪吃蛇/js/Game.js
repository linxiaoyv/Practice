// 游戏
// 构造函数(创建小蛇和食物对象)(地图)
// 初始化（调用方法 初始化小蛇和食物对象）
// 小蛇自动移动方法
// 按键改变方向

(function() {
  var that = null, time , lastKeyCode = -1;

  //游戏构造函数
  function Game(map) {
    this.food = new Food();
    this.snake = new Snake();
    this.map = map;
    that = this;
  }

  // 初始化
  Game.prototype.init = function() {
    this.food.init(this.map);
    this.snake.init(this.map);
    this.bindkey();
    time = 1000;  
   
    this.runSnake(this.food, this.map);
    console.log(lastKeyCode);
    console.log(time);
  };

  // 小蛇自动跑起来
  Game.prototype.runSnake = function(food, map) {
    var timeId = setInterval(
      function() {
        this.snake.move(this.food, this.map);

        // 限制小蛇活动范围
        // 地图边界
        var maxX = this.map.offsetWidth / this.snake.width,
          maxY = this.map.offsetHeight / this.snake.height;
        if (this.snake.body[0].x == maxX || this.snake.body[0].x < 0) {
          clearInterval(timeId);
          alert("游戏结束!");
          return;
        }
        if (this.snake.body[0].y == maxY || this.snake.body[0].y < 0) {
          clearInterval(timeId);
          alert("游戏结束!");
          return;
        }

        this.snake.init(this.map);

      }.bind(that),
      time
    );
  };

  // 按键
  Game.prototype.bindkey = function() {
    document.addEventListener(
      "keydown",
      function(e) {

        // 改变定时器时间
        if(lastKeyCode == e.keyCode){
          time = 100;
        }else{
          time = 300;
        }

        //改变小蛇移动方向
        switch (e.keyCode) {
          case 37:
            this.snake.direction = "left";
            break;
          case 38:
            this.snake.direction = "top";
            break;
          case 39:
            this.snake.direction = "right";
            break;
          case 40:
            this.snake.direction = "bottom";
            break;
        }
        lastKeyCode = e.keyCode;
      }.bind(that),
      false
    );
    
  };

  window.Game = Game;
})();
