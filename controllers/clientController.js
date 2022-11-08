import Client from "../models/clientModels.js";
import response from "../response/index.js";
import crypto from "crypto-js";
import { Sequelize } from "sequelize";

const { getContent, setContent } = response;

export const getAllClient = async (req, res) => {
  try {
    const getAllClient = await Client.findAll();
    setContent(200, getAllClient);
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const postClient = async (req, res) => {
  try {
    if (req.file == undefined) {
      setContent(201, "Image upload failed.");
      return res.status(201).json(getContent());
    } else {
      const newClient = new Client(req.body);
      newClient.clientURL = "gambar/client/" + req.file.filename;
      await newClient.save();
      setContent(200, "Client Berhasil Ditambahkan");
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export default { getAllClient, postClient };
