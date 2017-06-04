// 生成器的主要功能是： 通过一段程序，持续迭代或枚举出符合某个公式或算法的有序数列中的元素。

// 传统的编程语言，早有异步编程的解决方案（其实是多任务的解决方案）。其中有一种叫做"协程"（coroutine），意思是多个线程互相协作，完成异步任务。

function* getTicket(username){
  yield setTimeout(() => {
    return `ticket-${username}`;
  }, 500);
};

function* getUserInfo() {
  yield setTimeout(() => {
    return {
      username: 'hejx'
    };
  }, 1000);
};

function* gen() {
  let userInfo = yield* getUserInfo();
  let ticket = yield* getTicket(userInfo.value.username);
  
  return ticket;
};

const g = gen();
console.log(g.next();

