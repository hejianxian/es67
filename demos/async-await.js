const log = require('../utils/log');

const getTicket = async function(username) {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      resolve(`ticket-${username}`);
    }, 1000);
  });
};

const getUserInfo = async function() {
  return new Promise(function(resolve, reject) {
    setTimeout(() => {
      const userInfo = { username: 'hejx' };
      resolve(userInfo);
    }, 1000);
  });
};

const run = async function() {
  let userInfo = await getUserInfo();
  let ticket = await getTicket(userInfo.username);
  
  log(ticket);
};

run();