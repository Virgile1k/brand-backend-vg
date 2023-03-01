import Message from "../models/Message.js";

class messageController {
  static async postMessage(req, res) {
    try {
      const newMessage = await Message.create(req.body);
      if (!newMessage) {
        return res.status(404).json({
          message: "no message created",
        });
      }
      return res.status(201).json({
        message: "message successfuly send",
        data: newMessage,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: error,
      });
    }
  }
  static async getAllMessage(req, res) {
    try {
      const message = await Message.find();
      if (!message) {
        return res.status(404).json({
          message: "no message found",
        });
      }
      return res.status(200).json({
        message: `${message.length} messages found`,
        data: message,
      });
    } catch (error) {
      console.log(error);
      return res.status(404).json({
        message: error,
      });
    }
  }
}
export default messageController;
