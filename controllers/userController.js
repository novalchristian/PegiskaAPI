import User from "../models/userModel.js";
import response from "../response/index.js";
import crypto from "crypto-js";

const { getContent, setContent } = response;

export const getAllUser = async (req, res) => {
  try {
    const getAllUser = await User.findAll();
    setContent(200, getAllUser);
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const getUser = async (req, res) => {
  try {
    const getUser = await User.findByPk(req.params.id);
    if (!getUser) {
      setContent(404, getUser);
      return res.status(404).json(getContent());
    } else {
      setContent(200, getUser);
      return res.status(200).json(getContent());
    }
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const postUser = async (req, res) => {
  try {
    const newUser = new User(req.body);
    newUser.password = crypto.AES.encrypt(
      newUser.password,
      process.env.AES_KEY
    ).toString();
    await newUser.save();
    setContent(200, "User Berhasil Ditambahkan");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const putUser = async (req, res) => {
  const cekId = await User.findByPk(req.params.id);
  if (!cekId) {
    setContent(404, cekId);
    return res.status(404).json(getContent());
  }

  try {
    const updateUser = await User.update(req.body, {
      where: { id_user: req.params.id },
    });
    await updateUser;
    setContent(200, "User Berhasil Diubah!");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export const delUser = async (req, res) => {
  const cekId = await User.findByPk(req.params.id);
  if (!cekId) {
    setContent(404, cekId);
    return res.status(404).json(getContent());
  }

  try {
    const deleteUser = await User.destroy({
      where: { id_user: req.params.id },
    });
    await deleteUser;
    setContent(200, "User Berhasil Dihapus!");
    return res.status(200).json(getContent());
  } catch (error) {
    setContent(500, error);
    return res.status(500).json(getContent());
  }
};

export default { delUser, putUser, getUser, postUser, getAllUser };
