const {
  server: { RpcServer }, //可以使用它创建RPC服务
  /**
   * registry 是一个注册中心，用于维护服务的注册信息，帮助服务节点和客户端找到对方
   */
  registry: { ZookeeperRegistry }, //可以使用它创建Zookeeper注册中心
} = require("sofa-rpc-node");
