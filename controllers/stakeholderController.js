import Stakeholder from "../models/stakeholderModels.js";
import response from "../response/index.js";
import crypto from "crypto-js";
import { Sequelize } from "sequelize";

const { getContent, setContent } = response;

export const getAllStakeholder = async (req, res) => {
  try {
    const getAllStakeholder = await Stakeholder.findAll();
    setContent(200, getAllStakeholder);
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const postStakeholder = async (req, res) => {
  try {
    if (req.file == undefined) {
      setContent(201, "Image upload failed.");
      return res.status(201).json(getContent());
    } else {
      const newStakeholder = new Stakeholder(req.body);
      newStakeholder.stakeholderURL = "gambar/stakeholder/" + req.file.filename;
      await newStakeholder.save();
      setContent(200, "Stakeholder Berhasil Ditambahkan");
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export default { getAllStakeholder, postStakeholder };
