const scpClient = require("scp2");
const ora = require("ora");
const chalk = require("chalk");
const log = console.log;
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
        log(chalk.white("开始上传文件.\n"));
        scpClient.scp("dist/", { ...server }, error => {
          spinner.stop();
          if (error) {
            log(chalk.red("文件上传失败.\n"));
            throw err;
          } else {
            log(chalk.green(`文件上传成功.准备重启服务.\n`));
            connect.emit("continue");
          }
        });
      });
    });
  })
  .on("continue", () => {
    connect.shell((err, stream) => {
      if (err) throw err;
      const command = `nginx -s reload\nexit\n`;
      stream
        .on("close", () => {
          log(chalk.green(`Successed! 成功发布到 ${server.host}`));
          connect.end();
        })
        .on("data", function(data) {
          log("OUTPUT: " + data);
        });
      stream.end(command);
    });
  })
  .connect({ ...server });
