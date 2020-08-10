const scpClient = require("scp2");
const ora = require("ora");
const chalk = require("chalk");
console.log(process.env.NODE_ENV);
const server = require("./config")[process.env.NODE_ENV];

const spinner = ora(`正在发布到 ${server.host} ...`);

const sshClient = require("ssh2").Client;

const connect = new sshClient();
connect
  .on("ready", () => {
    connect.exec(`rm -rf ${server.path}`, (err, stream) => {
      if (err) throw err;
      stream.on("close", () => {
        spinner.start();
        scpClient.scp(
          "dist/",
          {
            ...server
          },
          error => {
            spinner.stop();
            if (error) {
              console.log(chalk.red("发布失败.\n"));
              throw err;
            } else {
              console.log(chalk.green(`Success! 成功发布到 ${server.host}`));
            }
          }
        );
        connect.end();
      });
    });
  })
  .connect({ ...server });
